"use client";

import { useLanguage } from "./LanguageContext";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link"; // Link komponentini əlavə edirik

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
    en: [
      { id: 1, slug: "red-brick", name: "Red brick", img: "/brick-hero.jpg" },
      { id: 2, slug: "white-brick", name: "White brick", img: "/brick-hero_2.jpg" },
      { id: 3, slug: "hollow-brick", name: "Hollow brick", img: "/brick-hero_3.jpg" },
      { id: 4, slug: "decorative-brick", name: "Decorative brick", img: "/brick-hero.jpg" },
      { id: 5, slug: "fire-brick", name: "Fire brick", img: "/brick-hero_2.jpg" },
      { id: 6, slug: "cement-brick", name: "Cement brick", img: "/brick-hero_3.jpg" },
    ],
    ru: [
      { id: 1, slug: "krasniy-kirpich", name: "Красный кирпич", img: "/brick-hero.jpg" },
      { id: 2, slug: "beliy-kirpich", name: "Белый кирпич", img: "/brick-hero_2.jpg" },
      { id: 3, slug: "pustotetliy-kirpich", name: "Пустотелый кирпич", img: "/brick-hero_3.jpg" },
      { id: 4, slug: "dekorativniy-kirpich", name: "Декоративный кирпич", img: "/brick-hero.jpg" },
      { id: 5, slug: "ogneuporniy-kirpich", name: "Огнеупорный кирпич", img: "/brick-hero_2.jpg" },
      { id: 6, slug: "cementniy-kirpich", name: "Цементный кирпич", img: "/brick-hero_3.jpg" },
    ]
  };

  const currentProducts = products[lang as keyof typeof products] || products.az;

  return (
    <section id="products" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05)_0%,transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {lang === "az" ? "Məhsullarımız" : lang === "ru" ? "Наша продукция" : "Our Products"}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {lang === "az" 
              ? "Ehtiyacınıza uyğun kərpic növünü seçin, biz ən yaxşı zavod qiymətini təqdim edək."
              : lang === "ru"
              ? "Выберите подходящий тип кирпича, и мы предложим лучшую заводскую цену."
              : "Choose the brick type that fits your needs, and we'll provide the best factory price."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-6 hover:border-green-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-800/50 mb-6 flex items-center justify-center border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-4/5 h-4/5 object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                />
                
                {/* Ox işarəsi indi bir keçid (Link) funksiyası daşıyır */}
                <Link 
                  href={`/products/${product.slug}`}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-green-500 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 text-white z-20 cursor-pointer"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors px-2">
                  {product.name}
                </h3>
                
                <a 
                  href="https://wa.me/994776235836"
                  className="w-full bg-white/5 hover:bg-green-500 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all duration-300 border border-white/10 hover:border-green-500 hover:shadow-[0_10px_30px_rgba(34,197,94,0.3)]"
                >
                  <MessageCircle className="w-5 h-5" />
                  {lang === "az" ? "WhatsApp ilə soruş" : lang === "ru" ? "Спросить в WhatsApp" : "Ask on WhatsApp"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}