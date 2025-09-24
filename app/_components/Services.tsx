export default function Services() {
  return (
    <section id="services" className="py-24 bg-white/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            O que fazemos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para transformar sua visão em
            realidade digital.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="card--for-business">
            <div className="lg:row-span-2  bg-white p-12 rounded-3xl border-2 border-[#8dbf30] relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-[#1e83c5] to-[#6a4c93] rounded-3xl flex items-center justify-center mb-8">
                  <span className="text-white text-3xl">🌐</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Desenvolvimento Web
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
            <div className="lg:row-span-2  bg-white p-12 rounded-3xl border-2 border-[#feaa24] relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-[#1e83c5] to-[#6a4c93] rounded-3xl flex items-center justify-center mb-8">
                  <span className="text-white text-3xl">🌐</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Desenvolvimento Web
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
