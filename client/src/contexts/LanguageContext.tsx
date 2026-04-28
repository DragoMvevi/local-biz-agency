import React, { createContext, useContext, useState } from "react";

type Language = "en" | "ar";

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",
    "hero.badge": "✨ Premium Web Development for Local Businesses",
    "hero.title1": "Stunning Websites",
    "hero.title2": "That Convert",
    "hero.description":
      "Professional, lightning-fast websites built to grow your local business. Transparent pricing, no hidden fees, and results that matter. Starting at just $200.",
    "hero.cta1": "Start Your Project",
    "hero.cta2": "View Our Work",
    "stats.websites": "Websites Created",
    "stats.satisfaction": "Client Satisfaction",
    "stats.savings": "Cost Savings",
    "stats.turnaround": "Hours Turnaround",
    "services.title": "What We Offer",
    "services.description": "Comprehensive web solutions tailored to your business needs.",
    "services.fast": "Lightning Fast",
    "services.fastDesc": "Optimized for speed with fast load times that keep visitors engaged and boost SEO rankings.",
    "services.mobile": "Mobile First",
    "services.mobileDesc": "Responsive design that looks perfect on all devices - mobile, tablet, and desktop.",
    "services.seo": "SEO Optimized",
    "services.seoDesc": "Built with search engines in mind to help local customers find you organically.",
    "services.conversion": "Conversion Ready",
    "services.conversionDesc": "Strategic design and UX that turns visitors into customers and drives real business growth.",
    "pricing.title": "Simple, Transparent Pricing",
    "pricing.description": "Choose the plan that fits your business. No hidden fees, ever.",
    "pricing.oneTime": "One-Time Payment",
    "pricing.subscription": "Monthly Subscription",
    "pricing.simple": "Simple Website",
    "pricing.simpleDesc": "Perfect for startups",
    "pricing.ecommerce": "E-Commerce Store",
    "pricing.ecommerceDesc": "For growing businesses",
    "pricing.basic": "Basic Plan",
    "pricing.basicDesc": "Ongoing support & updates",
    "pricing.premium": "Premium Plan",
    "pricing.premiumDesc": "Full support & features",
    "pricing.mostPopular": "MOST POPULAR",
    "pricing.bestValue": "BEST VALUE",
    "pricing.getStarted": "Get Started",
    "pricing.subscribe": "Subscribe",
    "cta.title": "Ready to Grow Your Business?",
    "cta.description": "Let's create a website that brings real results. Get a free consultation today.",
    "cta.startProject": "Start Your Project",
    "cta.scheduleCall": "Schedule a Call",
    "newsletter.title": "Stay Updated",
    "newsletter.description": "Get the latest web design trends and tips delivered to your inbox.",
    "newsletter.placeholder": "Enter your email",
    "newsletter.subscribe": "Subscribe",
    "newsletter.success": "✓ Thanks for subscribing!",
    "footer.company": "Premium web development for local businesses.",
    "footer.services": "Services",
    "footer.company_": "Company",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.copyright": "© 2026 Gdevalop. All rights reserved.",
  },
  ar: {
    "nav.services": "الخدمات",
    "nav.pricing": "الأسعار",
    "nav.contact": "اتصل بنا",
    "nav.getStarted": "ابدأ الآن",
    "hero.badge": "✨ تطوير ويب احترافي للشركات المحلية",
    "hero.title1": "مواقع ويب مذهلة",
    "hero.title2": "تحقق النتائج",
    "hero.description":
      "مواقع ويب احترافية وسريعة البرق مصممة لنمو عملك المحلي. أسعار شفافة وبدون رسوم مخفية والنتائج التي تهم. ابدأ من 200 دولار فقط.",
    "hero.cta1": "ابدأ مشروعك",
    "hero.cta2": "شاهد أعمالنا",
    "stats.websites": "مواقع تم إنشاؤها",
    "stats.satisfaction": "رضا العملاء",
    "stats.savings": "توفير التكاليف",
    "stats.turnaround": "ساعات الإنجاز",
    "services.title": "ما نقدمه",
    "services.description": "حلول ويب شاملة مخصصة لاحتياجات عملك.",
    "services.fast": "سريع جداً",
    "services.fastDesc": "محسّن للسرعة مع أوقات تحميل سريعة تحافظ على انخراط الزوار وتعزز تصنيفات SEO.",
    "services.mobile": "أولاً الهاتف المحمول",
    "services.mobileDesc": "تصميم متجاوب يبدو مثالياً على جميع الأجهزة - الهاتف المحمول والجهاز اللوحي وسطح المكتب.",
    "services.seo": "محسّن لـ SEO",
    "services.seoDesc": "مبني مع مراعاة محركات البحث لمساعدة العملاء المحليين في العثور عليك بشكل عضوي.",
    "services.conversion": "جاهز للتحويل",
    "services.conversionDesc": "تصميم استراتيجي وتجربة مستخدم تحول الزوار إلى عملاء وتدفع نمو الأعمال الحقيقي.",
    "pricing.title": "أسعار بسيطة وشفافة",
    "pricing.description": "اختر الخطة التي تناسب عملك. بدون رسوم مخفية على الإطلاق.",
    "pricing.oneTime": "دفع لمرة واحدة",
    "pricing.subscription": "الاشتراك الشهري",
    "pricing.simple": "موقع بسيط",
    "pricing.simpleDesc": "مثالي للشركات الناشئة",
    "pricing.ecommerce": "متجر التجارة الإلكترونية",
    "pricing.ecommerceDesc": "للشركات المتنامية",
    "pricing.basic": "الخطة الأساسية",
    "pricing.basicDesc": "الدعم والتحديثات المستمرة",
    "pricing.premium": "الخطة المميزة",
    "pricing.premiumDesc": "الدعم الكامل والميزات",
    "pricing.mostPopular": "الأكثر شيوعاً",
    "pricing.bestValue": "أفضل قيمة",
    "pricing.getStarted": "ابدأ الآن",
    "pricing.subscribe": "اشترك",
    "cta.title": "هل أنت مستعد لنمو عملك؟",
    "cta.description": "دعنا ننشئ موقع ويب يحقق نتائج حقيقية. احصل على استشارة مجانية اليوم.",
    "cta.startProject": "ابدأ مشروعك",
    "cta.scheduleCall": "حدد موعداً",
    "newsletter.title": "ابقَ محدثاً",
    "newsletter.description": "احصل على أحدث اتجاهات تصميم الويب والنصائح في صندوق البريد الخاص بك.",
    "newsletter.placeholder": "أدخل بريدك الإلكتروني",
    "newsletter.subscribe": "اشترك",
    "newsletter.success": "✓ شكراً لاشتراكك!",
    "footer.company": "تطوير ويب احترافي للشركات المحلية.",
    "footer.services": "الخدمات",
    "footer.company_": "الشركة",
    "footer.contact": "اتصل بنا",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "footer.copyright": "© 2026 Gdevalop. جميع الحقوق محفوظة.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
