import { motion } from 'motion/react';
import { useApp } from '../contexts/AppContext';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export default function ContactPage() {
  const { t } = useApp();
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get('plan') || '';
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const checkRateLimit = () => {
    const now = Date.now();
    const lastSubmit = localStorage.getItem('lastFormSubmit');
    const submitCountData = localStorage.getItem('formSubmitCount');
    
    // 1 minute delay
    if (lastSubmit && now - parseInt(lastSubmit) < 60000) {
      const secondsLeft = Math.ceil((60000 - (now - parseInt(lastSubmit))) / 1000);
      return `Please wait ${secondsLeft} seconds before sending another message.`;
    }
    
    // Max 20 per day
    if (submitCountData) {
      const { count, date } = JSON.parse(submitCountData);
      const today = new Date().toDateString();
      
      if (date === today) {
        if (count >= 20) {
          return "You have reached the maximum number of messages for today.";
        }
      } else {
        localStorage.setItem('formSubmitCount', JSON.stringify({ count: 0, date: today }));
      }
    } else {
      localStorage.setItem('formSubmitCount', JSON.stringify({ count: 0, date: new Date().toDateString() }));
    }
    
    return null;
  };

  const updateRateLimit = () => {
    localStorage.setItem('lastFormSubmit', Date.now().toString());
    const submitCountData = localStorage.getItem('formSubmitCount');
    if (submitCountData) {
      const { count, date } = JSON.parse(submitCountData);
      localStorage.setItem('formSubmitCount', JSON.stringify({ count: count + 1, date }));
    } else {
      localStorage.setItem('formSubmitCount', JSON.stringify({ count: 1, date: new Date().toDateString() }));
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const rateLimitError = checkRateLimit();
    if (rateLimitError) {
      setResult("Error: " + rateLimitError);
      return;
    }
    
    setIsSubmitting(true);
    setResult("");
    
    const formData = new FormData(event.currentTarget);
    formData.append("_captcha", "false"); // Disable formsubmit captcha to allow seamless AJAX

    try {
      const email = import.meta.env.VITE_CONTACT_EMAIL || 'midoumessai123456789@gmail.com';
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (response.ok || data.success) {
        setResult("Message Sent Successfully!");
        updateRateLimit();
        event.currentTarget.reset();
      } else {
        setResult("Error: " + (data.message || "Failed to send message."));
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-primary transition-colors mb-12 font-bold group">
          <ArrowLeft className="w-5 h-5 rtl:-scale-x-100 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform" />
          {t.contact.back}
        </Link>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="glass rounded-[40px] p-8 md:p-16 border border-black/10 dark:border-white/10"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4">
              {t.contact.title} <span className="text-gray-500 font-light italic">{t.contact.titleHighlight}</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              {t.contact.desc}
            </p>
            <div className="bg-brand-primary/10 border border-brand-primary/20 p-4 rounded-2xl text-sm text-brand-primary font-medium italic">
              {t.portfolio.plans.note}
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <input type="hidden" name="subject" value="New Project Inquiry from GDEVALOP" />
            <input type="hidden" name="from_name" value="GDEVALOP Contact Form" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">{t.contact.name}</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">{t.contact.email}</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">{t.contact.plan}</label>
              <select 
                name="plan"
                defaultValue={selectedPlan}
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors"
              >
                <option value="">{t.portfolio.plans.selectPlan}</option>
                <option value="tier1">{t.portfolio.plans.tier1.name} ($99)</option>
                <option value="tier2">{t.portfolio.plans.tier2.name} ($299)</option>
                <option value="tier3">{t.portfolio.plans.tier3.name} ($500)</option>
                <option value="tier4">{t.portfolio.plans.tier4.name} (Custom)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">{t.contact.message}</label>
              <textarea 
                name="message"
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors h-32 resize-none"
                placeholder="E-commerce website, Landing page..."
                required
              />
            </div>
            
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-primary text-white hover:bg-blue-600 px-8 py-5 rounded-2xl font-black text-xl transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
              {isSubmitting ? "Sending..." : t.contact.submit}
            </button>
            {result && (
              <div className={`text-center font-bold ${result.includes("Error") ? "text-red-500" : "text-green-500"}`}>
                {result}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
