"use client";

import Link from "next/link";
import { useLanguage, Lang } from "./LanguageContext";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const langs: Lang[] = ["az", "en", "ru"];

  return (
    // <header className="w-full bg-black/60 backdrop-blur-xl sticky top-0 z-50">
    <header className="w-full bg-black/90 sticky top-0 z-50">

      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo
        <Link href="#top" className="text-xl font-bold">
          kerpical.az
        </Link> */}
        <a href="#top" className="text-xl font-bold">
          kerpical.az
        </a>


        <div className="flex items-center gap-6">

          {/* Section links (same page) */}
          <a href="#products" className="hover:text-gray-300">
            Products
          </a>
          <a href="#how-it-works" className="hover:text-gray-300">
            How it works
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>

          {/* Language switch */}
          <div className="flex gap-1">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 text-sm rounded border transition ${
                  lang === l
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/994776235836"
            target="_blank"
            className="rounded-md bg-green-600 px-4 py-2 text-white text-sm hover:bg-green-700 transition"
          >
            WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}
