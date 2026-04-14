import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM = `Ты помощник сервиса Артель — AI-автоматизация для малого бизнеса России.
Тарифы: Старт (2900 ₽/мес) — бот FAQ+напоминания+автовозврат;
Рост (5900 ₽/мес) — бот + SMM 8 постов/мес;
Полный (9900 ₽/мес) — всё + еженедельная AI-аналитика.
Пиши коротко, тепло, конкретно. 2-3 предложения. Без заголовков.`

export async function POST(req: NextRequest) {
  try {
    const { niche, pains, tariff } = await req.json()

    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 200,
      system: SYSTEM,
      messages: [
        {
          role: 'user',
          content: `Ниша: ${niche}. Боли: ${Array.isArray(pains) ? pains.join(', ') : pains}. Рекомендованный тариф: ${tariff}. Объясни почему этот тариф подходит и какие боли закрывает.`,
        },
      ],
    })

    const explanation =
      message.content[0].type === 'text' ? message.content[0].text : null

    return NextResponse.json({ explanation })
  } catch (err) {
    console.error('tariff-explain error:', err)
    return NextResponse.json({ explanation: null }, { status: 500 })
  }
}
