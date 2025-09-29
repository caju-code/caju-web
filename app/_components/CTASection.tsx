export default function CTASection() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
          Pronto para começar
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f7a82c] to-[#e8471d]">
            sua jornada?
          </span>
        </h2>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Vamos conversar sobre seu projeto e como podemos ajudar a torná-lo
          realidade.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="group bg-gradient-to-r from-[#f7a82c] to-[#e8471d] text-white px-10 py-4 rounded-3xl text-lg font-bold hover:from-[#719e1b] hover:to-[#1e83c5] transition-all duration-300 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
            <span className="flex items-center gap-2">
              Falar com nossa equipe
              <span className="group-hover:translate-x-1 transition-transform">
                💬
              </span>
            </span>
          </button>
          <button className="bg-[#719e1b] text-white px-10 py-4 rounded-3xl text-lg font-bold hover:bg-[#1a83c5] transition-all duration-300 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
            Ver nossos casos
          </button>
        </div>
      </div>
    </section>
  );
}
