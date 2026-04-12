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
  return <header className="fixed w-full h-16 flex items-center justify-center bg-[#0a192f] text-gray-300">
    <nav className="container max-w-auto flex items-center justify-between px-4">
      {/*LOGO*/}
      < a href="#home" className="text-xl font-bold text-gray-300 tracking-tight hover:text-[#64ffda]">
        PM <span className="text-primary">.</span>
      </a>

      {/*DESKTOP NAV*/}
      <div className="hidden md:flex space-x-6">
        <div className="glass rounded-full px-2 py-1 flex items-cente gap-2">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  </header>;
};