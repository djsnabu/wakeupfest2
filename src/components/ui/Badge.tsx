interface BadgeProps {
  children: React.ReactNode
  variant?: 'orange' | 'purple' | 'teal' | 'glass'
  className?: string
}

export default function Badge({ children, variant = 'glass', className = '' }: BadgeProps) {
  const variants = {
    orange: 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
    purple: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    teal: 'bg-teal-500/20 text-teal-300 border border-teal-500/30',
    glass: 'bg-white/10 text-white border border-white/20',
  }
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
