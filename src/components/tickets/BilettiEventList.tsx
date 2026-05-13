import { getBilettiUpcomingEvents, isBilettiConfigured } from '@/lib/biletti'
import BilettiEventCard from '@/components/tickets/BilettiEventCard'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default async function BilettiEventList({ limit }: { limit?: number }) {
  const configured = isBilettiConfigured()
  const all = await getBilettiUpcomingEvents()
  const events = limit ? all.slice(0, limit) : all

  if (!configured) {
    return (
      <p className="rounded-2xl border border-white/10 bg-[#0f0f1a] px-6 py-8 text-center text-sm text-gray-400">
        Lipputapahtumat näytetään, kun järjestäjä on lisännyt <strong className="text-gray-200">WakeUpfestin</strong> omat
        Biletti-avaimet palvelimelle (
        <code className="text-orange-300/90">WAKEUPFEST_BILETTI_ORG_UUID</code>,{' '}
        <code className="text-orange-300/90">WAKEUPFEST_BILETTI_API_KEY</code>
        ). Älä käytä toisen tapahtuman tai klubin avaimia — lista tulee aina sen järjestäjän tapahtumista, jonka UUID on
        konfiguroitu.
      </p>
    )
  }

  if (events.length === 0) {
    return (
      <p className="rounded-2xl border border-white/10 bg-[#0f0f1a] px-6 py-8 text-center text-sm text-gray-400">
        Ei tulevia listattavia tapahtumia Biletin kautta juuri nyt.
      </p>
    )
  }

  return (
    <div className="space-y-4">
      {events.map((event, i) => (
        <AnimatedSection key={event.id} delay={i * 0.06}>
          <BilettiEventCard event={event} />
        </AnimatedSection>
      ))}
    </div>
  )
}
