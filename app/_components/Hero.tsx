"use client";
import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

export default function Hero() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center"
    >
      <h1
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black leading-tight text-center px-4 transition-all duration-1000 ease-in-out ${
          hidden ? "opacity-0 -translate-y-12" : "opacity-100 translate-y-0"
        }`}
      >
        <ReactTyped
          strings={[
            "O CÓDIGO DÁ FRUTOS!",
            "Abra o espaço.",
            "Escreva o código...",
            "Colha frutos.",
          ]}
          typeSpeed={80}
          backSpeed={50}
          loop
        />
      </h1>
    </section>
  );
}
