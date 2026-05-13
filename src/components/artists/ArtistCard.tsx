import { Music } from 'lucide-react'
import type { Artist } from '@/types'
import Badge from '@/components/ui/Badge'

const headerGradients = [
  'from-purple-900/60 to-pink-900/60',
  'from-orange-900/60 to-yellow-900/60',
  'from-teal-900/60 to-blue-900/60',
]

export default function ArtistCard({ artist, index }: { artist: Artist; index: number }) {
  if (artist.isHeadliner) {
    return (
      <div className="overflow-hidden rounded-2xl border border-purple-500/40 bg-gradient-to-br from-purple-900/20 to-pink-900/20 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/70 hover:shadow-xl hover:shadow-purple-500/10">
        <div className="flex h-32 items-center justify-center">
          <span className="gradient-text-accent text-7xl font-black">?</span>
        </div>
        <div className="p-6">
          <h3
            className="gradient-text-accent text-2xl font-black"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Headliner
          </h3>
          <Badge variant="purple" className="mt-2">
            Paljastetaan myöhemmin
          </Badge>
          <p className="mt-4 text-sm text-gray-400">{artist.description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f1a] transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/5">
      {/* Header */}
      <div
        className={`flex h-32 items-center justify-center bg-gradient-to-br ${headerGradients[index % headerGradients.length]}`}
      >
        <Music size={32} className="text-white/40" />
      </div>

      {/* Body */}
      <div className="p-6">
        <h3
          className="text-xl font-bold text-white"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {artist.name}
        </h3>
        {artist.origin && (
          <p className="mt-1 text-xs text-gray-500">{artist.origin}</p>
        )}
        {artist.genre && (
          <Badge variant="purple" className="mt-3">
            {artist.genre}
          </Badge>
        )}
        <p className="mt-4 text-sm leading-relaxed text-gray-400">{artist.description}</p>
      </div>
    </div>
  )
}
