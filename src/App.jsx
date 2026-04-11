import {Hero} from "@/components/Hero";
import {About} from "@/components/About";
import {Experience} from "@/components/Experience";
import {Projects} from "@/components/Projects";
import {Contact} from "@/components/Contact";
import {Navbar} from "@/layout/navbar";

function App() {
  return<div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
    </div>
  
}

export default App
