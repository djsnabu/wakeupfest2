import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { partners } from '@/lib/data'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function PartnerPreview() {
  return (
    <section id="yhteistyokumppanit" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16">
      <AnimatedSection>
        <div className="mb-7 text-center sm:mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
            Mukana tukemassa
          </p>
          <h2
            className="break-words text-2xl font-black text-gray-900 hyphens-auto md:text-3xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Yhteistyö<wbr />kumppanit
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-2 items-stretch gap-2.5 sm:gap-4 lg:grid-cols-4">
        {partners.map((partner, i) => {
          const isDark = partner.variant === 'dark'
          const card = (
            <div
              className={`flex h-28 flex-col rounded-xl border p-3 shadow-sm sm:h-32 sm:rounded-2xl sm:p-4 ${
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
