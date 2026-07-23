import Image from 'next/image'
import type { Metadata } from 'next'
import { Mail, Heart, Eye, Users } from 'lucide-react'
import { contacts, partners } from '@/lib/data'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Yhteistyökumppanuus – WakeUpfest 2026',
  description: 'Tule WakeUpfest 2026 -kumppaniksemme. Ilmainen hyväntekeväisyystapahtuma Tampereella.',
}

const reasons = [
  {
    icon: Eye,
    title: 'Näkyvyys',
    desc: 'Tavoita tuhansia tamperelaisia ja lähialueen asukkaita tärkeän yhteiskunnallisen tapahtuman kautta.',
    color: 'text-orange-700',
    bg: 'bg-orange-100',
  },
  {
    icon: Heart,
    title: 'Yhteiskuntavastuu',
    desc: 'Osoita vastuullisuuttasi tukemalla huumevalistusta ja hyvinvointia edistävää tapahtumaa.',
    color: 'text-pink-700',
    bg: 'bg-pink-100',
  },
  {
    icon: Users,
    title: 'Kohtaaminen',
    desc: 'Kohtaa yleisösi suoraan – tapahtuma tuo yhteen nuoria, perheitä ja ammattilaisia.',
    color: 'text-purple-700',
    bg: 'bg-purple-100',
  },
]

export default function KumppanuudetPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Yhteistyökumppanuus"
            title="Haluatko WakeUpfestin kumppaniksi?"
          />
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection delay={0.1} className="mb-12">
          <div
            className="rounded-2xl border border-gray-200 p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(250,204,21,0.1), rgba(217,70,239,0.1))',
            }}
          >
            <p className="mx-auto max-w-2xl text-gray-600 leading-relaxed">
              Tapahtuma järjestetään kokonaisuudessaan hyväntekeväisyytenä, josta ei makseta
              rahallista korvausta tai palkkaa. Mikäli olet halukas tekemään kanssamme yhteistyötä,
              kysy kumppanuuksista lisää:
            </p>
          </div>
        </AnimatedSection>

        {/* Why partner */}
        <div className="mb-16 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-3">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className={`mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${r.bg}`}>
                  <r.icon size={22} className={r.color} />
                </div>
                <h3 className="mb-2 min-h-[2.75rem] line-clamp-2 font-bold leading-snug text-gray-900">
                  {r.title}
                </h3>
                <p className="min-h-[4.5rem] flex-1 text-sm leading-relaxed text-gray-600">{r.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Partners */}
        <AnimatedSection delay={0.25} className="mb-16 scroll-mt-24" id="yhteistyokumppanit">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-8">
            <div className="mb-6 text-center sm:mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
                Mukana tukemassa
              </p>
              <h3
                className="break-words text-2xl font-black text-gray-900 hyphens-auto md:text-3xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Yhteistyö<wbr />kumppanit
              </h3>
            </div>
            <div className="grid grid-cols-2 items-stretch gap-2.5 sm:gap-4 lg:grid-cols-4">
              {partners.map((partner) => {
                const isDark = partner.variant === 'dark'
                const card = (
                  <div
                    className={`flex h-28 flex-col rounded-xl border p-3 shadow-sm sm:h-32 sm:p-4 ${
                      isDark
                        ? 'border-gray-800 bg-gray-900'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex min-h-0 flex-1 items-center justify-center [&_img]:!max-h-14 sm:[&_img]:!max-h-16">
                      <Image
                        src={partner.image}
                        alt={partner.alt}
                        width={360}
                        height={180}
                        className={
                          partner.imageClassName ??
                          'h-14 w-full max-w-[180px] object-contain sm:h-16'
                        }
                      />
                    </div>
                    {partner.name ? (
                      <p
                        className={`mt-1.5 shrink-0 text-center text-[11px] font-semibold leading-tight sm:text-xs ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {partner.name}
                      </p>
                    ) : null}
                  </div>
                )

                return partner.url ? (
                  <a
                    key={partner.id}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-opacity hover:opacity-90"
                  >
                    {card}
                  </a>
                ) : (
                  <div key={partner.id}>{card}</div>
                )
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Contact */}
        <AnimatedSection delay={0.3}>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[contacts.tiina, contacts.jonna].map((c) => (
                <a
                  key={c.email}
                  href={`mailto:${c.email}`}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-colors hover:border-orange-300 hover:bg-orange-50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100">
                    <Mail size={18} className="text-orange-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{c.name}</p>
                    <p className="text-xs text-gray-500">{c.email}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
