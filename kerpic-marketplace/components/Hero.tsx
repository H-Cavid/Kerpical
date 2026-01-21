"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

/* ===== Slider content ===== */
const content = {
  az: [
    {
      title: "Azərbaycanın Kərpic Bazarı",
      description:
        "Layihəniz üçün ən uyğun variantı tapmaq üçün etibarlı kərpic zavodları ilə birbaşa işləyirik. Topdan və pərakəndə satış. Sürətli çatdırılma.",
    },
    {
      title: "Topdan və Pərakəndə Kərpic Təchizatı",
      description:
        "Boşluqlu, dolu və xüsusi kərpiclər. İstənilən həcmdə sifariş.",
    },
    {
      title: "Bir Sorğu. Ən Yaxşı Zavod Seçimi.",
      description:
        "Tələblərinizi bildirin, biz zavodları müqayisə edərək ən uyğun variantı təqdim edək.",
    },
  ],
  en: [
    {
      title: "Azerbaijan’s Brick Marketplace",
      description:
        "We work directly with trusted brick factories to find the best option for your project. Wholesale and retail. Fast delivery.",
    },
    {
      title: "Wholesale & Retail Brick Supply",
      description:
        "Hollow, solid, and custom bricks. Any quantity.",
    },
    {
      title: "One Request. Best Factory Option.",
      description:
        "Tell us your needs and we compare factories to find the best value.",
    },
  ],
  ru: [
    {
      title: "Маркетплейс кирпича в Азербайджане",
      description:
        "Мы напрямую работаем с надежными кирпичными заводами.",
    },
    {
      title: "Оптовые и розничные поставки кирпича",
      description:
        "Пустотелый, полнотелый и специальный кирпич.",
    },
    {
      title: "Один запрос. Лучший вариант от завода.",
      description:
        "Мы сравниваем заводы и подбираем оптимальное решение.",
    },
  ],
} as const;

const images = [
  "/brick-hero.jpg",
  "/brick-hero_2.jpg",
  "/brick-hero_3.jpg",
];

type LangKey = keyof typeof content;

export default function Hero() {
  const { lang } = useLanguage();

  // 🔒 HARD fallback (this is the key fix)
  const safeLang: LangKey = content[lang as LangKey]
    ? (lang as LangKey)
    : "az";

  const slides = content[safeLang];
  const [index, setIndex] = useState(0);

  // Reset index if language changes
  useEffect(() => {
    setIndex(0);
  }, [safeLang]);

  // Auto-slide
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {slides[index].title}
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            {slides[index].description}
          </p>

          <a
            href="https://wa.me/994XXXXXXXXX"
            target="_blank"
            className="rounded-md bg-green-600 px-6 py-3 text-white hover:bg-green-700 hover:scale-[1.02] transition-transform"

          >
            {safeLang === "az"
              ? "WhatsApp-da qiymət al"
              : safeLang === "ru"
              ? "Узнать цену в WhatsApp"
              : "Get price on WhatsApp"}
          </a>

          {/* Dots */}
          <div className="mt-6 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-gray-900" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-[320px] relative rounded-lg overflow-hidden shadow-lg">

          <img
            src={images[index]}
            alt="Construction bricks"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
