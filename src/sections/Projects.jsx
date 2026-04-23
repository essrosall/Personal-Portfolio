import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Calendar, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ExternalLink, FileText, X } from "lucide-react";
import { FiCalendar, FiFigma } from "react-icons/fi";

const capstoneProject = {
  maintitle: "TRASHURE",
  title:
    "TRASHURE: Automated Trash to Treasure Waste Verification with Points Allocation and Reward System",
  role: "UI/UX Design Lead and Hardware Build Lead",
  abstract:
    "TRASHURE is our capstone system that verifies waste input using sensor-assisted classification, then allocates points to users for rewards. It combines a web-based management and tracking workflow with machine-level automation to support proper waste segregation and community engagement.",
  screenshots: [
    "/projects/capstone/1.png",
    "/projects/capstone/2.png",
    "/projects/capstone/3.png",
    "/projects/capstone/4.png",
    "/projects/capstone/5.png",
    "/projects/capstone/6.png",
    "/projects/capstone/7.png",
    "/projects/capstone/8.png",
    "/projects/capstone/9.png",
    "/projects/capstone/10.png",
    "/projects/capstone/11.png",
    "/projects/capstone/12.png",
  ],
  softwareStack: ["JavaScript", "PHP", "Python", "HTML", "CSS"],
  hardwareStack: [
    "Raspberry Pi 5",
    "Ultrasonic Sensor",
    "Inductive Sensor",
    "NEMA 17 Stepper Motor",
    "Servo Motors",
  ],
  tinkercadLink: "https://www.tinkercad.com/things/ga8ANlyNf7F-trashure-machine",
  manualLink: "/projects/capstone/User Manual.pdf",
};

const webDesignProjects = [
  {
    title: "Trashure Admin Desktop App",
    period: "2025-2026",
    description:
      "Admin-focused web dashboard for monitoring verified waste entries, tracking user points, and managing reward redemptions.",
    figmaLink: "https://www.figma.com/proto/kJiLTQDU1YqszdtupPFxjH/Trashure?node-id=110-595&t=DXZiBTjXyuG7Wwje-1",
    screenshots: [
      "/projects/figma/WEB/TRASHURE/1.png",
      "/projects/figma/WEB/TRASHURE/2.png",
      "/projects/figma/WEB/TRASHURE/3.png",
      "/projects/figma/WEB/TRASHURE/4.png",
      "/projects/figma/WEB/TRASHURE/5.png",
    ],
  },
  {
    title: "Kiosk Trashure",
    period: "2025-2026",
    description:
      "Kiosk interface concept tailored for quick user interaction, real-time verification feedback, and points allocation flow.",
    figmaLink: "https://www.figma.com/proto/uNqeUsBdLO3dFXxXrW1JTs/Automated-Enrollment-System?node-id=118-33&t=14kdL3ElqDGsC8NL-1",
    screenshots: [
      "/projects/figma/WEB/KIOSK/1.png",
      "/projects/figma/WEB/KIOSK/2.png",
      "/projects/figma/WEB/KIOSK/3.png",
      "/projects/figma/WEB/KIOSK/4.png",
      "/projects/figma/WEB/KIOSK/5.png",
      "/projects/figma/WEB/KIOSK/6.png",
      "/projects/figma/WEB/KIOSK/7.png",
    ],
  },
  {
    title: "PHISOPS (SEMI Lowfidelity)",
    period: "2024",
    description:
      "Semi-low fidelity web workflow exploration focused on process clarity, information hierarchy, and streamlined user paths.",
    figmaLink: "https://www.figma.com/proto/DdTLv8TfbRHMEZH6Qajag5/Low-Fidelity-Gamification?node-id=0-1&t=upa34x3BEIPSx0bT-1",
    screenshots: [
      "/projects/figma/WEB/PHISOPS/1.png",
      "/projects/figma/WEB/PHISOPS/2.png",
      "/projects/figma/WEB/PHISOPS/3.png",
      "/projects/figma/WEB/PHISOPS/4.png",
      "/projects/figma/WEB/PHISOPS/5.png",
      "/projects/figma/WEB/PHISOPS/6.png",
    ],
  },
  {
    title: "Leandro Website (Simple)",
    period: "2023-2024",
    description:
      "Simple website design with clear navigation structure and practical visual sections for school information delivery.",
    figmaLink: "https://www.figma.com/proto/uNqeUsBdLO3dFXxXrW1JTs/Automated-Enrollment-System?node-id=0-1&t=upa34x3BEIPSx0bT-1",
    screenshots: [
      "/projects/figma/WEB/LEAN/1.png",
      "/projects/figma/WEB/LEAN/2.png",
      "/projects/figma/WEB/LEAN/3.png",
    ],
  },
  {
    title: "Leandro SMS",
    period: "2023-2024",
    description:
      "Web design system for a school management platform featuring dashboard modules, records views, and admin tooling.",
    figmaLink: "https://www.figma.com/proto/uNqeUsBdLO3dFXxXrW1JTs/Automated-Enrollment-System?node-id=118-33&t=TWPtKy9dXu8wg1JX-1",
    screenshots: [
      "/projects/figma/WEB/SMS/1.png",
      "/projects/figma/WEB/SMS/2.png",
      "/projects/figma/WEB/SMS/3.png",
      "/projects/figma/WEB/SMS/4.png",
      "/projects/figma/WEB/SMS/5.png",
      "/projects/figma/WEB/SMS/6.png",
    ],
  },
  {
    title: "QCU Voting",
    period: "2022",
    description:
      "Voting platform interface concept with emphasis on ballot readability, accessibility, and transparent user confirmation steps.",
    figmaLink: "https://www.figma.com/proto/bFEnhmYPg3zA0EE58kw96K/QCU-Voting-System?node-id=0-1&t=xcCFBitawCnxsjBK-1",
    screenshots: [
      "/projects/figma/WEB/QCU/1.png",
      "/projects/figma/WEB/QCU/2.png",
      "/projects/figma/WEB/QCU/3.png",
      "/projects/figma/WEB/QCU/4.png",
      "/projects/figma/WEB/QCU/5.png",
      "/projects/figma/WEB/QCU/6.png",
    ],
  },
];

const mobileDesignProjects = [
  {
    title: "COF Mobile App",
    description:
      "Mobile interface concept with a clean phone-first workflow and compact visual hierarchy.",
    figmaLink: "https://www.figma.com/proto/33LBW7xsEsjmuJ1sKJA3UC/Coffee-Ordering-System?node-id=0-1&t=yNcRpewkqKwTJsM4-1",
    screenshots: [
      "/projects/figma/MOBILE/COF/1.png",
      "/projects/figma/MOBILE/COF/2.png",
      "/projects/figma/MOBILE/COF/3.png",
      "/projects/figma/MOBILE/COF/4.png",
      "/projects/figma/MOBILE/COF/5.png",
      "/projects/figma/MOBILE/COF/6.png",
      "/projects/figma/MOBILE/COF/7.png",
    ],
  },
  {
    title: "Sprout Mobile App",
    description:
      "App prototype focused on friendly interaction design, smooth navigation, and modern mobile presentation.",
    figmaLink: "https://www.figma.com/proto/qHfp3PdwCNZ6cNlPxZBapD/Plant-Doctor-Clone?node-id=0-1&t=sGIFZ6yD4ju7PgcB-1",
    screenshots: [
      "/projects/figma/MOBILE/SPROUT/1.png",
      "/projects/figma/MOBILE/SPROUT/2.png",
      "/projects/figma/MOBILE/SPROUT/3.png",
      "/projects/figma/MOBILE/SPROUT/4.png",
      "/projects/figma/MOBILE/SPROUT/5.png",
      "/projects/figma/MOBILE/SPROUT/6.png",
      "/projects/figma/MOBILE/SPROUT/7.png",
      "/projects/figma/MOBILE/SPROUT/8.png",
    ],
  },
  {
    title: "Ulayum Mobile App",
    description:
      "Mobile-first concept with a polished phone frame flow and clear screen-by-screen progression.",
    figmaLink: "https://www.figma.com/proto/4lFyMAvkcO4FAZVE0jDZTQ/UlaYum?node-id=0-1&t=rfESIqiluQdrtIVm-1",
    screenshots: [
      "/projects/figma/MOBILE/ULAYUM/1.png",
      "/projects/figma/MOBILE/ULAYUM/2.png",
      "/projects/figma/MOBILE/ULAYUM/3.png",
      "/projects/figma/MOBILE/ULAYUM/4.png",
      "/projects/figma/MOBILE/ULAYUM/5.png",
      "/projects/figma/MOBILE/ULAYUM/6.png",
      "/projects/figma/MOBILE/ULAYUM/7.png",
    ],
  },
];

export const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [didSwipe, setDidSwipe] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [activeStackSection, setActiveStackSection] = useState(null);
  const [selectedWebProjectIndex, setSelectedWebProjectIndex] = useState(null);
  const [activeWebSlide, setActiveWebSlide] = useState(0);
  const [hoveredWebCard, setHoveredWebCard] = useState(null);
  const [webTouchStartX, setWebTouchStartX] = useState(null);
  const [webTouchedCardIndex, setWebTouchedCardIndex] = useState(null);
  const [didSwipeWebPreview, setDidSwipeWebPreview] = useState(false);
  const [swipedWebCardIndex, setSwipedWebCardIndex] = useState(null);
  const [webPreviewSlides, setWebPreviewSlides] = useState(
    () => webDesignProjects.map(() => 0)
  );
  const [showAllWebProjects, setShowAllWebProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isCollapsingWebProjects, setIsCollapsingWebProjects] = useState(false);
  const [mobilePreviewSlides, setMobilePreviewSlides] = useState(
    () => mobileDesignProjects.map(() => 0)
  );
  const [selectedMobileProjectIndex, setSelectedMobileProjectIndex] = useState(null);
  const [activeMobileSlide, setActiveMobileSlide] = useState(0);
  const [mobileCardTouchStartX, setMobileCardTouchStartX] = useState(null);
  const [mobileTouchedCardIndex, setMobileTouchedCardIndex] = useState(null);
  const [didSwipeMobilePreview, setDidSwipeMobilePreview] = useState(false);
  const [swipedMobileCardIndex, setSwipedMobileCardIndex] = useState(null);
  const [mobileViewerTouchStartX, setMobileViewerTouchStartX] = useState(null);
  const [showAllMobileProjects, setShowAllMobileProjects] = useState(false);

  // Handle window resize to detect mobile/desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (selectedMobileProjectIndex !== null) return undefined;

    const intervalId = window.setInterval(() => {
      setMobilePreviewSlides((prev) =>
        prev.map((slide, index) => {
          const totalSlides = mobileDesignProjects[index].screenshots.length;
          return (slide + 1) % totalSlides;
        })
      );
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, [selectedMobileProjectIndex]);

  // Keep the first set static; animate only the extra items when toggling.
  const baseVisibleCount = isMobile ? 2 : 2;
  const primaryWebProjects = webDesignProjects.slice(0, baseVisibleCount);
  const extraWebProjects = webDesignProjects.slice(baseVisibleCount);
  const visibleMobileProjects =
    isMobile && !showAllMobileProjects
      ? mobileDesignProjects.slice(0, 1)
      : mobileDesignProjects;

  useEffect(() => {
    if (isHovering || isZoomOpen || isUserInteracting) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % capstoneProject.screenshots.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isHovering, isZoomOpen, isUserInteracting]);

  useEffect(() => {
    if (selectedWebProjectIndex !== null || hoveredWebCard === null) return undefined;

    const previewIntervalId = window.setInterval(() => {
      setWebPreviewSlides((prev) => {
        const next = [...prev];
        next[hoveredWebCard] =
          (next[hoveredWebCard] + 1) %
          webDesignProjects[hoveredWebCard].screenshots.length;
        return next;
      });
    }, 1200);

    return () => window.clearInterval(previewIntervalId);
  }, [hoveredWebCard, selectedWebProjectIndex]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        if (isZoomOpen) {
          setIsZoomOpen(false);
        }
        if (selectedWebProjectIndex !== null) {
          closeWebProject();
        }
        if (selectedMobileProjectIndex !== null) {
          closeMobileProject();
        }
        return;
      }

      if (event.key === "ArrowRight") {
        if (isZoomOpen) {
          nextSlide();
        } else if (selectedWebProjectIndex !== null) {
          nextWebSlide();
        } else if (selectedMobileProjectIndex !== null) {
          nextMobileSlide();
        }
      }

      if (event.key === "ArrowLeft") {
        if (isZoomOpen) {
          prevSlide();
        } else if (selectedWebProjectIndex !== null) {
          prevWebSlide();
        } else if (selectedMobileProjectIndex !== null) {
          prevMobileSlide();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isZoomOpen, selectedWebProjectIndex, selectedMobileProjectIndex]);

  useEffect(() => {
    const isAnyViewerOpen =
      isZoomOpen ||
      selectedWebProjectIndex !== null ||
      selectedMobileProjectIndex !== null;

    document.body.classList.toggle("viewer-open", isAnyViewerOpen);

    return () => {
      document.body.classList.remove("viewer-open");
    };
  }, [isZoomOpen, selectedWebProjectIndex, selectedMobileProjectIndex]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % capstoneProject.screenshots.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) =>
        (prev - 1 + capstoneProject.screenshots.length) %
        capstoneProject.screenshots.length
    );
  };

  const registerCarouselInteraction = () => {
    setIsUserInteracting(true);
    window.setTimeout(() => {
      setIsUserInteracting(false);
    }, 5000);
  };

  const openWebProject = (projectIndex) => {
    setSelectedWebProjectIndex(projectIndex);
    setActiveWebSlide(0);
  };

  const closeWebProject = () => {
    setSelectedWebProjectIndex(null);
    setActiveWebSlide(0);
  };

  const nextWebSlide = () => {
    if (selectedWebProjectIndex === null) return;
    const selectedProject = webDesignProjects[selectedWebProjectIndex];
    setActiveWebSlide((prev) => (prev + 1) % selectedProject.screenshots.length);
  };

  const prevWebSlide = () => {
    if (selectedWebProjectIndex === null) return;
    const selectedProject = webDesignProjects[selectedWebProjectIndex];
    setActiveWebSlide(
      (prev) =>
        (prev - 1 + selectedProject.screenshots.length) %
        selectedProject.screenshots.length
    );
  };

  const moveWebPreviewSlide = (cardIndex, direction) => {
    setWebPreviewSlides((prev) => {
      const next = [...prev];
      const total = webDesignProjects[cardIndex].screenshots.length;
      if (direction === "next") {
        next[cardIndex] = (next[cardIndex] + 1) % total;
      } else {
        next[cardIndex] = (next[cardIndex] - 1 + total) % total;
      }
      return next;
    });
  };

  const moveMobilePreviewSlide = (cardIndex, direction) => {
    setMobilePreviewSlides((prev) => {
      const next = [...prev];
      const total = mobileDesignProjects[cardIndex].screenshots.length;
      if (direction === "next") {
        next[cardIndex] = (next[cardIndex] + 1) % total;
      } else {
        next[cardIndex] = (next[cardIndex] - 1 + total) % total;
      }
      return next;
    });
  };

  const openMobileProject = (projectIndex) => {
    setSelectedMobileProjectIndex(projectIndex);
    setActiveMobileSlide(0);
  };

  const closeMobileProject = () => {
    setSelectedMobileProjectIndex(null);
    setActiveMobileSlide(0);
  };

  const nextMobileSlide = () => {
    if (selectedMobileProjectIndex === null) return;
    const selectedProject = mobileDesignProjects[selectedMobileProjectIndex];
    setActiveMobileSlide((prev) => (prev + 1) % selectedProject.screenshots.length);
  };

  const prevMobileSlide = () => {
    if (selectedMobileProjectIndex === null) return;
    const selectedProject = mobileDesignProjects[selectedMobileProjectIndex];
    setActiveMobileSlide(
      (prev) =>
        (prev - 1 + selectedProject.screenshots.length) %
        selectedProject.screenshots.length
    );
  };

  const renderMobileProjectCard = (project) => {
    const idx = mobileDesignProjects.indexOf(project);
    const mobileFrameClass = "relative w-full max-w-[320px] aspect-[9/19.5] rounded-[2.4rem] border-[10px] border-[#0a0d12] bg-[#050608] overflow-hidden";
    return (
      <article
        key={project.title}
        className="group glass rounded-2xl overflow-hidden animate-fade-in"
        onTouchStart={(event) => {
          setMobileTouchedCardIndex(idx);
          setMobileCardTouchStartX(event.touches[0].clientX);
          setDidSwipeMobilePreview(false);
          setSwipedMobileCardIndex(null);
        }}
        onTouchMove={(event) => {
          if (mobileTouchedCardIndex !== idx || mobileCardTouchStartX === null) return;
          const delta = Math.abs(mobileCardTouchStartX - event.touches[0].clientX);
          if (delta > 10) {
            setDidSwipeMobilePreview(true);
          }
        }}
        onTouchEnd={(event) => {
          if (mobileTouchedCardIndex !== idx || mobileCardTouchStartX === null) return;
          const touchEndX = event.changedTouches[0].clientX;
          const delta = mobileCardTouchStartX - touchEndX;
          if (Math.abs(delta) > 35) {
            moveMobilePreviewSlide(idx, delta > 0 ? "next" : "prev");
            setDidSwipeMobilePreview(true);
            setSwipedMobileCardIndex(idx);
          }
          setMobileCardTouchStartX(null);
          setMobileTouchedCardIndex(null);
        }}
      >
        <button
          type="button"
          onClick={() => {
            if (didSwipeMobilePreview && swipedMobileCardIndex === idx) {
              setDidSwipeMobilePreview(false);
              setSwipedMobileCardIndex(null);
              return;
            }
            openMobileProject(idx);
          }}
          className="w-full text-left"
          aria-label={`Open ${project.title} preview`}
        >
          <div className="flex items-center justify-center px-4 py-5 sm:px-6 sm:py-6 bg-gradient-to-b from-[var(--color-surface)]/30 to-[var(--color-background)]/60">
            <div className={mobileFrameClass}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(32,194,168,0.18),transparent_52%)]" />
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-[#0b0f16]" />
              <img
                src={project.screenshots[mobilePreviewSlides[idx]]}
                alt={`${project.title} preview`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-white/20" />
            </div>
          </div>
        </button>

        <div className="p-4 sm:p-5 md:p-6">
          <div className="flex items-start justify-between gap-2.5 sm:gap-3">
            <h4 className="text-lg md:text-xl font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
              {project.title}
            </h4>
            {!!project.figmaLink && (
              <a
                href={project.figmaLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-xs font-small transition-all shrink-0"
                aria-label={`Open ${project.title} in Figma`}
                title="Click to view in Figma"
              >
                <FiFigma className="w-4 h-4" />
                <span>View in Figma</span>
              </a>
            )}
          </div>
          {!!project.figmaLink && (
            <p className="text-xs text-[var(--color-primary)] mt-2 font-medium">
              Click to view in Figma and browse the frame set.
            </p>
          )}
          <p className="text-sm text-[var(--color-muted-foreground)] mt-3 leading-relaxed">
            {project.description}
          </p>
        </div>
      </article>
    );
  };

  const renderWebProjectCard = (project) => {
    const idx = webDesignProjects.indexOf(project);
    return (
      <article
        key={project.title}
        className="group glass rounded-2xl overflow-hidden animate-fade-in"
        onMouseEnter={() => setHoveredWebCard(idx)}
        onMouseLeave={() => {
          setHoveredWebCard(null);
          setWebPreviewSlides((prev) => {
            const reset = [...prev];
            reset[idx] = 0;
            return reset;
          });
        }}
        onTouchStart={(event) => {
          setWebTouchedCardIndex(idx);
          setWebTouchStartX(event.touches[0].clientX);
          setDidSwipeWebPreview(false);
          setSwipedWebCardIndex(null);
        }}
        onTouchMove={(event) => {
          if (webTouchedCardIndex !== idx || webTouchStartX === null) return;
          const delta = Math.abs(webTouchStartX - event.touches[0].clientX);
          if (delta > 10) {
            setDidSwipeWebPreview(true);
          }
        }}
        onTouchEnd={(event) => {
          if (webTouchedCardIndex !== idx || webTouchStartX === null) return;
          const touchEndX = event.changedTouches[0].clientX;
          const delta = webTouchStartX - touchEndX;
          if (Math.abs(delta) > 35) {
            moveWebPreviewSlide(idx, delta > 0 ? "next" : "prev");
            setDidSwipeWebPreview(true);
            setSwipedWebCardIndex(idx);
          }
          setWebTouchStartX(null);
          setWebTouchedCardIndex(null);
        }}
      >
        <button
          type="button"
          onClick={() => {
            if (didSwipeWebPreview && swipedWebCardIndex === idx) {
              setDidSwipeWebPreview(false);
              setSwipedWebCardIndex(null);
              return;
            }
            openWebProject(idx);
          }}
          className="w-full text-left"
          aria-label={`Open ${project.title} preview`}
        >
          <div className="relative overflow-hidden aspect-video">
            <img
              src={project.screenshots[webPreviewSlides[idx]]}
              alt={`${project.title} preview`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full glass_strong text-xs text-white theme-light-content-chip">
              {webPreviewSlides[idx] + 1} / {project.screenshots.length}
            </span>
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full glass_strong text-[10px] text-white md:hidden theme-light-content-chip">
              Swipe preview • Tap to open
            </span>
          </div>
        </button>

        <div className="p-4 sm:p-5 md:p-6">
          <div className="flex items-start justify-between gap-2.5 sm:gap-3">
            <h4 className="text-lg md:text-xl font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
              {project.title}
            </h4>
            {project.figmaLink ? (
              <a
                href={project.figmaLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-xs font-small transition-all shrink-0"
                aria-label={`Open ${project.title} in Figma`}
                title="Click to view in Figma"
              >
                <FiFigma className="w-4 h-4" />
                <span>View in Figma</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg glass text-xs text-[var(--color-muted-foreground)] border border-[var(--color-primary)]/25 shrink-0">
                <FiFigma className="w-4 h-4" />
                <span>Frames Soon</span>
              </span>
            )}
          </div>
          {project.figmaLink && (
            <p className="text-xs text-[var(--color-primary)] mt-2 font-medium">
              Click to view in Figma and browse the frame set.
            </p>
          )}
          <p className="text-sm text-[var(--color-muted-foreground)] mt-3 leading-relaxed">
            {project.description}
          </p>
        </div>
      </article>
    );
  };

  return (
    <section id="projects" className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      {/* BG Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-[var(--color-primary)]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-12 sm:mb-16">
          <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase animate-fade-in">
            Capstone Highlight
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-5 mb-5 sm:mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)] ">
            Our latest major build:
            <span className="font-cursive italic font-normal text-white theme-light-content-text"> {" "}TRASHURE.
            </span>
          </h2>
          <p className="text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
            A focused showcase of our capstone project, including the software modules,
            hardware build integration, and system design outputs.
          </p>
        </div>

        {/* Capstone Card*/}
        <article className="group glass rounded-2xl overflow-hidden animate-fade-in animation-delay-300 max-w-6xl mx-auto">
          <div
            className="relative overflow-hidden aspect-video w-full flex items-center justify-center p-0 bg-gradient-to-b from-[var(--color-surface)]/80 to-[var(--color-background)]/70 touch-pan-y"
            onMouseEnter={() => {
              setActiveSlide(0);
              setIsHovering(true);
            }}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={(event) => {
              setTouchStartX(event.touches[0].clientX);
              setDidSwipe(false);
              registerCarouselInteraction();
            }}
            onTouchMove={(event) => {
              if (touchStartX === null) return;
              void event;
            }}
            onTouchEnd={(event) => {
              if (touchStartX === null) return;
              const touchEndX = event.changedTouches[0].clientX;
              const delta = touchStartX - touchEndX;
              if (Math.abs(delta) > 40) {
                setDidSwipe(true);
                if (delta > 0) {
                  nextSlide();
                } else {
                  prevSlide();
                }
              }
              setTouchStartX(null);
            }}
          >
            <button
              type="button"
              onClick={() => {
                if (didSwipe) {
                  setDidSwipe(false);
                  return;
                }
                setIsZoomOpen(true);
              }}
              className="w-full h-full cursor-pointer flex items-center justify-center"
              aria-label={`Open ${capstoneProject.title} in full screen`}
            >
              <img
                src={capstoneProject.screenshots[activeSlide]}
                alt={`${capstoneProject.title} screenshot ${activeSlide + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center p-0 transition-all duration-700 ease-out md:group-hover:scale-105"
              />
            </button>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />

            <span className="pointer-events-none absolute bottom-3 right-3 px-3 py-1 rounded-full glass_strong text-xs text-white theme-light-content-chip">
              {activeSlide + 1} / {capstoneProject.screenshots.length}
            </span>

            <span className="pointer-events-none absolute top-3 left-3 px-2.5 py-1 rounded-full glass_strong text-[10px] text-white md:hidden theme-light-content-chip">
              Swipe preview • Tap to open
            </span>

            <button
              type="button"
              onClick={prevSlide}
              className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-[var(--color-primary)] hover:text-white transition-all"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-[var(--color-primary)] hover:text-white transition-all"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
            <div>
              <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:flex-nowrap">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors md:max-w-[62%]">
                  {capstoneProject.title}
                </h3>

                <div className="hidden md:flex gap-3 flex-nowrap whitespace-nowrap shrink-0 md:max-w-[38%]">
                  <a
                    href={capstoneProject.tinkercadLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all text-sm"
                  >
                    3D TinkerCAD Design
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={capstoneProject.manualLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all text-sm"
                  >
                    Machine Manual (PDF)
                    <FileText className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2 md:hidden">
                <a
                  href={capstoneProject.tinkercadLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg glass hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all text-sm"
                >
                  3D TinkerCAD Design
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={capstoneProject.manualLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg glass hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all text-sm"
                >
                  Machine Manual (PDF)
                  <FileText className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm md:text-base text-[var(--color-muted-foreground)] mt-3 leading-relaxed">
                {capstoneProject.abstract}
              </p>

              <p className="text-sm md:text-base text-[var(--color-foreground)] theme-light-content-text mt-3">
                <span className="font-semibold text-[var(--color-foreground)] theme-light-content-text">Role:</span>{" "}
                {capstoneProject.role}
              </p>
            </div>

            <div className="space-y-3 md:hidden">
              <button
                type="button"
                onClick={() =>
                  setActiveStackSection((prev) =>
                    prev === "software" ? null : "software"
                  )
                }
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg glass text-sm font-medium text-[var(--color-secondary-foreground)] hover:bg-[var(--color-primary)]/10 transition-colors"
              >
                <span>Software Stack</span>
                {activeStackSection === "software" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {activeStackSection === "software" && (
                <div className="flex flex-wrap gap-2">
                  {capstoneProject.softwareStack.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-[var(--color-surface)] text-xs font-medium border border-border/50 text-[var(--color-muted-foreground)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)] transition-all duration-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="hidden md:block space-y-3">
              <p className="text-sm font-medium text-[var(--color-secondary-foreground)]">
                Software Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {capstoneProject.softwareStack.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[var(--color-surface)] text-xs font-medium border border-border/50 text-[var(--color-muted-foreground)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)] transition-all duration-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 md:hidden">
              <button
                type="button"
                onClick={() =>
                  setActiveStackSection((prev) =>
                    prev === "hardware" ? null : "hardware"
                  )
                }
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg glass text-sm font-medium text-[var(--color-secondary-foreground)] hover:bg-[var(--color-primary)]/10 transition-colors"
              >
                <span>Hardware Components</span>
                {activeStackSection === "hardware" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {activeStackSection === "hardware" && (
                <div className="flex flex-wrap gap-2">
                  {capstoneProject.hardwareStack.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-[var(--color-surface)] text-xs font-medium border border-border/50 text-[var(--color-muted-foreground)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)] transition-all duration-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="hidden md:block space-y-3">
              <p className="text-sm font-medium text-[var(--color-secondary-foreground)]">
                Hardware Components
              </p>
              <div className="flex flex-wrap gap-2">
                {capstoneProject.hardwareStack.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[var(--color-surface)] text-xs font-medium border border-border/50 text-[var(--color-muted-foreground)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)] transition-all duration-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </article>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="text-center mx-auto max-w-3xl mb-12">
            <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase animate-fade-in">
              UI/UX Category
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-[var(--color-secondary-foreground)]"><span className="font-cursive text-white theme-light-content-text italic">Web Design  </span>
               Showcase
            </h3>
            <p className="text-[var(--color-muted-foreground)]">
              A curated set of my web design projects from latest to oldest,
              including system dashboards, kiosk flows, and platform concepts.
            </p>
            <p className="text-sm text-[var(--color-primary)] mt-3">
              All web design works shown below were created in Figma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-10xl mx-auto">
            {primaryWebProjects.map(renderWebProjectCard)}
          </div>

          <div className={`transition-all duration-700 overflow-hidden ${showAllWebProjects || isCollapsingWebProjects ? 'max-h-[9999px] mt-5 sm:mt-6' : 'max-h-0'}`}>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-10xl mx-auto ${isCollapsingWebProjects ? 'animate-fade-out-collapse' : showAllWebProjects ? 'animate-fade-in-expand' : ''}`}>
              {extraWebProjects.map(renderWebProjectCard)}
            </div>
          </div>

            {/* View All / Hide Button */}
            <div className="flex justify-center mt-12">
              {!showAllWebProjects ? (
                <button
                  type="button"
                  onClick={() => {
                    setIsCollapsingWebProjects(false);
                    setShowAllWebProjects(true);
                  }}
                  className="px-6 py-3 rounded-full glass hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all text-sm font-medium border border-[var(--color-primary)]/30 inline-flex items-center gap-2"
                >
                  View All {webDesignProjects.length} Projects
                  <ChevronDown className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setIsCollapsingWebProjects(true);
                    setTimeout(() => {
                      setShowAllWebProjects(false);
                      setIsCollapsingWebProjects(false);
                    }, 500);
                  }}
                  className="px-6 py-3 rounded-full glass hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all text-sm font-medium border border-[var(--color-primary)]/30 inline-flex items-center gap-2"
                >
                  Hide Projects
                  <ChevronUp className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-center mx-auto max-w-3xl mt-20 sm:mt-24 mb-12 sm:mb-14">
            <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-[var(--color-secondary-foreground)]"><span className="font-cursive text-white theme-light-content-text italic">Mobile Design </span>
               Showcase
            </h3>
              <p className="text-[var(--color-muted-foreground)]">
                Three mobile-first Figma concepts presented in a phone frame, built for swipe previews on touch devices and autoplay previews on desktop.
              </p>
              <p className="text-sm text-[var(--color-primary)] mt-3">
                  These mobile designs were built as frame-based concepts in Figma.
                </p>
                <p className="text-xs text-[var(--color-muted-foreground)] mt-2">
                  Swipe through the cards to preview each frame set.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 max-w-7xl mx-auto">
              {visibleMobileProjects.map(renderMobileProjectCard)}
            </div>

            {isMobile && (
              <div className="flex justify-center mt-8">
                {!showAllMobileProjects ? (
                  <button
                    type="button"
                    onClick={() => setShowAllMobileProjects(true)}
                    className="px-6 py-3 rounded-full glass hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all text-sm font-medium border border-[var(--color-primary)]/30 inline-flex items-center gap-2"
                  >
                    Show More Mobile Projects
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowAllMobileProjects(false)}
                    className="px-6 py-3 rounded-full glass hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all text-sm font-medium border border-[var(--color-primary)]/30 inline-flex items-center gap-2"
                  >
                    Show Less
                    <ChevronUp className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
        </div>

        {/* Fullscreen Viewer */}
        {createPortal(
          <>
            {isZoomOpen && (
              <div
                className="fixed inset-0 z-[12000] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
                onClick={() => setIsZoomOpen(false)}
              >
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    prevSlide();
                  }}
                  className="hidden sm:block absolute left-5 top-1/2 -translate-y-1/2 p-3 rounded-full glass_strong hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-all duration-500"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    nextSlide();
                  }}
                  className="hidden sm:block absolute right-5 top-1/2 -translate-y-1/2 p-3 rounded-full glass_strong hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-all duration-500"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div
                  className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center justify-center"
                  onClick={(event) => event.stopPropagation()}
                  onTouchStart={(event) => {
                    setTouchStartX(event.touches[0].clientX);
                  }}
                  onTouchEnd={(event) => {
                    if (touchStartX === null) return;
                    const touchEndX = event.changedTouches[0].clientX;
                    const delta = touchStartX - touchEndX;
                    if (Math.abs(delta) > 35) {
                      if (delta > 0) {
                        nextSlide();
                      } else {
                        prevSlide();
                      }
                    }
                    setTouchStartX(null);
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setIsZoomOpen(false)}
                    className="fixed top-4 right-4 sm:top-5 sm:right-5 z-[10010] p-3 rounded-full bg-white text-black border-2 border-black/10 hover:bg-white/90 transition-all duration-300"
                    aria-label="Close screenshot viewer"
                  >
                    <X className="w-5 h-5 text-black" />
                  </button>

                  <img
                    src={capstoneProject.screenshots[activeSlide]}
                    alt={`${capstoneProject.title} screenshot ${activeSlide + 1}`}
                    decoding="async"
                    className="max-w-full max-h-[76vh] sm:max-h-[78vh] object-contain rounded-2xl shadow-2xl"
                  />
                  <p className="mt-4 text-sm text-white/80">
                    {capstoneProject.maintitle} • Frame {activeSlide + 1} of {capstoneProject.screenshots.length}
                  </p>
                  <p className="mt-1 text-xs text-white/65 sm:hidden">Swipe image area to browse</p>
                </div>
              </div>
            )}

            {selectedMobileProjectIndex !== null && (
              <div
                className="fixed inset-0 z-[12000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
                onClick={closeMobileProject}
              >
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    prevMobileSlide();
                  }}
                  className="hidden sm:block absolute left-5 top-1/2 -translate-y-1/2 p-3 rounded-full glass_strong hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-all duration-500"
                  aria-label="Previous mobile frame"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    nextMobileSlide();
                  }}
                  className="hidden sm:block absolute right-5 top-1/2 -translate-y-1/2 p-3 rounded-full glass_strong hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-all duration-500"
                  aria-label="Next mobile frame"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div
                  className="relative w-full max-w-xl h-[90vh] flex items-center justify-center"
                  onClick={(event) => event.stopPropagation()}
                  onTouchStart={(event) => {
                    setMobileViewerTouchStartX(event.touches[0].clientX);
                  }}
                  onTouchEnd={(event) => {
                    if (mobileViewerTouchStartX === null) return;
                    const touchEndX = event.changedTouches[0].clientX;
                    const delta = mobileViewerTouchStartX - touchEndX;
                    if (Math.abs(delta) > 35) {
                      if (delta > 0) {
                        nextMobileSlide();
                      } else {
                        prevMobileSlide();
                      }
                    }
                    setMobileViewerTouchStartX(null);
                  }}
                >
                  <button
                    type="button"
                    onClick={closeMobileProject}
                    className="fixed top-4 right-4 sm:top-5 sm:right-5 z-[10010] p-3 rounded-full bg-white text-black border-2 border-black/10 hover:bg-white/90 transition-all duration-300"
                    aria-label="Close mobile design viewer"
                  >
                    <X className="w-5 h-5 text-black" />
                  </button>

                  <div className="relative w-full max-w-[340px] aspect-[9/19.5] rounded-[2.6rem] border-[10px] border-[#0a0d12] bg-[#050608] overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(32,194,168,0.18),transparent_52%)]" />
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-[#0b0f16]" />
                    <img
                      src={mobileDesignProjects[selectedMobileProjectIndex].screenshots[activeMobileSlide]}
                      alt={`${mobileDesignProjects[selectedMobileProjectIndex].title} frame ${activeMobileSlide + 1}`}
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>

                  <p className="absolute bottom-2 left-0 right-0 text-xs text-white/65 text-center sm:hidden">Swipe the phone frame to browse</p>
                </div>
              </div>
            )}

            {selectedWebProjectIndex !== null && (
              <div
                className="fixed inset-0 z-[12000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
                onClick={closeWebProject}
              >
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    prevWebSlide();
                  }}
                  className="hidden sm:block absolute left-5 top-1/2 -translate-y-1/2 p-3 rounded-full glass_strong hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-all duration-500"
                  aria-label="Previous frame"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    nextWebSlide();
                  }}
                  className="hidden sm:block absolute right-5 top-1/2 -translate-y-1/2 p-3 rounded-full glass_strong hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-all duration-500"
                  aria-label="Next frame"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div
                  className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center justify-center"
                  onClick={(event) => event.stopPropagation()}
                  onTouchStart={(event) => {
                    setWebTouchStartX(event.touches[0].clientX);
                  }}
                  onTouchEnd={(event) => {
                    if (webTouchStartX === null) return;
                    const touchEndX = event.changedTouches[0].clientX;
                    const delta = webTouchStartX - touchEndX;
                    if (Math.abs(delta) > 35) {
                      if (delta > 0) {
                        nextWebSlide();
                      } else {
                        prevWebSlide();
                      }
                    }
                    setWebTouchStartX(null);
                  }}
                >
                  <button
                    type="button"
                    onClick={closeWebProject}
                    className="fixed top-4 right-4 sm:top-5 sm:right-5 z-[10010] p-3 rounded-full bg-white text-black border-2 border-black/10 hover:bg-white/90 transition-all duration-300"
                    aria-label="Close web design viewer"
                  >
                    <X className="w-5 h-5 text-black" />
                  </button>

                  <img
                    src={webDesignProjects[selectedWebProjectIndex].screenshots[activeWebSlide]}
                    alt={`${webDesignProjects[selectedWebProjectIndex].title} frame ${activeWebSlide + 1}`}
                    decoding="async"
                    className="max-w-full max-h-[76vh] sm:max-h-[78vh] object-contain rounded-2xl shadow-2xl"
                  />
                  <p className="mt-4 text-sm text-white/80 text-center">
                    {webDesignProjects[selectedWebProjectIndex].title} • Frame {activeWebSlide + 1} of {webDesignProjects[selectedWebProjectIndex].screenshots.length}
                  </p>
                  <p className="mt-1 text-xs text-white/65 text-center sm:hidden">Swipe image area to browse</p>
                </div>
              </div>
            )}
          </>,
          document.body
        )}
      </div>
    </section>
  );
};