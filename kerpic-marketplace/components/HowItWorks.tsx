"use client";

import { useLanguage } from "./LanguageContext";
import { MessageSquare, Search, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const { lang } = useLanguage();

  const steps = {
    az: [
      {
        title: "Ehtiyacınızı bildirin",
        desc: "Kərpic növünü və həcmi WhatsApp-da cəmi bir neçə saniyəyə yazın.",
        icon: <MessageSquare className="w-8 h-8" />,
      },
      {
        title: "Biz müqayisə edirik",
        desc: "Süni intellekt və geniş şəbəkəmizlə ən yaxşı təklifləri süzgəcdən keçiririk.",
        icon: <Search className="w-8 h-8" />,
      },
      {
        title: "Ən yaxşı qiyməti alın",
        desc: "Sizin üçün seçilmiş ən uyğun təklif birbaşa cibinizə gəlir.",
        icon: <CheckCircle className="w-8 h-8" />,
      },
    ],
    // Digər dilləri bura əlavə edə bilərsiniz...
  };

  const currentSteps = steps[lang as keyof typeof steps] || steps.az;

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Texnoloji Arxa Plan Detalı */}
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:40px_40px]"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          {lang === "az" ? "Necə işləyir?" : "How it works?"}
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">
          Prosesi maksimum sadə saxlayırıq ki, siz vaxt itirməyəsiniz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {currentSteps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Addım nömrəsi fonu */}
              <div className="absolute -top-4 -left-4 text-8xl font-black text-white/[0.03] select-none">
                0{index + 1}
              </div>

              <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(34,197,94,0.3)] group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  {step.desc}
                </p>
              </div>

              {/* Kartlar arası ox işarəsi (yalnız desktopda) */}
              {index !== 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
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