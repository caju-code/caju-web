import { motion } from "framer-motion";

export default function Values() {
  const values = [
    {
      title: "Inclusão",
      desc: "Todo mundo merece um espaço seguro para aprender e crescer.",
      color: "#f7a82c",
    },
    {
      title: "Colaboração",
      desc: "Juntos, vamos mais longe! A troca de conhecimento é essencial.",
      color: "#e8471d",
    },
    {
      title: "Autenticidade",
      desc: "Aqui, você pode ser quem é, sem filtros.",
      color: "#719e1b",
    },
    {
      title: "Respeito",
      desc: "Cada trajetória é única, e valorizamos isso.",
      color: "#1a83c5",
    },
    {
      title: "Aprendizado contínuo",
      desc: "Sempre há espaço para evoluir, sem pressa e sem pressão.",
      color: "#8dbf30",
    },
    {
      title: "Impacto",
      desc: "Queremos criar tecnologia mais acessível, diversa e inovadora.",
      color: "#cda466",
    },
  ];

  return (
    <section id="values" className="py-40 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nossos Valores
          </h2>
          <p className="text-xl text-gray-900 max-w-2xl mx-auto">
            Os princípios que guiam nosso trabalho e nossa comunidade.
          </p>
        </div>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="p-8 border border-black flex flex-col justify-center rounded-lg"
              initial={{ backgroundColor: "transparent", color: "#000" }}
              animate={{ backgroundColor: value.color, color: "#fff" }}
              transition={{ duration: 0.9, delay: index * 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
