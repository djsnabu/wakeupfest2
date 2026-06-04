import type { Metadata } from 'next'
import { workshops } from '@/lib/data'
import WorkshopCard from '@/components/workshops/WorkshopCard'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Workshopit – WakeUpfest 2026',
  description:
    'Tapahtumassa tarjolla monipuolisesti maksuttomia työpajoja - et tarvitse aiempaa kokemusta! WakeUpfest 2026, Tampere.',
}

export default function WorkshopitPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading
            title="Workshopit"
            subtitle="Tapahtumassa tarjolla monipuolisesti maksuttomia työpajoja - et tarvitse aiempaa kokemusta!"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3 md:gap-8">
          {workshops.map((workshop, i) => (
            <AnimatedSection key={workshop.id} delay={i * 0.1} className="h-full">
              <WorkshopCard workshop={workshop} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
