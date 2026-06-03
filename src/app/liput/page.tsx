import type { Metadata } from 'next'
import Link from 'next/link'
import BilettiEventList from '@/components/tickets/BilettiEventList'
import TicketCta from '@/components/tickets/TicketCta'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { ticketInfo } from '@/lib/data'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Liput – WakeUpfest 2026',
  description: `${ticketInfo.headline} Biletin kautta. ${ticketInfo.description}`,
}

export default function LiputPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Biletti"
            title="Liput"
            subtitle={ticketInfo.description}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-10">
          <TicketCta />
        </AnimatedSection>

        <BilettiEventList />

        <AnimatedSection delay={0.15} className="mt-10 text-center">
          <Link
            href="/tapahtumatiedot"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-orange-800"
          >
            ← Tapahtumainfo
          </Link>
        </AnimatedSection>
      </div>
    </div>
  )
}
