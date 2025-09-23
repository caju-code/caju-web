export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
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
          <div className="lg:row-span-2 bg-gradient-to-br from-[#feaa24]/10 via-[#fb4202]/5 to-[#6a4c93]/10 p-12 rounded-3xl border-2 border-[#feaa24]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#feaa24] to-[#fb4202] rounded-full opacity-10 transform translate-x-8 -translate-y-8"></div>
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

          <div className="bg-gradient-to-br from-[#8dbf30]/10 to-[#1e83c5]/10 p-8 rounded-3xl border-2 border-[#8dbf30]/20">
            <div className="w-16 h-16 bg-gradient-to-r from-[#6a4c93] to-[#fb4202] rounded-2xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">📱</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Apps Mobile
            </h3>
            <p className="text-gray-600 mb-6">
              Aplicativos nativos e híbridos para iOS e Android com experiência
              única.
            </p>
            <button className="bg-[#8dbf30] text-white px-6 py-2 rounded-3xl font-semibold hover:bg-[#6a4c93] transition-all shadow-[3px_3px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px]">
              Explorar Mobile →
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#6a4c93]/10 to-[#1e83c5]/10 p-8 rounded-3xl border-2 border-[#6a4c93]/20">
            <div className="w-16 h-16 bg-gradient-to-r from-[#fb4202] to-[#feaa24] rounded-2xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Consultoria Tech
            </h3>
            <p className="text-gray-600 mb-6">
              Estratégias tecnológicas para acelerar o crescimento do seu
              negócio.
            </p>
            <button className="bg-[#6a4c93] text-white px-6 py-2 rounded-3xl font-semibold hover:bg-[#1e83c5] transition-all shadow-[3px_3px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px]">
              Explorar Consultoria →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
