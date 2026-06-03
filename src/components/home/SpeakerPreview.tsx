import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { speakers } from '@/lib/data'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SpeakerCard from '@/components/speakers/SpeakerCard'

export default function SpeakerPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <AnimatedSection>
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg font-medium leading-relaxed text-gray-900 md:text-xl">
          Päivän aikana lavalle nousee
          <br />
          monipuolinen joukko kokemusasiantuntijoita,
          <br />
          ammattilaisia & vaikuttajia.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker, i) => (
          <AnimatedSection key={speaker.id} delay={i * 0.08} className="h-full">
            <SpeakerCard speaker={speaker} index={i} />
          </AnimatedSection>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/puhujat"
          className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800 transition-colors"
        >
          Tutustu puhujiin
          <ArrowRight size={16} aria-hidden />
        </Link>
      </div>
    </section>
  )
}
