"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/svg/logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex justify-between items-center gap-8 p-6 md:max-w-5xl md:mx-auto md:px-2 w-full">
          <div className="flex items-center space-x-2">
            <Logo
              style={{ width: "200px", height: "auto" }}
              className="hover:text-white transition-colors duration-300"
            />
          </div>

          <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="#services"
              className="text-gray-700 hover:text-[#fb4202] transition-colors font-medium"
            >
              Serviços
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-[#feaa24] transition-colors font-medium"
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
              className="text-gray-700 hover:text-[#fb4202] transition-colors font-medium"
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

          <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#feaa24] to-[#fb4202] text-white px-6 py-3 rounded-3xl hover:from-[#feaa24] hover:to-[#8dbf30] transition-all duration-300 font-semibold shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] ml-auto">
            Sign up
            <Image
              src="/images/setabranca.png"
              alt="Seta"
              width={20}
              height={20}
              className="ml-1"
            />
          </button>

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
    </>
  );
}
