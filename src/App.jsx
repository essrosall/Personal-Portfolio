import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Gallery } from "@/sections/Gallery";
import { Contact } from "@/sections/Contact";
import { Navbar } from "./layout/Navbar.jsx";
import { CertnBadge } from "./sections/CertnBadge";
import { Footer } from "./layout/Footer";
import { Achievement } from "./sections/Achievement";
import { MoveUp } from "lucide-react";

function App() {
  return <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <button
      type="button"
      onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
      className="hide-when-viewer-open md:hidden fixed right-4 bottom-4 z-[80] inline-flex h-11 w-11 items-center justify-center rounded-lg glass border border-[var(--color-primary)]/30 text-[var(--color-foreground)] shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-all duration-300 active:scale-95"
      aria-label="From top"
      title="From top"
    >
      <MoveUp className="w-5 h-5 animate-bounce" />
    </button>
    <main>
      <Hero />
      <div className="defer-section"><About /></div>
      <div className="defer-section"><Experience /></div>
      <div className="defer-section"><Achievement /></div>
      <div className="defer-section"><Projects /></div>
      <div className="defer-section"><Gallery /></div>
      <div className="defer-section"><CertnBadge/></div>
      <Contact />
      <div className="defer-section"><Footer /></div>
    </main>
  </div>

}

export default App
