"use client";

import { useLanguage } from "./LanguageContext";
import { Scale, MessageCircle, Wallet, ShieldCheck, ArrowRight } from "lucide-react";
// Analitika funksiyasını import edirik
import { trackWhatsAppClick } from "@/utils/analytics";

export default function About() {
  const { lang } = useLanguage();
  const WHATSAPP_NUMBER = "994776235836";

  // Feature-lara kliklədikdə analitikaya göndərən funksiya
  const trackFeatureClick = (featureTitle: string) => {
    if (window.gtag) {
      window.gtag('event', 'about_feature_click', {
        feature_name: featureTitle
      });
    }
  };

  const content = {
    az: {
      tag: "Rəqəmsal Körpü",
      title: "Biz kimik?",
      desc: "Biz kərpic istehsalçıları ilə alıcılar arasında innovativ bir körpüyük. Ənənəvi tikinti sektorunu müasir texnologiya ilə birləşdirərək sizin üçün ən optimal həlləri tapırıq. Sizi axtarış və müqayisədən azad edirik.",
      cta: "Məhsulları araşdır",
      waBtn: "Sualın var?",
      waMsg: "Salam, kerpical.az. 'Haqqımızda' bölməsini oxudum, xidmətlərinizlə bağlı sualım var.",
      features: [
        { title: "Zavod Müqayisəsi", desc: "Bazarı sizin üçün izləyirik. Layihənizin tələbinə uyğun olan ən etibarlı zavod təklifini təqdim edirik.", icon: <Scale /> },
        { title: "Sürətli Ünsiyyət", desc: "WhatsApp üzərindən birbaşa bizimlə əlaqə qurun. Sorğunuzu anında cavablandırırıq.", icon: <MessageCircle /> },
        { title: "Maksimum Qənaət", desc: "Artıq xərclərdən qaçın. Sizin üçün ən optimal qiymət-keyfiyyət balansını tapırıq.", icon: <Wallet /> }
      ]
    },
    en: {
      tag: "Digital Bridge",
      title: "Who are we?",
      desc: "We are an innovative bridge between brick manufacturers and buyers. We find the most optimal solutions for you by merging traditional construction with modern technology.",
      cta: "Explore Products",
      waBtn: "Any questions?",
      waMsg: "Hello, kerpical.az. I read the 'About' section and I have some questions regarding your services.",
      features: [
        { title: "Factory Comparison", desc: "We monitor the market for you and provide the most reliable factory offers.", icon: <Scale /> },
        { title: "Fast Communication", desc: "Contact us directly via WhatsApp. We answer your inquiries instantly.", icon: <MessageCircle /> },
        { title: "Maximum Savings", desc: "Avoid unnecessary expenses. We find the perfect price-quality balance.", icon: <Wallet /> }
      ]
    },
    ru: {
      tag: "Цифровой Мост",
      title: "Кто мы?",
      desc: "Мы — инновационный мост между производителями кирпича и покупателями. Мы находим для вас самые оптимальные решения.",
      cta: "Посмотреть товары",
      waBtn: "Есть вопросы?",
      waMsg: "Здравствуйте, kerpical.az. Я прочитал раздел 'О нас', у меня есть вопросы по поводу ваших услуг.",
      features: [
        { title: "Сравнение Заводов", desc: "Мы следим за рынком для вас и предоставляем предложения от самых надежных заводов.", icon: <Scale /> },
        { title: "Быстрая Связь", desc: "Свяжитесь с нами напрямую через WhatsApp. Мы мгновенно отвечаем на запросы.", icon: <MessageCircle /> },
        { title: "Максимальная Экономия", desc: "Избегайте лишних затрат. Мы находим оптимальный баланс цены и качества.", icon: <Wallet /> }
      ]
    }
  };

  const current = content[lang as keyof typeof content] || content.az;

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Sol Tərəf: Vizual Element */}
          <div className="lg:w-5/12 relative group">
            <div className="absolute inset-0 bg-green-500/20 blur-[80px] rounded-full group-hover:bg-green-500/30 transition-all duration-700"></div>
            <div className="relative z-10 border border-white/10 bg-slate-900/50 backdrop-blur-xl p-8 rounded-[3rem] shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3].map((num) => (
                    <div key={num} className={`relative rounded-2xl w-full h-40 overflow-hidden bg-white border border-white/5 shadow-inner group/img ${num === 2 ? 'mt-8' : num === 3 ? '-mt-8' : ''}`}>
                        <img 
                            src={num === 1 ? "/images/bricks/19x19x29/29_angle.jpg" : num === 2 ? "/images/bricks/19x19x39/39_angle.jpg" : "/images/bricks/shaxta/saxta_angle.jpg"} 
                            className="w-full h-full object-contain p-2 z-10 relative group-hover/img:scale-110 transition-transform duration-500" 
                            alt={`Brick ${num}`} 
                        />
                        <div className="absolute inset-0 z-20 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "url('/logo.png')", backgroundSize: '50px', backgroundRepeat: 'repeat' }}></div>
                    </div>
                ))}

                <div className="bg-green-600 rounded-2xl w-full h-40 flex flex-col items-center justify-center text-white text-center p-4 shadow-lg shadow-green-900/20 border-b-4 border-green-700">
                  <ShieldCheck className="w-10 h-10 mb-2" />
                  <span className="text-sm font-black leading-tight uppercase tracking-tighter">
                    {lang === "az" ? "100% Güvənli Təchizat" : lang === "ru" ? "100% Надежная Поставка" : "100% Secure Supply"}
                  </span>
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

            <div className="grid grid-cols-1 gap-6 mb-12">
              {current.features.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => trackFeatureClick(item.title)}
                  className="group flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-green-500/30 hover:bg-white/[0.08] transition-all duration-500 cursor-pointer"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-xl">
                    <div className="w-8 h-8">{item.icon}</div>
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

            {/* Fəaliyyət Düymələri */}
            <div className="flex flex-wrap gap-4">
                <a 
                    href="#products" 
                    className="flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-2xl font-black uppercase text-sm hover:bg-green-500 hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5"
                >
                    {current.cta} <ArrowRight className="w-4 h-4" />
                </a>
                
                <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(current.waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("About Section - Sualın var?")}
                    className="flex items-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-2xl font-black uppercase text-sm hover:bg-white/10 transition-all active:scale-95"
                >
                    <MessageCircle className="w-4 h-4 text-green-500" />
                    {current.waBtn}
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}