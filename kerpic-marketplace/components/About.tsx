"use client";

import { useLanguage } from "./LanguageContext";
import { Scale, MessageCircle, Wallet  , ArrowRight, ShieldCheck } from "lucide-react";

export default function About() {
  const { lang } = useLanguage();

  const content = {
    az: {
      tag: "Rəqəmsal Körpü",
      title: "Biz kimik?",
      desc: "Biz kərpic istehsalçıları ilə alıcılar arasında innovativ bir körpüyük. Ənənəvi tikinti sektorunu müasir texnologiya ilə birləşdirərək sizin üçün ən optimal həlləri tapırıq.",
      features: [
        { title: "Zavod Müqayisəsi", desc: "Süni intellekt dəstəkli sistemimizlə zavod təkliflərini anlıq analiz edirik.", icon: <Scale /> },
        { title: "Sürətli Ünsiyyət", desc: "WhatsApp üzərindən 7/24 kəsintisiz və aydın dialoq imkanı.", icon: <MessageCircle /> },
        { title: "Maksimum Qənaət", desc: "Həm büdcənizi, həm də ən qiymətli olan vaxtınızı səmərəli qoruyuruq.", icon: <Wallet   /> }
      ]
    },
    en: {
      tag: "Digital Bridge",
      title: "Who are we?",
      desc: "We are an innovative bridge between brick manufacturers and buyers. We combine the traditional construction sector with modern technology.",
      features: [
        { title: "Factory Comparison", desc: "We analyze factory offers instantly with our AI-backed system.", icon: <Scale /> },
        { title: "Fast Communication", desc: "24/7 seamless and clear dialogue via WhatsApp.", icon: <MessageCircle /> },
        { title: "Maximum Savings", desc: "We efficiently protect both your budget and your most valuable time.", icon: <Wallet   /> }
      ]
    },
    ru: {
      tag: "Цифровой мост",
      title: "Кто мы?",
      desc: "Мы — инновационный мост между производителями кирпича и покупателями. Мы объединяем традиционный строительный сектор с современными технологиями.",
      features: [
        { title: "Сравнение заводов", desc: "Мгновенно анализируем предложения заводов с помощью нашей системы.", icon: <Scale /> },
        { title: "Быстрая связь", desc: "Круглосуточный бесперебойный диалог через WhatsApp.", icon: <MessageCircle /> },
        { title: "Максимальная экономия", desc: "Мы эффективно защищаем ваш бюджет и ваше драгоценное время.", icon: <Wallet   /> }
      ]
    }
  };

  const current = content[lang as keyof typeof content] || content.az;

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Sol Tərəf: Vizual Element */}
          <div className="lg:w-5/12 relative group">
            <div className="absolute inset-0 bg-green-500/20 blur-[80px] rounded-full group-hover:bg-green-500/30 transition-all duration-700"></div>
            <div className="relative z-10 border border-white/10 bg-slate-900/50 backdrop-blur-xl p-8 rounded-[3rem] shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <img src="/brick-hero.jpg" className="rounded-2xl w-full h-40 object-cover border border-white/5" alt="Brick 1" />
                <img src="/brick-hero_2.jpg" className="rounded-2xl w-full h-40 object-cover border border-white/5 mt-8" alt="Brick 2" />
                <img src="/brick-hero_3.jpg" className="rounded-2xl w-full h-40 object-cover border border-white/5 -mt-8" alt="Brick 3" />
                <div className="bg-green-500 rounded-2xl w-full h-40 flex flex-col items-center justify-center text-white text-center p-4">
                  <ShieldCheck className="w-10 h-10 mb-2" />
                  <span className="text-sm font-bold leading-tight">100% Güvənli Təchizat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Tərəf: Mətn və Özəlliklər */}
          <div className="lg:w-7/12">
            <span className="inline-block py-1 px-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold mb-6 uppercase tracking-[0.2em]">
              {current.tag}
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              {current.title}
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl">
              {current.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {current.features.map((item, index) => (
                <div 
                  key={index}
                  className="group flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-green-500/30 hover:bg-white/[0.08] transition-all duration-500"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}