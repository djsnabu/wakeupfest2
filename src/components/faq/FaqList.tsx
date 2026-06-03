import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '@/types'
import { faqItems } from '@/lib/data'

export default function FaqList({ items = faqItems }: { items?: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.id}
          className="group rounded-2xl border border-gray-200 bg-white shadow-sm open:border-orange-200 open:shadow-md"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-base font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDown
              size={20}
              className="shrink-0 text-gray-400 transition-transform group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <div className="border-t border-gray-100 px-6 pb-6 pt-4">
            <p className="text-sm leading-relaxed text-gray-600">{item.answer}</p>
            {item.linkHref && item.linkLabel && (
              <Link
                href={item.linkHref}
                className="mt-2 inline-block text-sm font-semibold text-orange-700 hover:text-orange-800"
              >
                {item.linkLabel}
              </Link>
            )}
            {item.externalHref && item.externalLabel && (
              <a
                href={item.externalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-orange-700 hover:text-orange-800"
              >
                {item.externalLabel}
              </a>
            )}
          </div>
        </details>
      ))}
    </div>
  )
}
