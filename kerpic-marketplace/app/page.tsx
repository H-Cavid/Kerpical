import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950">
      {/* suppressHydrationWarning əlavə edildi. 
          Bu, brauzer extension-larının (bis_skin_checked və s.) 
          yaratdığı hydration xətasını aradan qaldırır 
      */}
      <div 
        id="top" 
        className="scroll-mt-24" 
        suppressHydrationWarning 
      />

      <Hero />
      
      <Products />

      <HowItWorks />

      <About />

      <Contact />

      <Footer />
      
    </main>
  );
}