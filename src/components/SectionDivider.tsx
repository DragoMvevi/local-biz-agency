import { motion } from 'motion/react';

export default function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6 overflow-hidden py-8">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-black/40 dark:via-white/70 to-transparent origin-center shadow-[0_0_15px_-5px_rgba(59,130,246,0.5)]"
      />
    </div>
  );
}
