import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Ticket, Wine, Shield, Car, Package } from 'lucide-react'
import { venue } from '@/lib/data'
import FaqList from '@/components/faq/FaqList'
import TicketCta from '@/components/tickets/TicketCta'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Tapahtumainfo – WakeUpfest 2026',
  description: `Ikärajaton ja päihteetön festivaali 28.7.2026 klo 15–22. Maksa mitä jaksat -liput Biletin kautta. ${venue.address}, Tampere.`,
}

const infoItems = [
  { icon: Calendar, label: 'Päivämäärä', value: '28.7.2026, tiistai', color: 'text-orange-700', bg: 'bg-orange-100' },
  { icon: Clock, label: 'Kellonaika', value: 'klo 15–22', color: 'text-yellow-700', bg: 'bg-yellow-100' },
  { icon: MapPin, label: 'Sijainti', value: venue.address, color: 'text-pink-700', bg: 'bg-pink-100' },
  { icon: Ticket, label: 'Pääsy', value: 'Ikärajaton · Maksa mitä jaksat', color: 'text-green-700', bg: 'bg-green-100' },
  { icon: Wine, label: 'Tapahtuma', value: 'Päihteetön koko päivän', color: 'text-teal-700', bg: 'bg-teal-100' },
  { icon: Shield, label: 'Järjestys', value: 'Järjestyksenvalvonta tapahtuma-alueella', color: 'text-blue-700', bg: 'bg-blue-100' },
]

export default function TapahtumatiedotPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading title="Tapahtumainfo" />
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mb-12">
          <div
            className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(250,204,21,0.08), rgba(217,70,239,0.06))',
            }}
          >
            <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-gray-900">
              Ikärajaton &amp; päihteetön koko päivän ulkoilmatapahtuma, joka järjestetään ensimmäistä
              kertaa vuonna 2026! Liput: maksa mitä jaksat — tuotto tapahtuman kuluihin ja kehittämiseen.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
              Tapahtuma-alueella järjestyksenvalvonta.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-12">
          <div
            className="rounded-3xl border border-orange-200 bg-orange-50/50 p-10 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(250,204,21,0.12), rgba(234,179,8,0.1))',
            }}
          >
            <p
              className="gradient-text-primary text-7xl font-black md:text-9xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              28.7.
            </p>
            <p className="mt-2 text-2xl font-semibold text-gray-900">tiistaina klo 15–22</p>
            <p className="mt-4 text-base text-gray-600">{venue.address}</p>
          </div>
        </AnimatedSection>

        <div className="mb-12 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {infoItems.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.08} className="h-full">
              <div className="flex h-full items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.bg}`}>
                  <item.icon size={22} className={item.color} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">{item.label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-gray-900">{item.value}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.12} className="mb-12">
          <TicketCta />
          <p className="mt-4 text-center text-sm text-gray-600">
            Lisätietoja lipuista:{' '}
            <Link
              href="/liput"
              className="font-semibold text-orange-700 underline-offset-2 hover:underline"
            >
              Liput-sivu
            </Link>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mb-6">
          <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-100">
              <Car size={22} className="text-yellow-700" />
            </div>
            <div>
              <h3
                className="text-xl font-bold text-gray-900"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Saapuminen
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Lähialueelta löytyy niukasti maksullista pysäköintitilaa, joten suosittelemme julkisia!
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3
              className="mb-6 text-xl font-bold text-gray-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Muuta huomioitavaa
            </h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <Package size={18} className="mt-0.5 shrink-0 text-orange-700" />
                <span>
                  <strong className="text-gray-900">Löytötavaratoimisto:</strong> Kadonneet tavarat
                  toimitetaan Pirkanmaan löytötavaratoimistoon, Suvantokatu 10, Tampere.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Ticket size={18} className="mt-0.5 shrink-0 text-green-700" />
                <span>
                  <strong className="text-gray-900">Vapaa tulo ja lähtö:</strong> Voit poistua ja
                  palata tapahtuma-alueelle vapaasti koko tapahtuman ajan.
                </span>
              </li>
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="mt-6">
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <iframe
              src={venue.mapsEmbedSrc}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`WakeUpfest 2026 – ${venue.address}, Tampere`}
            />
          </div>
          <div className="mt-3 text-center text-sm text-gray-600">
            <p>{venue.address}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs font-semibold text-orange-700 hover:underline"
            >
              Avaa Google Mapsissa
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5} className="mt-16 scroll-mt-28" id="ukk">
          <div className="mx-auto max-w-3xl">
            <h2
              className="mb-2 text-center text-2xl font-black text-gray-900 md:text-3xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              UKK
            </h2>
            <p className="mb-8 text-center text-sm text-gray-600">
              Usein kysytyt kysymykset Wake Up fest -tapahtumasta.
            </p>
            <FaqList />
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
