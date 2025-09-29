export default function OurServices() {
  return (
    <section id="services" className="py-24 pb-40 bg-white/85">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Como ajudamos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para transformar sua visão em
            realidade digital.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 md:max-w-5xl md:mx-auto md:px-2">
          <div className="card--for-business">
            <div className="drop-shadow lg:row-span-2  bg-white p-12 rounded-3xl border-2 border-[#8dbf30] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Para empresas
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Sites e aplicações web modernas, responsivas e otimizadas para
                  performance. Utilizamos as tecnologias mais atuais do mercado.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-[#feaa24] rounded-full"></div>
                    React, Next.js, TypeScript
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-[#fb4202] rounded-full"></div>
                    Design responsivo e acessível
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-[#8dbf30] rounded-full"></div>
                    Performance otimizada
                  </li>
                </ul>
                <button className="bg-gradient-to-r from-[#feaa24] to-[#fb4202] text-white px-8 py-3 rounded-3xl font-semibold hover:from-[#fb4202] hover:to-[#6a4c93] transition-all shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
                  Explorar Web
                </button>
              </div>
            </div>
          </div>
          <div className="card--for-people">
            <div className="drop-shadow lg:row-span-2  bg-white p-12 rounded-3xl border-2 border-[#feaa24] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Para Pessoas
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Sites e aplicações web modernas, responsivas e otimizadas para
                  performance. Utilizamos as tecnologias mais atuais do mercado.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-[#feaa24] rounded-full"></div>
                    React, Next.js, TypeScript
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-[#fb4202] rounded-full"></div>
                    Design responsivo e acessível
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-[#8dbf30] rounded-full"></div>
                    Performance otimizada
                  </li>
                </ul>
                <button className="bg-gradient-to-r from-[#feaa24] to-[#fb4202] text-white px-8 py-3 rounded-3xl font-semibold hover:from-[#fb4202] hover:to-[#6a4c93] transition-all shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
                  Explorar Web
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
