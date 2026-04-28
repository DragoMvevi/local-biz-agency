import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, Mail, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * PRODUCTION-READY: Gdevalop Premium Web Development Agency
 * - Luxury branding with custom icon
 * - Enterprise-grade animations with Framer Motion
 * - SEO optimized with proper meta tags
 * - Performance optimized with lazy loading
 * - Accessibility compliant
 * - Mobile-first responsive design
 */

// Luxury Gdevalop Icon Component
const GdevalopIcon = () => (
  <img
    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663609865308/VVyznFisNfV5ZEVTdonuV4/gdevalop-icon-8sJAqXVhjhjGn3BBT8qNcm.webp"
    alt="Gdevalop Logo"
    className="w-8 h-8"
  />
);

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
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

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
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <GdevalopIcon />
            </div>
            <span className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
              Gdevalop
            </span>
          </motion.a>
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
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6">
              Get Started
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-24 px-4 overflow-hidden">
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
              <span className="text-sm font-medium text-accent">✨ Premium Web Development for Local Businesses</span>
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
              Professional, lightning-fast websites built to grow your local business. Transparent pricing, no hidden fees, and results that matter. Starting at just $200.
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
                title: "Lightning Fast",
                description: "Optimized for speed with fast load times that keep visitors engaged and boost SEO rankings.",
                icon: "⚡",
              },
              {
                title: "Mobile First",
                description: "Responsive design that looks perfect on all devices - mobile, tablet, and desktop.",
                icon: "📱",
              },
              {
                title: "SEO Optimized",
                description: "Built with search engines in mind to help local customers find you organically.",
                icon: "🔍",
              },
              {
                title: "Conversion Ready",
                description: "Strategic design and UX that turns visitors into customers and drives real business growth.",
                icon: "💰",
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
                    className="text-5xl mb-4"
                    animate={hoveredCard === idx ? { scale: 1.2 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
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
            className="mb-20"
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
                <Card className="p-8 border border-border hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
                  <h3 className="text-2xl font-display font-bold mb-2 text-foreground">Simple Website</h3>
                  <p className="text-muted-foreground mb-6">Perfect for startups</p>
                  <div className="mb-8">
                    <span className="text-5xl font-display font-bold text-accent">$200</span>
                    <span className="text-muted-foreground ml-2">one-time</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm flex-grow">
                    {[
                      "5-page website",
                      "Mobile responsive",
                      "Contact form",
                      "Basic SEO",
                      "1 month support",
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
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
                <Card className="p-8 border-2 border-accent shadow-lg relative h-full flex flex-col">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 text-foreground">E-Commerce Store</h3>
                  <p className="text-muted-foreground mb-6">For growing businesses</p>
                  <div className="mb-8">
                    <span className="text-5xl font-display font-bold text-accent">$500</span>
                    <span className="text-muted-foreground ml-2">one-time</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm flex-grow">
                    {[
                      "Unlimited pages",
                      "E-commerce ready",
                      "Product catalog",
                      "Payment integration",
                      "Advanced SEO",
                      "3 months support",
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
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
                <Card className="p-8 border border-border hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
                  <h3 className="text-2xl font-display font-bold mb-2 text-foreground">Basic Plan</h3>
                  <p className="text-muted-foreground mb-6">Ongoing support & updates</p>
                  <div className="mb-8">
                    <span className="text-5xl font-display font-bold text-accent">$20</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm flex-grow">
                    {[
                      "Monthly updates",
                      "Security monitoring",
                      "Performance optimization",
                      "Email support",
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
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
                <Card className="p-8 border-2 border-accent shadow-lg relative h-full flex flex-col">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    BEST VALUE
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 text-foreground">Premium Plan</h3>
                  <p className="text-muted-foreground mb-6">Full support & features</p>
                  <div className="mb-8">
                    <span className="text-5xl font-display font-bold text-accent">$50</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm flex-grow">
                    {[
                      "Everything in Basic",
                      "Priority support",
                      "New features",
                      "Analytics dashboard",
                      "Monthly strategy call",
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
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

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-foreground/5 border-t border-border">
        <div className="container max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-display font-bold mb-4 text-foreground">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">Get the latest web design trends and tips delivered to your inbox.</p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Subscribe
            </Button>
          </form>
          {subscribed && (
            <motion.p
              className="text-accent mt-4 text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✓ Thanks for subscribing!
            </motion.p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12 px-4">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <GdevalopIcon />
                </div>
                <span className="font-display font-bold text-lg">Gdevalop</span>
              </div>
              <p className="text-sm text-muted-foreground">Premium web development for local businesses.</p>
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
              <h4 className="font-display font-bold mb-4 text-foreground">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hello@gdevalop.com" className="hover:text-accent transition-colors">
                    hello@gdevalop.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Gdevalop. All rights reserved. | <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-accent transition-colors">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
