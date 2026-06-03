import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { workshops } from '@/lib/data'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function WorkshopPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <AnimatedSection>
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg font-medium leading-relaxed text-gray-900 md:text-xl">
          Tapahtumassa tarjolla monipuolisesti maksuttomia
          <br />
          työpajoja - et tarvitse aiempaa kokemusta!
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-3">
        {workshops.map((w, i) => (
          <AnimatedSection key={w.id} delay={i * 0.1} className="h-full">
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40">
              {w.image &&
                (w.imageFit === 'contain' ? (
                  <div
                    className={`relative aspect-square w-full border-b border-gray-200 p-4 ${w.imageBg ?? 'bg-gray-50'}`}
                  >
                    <Image
                      src={w.image}
                      alt={`${w.facilitator} - ${w.title}`}
                      width={400}
                      height={400}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-square w-full border-b border-gray-200">
                    <Image
                      src={w.image}
                      alt={`${w.facilitator} - ${w.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover"
                      style={{ objectPosition: w.imagePosition ?? 'center' }}
                    />
                  </div>
                ))}
              <div className="p-4 text-center">
                <h3 className="text-sm font-bold text-gray-900">{w.title}</h3>
                <p className="mt-1 text-xs text-gray-500">{w.facilitator}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/workshopit"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors"
        >
          Workshopit
          <ArrowRight size={16} aria-hidden />
        </Link>
      </div>
    </section>
  )
}
