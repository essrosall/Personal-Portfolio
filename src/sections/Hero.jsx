import { useEffect, useState } from "react";
import { Button } from '@/Components/Button';
import { AnimatedBorderButton } from "@/Components/AnimatedBorderButton";
import { supabase } from "@/lib/supabaseClient";
import {
  FaArrowRight, FaHeart, FaGithub, FaFacebookSquare, FaBehance,
  FaLinkedin, FaChevronDown, FaJava, FaCss3Alt,
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
  const CV_PATH = "/Rosales_ATS resume.pdf";
  const LOVE_DEVICE_STORAGE_KEY = "portfolio-love-device-id";
  const LOVE_COUNT_STORAGE_KEY = "portfolio-love-count";
  const LOVE_LIKED_STORAGE_KEY = "portfolio-love-liked";

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [profileTooltip, setProfileTooltip] = useState({
    x: 0,
    y: 0,
    visible: false,
  });
  const [hasSentLove, setHasSentLove] = useState(false);
  const [loveCount, setLoveCount] = useState(0);
  const [isLoveTooltipVisible, setIsLoveTooltipVisible] = useState(false);
  const [isLoveSyncing, setIsLoveSyncing] = useState(false);

 

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

  useEffect(() => {
    const savedLiked = localStorage.getItem(LOVE_LIKED_STORAGE_KEY);
    const savedCount = localStorage.getItem(LOVE_COUNT_STORAGE_KEY);

    if (savedLiked) {
      setHasSentLove(savedLiked === "true");
    }

    if (savedCount) {
      const parsed = Number(savedCount);
      if (!Number.isNaN(parsed)) {
        setLoveCount(parsed);
      }
    }

    const getOrCreateDeviceId = () => {
      const existing = localStorage.getItem(LOVE_DEVICE_STORAGE_KEY);
      if (existing) return existing;

      const generated =
        globalThis.crypto?.randomUUID?.() ??
        `device-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
      localStorage.setItem(LOVE_DEVICE_STORAGE_KEY, generated);
      return generated;
    };

    const loadFromSupabase = async () => {
      if (!supabase) return;

      try {
        const deviceId = getOrCreateDeviceId();
        const { data, error } = await supabase.rpc("get_profile_like_state", {
          p_device_id: deviceId,
        });

        if (error) {
          throw error;
        }

        const row = Array.isArray(data) ? data[0] : null;
        if (!row) return;

        const remoteCount = Number(row.current_count);
        const remoteLiked = Boolean(row.liked);

        if (!Number.isNaN(remoteCount)) {
          setLoveCount(remoteCount);
          localStorage.setItem(LOVE_COUNT_STORAGE_KEY, String(remoteCount));
        }

        setHasSentLove(remoteLiked);
        localStorage.setItem(LOVE_LIKED_STORAGE_KEY, String(remoteLiked));
      } catch {
        // Keep local fallback values if Supabase is unavailable.
      }
    };

    loadFromSupabase();
  }, []);

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.href = CV_PATH;
    link.download = "Rosales Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fallbackToggleLove = () => {
    const nextLoved = !hasSentLove;
    const delta = nextLoved ? 1 : -1;
    const nextCount = Math.max(0, loveCount + delta);

    setHasSentLove(nextLoved);
    setLoveCount(nextCount);
    localStorage.setItem(LOVE_LIKED_STORAGE_KEY, String(nextLoved));
    localStorage.setItem(LOVE_COUNT_STORAGE_KEY, String(nextCount));
  };

  const handleSendLove = async () => {
    if (isLoveSyncing) return;

    setIsLoveSyncing(true);
    setIsLoveTooltipVisible(true);
    try {
      if (!supabase) {
        fallbackToggleLove();
      } else {
        const deviceId = localStorage.getItem(LOVE_DEVICE_STORAGE_KEY);
        const safeDeviceId =
          deviceId ??
          (globalThis.crypto?.randomUUID?.() ??
            `device-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`);

        localStorage.setItem(LOVE_DEVICE_STORAGE_KEY, safeDeviceId);

        const { data, error } = await supabase.rpc("toggle_profile_like", {
          p_device_id: safeDeviceId,
        });

        if (error) {
          throw error;
        }

        const row = Array.isArray(data) ? data[0] : null;
        const remoteCount = Number(row?.new_count);
        const remoteLiked = Boolean(row?.liked);

        if (!Number.isNaN(remoteCount)) {
          setLoveCount(remoteCount);
          localStorage.setItem(LOVE_COUNT_STORAGE_KEY, String(remoteCount));
        }

        setHasSentLove(remoteLiked);
        localStorage.setItem(LOVE_LIKED_STORAGE_KEY, String(remoteLiked));
      }
    } catch {
      fallbackToggleLove();
    } finally {
      setIsLoveSyncing(false);
    }

    window.setTimeout(() => setIsLoveTooltipVisible(false), 1200);
  };

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
              <span className="inline-flex items-center gap-2 px-4 rounded-full glass text-sm text-[var(--color-primary)]">
                <span className="w-2 h-2 bg-[var(--color-primary)] rounded-sm animate-pulse" />
                Aspiring&nbsp;
                <span className="font-semibold">{text}</span>
                <span className="ml-1 text-[var(--color-primary)] animate-pulse">|</span>
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                Turning <span className="text-[var(--color-primary)] glow_text">PIXELS </span>
                <br />
                into <span className="font-cursive italic font-normal text-white">code </span> and
                <span className="text-[var(--color-primary)] glow_text"> IDEAS </span>
                into <span className="font-cursive italic font-normal text-white">interfaces</span>
              </h1>
              <p className="text-lg text-[var(--color-muted-foreground)] animate-fade-in">
                I'm an aspiring Web Developer and UI/UX Designer dedicated to building clean, responsive, and user-centered digital experiences from the ground up. By blending visual storytelling with intuitive interactions, I ensure every pixel serves a purpose and every user journey feels effortless.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-nowrap items-center gap-3 sm:gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                className="flex-1 min-w-0 h-11 sm:h-14 whitespace-nowrap px-3 text-sm sm:flex-none sm:px-5 sm:text-lg"
                onClick={handleContactClick}
              >
                Contact Me <FaArrowRight className="hidden sm:inline-flex w-5 h-5" />
              </Button>
              <AnimatedBorderButton
                className="flex-1 min-w-0 h-11 sm:h-14 whitespace-nowrap px-3 text-sm sm:flex-none sm:px-8 sm:text-lg"
                onClick={handleCVDownload}
              >
                <LuDownload className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-1 animate-fade-in animation-delay-500">
              <span className="text-sm text-[var(--color-muted-foreground)] mr-2">Follow me:</span>
              {[
                { icon: FaGithub, href: "https://github.com/essrosall" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/rosales-john-rey-a-017a14341/" },
                { icon: FaFacebookSquare, href: "https://www.facebook.com/ess.rosall/" },
                { icon: FaBehance, href: "https://www.behance.net/rosalesjohnreya" },
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
          <div className="relative animate-fade-in animation-delay-400 px-2 sm:px-0">
            {/*Profile Image*/}
            <div className="relative max-w-[300px] sm:max-w-md mx-auto">
              <div className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-[var(--color-primary)]/30 
              via-transparent to-[var(--color-primary)]/10 
              blur-2xl animate-pulse-glow"/>
              <div className="group relative glass rounded-3xl p-2 glow-border">
                <div className="absolute top-3 right-3 z-30">
                  <div
                    className={`absolute -top-10 right-0 rounded-lg border border-white/10 bg-black/65 px-2.5 py-1 text-[10px] font-medium text-white whitespace-nowrap shadow-lg pointer-events-none transition-all duration-200 ${
                      isLoveTooltipVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                    }`}
                  >
                    {hasSentLove ? "Thank you" : "Send love"}
                  </div>

                  <button
                    type="button"
                    onClick={handleSendLove}
                    onMouseEnter={() => setIsLoveTooltipVisible(true)}
                    onMouseLeave={() => setIsLoveTooltipVisible(false)}
                    onFocus={() => setIsLoveTooltipVisible(true)}
                    onBlur={() => setIsLoveTooltipVisible(false)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-xs font-medium transition-all duration-200 backdrop-blur-md ${
                      hasSentLove
                        ? "border-red-300/60 bg-red-500/15 text-red-100"
                        : "border-white/20 bg-white/10 text-[var(--color-foreground)] hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-primary)]/15"
                    }`}
                    disabled={isLoveSyncing}
                    aria-label={hasSentLove ? "Thank you" : "Send love"}
                    title={hasSentLove ? "Thank you" : "Send love"}
                  >
                    <span className={`grid h-5 w-5 place-items-center rounded-full ${hasSentLove ? "bg-red-500/20" : "bg-[var(--color-primary)]/20"}`}>
                      <FaHeart className={`h-3 w-3 ${hasSentLove ? "text-red-300" : "text-[var(--color-primary)]"}`} />
                    </span>
                    <span className="tabular-nums">{loveCount}</span>
                  </button>
                </div>

                <div
                  className={`absolute px-3 py-1.5 rounded-lg glass text-xs font-medium text-[var(--color-foreground)] whitespace-nowrap pointer-events-none transition-all duration-150 z-20 ${
                    profileTooltip.visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{
                    left: profileTooltip.x,
                    top: profileTooltip.y,
                    transform: "translate(-50%, -130%)",
                  }}
                >
                  Mr. John Rey A. Rosales
                </div>
                <div
                  className="rounded-2xl overflow-hidden"
                  onMouseMove={(event) => {
                    const rect = event.currentTarget.getBoundingClientRect();
                    setProfileTooltip({
                      x: event.clientX - rect.left,
                      y: event.clientY - rect.top,
                      visible: true,
                    });
                  }}
                  onMouseLeave={() =>
                    setProfileTooltip((prev) => ({ ...prev, visible: false }))
                  }
                >
                  <img
                    src="/logo/Profile.png"
                    alt="Profile Picture"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 ease-out hover:scale-110"
                  />
                </div>

                {/*Floating badge*/}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-3 py-2 sm:px-4 sm:py-3 animate-float ">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-medium">Available for work</span>
                  </div>
                </div>

                {/*Stats Badge*/}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-3 py-2 sm:px-4 sm:py-3 animate-float animation-delay-500">
                  <div className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">1</div>
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
          className="flex flex-col items-center gap-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <FaChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};