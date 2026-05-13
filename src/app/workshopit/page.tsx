import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import { workshops } from '@/lib/data'
import WorkshopCard from '@/components/workshops/WorkshopCard'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Workshopit – WakeUpFest 2026',
  description: 'WakeUpFest 2026 tarjoaa neljä ilmaista workshopia: taidepaja, jooga, nyrkkeily ja kamppailulajit.',
}

export default function WorkshopitPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Workshopit"
            title="Ilmaiset workshopit"
            subtitle="Neljä ilmaista workshopia — ei ennakkoilmoittautumista, ei aiempaa kokemusta tarvita."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {workshops.map((workshop, i) => (
            <AnimatedSection key={workshop.id} delay={i * 0.1}>
              <WorkshopCard workshop={workshop} />
            </AnimatedSection>
          ))}
        </div>

        {/* Info box */}
        <AnimatedSection delay={0.4} className="mt-12">
          <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-8">
            <h3 className="mb-4 text-lg font-bold text-white">Käytännön tietoa workshopeista</h3>
            <ul className="space-y-3">
              {[
                'Kaikki workshopit ovat täysin ilmaisia',
                'Ennakkoilmoittautumista ei tarvita – tule suoraan paikalle',
                'Ei vaadi aiempaa kokemusta mistään lajista',
                'Sopii kaikille ikäryhmille',
                'Workshopit järjestetään tapahtuma-alueella 28.7.2026',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-0.5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
