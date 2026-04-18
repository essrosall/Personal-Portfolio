import { useEffect, useState, useMemo } from "react";
import { Button } from '@/Components/Button';
import { AnimatedBorderButton } from "@/Components/AnimatedBorderButton";
import {
  FaArrowRight, FaGithub, FaFacebookSquare, FaTwitterSquare,
  FaInstagramSquare, FaLinkedin, FaChevronDown, FaJava, FaCss3Alt,
  FaHtml5, FaPython, FaReact, FaFigma, FaGitAlt
} from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import {
  SiJavascript, SiTailwindcss, SiCanva
} from "react-icons/si";
import {
  DiIllustrator, DiPhotoshop
} from "react-icons/di";

const roles = ["UI/UX Designer", "Web Developer", "Graphic designer"];

// 1. SKILLS ARRAY UPDATED TO OBJECTS
const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Photoshop", icon: <DiPhotoshop /> },
  { name: "Illustrator", icon: <DiIllustrator /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Canva", icon: <SiCanva /> },
];

export const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

 

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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute top-[-2rem] left-[-5rem] w-[500px] h-[500px] bg-[var(--color-primary)]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-[-3rem] w-96 h-96 bg-[var(--color-primary)]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[var(--color-primary)]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[var(--color-primary)]/7 rounded-full blur-3xl pointer-events-none" />

      {/*Content*/}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*left Column - Text Content*/}
          <div className="space-y-4">
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
                <br />
                into <span className="font-cursive italic font-normal text-white">interfaces</span>.
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] animate-fade-in">
                I'm an aspiring Web Developer and UI/UX Designer dedicated to building clean, responsive, and user-centered digital experiences from the ground up. By blending visual storytelling with intuitive interactions, I ensure every pixel serves a purpose and every user journey feels effortless.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <FaArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <LuDownload className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-1 animate-fade-in animation-delay-500">
              <span className="text-sm text-[var(--color-muted-foreground)] mr-2">Follow me:</span>
              {[
                { icon: FaGithub, href: "#" },
                { icon: FaLinkedin, href: "#" },
                { icon: FaTwitterSquare, href: "#" },
                { icon: FaFacebookSquare, href: "#" },
                { icon: FaInstagramSquare, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass text-[var(--color-primary)] hover:text-[var(--color-primary-foreground)] transition-colors"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/*right Column - Profile Image*/}
          <div className="relative animate-fade-in animation-delay-400">
            {/*Profile Image*/}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-[var(--color-primary)]/30 
              via-transparent to-[var(--color-primary)]/10 
              blur-2xl animate-pulse-glow"/>
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="#" alt="Profile Picture" className="w-full aspect-[4/5] object-cover rounded-2xl" />

                {/*Floating badge*/}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float ">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>

                {/*Stats Badge*/}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-3xl font-bold text-[var(--color-primary)]">1</div>
                  <div className="text-xs text-[var(--color-muted-foreground)]">Year Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Skills Section - UPDATED*/}
        <div className="mt-10 animate-fade-in animation-delay-600">
          <p className="text-sm text-[var(--color-muted-foreground)] mb-2 text-center">Technologies I work with</p>
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex shrink-0 px-8 py-4">
                  {/* Now rendering skill.icon and skill.name */}
                  <span className="flex items-center gap-3 text-xl font-semibold text-[var(--color-muted-foreground)]/50 hover:text-[var(--color-muted-foreground)] transition-colors cursor-default">
                    <span className="text-2xl">{skill.icon}</span>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-1000"
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