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
  title: 'WakeUpfest',
  description:
    'Heinäkuussa Tampereen Eteläpuistossa järjestetään ennennäkemätön hyväntekeväisyystapahtuma, jonka tavoitteena on ennen kaikkea nostaa Suomen huumetilanne näkyväksi. Artisteja, puhujia & workshopeja. Tätä ei ole ennen nähty. Tätä Suomi ei voi ohittaa!',
  openGraph: {
    title: 'WakeUpfest',
    description:
      'Heinäkuussa Tampereen Eteläpuistossa järjestetään ennennäkemätön hyväntekeväisyystapahtuma. Artisteja, puhujia & workshopeja. Seuraa somessa @wakeupfest_finland.',
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
