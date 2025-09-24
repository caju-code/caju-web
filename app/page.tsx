"use client";

import Header from "./_components/Header";
import HeroSection from "./_components/Hero";
import AboutSection from "./_components/About";
import ServicesSection from "./_components/OurServices";
import Mentors from "./_components/Mentors";
import ValuesSection from "./_components/Values";
import ProcessSection from "./_components/ProcessSection";
import CTASection from "./_components/CTASection";
import Footer from "./_components/Footer";
import AnimatedBackground from "./_components/AnimatedBackground";
import OurServices from "./_components/OurServices";

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen overflow-hidden">
        <Header />
        <div className="pt-16">
          <HeroSection />
          <OurServices />
          {/* <AboutSection /> */}
          <Mentors />
          <ValuesSection />
          <ProcessSection />
          <CTASection />
        </div>
        <Footer />
      </div>
    </>
  );
}
