"use client";

import { useState, useEffect } from "react";
import { Hash, MoveHorizontal, Layers, MessageCircle, ShieldCheck } from "lucide-react";

/**
 * Professional usta normativləri və texniki ölçülər
 * Rəqəmlər sahə təcrübəsinə əsaslanan dəqiq hesablamalardır.
 */
const BRICK_DATA = {
  "8": { name: "8.5 × 19 × 19 sm", perSquare: 27, multiMode: false },
  "10": { name: "10 × 19 × 19 sm", perSquare: 27, multiMode: false },
  "13": { name: "13.5 × 19 × 19 sm", perSquare: 27, multiMode: false },
  "29": { name: "29 × 19 × 19 sm", modes: { uzununa: 18, enine: 22 }, multiMode: true },
  "39": { name: "39 × 19 × 19 sm", modes: { uzununa: 14, enine: 18 }, multiMode: true },
};

export default function Calculator() {
  const [area, setArea] = useState<number>(0);
  const [type, setType] = useState<keyof typeof BRICK_DATA>("8");
  const [mode, setMode] = useState<"uzununa" | "enine">("uzununa");
  const [wallType, setWallType] = useState<"single" | "double">("single");
  const [result, setResult] = useState(0);

  // Hesablama məntiqi: Sahə * Normativ əmsalı
  useEffect(() => {
    const selected = BRICK_DATA[type];
    let count = area * (selected.multiMode ? selected.modes[mode] : selected.perSquare);
    if (wallType === "double") count *= 2;
    setResult(Math.ceil(count));
  }, [area, type, mode, wallType]);

  const whatsappMessage = `Salam, kerpical.az. Layihəm üçün ${area} m² sahəyə ${BRICK_DATA[type].name} kərpicindən (${wallType === "single" ? "tək qat" : "qoşa qat"}) cəmi ${result} ədəd hesabladım. Qiymət təklifi ala bilərəm?`;

  return (
    <section id="calculator" className="py-20 bg-slate-950 text-white font-sans overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] border border-white/5 p-8 md:p-12 shadow-2xl">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-3 tracking-tighter">
              PEŞƏKAR <span className="text-green-500">HESABLAMA</span>
            </h2>
            <div className="inline-flex items-center gap-2 bg-green-500/5 border border-green-500/10 px-4 py-2 rounded-full">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">
                Usta normativlərinə uyğun mühəndislik hesabı
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              {/* Sahə Girişi */}
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Layihə Sahəsi (m²)</label>
                <input
                  type="number"
                  placeholder="Məsələn: 100"
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full bg-slate-800/40 border border-white/10 rounded-2xl py-4 px-6 focus:border-green-500 outline-none transition-all font-bold text-lg placeholder:text-slate-600"
                />
              </div>

              {/* Texniki Ölçü Seçimi */}
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Kərpicin Texniki Ölçüsü</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as any)}
                  className="w-full bg-slate-800/40 border border-white/10 rounded-2xl py-4 px-6 font-bold outline-none cursor-pointer hover:border-white/20 transition-all appearance-none"
                >
                  {Object.entries(BRICK_DATA).map(([key, val]) => (
                    <option key={key} value={key} className="bg-slate-900">{val.name}</option>
                  ))}
                </select>
              </div>

              {/* Hörgü Metodu - Yalnız 29/39 ölçülərində aktiv olur */}
              {BRICK_DATA[type].multiMode && (
                <div className="pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block italic text-center md:text-left">Hörgü Metodu</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => setMode("uzununa")} 
                      className={`py-3 rounded-xl font-bold border transition-all ${mode === "uzununa" ? "bg-green-600 border-green-600 text-white shadow-lg shadow-green-600/20" : "bg-white/5 border-white/5 text-slate-400 hover:border-white/10"}`}
                    >
                      Uzununa
                    </button>
                    <button 
                      onClick={() => setMode("enine")} 
                      className={`py-3 rounded-xl font-bold border transition-all ${mode === "enine" ? "bg-green-600 border-green-600 text-white shadow-lg shadow-green-600/20" : "bg-white/5 border-white/5 text-slate-400 hover:border-white/10"}`}
                    >
                      Eninə
                    </button>
                  </div>
                </div>
              )}

              {/* Divar Qalınlığı (Qat) */}
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block text-center md:text-left">Divar Qalınlığı</label>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => setWallType("single")} 
                    className={`py-3 rounded-xl font-bold border transition-all ${wallType === "single" ? "bg-green-600 border-green-600 text-white shadow-lg shadow-green-600/20" : "bg-white/5 border-white/5 text-slate-400 hover:border-white/10"}`}
                  >
                    Tək Qat
                  </button>
                  <button 
                    onClick={() => setWallType("double")} 
                    className={`py-3 rounded-xl font-bold border transition-all ${wallType === "double" ? "bg-green-600 border-green-600 text-white shadow-lg shadow-green-600/20" : "bg-white/5 border-white/5 text-slate-400 hover:border-white/10"}`}
                  >
                    Qoşa Qat
                  </button>
                </div>
              </div>
            </div>

            {/* Nəticə Paneli - "ədəd" yazısı dizaynı yeniləndi */}
            <div className="bg-gradient-to-br from-green-500/10 via-transparent to-transparent border border-green-500/10 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Material Ehtiyacı</span>
              
              <div className="flex flex-col items-center mb-2">
                <span className="text-7xl md:text-8xl font-black italic tracking-tighter leading-none group-hover:scale-105 transition-transform duration-500">
                  {result}
                </span>
                <span className="text-green-500 text-sm font-bold uppercase tracking-[0.5em] mt-3 opacity-90">
                  ədəd
                </span>
              </div>
              
              <p className="mt-8 text-[9px] text-slate-600 uppercase font-medium leading-relaxed max-w-[220px]">
                * Professional hörgü normativləri və standart dərz boşluqları daxil edilərək hesablanmışdır.
              </p>
              
              <a
                href={`https://wa.me/994776235836?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-10 bg-green-600 hover:bg-green-500 py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-lg transition-all shadow-xl shadow-green-600/20 active:scale-95 border-b-4 border-green-800"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                SİFARİŞİ TAMAMLA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}