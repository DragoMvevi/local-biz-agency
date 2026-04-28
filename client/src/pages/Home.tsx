import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, Mail, Phone, Moon, Sun, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * PRODUCTION-READY: Gdevalop Premium Web Development Agency
 * - Professional luxury branding with custom logo
 * - Dark/Light mode with premium geometric backgrounds
 * - Arabic/English i18n support with RTL support
 * - Enterprise-grade animations with Framer Motion
 * - Premium design with sophisticated visual hierarchy
 */

// Professional Gdevalop Logo Component
const GdevalopLogo = () => (
  <img
    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663609865308/VVyznFisNfV5ZEVTdonuV4/gdevalop-logo-TBAMnCeii4p72Sx3FdKGEw.webp"
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

  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-hidden" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border"
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
              <GdevalopLogo />
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
                {t(`nav.${item.toLowerCase()}`)}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <motion.button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Toggle Language"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{language === "en" ? "العربية" : "EN"}</span>
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 hidden sm:inline-flex">
                {t("nav.getStarted")}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-32 px-4 overflow-hidden">
        {/* Premium geometric background */}
        <div
          className="absolute inset-0 opacity-40 dark:opacity-30"
          style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Animated gradient overlays */}
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl"
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
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-3xl"
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
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-block px-5 py-2.5 rounded-full bg-accent/15 border border-accent/40 backdrop-blur-sm"
              variants={itemVariants}
            >
              <span className="text-sm font-semibold text-accent">{t("hero.badge")}</span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-display font-bold leading-tight text-foreground"
              variants={itemVariants}
            >
              {t("hero.title1")}
              <span className="block text-accent">{t("hero.title2")}</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-light"
              variants={itemVariants}
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="bg-accent hover:bg-accent/90 text-accent-foreground group font-semibold px-8 py-6 text-base">
                  {t("hero.cta1")}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-border hover:bg-muted font-semibold px-8 py-6 text-base">
                  {t("hero.cta2")}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-primary/8 to-accent/8 border-y border-border relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
  

        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "stats.websites", value: 500, suffix: "+" },
              { label: "stats.satisfaction", value: 98, suffix: "%" },
              { label: "stats.savings", value: 50, suffix: "%" },
              { label: "stats.turnaround", value: 24, suffix: "h" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-6xl font-display font-bold text-accent mb-3">
                  <AnimatedCounter end={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-sm text-muted-foreground font-medium">{t(stat.label)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 relative overflow-hidden">

        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-foreground">
              {t("services.title")}
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              {t("services.description")}
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
                <Card className="p-10 border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer h-full bg-background/70 backdrop-blur-sm">
                  <motion.div
                    className="text-6xl mb-6"
                    animate={hoveredCard === idx ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold mb-3 text-foreground">
                    {t(`services.${service.key}`)}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {t(`services.${service.key}Desc`)}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-4 bg-gradient-to-b from-primary/8 to-transparent relative overflow-hidden">

        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-foreground">
              {t("pricing.title")}
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              {t("pricing.description")}
            </p>
          </motion.div>

          {/* One-Time Plans */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-bold mb-12 text-center text-foreground">
              {t("pricing.oneTime")}
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { key: "simple", price: "$200" },
                { key: "ecommerce", price: "$500", featured: true },
              ].map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12 }}
                >
                  <Card className={`p-12 transition-all duration-300 h-full flex flex-col relative ${
                    plan.featured
                      ? "border-2 border-accent shadow-2xl bg-gradient-to-br from-accent/10 to-background"
                      : "border border-border hover:border-accent/50 bg-background/70 backdrop-blur-sm"
                  }`}>
                    {plan.featured && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-accent text-accent-foreground text-xs font-bold rounded-full shadow-lg">
                        {t("pricing.mostPopular")}
                      </div>
                    )}
                    <h3 className="text-3xl font-display font-bold mb-3 text-foreground">
                      {t(`pricing.${plan.key}`)}
                    </h3>
                    <p className="text-muted-foreground mb-8 font-light">
                      {t(`pricing.${plan.key}Desc`)}
                    </p>
                    <div className="mb-10">
                      <span className="text-6xl font-display font-bold text-accent">{plan.price}</span>
                      <span className="text-muted-foreground ml-3 font-light">{t("pricing.oneTime").toLowerCase()}</span>
                    </div>
                    <ul className="space-y-4 mb-10 text-sm flex-grow">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="font-light">Feature {i}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button onClick={() => alert(`Selected: ${t(`pricing.${plan.key}`)} - $${plan.price}`)} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-base">
                        {t("pricing.getStarted")}
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
            <h3 className="text-3xl font-display font-bold mb-12 text-center text-foreground">
              {t("pricing.subscription")}
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { key: "basic", price: "$20" },
                { key: "premium", price: "$50", featured: true },
              ].map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12 }}
                >
                  <Card className={`p-12 transition-all duration-300 h-full flex flex-col relative ${
                    plan.featured
                      ? "border-2 border-accent shadow-2xl bg-gradient-to-br from-accent/10 to-background"
                      : "border border-border hover:border-accent/50 bg-background/70 backdrop-blur-sm"
                  }`}>
                    {plan.featured && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-accent text-accent-foreground text-xs font-bold rounded-full shadow-lg">
                        {t("pricing.bestValue")}
                      </div>
                    )}
                    <h3 className="text-3xl font-display font-bold mb-3 text-foreground">
                      {t(`pricing.${plan.key}`)}
                    </h3>
                    <p className="text-muted-foreground mb-8 font-light">
                      {t(`pricing.${plan.key}Desc`)}
                    </p>
                    <div className="mb-10">
                      <span className="text-6xl font-display font-bold text-accent">{plan.price}</span>
                      <span className="text-muted-foreground ml-3 font-light">/month</span>
                    </div>
                    <ul className="space-y-4 mb-10 text-sm flex-grow">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="font-light">Feature {i}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button onClick={() => alert(`Selected: ${t(`pricing.${plan.key}`)} - ${plan.price}/month`)} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-base">
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
        className="py-32 px-4 relative overflow-hidden bg-gradient-to-r from-primary via-primary/95 to-primary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/15 rounded-full blur-3xl"
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
            className="text-5xl md:text-7xl font-display font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("cta.title")}
          </motion.h2>
          <motion.p
            className="text-xl text-white/80 mb-10 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t("cta.description")}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white hover:bg-white/90 text-primary group font-semibold px-8 py-6 text-base">
                {t("cta.startProject")}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base">
                {t("cta.scheduleCall")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-foreground/5 border-t border-border">
        <div className="container max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-display font-bold mb-4 text-foreground">
            {t("newsletter.title")}
          </h3>
          <p className="text-muted-foreground mb-8 font-light">
            {t("newsletter.description")}
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2 flex-col sm:flex-row">
            <input
              type="email"
              placeholder={t("newsletter.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-light"
              required
            />
            <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4">
              {t("newsletter.subscribe")}
            </Button>
          </form>
          {subscribed && (
            <motion.p
              className="text-accent mt-4 text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {t("newsletter.success")}
            </motion.p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-16 px-4">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <GdevalopLogo />
                </div>
                <span className="font-display font-bold text-lg">Gdevalop</span>
              </div>
              <p className="text-sm text-muted-foreground font-light">
                {t("footer.company")}
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-foreground">
                {t("footer.services")}
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-light">
                <li><a href="#" className="hover:text-accent transition-colors">Web Design</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">E-commerce</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">SEO</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-foreground">
                {t("footer.company_")}
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-light">
                <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">{t("footer.contact")}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-foreground">
                {t("footer.contact")}
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-light">
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
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground font-light">
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
