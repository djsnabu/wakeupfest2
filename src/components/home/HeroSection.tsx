import Image from 'next/image'
import GradientButton from '@/components/ui/GradientButton'
import Link from 'next/link'
import { contacts, ticketInfo, venue } from '@/lib/data'
import { ChevronDown } from 'lucide-react'

const HERO_SRC = '/wakeupfest-hero.jpg'
const HERO_W = 1024
const HERO_H = 438

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20">
      <div
        className="blob-animate pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(250,204,21,0.35) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="blob-animate pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(217,70,239,0.28) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
          animationDelay: '3s',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <h1 className="sr-only">WakeUpfest</h1>

        <div className="mb-10 flex justify-center">
          <Image
            src={HERO_SRC}
            alt="WakeUp FEST"
            width={HERO_W}
            height={HERO_H}
            priority
            className="h-auto w-full max-w-4xl rounded-2xl shadow-2xl shadow-gray-300/60 md:max-w-5xl"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
          />
        </div>

        <Link
          href="/tapahtumatiedot"
          className="mx-auto mb-10 block max-w-md rounded-2xl border border-orange-200 bg-orange-50/80 px-6 py-5 shadow-sm transition-colors hover:border-orange-300 hover:bg-orange-50"
        >
          <p
            className="gradient-text-primary text-5xl font-black leading-none md:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            28.7.
          </p>
          <p className="mt-2 text-lg font-semibold text-gray-900">tiistaina klo 15–22</p>
          <p className="mt-3 text-sm text-gray-600">{venue.address}</p>
        </Link>

        <p className="text-lg font-semibold leading-relaxed text-gray-900 md:text-xl">
          Heinäkuussa {venue.name}ssa, Tampereella, järjestetään ennennäkemätön
          hyväntekeväisyystapahtuma, jonka tavoitteena on ennen kaikkea nostaa Suomen huumetilanne näkyväksi.
          Artisteja, puhujia & workshopeja.
        </p>

        <p className="mt-6 text-lg font-semibold leading-relaxed text-gray-900 md:text-xl">
          Tätä ei ole ennen nähty. Tätä Suomi ei voi ohittaa!
        </p>

        <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
          Seuraa somessa{' '}
          <a
            href={contacts.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-pink-600 underline-offset-2 hover:underline"
          >
            @wakeupfest_finland
          </a>{' '}
          ,
          <br />
          niin kuulet kaikesta ensimmäisenä.
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
          <GradientButton href="/tapahtumatiedot" variant="outline">
            Tapahtumainfo
          </GradientButton>
        </div>

        <div className="mt-10 flex flex-col items-center text-center">
          <GradientButton
            href="/liput"
            variant="primary"
            className="px-10 py-4 text-base sm:px-14 sm:py-5 sm:text-lg md:text-xl"
          >
            Liput
          </GradientButton>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 md:text-base">
            <span className="font-semibold text-gray-900">{ticketInfo.headline}</span>
            <br />
            {ticketInfo.description}
          </p>
        </div>

        <div className="mt-16 flex animate-bounce justify-center">
          <ChevronDown size={24} className="text-gray-600" aria-hidden />
        </div>
      </div>
    </section>
  )
}
