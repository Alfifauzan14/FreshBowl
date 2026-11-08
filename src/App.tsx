import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { MenuSection } from "./components/MenuSection";
import { HowToOrder } from "./components/HowToOrder";
import { Testimonials } from "./components/Testimonials";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <div className="freshbowl-app">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MenuSection />
        <HowToOrder />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
