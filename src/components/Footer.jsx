export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="#hero" className="text-xl font-bold text-white transition-all duration-300 hover:text-blue-400">
              Stav<span className="text-blue-500">Petro</span>
            </a>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              Profesionálna stavebná firma so sídlom v Žiline. Stavby, rekonštrukcie a poradenstvo na jednom mieste.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigácia
            </h4>
            <nav className="flex flex-col gap-2">
              <a href="#hero" className="text-gray-400 text-sm transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1">
                Domov
              </a>
              <a href="#sluzby" className="text-gray-400 text-sm transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1">
                Služby
              </a>
              <a href="#kontakt" className="text-gray-400 text-sm transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1">
                Kontakt
              </a>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Kontakt
            </h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <p>info@stavpetro.sk</p>
              <p>+421 900 123 456</p>
              <p>Hlavná 42, 010 01 Žilina</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} StavPetro. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  )
}
