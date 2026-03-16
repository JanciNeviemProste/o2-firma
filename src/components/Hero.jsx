export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://loremflickr.com/1920/1080/construction,building?random=1"
          alt="Moderná stavba — stavebné práce"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-950/70 to-gray-900/80" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
          Staviame s vášňou.
          <br />
          <span className="text-blue-500">Budujeme dôveru.</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-gray-300 mb-12">
          StavPetro je stavebná firma s dlhoročnými skúsenosťami v oblasti
          výstavby, rekonštrukcií a stavebného poradenstva. Vaša spokojnosť je
          naša priorita.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kontakt"
            className="w-full sm:w-auto bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-md transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Nezáväzná konzultácia
          </a>
          <a
            href="#sluzby"
            className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg backdrop-blur-md bg-white/5 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Naše služby
          </a>
        </div>
      </div>
    </section>
  )
}
