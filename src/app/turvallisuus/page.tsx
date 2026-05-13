import type { Metadata } from 'next'
import { X, Shield, Heart, Phone, CheckCircle, Package } from 'lucide-react'
import { prohibitedItems } from '@/lib/data'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Turvallisuus – WakeUpfest 2026',
  description: 'WakeUpfest 2026 turvallisuusohjeet. Kielletyt tavarat, turvapalvelut ja käyttäytymissuositukset.',
}

const services = [
  { icon: Shield, label: 'Turvahenkilöstö', desc: 'Turvahenkilöstö paikalla koko tapahtuman ajan', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { icon: Heart, label: 'Ensiapu', desc: 'Ensiapupiste toimii tapahtuma-alueella', color: 'text-red-400', bg: 'bg-red-500/10' },
  { icon: Phone, label: 'Hätänumero', desc: 'Hätänumero: 112', color: 'text-green-400', bg: 'bg-green-500/10' },
]

const guidelines = [
  'Toimi asiallisesti ja kunnioittavasti muita kävijöitä kohtaan',
  'Ilmoita epäilyttävästä toiminnasta välittömästi turvahenkilöstölle',
  'Pidä huolta itsestäsi ja ympärilläsi olevista ihmisistä',
  'Kiusaamista, syrjintää tai häirintää ei tolereerata',
  'Jokaisella on oikeus turvalliseen ja kunnioittavaan tapahtumakokemukseen',
]

export default function TurvallisuusPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Turvallisuus"
            title="Turvallinen tapahtuma kaikille"
            subtitle="WakeUpfest järjestetään virallisten ohjeiden mukaisesti. Kaikkien oikeus turvallisuuteen on meille ensisijainen."
          />
        </AnimatedSection>

        {/* Safety services */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {services.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0f0f1a] p-6">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${s.bg}`}>
                  <s.icon size={22} className={s.color} />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{s.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Prohibited items */}
        <AnimatedSection delay={0.2} className="mb-10">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
            <h3 className="mb-6 text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Kielletyt tavarat
            </h3>
            <p className="mb-6 text-sm text-gray-400">
              Turvahenkilöstö tarkistaa laukut sisäänkäynneillä. Seuraavia tavaroita ei saa tuoda tapahtuma-alueelle:
            </p>
            <ul className="space-y-3">
              {prohibitedItems.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-xl border border-red-500/10 bg-red-500/5 px-4 py-3">
                  <X size={18} className="shrink-0 text-red-400" />
                  <span className="text-sm font-medium text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Behavior guidelines */}
        <AnimatedSection delay={0.3} className="mb-10">
          <div className="rounded-2xl border border-white/10 bg-[#0f0f1a] p-8">
            <h3 className="mb-6 text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Käyttäytymissuositukset
            </h3>
            <ul className="space-y-3">
              {guidelines.map((g) => (
                <li key={g} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-0.5 shrink-0 text-green-400" />
                  <span className="text-sm text-gray-300">{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Lost & found */}
        <AnimatedSection delay={0.4}>
          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0f0f1a] p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">
              <Package size={22} className="text-yellow-400" />
            </div>
            <div>
              <h3 className="font-bold text-white">Löytötavaratoimisto</h3>
              <p className="mt-1 text-sm text-gray-400">
                Tapahtumassa kadonneet tavarat toimitetaan Pirkanmaan löytötavaratoimistoon.
              </p>
              <p className="mt-1 text-sm font-semibold text-yellow-400">Suvantokatu 10, Tampere</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
