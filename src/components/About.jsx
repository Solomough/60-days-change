import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6">
      <motion.h2
        initial={{ opacity: 0, rotateY: -90 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-arkGold mb-6"
      >
        About the initiative 
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-gray-300 leading-relaxed"
      >
        This 60-day journey is not just a challenge but a transformation — a guided path to refine your spirit, discipline, and divine purpose. Each day unfolds like a page in a sacred book, leading you closer to the full measure of your it.
      </motion.p>
    </section>
  );
}
