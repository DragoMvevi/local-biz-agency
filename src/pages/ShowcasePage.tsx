import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import Pricing from '../components/Pricing';

export default function ShowcasePage() {
  const { t } = useApp();
  
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative flex flex-col items-center">
      <div className="max-w-7xl w-full relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-primary transition-colors mb-12 font-bold group">
          <ArrowLeft className="w-5 h-5 rtl:-scale-x-100 group-hover:-translate-x-1 transition-transform" />
          {t.contact.back || 'Back to Home'}
        </Link>
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 uppercase"
          >
            {t.portfolio.plans.title} <span className="text-gray-500 font-light italic">{t.portfolio.plans.titleHighlight}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-lg italic"
          >
            "{t.portfolio.plans.note}"
          </motion.p>
        </div>
        
        <Pricing />

      </div>
    </div>
  );
}
