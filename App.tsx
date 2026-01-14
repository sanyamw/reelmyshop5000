
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import BackgroundElements from './components/BackgroundElements';
import LeadForm from './components/LeadForm';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="relative min-h-screen selection:bg-pink-500 selection:text-white">
      {/* Background Layer */}
      <BackgroundElements mousePosition={mousePosition} />

      {/* Main Content */}
      <main className="relative z-10">
        <Header onOpenForm={openForm} />
        
        {/* The Hook / Main Screen Hero */}
        <section id="hero" className="container mx-auto px-6">
          <Hero onOpenForm={openForm} />
        </section>

        {/* Value Propositions */}
        <section id="benefits" className="container mx-auto px-6 py-20">
          <Benefits />
        </section>

        {/* Call to Action & Pricing */}
        <section id="pricing" className="container mx-auto px-6 pb-40">
          <Pricing onOpenForm={openForm} />
        </section>
      </main>

      <LeadForm isOpen={isFormOpen} onClose={closeForm} />

      {/* Simple Footer */}
      <footer className="relative z-10 border-t border-gray-100 bg-white/50 backdrop-blur-md py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex items-center space-x-2 font-black text-gray-900 mb-4 md:mb-0">
            <span className="text-xl tracking-tighter uppercase font-apple-display">
              REELMYSHOP<span className="text-pink-500 italic">.COM</span>
            </span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-black transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors font-medium">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors font-medium">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
