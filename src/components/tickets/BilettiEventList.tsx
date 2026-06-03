import { getBilettiUpcomingEvents, isBilettiConfigured } from '@/lib/biletti'
import BilettiEventCard from '@/components/tickets/BilettiEventCard'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default async function BilettiEventList({ limit }: { limit?: number }) {
  const configured = isBilettiConfigured()
  const all = await getBilettiUpcomingEvents()
  const events = limit ? all.slice(0, limit) : all

  if (!configured || events.length === 0) {
    return null
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
