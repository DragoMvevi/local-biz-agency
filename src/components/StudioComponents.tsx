import { motion, AnimatePresence } from 'motion/react';
import { Palette, Type, MousePointer2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useApp } from '../contexts/AppContext';

export default function StudioComponents() {
  const { t, lang } = useApp();
  const [activeTab, setActiveTab] = useState<'palettes' | 'interactions' | 'typography'>('palettes');
  const [activePalette, setActivePalette] = useState(0);
  const [hoveredFont, setHoveredFont] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const palettes = [
    { name: t.portfolio.p1, colors: ['#0f172a', '#1e293b', '#3b82f6', '#60a5fa', '#93c5fd'] },
    { name: t.portfolio.p2, colors: ['#064e3b', '#065f46', '#10b981', '#34d399', '#6ee7b7'] },
    { name: t.portfolio.p3, colors: ['#450a0a', '#7f1d1d', '#ef4444', '#fb923c', '#fdba74'] },
    { name: t.portfolio.p4, colors: ['#000000', '#1a1a1a', '#3f3f3f', '#737373', '#e5e5e5'] },
  ];

  useEffect(() => {
    if (isHovering) return;

    const tabs: ('palettes' | 'interactions' | 'typography')[] = ['palettes', 'interactions', 'typography'];
    
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = tabs.indexOf(current);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section id="studio" className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsHovering(true)} 
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                 <Palette className="w-6 h-6 text-brand-primary" />
                 <span className="text-brand-primary font-mono text-sm uppercase tracking-widest">{t.portfolio.canvas || "Design System"}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase">
                {t.portfolio.studio} <span className="text-gray-500 font-light italic">{t.portfolio.studioHighlight}</span>
              </h2>
            </div>
            
            <div className="bg-black/5 dark:bg-white/5 p-2 rounded-2xl border border-black/10 dark:border-white/10 self-start w-full md:w-auto md:self-end">
              {/* Mobile View: Single cycling button */}
              <button
                onClick={() => {
                  const tabs: ('palettes' | 'interactions' | 'typography')[] = ['palettes', 'interactions', 'typography'];
                  const currentIndex = tabs.indexOf(activeTab);
                  const nextIndex = (currentIndex + 1) % tabs.length;
                  setActiveTab(tabs[nextIndex]);
                }}
                className="flex lg:hidden items-center justify-between w-full px-6 py-3 rounded-xl font-bold bg-brand-primary text-white shadow-lg transition-all"
              >
                <div className="flex items-center gap-2">
                  {activeTab === 'palettes' && <Palette className="w-4 h-4" />}
                  {activeTab === 'interactions' && <MousePointer2 className="w-4 h-4" />}
                  {activeTab === 'typography' && <Type className="w-4 h-4" />}
                  {activeTab === 'palettes' ? (t.portfolio.systems || "Colors") : 
                   activeTab === 'interactions' ? (t.portfolio.interactions || "Interactions") : 
                   (t.portfolio.type || "Typography")}
                </div>
                <span className="text-[10px] opacity-70 uppercase tracking-tighter ml-2">{t.portfolio.tapToSwitch}</span>
              </button>

              {/* Desktop View: Normal Tabs */}
              <div className="hidden lg:flex items-center">
                {[
                  { id: 'palettes', label: t.portfolio.systems || "Colors", icon: Palette },
                  { id: 'interactions', label: t.portfolio.interactions || "Interactions", icon: MousePointer2 },
                  { id: 'typography', label: t.portfolio.type || "Typography", icon: Type }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'palettes' | 'interactions' | 'typography')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap ${
                      activeTab === tab.id 
                        ? 'bg-brand-primary text-white shadow-lg' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="glass rounded-[40px] p-6 lg:p-12 min-h-[600px] border border-black/10 dark:border-white/10 relative overflow-hidden flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {activeTab === 'palettes' && (
                <motion.div
                  key="palettes"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-4 space-y-4">
                       {palettes.map((palette, i) => (
                         <button
                           key={palette.name}
                           onClick={() => setActivePalette(i)}
                           className={`w-full text-left rtl:text-right px-8 py-6 rounded-3xl transition-all border ${
                             activePalette === i 
                               ? 'glass border-black/20 dark:border-white/20 scale-105' 
                               : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                           }`}
                         >
                           <h3 className="text-xl font-bold font-display">{palette.name}</h3>
                           <div className="flex gap-2 mt-4">
                             {palette.colors.map(c => (
                               <div key={c} className="w-6 h-6 rounded-full border border-black/10 dark:border-white/10 shadow-sm" style={{ backgroundColor: c }} />
                             ))}
                           </div>
                         </button>
                       ))}
                    </div>

                    <div className="lg:col-span-8">
                      <div className="h-[400px] w-full rounded-[40px] overflow-hidden flex shadow-2xl relative border border-black/10 dark:border-white/10">
                        <AnimatePresence mode="popLayout">
                          {palettes[activePalette].colors.map((color, i) => (
                            <motion.div
                              key={`${activePalette}-${i}`}
                              initial={{ opacity: 0, y: 50 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                              className="group relative flex-1 hover:flex-[2] transition-all duration-500 ease-out flex flex-col justify-end p-6 cursor-pointer"
                              style={{ backgroundColor: color }}
                            >
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className={`font-mono text-sm font-bold mix-blend-difference text-white`}>
                                  {color}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'interactions' && (
                <motion.div
                  key="interactions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[400px]">
                     <motion.div 
                       whileHover={{ scale: 0.98 }}
                       className="md:col-span-2 glass border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] rounded-[40px] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative group cursor-crosshair min-h-[300px]"
                     >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-[80px] rounded-full group-hover:bg-brand-accent/30 transition-colors duration-700" />
                        <div className="relative z-10 space-y-8">
                          <div className="w-16 h-16 rounded-2xl bg-black/10 dark:bg-white/10 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-brand-primary group-hover:scale-150 transition-transform duration-500" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold mb-4 w-3/4">{t.portfolio.fluidLayout}</h3>
                            <div className="flex gap-2">
                              {[1,2,3].map(i => (
                                <motion.div 
                                  key={i}
                                  initial={false}
                                  animate={{ height: ["20px", "60px", "20px"] }}
                                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
                                  className="w-2 bg-black/20 dark:bg-white/20 rounded-full"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                     </motion.div>

                     <motion.div 
                       whileHover={{ y: -10 }}
                       className="glass border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] rounded-[40px] p-8 relative overflow-hidden group cursor-pointer min-h-[300px]"
                     >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="h-full flex flex-col items-center justify-center gap-8">
                          <div className="relative">
                            <div className="w-24 h-24 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center group-hover:border-brand-primary transition-colors duration-500">
                              <div className="w-2 bg-black dark:bg-white h-12 rounded-full absolute group-hover:rotate-90 transition-transform duration-500" />
                              <div className="w-12 bg-black dark:bg-white h-2 rounded-full absolute group-hover:rotate-180 transition-transform duration-500" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-center">{t.portfolio.microAnimations}</h3>
                        </div>
                     </motion.div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'typography' && (
                <motion.div
                  key="typography"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-gradient-to-br from-brand-primary/5 to-transparent blur-[100px] rounded-full pointer-events-none" />
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10 w-full">
                    <div className="md:col-span-4 flex flex-col gap-4 md:border-r md:rtl:border-r-0 md:rtl:border-l border-black/10 dark:border-white/10 md:pr-8 md:rtl:pr-0 md:rtl:pl-8">
                      {[t.portfolio.f1, t.portfolio.f2, t.portfolio.f3].map((font, idx) => (
                        <button 
                          key={font}
                          onMouseEnter={() => setHoveredFont(idx)}
                          className={`text-left rtl:text-right px-6 py-4 rounded-2xl transition-all ${
                            hoveredFont === idx 
                              ? 'bg-black text-white dark:bg-white dark:text-black font-bold scale-105' 
                              : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white glass border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]'
                          }`}
                        >
                          {font}
                        </button>
                      ))}
                    </div>

                    <div className="md:col-span-8 flex flex-col justify-center min-h-[300px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={hoveredFont}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className={
                            hoveredFont === 0 ? 'font-sans' : 
                            hoveredFont === 1 ? 'font-display' : 
                            'font-mono'
                          }
                        >
                           <div className="text-6xl md:text-8xl tracking-tight leading-none mb-6">
                             {lang === 'ar' ? (hoveredFont === 0 ? "نقي." : hoveredFont === 1 ? "جريء." : "تقني.") : (hoveredFont === 0 ? "Clean." : hoveredFont === 1 ? "Bold." : "Tech.")}
                           </div>
                           <p className={`text-xl md:text-2xl text-gray-600 dark:text-gray-400 ${hoveredFont === 2 ? 'text-sm md:text-base' : ''}`}>
                             {lang === 'ar' ? 'الطباعة هي صوت علامتك التجارية. نحن نختار خطوطاً تعبر عن رسالتك بدقة قبل أن يقرأ زوارك كلمة واحدة.' : 'Typography is the voice of your brand. We select typefaces that communicate your exact message before a single word is read.'}
                           </p>
                           <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 uppercase tracking-widest whitespace-nowrap overflow-hidden" dir="ltr">
                             <span>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</span>
                           </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
