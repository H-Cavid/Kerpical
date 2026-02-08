"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { ChevronUp, Instagram, Facebook, Mail, Phone, MessageCircle } from "lucide-react";
// Analitika funksiyalarını import edirik
import { trackWhatsAppClick } from "@/utils/analytics";

export default function Footer() {
  const { lang } = useLanguage();
  const WHATSAPP_NUMBER = "994776235836";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Zəngləri izləmək üçün daxili funksiya (əgər analytics.ts-də yoxdursa)
  const trackPhoneCall = () => {
    if (window.gtag) {
      window.gtag('event', 'phone_call_click', {
        event_category: 'Contact',
        event_label: 'Footer Phone'
      });
    }
  };

  const content = {
    az: {
      about: "Azərbaycanın ilk innovativ kərpic platforması. Zavodları müqayisə edirik, sizə ən uyğununu tapırıq.",
      links: "Keçidlər",
      products: "Məhsullar",
      calculator: "Kalkulyator",
      howItWorks: "Necə işləyir?",
      aboutUs: "Biz kimik",
      contact: "Əlaqə",
      rights: "Bütün hüquqlar qorunur.",
      waMessage: "Salam, kerpical.az. Footer-dən yazıram, kərpic satışı ilə bağlı sualım var."
    },
    en: {
      about: "Azerbaijan's first innovative brick platform. We compare factories and find the best fit for you.",
      links: "Quick Links",
      products: "Products",
      calculator: "Calculator",
      howItWorks: "How it works?",
      aboutUs: "About us",
      contact: "Contact",
      rights: "All rights reserved.",
      waMessage: "Hello, kerpical.az. I'm writing from the footer, I have a question about brick sales."
    },
    ru: {
      about: "Первая инновационная кирпичная платформа Азербайджана. Мы сравниваем заводы и находим лучший вариант.",
      links: "Ссылки",
      products: "Продукция",
      calculator: "Калькулятор",
      howItWorks: "Как это работает?",
      aboutUs: "О нас",
      contact: "Контакты",
      rights: "Все права защищены.",
      waMessage: "Здравствуйте, kerpical.az. Пишу из футера, у меня вопрос по продаже кирпича."
    }
  };

  const current = content[lang as keyof typeof content] || content.az;

  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Dekorativ işıq zolağı */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo və Haqqımızda */}
          <div className="space-y-6">
            <Link href={`/?lang=${lang}`} className="text-2xl font-black text-white">
              kerpical<span className="text-green-500">.az</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs italic">
              {current.about}
            </p>
          </div>

          {/* Sürətli Keçidlər */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{current.links}</h4>
            <ul className="space-y-4">
              {['products', 'calculator', 'how-it-works', 'about'].map((id) => (
                <li key={id}>
                  <Link 
                    href={`/?lang=${lang}#${id}`} 
                    className="text-slate-500 hover:text-green-400 transition-colors text-sm capitalize"
                  >
                    {id === 'how-it-works' ? current.howItWorks : 
                     id === 'products' ? current.products : 
                     id === 'calculator' ? current.calculator : current.aboutUs}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Əlaqə Məlumatları */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{current.contact}</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+994776235836" 
                  onClick={trackPhoneCall}
                  className="flex items-center gap-3 text-slate-400 text-sm font-medium hover:text-green-500 transition-colors"
                >
                  <Phone className="w-4 h-4 text-green-500" /> +994 (77) 623-58-36
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(current.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("Footer WhatsApp Link")}
                  className="flex items-center gap-3 text-slate-400 text-sm font-medium hover:text-green-500 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-500" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:kkerpic@mail.ru" className="flex items-center gap-3 text-slate-500 text-sm hover:text-green-500 transition-colors">
                  <Mail className="w-4 h-4 text-slate-600" /> kkerpic@mail.ru
                </a>
              </li>
            </ul>
          </div>

          {/* Sosyal Media və Yuxarı qalx */}
          <div className="flex flex-col items-start lg:items-end gap-6">
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/topdan_kerpic_satisi" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => { if(window.gtag) window.gtag('event', 'social_click', { platform: 'instagram' }); }}
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-500 hover:text-white transition-all duration-300 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/kerpical.az" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => { if(window.gtag) window.gtag('event', 'social_click', { platform: 'facebook' }); }}
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-slate-500 hover:text-white transition-all text-sm font-bold bg-white/5 px-4 py-2 rounded-xl border border-white/5"
            >
              {lang === "az" ? "Yuxarı" : lang === "en" ? "Top" : "Вверх"}
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform text-green-500" />
            </button>
          </div>
        </div>

        {/* Alt zolaq */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs">
          <p className="text-slate-600">
            © {new Date().getFullYear()} kerpical.az. {current.rights}
          </p>
          <div className="flex gap-6 text-slate-600 font-medium">
            <Link href="/privacy" className="hover:text-green-500 transition-colors uppercase tracking-widest">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-green-500 transition-colors uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}