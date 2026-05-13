import GradientButton from '@/components/ui/GradientButton'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20">
      {/* Gradient blobs */}
      <div
        className="blob-animate pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="blob-animate pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
          animationDelay: '3s',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Date badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          <span className="text-sm font-semibold text-orange-300">
            28.7.2026 · Tampere Eteläpuisto · klo 15–22
          </span>
        </div>

        {/* Main title */}
        <h1
          className="mb-2 font-black leading-none"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span
            className="gradient-text-primary block text-8xl md:text-[10rem] lg:text-[12rem]"
          >
            WAKE
          </span>
          <span
            className="block text-7xl text-white md:text-9xl lg:text-[11rem]"
          >
            UPFEST
          </span>
        </h1>

        {/* Tagline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
          Ennennäkemätön hyväntekeväisyysfestivaali — puhujia, musiikkia ja workshopeja.
          <span className="block mt-1 text-gray-500">Ilmainen · Ikärajaton · Päihteetön</span>
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <GradientButton href="/tapahtumatiedot" variant="primary">
            Tapahtumatiedot
          </GradientButton>
          <GradientButton href="/puhujat" variant="outline">
            Puhujat →
          </GradientButton>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex animate-bounce justify-center">
          <ChevronDown size={24} className="text-gray-600" />
        </div>
      </div>
    </section>
  )
}
