"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { ArrowRight } from "lucide-react";

/* ===== Slider content ===== */
const content = {
  az: [
    {
      title: <>Azərbaycanın <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Kərpic Bazarı</span></>,
      description: "Layihəniz üçün ən uyğun variantı tapmaq üçün etibarlı kərpic zavodları ilə birbaşa işləyirik. Sürətli çatdırılma.",
      tag: "Canlı Təkliflər",
      button: "WhatsApp-da qiymət al"
    },
    {
      title: <>Topdan və Pərakəndə <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Təchizat</span></>,
      description: "Boşluqlu, dolu və xüsusi kərpiclər. İstənilən həcmdə sifariş və peşəkar yanaşma.",
      tag: "Geniş Çeşid",
      button: "WhatsApp-da qiymət al"
    },
    {
      title: <>Bir Sorğu. <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Ən Yaxşı</span> Zavod Seçimi.</>,
      description: "Tələblərinizi bildirin, biz zavodları müqayisə edərək ən uyğun variantı təqdim edək.",
      tag: "Ağıllı Seçim",
      button: "WhatsApp-da qiymət al"
    },
  ],
  en: [
    {
      title: <>Azerbaijan’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Brick Marketplace</span></>,
      description: "We work directly with trusted brick factories to find the best option for your project. Fast delivery.",
      tag: "Live Offers",
      button: "Get price on WhatsApp"
    },
    {
      title: <>Wholesale & Retail <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Supply</span></>,
      description: "Hollow, solid, and custom bricks. Any quantity with professional support.",
      tag: "Wide Range",
      button: "Get price on WhatsApp"
    },
    {
      title: <>One Request. <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Best</span> Factory Option.</>,
      description: "Tell us your needs and we compare factories to find the best value for you.",
      tag: "Smart Choice",
      button: "Get price on WhatsApp"
    },
  ],
  ru: [
    {
      title: <>Кирпичный <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Маркетплейс</span> Азербайджана</>,
      description: "Мы работаем напрямую с надежными заводами, чтобы найти лучший вариант для вашего проекта. Быстрая доставка.",
      tag: "Живые предложения",
      button: "Узнать цену в WhatsApp"
    },
    {
      title: <>Оптовые и Розничные <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Поставки</span></>,
      description: "Пустотелый, полнотелый и специальный кирпич. Заказы любого объема и профессиональный подход.",
      tag: "Широкий ассортимент",
      button: "Узнать цену в WhatsApp"
    },
    {
      title: <>Один Запрос. <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Лучший</span> Выбор Завода.</>,
      description: "Сообщите нам ваши требования, и мы сравним заводы, чтобы предложить вам оптимальное решение.",
      tag: "Умный выбор",
      button: "Узнать цену в WhatsApp"
    },
  ]
} as const;

const images = [
  "/brick-hero.jpg",
  "/brick-hero_2.jpg",
  "/brick-hero_3.jpg",
];

type LangKey = keyof typeof content;

export default function Hero() {
  const { lang } = useLanguage();
  const safeLang: LangKey = content[lang as LangKey] ? (lang as LangKey) : "az";
  const slides = content[safeLang];
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      handleNextSlide();
    }, 6000);
    return () => clearInterval(id);
  }, [index, slides.length]);

  const handleNextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setIsFading(false);
    }, 500);
  };

  return (
    <section className="relative min-h-[85vh] lg:h-[90vh] flex items-center bg-slate-950 overflow-hidden pt-24 lg:pt-16">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Sol Tərəf: Mətn */}
          <div className={`transition-all duration-700 transform ${isFading ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-green-400 text-xs font-bold uppercase tracking-wider mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {slides[index].tag}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
              {slides[index].title}
            </h1>

            <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
              {slides[index].description}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <a
                href="https://wa.me/994776235836"
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-[0_20px_40px_rgba(34,197,94,0.3)] flex items-center gap-3 group active:scale-95"
              >
                {slides[index].button}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Slider Dots */}
              <div className="flex gap-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { 
                      if(i === index) return;
                      setIsFading(true); 
                      setTimeout(() => { setIndex(i); setIsFading(false); }, 300); 
                    }}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      i === index ? "w-10 bg-green-500" : "w-4 bg-white/10 hover:bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sağ Tərəf: Vizual Həll (Problemi aradan qaldıran hissə) */}
          <div className="relative flex justify-center items-center lg:justify-end">
            {/* Arxa fon parıltısı */}
            <div className={`absolute w-[80%] h-[80%] bg-green-500/20 rounded-full blur-[120px] transition-opacity duration-1000 ${isFading ? "opacity-0" : "opacity-100"}`}></div>
            
            {/* Şəkil Çərçivəsi: Şəklin kəsilmiş görünməməsi üçün p-8 (padding) əlavə edildi */}
            <div className={`relative z-10 w-full max-w-[540px] aspect-square rounded-[40px] bg-white p-8 lg:p-12 shadow-2xl transition-all duration-700 ${isFading ? "scale-90 opacity-0 rotate-2" : "scale-100 opacity-100 rotate-0"}`}>
              <img 
                src={images[index]} 
                alt="Bricks" 
                className="w-full h-full object-contain transition-transform duration-[2000ms]" 
              />
              
              {/* Şəkil üzərində texnoloji detal (opsional) */}
              <div className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-[10px] font-bold text-green-400 uppercase tracking-widest shadow-xl">
                Premium Quality
              </div>
            </div>

            {/* Arxa tərəfdəki dekorativ kvadrat */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/5 rounded-[60px] rotate-12 pointer-events-none"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}