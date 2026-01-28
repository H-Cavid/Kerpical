"use client";

import { useLanguage } from "./LanguageContext";
import { MessageSquare, Search, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const { lang } = useLanguage();

  const steps = {
    az: [
      {
        title: "Ehtiyacınızı bildirin",
        desc: "Kərpic növünü, ölçünü, həcmi və ünvanı WhatsApp-da bir neçə saniyəyə yazın və ya birbaşa zəng edərək bizə bildirin.",
        icon: <MessageSquare className="w-8 h-8" />,
      },
      {
        title: "Biz müqayisə edirik",
        desc: "Etibarlı zavodları qiymət, keyfiyyət və çatdırılma müddətinə görə analiz edib sizin üçün ən optimalını seçirik.",
        icon: <Search className="w-8 h-8" />,
      },
      {
        title: "Ən yaxşı qiyməti alın",
        desc: "Sizin tələblərinizə uyğun seçilmiş ən sərfəli təklif birbaşa WhatsApp nömrənizə göndərilir.",
        icon: <CheckCircle className="w-8 h-8" />,
      },
    ],
    en: [
      {
        title: "State your needs",
        desc: "Send us the brick type, dimensions, and volume via WhatsApp or give us a direct call in seconds.",
        icon: <MessageSquare className="w-8 h-8" />,
      },
      {
        title: "We compare options",
        desc: "We analyze reliable factories based on price, quality, and delivery time to find the best match for you.",
        icon: <Search className="w-8 h-8" />,
      },
      {
        title: "Get the best price",
        desc: "The most cost-effective offer tailored to your requirements is sent directly to your WhatsApp.",
        icon: <CheckCircle className="w-8 h-8" />,
      },
    ],
    ru: [
      {
        title: "Укажите ваши требования",
        desc: "Напишите тип кирпича, размер и объем в WhatsApp или просто позвоните нам напрямую за считанные секунды.",
        icon: <MessageSquare className="w-8 h-8" />,
      },
      {
        title: "Мы сравниваем",
        desc: "Мы анализируют надежные заводы по цене, качеству и срокам доставки, выбирая для вас лучший вариант.",
        icon: <Search className="w-8 h-8" />,
      },
      {
        title: "Получите лучшую цену",
        desc: "Самое выгодное предложение, подобранное под ваши нужды, отправляется прямо на ваш WhatsApp.",
        icon: <CheckCircle className="w-8 h-8" />,
      },
    ],
  };

  const currentSteps = steps[lang as keyof typeof steps] || steps.az;

  return (
    <section id="how-it-works" className="relative py-24 bg-slate-950 overflow-hidden scroll-mt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:40px_40px]"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Font stilini əvvəlki vəziyyətinə (font-extrabold, normal case) qaytardım */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          {lang === "az" ? "Necə işləyir?" : lang === "ru" ? "Как это работает?" : "How it works?"}
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">
          {lang === "az" 
            ? "Prosesi maksimum sadə saxlayırıq ki, siz vaxt itirməyəsiniz." 
            : lang === "ru" 
            ? "Мы делаем процесс максимально простым, чтобы вы не теряли время." 
            : "We keep the process as simple as possible so you don't waste time."}
        </p>

        {/* Grid: items-stretch bütün boxları eyni hündürlükdə saxlayır */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-stretch">
          {currentSteps.map((step, index) => (
            <div key={index} className="group relative flex h-full">
              <div className="absolute -top-4 -left-4 text-7xl font-black text-white/[0.03] select-none z-0">
                0{index + 1}
              </div>

              {/* flex-1 h-full üçün vacibdir */}
              <div className="relative flex flex-1 flex-col bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 group-hover:bg-slate-900/80">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(34,197,94,0.3)] group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base flex-grow">
                  {step.desc}
                </p>
              </div>

              {/* Bağlayıcı xətt */}
              {index !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
                   <div className="w-8 h-[2px] bg-gradient-to-r from-green-500/50 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}