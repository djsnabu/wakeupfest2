import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { speakers } from '@/lib/data'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import SpeakerCard from '@/components/speakers/SpeakerCard'

export default function SpeakerPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Puhujat"
          title="Inspiroivat esiintyjät"
          subtitle="Kokemuksia, asiantuntemusta ja rohkeita puheenvuoroja."
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker, i) => (
          <AnimatedSection key={speaker.id} delay={i * 0.08}>
            <SpeakerCard speaker={speaker} index={i} />
          </AnimatedSection>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/puhujat"
          className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors"
        >
          Kaikki puhujat ({speakers.length}) <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
