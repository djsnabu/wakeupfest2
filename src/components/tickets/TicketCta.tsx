import GradientButton from '@/components/ui/GradientButton'
import { ticketInfo } from '@/lib/data'

export default function TicketCta({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-orange-200 bg-orange-50 p-8 text-center shadow-sm ${className}`}
    >
      <h3
        className="text-xl font-bold text-gray-900 md:text-2xl"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {ticketInfo.headline}
      </h3>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-600">
        {ticketInfo.description}
      </p>
      <div className="mt-6">
        <GradientButton href={ticketInfo.bilettiEventUrl} variant="primary" external>
          Hanki liput Biletti.fi
        </GradientButton>
      </div>
    </div>
  )
}
