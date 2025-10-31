import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#001133] to-[#002266] text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-6"
      >
        About <span className="text-blueark glow">60 Days Change</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-3xl mx-auto text-gray-200 leading-relaxed text-lg"
      >
        The <span className="text-blueark font-semibold">60 Days Change Initiative</span> is designed to awaken young minds to 
        <span className="text-blueark glow"> purpose</span>, creativity, and the 
        <span className="text-blueark glow"> light</span> within them.  
        Through mentorship, innovation, and the Word of God, we build a team that shines by manifestation — not words.
      </motion.p>
    </section>
  );
}
