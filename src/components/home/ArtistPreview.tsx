import Link from 'next/link'
import { ArrowRight, Music } from 'lucide-react'
import { artists } from '@/lib/data'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Badge from '@/components/ui/Badge'

export default function ArtistPreview() {
  const confirmed = artists.filter((a) => !a.isHeadliner)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <AnimatedSection>
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg font-medium leading-relaxed text-white md:text-xl">
          Artistikattauksemme koostuu nousevista tähdistä ja musiikkialan ammattilaisista!
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {confirmed.map((artist, i) => (
          <AnimatedSection key={artist.id} delay={i * 0.1}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f1a] transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40">
              <div
                className="flex h-24 items-center justify-center"
                style={{
                  background:
                    i % 2 === 0
                      ? 'linear-gradient(135deg, rgba(217,70,239,0.28), rgba(236,72,153,0.26))'
                      : 'linear-gradient(135deg, rgba(250,204,21,0.28), rgba(234,179,8,0.26))',
                }}
              >
                <Music size={28} className="text-white/60" />
              </div>
              <div className="p-5">
                <h3
                  className="font-bold text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {artist.name}
                </h3>
                <p className="mt-1 text-xs text-gray-500">{artist.origin}</p>
                <Badge variant="purple" className="mt-2">
                  {artist.genre}
                </Badge>
              </div>
            </div>
          </AnimatedSection>
        ))}

        <AnimatedSection delay={0.3}>
          <div className="overflow-hidden rounded-2xl border border-purple-500/40 bg-gradient-to-br from-purple-900/20 to-pink-900/20 transition-all duration-300 hover:-translate-y-1">
            <div className="flex h-24 items-center justify-center">
              <span className="gradient-text-accent text-5xl font-black">?</span>
            </div>
            <div className="p-5">
              <h3
                className="gradient-text-accent font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Headliner
              </h3>
              <p className="mt-1 text-xs text-gray-500">Paljastetaan pian</p>
              <Badge variant="purple" className="mt-2">
                TBA
              </Badge>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/artistit"
          className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
        >
          Tutustu artisteihin <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
