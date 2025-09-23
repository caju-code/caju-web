export default function ProcessSection() {
  const steps = [
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
  ];

  return (
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
          {steps.map((step, index) => (
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
  );
}
