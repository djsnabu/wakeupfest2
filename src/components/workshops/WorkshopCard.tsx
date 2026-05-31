import Image from 'next/image'
import { Palette, Wind, Zap, Shield } from 'lucide-react'
import type { Workshop } from '@/types'
import Badge from '@/components/ui/Badge'

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Wind,
  Zap,
  Shield,
}

export default function WorkshopCard({ workshop }: { workshop: Workshop }) {
  const Icon = iconMap[workshop.icon] || Palette

  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f1a] transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/5">
      {workshop.image && (
        <div className="flex h-40 items-center justify-center border-b border-white/10 bg-white/5 p-4">
          <Image
            src={workshop.image}
            alt={`${workshop.facilitator} - ${workshop.title}`}
            width={480}
            height={260}
            className={`h-full w-full ${workshop.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
          />
        </div>
      )}

      <div className="p-8">
        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/10 transition-colors group-hover:bg-teal-500/20">
          <Icon size={28} className="text-teal-400" />
        </div>

      {/* Free badge */}
      <Badge variant="teal" className="mb-4">
        Ilmainen
      </Badge>

      {/* Title */}
      <h3
        className="text-xl font-bold text-white"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {workshop.titleFi}
      </h3>

      {/* Facilitator */}
      <p className="mt-2 text-sm text-teal-400">
        Ohjaaja: {workshop.facilitator}
      </p>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-gray-400">{workshop.description}</p>
      </div>
    </div>
  )
}
