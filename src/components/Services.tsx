import { motion } from 'motion/react';
import { Layout, Code2, Globe, Cpu, Zap, ArrowRight } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export default function Services() {
  const { t } = useApp();
  
  const servicesData = [
    {
      title: t.services.webDesign,
      description: t.services.webDesignDesc,
      icon: Layout,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: t.services.customDev,
      description: t.services.customDevDesc,
      icon: Code2,
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: t.services.ecommerce,
      description: t.services.ecommerceDesc,
      icon: Globe,
      color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      title: t.services.ai,
      description: t.services.aiDesc,
      icon: Cpu,
      color: 'from-orange-500/20 to-yellow-500/20'
    }
  ];

  return (
    <section id="services" className="py-16 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-mono text-xs uppercase tracking-widest mb-4"
          >
            {t.services.expertise}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold leading-tight"
          >
            {t.services.title} <span className="text-gray-500 text-opacity-80 italic font-light">{t.services.titleHighlight}</span>
          </motion.h2>
        </div>
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
        >
          <Zap className="w-12 h-12 text-brand-primary opacity-20 hidden md:block" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
            className={`group p-8 rounded-3xl glass hover:border-brand-primary/50 dark:hover:border-brand-primary/50 transition-all duration-500 flex flex-col justify-between min-h-[320px] md:h-[320px] relative`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            
            <div className="relative z-10">
              <service.icon className="w-10 h-10 mb-6 text-brand-primary" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 rtl:translate-x-4 ltr:-translate-x-4 group-hover:translate-x-0 transition-all duration-300">
              {t.services.explore} <ArrowRight className="w-4 h-4 rtl:-scale-x-100" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
