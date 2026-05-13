import type { Metadata } from 'next'
import Link from 'next/link'
import BilettiEventList from '@/components/tickets/BilettiEventList'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Liput – WakeUpFest 2026',
  description: 'WakeUpFest 2026 -liput ja tapahtumat Biletin kautta.',
}

export default function LiputPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Biletti"
            title="Liput"
            subtitle="Tulevat tapahtumat ja lipunosto Biletin kautta. Avautuu uuteen välilehteen."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10">
          <BilettiEventList />
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-10 text-center">
          <Link
            href="/tapahtumatiedot"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-orange-300"
          >
            ← Tapahtumatiedot
          </Link>
        </AnimatedSection>
      </div>
    </div>
  )
}
