"use client";

import { useLanguage } from "./LanguageContext";
import { MessageSquare, Search, CheckCircle, ArrowRight } from "lucide-react";
// Analitika funksiyasını import edirik
import { trackWhatsAppClick } from "@/utils/analytics";

export default function HowItWorks() {
  const { lang } = useLanguage();
  const WHATSAPP_NUMBER = "994776235836";

  const t = {
    title: { az: "Necə işləyir?", en: "How it works?", ru: "Как это работает?" },
    subtitle: { 
      az: "Prosesi maksimum sadə saxlayırıq ki, siz vaxt itirməyəsiniz.", 
      en: "We keep the process as possible so you don't waste time.", 
      ru: "Мы делаем процесс максимально простым, чтобы вы не теряли время." 
    },
    stepCta: { az: "Həmin an başla", en: "Start now", ru: "Начать сейчас" },
    finalCta: { az: "SİFARİŞƏ BAŞLA", en: "START ORDER", ru: "НАЧАТЬ ЗАКАЗ" },
    finalMsg: {
      az: "Salam, kerpical.az. Saytdakı 'Necə işləyir' bölməsini oxudum və sifariş prosesinə başlamaq istəyirəm.",
      en: "Hello, kerpical.az. I read the 'How it works' section and I'd like to start the order process.",
      ru: "Здравствуйте, kerpical.az. Я прочитал раздел 'Как это работает' и хочу начать процесс заказа."
    }
  };

  const steps = {
    az: [
      {
        title: "Ehtiyacınızı bildirin",
        desc: "Kərpic növünü, ölçünü və ünvanı WhatsApp-da bir neçə saniyəyə yazın.",
        icon: <MessageSquare className="w-8 h-8" />,
        waMsg: "Salam, kerpical.az. Yeni layihəm üçün kərpic təklifi almaq istəyirəm."
      },
      {
        title: "Biz müqayisə edirik",
        desc: "Etibarlı zavodları qiymət və keyfiyyətə görə analiz edib ən optimalını seçirik.",
        icon: <Search className="w-8 h-8" />,
      },
      {
        title: "Ən yaxşı qiyməti alın",
        desc: "Sizin üçün seçilmiş ən sərfəli təklif birbaşa WhatsApp nömrənizə göndərilir.",
        icon: <CheckCircle className="w-8 h-8" />,
      },
    ],
    en: [
      {
        title: "State your needs",
        desc: "Send the brick type, size, and address via WhatsApp in seconds.",
        icon: <MessageSquare className="w-8 h-8" />,
        waMsg: "Hello, kerpical.az. I would like to get a brick offer for my new project."
      },
      {
        title: "We compare options",
        desc: "We analyze reliable factories by price and quality to find the best match.",
        icon: <Search className="w-8 h-8" />,
      },
      {
        title: "Get the best price",
        desc: "The most cost-effective offer is sent directly to your WhatsApp.",
        icon: <CheckCircle className="w-8 h-8" />,
      },
    ],
    ru: [
      {
        title: "Укажите ваши требования",
        desc: "Напишите тип кирпича, размер и адрес в WhatsApp за считанные секунды.",
        icon: <MessageSquare className="w-8 h-8" />,
        waMsg: "Здравствуйте, kerpical.az. Я хотел бы получить предложение по кирпичу для моего проекта."
      },
      {
        title: "Мы сравниваем",
        desc: "Мы анализируем заводы по цене и качеству, выбирая для вас лучший вариант.",
        icon: <Search className="w-8 h-8" />,
      },
      {
        title: "Получите лучшую цену",
        desc: "Лучшее предложение отправляется прямо на ваш WhatsApp.",
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
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          {t.title[lang as keyof typeof t.title]}
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">
          {t.subtitle[lang as keyof typeof t.subtitle]}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-stretch mb-16">
          {currentSteps.map((step, index) => (
            <div key={index} className="group relative flex h-full">
              <div className="absolute -top-4 -left-4 text-7xl font-black text-white/[0.03] select-none z-0">
                0{index + 1}
              </div>

              <div 
                onClick={() => {
                  if (index === 0) {
                    trackWhatsAppClick("How It Works - Step 1");
                    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent((step as any).waMsg)}`, '_blank');
                  }
                }}
                className={`relative flex flex-1 flex-col bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 group-hover:bg-slate-900/80 ${index === 0 ? 'cursor-pointer hover:border-green-500/50' : ''}`}
              >
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

                {index === 0 && (
                   <div className="mt-4 flex items-center justify-center gap-2 text-green-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                     {t.stepCta[lang as keyof typeof t.stepCta]} <ArrowRight className="w-3 h-3" />
                   </div>
                )}
              </div>

              {index !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
                   <div className="w-8 h-[2px] bg-gradient-to-r from-green-500/50 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA - WhatsApp yönləndirməli Sifariş Düyməsi */}
        <div className="flex justify-center">
            <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.finalMsg[lang as keyof typeof t.finalMsg])}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("How It Works - Final Order Button")}
                className="group relative flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-12 py-5 rounded-2xl font-black uppercase text-base transition-all active:scale-95 shadow-xl shadow-green-900/30 overflow-hidden"
            >
                {/* İkon və Mətn */}
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>{t.finalCta[lang as keyof typeof t.finalCta]}</span>
                
                {/* Hover zamanı sağa hərəkət edən ox */}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </div>
    </section>
  );
}