"use client";

import { useLanguage } from "./LanguageContext";
import { Scale, MessageCircle, PiggyBank, ArrowRight } from "lucide-react";

export default function About() {
  const { lang } = useLanguage();

  const content = {
    az: {
      tag: "Haqqımızda",
      title: "Biz kimik?",
      desc: "Biz kərpic istehsalçıları ilə alıcılar arasında rəqəmsal bir körpüyük. Ənənəvi tikinti sektorunu müasir texnologiya ilə birləşdirərək sizin üçün ən optimal həlləri tapırıq.",
      features: [
        { 
          text: "Zavod Müqayisəsi", 
          sub: "Bir neçə zavodun təklifini real vaxtda analiz edirik.", 
          icon: <Scale /> 
        },
        { 
          text: "Sürətli Ünsiyyət", 
          sub: "WhatsApp üzərindən anlıq və aydın dialoq qururuq.", 
          icon: <MessageCircle /> 
        },
        { 
          text: "Maksimum Qənaət", 
          sub: "Həm büdcənizi, həm də ən qiymətli olan vaxtınızı qoruyuruq.", 
          icon: <PiggyBank /> 
        }
      ]
    },
    // en və ru hissələri də eyni strukturda əlavə edilə bilər...
  };

  const current = content[lang as keyof typeof content] || content.az;

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Dekorativ Element - Sağ tərəfdə yumşaq yaşıl parıltı */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-green-50 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Sol tərəf: Mətn və Başlıq */}
          <div className="lg:w-1/2 text-left">
            <span className="inline-block py-1 px-4 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-4 uppercase tracking-widest">
              {current.tag}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1]">
              {current.title}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {current.desc}
            </p>
            <button className="group flex items-center gap-2 text-green-600 font-bold hover:gap-4 transition-all duration-300">
              {lang === "az" ? "Daha çox məlumat" : "Learn more"} <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Sağ tərəf: İnnovativ Kartlar */}
          <div className="lg:w-1/2 grid grid-cols-1 gap-4">
            {current.features.map((item, index) => (
              <div 
                key={index}
                className="group flex items-start gap-6 p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(34,197,94,0.12)] hover:border-green-200 transition-all duration-500"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {item.text}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}