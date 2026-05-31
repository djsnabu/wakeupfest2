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
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
  {
    icon: Heart,
    title: 'Yhteiskuntavastuu',
    desc: 'Osoita vastuullisuuttasi tukemalla huumevalistusta ja hyvinvointia edistävää tapahtumaa.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
  },
  {
    icon: Users,
    title: 'Kohtaaminen',
    desc: 'Kohtaa yleisösi suoraan – tapahtuma tuo yhteen nuoria, perheitä ja ammattilaisia.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
]

export default function KumppanuudetPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Yhteistyökumppanuus"
            title="Tule kumppaniksemme"
            subtitle="WakeUpfest on kokonaan hyväntekeväisyyspohjalta järjestettävä tapahtuma — ei palkkoja, ei voittoa."
          />
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection delay={0.1} className="mb-12">
          <div
            className="rounded-2xl border border-white/10 p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(250,204,21,0.1), rgba(217,70,239,0.1))',
            }}
          >
            <p className="mx-auto max-w-2xl text-gray-300 leading-relaxed">
              WakeUpfest 2026 on Tampereen Eteläpuistossa järjestettävä ilmainen festivaali,
              jonka tavoitteena on lisätä tietoisuutta Suomen huumatilanteesta. Tapahtuma
              yhdistää puhujia, musiikkia ja workshopeja — täysin päihteettömänä, kaikille avoimena päivänä.
            </p>
          </div>
        </AnimatedSection>

        {/* Why partner */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-[#0f0f1a] p-6">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${r.bg}`}>
                  <r.icon size={22} className={r.color} />
                </div>
                <h3 className="mb-2 font-bold text-white">{r.title}</h3>
                <p className="text-sm text-gray-400">{r.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Partners */}
        <AnimatedSection delay={0.25} className="mb-16">
          <div className="rounded-2xl border border-white/10 bg-[#0f0f1a] p-8">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
                Mukana tukemassa
              </p>
              <h3
                className="text-2xl font-black text-white md:text-3xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Yhteistyökumppanit
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className={`flex min-h-32 items-center justify-center rounded-xl border border-white/10 p-6 ${
                    partner.variant === 'light' ? 'bg-white' : 'bg-black/40'
                  }`}
                >
                  <Image
                    src={partner.image}
                    alt={partner.alt}
                    width={360}
                    height={180}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Contact */}
        <AnimatedSection delay={0.3}>
          <div className="rounded-2xl border border-white/10 bg-[#0f0f1a] p-8">
            <h3 className="mb-2 text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Ota yhteyttä
            </h3>
            <p className="mb-6 text-sm text-gray-400">
              Kumppanuuskyselyt: ota yhteyttä suoraan sähköpostilla.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[contacts.tiina, contacts.jonna].map((c) => (
                <a
                  key={c.email}
                  href={`mailto:${c.email}`}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-orange-500/40 hover:bg-orange-500/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                    <Mail size={18} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{c.name}</p>
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
