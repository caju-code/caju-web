import CajuStrokeIcon from "@/public/svg/cajuStrokeIcon.svg";
import { ReactTyped } from "react-typed";

export default function ProcessSection() {
  const steps = [
    {
      num: "1",
      title: "Descoberta",
      desc: "Entendemos sua visão e objetivos",
    },
    {
      num: "2",
      title: "Planejamento",
      desc: "Criamos a estratégia com você",
    },
    {
      num: "3",
      title: "Desenvolvimento",
      desc: "Transformamos ideias em código",
    },
    {
      num: "4",
      title: "Entrega",
      desc: "Lançamos seu projeto no mundo",
    },
  ];

  return (
    <section
      id="process"
      className="py-40 pb-40 bg-gradient-to-r from-[#f7a82c] via-[#e8471d] to-[#8dbf30]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            O caminho é simples...
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Quatro etapas claras para transformar sua transição para TI.
            <br></br>
            (inscrições até dia 10/10/2025)
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center text-white relative">
              {index < 3 && (
                <div className="hidden md:block absolute top-20 left-full w-8 h-0.5 bg-white/40 transform translate-x-4"></div>
              )}
              <div className="relative w-[200px] h-[200px] mx-auto mb-6 flex items-center justify-center">
                <CajuStrokeIcon
                  className="w-full h-full object-contain mt-[60px] opacity-20"
                  preserveAspectRatio="xMidYMid meet"
                />
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
                  {step.num}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4">
                <ReactTyped
                  strings={[step.title]}
                  typeSpeed={150}
                  backSpeed={50}
                />
              </h3>
              <p className="opacity-90 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
