import type { Metadata } from 'next'
import { speakers } from '@/lib/data'
import SpeakerCard from '@/components/speakers/SpeakerCard'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Puhujat – WakeUpfest 2026',
  description:
    'Päivän aikana lavalle nousee monipuolinen joukko kokemusasiantuntijoita, ammattilaisia & vaikuttajia. WakeUpfest 2026, Tampere.',
}

export default function PuhujatPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading
            title="Puhujat"
            subtitle="Päivän aikana lavalle nousee monipuolinen joukko kokemusasiantuntijoita, ammattilaisia & vaikuttajia."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, i) => (
            <AnimatedSection key={speaker.id} delay={i * 0.08} className="h-full">
              <SpeakerCard speaker={speaker} index={i} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
