export default function Footer() {
  return (
    <footer className="bg-[#221326] text-gray-400 py-16 border-t border-gray-800">
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
              Oferecemos soluções completas para transformar sua visão em
              realidade digital.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#feaa24] transition-colors">
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8dbf30] transition-colors">
                  Apps Mobile
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1e83c5] transition-colors">
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
            &copy; 2025 Caju Code. Todos os direitos reservados. Feito com 🤍
            para a comunidade tech.
          </p>
        </div>
      </div>
    </footer>
  );
}
