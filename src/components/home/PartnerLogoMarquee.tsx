import Image from 'next/image'
import { partners } from '@/lib/data'

function LogoGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
      aria-hidden={duplicate || undefined}
    >
      {partners.map((partner) => {
        const logo = (
          <Image
            src={partner.image}
            alt={duplicate ? '' : partner.alt}
            width={240}
            height={96}
            className="h-10 w-28 object-contain sm:h-12 sm:w-36"
          />
        )

        return partner.url ? (
          <a
            key={partner.id}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={duplicate ? -1 : undefined}
            className="flex h-16 shrink-0 items-center justify-center opacity-80 transition-opacity hover:opacity-100 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 sm:h-20"
            aria-label={duplicate ? undefined : `${partner.name} – avautuu uuteen välilehteen`}
          >
            {logo}
          </a>
        ) : (
          <div key={partner.id} className="flex h-16 shrink-0 items-center justify-center sm:h-20">
            {logo}
          </div>
        )
      })}
    </div>
  )
}

export default function PartnerLogoMarquee() {
  return (
    <section
      id="kumppanijuna"
      aria-label="Yhteistyökumppanit"
      className="relative overflow-hidden border-y border-gray-200 bg-white py-1 shadow-sm"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-20" />
      <div className="partner-logo-marquee flex w-max items-center hover:[animation-play-state:paused]">
        <LogoGroup />
        <LogoGroup duplicate />
      </div>
    </section>
  )
}
