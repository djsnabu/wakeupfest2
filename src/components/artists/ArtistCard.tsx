import Image from 'next/image'
import { Music } from 'lucide-react'
import type { Artist } from '@/types'
import Badge from '@/components/ui/Badge'

const headerGradients = [
  'from-purple-900/60 to-pink-900/60',
  'from-orange-900/60 to-yellow-900/60',
  'from-teal-900/60 to-blue-900/60',
]

export default function ArtistCard({ artist, index }: { artist: Artist; index: number }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/5">
      {/* Header */}
      <div
        className={`relative aspect-square w-full bg-gradient-to-br ${headerGradients[index % headerGradients.length]}`}
      >
        {artist.image ? (
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            style={{ objectPosition: artist.imagePosition ?? '50% 30%' }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Music size={40} className="text-gray-600" />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3
          className="min-h-[2.75rem] line-clamp-2 text-xl font-bold leading-snug text-gray-900"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {artist.name}
        </h3>
        <p className="mt-1 min-h-4 text-xs text-gray-500">{artist.origin ?? ''}</p>
        <div className="mt-3 flex min-h-[2.75rem] items-start">
          {artist.genre && <Badge variant="purple">{artist.genre}</Badge>}
        </div>
        <p className="mt-4 line-clamp-4 min-h-[6.5rem] flex-1 text-sm leading-relaxed text-gray-600">
          {artist.description}
        </p>
      </div>
    </div>
  )
}
