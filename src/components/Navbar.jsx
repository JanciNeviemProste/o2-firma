import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Domov', href: '#hero' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/80 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#hero"
            className="text-xl md:text-2xl font-bold text-white transition-all duration-300 hover:text-blue-400"
          >
            Stav<span className="text-blue-500">Petro</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 font-medium transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded-lg px-2 py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-blue-400 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Napíšte nám
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Otvoriť menu"
            className="md:hidden text-gray-300 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-gray-950/95 backdrop-blur-md border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 font-medium py-2 transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-center shadow-md transition-all duration-300 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Napíšte nám
          </a>
        </div>
      </div>
    </nav>
  )
}
