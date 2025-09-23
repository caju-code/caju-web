export default function CTASection() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block bg-gradient-to-r from-[#feaa24] to-[#fb4202] text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
          ✨ Vamos conversar!
        </span>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
          Pronto para começar
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#feaa24] to-[#fb4202]">
            sua jornada?
          </span>
        </h2>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Vamos conversar sobre seu projeto e como podemos ajudar a torná-lo
          realidade.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="group bg-gradient-to-r from-[#feaa24] to-[#fb4202] text-white px-10 py-4 rounded-3xl text-lg font-bold hover:from-[#8dbf30] hover:to-[#1e83c5] transition-all duration-300 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
            <span className="flex items-center gap-2">
              Falar com nossa equipe
              <span className="group-hover:translate-x-1 transition-transform">
                💬
              </span>
            </span>
          </button>
          <button className="bg-[#6a4c93] text-white px-10 py-4 rounded-3xl text-lg font-bold hover:bg-[#1e83c5] transition-all duration-300 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
            Ver nossos casos
          </button>
        </div>
      </div>
    </section>
  );
}
