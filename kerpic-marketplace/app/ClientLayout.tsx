"use client";

import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LanguageProvider } from "../components/LanguageContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <Analytics /> 
      <GoogleAnalytics gaId="G-RZVRKHM5QZ" /> 
    </LanguageProvider>
  );
}