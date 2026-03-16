const FEATURES = [
  {
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 22h20M6 18V8l6-4 6 4v10M10 22v-4h4v4" />
      </svg>
    ),
    title: 'Novostavby',
    description:
      'Realizujeme kompletné novostavby rodinných domov, bytových domov a komerčných budov. Od základov po odovzdanie kľúčov.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
    title: 'Rekonštrukcie',
    description:
      'Premieňame staré priestory na moderné. Rekonštrukcie bytov, domov aj nebytových priestorov podľa vašich predstáv.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: 'Stavebné poradenstvo',
    description:
      'Poradíme vám s výberom materiálov, rozpočtom aj projektovou dokumentáciou. Odborné konzultácie na mieru.',
  },
]

export default function Features() {
  return (
    <section id="sluzby" className="bg-gray-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Čo pre vás môžeme urobiť
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ponúkame komplexné stavebné služby od projektu až po realizáciu.
            Každý projekt riešime individuálne a s maximálnou starostlivosťou.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-blue-500/30"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
