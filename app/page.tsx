"use client";

import { useState } from "react";
import Image from "next/image";

export default function Landing2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="relative z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0">
        <div className="flex justify-start items-center gap-8 p-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/cajulogo.png"
              alt="Logo Caju Code"
              width={50}
              height={50}
              className="cajulogo"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 flex-1 justify-start ml-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-[#fb4202] transition-colors font-medium"
            >
              Serviços
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-[#1e83c5] transition-colors font-medium"
            >
              Sobre
            </a>
            <a
              href="#values"
              className="text-gray-700 hover:text-[#8dbf30] transition-colors font-medium"
            >
              Valores
            </a>
            <a
              href="#process"
              className="text-gray-700 hover:text-[#6a4c93] transition-colors font-medium"
            >
              Processo
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#feaa24] transition-colors font-medium"
            >
              Contato
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#feaa24] to-[#fb4202] text-white px-6 py-3 rounded-3xl hover:from-[#fb4202] hover:to-[#6a4c93] transition-all duration-300 font-semibold shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] ml-auto">
            Sign up
            <Image
              src="/images/setabranca.png"
              alt="Seta"
              width={20}
              height={20}
              className="ml-1"
            />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-white/20 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#feaa24] to-[#fb4202] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">
                    Caju Code
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <nav className="space-y-6">
                <a
                  href="#services"
                  className="block text-lg text-gray-700 hover:text-[#fb4202] transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </a>
                <a
                  href="#about"
                  className="block text-lg text-gray-700 hover:text-[#1e83c5] transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre
                </a>
                <a
                  href="#values"
                  className="block text-lg text-gray-700 hover:text-[#8dbf30] transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Valores
                </a>
                <a
                  href="#process"
                  className="block text-lg text-gray-700 hover:text-[#6a4c93] transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Processo
                </a>
                <a
                  href="#contact"
                  className="block text-lg text-gray-700 hover:text-[#feaa24] transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </a>
              </nav>

              <div className="button-sign-up">
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#feaa24] to-[#fb4202] text-white px-6 py-3 rounded-3xl hover:from-[#fb4202] hover:to-[#6a4c93] transition-all duration-300 font-semibold shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]">
                  Sign up
                  <Image
                    src="/images/setabranca.png"
                    alt="Seta"
                    width={20}
                    height={20}
                    className="ml-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white section-01">
        {/* Floating Elements */}
        {/* <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-[#feaa24] to-[#fb4202] rounded-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-16 w-16 h-16 bg-gradient-to-r from-[#8dbf30] to-[#1e83c5] rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-[#6a4c93] to-[#1e83c5] rounded-2xl opacity-25 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-[#feaa24] rounded-full opacity-40 animate-float delay-1000"></div> */}

        {/* <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block bg-gradient-to-r from-[#feaa24] to-[#fb4202] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ Transformamos ideias em código
            </span>
          </div> */}

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#feaa24] via-[#fb4202] to-[#6a4c93] animate-gradient leading-tight text-center px-4">
          We turn ideas into code.
        </h1>

        {/* <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Desenvolvemos soluções digitais modernas que fazem a diferença.
            <span className="block mt-2 font-semibold text-[#1e83c5]">
              Web, mobile e consultoria tech com foco na inclusão.
            </span>
          </p> */}

        {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-[#fb4202] to-[#6a4c93] text-white px-10 py-4 rounded-2xl text-lg font-bold hover:from-[#6a4c93] hover:to-[#1e83c5] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <span className="flex items-center gap-2">
                Iniciar Projeto
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </button>
            <button className="border-2 border-[#8dbf30] text-[#8dbf30] px-10 py-4 rounded-2xl text-lg font-bold hover:bg-[#8dbf30] hover:text-white transition-all duration-300">
              Ver Portfólio
            </button>
          </div>
        </div> */}
      </section>

      {/* About Section - Asymmetric Layout */}
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
                  para quem quer crescer em tecnologia – especialmente pessoas
                  de grupos sub-representados.
                </p>
                <p>
                  Acreditamos no poder das conexões, do aprendizado contínuo e
                  da colaboração para transformar carreiras e empresas.
                </p>
                <p className="text-[#6a4c93] font-semibold">
                  Nossa missão vai além do código: queremos construir um futuro
                  no qual mais pessoas tenham oportunidades reais.
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

      {/* Services Grid Section */}
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
            {/* Main Service Card */}
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

            {/* Secondary Service Cards */}
            <div className="bg-gradient-to-br from-[#8dbf30]/10 to-[#1e83c5]/10 p-8 rounded-3xl border-2 border-[#8dbf30]/20">
              <div className="w-16 h-16 bg-gradient-to-r from-[#6a4c93] to-[#fb4202] rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Apps Mobile
              </h3>
              <p className="text-gray-600 mb-6">
                Aplicativos nativos e híbridos para iOS e Android com
                experiência única.
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

      {/* Values Section - Card Grid */}
      <section id="values" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e nossa comunidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🤝",
                title: "Inclusão",
                desc: "Todo mundo merece um espaço seguro para aprender e crescer.",
                colors: "from-[#feaa24] to-[#fb4202]",
              },
              {
                icon: "🚀",
                title: "Colaboração",
                desc: "Juntos, vamos mais longe! A troca de conhecimento é essencial.",
                colors: "from-[#8dbf30] to-[#1e83c5]",
              },
              {
                icon: "✨",
                title: "Autenticidade",
                desc: "Aqui, você pode ser quem é, sem filtros.",
                colors: "from-[#6a4c93] to-[#1e83c5]",
              },
              {
                icon: "💝",
                title: "Respeito",
                desc: "Cada trajetória é única, e valorizamos isso.",
                colors: "from-[#1e83c5] to-[#feaa24]",
              },
              {
                icon: "📚",
                title: "Aprendizado contínuo",
                desc: "Sempre há espaço para evoluir, sem pressa e sem pressão.",
                colors: "from-[#fb4202] to-[#6a4c93]",
              },
              {
                icon: "🌍",
                title: "Impacto",
                desc: "Queremos criar tecnologia mais acessível, diversa e inovadora.",
                colors: "from-[#feaa24] to-[#8dbf30]",
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${value.colors
                  .replace("from-", "from-")
                  .replace(
                    "to-",
                    "to-",
                  )}/10 p-8 rounded-3xl border-2 border-transparent hover:border-current transition-all duration-300 hover:scale-105`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${value.colors} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <span className="text-white text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Horizontal Flow */}
      <section
        id="process"
        className="py-24 bg-gradient-to-r from-[#1e83c5] via-[#6a4c93] to-[#8dbf30]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nosso processo é simples
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Quatro etapas claras para transformar sua ideia em realidade
              digital.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                num: "1",
                title: "Descoberta",
                desc: "Entendemos sua visão e objetivos",
                color: "bg-[#feaa24]",
              },
              {
                num: "2",
                title: "Planejamento",
                desc: "Criamos a estratégia perfeita",
                color: "bg-[#fb4202]",
              },
              {
                num: "3",
                title: "Desenvolvimento",
                desc: "Transformamos ideias em código",
                color: "bg-[#8dbf30]",
              },
              {
                num: "4",
                title: "Entrega",
                desc: "Lançamos seu projeto no mundo",
                color: "bg-[#6a4c93]",
              },
            ].map((step, index) => (
              <div key={index} className="text-center text-white relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-white/30 transform translate-x-4"></div>
                )}
                <div
                  className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <span className="text-3xl font-bold text-white">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="opacity-90 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-[#feaa24] to-[#fb4202] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">C</span>
                </div>
                <span className="text-2xl font-bold text-white">Caju Code</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transformamos ideias em código que funciona. Um espaço seguro
                para crescer em tecnologia.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#feaa24] transition-colors"
                  >
                    Desenvolvimento Web
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#8dbf30] transition-colors"
                  >
                    Apps Mobile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#1e83c5] transition-colors"
                  >
                    Consultoria Tech
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#1e83c5] rounded-full flex items-center justify-center hover:bg-[#feaa24] transition-colors"
                >
                  <span className="text-white text-sm">Li</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#8dbf30] rounded-full flex items-center justify-center hover:bg-[#fb4202] transition-colors"
                >
                  <span className="text-white text-sm">Gh</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#6a4c93] rounded-full flex items-center justify-center hover:bg-[#1e83c5] transition-colors"
                >
                  <span className="text-white text-sm">@</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center">
            <p>
              &copy; 2024 Caju Code. Todos os direitos reservados. Feito com 💜
              para a comunidade tech.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
