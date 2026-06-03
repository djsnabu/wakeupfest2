'use client'

import Image from 'next/image'

const LOGO_SRC = '/wakeupfest-logo.png'
const HERO_SRC = '/wakeupfest-hero.jpg'
const LOGO_W = 515
const LOGO_H = 249
const HERO_W = 1024
const HERO_H = 438

type Variant = 'navbar' | 'hero' | 'footer'

const variantClass: Record<Variant, { wrap: string; img: string; src: string }> = {
  navbar: {
    src: LOGO_SRC,
    wrap: 'inline-block shrink-0',
    img: 'h-9 w-auto max-w-[min(42vw,11rem)] md:h-10',
  },
  hero: {
    src: HERO_SRC,
    wrap: 'mx-auto inline-block w-full max-w-5xl',
    img: 'h-auto w-full rounded-2xl shadow-2xl shadow-gray-300/60',
  },
  footer: {
    src: LOGO_SRC,
    wrap: 'inline-block shrink-0',
    img: 'h-12 w-auto max-w-[14rem] sm:h-14',
  },
}

export default function WakeUpFestLogo({
  variant = 'navbar',
  priority = false,
}: {
  variant?: Variant
  priority?: boolean
}) {
  const { wrap, img, src } = variantClass[variant]

  return (
    <span className={wrap}>
      <Image
        src={src}
        alt="WakeUpfest"
        width={variant === 'hero' ? HERO_W : LOGO_W}
        height={variant === 'hero' ? HERO_H : LOGO_H}
        className={`block object-contain ${img}`}
        priority={priority}
        sizes={
          variant === 'hero'
            ? '(max-width: 768px) 100vw, 1024px'
            : '(max-width: 768px) 160px, 200px'
        }
      />
    </span>
  )
}
