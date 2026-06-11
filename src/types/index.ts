export interface Speaker {
  id: string
  name: string
  handle?: string
  topic: string
  description: string
  image?: string
  /** CSS object-position for portrait crops, e.g. "50% 30%" */
  imagePosition?: string
}

export interface ArtistLink {
  label: string
  url: string
}

export interface Artist {
  id: string
  name: string
  handle?: string
  /** Override default Instagram URL for handle, e.g. link-in-bio page */
  profileUrl?: string
  links?: ArtistLink[]
  origin: string
  genre: string
  description: string
  image?: string
  imageFit?: 'cover' | 'contain'
  /** Tailwind bg class when imageFit is contain, e.g. bg-gray-900 */
  imageBg?: string
  /** CSS object-position for portrait crops, e.g. "50% 30%" */
  imagePosition?: string
}

export interface Workshop {
  id: string
  title: string
  titleFi: string
  facilitator: string
  description: string
  icon: string
  image?: string
  imageFit?: 'cover' | 'contain'
  imagePosition?: string
  /** Tailwind bg class for logo/banner area, e.g. bg-[#0f1a4d] */
  imageBg?: string
}

export interface Partner {
  id: string
  name?: string
  image: string
  alt: string
  url?: string
  variant?: 'dark' | 'light'
  /** Optional Tailwind classes for logo sizing, e.g. "h-20 max-w-[240px]" */
  imageClassName?: string
}

export interface NavLink {
  href: string
  label: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
  /** Optional internal path appended as a link after the answer */
  linkHref?: string
  linkLabel?: string
  /** Optional external URL in the answer context */
  externalHref?: string
  externalLabel?: string
}
