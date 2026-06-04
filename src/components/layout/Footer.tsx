import Link from 'next/link'
import { Mail } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/InstagramIcon'
import WakeUpFestLogo from '@/components/layout/WakeUpFestLogo'
import { contacts, navLinks, venue } from '@/lib/data'

export default function Footer() {
  const quickLinks = [
    ...navLinks.filter((link) => link.href !== '/'),
    { href: '/liput', label: 'Liput' },
  ]

  return (
    <footer className="mt-24 border-t border-gray-200 bg-bg-base">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Logo + tagline */}
          <div>
            <div className="mb-4">
              <WakeUpFestLogo variant="footer" />
            </div>
            <div className="flex items-center gap-2">
              <span
                className="gradient-text-primary text-2xl font-black"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                WakeUpfest
              </span>
              <span className="rounded bg-orange-100 px-1.5 py-0.5 text-xs font-bold text-orange-800">
                2026
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Hyväntekeväisyysfestivaali Tampereella — päihteetön, ikärajaton.
            </p>
            <p className="mt-1 text-sm text-gray-600">28. heinäkuuta 2026 · {venue.short}</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Sivukartta
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Yhteystiedot
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contacts.tiina.email}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Mail size={14} className="text-gray-600" />
                  <span>{contacts.tiina.name}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contacts.jonna.email}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Mail size={14} className="text-gray-600" />
                  <span>{contacts.jonna.name}</span>
                </a>
              </li>
              <li>
                <a
                  href={contacts.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-pink-700 transition-colors"
                >
                  <InstagramIcon size={14} className="text-gray-600" />
                  <span>{contacts.instagram}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6 text-center text-xs text-gray-700">
          © 2026 WakeUpfest. Tapahtuma järjestetään kokonaisuudessaan hyväntekeväisyytenä.
        </div>
      </div>
    </footer>
  )
}
