import { motion } from 'motion/react';
import { ExternalLink, Monitor } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const templates = [
  { name: 'Gridstone', url: 'https://gridstone-template.webflow.io/', image: '/assets/template1.gif' },
  { name: 'Goma', url: 'https://goma-by-casperbroe.webflow.io/', image: '/assets/template2.gif' },
  { name: 'Brewlab', url: 'https://brewlab-template.webflow.io/', image: '/assets/template3.gif' }
];

export default function Showcase() {
  const { t } = useApp();

  return (
    <section id="showcase-home" className="py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Monitor className="w-6 h-6 text-brand-primary" />
            <span className="text-brand-primary font-mono text-sm uppercase tracking-widest">{t.portfolio.showcase || "Portfoilio"}</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-6 uppercase">
            {t.portfolio.recent} <span className="text-gray-500 font-light italic">{t.portfolio.experiments}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t.portfolio.recentDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-1 glass glass-dark rounded-[32px] p-4 border border-black/10 dark:border-white/10 group flex flex-col min-h-[500px]"
            >
              <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="font-bold text-lg">{template.name}</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
              </div>
              
              <div className="relative w-full overflow-hidden bg-black/5 dark:bg-white/5 rounded-2xl group/image flex-1 border border-black/5 dark:border-white/5">
                <img 
                  src={template.image} 
                  alt={template.name}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
                />
                
                <a 
                  href={template.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center opacity-0 hover:opacity-100"
                >
                   <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                     <div className="bg-white text-black p-4 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                       <ExternalLink className="w-6 h-6 rtl:-scale-x-100" />
                     </div>
                   </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
