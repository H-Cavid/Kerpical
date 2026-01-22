"use client";

import { useLanguage } from "./LanguageContext";
import { MessageCircle, Info } from "lucide-react";
import Link from "next/link";

export default function Products() {
  const { lang } = useLanguage();

  const products = {
    az: [
      { id: 1, slug: "qirmizi-kerpic-29x19x19", name: "Qırmızı kərpic: 29x19x19", img: "/brick-hero.jpg" },
      { id: 2, slug: "ag-kerpic-19x19x8", name: "Ağ kərpic: 19x19x8.5", img: "/brick-hero_2.jpg" },
      { id: 3, slug: "bosluqlu-kerpic-19x19x10", name: "Boşluqlu kərpic: 19x19x10.5", img: "/brick-hero_3.jpg" },
      { id: 4, slug: "dekorativ-kerpic-39x19x19", name: "Dekorativ kərpic: 39x19x19", img: "/brick-hero.jpg" },
      { id: 5, slug: "qirmizi-kerpic-25x12x6", name: "Qırmızı: 25x12x6.5", img: "/brick-hero_2.jpg" },
      { id: 6, slug: "odadavamli-kerpic-19x19x13", name: "Odadavamlı kərpic: 19x19x13.5", img: "/brick-hero_3.jpg" },
    ],
    // en və ru bölmələri eyni qalır...
    en: [ /* ... */ ],
    ru: [ /* ... */ ]
  };

  const currentProducts = products[lang as keyof typeof products] || products.az;

  const t = {
    details: lang === "az" ? "Ətraflı məlumat" : lang === "ru" ? "Подробнее" : "View Details",
    order: lang === "az" ? "WhatsApp ilə soruş" : lang === "ru" ? "Спросить в WhatsApp" : "Ask on WhatsApp"
  };

  return (
    <section id="products" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            {lang === "az" ? "Məhsullarımız" : lang === "ru" ? "Наша продукция" : "Our Products"}
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-5 hover:border-green-500/30 transition-all duration-500 flex flex-col shadow-2xl"
            >
              {/* ŞƏKİL: Kliklənə bilən və uzaqlıq hissi ilə */}
              <Link href={`/products/${product.slug}`} className="relative aspect-[4/3] mb-5 overflow-hidden rounded-2xl bg-slate-800/50 p-6 flex items-center justify-center cursor-pointer border border-white/5">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" 
                />
              </Link>

              <div className="flex flex-col flex-grow px-1">
                <h3 className="text-lg font-bold text-white mb-6 line-clamp-1 group-hover:text-green-400 transition-colors">
                  {product.name}
                </h3>
                
                {/* DÜYMƏLƏR: Alt-alta düzülüş */}
                <div className="mt-auto space-y-3">
                  <Link 
                    href={`/products/${product.slug}`}
                    className="w-full bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs font-bold border border-white/10 transition-all active:scale-95"
                  >
                    <Info className="w-4 h-4 text-green-500" />
                    {t.details}
                  </Link>

                  <a 
                    href="https://wa.me/994776235836"
                    className="w-full bg-green-600 hover:bg-green-500 text-white py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all active:scale-95 shadow-lg shadow-green-900/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t.order}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}