import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Hexagon, Circle, Triangle, Square } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';

export default function Hero() {
  const { t } = useApp();

  return (
    <section className="relative min-h-screen pt-32 pb-12 px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono text-gray-500 dark:text-gray-400 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            {t.hero.available}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 sm:mb-8 leading-[1] md:leading-[0.9] tracking-tighter"
          >
            {t.hero.title1} <br />
            <span className="text-gradient">{t.hero.title2}</span> {t.hero.title3}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-xl leading-relaxed font-light transition-colors"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/showcase" className="bg-brand-primary text-white hover:bg-blue-600 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all">
              {t.hero.viewShowcase || "Showcase"} <ArrowRight className="w-5 h-5 rtl:-scale-x-100" />
            </Link>
            <a href="/#process" className="glass px-8 py-4 rounded-2xl font-bold hover:bg-black/10 dark:hover:bg-white/10 transition-all flex items-center gap-2">
              {t.hero.ourProcess || "Process"} <ChevronRight className="w-5 h-5 rtl:-scale-x-100" />
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
           <motion.div
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="relative aspect-square rounded-[40px] overflow-hidden border border-black/10 dark:border-white/10"
           >
             <img 
               src="/assets/hero.gif" 
               alt="Digital Abstract Canvas"
               className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] dark:from-brand-secondary via-transparent to-transparent opacity-80" />
             
             {/* Floating Badge */}
             <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-3xl">
               <div className="flex items-center justify-between mb-4">
                 <div className="flex -space-x-3">
                   {[Square, Hexagon, Circle, Triangle].map((Icon, i) => (
                     <div 
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-[#f8fafc] dark:border-brand-secondary bg-black/40 flex items-center justify-center backdrop-blur-md"
                     >
                       <Icon className="w-5 h-5 text-white" />
                     </div>
                   ))}
                 </div>
                 <div className="text-right">
                   <div className="text-xs font-mono text-brand-primary">{t.hero.clientRating}</div>
                   <div className="text-xl font-bold text-black dark:text-white">4.9/5.0</div>
                 </div>
               </div>
               <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                 {t.hero.review}
               </p>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
