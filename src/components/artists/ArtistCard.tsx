import Image from 'next/image'
import { Music } from 'lucide-react'
import type { Artist } from '@/types'
import Badge from '@/components/ui/Badge'
import SpeakerDescription from '@/components/speakers/SpeakerDescription'

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
        className={`relative aspect-square w-full overflow-hidden ${
          artist.imageFit === 'contain'
            ? (artist.imageBg ?? 'bg-gray-900')
            : `bg-gradient-to-br ${headerGradients[index % headerGradients.length]}`
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
        <div className="mt-1 min-h-4">
          {artist.handle ? (
            <a
              href={
                artist.profileUrl ??
                `https://instagram.com/${artist.handle.replace('@', '')}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-teal-700 transition-colors hover:text-teal-800"
            >
              {artist.handle}
            </a>
          ) : (
            <p className="text-xs text-gray-500">{artist.origin}</p>
          )}
        </div>
        {artist.handle && artist.origin ? (
          <p className="mt-0.5 text-xs text-gray-500">{artist.origin}</p>
        ) : null}
        <div className="mt-3 flex min-h-[2.75rem] items-start">
          {artist.genre && <Badge variant="purple">{artist.genre}</Badge>}
        </div>
        <SpeakerDescription description={artist.description} />
        {artist.links && artist.links.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {artist.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-purple-700 underline-offset-2 hover:text-purple-800 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
