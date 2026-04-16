import { useEffect, useState } from "react";
import { Button } from "@/Components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-700 ${
        isScrolled ? "glass_strong py-4 shadow-lg" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between relative z-10">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-[var(--color-primary)]">
          EssRosall <span className="text-[var(--color-primary)]">.</span>
        </a>

        {/*Desktop Nav*/}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-lg px-2 py-1 flex items-center gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-md text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] rounded-lg hover:bg-[var(--color-surface)]/50 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        <button
          className={`md:hidden p-2 text-[var(--color-foreground)] hover:cursor-pointer transition-transform duration-200 ease-out ${
            isMobileMenuOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Dropdown Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass_strong origin-top transform transition-all duration-300 ease-out overflow-hidden ${
          isMobileMenuOpen
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        {/* Mobile Menu */}
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4 border-t border-[var(--color-border)]/50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] rounded-lg hover:bg-[var(--color-surface)]/50 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <Button>Contact Me</Button>
        </div>
      </div>
    </header>
  );
};