"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <motion.div
      className="
        fixed inset-0 -z-10 bg-no-repeat bg-center
        top-20 md:top-[80px]
        bg-[url('/svg/bgMobile.svg')] md:bg-[url('/svg/background.svg')]
        bg-[length:180%_180%] md:bg-[length:160%_160%]
      "
    />
  );
}
