"use client";

import { useLanguage } from "./LanguageContext";
import { Scale, MessageCircle, Wallet, ShieldCheck } from "lucide-react";

export default function About() {
  const { lang } = useLanguage();

  const content = {
    az: {
      tag: "Rəqəmsal Körpü",
      title: "Biz kimik?",
      desc: "Biz kərpic istehsalçıları ilə alıcılar arasında innovativ bir körpüyük. Ənənəvi tikinti sektorunu müasir texnologiya ilə birləşdirərək sizin üçün ən optimal həlləri tapırıq. Sizi axtarış və müqayisədən azad edirik. Qiymət, keyfiyyət və çatdırılmanı sizin üçün biz kompleks şəkildə qiymətləndirərək, istənilən növ məhsulu birbaşa tikinti sahənizə sürətli və fasiləsiz çatdırırıq.",
      features: [
        { title: "Zavod Müqayisəsi", desc: "Bazarı sizin üçün izləyirik. Layihənizin tələbinə uyğun olan, keyfiyyətinə bələd olduğumuz ən etibarlı zavod təklifini təqdim edirik.", icon: <Scale /> },
        { title: "Sürətli Ünsiyyət", desc: "WhatsApp üzərindən birbaşa bizimlə əlaqə qurun. Sorğunuzu anında cavablandırır, vaxt itirmədən logistika prosesinə başlayırıq.", icon: <MessageCircle /> },
        { title: "Maksimum Qənaət", desc: "Artıq xərclərdən qaçın. Sizin üçün ən optimal qiymət-keyfiyyət balansını taparaq həm büdcənizi, həm də vaxtınızı qoruyuruq.", icon: <Wallet /> }
      ]
    },
    en: {
      tag: "Digital Bridge",
      title: "Who are we?",
      desc: "We are an innovative bridge between brick manufacturers and buyers. By merging the traditional construction sector with modern technology, we find the most optimal solutions for you. We free you from searching and comparing. We evaluate price, quality, and delivery comprehensively and ensure fast, uninterrupted delivery of any product directly to your construction site.",
      features: [
        { title: "Factory Comparison", desc: "We monitor the market for you. We provide the most reliable factory offers that match your project requirements and meet our quality standards.", icon: <Scale /> },
        { title: "Fast Communication", desc: "Contact us directly via WhatsApp. We answer your inquiries instantly and initiate the logistics process without wasting any time.", icon: <MessageCircle /> },
        { title: "Maximum Savings", desc: "Avoid unnecessary expenses. We find the perfect price-quality balance for you, protecting both your budget and your valuable time.", icon: <Wallet /> }
      ]
    },
    ru: {
      tag: "Цифровой Мост",
      title: "Кто мы?",
      desc: "Мы — инновационный мост между производителями кирпича и покупателями. Объединяя традиционный строительный сектор с современными технологиями, мы находим для вас самые оптимальные решения. Мы освобождаем вас от поиска и сравнения. Мы комплексно оцениваем цену, качество и доставку, обеспечивая быструю и бесперебойную поставку любого вида продукции прямо на вашу строительную площадку.",
      features: [
        { title: "Сравнение Заводов", desc: "Мы следим за рынком для вас. Мы предоставляем предложения от самых надежных заводов, качество которых нам известно и которые соответствуют требованиям вашего проекта.", icon: <Scale /> },
        { title: "Быстрая Связь", desc: "Свяжитесь с нами напрямую через WhatsApp. Мы мгновенно отвечаем на ваши запросы и запускаем процесс логистики без потери времени.", icon: <MessageCircle /> },
        { title: "Максимальная Экономия", desc: "Избегайте лишних затрат. Мы находим для вас оптимальный баланс цены и качества, защищая как ваш бюджет, так и ваше время.", icon: <Wallet /> }
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
                
                {/* Şəkil 1 */}
                <div className="relative rounded-2xl w-full h-40 overflow-hidden bg-white border border-white/5 shadow-inner group/img">
                  <img src="/images/bricks/19x19x29/29_angle.jpg" className="w-full h-full object-contain p-2 z-10 relative group-hover/img:scale-110 transition-transform duration-500" alt="Brick 1" />
                  <div className="absolute inset-0 z-20 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "url('/logo.png')", backgroundSize: '50px', backgroundRepeat: 'repeat' }}></div>
                  {/* Mini Etiket */}
                  <div className="absolute bottom-2 right-2 z-30 bg-slate-900/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/10 flex items-center gap-1.5 shadow-lg">
                    <img src="/logo.png" className="h-2.5 w-auto" alt="logo" />
                    <div className="w-[1px] h-2 bg-white/20"></div>
                    <span className="text-[7px] font-black text-green-500 uppercase tracking-widest">Original</span>
                  </div>
                </div>

                {/* Şəkil 2 */}
                <div className="relative rounded-2xl w-full h-40 overflow-hidden bg-white border border-white/5 mt-8 shadow-inner group/img">
                  <img src="/images/bricks/19x19x39/39_angle.jpg" className="w-full h-full object-contain p-2 z-10 relative group-hover/img:scale-110 transition-transform duration-500" alt="Brick 2" />
                  <div className="absolute inset-0 z-20 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "url('/logo.png')", backgroundSize: '50px', backgroundRepeat: 'repeat' }}></div>
                  <div className="absolute bottom-2 right-2 z-30 bg-slate-900/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/10 flex items-center gap-1.5 shadow-lg">
                    <img src="/logo.png" className="h-2.5 w-auto" alt="logo" />
                    <div className="w-[1px] h-2 bg-white/20"></div>
                    <span className="text-[7px] font-black text-green-500 uppercase tracking-widest">Original</span>
                  </div>
                </div>

                {/* Şəkil 3 */}
                <div className="relative rounded-2xl w-full h-40 overflow-hidden bg-white border border-white/5 -mt-8 shadow-inner group/img">
                  <img src="/images/bricks/shaxta/saxta_angle.jpg" className="w-full h-full object-contain p-2 z-10 relative group-hover/img:scale-110 transition-transform duration-500" alt="Brick 3" />
                  <div className="absolute inset-0 z-20 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "url('/logo.png')", backgroundSize: '50px', backgroundRepeat: 'repeat' }}></div>
                  <div className="absolute bottom-2 right-2 z-30 bg-slate-900/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/10 flex items-center gap-1.5 shadow-lg">
                    <img src="/logo.png" className="h-2.5 w-auto" alt="logo" />
                    <div className="w-[1px] h-2 bg-white/20"></div>
                    <span className="text-[7px] font-black text-green-500 uppercase tracking-widest">Original</span>
                  </div>
                </div>

                {/* Güvən Qutusu */}
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

            <div className="grid grid-cols-1 gap-6">
              {current.features.map((item, index) => (
                <div 
                  key={index}
                  className="group flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-green-500/30 hover:bg-white/[0.08] transition-all duration-500"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-xl">
                    <div className="w-8 h-8">
                      {item.icon}
                    </div>
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