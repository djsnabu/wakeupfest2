import type { Speaker } from '@/types'
import Badge from '@/components/ui/Badge'

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

function getGradient(id: string) {
  const index = id.charCodeAt(0) % gradients.length
  return gradients[index]
}

export default function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-[#0f0f1a] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5">
      {/* Avatar */}
      <div
        className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${gradients[index % gradients.length]} text-base font-bold text-black`}
      >
        {getInitials(speaker.name)}
      </div>

      {/* Name + handle */}
      <h3
        className="text-lg font-bold text-white"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {speaker.name}
      </h3>
      {speaker.handle && (
        <a
          href={`https://instagram.com/${speaker.handle.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0.5 text-xs text-teal-400 hover:text-teal-300 transition-colors"
        >
          {speaker.handle}
        </a>
      )}

      {/* Topic badge */}
      <div className="mt-3">
        <Badge variant="orange">{speaker.topic}</Badge>
      </div>

      {/* Description */}
      <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-400">{speaker.description}</p>
    </div>
  )
}
