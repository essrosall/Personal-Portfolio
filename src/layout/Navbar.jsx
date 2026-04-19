import { useEffect, useState } from "react";
import { Button } from "@/Components/Button";
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  GalleryVertical,
  Home,
  Mail,
  Trophy,
  User,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", Icon: Home, category: "Overview" },
  { label: "About", href: "#about", Icon: User, category: "Overview" },
  { label: "Achievements", href: "#achievements", Icon: Trophy, category: "Works" },
  { label: "Gallery", href: "#gallery", Icon: GalleryVertical, category: "Works" },
  { label: "Experience", href: "#experience", Icon: Briefcase, category: "Works" },
  { label: "Contact", href: "#contact", Icon: Mail, category: "Connect" },
];

const mobileNavGroups = ["Overview", "Works", "Connect"];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // NEW: Bulletproof smooth scrolling function
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Closes the mobile menu automatically
    } else {
      console.warn("Could not find a section with id='projects'");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-700 ${
        isScrolled ? "glass_strong py-3 md:py-4 shadow-lg" : "bg-transparent py-3 md:py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-4 sm:px-6 flex items-center justify-between relative z-10 gap-3 sm:gap-4">
        
        <a href="#" className="shrink-0 inline-flex items-center hover:opacity-90 transition-opacity" aria-label="Go to home">
          <img
            src="/logo/JRLOGO.png"
            alt="JR Logo"
            className="h-11 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-lg px-2 py-1 flex items-center gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-md text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] rounded-lg hover:bg-[var(--color-surface)]/50 transition-colors duration-300 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/*View Project Button*/}
        <div className="hidden md:flex shrink-0 items-center gap-2.5">
          <Button size="md" onClick={scrollToProjects}>
            <span className="whitespace-nowrap">View Projects</span>
          </Button>
        </div>

        {!isMobileMenuOpen && (
          <button
            className="md:hidden p-2 rounded-lg glass text-[var(--color-foreground)] hover:bg-[var(--color-surface)]/80 transition-colors shrink-0"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Open navigation menu"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
      </nav>

      {/* Mobile Slide-In Menu */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/30 backdrop-blur-[1px] transition-opacity duration-400 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close mobile menu overlay"
        />

        <aside
          className={`pointer-events-auto absolute top-0 right-0 h-dvh w-[86%] max-w-[360px] glass_strong bg-[var(--color-background)]/90 border-l border-[var(--color-border)]/50 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`absolute -left-4 top-16 w-8 h-8 rounded-r-lg rounded-l-md glass_strong border border-[var(--color-border)]/60 flex items-center justify-center hover:bg-[var(--color-surface)]/80 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isMobileMenuOpen
                ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-x-2 scale-90 pointer-events-none"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "140ms" : "0ms" }}
            aria-label="Close mobile menu"  
          >
            <ChevronRight className="w-4 h-4 text-[var(--color-foreground)]" />
          </button>

          <div className="h-full overflow-y-auto px-5 pt-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] flex flex-col">
            <div
              className={`flex items-start justify-between gap-3 transition-all duration-500 ${
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <div className="mt-4">
                <p className="text-base font-semibold text-[var(--color-foreground)]">John Rey A. Rosales</p>
                <p className="text-sm text-[var(--color-muted-foreground)] mt-1.5">Aspiring UI/UX Designer and Web Developer</p>
              </div>

              <div className="relative">
                <img
                  src="/logo/Profile.png"
                  alt="John Rey Rosales"
                  className="w-20 h-20 rounded-lg object-cover border border-[var(--color-primary)]/40"
                />
              </div>
            </div>

            <div
              className={`mt-4 mb-5 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/50 to-transparent transition-all duration-500 ${
                isMobileMenuOpen ? "opacity-100" : "opacity-0"
              }`}
            />

            <nav className="flex flex-col gap-4">
              {mobileNavGroups.map((group, groupIdx) => (
                <div
                  key={group}
                  className={`transition-all duration-500 ${
                    isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${130 + groupIdx * 60}ms` : "0ms" }}
                >
                  <p className="px-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted-foreground)] mb-2">
                    {group}
                  </p>
                  <div className="flex flex-col gap-2">
                    {navLinks
                      .filter((link) => link.category === group)
                      .map((link, linkIdx) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`px-3 py-2.5 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] rounded-lg hover:bg-[var(--color-surface)]/80 transition-all duration-500 flex items-center gap-3 ${
                            isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                          }`}
                          style={{ transitionDelay: isMobileMenuOpen ? `${180 + groupIdx * 70 + linkIdx * 45}ms` : "0ms" }}
                        >
                          <link.Icon className="w-4 h-4 text-[var(--color-primary)]" />
                          {link.label}
                        </a>
                      ))}
                  </div>
                </div>
              ))}
            </nav>

            <div
              className={`mt-5 transition-all duration-500 ${
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "320ms" : "0ms" }}
            >
              <Button size="lg" className="w-full min-h-[54px] text-[17px]" onClick={scrollToProjects}>
                View Projects
              </Button>
            </div>

            <p
              className={`mt-auto pt-5 text-xs text-[var(--color-muted-foreground)] transition-all duration-500 ${
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "380ms" : "0ms" }}
            >
              Portfolio v1.0 • © {currentYear}
            </p>
          </div>
        </aside>
      </div>
    </header>
  );
};