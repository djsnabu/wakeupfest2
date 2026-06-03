import type { Metadata } from 'next'
import { X, Shield, Heart, Package, ScanLine } from 'lucide-react'
import { prohibitedItems } from '@/lib/data'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Turvallisuus – WakeUpfest 2026',
  description:
    'Wake Up fest on kaikille avoin yhteisöllinen tapahtuma. Turvatarkastus, kielletyt esineet ja ensiapu.',
}

export default function TurvallisuusPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading title="Turvallisuus" />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-10">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-gray-600">
              <p>
                Wake Up fest on kaikille avoin yhteisöllinen tapahtuma, joka on suunniteltu
                viranomaisohjeita noudattaen. Jos huomaat onnettomuuden tai muun turvallisuusongelman,
                ilmoita asiasta viipymättä järjestyksenvalvojille.
              </p>
              <p>
                Tapahtumassa ei hyväksytä minkäänlaista kiusaamista, syrjintää tai häirintää.
                Kunnioitamme jokaisen osallistujan oikeutta koskemattomuuteen ja turvalliseen
                ympäristöön. Sitoudumme puuttumaan järjestäjän tietoon saatettuihin tapauksiin
                välittömästi, joten ilmoitathan epäasiallisesta kohtaamisesta matalalla kynnyksellä
                järjestyksenvalvojille!
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mb-10">
          <div className="flex items-start gap-4 rounded-2xl border border-blue-200 bg-blue-50 p-6 sm:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100">
              <ScanLine size={22} className="text-blue-700" />
            </div>
            <div>
              <h3
                className="text-xl font-bold text-gray-900"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Turvatarkastus
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Järjestyksenvalvojat tekevät porteilla kaikille turvatarkastuksen.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mb-10">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100">
                <Shield size={22} className="text-red-700" />
              </div>
              <h3
                className="text-xl font-bold text-gray-900"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Kielletyt esineet &amp; asiat
              </h3>
            </div>
            <ul className="space-y-3">
              {prohibitedItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-red-200 bg-white px-4 py-3"
                >
                  <X size={18} className="shrink-0 text-red-700" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25} className="mb-10">
          <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100">
              <Heart size={22} className="text-red-700" />
            </div>
            <div>
              <h3
                className="text-xl font-bold text-gray-900"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Ensiapu
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Tapahtuma-alueelta löytyy päivystävä ensiapupiste.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-100">
              <Package size={22} className="text-yellow-700" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Löytötavaratoimisto</h3>
              <p className="mt-1 text-sm text-gray-600">
                Tapahtumassa kadonneet tavarat toimitetaan Pirkanmaan löytötavaratoimistoon.
              </p>
              <p className="mt-1 text-sm font-semibold text-yellow-700">Suvantokatu 10, Tampere</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
