import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Design Philosophy: Premium Dark Navy & Cream
 * - Deep Navy (#0f1419) for premium, professional feel
 * - Gold/Warm Cream (#d4a574) for luxury accents
 * - Custom SVG icons for uniqueness
 * - Extensive animations with Framer Motion
 * - Sophisticated, elegant interactions
 */

// Custom SVG Icons
const CustomIcons = {
  Globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Zap: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  Code: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Palette: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="6" r="1.5" fill="currentColor" />
      <circle cx="16.5" cy="16.5" r="1.5" fill="currentColor" />
      <circle cx="7.5" cy="16.5" r="1.5" fill="currentColor" />
    </svg>
  ),
  ShoppingCart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  Rocket: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
      <circle cx="11" cy="11" r="1" fill="currentColor" />
    </svg>
  ),
};

// Animated counter component
function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container flex items-center justify-between h-16">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-accent">
              <CustomIcons.Globe />
            </div>
            <span className="font-display text-lg font-bold text-foreground">LocalBiz</span>
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Pricing", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-accent transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Get Started
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />

        <div className="container relative z-10 max-w-4xl">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30"
              variants={itemVariants}
            >
              <span className="text-sm font-medium text-accent">✨ Premium Web Design for Local Businesses</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-display font-bold leading-tight text-foreground"
              variants={itemVariants}
            >
              Stunning Websites
              <span className="block text-accent">That Convert</span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              Professional, fast-loading websites designed to grow your local business. Transparent pricing, no hidden fees, and results that matter.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group font-semibold">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-border hover:bg-muted font-semibold">
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-primary/5 to-accent/5 border-y border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Websites Created", value: 500 },
              { label: "Client Satisfaction", value: 98 },
              { label: "Cost Savings", value: 50 },
              { label: "Hours Turnaround", value: 24 },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                  <AnimatedCounter end={stat.value} />
                  {stat.label.includes("Satisfaction") ? "%" : stat.label.includes("Savings") ? "%" : stat.label.includes("Hours") ? "h" : "+"}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4">
        <div className="container">
          <motion.div
            className="max-w-3xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive web solutions tailored to your business needs.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: CustomIcons.Zap,
                title: "Lightning Fast",
                description: "Optimized for speed with fast load times that keep visitors engaged.",
              },
              {
                icon: CustomIcons.Code,
                title: "Clean Code",
                description: "Built with modern standards for maintainability and scalability.",
              },
              {
                icon: CustomIcons.Palette,
                title: "Custom Design",
                description: "Unique, beautiful designs that reflect your brand perfectly.",
              },
              {
                icon: CustomIcons.Rocket,
                title: "SEO Ready",
                description: "Optimized for search engines to help customers find you.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="p-8 border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer h-full">
                  <motion.div
                    className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent"
                  animate={hoveredCard === idx ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                  >
                    <service.icon />
                  </motion.div>
                  <h3 className="text-xl font-display font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your business. No hidden fees, ever.
            </p>
          </motion.div>

          {/* One-Time Plans */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold mb-8 text-center text-foreground">One-Time Payment</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Basic Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-8 border border-border hover:border-accent/50 transition-all duration-300 h-full">
                  <h3 className="text-2xl font-display font-bold mb-2 text-foreground">Simple Website</h3>
                  <p className="text-muted-foreground mb-6">Perfect for startups</p>
                  <div className="mb-8">
                    <span className="text-5xl font-display font-bold text-accent">$200</span>
                    <span className="text-muted-foreground ml-2">one-time</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm">
                    {[
                      "5-page website",
                      "Mobile responsive",
                      "Contact form",
                      "Basic SEO",
                      "1 month support",
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                      Get Started
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>

              {/* E-Commerce Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-8 border-2 border-accent shadow-lg relative h-full">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 text-foreground">E-Commerce Store</h3>
                  <p className="text-muted-foreground mb-6">For growing businesses</p>
                  <div className="mb-8">
                    <span className="text-5xl font-display font-bold text-accent">$500</span>
                    <span className="text-muted-foreground ml-2">one-time</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm">
                    {[
                      "Unlimited pages",
                      "E-commerce ready",
                      "Product catalog",
                      "Payment integration",
                      "Advanced SEO",
                      "3 months support",
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                      Get Started
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Subscription Plans */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold mb-8 text-center text-foreground">Monthly Subscription</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Basic Subscription */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-8 border border-border hover:border-accent/50 transition-all duration-300 h-full">
                  <h3 className="text-2xl font-display font-bold mb-2 text-foreground">Basic Plan</h3>
                  <p className="text-muted-foreground mb-6">Ongoing support & updates</p>
                  <div className="mb-8">
                    <span className="text-5xl font-display font-bold text-accent">$20</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm">
                    {[
                      "Monthly updates",
                      "Security monitoring",
                      "Performance optimization",
                      "Email support",
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                      Subscribe
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>

              {/* Premium Subscription */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-8 border-2 border-accent shadow-lg relative h-full">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    BEST VALUE
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 text-foreground">Premium Plan</h3>
                  <p className="text-muted-foreground mb-6">Full support & features</p>
                  <div className="mb-8">
                    <span className="text-5xl font-display font-bold text-accent">$50</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm">
                    {[
                      "Everything in Basic",
                      "Priority support",
                      "New features",
                      "Analytics dashboard",
                      "Monthly strategy call",
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                      Subscribe
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        id="contact"
        className="py-24 px-4 relative overflow-hidden bg-gradient-to-r from-primary via-primary/95 to-primary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <div className="container relative z-10 max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Grow Your Business?
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's create a website that brings real results. Get a free consultation today.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-white hover:bg-white/90 text-primary group font-semibold">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                Schedule a Call
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12 px-4">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-accent">
                  <CustomIcons.Globe />
                </div>
                <span className="font-display font-bold">LocalBiz</span>
              </div>
              <p className="text-sm text-muted-foreground">Premium web design for local businesses.</p>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["Web Design", "E-commerce", "SEO"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-accent transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["About", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-accent transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["Privacy", "Terms"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-accent transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 LocalBiz Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
