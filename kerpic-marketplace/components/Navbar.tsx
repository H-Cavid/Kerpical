"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Səhifə aşağı sürüşdürüldükdə navbarın görünüşünü dəyişirik
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ən yuxarı qalxma funksiyası (Logo üçün)
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const navLinks = {
    az: [
      { name: "Məhsullar", href: "#products" },
      { name: "Necə işləyir?", href: "#how-it-works" },
      { name: "Biz kimik", href: "#about" },
      { name: "Əlaqə", href: "#contact" },
    ],
    en: [
      { name: "Products", href: "#products" },
      { name: "How it works", href: "#how-it-works" },
      { name: "About us", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
    ru: [
      { name: "Продукция", href: "#products" },
      { name: "Как это работает", href: "#how-it-works" },
      { name: "О нас", href: "#about" },
      { name: "Контакты", href: "#contact" },
    ],
  };

  const currentLinks = navLinks[lang as keyof typeof navLinks] || navLinks.az;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? "py-4 bg-slate-950/80 backdrop-blur-lg border-b border-white/5" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo - Kliklənəndə səhifənin başına qalxır */}
        <a 
          href="/" 
          onClick={scrollToTop}
          className="text-2xl font-black text-white tracking-tighter cursor-pointer group"
        >
          kerpical<span className="text-green-500 group-hover:text-green-400 transition-colors">.az</span>
        </a>

        {/* Desktop Menyu */}
        <div className="hidden lg:flex items-center gap-8">
          {currentLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-green-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Sağ tərəf: Dil və WhatsApp */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center bg-white/5 rounded-xl p-1 border border-white/10">
            {["az", "ru", "en"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  lang === l 
                    ? "bg-green-500 text-white shadow-lg" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            href="https://wa.me/994776235836"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-[0_10px_20px_rgba(34,197,94,0.2)]"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobil Menyu Düyməsi */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobil Menyu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-6 space-y-6 shadow-2xl animate-in slide-in-from-top">
          <div className="flex flex-col gap-4">
            {currentLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-green-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-6 border-t border-white/5 flex items-center justify-between">
            <div className="flex gap-2">
              {["az", "ru", "en"].map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l as any); setIsMobileMenuOpen(false); }}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    lang === l ? "bg-green-500 text-white" : "bg-white/5 text-slate-400"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}