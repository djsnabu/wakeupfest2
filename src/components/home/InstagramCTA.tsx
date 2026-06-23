import { contacts } from '@/lib/data'
import GradientButton from '@/components/ui/GradientButton'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { InstagramIcon } from '@/components/ui/InstagramIcon'

export default function InstagramCTA() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <AnimatedSection>
        <div
          className="mx-auto max-w-2xl rounded-3xl border border-gray-200 p-6 text-center sm:p-12"
          style={{
            background: 'linear-gradient(135deg, rgba(217,70,239,0.14), rgba(236,72,153,0.12))',
          }}
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/15">
            <InstagramIcon size={28} className="text-pink-700" />
          </div>
          <h2
            className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Seuraa meitä
          </h2>
          <p className="mb-6 text-gray-600">
            Uusimmat uutiset, esiintyjäjulkistukset ja tapahtumapäivitykset Instagramissa.
          </p>
          <p className="mb-8 text-xl font-bold text-pink-600">{contacts.instagram}</p>
          <GradientButton href={contacts.instagramUrl} variant="secondary" external>
            <InstagramIcon size={16} />
            Seuraa Instagramissa
          </GradientButton>
        </div>
      </AnimatedSection>
    </section>
  )
}
