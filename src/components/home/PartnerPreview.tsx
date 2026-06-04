import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { partners } from '@/lib/data'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function PartnerPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <AnimatedSection>
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
            Mukana tukemassa
          </p>
          <h2
            className="text-2xl font-black text-gray-900 md:text-3xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Yhteistyökumppanit
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
        {partners.map((partner, i) => {
          const isDark = partner.variant === 'dark'
          const card = (
            <div
              className={`flex h-36 flex-col rounded-2xl border p-5 shadow-sm sm:h-40 ${
                isDark
                  ? 'border-gray-800 bg-gray-900'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex flex-1 items-center justify-center">
                <Image
                  src={partner.image}
                  alt={partner.alt}
                  width={360}
                  height={180}
                  className="h-16 w-full max-w-[200px] object-contain sm:h-20"
                />
              </div>
              {partner.name ? (
                <p
                  className={`mt-2 shrink-0 text-center text-xs font-semibold leading-tight ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {partner.name}
                </p>
              ) : null}
            </div>
          )

          return (
            <AnimatedSection key={partner.id} delay={i * 0.08} className="h-full">
              {partner.url ? (
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full transition-opacity hover:opacity-90"
                >
                  {card}
                </a>
              ) : (
                card
              )}
            </AnimatedSection>
          )
        })}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/kumppanuudet"
          className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800 transition-colors"
        >
          Yhteistyökumppanuus
          <ArrowRight size={16} aria-hidden />
        </Link>
      </div>
    </section>
  )
}
