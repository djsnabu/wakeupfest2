import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Music } from 'lucide-react'
import { artists } from '@/lib/data'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Badge from '@/components/ui/Badge'

export default function ArtistPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <AnimatedSection>
        <p className="mx-auto mb-10 max-w-lg text-center text-lg font-medium leading-snug text-gray-900">
          Artistikattauksemme koostuu
          <br />
          nousevista tähdistä
          <br />
          ja musiikkialan ammattilaisista!
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artists.map((artist, i) => (
          <AnimatedSection key={artist.id} delay={i * 0.1} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40">
              <div
                className={`relative aspect-square w-full overflow-hidden ${
                  artist.imageFit === 'contain' ? (artist.imageBg ?? 'bg-gray-900') : ''
                }`}
              >
                {artist.image ? (
                  artist.imageFit === 'contain' ? (
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      width={480}
                      height={480}
                      className="h-full w-full object-contain p-2"
                    />
                  ) : (
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      style={{ objectPosition: artist.imagePosition ?? '50% 30%' }}
                    />
                  )
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background:
                        i % 2 === 0
                          ? 'linear-gradient(135deg, rgba(217,70,239,0.28), rgba(236,72,153,0.26))'
                          : 'linear-gradient(135deg, rgba(250,204,21,0.28), rgba(234,179,8,0.26))',
                    }}
                  >
                    <Music size={36} className="text-gray-600" />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3
                  className="min-h-[2.5rem] line-clamp-2 font-bold leading-snug text-gray-900"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {artist.name}
                </h3>
                <p className="mt-1 min-h-4 text-xs text-gray-500">{artist.origin}</p>
                <div className="mt-2 flex min-h-[2rem] items-start">
                  <Badge variant="purple">{artist.genre}</Badge>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/artistit"
          className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800 transition-colors"
        >
          Tutustu artisteihin
          <ArrowRight size={16} aria-hidden />
        </Link>
      </div>
    </section>
  )
}
