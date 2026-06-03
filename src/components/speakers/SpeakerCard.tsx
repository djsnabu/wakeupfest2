import Image from 'next/image'
import type { Speaker } from '@/types'
import Badge from '@/components/ui/Badge'
import SpeakerDescription from '@/components/speakers/SpeakerDescription'

const gradients = [
  'from-orange-500 to-yellow-400',
  'from-purple-500 to-pink-500',
  'from-teal-500 to-blue-500',
  'from-pink-500 to-orange-400',
  'from-blue-500 to-teal-400',
  'from-yellow-400 to-orange-500',
]

function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
}

export default function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5">
      {speaker.image ? (
        <div className="relative aspect-square w-full">
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            style={{ objectPosition: speaker.imagePosition ?? '50% 30%' }}
          />
        </div>
      ) : (
        <div
          className={`flex aspect-square w-full items-center justify-center bg-gradient-to-br ${gradients[index % gradients.length]}`}
        >
          <span className="text-4xl font-bold text-black">{getInitials(speaker.name)}</span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3
          className="min-h-[3.25rem] line-clamp-2 text-lg font-bold leading-snug text-gray-900"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {speaker.name}
        </h3>
        <div className="mt-0.5 min-h-4">
          {speaker.handle && (
            <a
              href={`https://instagram.com/${speaker.handle.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-teal-700 transition-colors hover:text-teal-800"
            >
              {speaker.handle}
            </a>
          )}
        </div>

        <div className="mt-3 flex min-h-[2.75rem] items-start">
          <Badge variant="orange">{speaker.topic}</Badge>
        </div>

        <SpeakerDescription description={speaker.description} />
      </div>
    </div>
  )
}
