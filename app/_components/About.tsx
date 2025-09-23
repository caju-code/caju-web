export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block bg-gradient-to-r from-[#feaa24] to-[#fb4202] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🥥 Nossa História
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Caju Code:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#feaa24] to-[#fb4202]">
                o código dá frutos!
              </span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                A Caju Code nasceu para ser um{" "}
                <strong className="text-[#1e83c5]">
                  espaço seguro e acolhedor
                </strong>{" "}
                para quem quer crescer em tecnologia – especialmente pessoas de
                grupos sub-representados.
              </p>
              <p>
                Acreditamos no poder das conexões, do aprendizado contínuo e da
                colaboração para transformar carreiras e empresas.
              </p>
              <p className="text-[#6a4c93] font-semibold">
                Nossa missão vai além do código: queremos construir um futuro no
                qual mais pessoas tenham oportunidades reais.
              </p>
            </div>
            <button className="mt-8 bg-gradient-to-r from-[#8dbf30] to-[#1e83c5] text-white px-8 py-4 rounded-3xl font-bold hover:from-[#1e83c5] hover:to-[#6a4c93] transition-all duration-300 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
              Vamos crescer juntos? 🚀
            </button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="bg-gradient-to-br from-[#feaa24]/20 via-[#fb4202]/10 to-[#6a4c93]/20 rounded-3xl p-8 transform rotate-3">
              <div className="bg-white rounded-2xl p-8 transform -rotate-3 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#feaa24] to-[#fb4202] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">C</span>
                    </div>
                    <div>
                      <div className="h-3 bg-gray-200 rounded w-24 mb-1"></div>
                      <div className="h-2 bg-gray-100 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gradient-to-r from-[#8dbf30] to-[#1e83c5] rounded w-full"></div>
                    <div className="h-2 bg-gradient-to-r from-[#1e83c5] to-[#6a4c93] rounded w-3/4"></div>
                    <div className="h-2 bg-gradient-to-r from-[#feaa24] to-[#fb4202] rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
