export default function OurServices() {
  return (
    <section id="services" className="py-40 pb-40 bg-white/85">
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

        <div className="grid lg:grid-cols-2 gap-8 md:max-w-5xl md:mx-auto md:px-2">
          <div className="card--for-business">
            <div className="drop-shadow lg:row-span-2  bg-white p-12 rounded-3xl border-2 border-[#1a83c5] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Para empresas
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Consultoria tech para dar vida a projetos ou reestrurá-los,
                  oferecendo serviços de:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-[#f7a82c] rounded-full"></div>
                    Análise arquitetural de software ou aplicações;
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-[#f7a82c] rounded-full"></div>
                    Desenvolvimento fullstack;
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-[#f7a82c] rounded-full"></div>
                    Estruturação e implementação de área de dados E2E.
                  </li>
                </ul>
                <button className="bg-gradient-to-r from-[#e8471d] to-[#6a4c93] text-white px-8 py-3 rounded-3xl font-semibold hover:from-[#e8471d] hover:to-[#f7a82c] transition-all shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
                  Chame a gente!
                </button>
              </div>
            </div>
          </div>
          <div className="card--for-people">
            <div className="drop-shadow lg:row-span-2  bg-white p-12 rounded-3xl border-2 border-[#6a4c93] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Para Pessoas
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Mentorias que viram entrega: trilhas mão na massa conduzidas
                  por mentores(as) experientes. Você aprende, constrói e publica
                  com a comunidade.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-[#e8471d] rounded-full"></div>
                    Projetos open source;
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-[#e8471d] rounded-full"></div>
                    Feedback real;
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-[#e8471d] rounded-full"></div>
                    Gratuito para grupos minoritários.
                  </li>
                </ul>
                <button className="bg-gradient-to-r from-[#e8471d] to-[#6a4c93] text-white px-8 py-3 rounded-3xl font-semibold hover:from-[#e8471d] hover:to-[#f7a82c] transition-all shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
                  Inscreva-se
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
