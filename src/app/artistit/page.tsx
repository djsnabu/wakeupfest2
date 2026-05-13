import type { Metadata } from 'next'
import { artists, contacts } from '@/lib/data'
import { InstagramIcon } from '@/components/ui/InstagramIcon'
import ArtistCard from '@/components/artists/ArtistCard'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GradientButton from '@/components/ui/GradientButton'

export const metadata: Metadata = {
  title: 'Artistit – WakeUpfest 2026',
  description: 'WakeUpfest 2026 -tapahtuman artistit. Mansesteri, Nupe, Roman Aliev ja tuleva headliner.',
}

export default function ArtistPage() {
  const confirmed = artists.filter((a) => !a.isHeadliner)
  const headliner = artists.find((a) => a.isHeadliner)

  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Artistit"
            title="Musiikkia elämästä"
            subtitle="Live-musiikkia Tampereella 28.7.2026 klo 15–22."
          />
        </AnimatedSection>

        {/* Confirmed artists */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {confirmed.map((artist, i) => (
            <AnimatedSection key={artist.id} delay={i * 0.1}>
              <ArtistCard artist={artist} index={i} />
            </AnimatedSection>
          ))}
        </div>

        {/* Headliner block */}
        {headliner && (
          <AnimatedSection delay={0.3} className="mt-8">
            <div className="max-w-md mx-auto">
              <ArtistCard artist={headliner} index={0} />
            </div>
          </AnimatedSection>
        )}

        {/* Instagram CTA */}
        <AnimatedSection delay={0.4} className="mt-16 text-center">
          <p className="mb-4 text-gray-400">
            Seuraa meitä Instagramissa saadaksesi tiedon headlinerin paljastuksesta ensimmäisenä.
          </p>
          <GradientButton href={contacts.instagramUrl} variant="secondary" external>
            <InstagramIcon size={16} />
            {contacts.instagram}
          </GradientButton>
        </AnimatedSection>
      </div>
    </div>
  )
}
