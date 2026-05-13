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
    primary: 'bg-gradient-to-r from-orange-500 to-yellow-400 text-black shadow-orange-500/25',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-purple-500/25',
    outline:
      'border border-white/30 bg-transparent text-white hover:border-orange-500/60 hover:bg-white/5',
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
