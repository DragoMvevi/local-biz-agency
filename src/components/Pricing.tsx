import { motion } from 'motion/react';
import { Check, ArrowRight, CreditCard } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const { t } = useApp();
  const navigate = useNavigate();

  const plans = [
    {
      id: 'tier1',
      name: t.portfolio.plans.tier1.name,
      price: t.portfolio.plans.tier1.price,
      features: t.portfolio.plans.tier1.features,
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      id: 'tier2',
      name: t.portfolio.plans.tier2.name,
      price: t.portfolio.plans.tier2.price,
      features: t.portfolio.plans.tier2.features,
      color: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      id: 'tier3',
      name: t.portfolio.plans.tier3.name,
      price: t.portfolio.plans.tier3.price,
      features: t.portfolio.plans.tier3.features,
      color: 'from-brand-primary to-emerald-500',
      delay: 0.3
    },
    {
      id: 'tier4',
      name: t.portfolio.plans.tier4.name,
      price: t.portfolio.plans.tier4.price,
      features: t.portfolio.plans.tier4.features,
      color: 'from-gray-700 to-gray-900',
      delay: 0.4
    }
  ];

  return (
    <section id="pricing" className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: plan.delay }}
              className="glass rounded-[40px] p-8 border border-black/10 dark:border-white/10 flex flex-col h-full group hover:border-brand-primary/50 transition-colors"
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">{plan.price !== 'Custom' && plan.price !== 'مخصص' ? '$' : ''}{plan.price}</span>
                  {plan.price !== 'Custom' && plan.price !== 'مخصص' && <span className="text-gray-500 font-medium">/project</span>}
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <Check className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate(`/contact?plan=${plan.id}`)}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all group-hover:scale-[1.02] ${
                  plan.id === 'tier3' 
                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25' 
                    : 'bg-black text-white dark:bg-white dark:text-black hover:bg-brand-primary hover:text-white'
                }`}
              >
                {t.portfolio.plans.start}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
