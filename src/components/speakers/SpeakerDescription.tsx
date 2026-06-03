'use client'

import { useState } from 'react'

const EXPAND_THRESHOLD = 240

function needsExpand(description: string) {
  const trimmed = description.trim()
  return trimmed.includes('\n\n') || trimmed.length > EXPAND_THRESHOLD
}

export default function SpeakerDescription({ description }: { description: string }) {
  const expandable = needsExpand(description)
  const [expanded, setExpanded] = useState(false)
  const collapsed = expandable && !expanded

  return (
    <div className="mt-4 flex flex-1 flex-col">
      <p
        className={`text-sm leading-relaxed text-gray-600 ${
          collapsed
            ? 'line-clamp-4 min-h-[6.5rem]'
            : expanded
              ? 'whitespace-pre-line'
              : 'min-h-[6.5rem]'
        }`}
      >
        {description}
      </p>
      <div className="mt-3 flex min-h-9 shrink-0 items-start">
        {expandable ? (
          <button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            aria-expanded={expanded}
            className="text-sm font-semibold text-orange-700 transition-colors hover:text-orange-800"
          >
            {expanded ? 'Näytä vähemmän' : 'Lue lisää'}
          </button>
        ) : (
          <span className="invisible text-sm font-semibold" aria-hidden>
            Lue lisää
          </span>
        )}
      </div>
    </div>
  )
}
