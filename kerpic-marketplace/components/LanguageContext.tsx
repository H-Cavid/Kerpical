"use client";

import { createContext, useContext, useState, useEffect, useMemo } from "react";

export type Lang = "az" | "en" | "ru";

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // SSR zamanı və ilk renderdə həmişə "az" olsun (Hydration xətası olmasın deyə)
  const [lang, setLangState] = useState<Lang>("az");

  useEffect(() => {
    // Səhifə brauzerdə yüklənən kimi URL və LocalStorage yoxlanılır
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang") as Lang;
    const savedLang = localStorage.getItem("language") as Lang;

    if (urlLang && ["az", "en", "ru"].includes(urlLang)) {
      setLangState(urlLang);
    } else if (savedLang && ["az", "en", "ru"].includes(savedLang)) {
      setLangState(savedLang);
    }
  }, []);

  const updateLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("language", newLang);
  };

  // Memoize vasitəsilə performans və stabil dəyər ötürülməsi
  const value = useMemo(() => ({ lang, setLang: updateLang }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}