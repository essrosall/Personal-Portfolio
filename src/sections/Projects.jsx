import { useEffect, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, ExternalLink, FileText, X } from "lucide-react";
import { FiCalendar } from "react-icons/fi";

const capstoneProject = {
  title:
    "TRASHURE: Automated Trash to Treasure Waste Verification with Points Allocation and Reward System",
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
  manualLink: "/projects/capstone/TRASHURE-Manual.pdf",
};

const webDesignProjects = [
  {
    title: "Trashure Admin Desktop App",
    period: "2025-2026",
    description:
      "Admin-focused web dashboard for monitoring verified waste entries, tracking user points, and managing reward redemptions.",
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

export const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [selectedWebProjectIndex, setSelectedWebProjectIndex] = useState(null);
  const [activeWebSlide, setActiveWebSlide] = useState(0);
  const [hoveredWebCard, setHoveredWebCard] = useState(null);
  const [webPreviewSlides, setWebPreviewSlides] = useState(
    () => webDesignProjects.map(() => 0)
  );

  useEffect(() => {
    if (isHovering || isZoomOpen) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % capstoneProject.screenshots.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isHovering, isZoomOpen]);

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
    }, 3500);

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
        return;
      }

      if (event.key === "ArrowRight") {
        if (isZoomOpen) {
          nextSlide();
        } else if (selectedWebProjectIndex !== null) {
          nextWebSlide();
        }
      }

      if (event.key === "ArrowLeft") {
        if (isZoomOpen) {
          prevSlide();
        } else if (selectedWebProjectIndex !== null) {
          prevWebSlide();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isZoomOpen, selectedWebProjectIndex]);

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

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* BG Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-[var(--color-primary)]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase animate-fade-in">
            Capstone Highlight
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)] ">
            Our latest major build:
            <span className="font-serif italic font-normal text-white"> {" "}TRASHURE.
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
            className="relative overflow-hidden min-h-[240px] md:min-h-[280px] flex items-center justify-center p-0 bg-gradient-to-b from-[var(--color-surface)]/80 to-[var(--color-background)]/70"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <button
              type="button"
              onClick={() => setIsZoomOpen(true)}
              className="w-full h-full cursor-zoom-in"
              aria-label={`Open ${capstoneProject.title} in full screen`}
            >
              <img
                src={capstoneProject.screenshots[activeSlide]}
                alt={`${capstoneProject.title} screenshot ${activeSlide + 1}`}
                className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105"
              />
            </button>

            <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />

            <div className="absolute left-4 bottom-4 px-3 py-1.5 rounded-full glass_strong text-xs font-medium text-white">
              Screenshot {activeSlide + 1} / {capstoneProject.screenshots.length}
            </div>

            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-[var(--color-primary)] hover:text-white transition-all"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-[var(--color-primary)] hover:text-white transition-all"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <div>
              <div className="flex items-start justify-between gap-4 flex-nowrap">
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors md:max-w-[62%]">
                  {capstoneProject.title}
                </h3>

                <div className="flex gap-3 flex-nowrap whitespace-nowrap shrink-0 md:max-w-[38%]">
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

              <p className="text-sm md:text-base text-[var(--color-muted-foreground)] mt-3 leading-relaxed">
                {capstoneProject.abstract}
              </p>
            </div>

            <div className="space-y-3">
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

            <div className="space-y-3">
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

        <div className="mt-24">
          <div className="text-center mx-auto max-w-3xl mb-12">
            <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase animate-fade-in">
              UI/UX Category
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-[var(--color-secondary-foreground)]"><span className="font-cursive text-white italic">Web Design  </span>
               Showcase
            </h3>
            <p className="text-[var(--color-muted-foreground)]">
              A curated set of my web design projects from latest to oldest,
              including system dashboards, kiosk flows, and platform concepts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {webDesignProjects.map((project, idx) => (
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
              >
                <button
                  type="button"
                  onClick={() => openWebProject(idx)}
                  className="w-full text-left"
                  aria-label={`Open ${project.title} preview`}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.screenshots[webPreviewSlides[idx]]}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full glass_strong text-xs text-white">
                      {webPreviewSlides[idx] + 1} / {project.screenshots.length}
                    </span>
                  </div>
                </button>

                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-lg md:text-xl font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-xs md:text-sm text-[var(--color-muted-foreground)] shrink-0"> <FiCalendar className="w-3.5 h-3.5 inline-block mr-2 justify-align" />
                      {project.period}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-muted-foreground)] mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Fullscreen Viewer */}
        {isZoomOpen && (
          <div
            className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm flex items-start justify-center pt-24 md:pt-28 px-4 pb-6"
            onClick={() => setIsZoomOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsZoomOpen(false)}
              className="absolute top-5 right-5 p-3 rounded-full glass_strong hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-all duration-500"
              aria-label="Close screenshot viewer"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                prevSlide();
              }}
              className="absolute left-5 top-1/2 -translate-y-1/2 p-3 rounded-full glass_strong hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-all duration-500"
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
              className="absolute right-5 top-1/2 -translate-y-1/2 p-3 rounded-full glass_strong hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-all duration-500"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              className="relative w-full max-w-6xl max-h-[88vh] flex flex-col items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={capstoneProject.screenshots[activeSlide]}
                alt={`${capstoneProject.title} screenshot ${activeSlide + 1}`}
                className="max-w-full max-h-[74vh] object-contain rounded-2xl shadow-2xl"
              />
              <p className="mt-4 text-sm text-white/80">
                Screenshot {activeSlide + 1} of {capstoneProject.screenshots.length}
              </p>
            </div>
          </div>
        )}

        {selectedWebProjectIndex !== null && (
          <div
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-start justify-center pt-24 md:pt-28 px-4 pb-6"
            onClick={closeWebProject}
          >
            <button
              type="button"
              onClick={closeWebProject}
              className="absolute top-5 right-5 p-3 rounded-full glass_strong hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-all duration-500"
              aria-label="Close web design viewer"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                prevWebSlide();
              }}
              className="absolute left-5 top-1/2 -translate-y-1/2 p-3 rounded-full glass_strong hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-all duration-500"
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
              className="absolute right-5 top-1/2 -translate-y-1/2 p-3 rounded-full glass_strong hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-all duration-500"
              aria-label="Next frame"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              className="relative w-full max-w-[92vw] max-h-[88vh] flex flex-col items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={webDesignProjects[selectedWebProjectIndex].screenshots[activeWebSlide]}
                alt={`${webDesignProjects[selectedWebProjectIndex].title} frame ${activeWebSlide + 1}`}
                className="max-w-full max-h-[74vh] object-contain rounded-2xl shadow-2xl"
              />
              <p className="mt-4 text-sm text-white/80 text-center">
                {webDesignProjects[selectedWebProjectIndex].title} • Frame {activeWebSlide + 1} of {webDesignProjects[selectedWebProjectIndex].screenshots.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};