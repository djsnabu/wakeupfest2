import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { workshops } from '@/lib/data'
import WorkshopCard from '@/components/workshops/WorkshopCard'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function WorkshopPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <AnimatedSection>
        <p className="mx-auto mb-10 max-w-lg text-center text-base font-medium leading-snug text-gray-900 sm:max-w-2xl sm:text-lg md:text-xl">
          Tapahtumassa tarjolla monipuolisesti
          <br className="sm:hidden" />
          {' '}
          maksuttomia työpajoja –
          <br />
          et tarvitse aiempaa kokemusta!
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3 md:gap-8">
        {workshops.map((w, i) => (
          <AnimatedSection key={w.id} delay={i * 0.1} className="h-full">
            <WorkshopCard workshop={w} compact />
          </AnimatedSection>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/workshopit"
          className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800 transition-colors"
        >
          Workshopit
          <ArrowRight size={16} aria-hidden />
        </Link>
      </div>
    </section>
  )
}
