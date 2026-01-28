"use client";

import { useState, useEffect } from "react";
import { Calculator as CalcIcon, Hash, MoveHorizontal, Layers, MessageCircle } from "lucide-react";

const BRICK_TYPES = [
    { id: "8", name: "8-lik (19x19x8.5)", perSquare: 42 },
    { id: "10", name: "10-luq (10x19x19)", perSquare: 35 }, // Siyahıya əlavə edildi
    { id: "13", name: "13-lük (19x19x13.5)", perSquare: 28 },
    { id: "29", name: "29-luq (19x19x29)", perSquare: 13.5 },
    { id: "39", name: "39-luq (19x19x39)", perSquare: 10 },
];

export default function Calculator() {
  const [area, setArea] = useState<number>(0);
  const [selectedBrick, setSelectedBrick] = useState(BRICK_TYPES[0]);
  const [wallType, setWallType] = useState<"single" | "double">("single");
  const [result, setResult] = useState<number>(0);

  // Sıfırlama funksiyası
  const handleReset = () => {
    setArea(0);
    setWallType("single");
    setSelectedBrick(BRICK_TYPES[0]);
  };

  useEffect(() => {
    let count = area * selectedBrick.perSquare;
    if (wallType === "double") count *= 2;
    setResult(Math.ceil(count));
  }, [area, selectedBrick, wallType]);

  const whatsappMessage = `Salam, kalkulyatorla hesabladım. ${area} m² sahə üçün ${wallType === "single" ? "tək qat" : "qoşa qat"} ${selectedBrick.name} kərpicindən təxminən ${result} ədəd lazımdır. Qiymət öyrənə bilərəm?`;

  return (
    <section 
      id="calculator" 
      onClick={(e) => {
        // Əgər klik birbaşa section-a və ya ana container-ə dəyərsə sıfırla
        if ((e.target as HTMLElement).id === "calculator" || (e.target as HTMLElement).classList.contains("container")) {
          handleReset();
        }
      }}
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Dekorativ Arxa Fon */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold mb-4 uppercase tracking-widest">
              <CalcIcon className="w-3 h-3" /> Ağıllı Hesablama
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase italic">
              Kərpic <span className="text-green-500">Kalkulyatoru</span>
            </h2>
            <p className="text-slate-400">Layihəniz üçün lazım olan kərpic sayını saniyələr içində hesablayın.</p>
          </div>

          <div 
            onClick={(e) => e.stopPropagation()} // İçəri klikləyəndə sıfırlanmasın
            className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[3rem] shadow-2xl"
          >
            {/* Giriş Sahələri */}
            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-300 mb-3 uppercase italic">
                  <Hash className="w-4 h-4 text-green-500" /> Divar Sahəsi (m²)
                </label>
                <input
                  type="number"
                  placeholder="Məsələn: 50"
                  value={area === 0 ? "" : area} // 0 olanda boş görünsün
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full bg-slate-800/50 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-green-500/50 transition-all font-bold text-lg"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-300 mb-3 uppercase italic">
                  <Layers className="w-4 h-4 text-green-500" /> Kərpic Növü
                </label>
                <select
                  value={selectedBrick.id}
                  onChange={(e) => setSelectedBrick(BRICK_TYPES.find(b => b.id === e.target.value) || BRICK_TYPES[0])}
                  className="w-full bg-slate-800/50 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-green-500/50 transition-all font-bold"
                >
                  {BRICK_TYPES.map(type => (
                    <option key={type.id} value={type.id} className="bg-slate-900">{type.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-300 mb-3 uppercase italic">
                  <MoveHorizontal className="w-4 h-4 text-green-500" /> Divar Qalınlığı
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setWallType("single")}
                    className={`py-3 rounded-xl font-bold transition-all border ${wallType === "single" ? "bg-green-500 text-white border-green-500 shadow-lg shadow-green-500/20" : "bg-white/5 text-slate-400 border-white/5 hover:border-white/10"}`}
                  >
                    Tək Qat
                  </button>
                  <button
                    onClick={() => setWallType("double")}
                    className={`py-3 rounded-xl font-bold transition-all border ${wallType === "double" ? "bg-green-500 text-white border-green-500 shadow-lg shadow-green-500/20" : "bg-white/5 text-slate-400 border-white/5 hover:border-white/10"}`}
                  >
                    Qoşa Qat
                  </button>
                </div>
              </div>
            </div>

            {/* Nəticə Sahəsi */}
            <div className="flex flex-col justify-center items-center p-8 bg-green-500/5 border border-green-500/10 rounded-[2.5rem] text-center">
              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Təxmini ehtiyac</span>
              <div className="text-6xl md:text-7xl font-black text-white mb-2 italic">
                {result} <span className="text-2xl text-green-500 not-italic">ədəd</span>
              </div>
              <p className="text-slate-500 text-xs mb-8 max-w-[200px]">
                * Hesablama standart dərz boşluqları nəzərə alınaraq aparılıb.
              </p>

              <a
                href={`https://wa.me/994776235836?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                className="w-full bg-green-600 hover:bg-green-500 text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-black transition-all shadow-xl hover:shadow-green-500/20 active:scale-95 border-b-4 border-green-700 hover:border-green-600"
              >
                <MessageCircle className="w-5 h-5" />
                Sifariş Ver
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}