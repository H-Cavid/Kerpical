"use client";

import Image from "next/image";
import { products } from "@/data/products";
import { useLanguage } from "@/components/LanguageContext";

export default function Products() {
  const { lang } = useLanguage();

  return (
    <section id="products" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {lang === "az" && "Məhsullarımız"}
          {lang === "en" && "Our Products"}
          {lang === "ru" && "Наши продукты"}
        </h2>

        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          {lang === "az" && "Ehtiyacınıza uyğun kərpic tapır və ən yaxşı qiyməti təqdim edirik."}
          {lang === "en" && "We find the right bricks for your needs and offer the best price."}
          {lang === "ru" && "Мы подбираем подходящий кирпич и предлагаем лучшую цену."}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const message = encodeURIComponent(
              `Hello, I’m interested in ${product.name[lang]}. Can you give me the best price?`
            );

            return (
              <div
                key={product.id}
                className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <Image
                  src={product.image}
                  alt={product.name[lang]}
                  width={500}
                  height={350}
                  className="object-cover w-full h-48"
                />

                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-xl font-semibold">
                    {product.name[lang]}
                  </h3>

                  <a
                    href={`https://wa.me/4915754662272?text=${message}`}
                    target="_blank"
                    className="mt-auto inline-flex items-center justify-center rounded-lg bg-green-500 hover:bg-green-600 text-black font-medium py-3 transition"
                  >
                    {lang === "az" && "WhatsApp ilə soruş"}
                    {lang === "en" && "Ask on WhatsApp"}
                    {lang === "ru" && "Спросить в WhatsApp"}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
