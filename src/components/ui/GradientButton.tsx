import Link from 'next/link'

interface GradientButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  external?: boolean
}

export default function GradientButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  external = false,
}: GradientButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer'

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#fde047] via-[#facc15] to-[#eab308] text-black shadow-[0_8px_30px_-6px_rgba(234,179,8,0.45)]',
    secondary:
      'bg-gradient-to-r from-[#e879f9] via-[#ec4899] to-[#db2777] text-white shadow-[0_8px_30px_-6px_rgba(236,72,153,0.35)]',
    outline:
      'border border-white/30 bg-transparent text-white hover:border-[#facc15]/70 hover:bg-white/5',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
