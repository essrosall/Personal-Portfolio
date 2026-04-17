import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Navbar } from "@/layout/Navbar";
import { CertnBadge } from "./sections/CertnBadge";
import { Footer } from "./layout/Footer";

function App() {
  return <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <CertnBadge/>
      <Contact />
      <Footer />
    </main>
  </div>

}

export default App
