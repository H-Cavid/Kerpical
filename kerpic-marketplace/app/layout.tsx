"use client";

import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import Navbar from "../components/Navbar";
import { LanguageProvider } from "../components/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* 1. suppressHydrationWarning əlavə edildi: 
       Bu brauzer extension-larının yaratdığı xətanın qarşısını alır */
    <html lang="az" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          {children}
          <Analytics /> {/* Vercel Analytics bura əlavə olunur */}
        </LanguageProvider>
      </body>
    </html>
  );
}


