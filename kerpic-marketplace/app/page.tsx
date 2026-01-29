import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Calculator from "@/components/Calculator";

export default function Home() {
  return (
    <main className="bg-slate-950 overflow-x-hidden">
      {/* Səhifənin yuxarısına hamar keçid üçün anchor */}
      <div id="top" className="scroll-mt-24" suppressHydrationWarning />
      
      {/* Əsas Giriş Hissəsi */}
      <Hero />
      
      {/* Bura artıq dinamikdir. 
          Kərpicləri görmək üçün bu komponentin içində 
          productsData.az.map() istifadə olunur.
      */}
      <section id="products" className="scroll-mt-20">
        <Products />
      </section>
      {/* Proses və Texniki Məlumatlar */}
      <Calculator />
      
      {/* Proses və Texniki Məlumatlar */}
      <HowItWorks />
      
      {/* Haqqımızda və Üstünlüklərimiz */}
      <About />
      
      {/* Əlaqə Formu və Xəritə */}
      <Contact />
      
      {/* Alt Hissə */}
      {/* <Footer /> */}
    </main>
  );
}