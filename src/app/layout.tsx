import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

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
  title: 'WakeUpfest 2026 – Tampere',
  description:
    'WakeUpfest – ilmainen, päihteetön festivaali Tampereella 28.7.2026. Puhujia, artisteja ja workshopeja huumevalistuksesta ja hyvinvoinnista.',
  openGraph: {
    title: 'WakeUpfest 2026',
    description: 'Tampere Eteläpuisto, 28.7.2026 klo 15–22. Ilmainen pääsy.',
    locale: 'fi_FI',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-[#080810] text-white font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
