import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'

const TariffPicker = dynamic(() => import('@/components/TariffPicker'), { ssr: false })
import PainVsSolution from '@/components/PainVsSolution'
import Pains from '@/components/Pains'
import Stats from '@/components/Stats'
import BotScreenshot from '@/components/BotScreenshot'
import Roles from '@/components/Roles'
import BusinessNiches from '@/components/BusinessNiches'
import Timeline from '@/components/Timeline'
import Calculator from '@/components/Calculator'
import Comparison from '@/components/Comparison'
import Reviews from '@/components/Reviews'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Niches from '@/components/Niches'
import CasesTeaser from '@/components/CasesTeaser'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Артель — AI-автоматизация для малого бизнеса',
  description:
    'Сайт привлекает, AI-бот конвертирует, клиенты возвращаются. Подключите автоматизацию для своего бизнеса от 2 900 ₽/мес.',
  openGraph: {
    title: 'Артель — AI-автоматизация для малого бизнеса',
    description:
      'Сайт привлекает, AI-бот конвертирует, клиенты возвращаются. Подключите автоматизацию для своего бизнеса от 2 900 ₽/мес.',
    url: 'https://artel.ai',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainVsSolution />
      <Pains />
      <Stats />
      <BotScreenshot />
      <Roles />
      <BusinessNiches />
      <Timeline />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              Какой тариф подойдёт вам?
            </h2>
            <p className="text-gray-500">Ответьте на 2 вопроса — подберём решение под ваш бизнес</p>
          </div>
          <TariffPicker />
        </div>
      </section>

      <Calculator />
      <Comparison />
      <Reviews />
      <HowItWorks />
      <Pricing />
      <Niches />
      <CasesTeaser />
      <Contact />
    </>
  )
}
