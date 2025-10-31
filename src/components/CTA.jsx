import { motion } from "framer-motion";

export default function CTA({ onOpenForm }) {
  return (
    <section className="py-20 bg-gradient-to-t from-[#001133] to-[#002266] text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold mb-6"
      >
        Are you ready to become <span className="text-blueark glow">light</span> in your world?
      </motion.h2>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        onClick={onOpenForm}
        className="mt-6 bg-blueark hover:bg-blue-700 text-white px-10 py-4 rounded-xl shadow-xl transition font-semibold"
      >
        Join Now
      </motion.button>
    </section>
  );
}
