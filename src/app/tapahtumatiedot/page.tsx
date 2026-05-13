import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Ticket, Wine, Shield, Bus, Car, Package } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Tapahtumatiedot – WakeUpFest 2026',
  description: 'WakeUpFest 2026 tapahtumatiedot: 28.7.2026 klo 15–22, Tampere Eteläpuisto. Vapaa pääsy, ikärajaton.',
}

const infoItems = [
  { icon: Calendar, label: 'Päivämäärä', value: '28. heinäkuuta 2026', color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { icon: Clock, label: 'Kellonaika', value: 'klo 15:00–22:00', color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  { icon: MapPin, label: 'Sijainti', value: 'Eteläpuisto, Tampere', color: 'text-pink-400', bg: 'bg-pink-500/10' },
  { icon: Ticket, label: 'Pääsy', value: 'Vapaa pääsy – kaikenikäisille', color: 'text-green-400', bg: 'bg-green-500/10' },
  { icon: Wine, label: 'Tapahtuma', value: '100% päihteetön', color: 'text-teal-400', bg: 'bg-teal-500/10' },
  { icon: Shield, label: 'Turvallisuus', value: 'Turvahenkilöstö ja ensiapu paikalla', color: 'text-blue-400', bg: 'bg-blue-500/10' },
]

export default function TapahtumatiedotPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Tapahtuma"
            title="Tapahtumatiedot"
            subtitle="Kaikki mitä sinun tarvitsee tietää WakeUpFest 2026:sta."
          />
        </AnimatedSection>

        {/* Hero date block */}
        <AnimatedSection delay={0.1} className="mb-12">
          <div
            className="rounded-3xl border border-orange-500/20 p-10 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(234,179,8,0.08))',
            }}
          >
            <p className="gradient-text-primary text-7xl font-black md:text-9xl" style={{ fontFamily: 'var(--font-display)' }}>
              28.7.
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">2026</p>
            <p className="mt-1 text-lg text-gray-400">klo 15:00–22:00 · Eteläpuisto, Tampere</p>
          </div>
        </AnimatedSection>

        {/* Info grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {infoItems.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.08}>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0f0f1a] p-6">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.bg}`}>
                  <item.icon size={22} className={item.color} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{item.label}</p>
                  <p className="text-sm font-semibold text-white mt-0.5">{item.value}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.12} className="mb-12">
          <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6 text-center">
            <p className="text-sm text-gray-300">
              Jos myynnissä on erillisiä Biletti-tapahtumia (esim. sideventit), ne löytyvät{' '}
              <Link href="/liput" className="font-semibold text-orange-300 underline-offset-2 hover:underline">
                Liput-sivulta
              </Link>
              .
            </p>
          </div>
        </AnimatedSection>

        {/* Getting there */}
        <AnimatedSection delay={0.3} className="mb-6">
          <div className="rounded-2xl border border-white/10 bg-[#0f0f1a] p-8">
            <h3 className="mb-6 text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Saapuminen tapahtumaan
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Bus size={20} className="mt-0.5 shrink-0 text-teal-400" />
                <div>
                  <p className="font-semibold text-white text-sm">Joukkoliikenne (suositeltava)</p>
                  <p className="text-sm text-gray-400 mt-1">Tampere Eteläpuisto on hyvin saavutettavissa busseilla. Tarkista aikataulut Nyssen reittioppaasta.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Car size={20} className="mt-0.5 shrink-0 text-yellow-400" />
                <div>
                  <p className="font-semibold text-white text-sm">Pysäköinti</p>
                  <p className="text-sm text-gray-400 mt-1">Tapahtuman läheisyydessä on rajallinen määrä maksullisia pysäköintipaikkoja. Joukkoliikenne suositeltavaa.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Lost & found + additional info */}
        <AnimatedSection delay={0.4}>
          <div className="rounded-2xl border border-white/10 bg-[#0f0f1a] p-8">
            <h3 className="mb-6 text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Muuta huomioitavaa
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Package size={18} className="mt-0.5 shrink-0 text-orange-400" />
                <span><strong className="text-white">Löytötavaratoimisto:</strong> Kadonneet tavarat toimitetaan Pirkanmaan löytötavaratoimistoon, Suvantokatu 10, Tampere.</span>
              </li>
              <li className="flex items-start gap-3">
                <Ticket size={18} className="mt-0.5 shrink-0 text-green-400" />
                <span><strong className="text-white">Vapaa tulo ja lähtö:</strong> Voit poistua ja palata tapahtuma-alueelle vapaasti koko tapahtuman ajan.</span>
              </li>
            </ul>
          </div>
        </AnimatedSection>

        {/* Map */}
        <AnimatedSection delay={0.5} className="mt-6">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1900.5!2d23.7615!3d61.4935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468edf70e8b5e375%3A0x4e1b9f5ad4b7f9b6!2sEtel%C3%A4puisto%2C%20Tampere!5e0!3m2!1sfi!2sfi!4v1620000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="WakeUpFest 2026 sijainti – Eteläpuisto, Tampere"
            />
          </div>
          <p className="mt-2 text-center text-xs text-gray-600">Eteläpuisto, Tampere</p>
        </AnimatedSection>
      </div>
    </div>
  )
}
