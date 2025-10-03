export default function CTASection() {
  const handleFormClick = () => {
    window.open("https://109q5ijo.forms.app/vem-ser-um-cajuzinho", "_blank");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
           Vamos lá começar
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#719e1b] to-[#1e83c5]">
            sua jornada?
          </span>
        </h2>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          A Caju Code é uma comunidade segura para aprender, mentorar e
          construir projetos. Tudo isso com foco em pessoas de grupos
          sub-representados na tecnologia.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={handleFormClick}
            className="group mx-auto w-[220px] sm:w-auto bg-gradient-to-r from-[#719e1b] to-[#1e83c5] text-white px-6 py-3 sm:px-10 sm:py-4 rounded-3xl text-base sm:text-lg font-bold hover:from-[#f7a82c] hover:to-[#e8471d] transition-all duration-300 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] text-center"
          >
            <span className="flex items-center justify-center gap-2">
              Quero participar!
              <span className="group-hover:translate-x-1 transition-transform">
                😺
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
