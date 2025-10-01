import ServiceCard from "./ServiceCard";

export default function OurServices() {
  return (
    <section id="services" className="py-40 pb-40 bg-white/85">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Como ajudamos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para transformar sua visão em
            realidade digital.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:max-w-5xl md:mx-auto md:px-2">
          <ServiceCard
            title="Para empresas"
            description="Consultoria tech para dar vida a projetos ou reestrurá-los, oferecendo serviços de:"
            items={[
              "Análise arquitetural de software ou aplicações;",
              "Desenvolvimento fullstack;",
              "Estruturação e implementação de área de dados E2E.",
            ]}
            borderColor="#1a83c5"
            bulletColor="#f7a82c"
            buttonText="Chame a gente!"
            buttonLink="https://www.linkedin.com/company/caju-code"
          />
          <ServiceCard
            title="Para pessoas"
            description="Mentorias que viram entrega: trilhas mão na massa conduzidas por mentores(as) experientes. Você aprende, constrói e publica com a comunidade."
            items={[
              "Projetos open source;",
              "Feedback real;",
              "Gratuito para grupos minoritários.",
            ]}
            borderColor="#6a4c93"
            bulletColor="#e8471d"
            buttonText="Inscreva-se"
            buttonLink="https://109q5ijo.forms.app/vem-ser-um-cajuzinho"
          />
        </div>
      </div>
    </section>
  );
}
