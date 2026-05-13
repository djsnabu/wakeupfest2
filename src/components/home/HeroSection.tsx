import GradientButton from '@/components/ui/GradientButton'
import WakeUpFestLogo from '@/components/layout/WakeUpFestLogo'
import { contacts } from '@/lib/data'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20">
      <div
        className="blob-animate pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(250,204,21,0.28) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="blob-animate pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(217,70,239,0.22) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
          animationDelay: '3s',
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h1 className="sr-only">WakeUpfest</h1>

        <div className="mb-10 flex justify-center">
          <WakeUpFestLogo variant="hero" priority />
        </div>

        <p className="text-lg font-semibold leading-relaxed text-white md:text-xl">
          Heinäkuussa Tampereen Eteläpuistossa järjestetään ennennäkemätön hyväntekeväisyystapahtuma, jonka
          tavoitteena on ennen kaikkea nostaa Suomen huumetilanne näkyväksi. Artisteja, puhujia & workshopeja.
        </p>

        <p className="mt-6 text-lg font-semibold leading-relaxed text-white md:text-xl">
          Tätä ei ole ennen nähty. Tätä Suomi ei voi ohittaa!
        </p>

        <p className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg">
          Seuraa somessa{' '}
          <a
            href={contacts.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-pink-300 underline-offset-2 hover:underline"
          >
            {contacts.instagram}
          </a>
          , niin kuulet kaikesta ensimmäisenä.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <GradientButton href="/puhujat" variant="primary">
            Tutustu puhujiin
          </GradientButton>
          <GradientButton href="/artistit" variant="outline">
            Tutustu artisteihin
          </GradientButton>
          <GradientButton href="/workshopit" variant="outline">
            Workshopit
          </GradientButton>
        </div>

        <div className="mt-20 flex animate-bounce justify-center">
          <ChevronDown size={24} className="text-gray-600" aria-hidden />
        </div>
      </div>
    </section>
  )
}
