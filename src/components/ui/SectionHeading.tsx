interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 ${className}`}>
      {eyebrow && (
        <p className="gradient-text-accent mb-3 text-xs font-semibold uppercase tracking-[0.2em]">
          {eyebrow}
        </p>
      )}
      <h2
        className="mx-auto max-w-4xl break-words text-balance text-3xl font-bold leading-tight text-gray-900 hyphens-auto sm:text-4xl md:text-5xl"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">{subtitle}</p>
      )}
    </div>
  )
}
