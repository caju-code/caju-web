"use client";

import Header from "./_components/Header";
import HeroSection from "./_components/Hero";
import OurServices from "./_components/OurServices";
import Mentors from "./_components/mentors/Mentors";
import Values from "./_components/Values";
import Process from "./_components/Process";
import CTASection from "./_components/CTASection";
import Footer from "./_components/Footer";
import Background from "./_components/Background";

export default function Page() {
  return (
    <>
      <Background />
      <div className="min-h-screen overflow-hidden">
        <Header />
        <div className="pt-16">
          <HeroSection />
          <OurServices />
          <Mentors />
          <Values />
          <Process />
          <CTASection />
        </div>
        <Footer />
      </div>
    </>
  );
}
