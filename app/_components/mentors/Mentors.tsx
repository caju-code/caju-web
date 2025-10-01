"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CajuIcon from "../../../public/svg/cajuIcon.svg";
import MentorCard from "./MentorCard";

export default function Mentors() {
  const mentors = [
    {
      name: "Caju",
      description:
        "Sou dona da p* toda MUAHAHAH Proficiente em CS {CatScript}. A Caju Code, em breve irá hackear todas as centrais de petisco e atum miauuuu",
      image: "/images/cajuProfile.png",
      bgColor: "#6a4c93",
      linkedIn: "https://www.linkedin.com/company/caju-code/",
    },
    {
      name: "Aline Marjorie",
      description:
        "Sempre fui mais de 'humanas', mas acabei me apaixonando por TI. Fiz uma transição de carreira com sucesso e, hoje, quero ajudar mais pessoas a realizarem o mesmo sonho.",
      image: "/images/aline.png",
      bgColor: "#FF9C00",
      linkedIn: "https://www.linkedin.com/in/alinemarjorie/",
    },
    {
      name: "Iasmin Mendes",
      description:
        "Eng. de Software & forrozeira de coração. Não planejei atuar na área, mas aqui estou e o que eu AMO sobre software é a COLABORAÇÃO: aprender e construir algo JUNTOS. Vamos?",
      image: "/images/iasmin.png",
      bgColor: "#FB4202",
      linkedIn: "https://www.linkedin.com/in/mendesiasmin/",
    },
    {
      name: "Fernanda Vilela",
      description:
        "Dei algumas voltas na vida e quero te ajudar nas suas! Desde os 14, lidando com educação, música, programação e dados. Sou mãe da Caju e tenho a ajuda de vários amigos :)",
      image: "/images/fernanda.png",
      bgColor: "#8CBE2F",
      linkedIn: "https://www.linkedin.com/in/fegvilela/",
    },
    {
      name: "Saphira Cardoso",
      description:
        "Já estive do outro lado, começando do zero e cheia de dúvidas. Acredito que tecnologia não é só sobre código, mas sobre abrir portas e criar oportunidades.",
      image: "/images/saphira.png",
      bgColor: "#1a83c5",
      linkedIn: "https://www.linkedin.com/in/saphira-cardoso/",
    },
  ];

  return (
    <section id="mentors" className="py-40 pb-40 bg-gray-50">
      <div className="mentors text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Nossos Mentores
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Conectando conhecimento e pessoas. A equipe de mentores da Caju Code
          está aqui para orientar, apoiar e inspirar você em cada etapa do
          aprendizado.
        </p>
        <div className="flex items-center justify-center mt-10">
          <CajuIcon
            style={{ width: "70px", height: "70px" }}
            className="hover:text-white transition-colors duration-300"
          />
        </div>
        <div className="flex justify-center relative">
          <div className="max-w-[1100px] mx-auto px-8 relative">
            <div className="mentors__carousel overflow-hidden">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".swiper-arrow-right",
                  prevEl: ".swiper-arrow-left",
                }}
                slidesPerView={2}
                slidesPerGroup={2}
                spaceBetween={20}
                centeredSlides={false}
                loop={false}
                grabCursor={true}
                watchOverflow={true}
                className="!overflow-visible"
                wrapperClass="!items-stretch"
              >
                {mentors.map((mentor, index) => (
                  <SwiperSlide
                    key={index}
                    className="!h-auto !flex !justify-center !items-center"
                  >
                    <div className="flex justify-center">
                      <MentorCard {...mentor} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <button className="swiper-arrow-left absolute -left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-all duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button className="swiper-arrow-right absolute -right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-all duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
