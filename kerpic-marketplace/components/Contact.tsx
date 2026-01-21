"use client";

import { useLanguage } from "./LanguageContext";

export default function Contact() {
  const { lang } = useLanguage();

  return (
    <section
      id="contact"
      className="bg-black text-white py-28 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {lang === "az" && "Bizimlə əlaqə saxlayın"}
          {lang === "en" && "Contact us"}
          {lang === "ru" && "Свяжитесь с нами"}
        </h2>

        <p className="text-lg text-gray-300 mb-12">
          {lang === "az" &&
            "Kərpic sifarişi və qiymət üçün bizə WhatsApp-da yazın. Tez cavab veririk."}
          {lang === "en" &&
            "For brick orders and pricing, write to us on WhatsApp. We respond quickly."}
          {lang === "ru" &&
            "По вопросам заказа и цены напишите нам в WhatsApp. Отвечаем быстро."}
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/994776235836"
          target="_blank"
          className="inline-flex items-center justify-center rounded-xl bg-green-600 px-10 py-5 text-lg font-semibold text-white hover:bg-green-700 transition"
        >
          {lang === "az" && "WhatsApp-da yazın"}
          {lang === "en" && "Write on WhatsApp"}
          {lang === "ru" && "Написать в WhatsApp"}
        </a>

        {/* Extra trust text */}
        <p className="mt-8 text-sm text-gray-400">
          {lang === "az" && "İş saatları: 09:00 – 18:00 · Bazar ertəsi – Şənbə"}
          {lang === "en" && "Working hours: 09:00 – 18:00 · Monday – Saturday"}
          {lang === "ru" && "Часы работы: 09:00 – 18:00 · Пн – Сб"}
        </p>

      </div>
    </section>
  );
}
