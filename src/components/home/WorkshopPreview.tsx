import Link from 'next/link'
import { ArrowRight, Palette, Wind, Zap, Shield } from 'lucide-react'
import { workshops } from '@/lib/data'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Wind,
  Zap,
  Shield,
}

export default function WorkshopPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Workshopit"
          title="Ilmaiset workshopit"
          subtitle="Neljä ilmaista workshopia — kaikki tervetulleita, ei aiempaa kokemusta tarvita."
        />
      </AnimatedSection>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {workshops.map((w, i) => {
          const Icon = iconMap[w.icon] || Palette
          return (
            <AnimatedSection key={w.id} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-[#0f0f1a] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 group">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500/10 group-hover:bg-teal-500/20 transition-colors">
                  <Icon size={24} className="text-teal-400" />
                </div>
                <h3 className="text-sm font-bold text-white">{w.title}</h3>
                <p className="mt-1 text-xs text-gray-500">{w.facilitator}</p>
              </div>
            </AnimatedSection>
          )
        })}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/workshopit"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors"
        >
          Lue lisää workshopeista <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
