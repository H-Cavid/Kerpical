"use client";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { productsData } from "./productsData";
import { MessageCircle, Info } from "lucide-react";

export default function Products() {
  const { lang } = useLanguage();
  const WHATSAPP_NUMBER = "994776235836";

  // Sabit mətnlərin tərcüməsi
  const t = {
    title: { az: "Məhsullarımız", en: "Our Products", ru: "Наша Продукция" },
    moreInfo: { az: "Ətraflı məlumat", en: "More details", ru: "Подробнее" },
    askWA: { az: "WhatsApp ilə soruş", en: "Inquire via WhatsApp", ru: "Запросить в WhatsApp" },
    waMessage: { 
      az: " haqqında məlumat almaq istəyirəm.", 
      en: " I would like to get information about.", 
      ru: " я хотел бы получить информацию о." 
    }
  };

  // Mövcud dilə uyğun datanı götürürük, əgər yoxdursa AZ-a qayıdırıq
  const currentProducts = productsData[lang as keyof typeof productsData] || productsData.az;

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-black text-white text-center mb-12 uppercase italic">
          {t.title[lang as keyof typeof t.title]}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <div 
              key={product.slug} 
              className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-6 hover:border-green-500/50 transition-all group flex flex-col"
            >
              <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-white flex items-center justify-center group/card border border-white/5 shadow-inner">
                
                {/* 1. Əsas Məhsul Şəkli */}
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-4 z-10 relative transition-transform duration-500 group-hover/card:scale-105" 
                />

                {/* 2. Watermark (Pattern) */}
                <div 
                  className="absolute inset-0 z-20 pointer-events-none select-none opacity-[0.05] rotate-[-15deg] scale-125 transition-opacity"
                  style={{
                    backgroundImage: `url('/logo.png')`,
                    backgroundSize: '90px',
                    backgroundRepeat: 'repeat'
                  }}
                ></div>

                {/* 3. Brend Etiketi */}
                <div className="absolute bottom-3 right-3 z-30 pointer-events-none select-none">
                   <div className="bg-slate-900/90 backdrop-blur-md px-4 py-5 rounded-xl border border-white/10 flex items-center gap-2 shadow-xl transition-all duration-300 group-hover/card:scale-110 group-hover/card:-translate-y-1">
                      <img 
                        src="/logo.png" 
                        alt="logo" 
                        className="h-4 w-auto object-contain" 
                      />
                      <div className="w-[1px] h-3 bg-white/20"></div>
                      <span className="text-[8px] font-black text-green-500 uppercase tracking-[0.2em]">
                        Original
                      </span>
                   </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-2 flex-grow">{product.desc}</p>
              
              <div className="space-y-3">
                <Link 
                  href={`/products/${product.slug}`}
                  className="flex items-center justify-center gap-2 w-full bg-slate-800/40 hover:bg-slate-700/60 text-white py-3 rounded-xl font-semibold transition-all border border-white/5"
                >
                  <Info className="w-4 h-10 text-green-500" />
                  {t.moreInfo[lang as keyof typeof t.moreInfo]}
                </Link>

                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.name + t.waMessage[lang as keyof typeof t.waMessage])}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-xl font-bold transition-all shadow-lg shadow-green-900/20 border-b-4 border-green-700 hover:border-green-600"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t.askWA[lang as keyof typeof t.askWA]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}