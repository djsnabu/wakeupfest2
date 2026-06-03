import type { BilettiEvent } from '@/lib/biletti'
import GradientButton from '@/components/ui/GradientButton'

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const date = new Date(dateStr + 'T12:00:00')
  return date.toLocaleDateString('fi-FI', {
    weekday: 'short',
    day: 'numeric',
    month: 'numeric',
  })
}

export default function BilettiEventCard({ event }: { event: BilettiEvent }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5 sm:flex-row">
      {event.imageUrl ? (
        <div className="relative aspect-[4/3] shrink-0 sm:aspect-auto sm:w-[140px] sm:self-stretch">
          {/* eslint-disable-next-line @next/next/no-img-element -- Biletti CDN hostit vaihtelevat */}
          <img
            src={event.imageUrl}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="flex flex-grow flex-col gap-4 p-6 sm:flex-row sm:items-center">
        <div className="flex shrink-0 flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-center sm:min-w-[88px]">
          <span className="text-xs font-semibold uppercase tracking-wide text-orange-700">
            {formatDate(event.date)}
          </span>
          <span className="text-sm text-gray-600">{event.time}</span>
        </div>

        <div className="min-w-0 flex-grow">
          <h3
            className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {event.name}
          </h3>
          {event.description ? (
            <p className="mt-2 line-clamp-3 text-sm text-gray-600">{event.description}</p>
          ) : null}
        </div>

        {event.ticketUrl ? (
          <div className="flex shrink-0 sm:items-center">
            <GradientButton href={event.ticketUrl} variant="primary" external>
              Hanki liput
            </GradientButton>
          </div>
        ) : null}
      </div>
    </div>
  )
}
