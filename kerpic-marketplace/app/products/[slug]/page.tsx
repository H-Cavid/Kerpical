"use client";

import { use } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MessageCircle, ArrowLeft, CheckCircle2, Zap, Layers, ChevronDown } from "lucide-react";
import { productsData } from "@/components/productsData"; 

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  const product = productsData.az.find((p) => p.slug === slug);
  
  const [activeImg, setActiveImg] = useState("");

  useEffect(() => {
    if (product && product.gallery && product.gallery.length > 0) {
      setActiveImg(product.gallery[0]);
    } else if (product) {
      setActiveImg(product.img);
    }
  }, [product]);

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
          Geri qayıt
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
          
          <div className="flex flex-col gap-4">
            {/* Şəkil Qutusu - Yenilənmiş Böyük Loqo və Etiket */}
            <div className="relative aspect-square bg-white rounded-[2rem] flex items-center justify-center overflow-hidden shadow-2xl max-h-[400px] md:max-h-[450px] group/main border-4 border-slate-900/50">
                
                {/* Məhsul Şəkli */}
                <img 
                  src={activeImg || product.img} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-8 transition-all duration-700 group-hover/main:scale-105 z-10 relative" 
                />
                
                {/* 1. Watermark Pattern */}
                <div 
                   className="absolute inset-0 z-20 pointer-events-none select-none opacity-[0.05] rotate-[-15deg] scale-125"
                   style={{
                     backgroundImage: `url('/logo.png')`,
                     backgroundSize: '100px',
                     backgroundRepeat: 'repeat'
                   }}
                ></div>

                {/* 2. Yenilənmiş Böyük və Müasir Etiket */}
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-30 pointer-events-none select-none">
                  <div className="bg-slate-900/90 backdrop-blur-2xl px-5 py-3 rounded-2xl border border-white/20 flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover/main:scale-110 group-hover/main:-translate-y-2">
                      <img 
                        src="/logo.png" 
                        alt="kerpical.az" 
                        className="h-7 md:h-8 w-auto object-contain" // Loqo ölçüsü böyüdüldü
                      />
                      <div className="w-[1px] h-6 bg-white/20"></div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black tracking-[0.3em] text-green-500 uppercase leading-none mb-1">Original</span>
                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">Product</span>
                      </div>
                  </div>
                </div>
            </div>

            {/* Qalereya */}
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
                  <div 
                    className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage: `url('/logo.png')`,
                      backgroundSize: '20px',
                      backgroundRepeat: 'repeat'
                    }}
                  ></div>
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
                  { label: "Uzunluq", val: product.dims.l },
                  { label: "En", val: product.dims.w },
                  { label: "Hündürlük", val: product.dims.h },
                  { label: "Model", val: product.dims.model }
                ].map((item, i) => (
                  <div key={i} className="text-center p-2 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase font-bold">{item.label}</p>
                    <p className="text-green-500 text-xs font-black">{item.val}</p>
                  </div>
                ))}
            </div>

            <div className="space-y-4">
              <a 
                href={`https://wa.me/994776235836?text=${encodeURIComponent(product.name + " sifariş etmək istəyirəm.")}`}
                className="w-full bg-green-600 hover:bg-green-500 text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-lg transition-all shadow-xl hover:shadow-green-500/20 active:scale-95 border-b-4 border-green-700 hover:border-green-600"
              >
                <MessageCircle className="w-6 h-6" /> 
                WhatsApp ilə sifariş et
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-500 animate-bounce pt-4 text-sm font-bold">
              <span>Ətraflı məlumat üçün aşağı</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
        
        {/* Alt hissə (Özəlliklər və Sahələr) eyni qalır */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/5">
          <div className="space-y-6">
            <h3 className="text-xl font-black flex items-center gap-3 text-white uppercase tracking-wider italic">
              <Zap className="text-green-500 w-5 h-5 fill-green-500" /> Niyə bu ölçü?
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
              <Layers className="text-green-500 w-5 h-5" /> İstifadə Sahələri
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