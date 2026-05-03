import { motion } from 'motion/react';
import { useApp } from '../contexts/AppContext';
import { MessageSquare, LayoutTemplate, ShieldCheck, Database, Rocket } from 'lucide-react';

export default function Process() {
  const { t } = useApp();

  const steps = [
    {
      icon: MessageSquare,
      title: t.process.step1Title,
      desc: t.process.step1Desc,
      colSpan: 'col-span-1 md:col-span-12',
    },
    {
      icon: LayoutTemplate,
      title: t.process.step2Title,
      desc: t.process.step2Desc,
      colSpan: 'col-span-1 md:col-span-12 lg:col-span-6',
    },
    {
      icon: ShieldCheck,
      title: t.process.step3Title,
      desc: t.process.step3Desc,
      colSpan: 'col-span-1 md:col-span-12 lg:col-span-6',
    },
    {
      icon: Database,
      title: t.process.step4Title,
      desc: t.process.step4Desc,
      colSpan: 'col-span-1 md:col-span-12 lg:col-span-6',
    },
    {
      icon: Rocket,
      title: t.process.step5Title,
      desc: t.process.step5Desc,
      colSpan: 'col-span-1 md:col-span-12 lg:col-span-6',
    }
  ];

  return (
    <section id="process" className="py-16 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-mono text-xs uppercase tracking-widest mb-4"
          >
            {t.process.subtitle}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold leading-tight"
          >
            {t.process.title} <span className="text-gray-500 text-opacity-80 italic font-light">{t.process.titleHighlight}</span>
          </motion.h2>
        </div>
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="max-w-sm"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed md:text-right rtl:md:text-left transition-colors">
            {t.process.desc}
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
            className={`group p-8 rounded-3xl glass hover:border-brand-primary/50 dark:hover:border-brand-primary/50 transition-all duration-500 flex flex-col justify-between min-h-[280px] md:h-[280px] relative ${step.colSpan}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <step.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors flex items-center gap-4">
                <span className="text-brand-primary/30 font-mono text-sm">{String(index + 1).padStart(2, '0')}</span> 
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
