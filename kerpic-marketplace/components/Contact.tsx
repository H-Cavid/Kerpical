"use client";

import { useLanguage } from "./LanguageContext";
import { MessageCircle, Clock, MapPin, Send, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  const { lang } = useLanguage();

  const content = {
    az: {
      title: "Tikintinizi Bizimlə Tamamlayın.",
      subtitle: "Vaxt itirmədən ən doğru kərpic seçimini edin. Sifariş və pulsuz qiymət təklifi üçün birbaşa mütəxəssisimizlə əlaqə saxlayın.",
      button: "WhatsApp-da yazın",
      hours: "İş saatları: 09:00 – 18:00",
      days: "Bazar ertəsi – Şənbə",
      location: "Ölkədaxili Çatdırılma",
      deliveryDesc: "Bakı, Abşeron və bütün rayonlara operativ çatdırılma."
    },
    en: {
      title: "Complete Your Construction With Us.",
      subtitle: "Make the right brick choice without wasting time. Contact our specialist directly for orders and a free price quote.",
      button: "Write on WhatsApp",
      hours: "Working hours: 09:00 – 18:00",
      days: "Monday – Saturday",
      location: "Nationwide Delivery",
      deliveryDesc: "Operative supply to Baku, Absheron, and all regions."
    },
    ru: {
      title: "Завершите строительство с нами.",
      subtitle: "Сделайте правильный выбор кирпича, не теряя времени. Свяжитесь с нашим специалистом для заказа и бесплатного ценового предложения.",
      button: "Написать в WhatsApp",
      hours: "Рабочие часы: 09:00 – 18:00",
      days: "Понедельник – Суббота",
      location: "Доставка по всей стране",
      deliveryDesc: "Оперативная поставка в Баку, Абшерон и во все регионы."
    }
  };

  const current = content[lang as keyof typeof content] || content.az;

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Arxa plan effektləri */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row">
            
            {/* Sol tərəf: Mətn və CTA */}
            <div className="md:w-3/5 p-8 md:p-16 border-b md:border-b-0 md:border-r border-white/10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                {current.title}
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                {current.subtitle}
              </p>
              
              <a 
                href="https://wa.me/994776235836"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-[0_20px_40px_rgba(34,197,94,0.2)] group"
              >
                <MessageCircle className="w-6 h-6" />
                {current.button}
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Sağ tərəf: Detallar */}
            <div className="md:w-2/5 p-8 md:p-16 bg-white/[0.02] flex flex-col justify-center gap-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">{current.hours}</p>
                  <p className="text-slate-500 text-sm">{current.days}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">{current.location}</p>
                  <p className="text-slate-500 text-sm">{current.deliveryDesc}</p>
                </div>
              </div>

              {/* Yenilənmiş Sosial Media Hissəsi */}
              <div className="mt-4 pt-8 border-t border-white/5">
                <p className="text-slate-600 text-xs uppercase tracking-[0.2em] mb-4 font-bold">Social</p>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/topdan_kerpic_satisi/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 group"
                  >
                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a 
                    href="https://facebook.com/kerpical.az" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                  >
                    <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}