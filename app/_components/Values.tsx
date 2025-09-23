export default function Values() {
  const values = [
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
  ];

  return (
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
          {values.map((value, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${value.colors
                .replace("from-", "from-")
                .replace(
                  "to-",
                  "to-"
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
  );
}
