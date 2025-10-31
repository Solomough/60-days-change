import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FormModal from './components/FormModal';

export default function App() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="overflow-hidden">
      <Hero onOpenForm={() => setOpenForm(true)} />
      <About />
      <Vision />
      <CTA onOpenForm={() => setOpenForm(true)} />
      <Footer />
      {openForm && <FormModal onClose={() => setOpenForm(false)} />}
    </div>
  );
}
