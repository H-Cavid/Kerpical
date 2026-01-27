"use client";

import { use } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MessageCircle, ArrowLeft, CheckCircle2, Zap, Layers, ChevronDown } from "lucide-react";
// Sənin hazırladığın əsas data faylı
import { productsData } from "@/components/productsData"; 

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  // Datadan həmin slug-a uyğun məhsulu tapırıq
  const product = productsData.az.find((p) => p.slug === slug);
  
  const [activeImg, setActiveImg] = useState("");

  // Məhsul dəyişəndə və ya ilk dəfə açılanda əsas şəkli təyin et
  useEffect(() => {
    if (product) setActiveImg(product.img);
  }, [product]);

  // Əgər məhsul tapılmasa (məsələn slug səhv yazılsa)
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
        
        {/* GERİ QAYIT */}
        <Link href="/#products" className="inline-flex items-center gap-2 text-slate-400 hover:text-green-500 mb-6 transition-all group text-sm font-bold uppercase italic">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Geri qayıt
        </Link>

        {/* ÜST HİSSƏ: ŞƏKİL VƏ ƏSAS MƏLUMATLAR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
          
          <div className="flex flex-col gap-4">
            {/* Əsas Şəkil Qutusu */}
            <div className="aspect-square bg-slate-900/60 rounded-[2rem] flex items-center justify-center border border-white/5 overflow-hidden shadow-2xl max-h-[400px] md:max-h-[450px]">
               <img 
                 src={activeImg || product.img} 
                 alt={product.name} 
                 className="w-full h-full object-contain p-4 transition-all duration-700 hover:scale-105" 
               />
            </div>

            {/* Qalereya Düymələri */}
            <div className="flex justify-center gap-3 flex-wrap">
              {(product.gallery || [product.img]).map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImg(img)}
                  className={`w-16 h-16 rounded-xl border-2 transition-all overflow-hidden bg-slate-800/40 p-1 ${
                    activeImg === img ? "border-green-500 scale-105 shadow-lg" : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-contain rounded-lg" />
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

            {/* Ölçü Kartları (Dinamik) */}
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

        {/* ALT HİSSƏ: ÖZƏLLİKLƏR VƏ SAHƏLƏR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/5">
          
          {/* Niyə bu ölçü? (Dinamik Features) */}
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

          {/* İstifadə Sahələri (Dinamik Areas) */}
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