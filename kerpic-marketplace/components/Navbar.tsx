"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.scrollY === 0) {
      window.location.reload();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };

  // Naviqasiya linklərini bura əlavə edirik
  const navLinks = {
    az: [
      { name: "Məhsullar", href: "#products" },
      { name: "Kalkulyator", href: "#calculator" },
      { name: "Necə işləyir?", href: "#how-it-works" },
      { name: "Biz kimik", href: "#about" },
      { name: "Əlaqə", href: "#contact" },
    ],
    en: [
      { name: "Products", href: "#products" },
      { name: "Calculator", href: "#calculator" },
      { name: "How it works", href: "#how-it-works" },
      { name: "About us", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
    ru: [
      { name: "Продукция", href: "#products" },
      { name: "Калькулятор", href: "#calculator" },
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
        
        <a 
          href="/" 
          onClick={handleLogoClick}
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
        </div>
      )}
    </nav>
  );
}