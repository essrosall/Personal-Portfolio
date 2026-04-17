import { FaGithub, FaLinkedin, FaTwitter, FaBehance } from "react-icons/fa";
import { MoveUp } from "lucide-react";
import {Button} from "@Components/Button";

const socialLinks = [
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaBehance, href: "#", label: "Behance" }, // Added for UI/UX & Graphic Design portfolios
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

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-20 pb-10 border-t border-white/10 bg-[var(--color-background)]">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Brand & Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Brand & Tagline */}
          <div className="max-w-sm">
            <a href="#" className="text-2xl font-bold tracking-tight text-white">
              EssRosall <span className="text-[var(--color-primary)]">.</span>
            </a>
            <p className="text-[var(--color-muted-foreground)] mt-4 leading-relaxed">
              Turning ideas into stunning visuals and pixels into intuitive interfaces.
            </p>
          </div>

          {/* Navigation Grid */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div>
              <h4 className="text-white font-medium mb-4 tracking-wider uppercase text-xs">Explore</h4>
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
              <h4 className="text-white font-medium mb-4 tracking-wider uppercase text-xs">Connect</h4>
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

        {/* Bottom Section: Copyright & Socials */}
        <div className="pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          
          <p className="text-sm text-[var(--color-muted-foreground)]">
            © {currentYear} John Rey Rosales. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {/* Minimalist Social Icons */}
            <div className="flex items-center gap-5 border-r border-white/10 pr-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-all hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Sharp Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center justify-center w-10 h-10 rounded-xl glass border border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)] text-[var(--color-muted-foreground)] hover:text-[var(--color-primary-foreground)] transition-all"
              aria-label="Scroll to top"
            >
              <MoveUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};