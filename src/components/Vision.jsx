import { motion } from "framer-motion";
import { Lightbulb, Sparkles, Users } from "lucide-react";

const cards = [
  {
    icon: <Lightbulb className="w-10 h-10 text-blueark" />,
    title: "Light",
    text: "Transformation through the Word — we shine as carriers of divine truth.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-blueark" />,
    title: "Innovation",
    text: "Creativity that speaks louder than words; we innovate for impact.",
  },
  {
    icon: <Users className="w-10 h-10 text-blueark" />,
    title: "Community",
    text: "Raising ambassadors of excellence and purpose who shine together.",
  },
];

export default function Vision() {
  return (
    <section className="py-20 bg-[#001a44] text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-10"
      >
        Why <span className="text-blueark glow">We Exist</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <div className="flex justify-center mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
