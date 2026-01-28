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

  // Logo klikləndə səhifəni yuxarı çəkir və ya yeniləyir
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.scrollY === 0) {
      window.location.reload();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Naviqasiya linkləri
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

  // Səlis keçid funksiyası
  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Mobil menyunu bağla
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? "py-4 bg-slate-950/90 backdrop-blur-lg border-b border-white/5 shadow-2xl" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <a 
          href="/" 
          onClick={handleLogoClick}
          className="text-2xl font-black text-white tracking-tighter cursor-pointer group"
        >
          kerpical<span className="text-green-500 group-hover:text-green-400 transition-colors">.az</span>
        </a>

        {/* Desktop Menyu - Səlis keçid əlavə olundu */}
        <div className="hidden lg:flex items-center gap-8">
          {currentLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-semibold text-slate-400 hover:text-green-400 transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Sağ tərəf: Dil və WhatsApp */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center bg-white/5 rounded-xl p-1 border border-white/10 backdrop-blur-md">
            {["az", "ru", "en"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l as any)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all uppercase tracking-tighter ${
                  lang === l 
                    ? "bg-green-600 text-white shadow-lg shadow-green-600/20" 
                    : "text-slate-500 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="https://wa.me/994776235836"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 text-white px-6 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-2 shadow-xl shadow-green-600/10 active:scale-95 border-b-2 border-green-800"
          >
            <MessageCircle className="w-4 h-4" />
            WHATSAPP
          </a>
        </div>

        {/* Mobil Menyu Düyməsi */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-colors border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobil Menyu Paneli */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-white/10 p-8 space-y-8 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6">
            {currentLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-2xl font-black text-slate-200 hover:text-green-500 transition-colors italic tracking-tighter"
              >
                {link.name.toUpperCase()}
              </a>
            ))}
          </div>
          
          <div className="pt-6 border-t border-white/5 flex flex-col gap-6">
            <div className="flex gap-4">
              {["az", "ru", "en"].map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l as any); setIsMobileMenuOpen(false); }}
                  className={`flex-1 py-3 rounded-xl font-bold uppercase ${lang === l ? "bg-green-600 text-white" : "bg-white/5 text-slate-500"}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <a
              href="https://wa.me/994776235836"
              className="w-full bg-green-600 text-white py-4 rounded-xl font-black text-center shadow-lg"
            >
              WHATSAPP İLƏ ƏLAQƏ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}