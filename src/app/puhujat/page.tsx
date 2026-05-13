import type { Metadata } from 'next'
import { speakers } from '@/lib/data'
import SpeakerCard from '@/components/speakers/SpeakerCard'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Puhujat – WakeUpfest 2026',
  description: 'WakeUpfest 2026 -tapahtuman puhujat: kokemusasiantuntijoita, ammattilaisia ja vaikuttajia.',
}

export default function PuhujatPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Puhujat"
            title="Vuoden 2026 esiintyjät"
            subtitle="Monipuolinen joukko kokemusasiantuntijoita, ammattilaisia ja vaikuttajia."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, i) => (
            <AnimatedSection key={speaker.id} delay={i * 0.08}>
              <SpeakerCard speaker={speaker} index={i} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
