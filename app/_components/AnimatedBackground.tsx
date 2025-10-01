"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <motion.div
      className="fixed inset-0 -z-10 bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/svg/background.svg')",
        backgroundSize: "160% 160%",
        top: "80px",
      }}
    />
  );
}
