import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div id="top" className="scroll-mt-24" />

      <Hero />
      <Products />

      <HowItWorks />

      {/* STRONG VISUAL BREAK */}
      <div className="w-full h-24 bg-black" />

      <About />

      {/* STRONG VISUAL BREAK */}

      <Contact />
    </>
  );
}
