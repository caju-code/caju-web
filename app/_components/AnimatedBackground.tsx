"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.05], [0.1, 1]);

  return (
    <motion.div
      className="fixed inset-0 -z-10"
      style={{
        opacity,
        backgroundImage: "url('/svg/background.svg')",
        backgroundSize: "155% 155%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    />
  );
}
