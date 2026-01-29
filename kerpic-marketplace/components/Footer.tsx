"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { ChevronUp, Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  const { lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              {current.about}
            </p>
          </div>

          {/* Sürətli Keçidlər */}
          <div>
            <h4 className="text-white font-bold mb-6">{current.links}</h4>
            <ul className="space-y-4">
              <li>
                <Link href={`/?lang=${lang}#products`} className="text-slate-500 hover:text-green-400 transition-colors text-sm">
                  {current.products}
                </Link>
              </li>
              <li>
                {/* Kalkulyator Linki Əlavə Olundu */}
                <Link href={`/?lang=${lang}#calculator`} className="text-slate-500 hover:text-green-400 transition-colors text-sm">
                  {current.calculator}
                </Link>
              </li>
              <li>
                <Link href={`/?lang=${lang}#how-it-works`} className="text-slate-500 hover:text-green-400 transition-colors text-sm">
                  {current.howItWorks}
                </Link>
              </li>
              <li>
                <Link href={`/?lang=${lang}#about`} className="text-slate-500 hover:text-green-400 transition-colors text-sm">
                  {current.aboutUs}
                </Link>
              </li>
            </ul>
          </div>

          {/* Əlaqə Məlumatları */}
          <div>
            <h4 className="text-white font-bold mb-6">{current.contact}</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+994776235836" className="flex items-center gap-3 text-slate-500 text-sm italic hover:text-green-500 transition-colors">
                  <Phone className="w-4 h-4 text-green-500" /> +994 (77) 623-58-36
                </a>
              </li>
              <li>
                <a href="mailto:kkerpic@mail.ru" className="flex items-center gap-3 text-slate-500 text-sm italic hover:text-green-500 transition-colors">
                  <Mail className="w-4 h-4 text-green-500" /> kkerpic@mail.ru
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
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/kerpical.az" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-slate-500 hover:text-white transition-all text-sm font-bold"
            >
              {lang === "az" ? "Yuxarı" : lang === "en" ? "Top" : "Вверх"}
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-green-500 transition-all">
                <ChevronUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* Alt zolaq */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} kerpical.az. {current.rights}
          </p>
          <div className="flex gap-6 text-slate-600 text-xs italic">
            <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}