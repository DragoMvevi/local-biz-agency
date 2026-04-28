import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Globe, Zap, DollarSign, Smartphone, Search, BarChart3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Design Philosophy: Modern Minimalist with Bold Accents
 * - Navy blue (#1a2332) establishes professional credibility
 * - Emerald green (#10b981) signals growth and value proposition
 * - Poppins + Inter typography creates modern, friendly hierarchy
 * - Asymmetric layouts avoid generic, corporate feel
 * - Subtle animations enhance UX without being gratuitous
 */

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

// Parallax scroll hook
function useParallax(offset = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset_y, setOffset_y] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementOffset = window.innerHeight - rect.top;
        setOffset_y(elementOffset * offset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return { ref, offset_y };
}

export default function Home() {
  const { ref: servicesRef, offset_y: servicesOffset } = useParallax(0.3);
  const { ref: pricingRef, offset_y: pricingOffset } = useParallax(0.2);

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">LocalBiz</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">Services</a>
            <a href="#pricing" className="text-sm font-medium hover:text-accent transition-colors">Pricing</a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 px-4 overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663609865308/VVyznFisNfV5ZEVTdonuV4/hero-background-4ehQKXVvjwLdrGvxqqxWKE.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />

        <div className="container relative z-10 max-w-4xl">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-sm font-medium text-accent">🚀 Affordable Web Design for Local Businesses</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight text-foreground">
              Professional Websites at
              <span className="block text-accent">Unbeatable Prices</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              We create stunning, fast-loading websites for local businesses that drive real results. No hidden fees, no long contracts—just quality web design that fits your budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                <AnimatedCounter end={500} />+
              </div>
              <p className="text-sm text-muted-foreground">Websites Created</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                <AnimatedCounter end={98} />%
              </div>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                <AnimatedCounter end={50} />%
              </div>
              <p className="text-sm text-muted-foreground">Cost Savings vs Industry</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                <AnimatedCounter end={24} />h
              </div>
              <p className="text-sm text-muted-foreground">Average Turnaround</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4" ref={servicesRef}>
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground">
              From simple landing pages to full e-commerce solutions, we have the expertise to bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Cards */}
            {[
              {
                icon: Smartphone,
                title: "Responsive Design",
                description: "Beautiful websites that look perfect on all devices—mobile, tablet, and desktop.",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for speed with fast load times that keep visitors engaged and boost SEO.",
              },
              {
                icon: Search,
                title: "SEO Optimized",
                description: "Built with search engines in mind so your business gets found by local customers.",
              },
              {
                icon: BarChart3,
                title: "Analytics Ready",
                description: "Track visitor behavior and measure results with integrated analytics dashboards.",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer"
                style={{
                  transform: `translateY(${servicesOffset * 0.1}px)`,
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 px-4"
        ref={pricingRef}
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663609865308/VVyznFisNfV5ZEVTdonuV4/pricing-background-NYBDQpDQKzqp4UuHARM6qf.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              No hidden fees. No surprises. Just honest pricing for quality web design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <Card className="p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-display font-bold mb-2 text-foreground">Starter</h3>
              <p className="text-muted-foreground mb-6">Perfect for small businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-display font-bold text-accent">$499</span>
                <span className="text-muted-foreground ml-2">one-time</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>5-page website</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Mobile responsive</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Contact form</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>1 month support</span>
                </li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Get Started</Button>
            </Card>

            {/* Professional Plan - Featured */}
            <Card className="p-8 border-2 border-accent shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-display font-bold mb-2 text-foreground">Professional</h3>
              <p className="text-muted-foreground mb-6">Best for growing businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-display font-bold text-accent">$999</span>
                <span className="text-muted-foreground ml-2">one-time</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Unlimited pages</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>E-commerce ready</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>SEO optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>3 months support</span>
                </li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Get Started</Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-display font-bold mb-2 text-foreground">Enterprise</h3>
              <p className="text-muted-foreground mb-6">For large-scale projects</p>
              <div className="mb-6">
                <span className="text-4xl font-display font-bold text-accent">Custom</span>
                <span className="text-muted-foreground ml-2">pricing</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Custom features</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>API integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Ongoing maintenance</span>
                </li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Contact Us</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663609865308/VVyznFisNfV5ZEVTdonuV4/cta-background-PFEreF2R9PZu7VdKKQ3F.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

        <div className="container relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Let's create a website that brings real results. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white hover:bg-white/90 text-primary group">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12 px-4">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="font-display font-bold">LocalBiz</span>
              </div>
              <p className="text-sm text-muted-foreground">Affordable web design for local businesses.</p>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Web Design</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">E-commerce</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">SEO</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 LocalBiz Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }

        /* Smooth transitions for interactive elements */
        button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        button:hover {
          transform: translateY(-2px);
        }

        /* Parallax effect for cards */
        .card-parallax {
          transition: transform 0.1s ease-out;
        }
      `}</style>
    </div>
  );
}
