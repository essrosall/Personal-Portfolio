import {
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const badges = [
  {
    title: "Network Defense",
    date: "March 22, 2026",
    issuer: "CISCO",
    image: "/public/badges/DEF.png",
    credly: "https://www.credly.com/badges/c60a0b9b-aed1-4e6c-be94-06c1e501c0df/public_url",
  },
  {
    title: "AI Fundamentals with IBM SkillsBuild",
    date: "March 13, 2026",
    issuer: "IBM",
    image: "/public/badges/AI.png",
    credly: "https://www.credly.com/badges/081690b6-d900-4c7d-840a-22ebf7dd4a78/public_url",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    date: "March 13, 2026",
    issuer: "IBM",
    image: "/public/badges/IBM.png",
    credly: "https://www.credly.com/badges/7eb1e9d0-67ae-4728-8847-cb81726d4086/public_url",
  },
  {
    title: "Introduction to Data Science",
    date: "February 27, 2026",
    issuer: "CISCO",
    image: "/public/badges/DATSCI.png",
    credly: "https://www.credly.com/badges/660952c8-d299-4b7f-8198-32ca94640497/public_url",
  },
  {
    title: "Introduction to Cybersecurity Badge",
    date: " February 05, 2026",
    issuer: "CISCO",
    image: "/public/badges/CS.png",
    credly: "https://www.credly.com/badges/27b4ea10-dbaf-48ed-a1bc-f6b0822a345d/public_url",
  },
  
];

const certifications = [
  {
    title: "CLOUDSTART 2026: AWS FULL STACK HANDS-ON WORKSHOP",
    description: "Amazon Web Service Learning Club - Comprehensive AWS full stack training and hands-on workshop experience.",
    date: "February 9, 2026",
    image: "certificates/AWS.jpg",
    credly: "#",
  },
  {
    title: "IGNITE SUMMIT 2023",
    description: "Navigating the Digital Frontier: Trends, Innovation, and Cybersecurity in the Modern IT Landscape - QCU.",
    date: "December 5, 2023",
    image: "/certificates/SUMMIT.png",
    credly: "#",
  },
  {
    title: "Cybersecurity in Education",
    description: "Nephila Technology Inc. - Safeguarding Learner's Data in Academic Integrity.",
    date: "October 9, 2025",
    image: "/certificates/NEPHILA.jpg",
    credly: "#",
  },
  {
    title: "FROM IDEA TO APP",
    description: "National College of Business and Arts - Fairview Campus. Demystifying Web and Digital Marketing.",
    date: "September 21, 2025",
    image: "/certificates/NCBA.jpg",
    credly: "#",
  },
  {
    title: "Your Online Blueprint",
    description: "Quezon City University - How to Protect Digital Privacy and Security.",
    date: "December 2, 2024",
    image: "/certificates/YOB.jpg",
    credly: "#",
  },
  {
    title: "Introduction to Data Science",
    description: "CISCO Networking Academy - Core data science fundamentals and practical applications.",
    date: "February 27, 2026",
    image: "/certificates/INTDATSCI.jpg",
    credly: "https://www.credly.com/badges/660952c8-d299-4b7f-8198-32ca94640497/public_url",
  },
  {
    title: "Network Defense",
    description: "CISCO Networking Academy - Advanced network security and defense mechanisms.",
    date: "March 22, 2026",
    image: "/certificates/NETDEF.jpg",
    credly: "https://www.credly.com/badges/c60a0b9b-aed1-4e6c-be94-06c1e501c0df/public_url",
  },
  {
    title: "Introduction to Cyber Security",
    description: "CISCO Networking Academy - Foundational cybersecurity principles and best practices.",
    date: "February 5, 2026",
    image: "/certificates/INTCS.jpg",
    credly: "https://www.credly.com/badges/27b4ea10-dbaf-48ed-a1bc-f6b0822a345d/public_url",
  },
  {
    title: "AI Fundamentals with IBM SkillsBuild",
    description: "CISCO IBM SkillsBuild - Essential artificial intelligence concepts and practical AI applications.",
    date: "March 13, 2026",
    image: "/certificates/AIFUND.jpg",
    credly: "https://www.credly.com/badges/081690b6-d900-4c7d-840a-22ebf7dd4a78/public_url",
  },
];

export const CertnBadge = () => {
  const [activeCertificate, setActiveCertificate] = useState(0);
  const [isCertificateZoomOpen, setIsCertificateZoomOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(0);
  const isBadgeCountDivisibleByThree = badges.length % 3 === 0;

  const closeCertificateViewer = () => {
    setIsCertificateZoomOpen(false);
  };

  const nextCertificate = () => {
    setActiveCertificate((prev) => (prev + 1) % certifications.length);
  };

  const prevCertificate = () => {
    setActiveCertificate(
      (prev) => (prev - 1 + certifications.length) % certifications.length
    );
  };

  useEffect(() => {
    if (isCertificateZoomOpen) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveCertificate((prev) => (prev + 1) % certifications.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [isCertificateZoomOpen]);

  useEffect(() => {
    if (!isCertificateZoomOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeCertificateViewer();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isCertificateZoomOpen]);

  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />
      <div className="absolute top-1/4 right-[-3rem] w-96 h-96 bg-[var(--color-primary)]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[var(--color-primary)]/7 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 right-1/3 w-80 h-80 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-[var(--color-secondary-foreground)] 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            Certifications and Badges
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-[var(--color-secondary-foreground)]"
          >
            Professional learning
            <span
              className="font-cursive italic 
            font-normal text-white"
            >
              {" "}milestones.
            </span>
          </h2>
          <p className="text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
            A curated showcase of certificates and badges that reflect my growth
            in UI/UX design and frontend development.
          </p>
        </div>

        {/* Badges Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-8 animate-fade-in animation-delay-200">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-secondary-foreground)]">
              Industry Badges
            </h3>
            <p className="text-[var(--color-muted-foreground)] mt-2">
              Cisco and IBM achievement badges with acquisition dates.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {badges.map((item, idx) => (
              <article
                key={idx}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              >
                <div className="relative overflow-hidden aspect-square flex items-center justify-center p-5 bg-gradient-to-b from-[var(--color-surface)]/70 to-[var(--color-background)]/70">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full max-w-[250px] max-h-[250px] object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/65 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full glass_strong text-xs font-medium text-white">
                    <Award className="w-4 h-4 text-[var(--color-primary)]" />
                    {item.issuer} Badge
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-base md:text-lg font-semibold group-hover:text-[var(--color-primary)] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[var(--color-secondary-foreground)]">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <a
                    href={item.credly}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg glass hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all text-sm"
                  >
                    View Proof
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}

            {!isBadgeCountDivisibleByThree && (
              <article className="glass rounded-2xl p-6 flex items-center justify-center text-center min-h-[220px] animate-fade-in">
                <p className="text-[var(--color-muted-foreground)] text-sm md:text-base">
                  Working on my next badge... currently grinding XP like it is a
                  side quest.
                </p>
              </article>
            )}
          </div>

          {isBadgeCountDivisibleByThree && (
            <div className="mt-6 text-center animate-fade-in">
              <p className="text-[var(--color-muted-foreground)] text-sm md:text-base">
                Working on my next badge... currently grinding XP like it is a
                side quest.
              </p>
            </div>
          )}
        </div>

        {/* Certification and Badge Cards */}
        <div className="text-center mb-8 animate-fade-in animation-delay-200">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-secondary-foreground)]">
            Professional Certificates
          </h3>
          <p className="text-[var(--color-muted-foreground)] mt-2">
            Course and program certifications that validate my technical and design skills.
          </p>
        </div>

        <article className="group glass rounded-2xl overflow-hidden animate-fade-in animation-delay-300 max-w-5xl mx-auto">
          <div className="relative overflow-hidden w-full h-[360px] md:h-[560px] lg:h-[640px] bg-gradient-to-b from-[var(--color-surface)]/85 to-[var(--color-background)]/75">
            <button
              type="button"
              onClick={() => {
                setSelectedCertificate(activeCertificate);
                setIsCertificateZoomOpen(true);
              }}
              className="w-full h-full cursor-zoom-in"
              aria-label={`Open ${certifications[activeCertificate].title} in full screen`}
            >
              <img
                src={certifications[activeCertificate].image}
                alt={certifications[activeCertificate].title}
                className="w-full h-full object-contain p-2 md:p-3 transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </button>
            <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />

            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full glass_strong text-xs font-medium text-white">
              <Award className="w-4 h-4 text-[var(--color-primary)]" />
              Certified
            </div>

            <button
              type="button"
              onClick={prevCertificate}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-[var(--color-primary)] hover:text-white transition-all"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextCertificate}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-[var(--color-primary)] hover:text-white transition-all"
              aria-label="Next certificate"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-4">
            <h4 className="text-xl font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
              {certifications[activeCertificate].title}
            </h4>
            <p className="text-sm text-[var(--color-muted-foreground)]">
              {certifications[activeCertificate].description}
            </p>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-[var(--color-secondary-foreground)]">
                <Calendar className="w-4 h-4" />
                <span>{certifications[activeCertificate].date}</span>
              </div>
              {certifications[activeCertificate].credly !== "#" && (
                <a
                  href={certifications[activeCertificate].credly}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg glass hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all text-sm"
                >
                  View Proof
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="flex items-center justify-center gap-2 pt-1">
              {certifications.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveCertificate(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeCertificate
                      ? "w-8 bg-[var(--color-primary)]"
                      : "w-2 bg-[var(--color-muted-foreground)]/40 hover:bg-[var(--color-muted-foreground)]/70"
                  }`}
                  aria-label={`Go to certificate ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </article>

        <div className="text-center mt-8 animate-fade-in animation-delay-300">
          <p className="text-sm text-[var(--color-muted-foreground)]">
            These are my <span className="text-white">badges</span> and
            <span className="text-white"> certifications </span>
            afor the past years and months.
          </p>
        </div>
      </div>

      {isCertificateZoomOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 pt-24 md:pt-28"
          onClick={closeCertificateViewer}
        >
          <button
            type="button"
            onClick={closeCertificateViewer}
            className="absolute top-5 right-5 p-3 rounded-full glass_strong hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-all"
            aria-label="Close certificate viewer"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={certifications[selectedCertificate].image}
              alt={certifications[selectedCertificate].title}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};