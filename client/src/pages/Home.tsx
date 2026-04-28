import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, Mail, Phone, Moon, Sun, Globe, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * PRODUCTION-READY: Gdevalop Premium Web Development Agency
 * - Updated pricing: $100 basic, $500 premium, free demo site
 * - Portfolio section with 20+ website templates
 * - Mobile-optimized text and components
 * - Social media integration
 * - Updated statistics and features
 */

const GdevalopLogo = () => (
  <img
    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663609865308/VVyznFisNfV5ZEVTdonuV4/gdevalop-logo-TBAMnCeii4p72Sx3FdKGEw.webp"
    alt="Gdevalop Logo"
    className="w-8 h-8"
  />
);

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
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const isDark = theme === "dark";
  const bgImage = isDark
    ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663609865308/VVyznFisNfV5ZEVTdonuV4/premium-geometric-bg-BTc45AwBsY8xbxJAwWh4Ee.webp"
    : "https://d2xsxph8kpxj0f.cloudfront.net/310519663609865308/VVyznFisNfV5ZEVTdonuV4/premium-geometric-bg-light-34VVACDHrKZXB48uozcY94.webp";

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/gdevalop", label: "Facebook" },
    { icon: Instagram, url: "https://instagram.com/gdevalop", label: "Instagram" },
    { icon: Linkedin, url: "https://linkedin.com/company/gdevalop", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com/gdevalop", label: "Twitter" },
  ];

  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-hidden" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container flex items-center justify-between h-14 md:h-16 px-4">
          <motion.a
            href="#home"
            className="flex items-center gap-2 md:gap-3 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center">
              <GdevalopLogo />
            </div>
            <span className="font-display text-lg md:text-xl font-bold text-foreground group-hover:text-accent transition-colors">
              Gdevalop
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {["Services", "Pricing", "Portfolio", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-accent transition-colors"
                whileHover={{ y: -2 }}
              >
                {t(`nav.${item.toLowerCase()}`)}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <motion.button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-xs md:text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">{language === "en" ? "العربية" : "EN"}</span>
            </motion.button>

            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun className="w-3 h-3 md:w-4 md:h-4" /> : <Moon className="w-3 h-3 md:w-4 md:h-4" />}
            </motion.button>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-3 md:px-6 py-2 text-xs md:text-sm hidden sm:inline-flex">
                {t("nav.getStarted")}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 md:pt-32 pb-20 md:pb-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 dark:opacity-30"
          style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <motion.div
          className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />

        <div className="container relative z-10 max-w-5xl">
          <motion.div
            className="space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-block px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-accent/15 border border-accent/40 backdrop-blur-sm"
              variants={itemVariants}
            >
              <span className="text-xs md:text-sm font-semibold text-accent">{t("hero.badge")}</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-7xl lg:text-8xl font-display font-bold leading-tight text-foreground"
              variants={itemVariants}
            >
              {t("hero.title1")}
              <span className="block text-accent">{t("hero.title2")}</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light"
              variants={itemVariants}
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="bg-accent hover:bg-accent/90 text-accent-foreground group font-semibold px-6 md:px-8 py-4 md:py-6 text-sm md:text-base w-full sm:w-auto">
                  {t("hero.cta1")}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-border hover:bg-muted font-semibold px-6 md:px-8 py-4 md:py-6 text-sm md:text-base w-full sm:w-auto">
                  {t("hero.cta2")}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="py-16 md:py-20 bg-gradient-to-r from-primary/8 to-accent/8 border-y border-border relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "stats.websites", value: 500, suffix: "+" },
              { label: "stats.satisfaction", value: 98, suffix: "%" },
              { label: "stats.savings", value: 60, suffix: "%" },
              { label: "stats.turnaround", value: 24, suffix: "-48h" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-accent mb-2 md:mb-3">
                  <AnimatedCounter end={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">{t(stat.label)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 px-4 relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl mb-12 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 text-foreground">
              {t("services.title")}
            </h2>
            <p className="text-base md:text-xl text-muted-foreground font-light">
              {t("services.description")}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { key: "fast", icon: "⚡" },
              { key: "mobile", icon: "📱" },
              { key: "seo", icon: "🔍" },
              { key: "conversion", icon: "💰" },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="p-6 md:p-10 border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer h-full bg-background/50 backdrop-blur-sm">
                  <motion.div
                    className="text-4xl md:text-6xl mb-4 md:mb-6"
                    animate={hoveredCard === idx ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-lg md:text-2xl font-display font-bold mb-2 md:mb-3 text-foreground">
                    {t(`services.${service.key}`)}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                    {t(`services.${service.key}Desc`)}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 px-4 bg-foreground/5 relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 text-foreground">
              Our Portfolio
            </h2>
            <p className="text-base md:text-xl text-muted-foreground font-light">
              20+ Professional Website Templates Across Different Industries
            </p>
          </motion.div>

          <motion.div
            className="rounded-xl overflow-hidden border border-border shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663609865308/VVyznFisNfV5ZEVTdonuV4/portfolio-templates-clean-oJy5DMSRd62dEB7q8M3pUq.webp"
              alt="Portfolio Templates"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 px-4 bg-gradient-to-b from-primary/8 to-transparent relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 text-foreground">
              {t("pricing.title")}
            </h2>
            <p className="text-base md:text-xl text-muted-foreground font-light">
              {t("pricing.description")}
            </p>
          </motion.div>

          {/* One-Time Plans */}
          <motion.div
            className="mb-16 md:mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 md:mb-12 text-center text-foreground">
              {t("pricing.oneTime")}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {[
                { 
                  key: "demo", 
                  price: "FREE", 
                  label: "Demo Site",
                  features: ["Prototype Design", "Social Media Links", "Client Approval", "Mobile Responsive", "1 Revision Round"]
                },
                { 
                  key: "simple", 
                  price: "$100",
                  label: "Basic Website",
                  features: ["5 Pages", "Responsive Design", "Contact Form", "SEO Basics", "2 Revision Rounds", "Social Media Links"]
                },
                { 
                  key: "ecommerce", 
                  price: "$500", 
                  label: "E-Commerce Store",
                  featured: true,
                  features: ["Unlimited Pages", "Product Catalog", "Shopping Cart", "Payment Integration", "Advanced SEO", "Analytics Setup", "3 Revision Rounds", "Social Media Links", "Email Support"]
                },
              ].map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12 }}
                >
                  <Card className={`p-6 md:p-12 transition-all duration-300 h-full flex flex-col relative ${
                    plan.featured
                      ? "border-2 border-accent shadow-2xl bg-gradient-to-br from-accent/10 to-background"
                      : "border border-border hover:border-accent/50 bg-background/50 backdrop-blur-sm"
                  }`}>
                    {plan.featured && (
                      <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 px-4 md:px-6 py-1 md:py-2 bg-accent text-accent-foreground text-xs font-bold rounded-full shadow-lg">
                        {t("pricing.mostPopular")}
                      </div>
                    )}
                    <h3 className="text-xl md:text-3xl font-display font-bold mb-2 md:mb-3 text-foreground">
                      {plan.label}
                    </h3>
                    <div className="mb-6 md:mb-10">
                      <span className="text-4xl md:text-6xl font-display font-bold text-accent">{plan.price}</span>
                      {plan.price !== "FREE" && <span className="text-muted-foreground ml-2 md:ml-3 font-light text-sm md:text-base">{t("pricing.oneTime").toLowerCase()}</span>}
                    </div>
                    <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-xs md:text-sm flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 md:gap-3">
                          <Check className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button onClick={() => alert(`Selected: ${plan.label} - ${plan.price}`)} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 md:py-6 text-xs md:text-base">
                        {plan.price === "FREE" ? "Get Started" : "Get Started"}
                      </Button>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Subscription Plans */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 md:mb-12 text-center text-foreground">
              {t("pricing.subscription")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {[
                { 
                  key: "basic", 
                  price: "$10",
                  label: "Basic Plan",
                  features: ["Monthly Updates", "Performance Monitoring", "Email Support", "Monthly Report"]
                },
                { 
                  key: "premium", 
                  price: "$50", 
                  label: "Premium Plan",
                  featured: true,
                  features: ["Weekly Updates", "Priority Support", "Advanced Analytics", "SEO Optimization", "Social Media Integration", "Monthly Strategy Call"]
                },
              ].map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12 }}
                >
                  <Card className={`p-6 md:p-12 transition-all duration-300 h-full flex flex-col relative ${
                    plan.featured
                      ? "border-2 border-accent shadow-2xl bg-gradient-to-br from-accent/10 to-background"
                      : "border border-border hover:border-accent/50 bg-background/50 backdrop-blur-sm"
                  }`}>
                    {plan.featured && (
                      <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 px-4 md:px-6 py-1 md:py-2 bg-accent text-accent-foreground text-xs font-bold rounded-full shadow-lg">
                        {t("pricing.bestValue")}
                      </div>
                    )}
                    <h3 className="text-xl md:text-3xl font-display font-bold mb-2 md:mb-3 text-foreground">
                      {plan.label}
                    </h3>
                    <div className="mb-6 md:mb-10">
                      <span className="text-4xl md:text-6xl font-display font-bold text-accent">{plan.price}</span>
                      <span className="text-muted-foreground ml-2 md:ml-3 font-light text-sm md:text-base">/month</span>
                    </div>
                    <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-xs md:text-sm flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 md:gap-3">
                          <Check className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button onClick={() => alert(`Selected: ${plan.label} - ${plan.price}/month`)} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 md:py-6 text-xs md:text-base">
                        {t("pricing.subscribe")}
                      </Button>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        id="contact"
        className="py-20 md:py-32 px-4 relative overflow-hidden bg-gradient-to-r from-primary via-primary/95 to-primary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/15 rounded-full blur-3xl"
          animate={{
            y: [0, 60, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <div className="container relative z-10 max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl lg:text-7xl font-display font-bold mb-4 md:mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("cta.title")}
          </motion.h2>
          <motion.p
            className="text-base md:text-xl text-white/80 mb-8 md:mb-10 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t("cta.description")}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white hover:bg-white/90 text-primary group font-semibold px-6 md:px-8 py-4 md:py-6 text-sm md:text-base w-full sm:w-auto">
                {t("cta.startProject")}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-6 md:px-8 py-4 md:py-6 text-sm md:text-base w-full sm:w-auto">
                {t("cta.scheduleCall")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 px-4 bg-foreground/5 border-t border-border">
        <div className="container max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4 text-foreground">
            {t("newsletter.title")}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 font-light">
            {t("newsletter.description")}
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2 flex-col sm:flex-row">
            <input
              type="email"
              placeholder={t("newsletter.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-light text-sm md:text-base"
              required
            />
            <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 md:px-8 py-3 md:py-4 text-sm md:text-base whitespace-nowrap">
              {t("newsletter.subscribe")}
            </Button>
          </form>
          {subscribed && (
            <motion.p
              className="text-accent mt-3 md:mt-4 text-xs md:text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {t("newsletter.success")}
            </motion.p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12 md:py-16 px-4">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center">
                  <GdevalopLogo />
                </div>
                <span className="font-display font-bold text-base md:text-lg">Gdevalop</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground font-light">
                {t("footer.company")}
              </p>
              <div className="flex gap-3 mt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold mb-3 md:mb-4 text-foreground text-sm md:text-base">
                {t("footer.services")}
              </h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-muted-foreground font-light">
                <li><a href="#" className="hover:text-accent transition-colors">Web Design</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">E-commerce</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">SEO</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-3 md:mb-4 text-foreground text-sm md:text-base">
                {t("footer.company_")}
              </h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-muted-foreground font-light">
                <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">{t("footer.contact")}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-3 md:mb-4 text-foreground text-sm md:text-base">
                {t("footer.contact")}
              </h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-muted-foreground font-light">
                <li className="flex items-center gap-2">
                  <Mail className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                  <a href="mailto:hello@gdevalop.com" className="hover:text-accent transition-colors">
                    hello@gdevalop.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                  <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground font-light">
            <p>
              {t("footer.copyright")} | 
              <a href="#" className="hover:text-accent transition-colors ml-2">
                {t("footer.privacy")}
              </a> | 
              <a href="#" className="hover:text-accent transition-colors ml-2">
                {t("footer.terms")}
              </a> | 
              <a href="/admin-login" className="hover:text-accent transition-colors ml-2 text-xs opacity-50 hover:opacity-100">
                Admin
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
