export interface Speaker {
  id: string
  name: string
  handle?: string
  topic: string
  description: string
  image?: string
}

export interface Artist {
  id: string
  name: string
  origin: string
  genre: string
  description: string
  isHeadliner?: boolean
  image?: string
}

export interface Workshop {
  id: string
  title: string
  titleFi: string
  facilitator: string
  description: string
  icon: string
}

export interface NavLink {
  href: string
  label: string
}
