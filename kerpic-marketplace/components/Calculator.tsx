"use client";

import { useState, useEffect } from "react";
import { Hash, MoveHorizontal, Layers, MessageCircle, ShieldCheck } from "lucide-react";

/**
 * Sənin istədiyin formatda ölçülər və atanın usta rəqəmləri
 */
const BRICK_DATA = {
  "8": { name: "8-lik (19x19x8.5)", perSquare: 27, multiMode: false },
  "10": { name: "10-luq (10x19x19)", perSquare: 27, multiMode: false },
  "13": { name: "13-lük (19x19x13.5)", perSquare: 27, multiMode: false },
  "29": { name: "29-luq (19x19x29)", modes: { uzununa: 18, enine: 22 }, multiMode: true },
  "39": { name: "39-luq (19x19x39)", modes: { uzununa: 14, enine: 18 }, multiMode: true },
};

export default function Calculator() {
  const [area, setArea] = useState<number>(0);
  const [type, setType] = useState<keyof typeof BRICK_DATA>("8");
  const [mode, setMode] = useState<"uzununa" | "enine">("uzununa");
  const [wallType, setWallType] = useState<"single" | "double">("single");
  const [result, setResult] = useState(0);

  useEffect(() => {
    const selected = BRICK_DATA[type];
    // Normativlər: 27, 18/22, 14/18
    let count = area * (selected.multiMode ? selected.modes[mode] : selected.perSquare);
    if (wallType === "double") count *= 2;
    setResult(Math.ceil(count));
  }, [area, type, mode, wallType]);

  const whatsappMessage = `Salam, kerpical.az. ${area} m² sahə üçün ${BRICK_DATA[type].name} kərpicindən (${wallType === "single" ? "tək qat" : "qoşa qat"}) ${result} ədəd üçün qiymət təklifi istəyirəm.`;

  return (
    <section id="calculator" className="py-20 bg-slate-950 text-white font-sans overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] border border-white/5 p-8 md:p-12 shadow-2xl">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-3 tracking-tighter">
              KƏRPİC <span className="text-green-500">KALKULYATORU</span>
            </h2>
            <p className="text-slate-400 text-sm mb-6">Layihəniz üçün lazım olan kərpic sayını saniyələr içində hesablayın.</p>
            <div className="inline-flex items-center gap-2 bg-green-500/5 border border-green-500/10 px-4 py-2 rounded-full">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">
                AĞILLI HESABLAMA
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              {/* Sahə Girişi */}
              <div>
                <label className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="text-green-500 text-lg">#</span> DİVAR SAHƏSİ (M²)
                </label>
                <input
                  type="number"
                  placeholder="Məsələn: 100"
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full bg-slate-800/40 border border-white/10 rounded-2xl py-4 px-6 focus:border-green-500 outline-none transition-all font-bold text-lg"
                />
              </div>

              {/* Kərpic Növü və Ölçüsü */}
              <div>
                <label className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                   <Layers className="w-4 h-4 text-green-500" /> KƏRPİC NÖVÜ
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as any)}
                  className="w-full bg-slate-800/40 border border-white/10 rounded-2xl py-4 px-6 font-bold outline-none cursor-pointer appearance-none text-white shadow-inner"
                >
                  {Object.entries(BRICK_DATA).map(([key, val]) => (
                    <option key={key} value={key} className="bg-slate-900">{val.name}</option>
                  ))}
                </select>
              </div>

              {/* Hörgü Metodu - Dinamik (image_98cc5b.png stilində) */}
              {BRICK_DATA[type].multiMode && (
                <div className="pt-2 animate-in fade-in duration-300">
                  <label className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <MoveHorizontal className="w-4 h-4 text-green-500" /> HÖRGÜ ÜSULU
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => setMode("uzununa")} 
                      className={`py-4 rounded-xl font-bold border transition-all ${mode === "uzununa" ? "bg-green-600 border-green-600 shadow-lg shadow-green-600/20" : "bg-white/5 border-white/5 text-slate-500"}`}
                    >
                      Uzununa
                    </button>
                    <button 
                      onClick={() => setMode("enine")} 
                      className={`py-4 rounded-xl font-bold border transition-all ${mode === "enine" ? "bg-green-600 border-green-600 shadow-lg shadow-green-600/20" : "bg-white/5 border-white/5 text-slate-500"}`}
                    >
                      Eninə
                    </button>
                  </div>
                </div>
              )}

              {/* Divar Qalınlığı */}
              <div>
                <label className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                   <MoveHorizontal className="w-4 h-4 text-green-500" /> DİVAR QALINLIĞI
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => setWallType("single")} 
                    className={`py-4 rounded-xl font-bold border transition-all ${wallType === "single" ? "bg-green-600 border-green-600 shadow-lg shadow-green-600/20" : "bg-white/5 border-white/5 text-slate-500"}`}
                  >
                    Tək Qat
                  </button>
                  <button 
                    onClick={() => setWallType("double")} 
                    className={`py-4 rounded-xl font-bold border transition-all ${wallType === "double" ? "bg-green-600 border-green-600 shadow-lg shadow-green-600/20" : "bg-white/5 border-white/5 text-slate-500"}`}
                  >
                    Qoşa Qat
                  </button>
                </div>
              </div>
            </div>

            {/* Nəticə Paneli (image_99405c.png stilində) */}
            <div className="bg-slate-900/60 border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center">
              <span className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">TƏXMİNİ EHTİYAC</span>
              
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-8xl font-black italic tracking-tighter text-white">
                  {result}
                </span>
                <span className="text-green-500 text-2xl font-black italic">
                  ədəd
                </span>
              </div>
              
              <p className="mt-6 text-[10px] text-slate-500 uppercase leading-relaxed max-w-[240px]">
                * Hesablama standart dərz boşluqları nəzərə alınaraq aparılıb.
              </p>
              
              <a
                href={`https://wa.me/994776235836?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                className="w-full mt-10 bg-green-600 hover:bg-green-500 py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-lg transition-all shadow-xl shadow-green-600/20"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                Sifariş Ver
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}