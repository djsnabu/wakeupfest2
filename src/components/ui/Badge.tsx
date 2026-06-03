interface BadgeProps {
  children: React.ReactNode
  variant?: 'orange' | 'purple' | 'teal' | 'glass'
  className?: string
}

export default function Badge({ children, variant = 'glass', className = '' }: BadgeProps) {
  const variants = {
    orange: 'bg-orange-100 text-orange-800 border border-orange-200',
    purple: 'bg-purple-100 text-purple-800 border border-purple-200',
    teal: 'bg-teal-100 text-teal-800 border border-teal-200',
    glass: 'bg-gray-100 text-gray-800 border border-gray-200',
  }
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
