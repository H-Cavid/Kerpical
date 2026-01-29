"use client";

import { use, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { MessageCircle, ArrowLeft, CheckCircle2, Zap, Layers, ChevronDown } from "lucide-react";
import { productsData } from "@/components/productsData"; 
import { useLanguage } from "@/components/LanguageContext"; 

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  const searchParams = useSearchParams();
  const { lang: contextLang } = useLanguage(); 
  const urlLang = searchParams.get("lang");
  const currentLang = (urlLang || contextLang || "az") as "az" | "en" | "ru";

  const product = productsData[currentLang]?.find((p) => p.slug === slug);
  const [activeImg, setActiveImg] = useState("");

  useEffect(() => {
    if (product) {
      if (product.gallery && product.gallery.length > 0) {
        setActiveImg(product.gallery[0]);
      } else {
        setActiveImg(product.img);
      }
    }
  }, [product, currentLang]);

  // Səlis sürüşmə (Smooth Scroll) funksiyası
  const scrollToDetails = () => {
    const element = document.getElementById('details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const t = {
    az: { back: "Geri qayıt", order: "WhatsApp ilə sifariş et", more: "Ətraflı məlumat üçün aşağı", why: "Niyə bu ölçü?", usage: "İstifadə Sahələri", dims: { l: "Uzunluq", w: "En", h: "Hündürlük", m: "Model" }, wp: "sifariş etmək istəyirəm." },
    en: { back: "Back", order: "Order via WhatsApp", more: "Scroll down for more", why: "Why this size?", usage: "Usage Areas", dims: { l: "Length", w: "Width", h: "Height", m: "Model" }, wp: "I want to order." },
    ru: { back: "Назад", order: "Заказать через WhatsApp", more: "Подробнее ниже", why: "Почему этот размер?", usage: "Области применения", dims: { l: "Длина", w: "Ширина", h: "Высота", m: "Модель" }, wp: "я хочу заказать." }
  }[currentLang];

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-4">
        <h2 className="text-2xl font-bold mb-4">Məhsul tapılmadı</h2>
        <Link href="/#products" className="text-green-500 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Məhsullara qayıt
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20 pb-20 px-4 md:px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        
        <Link href="/#products" className="inline-flex items-center gap-2 text-slate-400 hover:text-green-500 mb-6 transition-all group text-sm font-bold uppercase italic">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          {t.back}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
          
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square bg-white rounded-[2rem] flex items-center justify-center overflow-hidden shadow-2xl max-h-[400px] md:max-h-[450px] group/main border-4 border-slate-900/50">
                <img 
                  src={activeImg || product.img} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-8 transition-all duration-700 group-hover/main:scale-105 z-10 relative" 
                />
                <div 
                   className="absolute inset-0 z-20 pointer-events-none select-none opacity-[0.09] rotate-[-15deg] scale-125"
                   style={{
                     backgroundImage: `url('/logo.png')`,
                     backgroundSize: '100px',
                     backgroundRepeat: 'repeat'
                   }}
                ></div>
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-30 pointer-events-none select-none">
                  <div className="bg-slate-900/90 backdrop-blur-2xl px-5 py-3 rounded-2xl border border-white/20 flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover/main:scale-110 group-hover/main:-translate-y-2">
                      <img src="/logo.png" alt="logo" className="h-7 md:h-8 w-auto object-contain" />
                      <div className="w-[1px] h-6 bg-white/20"></div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black tracking-[0.3em] text-green-500 uppercase leading-none mb-1">Original</span>
                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">Product</span>
                      </div>
                  </div>
                </div>
            </div>

            <div className="flex justify-center gap-3 flex-wrap">
              {(product.gallery && product.gallery.length > 0 ? product.gallery : [product.img]).map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImg(img)}
                  className={`w-16 h-16 rounded-xl border-2 transition-all overflow-hidden bg-white p-1 relative ${
                    activeImg === img ? "border-green-500 scale-105 shadow-lg" : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-contain rounded-lg z-10 relative" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tighter leading-tight uppercase italic">
                {product.name}
              </h1>
              <div className="w-16 h-1.5 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
            </div>
            
            <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
              {product.desc}
            </p>

            <div className="grid grid-cols-4 gap-2">
                {[
                  { label: t.dims.l, val: product.dims.l },
                  { label: t.dims.w, val: product.dims.w },
                  { label: t.dims.h, val: product.dims.h },
                  { label: t.dims.m, val: product.dims.model }
                ].map((item, i) => (
                  <div key={i} className="text-center p-2 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase font-bold">{item.label}</p>
                    <p className="text-green-500 text-xs font-black">{item.val}</p>
                  </div>
                ))}
            </div>

            <div className="space-y-4">
              <a 
                href={`https://wa.me/994776235836?text=${encodeURIComponent(product.name + " " + t.wp)}`}
                className="w-full bg-green-600 hover:bg-green-500 text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-lg transition-all shadow-xl hover:shadow-green-500/20 active:scale-95 border-b-4 border-green-700 hover:border-green-600"
              >
                <MessageCircle className="w-6 h-6" /> 
                {t.order}
              </a>
            </div>

            {/* UPDATE: İndi kliklənə bilən düymədir */}
            <button 
              onClick={scrollToDetails}
              className="w-full flex items-center justify-center gap-2 text-slate-500 hover:text-white transition-colors pt-4 text-sm font-bold group"
            >
              <span>{t.more}</span>
              <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-green-500" />
            </button>
          </div>
        </div>
        
        {/* UPDATE: Hədəf nöqtə (ID bura əlavə olundu) */}
        <div id="details" className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/5 scroll-mt-24">
          <div className="space-y-6">
            <h3 className="text-xl font-black flex items-center gap-3 text-white uppercase tracking-wider italic">
              <Zap className="text-green-500 w-5 h-5 fill-green-500" /> {t.why}
            </h3>
            <div className="grid gap-3">
              {product.features?.map((item, i) => (
                <div key={i} className="bg-slate-900/30 p-4 rounded-xl border border-white/5 flex gap-4 transition-all hover:border-green-500/30">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1 italic">{item.t}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-black flex items-center gap-3 text-white uppercase tracking-wider italic">
              <Layers className="text-green-500 w-5 h-5" /> {t.usage}
            </h3>
            <div className="bg-green-600/5 border border-green-500/10 p-6 rounded-3xl space-y-4">
              {product.areas?.map((text, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 text-xs font-bold border border-green-500/20">
                    {i + 1}
                  </div>
                  <p className="text-slate-300 text-sm font-semibold italic">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}