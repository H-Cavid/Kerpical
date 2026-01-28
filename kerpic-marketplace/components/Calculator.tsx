"use client";

import { useState, useEffect } from "react";
import { MessageCircle, RotateCcw, ChevronDown, Hash, Layers, Ruler, GanttChartSquare } from "lucide-react";

interface BrickType {
  name: string;
  sizeLabel: string; // Mesaj üçün təmiz ölçü etiketi
  perSquare?: number;
  modes?: { uzununa: number; enine: number };
  multiMode: boolean;
}

const BRICK_DATA: Record<string, BrickType> = {
  "8": { name: "8-lik Standart", sizeLabel: "19 × 19 × 8.5 sm", perSquare: 27, multiMode: false },
  "10": { name: "10-luq Standart", sizeLabel: "10 × 19 × 19 sm", perSquare: 27, multiMode: false },
  "13": { name: "13-lük Standart", sizeLabel: "19 × 19 × 13.5 sm", perSquare: 27, multiMode: false },
  "29": { name: "29-luq İzolyasiyalı", sizeLabel: "29 × 19 × 19 sm", modes: { uzununa: 18, enine: 22 }, multiMode: true },
  "39": { name: "39-luq İzolyasiyalı", sizeLabel: "39 × 19 × 19 sm", modes: { uzununa: 14, enine: 18 }, multiMode: true },
};

export default function Calculator() {
  const [area, setArea] = useState<string>("");
  const [type, setType] = useState<string>("8");
  const [mode, setMode] = useState<"uzununa" | "enine">("uzununa");
  const [wallType, setWallType] = useState<"single" | "double">("single");
  const [result, setResult] = useState(0);

  const handleReset = () => {
    setArea("");
    setType("8");
    setMode("uzununa");
    setWallType("single");
  };

  useEffect(() => {
    const selected = BRICK_DATA[type];
    let count = 0;
    const numArea = Number(area) || 0;

    if (selected.multiMode && selected.modes) {
      count = numArea * selected.modes[mode];
    } else if (selected.perSquare) {
      count = numArea * selected.perSquare;
    }

    if (wallType === "double") count *= 2;
    setResult(Math.ceil(count));
  }, [area, type, mode, wallType]);

  // Dinamik WhatsApp Mesajı
  const wallLabel = wallType === "single" ? "tək qat" : "qoşa qat";
  const whatsappMessage = `Salam, kerpical.az. Layihəm üçün ${area || 0} m² sahəyə ${BRICK_DATA[type].sizeLabel} kərpicindən (${wallLabel}) cəmi ${result} ədəd hesabladım. Qiymət təklifi ala bilərəm?`;

  return (
    <section id="calculator" className="py-12 bg-[#020617] text-white scroll-mt-24">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Dəqiq Hesablama Sistemi</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
            MÜHƏNDİS <span className="text-green-500">HESABATI</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-[#0B1224]/90 backdrop-blur-xl rounded-[2.5rem] border border-white/[0.05] p-5 md:p-8 shadow-2xl relative">
          
          <button onClick={handleReset} className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5 active:scale-90">
            <RotateCcw className="w-4 h-4 text-slate-500" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-7 space-y-6 py-2">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">
                  <Hash className="w-3 h-3 text-green-500" /> LAYİHƏNİN ÜMUMİ SAHƏSİ (m²)
                </label>
                <input
                  type="number"
                  value={area}
                  placeholder="Məsələn: 100"
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full bg-[#161F33] border border-white/5 rounded-xl py-4 px-5 focus:border-green-500 outline-none transition-all font-bold text-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">
                  <Layers className="w-3 h-3 text-green-500" /> KƏRPİC SEÇİMİ (MODEL)
                </label>
                <div className="relative">
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full bg-[#161F33] border border-white/5 rounded-xl py-4 px-5 font-bold text-sm outline-none cursor-pointer appearance-none"
                  >
                    {Object.entries(BRICK_DATA).map(([key, val]) => (
                      <option key={key} value={key} className="bg-[#0B1224]">{val.name} ({val.sizeLabel})</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 pointer-events-none" />
                </div>
              </div>

              {BRICK_DATA[type].multiMode && (
                <div className="space-y-2 animate-in fade-in slide-in-from-top-1 duration-200">
                  <label className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">
                    <GanttChartSquare className="w-3 h-3 text-green-500" /> HÖRGÜ KONFİQURASİYASI
                  </label>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-[#161F33] rounded-xl border border-white/5">
                    <button onClick={() => setMode("uzununa")} className={`py-3 rounded-lg font-bold text-[9px] uppercase tracking-widest transition-all ${mode === "uzununa" ? "bg-slate-700 text-white shadow-md" : "text-slate-500 hover:text-white"}`}>Uzununa</button>
                    <button onClick={() => setMode("enine")} className={`py-3 rounded-lg font-bold text-[9px] uppercase tracking-widest transition-all ${mode === "enine" ? "bg-slate-700 text-white shadow-md" : "text-slate-500 hover:text-white"}`}>Eninə</button>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">
                  <Ruler className="w-3 h-3 text-green-500" /> KONSTRUKTİV QALINLIQ
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-[#161F33] rounded-xl border border-white/5">
                  <button onClick={() => setWallType("single")} className={`py-3 rounded-lg font-bold text-[9px] uppercase tracking-widest transition-all ${wallType === "single" ? "bg-green-600 text-white shadow-md" : "text-slate-500 hover:text-white"}`}>Tək Qat</button>
                  <button onClick={() => setWallType("double")} className={`py-3 rounded-lg font-bold text-[9px] uppercase tracking-widest transition-all ${wallType === "double" ? "bg-green-600 text-white shadow-md" : "text-slate-500 hover:text-white"}`}>Qoşa Qat</button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0B1224] rounded-[2rem] p-6 border border-white/5 flex flex-col items-center justify-between text-center min-h-[350px]">
              <div className="w-full">
                <span className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.4em] mb-2 block">TƏXMİNİ TƏLƏB OLUNAN MİQDAR</span>
                <div className="relative inline-block mt-2">
                  <span className="text-[6.5rem] md:text-[8rem] font-black italic tracking-tighter leading-none text-white block drop-shadow-2xl">
                    {result}
                  </span>
                  <div className="flex justify-center -mt-1">
                    <span className="text-green-500 text-lg font-black uppercase tracking-[0.6em] bg-[#0B1224] px-3 italic">Ə D Ə D</span>
                  </div>
                </div>
              </div>

              <div className="w-full space-y-5">
                <p className="text-[8px] text-slate-600 uppercase font-bold leading-relaxed border-t border-white/5 pt-4 italic">
                  * HESABLAMA GOST STANDARTLARI VƏ PEŞƏKAR USTA İTKİLƏRİ ƏSASINDA APARILMIŞDIR.
                </p>
                <a
                  href={`https://wa.me/994776235836?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  className="w-full bg-green-600 hover:bg-green-500 py-4 rounded-xl flex items-center justify-center gap-2 font-black text-base transition-all shadow-lg shadow-green-600/20 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  SİFARİŞİ TƏSDİQLƏ
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}