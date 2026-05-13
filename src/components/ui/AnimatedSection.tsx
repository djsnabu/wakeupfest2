'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function AnimatedSection({ children, delay = 0, className = '' }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay * 1000)
          observer.disconnect()
        }
      },
      { rootMargin: '-50px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
      }}
    >
      {children}
    </div>
  )
}
