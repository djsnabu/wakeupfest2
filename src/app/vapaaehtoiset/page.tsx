import type { Metadata } from 'next'
import { Mail, Star, MessageSquare, HandHeart, Megaphone } from 'lucide-react'
import { contacts } from '@/lib/data'
import { InstagramIcon } from '@/components/ui/InstagramIcon'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Badge from '@/components/ui/Badge'
import GradientButton from '@/components/ui/GradientButton'

export const metadata: Metadata = {
  title: 'Vapaaehtoistoiminta – WakeUpfest 2026',
  description: 'Liity WakeUpfest 2026 vapaaehtoistiimiimme. Tapahtuma järjestetään kokonaan hyväntekeväisyytenä.',
}

const roles = [
  {
    icon: HandHeart,
    title: 'Tapahtuma-assistentti',
    desc: 'Auta vieraita tapahtuma-alueella, opasta kävijöitä ja huolehdi sujuvasta kulusta.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
  {
    icon: Megaphone,
    title: 'Viestintä & some',
    desc: 'Auta tapahtuman markkinoinnissa Instagramissa, TikTokissa tai muissa kanavissa.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
  },
  {
    icon: MessageSquare,
    title: 'Asiakaspalvelu',
    desc: 'Toimi infopisteellä ja vastaa kävijöiden kysymyksiin tapahtuman aikana.',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
  },
]

const benefits = ['Kokemus', 'Tiimi', 'Vaikutus', 'Verkosto', 'Yhteisö', 'Merkitys']

export default function VapaaehtoistoimintaPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Vapaaehtoistoiminta"
            title="Liity tiimiin"
            subtitle="Tapahtuma järjestetään kokonaan hyväntekeväisyystyönä — ei palkkoja, vain intohimoa ja merkitystä."
          />
        </AnimatedSection>

        {/* Hero */}
        <AnimatedSection delay={0.1} className="mb-12">
          <div
            className="rounded-2xl border border-purple-500/20 p-8 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(236,72,153,0.08))' }}
          >
            <Star size={40} className="mx-auto mb-4 text-purple-400" />
            <p className="mx-auto max-w-2xl text-gray-300 leading-relaxed">
              Haemme vapaaehtoisia auttamaan ainutlaatuisen tapahtuman toteuttamisessa.
              Voit myös ilmoittautua järjestämään oman pop-up-pisteen tapahtuma-alueelle.
              Ota yhteyttä ja kerro miten haluaisit osallistua!
            </p>
          </div>
        </AnimatedSection>

        {/* Roles */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {roles.map((r, i) => (
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

        {/* Benefits */}
        <AnimatedSection delay={0.3} className="mb-12 text-center">
          <p className="mb-4 text-sm text-gray-500 uppercase tracking-widest">Mitä saat mukaan</p>
          <div className="flex flex-wrap justify-center gap-2">
            {benefits.map((b) => (
              <Badge key={b} variant="glass" className="text-sm px-4 py-2">
                {b}
              </Badge>
            ))}
          </div>
        </AnimatedSection>

        {/* Contact */}
        <AnimatedSection delay={0.4}>
          <div className="rounded-2xl border border-white/10 bg-[#0f0f1a] p-8">
            <h3 className="mb-2 text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Ilmoittaudu vapaaehtoiseksi
            </h3>
            <p className="mb-6 text-sm text-gray-400">
              Ota yhteyttä sähköpostilla tai seuraa meitä Instagramissa.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[contacts.tiina, contacts.jonna].map((c) => (
                <a
                  key={c.email}
                  href={`mailto:${c.email}`}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-purple-500/40 hover:bg-purple-500/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/10">
                    <Mail size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{c.name}</p>
                    <p className="text-xs text-gray-500">{c.email}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-4 text-center">
              <GradientButton href={contacts.instagramUrl} variant="outline" external>
                <InstagramIcon size={16} />
                {contacts.instagram}
              </GradientButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
