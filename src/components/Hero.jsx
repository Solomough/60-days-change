import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-arkBlue/20 to-black">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-5xl md:text-7xl font-bold text-arkGold mb-4"
      >
        60 Days Change
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-lg md:text-2xl text-gray-300 max-w-2xl"
      >
        The Ark Network presents a journey of <span className="text-arkGreen">transformation, purpose,</span> and <span className="text-arkBlue">light</span>.
      </motion.p>
    </section>
  );
}
