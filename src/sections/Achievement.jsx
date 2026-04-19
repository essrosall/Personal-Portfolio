import { useEffect, useState } from "react";
import { X, Trophy, Medal } from "lucide-react";

const logoContestAchievements = [
    {
        title: "Bachelor of Science in Computer Science Logo Contest Entry",
        description:
            "My first official contest submission that established my visual identity direction and marked my first footprint in QCU's design scene.",
        period: "2024",
        placement: 1,
        awardImage: "/competition/1.jpg",
        entryImage: "/competition/ACH1.png",
    },
    {
        title: "Bachelor of Science in Information Systems Logo Contest Entry",
        description:
            "A refined concept iteration focused on stronger symbolism and clearer brand storytelling for the university community.",
        period: "2024",
        placement: 2,
        awardImage: "/competition/2.jpg",
        entryImage: "/competition/ACH2.png",
    },
    {
        title: "Bachelor of Science in Information Technology Logo Contest Entry",
        description:
            "A bold and polished final variation that highlights my growth in composition, balance, and meaningful visual communication.",
        period: "2024",
        placement: 3,
        awardImage: "/competition/3.jpg",
        entryImage: "/competition/ACH3.png",
    },
];

const placementBadge = {
    1: {
        Icon: Trophy,
        label: "1st Place",
        className: "text-amber-300 bg-amber-400/10 border border-amber-300/30",
    },
    2: {
        Icon: Medal,
        label: "2nd Place",
        className: "text-slate-300 bg-slate-300/10 border border-slate-300/30",
    },
    3: {
        Icon: Medal,
        label: "3rd Place",
        className: "text-orange-300 bg-orange-400/10 border border-orange-300/30",
    },
};

export const Achievement = () => {
    const [isLogoEntryZoomOpen, setIsLogoEntryZoomOpen] = useState(false);
    const [selectedLogoEntry, setSelectedLogoEntry] = useState(0);

    const openLogoEntryViewer = (index) => {
        setSelectedLogoEntry(index);
        setIsLogoEntryZoomOpen(true);
    };

    const closeLogoEntryViewer = () => {
        setIsLogoEntryZoomOpen(false);
    };

    useEffect(() => {
        if (!isLogoEntryZoomOpen) {
            return undefined;
        }

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                closeLogoEntryViewer();
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isLogoEntryZoomOpen]);

    return (
        <section id="achievements" className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/4 right-[-3rem] w-96 h-96 bg-[var(--color-primary)]/6 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[var(--color-primary)]/7 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[var(--color-secondary-foreground)] text-xs font-semibold tracking-[0.2em] uppercase animate-fade-in">
                        Achievement Spotlight
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
                        QCU logo contest
                        <span className="font-cursive italic font-normal text-white">{" "}footprint.</span>
                    </h2>
                    <p className="text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
                        A showcase of the logo contest entries I created for QCU, highlighting the work I left behind in the university through design and recognition.
                    </p>
                </div>
                <div className="max-w-12xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {logoContestAchievements.map((item, idx) => (
                            <article
                                key={idx}
                                className="group glass rounded-2xl overflow-hidden animate-fade-in"
                            >
                                <div className="relative h-72 md:h-80 overflow-hidden border-b border-white/10 bg-[var(--color-surface)]/35">
                                    <div className="absolute inset-0 z-0">
                                        <img
                                            src={item.awardImage}
                                            alt={`${item.title} award certificate`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="absolute inset-0 z-[1] bg-black/15" />

                                    <button
                                        type="button"
                                        onClick={() => openLogoEntryViewer(idx)}
                                        className="absolute z-20 right-3 sm:right-4 top-[72%] sm:top-[68%] md:top-[64%] -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl overflow-hidden border border-white/20 shadow-xl bg-[var(--color-background)]/90 cursor-zoom-in"
                                        aria-label={`Open ${item.title} logo entry`}
                                    >
                                        <img
                                            src={item.entryImage}
                                            alt={`${item.title} logo entry`}
                                            className="w-full h-full object-contain p-1.5 transition-transform duration-300 ease-out group-hover:scale-105"
                                        />
                                    </button>

                                    <span className="absolute z-10 left-4 top-4 text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full glass_strong text-white">
                                        Award Certificate
                                    </span>
                                </div>

                                <div className="p-5 space-y-3">
                                    <div className="flex items-start justify-between gap-3">
                                        <h4 className="flex-1 min-w-0 text-base md:text-lg font-semibold leading-snug text-[var(--color-foreground)]">
                                            {item.title}
                                        </h4>
                                        {(() => {
                                            const badge = placementBadge[item.placement] ?? placementBadge[3];
                                            const Icon = badge.Icon;

                                            return (
                                                <div className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${badge.className}`}>
                                                    <Icon className="w-3.5 h-3.5" />
                                                    <span>{badge.label}</span>
                                                </div>
                                            );
                                        })()}
                                    </div>
                                    <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {isLogoEntryZoomOpen && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 pt-24 md:pt-28"
                    onClick={closeLogoEntryViewer}
                >
                    <div
                        className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={closeLogoEntryViewer}
                            className="absolute top-3 right-3 md:top-4 md:right-4 p-3 rounded-full glass_strong hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-all z-10"
                            aria-label="Close logo entry viewer"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <img
                            src={logoContestAchievements[selectedLogoEntry].entryImage}
                            alt={logoContestAchievements[selectedLogoEntry].title}
                            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};