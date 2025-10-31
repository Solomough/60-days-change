import { motion } from "framer-motion";
import { Instagram, Send, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#000d26] py-8 text-center text-gray-400">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4 text-sm">
          © 2025 The Ark Network | All Rights Reserved
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://t.me/solomonmoughkaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blueark flex items-center gap-1"
          >
            <Send className="w-4 h-4" /> Telegram
          </a>
          <a
            href="https://www.instagram.com/solomough3?igsh=cGJ1d3JtYzh5M3Ay"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blueark flex items-center gap-1"
          >
            <Instagram className="w-4 h-4" /> Instagram
          </a>
          <a
            href="mailto:info@thearknetwork.org"
            className="hover:text-blueark flex items-center gap-1"
          >
            <Mail className="w-4 h-4" /> Email
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
