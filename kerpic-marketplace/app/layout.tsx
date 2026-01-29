"use client";

import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // 1. Footer-i bura daxil edirik
import { LanguageProvider } from "../components/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-slate-950">
        <LanguageProvider>
          {/* Navbar bütün səhifələrdə yuxarıda görünəcək */}
          <Navbar />
          
          {/* children - hər bir səhifənin (ana səhifə, məhsul səhifəsi və s.) məzmunudur */}
          <main className="min-h-screen">
            {children}
          </main>
          
          {/* 2. Footer-i bura əlavə etdik ki, bütün səhifələrin sonunda görünsün */}
          <Footer />
          
          <Analytics /> 
          <GoogleAnalytics gaId="G-RZVRKHM5QZ" /> 
        </LanguageProvider>
      </body>
    </html>
  );
}