"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { MessageCircle, ArrowLeft, CheckCircle2, Zap, Layers, ChevronDown } from "lucide-react";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug;

  const images = [
    "/brick-hero_6.jpg",
    "/brick-hero_6.1.jpg",
    "/brick-hero_6.2.jpg",
    "/brick-hero_6.3.jpg"
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const productName = typeof slug === 'string' 
    ? slug.replace(/-/g, ' ').toUpperCase() 
    : "PREMİUM QIRMIZI KƏRPİC";

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20 pb-20 px-4 md:px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        
        <Link href="/#products" className="inline-flex items-center gap-2 text-slate-400 hover:text-green-500 mb-6 transition-all group text-sm">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Geri qayıt
        </Link>

        {/* ÜST HİSSƏ: Şəkil və Əsas Məlumat (Daha yığcam) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
          
          <div className="flex flex-col gap-4">
            <div className="aspect-square bg-slate-900/60 rounded-[2rem] flex items-center justify-center border border-white/5 overflow-hidden shadow-2xl max-h-[400px] md:max-h-[450px]">
               <img 
                 src={activeImg} 
                 alt={productName} 
                 className="w-full h-full object-contain p-4 transition-all duration-700 hover:scale-105" 
               />
            </div>

            <div className="flex justify-center gap-3">
              {images.map((img, index) => (
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
                {productName}
              </h1>
              <div className="w-16 h-1.5 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
            </div>
            
            <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
              Bu model həm xarici fasad, həm də daxili arakəsmə divarlar üçün nəzərdə tutulmuş müasir tikinti materialıdır.
            </p>
            <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Uzunluq", val: "29 sm" },
                  { label: "En", val: "19 sm" },
                  { label: "Hündürlük", val: "19 sm" },
                  { label: "Model", val: "29x19" }
                ].map((item, i) => (
                  <div key={i} className="text-center p-2 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase font-bold">{item.label}</p>
                    <p className="text-green-500 text-xs font-black">{item.val}</p>
                  </div>
                ))}
              </div>

            {/* WhatsApp Sifariş Düyməsi (Altına məlumat gələcək) */}
            <div className="space-y-4">
              <a 
                href="https://wa.me/994776235836"
                className="w-full bg-green-600 hover:bg-green-500 text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-lg transition-all shadow-xl hover:shadow-green-500/20 active:scale-95 border-b-4 border-green-700 hover:border-green-600"
              >
                <MessageCircle className="w-6 h-6" /> 
                WhatsApp ilə sifariş et
              </a>
              <p className="text-center text-slate-500 text-[10px] italic bg-white/5 py-3 rounded-lg">
              * Çatdırılma və ödəniş şərtləri üçün bizimlə əlaqə saxlayın.
            </p>

              {/* Texniki Ölçülər - İndi birbaşa düymənin altında daha yığcam görünür */}

            </div>

            {/* AŞAĞI SCROLL İPUCU: İstifadəçiyə aşağıda məlumat olduğunu bildirir */}
            <div className="flex items-center justify-center gap-2 text-slate-500 animate-bounce pt-4 text-sm font-bold">
              <span>Ətraflı məlumat üçün aşağı</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* ALT HİSSƏ: Ətraflı Üstünlüklər */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/5">
          
          <div className="space-y-6">
            <h3 className="text-xl font-black flex items-center gap-3 text-white uppercase tracking-wider">
              <Zap className="text-green-500 w-5 h-5 shadow-green-500" /> Niyə bu ölçü?
            </h3>
            <div className="grid gap-3">
              {[
                { t: "Sürətli Tikinti", d: "Böyük ölçülər sayəsində divarlar daha qısa müddətdə hörülür." },
                { t: "30% Məhlul Qənaəti", d: "Daha az birləşmə nöqtəsi sement-qum qarışığına qənaət edir." },
                { t: "Hava Boşluqları", d: "Xüsusi daxili struktur rütubətin qarşısını alır." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/30 p-4 rounded-xl border border-white/5 flex gap-4 transition-hover hover:border-green-500/30">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{item.t}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-black flex items-center gap-3 text-white uppercase tracking-wider">
              <Layers className="text-green-500 w-5 h-5" /> İstifadə Sahələri
            </h3>
            <div className="bg-green-600/5 border border-green-500/10 p-6 rounded-3xl space-y-4">
              {[
                "Fərdi yaşayış evlərinin xarici divarları",
                "Çoxmərtəbəli binalarda daxili arakəsmələr",
                "Həyət divarlarının dekorativ hörülməsi"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 text-xs font-bold border border-green-500/20">
                    {i + 1}
                  </div>
                  <p className="text-slate-300 text-sm font-semibold">{text}</p>
                </div>
              ))}
            </div>
            
            <p className="text-center text-slate-500 text-[10px] italic bg-white/5 py-3 rounded-lg">
              * Çatdırılma və ödəniş şərtləri üçün bizimlə əlaqə saxlayın.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}