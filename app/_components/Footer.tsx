import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import LogoBranca from "../../public/svg/logoBranca.svg";

export default function Footer() {
  return (
    <footer className="bg-[#221326] text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <LogoBranca
              style={{ width: "200px", height: "auto" }}
              className="hover:text-white transition-colors duration-300 mb-6"
            />
            <p className="text-gray-400 leading-relaxed">
              Oferecemos soluções completas para transformar sua visão em
              realidade digital.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="hover:text-[#feaa24] transition-colors"
                >
                  Consultoria Tech
                </a>
              </li>
              <li>
                <a
                  href="#mentors"
                  className="hover:text-[#8dbf30] transition-colors"
                >
                  Nossa equipe
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-[#1e83c5] transition-colors"
                >
                  Mentoria gratuita
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/caju-code"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1e83c5] rounded-full flex items-center justify-center hover:bg-[#feaa24] transition-colors"
              >
                <FaLinkedin className="text-white text-lg" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/caju-code"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#8dbf30] rounded-full flex items-center justify-center hover:bg-[#fb4202] transition-colors"
              >
                <FaGithub className="text-white text-lg" />
              </a>

              {/* Email */}
              <a
                href="mailto:oi@cajucode.com"
                className="w-10 h-10 bg-[#6a4c93] rounded-full flex items-center justify-center hover:bg-[#1e83c5] transition-colors"
              >
                <HiOutlineMail className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p>
            &copy; 2025 Caju Code. Todos os direitos reservados. Feito com 🤍
            para a comunidade tech.
          </p>
        </div>
      </div>
    </footer>
  );
}
