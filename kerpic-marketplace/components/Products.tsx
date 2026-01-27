"use client";
import Link from "next/link";
import { productsData } from "./productsData";
import { MessageCircle, Info } from "lucide-react";

export default function Products() {
  const WHATSAPP_NUMBER = "994776235836";

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-black text-white text-center mb-12 uppercase italic">
          Məhsullarımız
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.az.map((product) => (
            <div 
              key={product.slug} 
              className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-6 hover:border-green-500/50 transition-all group flex flex-col"
            >
              <div className="aspect-square mb-6 overflow-hidden rounded-2xl bg-slate-950">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-2 flex-grow">{product.desc}</p>
              
              <div className="space-y-3">
                {/* Ətraflı Məlumat Düyməsi */}
                <Link 
                  href={`/products/${product.slug}`}
                  className="flex items-center justify-center gap-2 w-full bg-slate-800/40 hover:bg-slate-700/60 text-white py-3 rounded-xl font-semibold transition-all border border-white/5"
                >
                  <Info className="w-4 h-4 text-green-500" />
                  Ətraflı məlumat
                </Link>

                {/* WhatsApp Düyməsi */}
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.name + " haqqında məlumat almaq istəyirəm.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#00a859] hover:bg-[#008f4c] text-white py-3 rounded-xl font-bold transition-all shadow-lg shadow-green-900/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp ilə soruş
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}