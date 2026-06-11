import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { venue } from '@/lib/data'
import { siteUrl } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'WakeUpfest 2026',
  description: `Ikärajaton ja päihteetön festivaali 28.7.2026 klo 15–22. Maksa mitä jaksat -liput. ${venue.address}, Tampere.`,
  openGraph: {
    title: 'WakeUpfest 2026',
    description: `28.7.2026 klo 15–22 · ${venue.name}, Tampere. Hyväntekeväisyystapahtuma — seuraa @wakeupfest_finland.`,
    url: siteUrl,
    siteName: 'WakeUpfest',
    locale: 'fi_FI',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-bg-base text-gray-900 font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
