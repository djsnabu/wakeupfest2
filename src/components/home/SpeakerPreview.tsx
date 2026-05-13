import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { speakers } from '@/lib/data'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'

function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
}

const gradients = [
  'from-orange-500 to-yellow-400',
  'from-purple-500 to-pink-500',
  'from-teal-500 to-blue-500',
]

export default function SpeakerPreview() {
  const preview = speakers.slice(0, 3)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Puhujat"
          title="Inspiroivat esiintyjät"
          subtitle="Kokemuksia, asiantuntemusta ja rohkeita puheenvuoroja."
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {preview.map((speaker, i) => (
          <AnimatedSection key={speaker.id} delay={i * 0.1}>
            <div className="rounded-2xl border border-white/10 bg-[#0f0f1a] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30">
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${gradients[i % gradients.length]} text-sm font-bold text-black`}
              >
                {getInitials(speaker.name)}
              </div>
              <h3 className="font-semibold text-white">{speaker.name}</h3>
              {speaker.handle && (
                <p className="mb-1 text-xs text-teal-400">{speaker.handle}</p>
              )}
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">
                {speaker.topic}
              </p>
              <p className="mt-3 text-sm text-gray-400 line-clamp-3">{speaker.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/puhujat"
          className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors"
        >
          Kaikki puhujat ({speakers.length}) <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
