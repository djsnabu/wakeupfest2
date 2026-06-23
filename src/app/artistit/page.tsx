import type { Metadata } from 'next'
import { artists } from '@/lib/data'
import ArtistCard from '@/components/artists/ArtistCard'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Esiintyjät – WakeUpfest 2026',
  description:
    'Esiintyjäkattauksemme koostuu nousevista tähdistä sekä musiikin, tanssin ja puheen esiintyjistä! WakeUpfest 2026, Tampere.',
}

export default function ArtistPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading
            title="Esiintyjät"
            subtitle="Esiintyjäkattauksemme koostuu nousevista tähdistä sekä musiikin, tanssin ja puheen esiintyjistä!"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist, i) => (
            <AnimatedSection key={artist.id} delay={i * 0.1} className="h-full">
              <ArtistCard artist={artist} index={i} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
