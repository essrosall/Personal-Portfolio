import { useEffect, useState, useMemo } from "react";
import {Button } from '@/Components/Button';
import { FaArrowRight, FaGithub, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaChevronDown } from "react-icons/fa";
import { AnimatedBorderButton } from "@/Components/AnimatedBorderButton";

const roles = ["UI/UX Designer", "Web Developer", "Graphic designer"];
const skills = ["HTML", "CSS", "JavaScript", "Python","Java", "React", "Tailwind CSS", "Figma", "Photoshop", "Illustrator", "Git", "GitHub", "Canva"];
export const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  
  const greenDots = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${15 + Math.random() * 25}s`,
        delay: `${Math.random() * 10}s`,
      })),
    []
  );

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];
    const isFullText = !isDeleting && text === currentRole;
    const isEmptyText = isDeleting && text === "";

    const delay = isFullText
      ? 1200
      : isEmptyText
      ? 500
      : isDeleting
      ? 80
      : 120;

    const timer = setTimeout(() => {
      if (isFullText) {
        setIsDeleting(true);
      } else if (isEmptyText) {
        setIsDeleting(false);
        setRoleIndex((prev) => prev + 1);
      } else {
        setText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/*Background*/}
      <div className="absolute inset-0">
        <img
          src="/bg.jpg"
          alt="Bg Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
        {/*Green Dots*/}
        <div>
          {greenDots.map((dot) => (
            <div
              key={dot.id}
              className="absolute w-1.5 h-1.5 rounded-full opacity-60"
              style={{
                backgroundColor: "#20b2a6",
                left: dot.left,
                top: dot.top,
                animation: `slowdrift ${dot.duration} ease-in-out infinite`,
                animationDelay: dot.delay,
              }}
            />
          ))}
        </div>
      {/*Content*/}
      <div className="container mx-auto px-4 pt-32 p pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*left Column - Text Content*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[var(--color-primary)]">
                <span className="w-2 h-2 bg-[var(--color-primary)] rounded-sm animate-pulse" />
                Aspiring&nbsp;
                <span className="font-semibold">{text}</span>
                <span className="ml-1 text-[var(--color-primary)] animate-pulse">|</span>
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
              Turning <span className="text-[var(--color-primary)] glow_text">PIXELS </span>
              <br />
              into <span className="font-cursive italic font-normal text-white">code </span> and
              <span className="text-[var(--color-primary)] glow_text"> IDEAS </span>
              <br/>
              into <span className="font-cursive italic font-normal text-white">interfaces</span>.
            </h1>
            <p className="text-lg text-[var(--color-muted-foreground)] animate-fade-in">
              I’m an aspiring Web Developer and UI/UX Designer dedicated to building clean, responsive, and user-centered digital experiences from the ground up. By blending visual storytelling with intuitive interactions, I ensure every pixel serves a purpose and every user journey feels effortless.
            </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <FaArrowRight className="w-5 h-5" />
              </Button>
                <AnimatedBorderButton/>
            </div>

            {/* Social Media Links */}
            <div className="flex items-cente gap-1 animate-fade-in animation-delay-500">
                <span className="text-sm text-[var(--color-muted-foreground)]">Follow me:</span>
                {[
                    {icon: FaGithub, href: "#" },
                    {icon: FaLinkedin, href: "#" },
                    {icon: FaTwitterSquare, href: "#" },
                    {icon: FaFacebookSquare, href: "#" },
                    {icon: FaInstagramSquare, href: "#" },
                ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass text-[var(--color-primary)] hover:text-[var(--color-primary-foreground)] transition-colors"
                >
                  {<social.icon className="w-5 h-5"/>}
                </a>
            ))}
            </div>  
          </div>
          {/*right Column - Profile Image*/}
          <div className="relatice animate-fade-in animation-delay-400">
            {/*Profile Image*/}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 
              rounded-3xl bg-gradient-tobr 
              from-[var(--color-primary)]/30 
              via-transparent to-[var(--color-primary)]/10 
              blur-2xl animate-pulse-glow"/>
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="" alt="John Rey Rosales" className="w-full aspect-[4/5] objext-cover rounded-2xl"/>
                {/*Floating badge*/}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float ">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse">
                      <span className="text-sm font-medium">Available for work</span>
                    </div>
                  </div>
                </div>
                {/*Stats Badge*/}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-xl font-bold text-[var(--color-primary)]">1 </div>
                  <div className="text-xs text-[var(--color-muted-foreground)]">Year Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Skills Section*/}
        <div className="mt-20 animate-fade-in animateion-delay-600">
          <p className="text-sm text-sm text-[var(--color-muted-foreground mb-6 text-center)]">Technologies I work with</p>
          <div className="relative overflow-hidded">
            <div className="flex animate-marquee">
              {[...skills,...skills].map((skill, idx) => (
                <div key={idx} className="flex shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-[var(--color-muted-foreground)]/50 hover:text-[var(--color-muted-foreground)] transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

       <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <FaChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};