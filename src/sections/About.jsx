import { DiPhotoshop } from "react-icons/di";
import { FaCode, FaFigma } from "react-icons/fa";

const highlights = [
    {
        Icon: FaCode,
        title: "Frontend Development",
        description: "Building responsive interfaces with clean structure and practical motion.",
    },
    {
        Icon: FaFigma,
        title: "UI/UX Design",
        description: "Designing clear user flows, polished layouts, and easier decision-making.",
    },
    {
        Icon: DiPhotoshop,
        title: "Visual Craft",
        description: "Refining typography, spacing, and contrast so the interface feels intentional.",
    },
    {
        Icon: FaCode,
        title: "Learning Mindset",
        description: "Always learning, iterating, and trying not to let the browser win.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/3 left-[-3rem] w-80 h-80 bg-[var(--color-primary)]/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[var(--color-primary)]/6 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-[var(--color-primary)]/7 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 max-w-2xl">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[var(--color-secondary-foreground)] text-xs font-semibold tracking-[0.2em] uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-[var(--color-foreground)]">
                            Building interfaces that feel calm,
                            <span className="font-serif italic font-normal text-[var(--color-secondary-foreground)]">
                                {" "}look sharp, and still have a little personality.
                            </span>
                        </h2>

                        <div className="space-y-4 text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200 leading-relaxed">
                            <p>
                                I’m an aspiring web developer with a strong foundation in design and logic. Right now I’m sharpening my skills in HTML, CSS, and JavaScript, turning ideas into interfaces that are practical, polished, and easy to use.
                            </p>
                            <p>
                                Design is still the compass for everything I build. I care about spacing, hierarchy, and clarity, because good UI should feel obvious without looking boring.
                            </p>
                            <p>
                                My goal is simple: make experiences that are useful first, attractive second, and memorable just enough that people do not immediately forget where they clicked.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-8 border border-[var(--color-border)]/60 shadow-[0_18px_50px_rgba(15,20,32,0.12)] animate-fade-in animation-delay-400">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]" />
                                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-secondary-foreground)] font-semibold">
                                    Mission
                                </span>
                            </div>
                            <p className="text-md italic text-[var(--color-foreground)] leading-relaxed">
                                "My mission is to design and develop web experiences that are clean, user-centered, and just witty enough to make the interface feel human instead of corporate wallpaper."
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="group glass rounded-2xl p-6 border border-[var(--color-border)]/50 hover:border-[var(--color-primary)]/30 transition-all duration-300 animate-fade-in shadow-[0_10px_30px_rgba(15,20,32,0.06)]"
                                style={{ animationDelay: `${(idx + 1) * 120}ms` }}
                            >
                                <div className="flex items-start justify-between gap-4 mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center group-hover:bg-[var(--color-primary)]/15 transition-colors">
                                        <item.Icon className="w-6 h-6 text-[var(--color-primary)]" />
                                    </div>
                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-foreground)]">
                                        0{idx + 1}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};