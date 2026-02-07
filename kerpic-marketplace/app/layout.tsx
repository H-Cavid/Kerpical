import { Metadata, Viewport } from "next";
import ClientLayout from "./ClientLayout";
import "./globals.css";

// Ekran tənzimləmələri
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  // 1. Terminaldakı sarı xəbərdarlığı həll edən sətir
  metadataBase: new URL("https://kerpical.az"),

  // 2. Google Search Console doğrulama kodu
  verification: {
    google: "xxXWryy0izDxB9kAwio4m_tIW44X4KTMRcOZHjup-1s",
  },

  // 3. Başlıq və Təsvir (SEO)
  title: "kerpical.az | Topdan Qiymətə Kərpic Satışı (Kerpic Satisi) və Müqayisəsi",
  description: "Zavod və topdan qiymətə kərpic satışı. Bakı və bölgələrə çatdırılma. Ən ucuz kerpic qiymetleri üçün zavodları müqayisə edin və birbaşa sifariş edin.",

  // 4. Sənin istədiyin geniş açar sözlər siyahısı (ə və e hərfləri ilə)
  keywords: [
    "kərpic", "kerpic", "kərpic qiymətləri", "kerpic qiymetleri",
    "topdan kərpic satışı", "topdan kerpic satisi", "ucuz kərpic",
    "kərpic zavodları", "kerpic zavodlari", "tikinti materialları",
    "tikinti materiallari", "bina materialları", "bina materiallari",
    "tikinti", "bina", "kərpic çatdırılma", "kerpic catdirilma", 
    "baki kərpic satışı", "kərpical","kərpical.az", "onlayn kərpic satışı",
    "daş kərpic", "daş kerpic", "kərpic növləri", "kerpic novleri",
    "dekorativ kərpic", "dekorativ kerpic", "kərpic alətləri", "kerpic aletleri",
    "kerpical", "kerpical.az", "onlayn kerpic satışı"
  ],

  authors: [{ name: "kerpical.az" }],
  robots: "index, follow",

  // 5. Sosial media görüntüsü (WhatsApp və s. üçün)
  openGraph: {
    title: "kerpical.az - Topdan Qiymətə Kərpic (Kerpic) Satışı",
    description: "Zavodları müqayisə et, ən yaxşı topdan qiyməti seç. Siz ünvanı seçin, biz gətirək!",
    url: "https://kerpical.az",
    siteName: "kerpical.az",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "kerpical.az - Topdan Kərpic Satışı",
      },
    ],
    locale: "az_AZ",
    type: "website",
  },

  // 6. İkonlar
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body className="bg-slate-950">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}