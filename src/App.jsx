import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4;
      audio.muted = muted;
      audio.play().catch(() => {});
    }
  }, [muted]);

  return (
    <div className="scroll-container">
      {/* Background Audio */}
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/audio/2023/09/18/audio_2b58cdd56f.mp3"
        loop
        autoPlay
      />

      {/* Toggle Button */}
      <button
        onClick={() => setMuted(!muted)}
        className="fixed bottom-6 right-6 bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
      >
        {muted ? <VolumeX size={20} /> : <Music size={20} />}
      </button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Hero />
        <About />
        <Vision />
        <CTA />
        <Footer />
      </motion.div>
    </div>
  );
}
