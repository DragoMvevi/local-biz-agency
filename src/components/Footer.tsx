import { Mail, Facebook, Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="pt-24 pb-12 px-6 border-t border-black/5 dark:border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-8 group/logo">
              <img src="/assets/logo.png" alt="GDEVALOP Logo" className="w-10 h-10 object-contain group-hover/logo:scale-110 transition-transform" />
              <span className="font-display font-bold text-2xl tracking-tighter text-black dark:text-white">GDEVALOP</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-sm">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/Gdevalop/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-brand-primary dark:hover:bg-brand-primary transition-all group">
                <Facebook className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" />
              </a>
              <a href="https://www.instagram.com/gdevalop/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-brand-primary dark:hover:bg-brand-primary transition-all group">
                <Instagram className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-mono text-brand-primary mb-6 uppercase tracking-wider">{t.footer.agency}</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li><a href="/#services" className="hover:text-black dark:hover:text-white">{t.navbar.work}</a></li>
              <li><a href="/#studio" className="hover:text-black dark:hover:text-white">Studio</a></li>
              <li><a href="/#process" className="hover:text-black dark:hover:text-white">{t.navbar.process}</a></li>
              <li><a href="/#templates" className="hover:text-black dark:hover:text-white">Templates</a></li>
              <li><a href="/contact" className="hover:text-black dark:hover:text-white">{t.footer.contact}</a></li>
            </ul>
          </div>

          <div className="md:col-span-5">
             <div className="bg-black/5 dark:bg-white/5 rounded-[40px] p-10 border border-black/5 dark:border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 scale-150 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Mail className="w-24 h-24 text-brand-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-black dark:text-white">{t.footer.idea}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xs">{t.footer.talk}</p>
                <a href="mailto:Gdevalop@Gmail.com" className="inline-flex items-center gap-4 lg:text-xl text-lg font-bold text-brand-primary group">
                  Gdevalop@Gmail.com
                  <ArrowUpRight className="rtl:-scale-x-100 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 dark:border-white/5 text-gray-600 dark:text-gray-500 text-sm gap-6">
          <p>{t.footer.built}</p>
        </div>
      </div>
    </footer>
  );
}
