import Image from 'next/image'
import type { Workshop } from '@/types'

export default function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/5">
      {workshop.image &&
        (workshop.imageFit === 'contain' ? (
          <div
            className={`relative flex aspect-square w-full items-center justify-center border-b border-gray-200 p-4 ${workshop.imageBg ?? 'bg-gray-50'}`}
          >
            <Image
              src={workshop.image}
              alt={`${workshop.facilitator} - ${workshop.title}`}
              width={480}
              height={260}
              className="h-full w-full object-contain"
            />
          </div>
        ) : (
          <div className="relative aspect-square w-full border-b border-gray-200">
            <Image
              src={workshop.image}
              alt={`${workshop.facilitator} - ${workshop.title}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              className="object-cover"
              style={{ objectPosition: workshop.imagePosition ?? 'center' }}
            />
          </div>
        ))}

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3
          className="min-h-[3.25rem] line-clamp-2 text-xl font-bold leading-snug text-gray-900"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {workshop.titleFi}
        </h3>

        <p className="mt-2 min-h-5 text-sm text-teal-700">Ohjaaja: {workshop.facilitator}</p>

        <p className="mt-4 line-clamp-5 min-h-[8.125rem] flex-1 text-sm leading-relaxed text-gray-600">
          {workshop.description}
        </p>
      </div>
    </div>
  )
}
