import { CalendarDays, Clock3, MapPin } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

interface ScheduleItem {
  time: string
  title: string
  emphasis?: 'opening' | 'closing'
}

const afternoon: ScheduleItem[] = [
  { time: '15:00', title: 'Portit auki', emphasis: 'opening' },
  { time: '15:15', title: 'Avauspuhe' },
  { time: '15:30', title: 'Annuska Dal Maso' },
  { time: '16:00', title: 'Veli K' },
  { time: '16:20', title: 'Lucy' },
  { time: '17:00', title: 'Tomas Jouhilampi' },
  { time: '17:15', title: 'Viivi Back' },
  { time: '17:40', title: 'Joni Kerman' },
]

const evening: ScheduleItem[] = [
  { time: '18:15', title: 'Tomi Långstedt' },
  { time: '18:35', title: 'Anna Lindfors & Velivoima' },
  { time: '19:15', title: 'Gold T' },
  { time: '20:00', title: 'Roman Aliev' },
  { time: '20:30', title: 'Nupe' },
  { time: '21:10', title: 'Mansesteri' },
  { time: '23:00', title: 'Tapahtuma päättyy', emphasis: 'closing' },
]

function ScheduleList({ title, items }: { title: string; items: ScheduleItem[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 bg-gray-50 px-5 py-3 sm:px-6">
        <h3 className="font-bold text-gray-900">{title}</h3>
      </div>
      <ol className="divide-y divide-gray-100 px-4 sm:px-5">
        {items.map((item) => {
          const highlighted = item.emphasis !== undefined
          const closing = item.emphasis === 'closing'

          return (
            <li
              key={`${item.time}-${item.title}`}
              className={`grid grid-cols-[4.25rem_1fr] items-center gap-3 py-3 sm:grid-cols-[5rem_1fr] sm:gap-4 ${
                highlighted ? 'font-semibold' : ''
              }`}
            >
              <time
                dateTime={`2026-07-28T${item.time}:00+03:00`}
                className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-sm font-bold tabular-nums ${
                  closing
                    ? 'bg-pink-100 text-pink-800'
                    : item.emphasis === 'opening'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-700'
                }`}
              >
                {item.time}
              </time>
              <span className={closing ? 'text-pink-800' : 'text-gray-900'}>{item.title}</span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default function ScheduleSection() {
  return (
    <section
      id="aikataulu"
      aria-labelledby="aikataulu-heading"
      className="scroll-mt-20 px-4 py-16 sm:scroll-mt-24 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <div className="mb-9 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-pink-700">Päivän ohjelma</p>
            <h2
              id="aikataulu-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              WakeUpfestin aikataulu
            </h2>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-600 sm:text-base">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={18} className="text-orange-600" aria-hidden />
                Tiistai 28.7.2026
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 size={18} className="text-pink-600" aria-hidden />
                Klo 15:00–23:00
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={18} className="text-purple-600" aria-hidden />
                Eteläpuisto, Tampere
              </span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid gap-5 md:grid-cols-2">
          <AnimatedSection className="h-full">
            <ScheduleList title="Iltapäivä" items={afternoon} />
          </AnimatedSection>
          <AnimatedSection delay={0.08} className="h-full">
            <ScheduleList title="Ilta" items={evening} />
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.12}>
          <p className="mt-5 text-center text-xs text-gray-500">
            Ohjelma-aikoihin voi tulla muutoksia.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
