import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import StudioComponents from './components/StudioComponents';
import Process from './components/Process';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import BackgroundShapes from './components/BackgroundShapes';
import { useApp } from './contexts/AppContext';
import ContactPage from './pages/ContactPage';
import ShowcasePage from './pages/ShowcasePage';

import SectionDivider from './components/SectionDivider';

function HomePage() {
  const { t } = useApp();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <StudioComponents />
        <SectionDivider />
        <Process />
        <SectionDivider />
        <Showcase />
        <SectionDivider />
        
        {/* Call to Action Section */}
        <section id="about" className="py-24 px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto glass rounded-[48px] p-12 md:p-24 text-center relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-primary/10 to-emerald-500/10 pointer-events-none" />
             <h2 className="text-2xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-8 relative z-10 leading-tight">
               {t.cta.ready} <span className="text-gradient underline decoration-brand-primary/30">{t.cta.evolve}</span> {t.cta.presence}
             </h2>
             <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto relative z-10 transition-colors">
               {t.cta.join}
             </p>
             <button onClick={() => navigate('/contact')} className="bg-black text-white dark:bg-white dark:text-black px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl hover:bg-brand-primary hover:text-white dark:hover:bg-brand-primary dark:hover:text-white transition-all transform hover:scale-105 relative z-10">
               {t.cta.book}
             </button>
          </motion.div>
        </section>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8fafc] dark:bg-brand-secondary selection:bg-brand-primary selection:text-white relative transition-colors duration-500 overflow-x-hidden w-full">
        <BackgroundShapes />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/showcase" element={<>
            <Navbar inPage />
            <ShowcasePage />
            <div className="relative z-10">
              <Footer />
            </div>
          </>} />
          <Route path="/contact" element={<>
            <Navbar inPage />
            <ContactPage />
            <div className="relative z-10">
              <Footer />
            </div>
          </>} />
        </Routes>
      </div>
    </Router>
  );
}
