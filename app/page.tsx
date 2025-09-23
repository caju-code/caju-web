"use client";

import Header from "./_components/Header";
import HeroSection from "./_components/Hero";
import AboutSection from "./_components/About";
import ServicesSection from "./_components/Services";
import Mentors from "./_components/Mentors";
import ValuesSection from "./_components/Values";
import ProcessSection from "./_components/ProcessSection";
import CTASection from "./_components/CTAsection";
import Footer from "./_components/Footer";

export default function Landing2() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Mentors />
      <ValuesSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  );
}
