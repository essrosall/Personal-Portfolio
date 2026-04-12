import { Button } from "@/Components/Button";

const navLinks = [
  {
    label: "Home",
    href: "#home"},
    {
      label: "About",
      href: "#about"
    },
    {
      label: "Experience",
      href: "#experience"
    },
    {
      label: "Projects",
      href: "#projects"
    },
    {
      label: "Contact",
      href: "#contact"
    }
];

export const Navbar = () => {
  return <header className="fixed w-full h-16 flex items-center justify-center bg-transparent py-5">
    <nav className="container max-w-auto flex items-center justify-between px-4">

    {/*LOGO*/}
      < a href="#" className="text-xl font-bold tracking-tight hover:text-[var(--color-primary)]">
        PM <span className="text-[var(--color-primary)]">.</span>
      </a>

      {/*DESKTOP NAV*/}
      <div className="flex items-center gap-4">
        <div className="glass rounded-sm px-2 py-1 flex items-center gap-2">
          {navLinks.map((link) => (
            <a key={link.label}
               href={link.href}
               className="px-3 py-2 text-sm text-[var(--color-muted-foreground)]
               hover:text-[var(--color-foreground)] rounded-sm hover:bg-[var(--color-surface)] hover:bg-[var(--color-surface)]/50 transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/*cta*/}
      <div>
      <Button size="md">
        Contact Me
      </Button>
      </div>
    </nav>
  </header>;
};