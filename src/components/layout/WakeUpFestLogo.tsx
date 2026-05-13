'use client'

import Image from 'next/image'

const SRC = '/wakeupfest-logo.jpg'
const INTRINSIC_W = 1024
const INTRINSIC_H = 438

type Variant = 'navbar' | 'hero' | 'footer'

const variantClass: Record<Variant, { wrap: string; img: string }> = {
  navbar: {
    wrap: 'rounded-xl bg-white px-2 py-1 shadow-md shadow-black/20',
    img: 'h-8 w-auto md:h-9',
  },
  hero: {
    wrap:
      'mx-auto inline-block rounded-3xl bg-white p-4 shadow-2xl shadow-black/50 md:p-5',
    img: 'h-[4.5rem] w-auto md:h-28 lg:h-32',
  },
  footer: {
    wrap: 'inline-block rounded-xl bg-white p-2 shadow-md shadow-black/20',
    img: 'h-11 w-auto sm:h-12',
  },
}

export default function WakeUpFestLogo({
  variant = 'navbar',
  priority = false,
}: {
  variant?: Variant
  priority?: boolean
}) {
  const { wrap, img } = variantClass[variant]

  return (
    <span className={wrap}>
      <Image
        src={SRC}
        alt="WakeUpfest"
        width={INTRINSIC_W}
        height={INTRINSIC_H}
        className={`block object-contain object-left ${img}`}
        priority={priority}
        sizes={variant === 'hero' ? '(max-width: 768px) 280px, 360px' : '(max-width: 768px) 140px, 160px'}
      />
    </span>
  )
}
