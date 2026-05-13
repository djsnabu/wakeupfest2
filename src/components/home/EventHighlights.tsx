import { Calendar, MapPin, Users } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const highlights = [
  {
    icon: Calendar,
    label: '28. heinäkuuta 2026',
    sub: 'klo 15:00–22:00',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
  {
    icon: MapPin,
    label: 'Eteläpuisto, Tampere',
    sub: 'Vapaa pääsy kaikille',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Users,
    label: 'Kaikki ikäryhmät',
    sub: '100% päihteetön tapahtuma',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
  },
]

export default function EventHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {highlights.map((h, i) => (
          <AnimatedSection key={h.label} delay={i * 0.1}>
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${h.bg}`}>
                <h.icon size={22} className={h.color} />
              </div>
              <div>
                <p className="font-semibold text-white">{h.label}</p>
                <p className="text-sm text-gray-500">{h.sub}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
