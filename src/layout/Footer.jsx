import { FaGithub, FaLinkedin, FaFacebook, FaBehance } from "react-icons/fa";
import { MoveUp } from "lucide-react";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/essrosall", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/rosales-john-rey-a-017a14341/", label: "LinkedIn" },
  { icon: FaFacebook, href: "https://www.facebook.com/ess.rosall/", label: "Facebook" },
  { icon: FaBehance, href: "https://www.behance.net/rosalesjohnreya", label: "Behance" }, 
];

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-12 sm:pt-20 pb-12 sm:pb-10 border-t border-white/10 bg-[var(--color-background)] relative overflow-hidden">
      
      {/* Subtle background glow to tie in with the rest of the site */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[var(--color-primary)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Section: 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 mb-10 sm:mb-16">
          
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center text-center md:items-start md:text-left">
            <a href="#" className="inline-block mb-4" aria-label="Home">
              <img
                src="/logo/JRLOGO.png"
                alt="JR Logo"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </a>
            <p className="w-full max-w-sm text-left text-[var(--color-muted-foreground)] leading-relaxed text-sm sm:pr-4">
              Turning ideas into stunning visuals and pixels into intuitive interfaces. Building digital experiences with purpose.
            </p>
          </div>

          {/* Column 2: Social Links */}
          <div className="md:col-span-7 lg:col-span-4 lg:mx-auto text-center md:text-left">
            <h4 className="text-white font-medium mb-5 tracking-wider uppercase text-xs">Connect Online</h4>
            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full glass border border-white/5 flex items-center justify-center text-[var(--color-muted-foreground)] hover:text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all hover:-translate-y-1 shadow-lg"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Navigation Grid */}
          <div className="md:col-span-12 lg:col-span-4 grid grid-cols-2 gap-6 sm:gap-12 lg:flex lg:flex-row lg:gap-16 lg:justify-end">
            <div>
              <h4 className="text-white font-medium mb-5 tracking-wider uppercase text-xs">Explore</h4>
              <nav className="flex flex-col gap-3">
                {footerLinks.slice(0, 3).map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    className="text-[var(--color-muted-foreground)] hover:text-white transition-colors w-fit text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="text-white font-medium mb-5 tracking-wider uppercase text-xs">Connect</h4>
              <nav className="flex flex-col gap-3">
                {footerLinks.slice(3).map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    className="text-[var(--color-muted-foreground)] hover:text-white transition-colors w-fit text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Back to Top ONLY */}
        <div className="pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row items-end md:items-center justify-between gap-5 text-right md:text-left">
          
          <p className="text-sm text-[var(--color-muted-foreground)] text-right md:text-left self-end md:self-auto">
            © {currentYear} John Rey Rosales. All rights reserved.
          </p>

          {/* Sharp Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group fixed right-4 z-40 md:static md:bottom-auto md:right-auto md:z-auto flex items-center justify-center w-12 h-12 rounded-xl glass border border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)] text-[var(--color-muted-foreground)] hover:text-[var(--color-primary-foreground)] transition-all shadow-lg"
            style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
            aria-label="Scroll to top"
          >
            <MoveUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform animate-bounce" />
          </button>

        </div>
      </div>
    </footer>
  );
};