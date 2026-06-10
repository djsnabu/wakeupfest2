import type { Metadata } from 'next'
import { Mail, Star, MessageSquare, HandHeart, Megaphone } from 'lucide-react'
import { contacts } from '@/lib/data'
import { InstagramIcon } from '@/components/ui/InstagramIcon'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Badge from '@/components/ui/Badge'
import GradientButton from '@/components/ui/GradientButton'

export const metadata: Metadata = {
  title: 'Vapaaehtoiset – WakeUpfest 2026',
  description: 'Liity WakeUpfest 2026 vapaaehtoistiimiin. Tapahtuma järjestetään kokonaan hyväntekeväisyytenä.',
}

const roles = [
  {
    icon: HandHeart,
    title: 'Tapahtuma-assistentti',
    desc: 'Auta vieraita tapahtuma-alueella, opasta kävijöitä ja huolehdi sujuvasta kulusta.',
    color: 'text-orange-700',
    bg: 'bg-orange-100',
  },
  {
    icon: Megaphone,
    title: 'Viestintä & some',
    desc: 'Auta tapahtuman markkinoinnissa Instagramissa, TikTokissa tai muissa kanavissa.',
    color: 'text-pink-700',
    bg: 'bg-pink-100',
  },
  {
    icon: MessageSquare,
    title: 'Asiakaspalvelu',
    desc: 'Toimi infopisteellä ja vastaa kävijöiden kysymyksiin tapahtuman aikana.',
    color: 'text-teal-700',
    bg: 'bg-teal-100',
  },
]

const benefits = ['Kokemus', 'Tiimi', 'Vaikutus', 'Verkosto', 'Yhteisö', 'Merkitys']

export default function VapaaehtoistoimintaPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading
            title="Haluatko osallistua Wake Up festin toteuttamiseen?"
          />
        </AnimatedSection>

        {/* Hero */}
        <AnimatedSection delay={0.1} className="mb-12">
          <div
            className="rounded-2xl border border-purple-200 bg-purple-50/50 p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(217,70,239,0.1), rgba(236,72,153,0.08))',
            }}
          >
            <Star size={40} className="mx-auto mb-4 text-purple-700" />
            <p className="mx-auto max-w-2xl text-gray-600 leading-relaxed">
              Tapahtuma järjestetään kokonaisuudessaan hyväntekeväisyytenä, josta ei makseta
              rahallista korvausta tai palkkaa. Talkooväelle on kuitenkin aina tarvetta, joten kerro
              meille osaamisestasi tai mielenkiinnonkohteistasi,
              <br />
              tai jos haluat esimerkiksi toteuttaa tapahtumassa oman pop up-pisteen.
            </p>
          </div>
        </AnimatedSection>

        {/* Roles */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {roles.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${r.bg}`}>
                  <r.icon size={22} className={r.color} />
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{r.title}</h3>
                <p className="text-sm text-gray-600">{r.desc}</p>
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
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
            <h3 className="mb-2 text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
              Ota yhteyttä
            </h3>
            <p className="mb-6 text-sm text-gray-600">
              Kerro meille, miten haluaisit osallistua. Voit myös seurata meitä Instagramissa.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[contacts.tiina, contacts.jonna].map((c) => (
                <a
                  key={c.email}
                  href={`mailto:${c.email}`}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-colors hover:border-purple-300 hover:bg-purple-50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100">
                    <Mail size={18} className="text-purple-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{c.name}</p>
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
