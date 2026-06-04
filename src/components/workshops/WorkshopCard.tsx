import Image from 'next/image'
import type { Workshop } from '@/types'

export default function WorkshopCard({
  workshop,
  compact = false,
}: {
  workshop: Workshop
  compact?: boolean
}) {
  return (
    <article className="flex h-full flex-col text-left">
      <h3
        className={`font-bold text-gray-900 ${compact ? 'text-lg' : 'text-2xl md:text-3xl'}`}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {workshop.title}
      </h3>

      {workshop.image &&
        (workshop.imageFit === 'contain' ? (
          <div
            className={`relative mt-4 aspect-square w-full overflow-hidden ${workshop.imageBg ?? 'bg-gray-50'}`}
          >
            <Image
              src={workshop.image}
              alt={`${workshop.facilitator} - ${workshop.title}`}
              width={480}
              height={480}
              className="h-full w-full object-contain p-4"
            />
          </div>
        ) : (
          <div className="relative mt-4 aspect-square w-full overflow-hidden">
            <Image
              src={workshop.image}
              alt={`${workshop.facilitator} - ${workshop.title}`}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
              style={{ objectPosition: workshop.imagePosition ?? 'center' }}
            />
          </div>
        ))}

      <p
        className={`mt-4 font-semibold text-orange-700 underline decoration-orange-700/80 underline-offset-2 ${
          compact ? 'text-sm' : 'text-base'
        }`}
      >
        {workshop.facilitator}
      </p>

      <p
        className={`mt-3 flex-1 whitespace-pre-line leading-relaxed text-gray-800 ${
          compact ? 'text-sm' : 'text-sm md:text-base'
        }`}
      >
        {workshop.description}
      </p>
    </article>
  )
}
