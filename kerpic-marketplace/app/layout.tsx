"use client";

import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google'; // Kitabxananı bura daxil edirik
import "./globals.css";
import Navbar from "../components/Navbar";
import { LanguageProvider } from "../components/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* suppressHydrationWarning brauzer extension-larının (məs: bis_skin_checked) 
       yaratdığı xətaların qarşısını almaq üçündür */
    <html lang="az" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          {children}
          
          {/* Vercel Analytics - Saytın sürətini ölçmək üçün */}
          <Analytics /> 
          
          {/* Google Analytics - İstifadəçi davranışlarını (İnstagram-dan gələnləri və s.) izləmək üçün */}
          <GoogleAnalytics gaId="G-RZVRKHM5QZ" /> 
        </LanguageProvider>
      </body>
    </html>
  );
}