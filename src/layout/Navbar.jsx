import { useEffect, useState } from "react";
import { Button } from "@/Components/Button";
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  GalleryVertical,
  Heart,
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
  const [hasLikedPortfolio, setHasLikedPortfolio] = useState(false);
  const [visitorLikes, setVisitorLikes] = useState(128);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handlePortfolioLike = () => {
    setHasLikedPortfolio((prev) => {
      setVisitorLikes((count) => count + (prev ? -1 : 1));
      return !prev;
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-700 ${
        isScrolled ? "glass_strong py-4 shadow-lg" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between relative z-10 gap-4">
        
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
        <div className="hidden md:block shrink-0">
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

          <div className="h-full overflow-y-auto px-5 pt-5 pb-6 flex flex-col">
            <div
              className={`flex items-start justify-between gap-3 transition-all duration-500 ${
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <div className="mt-1">
                <p className="text-sm font-semibold text-[var(--color-foreground)]">John Rey A. Rosales</p>
                <p className="text-xs text-[var(--color-muted-foreground)] mt-1">Aspiring UI/UX Designer and Web Developer</p>
              </div>

              <div className="relative">
                <img
                  src="/logo/Profile.png"
                  alt="John Rey Rosales"
                  className="w-20 h-20 rounded-lg object-cover border border-[var(--color-primary)]/40"
                />
                <span className="absolute -right-1.5 -bottom-1.5 w-3.5 h-3.5 rounded-full bg-green-400 ring-2 ring-[var(--color-background)] animate-pulse" />
              </div>
            </div>

            <div
              className={`mt-4 mb-5 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/50 to-transparent transition-all duration-500 ${
                isMobileMenuOpen ? "opacity-100" : "opacity-0"
              }`}
            />

            <div
              className={`glass rounded-xl border border-[var(--color-primary)]/20 p-3 mb-4 transition-all duration-500 ${
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "90ms" : "0ms" }}
            >
              <p className="text-xs text-[var(--color-muted-foreground)]">Enjoying the portfolio so far?</p>
              <button
                type="button"
                onClick={handlePortfolioLike}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[var(--color-surface)]/60 hover:bg-[var(--color-surface)]/90 transition-colors text-sm"
              >
                <Heart
                  className={`w-4 h-4 ${hasLikedPortfolio ? "fill-red-400 text-red-400" : "text-[var(--color-primary)]"}`}
                />
                {hasLikedPortfolio ? "Thanks for the love!" : "Send some love"}
                <span className="text-[var(--color-muted-foreground)]">({visitorLikes})</span>
              </button>
            </div>

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
              <Button className="w-full" onClick={scrollToProjects}>
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