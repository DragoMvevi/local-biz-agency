import { motion } from 'motion/react';
import { ArrowUpRight, Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar({ inPage = false }: { inPage?: boolean }) {
  const { theme, toggleTheme, lang, toggleLang, t } = useApp();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-6 py-2 sm:py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-3 sm:px-6 py-3 rounded-2xl">
        <Link to="/" className="flex items-center gap-1 sm:gap-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-primary rounded-md sm:rounded-lg flex items-center justify-center font-bold text-white text-xs sm:text-base">G</div>
          <span className="font-display font-bold text-sm sm:text-xl tracking-tighter text-black dark:text-white hidden min-[360px]:block">GDEVALOP</span>
        </Link>

        {!inPage && (
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
            <a href="#services" className="hover:text-black dark:hover:text-white transition-colors">{t.navbar.work}</a>
            <a href="#studio" className="hover:text-black dark:hover:text-white transition-colors">{t.navbar.studio}</a>
            <a href="#process" className="hover:text-black dark:hover:text-white transition-colors">{t.navbar.process}</a>
            <a href="#showcase-home" className="hover:text-black dark:hover:text-white transition-colors">{t.navbar.templates}</a>
          </div>
        )}

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden lg:flex items-center gap-2 sm:gap-4">
            <button onClick={toggleLang} className="text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary transition-colors flex items-center gap-1 font-bold text-sm">
              <Globe className="w-4 h-4" />
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary transition-colors">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="h-6 w-px bg-black/10 dark:bg-white/10 mx-1 sm:mx-2 hidden lg:block"></div>

          <Link to="/showcase" className="hidden lg:flex text-sm font-bold border border-brand-primary/20 bg-brand-primary/5 text-brand-primary px-4 py-2 rounded-xl hover:bg-brand-primary hover:text-white transition-all items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            {t.navbar.showcase}
          </Link>

          <Link to="/contact" className="bg-black text-white dark:bg-white dark:text-black px-2.5 sm:px-5 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-sm font-bold flex items-center gap-1 sm:gap-2 hover:bg-brand-primary hover:text-white transition-all group whitespace-nowrap">
            <span className="inline">{t.navbar.startProject}</span>
            <ArrowUpRight className="w-2.5 h-2.5 sm:w-4 sm:h-4 rtl:-scale-x-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden text-gray-600 dark:text-gray-300 hover:text-brand-primary focus:outline-none ml-1 sm:ml-0"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 dark:bg-white/10 backdrop-blur-sm z-[60] lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <motion.div
        initial={{ x: lang === 'ar' ? '100%' : '-100%' }}
        animate={{ x: isSidebarOpen ? '0%' : lang === 'ar' ? '100%' : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`fixed top-0 bottom-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-[80vw] max-w-sm bg-white dark:bg-[#0f172a] shadow-2xl z-[70] p-6 flex flex-col lg:hidden`}
      >
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsSidebarOpen(false)}>
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center font-bold text-white text-base">G</div>
            <span className="font-display font-bold text-xl tracking-tighter text-black dark:text-white">GDEVALOP</span>
          </Link>
          <button onClick={() => setIsSidebarOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-brand-primary focus:outline-none">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-6 text-lg font-bold text-gray-900 dark:text-white overflow-y-auto">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-black/10 dark:border-white/10">
            <button onClick={() => { toggleLang(); setIsSidebarOpen(false); }} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-brand-primary">
              <Globe className="w-5 h-5" />
              {lang === 'en' ? t.navbar.arabic : t.navbar.english}
            </button>
            <button onClick={() => { toggleTheme(); setIsSidebarOpen(false); }} className="text-gray-600 dark:text-gray-300 hover:text-brand-primary">
              {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>

          <Link to="/showcase" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-2 text-brand-primary mb-2 border border-brand-primary/20 bg-brand-primary/5 px-4 py-4 rounded-xl hover:bg-brand-primary hover:text-white transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            {t.navbar.showcase}
          </Link>

          {!inPage && (
            <>
              <a href="#services" onClick={() => setIsSidebarOpen(false)} className="hover:text-brand-primary transition-colors py-2">{t.navbar.work}</a>
              <a href="#studio" onClick={() => setIsSidebarOpen(false)} className="hover:text-brand-primary transition-colors py-2">{t.navbar.studio}</a>
              <a href="#process" onClick={() => setIsSidebarOpen(false)} className="hover:text-brand-primary transition-colors py-2">{t.navbar.process}</a>
              <a href="#showcase-home" onClick={() => setIsSidebarOpen(false)} className="hover:text-brand-primary transition-colors py-2">{t.navbar.templates}</a>
            </>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
}
