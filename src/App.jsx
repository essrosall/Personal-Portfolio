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

function App() {
  return <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <div className="defer-section"><About /></div>
      <div className="defer-section"><Experience /></div>
      <div className="defer-section"><Achievement /></div>
      <div className="defer-section"><Projects /></div>
      <div className="defer-section"><Gallery /></div>
      <div className="defer-section"><CertnBadge/></div>
      <div className="defer-section"><Contact /></div>
      <div className="defer-section"><Footer /></div>
    </main>
  </div>

}

export default App
