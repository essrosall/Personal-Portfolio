import { X } from "lucide-react";
import { FiCalendar } from "react-icons/fi";

const experience = [
    {
        period: "September 2025 - Present",
        role: "IT Support Intern",
        company: "Concentrix Philippines - ETON",
        description: "Maintained optimal operational performance in a fast-paced BPO environment by configuring hardware, troubleshooting network connectivity, and efficiently resolving IT support tickets.",
        toolsntechnologies: ["Active Directory(AD)", "BigFix", "SCCM", "SolvNow", "Workday"],
        current: true,
        logo: "/logo/concentrix.jpg",
    },
    {
        period: "September 2023 - September 2024",
        role: "Layout Artist & Graphic Designer",
        company: "TAPP.Ph Printing Services",
        description: "I collaborated directly with clients to design and deliver visually appealing print apparel, digital assets, and website layouts under tight deadlines.",
        toolsntechnologies: ["Adobe Photoshop", "Adobe Illustrator", "MainTop DTP", "DTF Software"],
        current: false,
        logo: "/logo/tapp.jpg",
    },
];

export const Experience = () => {
    return (
        <section
            id="experience"
            className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"
            />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"
            />
            <div className="absolute top-1/3 right-[-2rem] w-80 h-80 bg-[var(--color-primary)]/6 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/2 left-0 w-72 h-72 bg-[var(--color-primary)]/7 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/*Section Header*/}
                <div className="max-w-3xl mb-16">
                    <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
                        Experience that <span className="font-serif italic font-normal text-white">
                            speaks volumes.</span>
                    </h2>
                    <p
                        className="text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
                        A timeline of my professional journey, transitioning from a graphic artist and IT support intern into a passionate web developer focused on UI/UX design.

                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-primary)]/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experience.map((exp, idx) => (
                            <div
                                key={idx}
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                            >

                                {/* Reverted back to the original small Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-4.5 h-4.5 bg-[var(--color-primary)] rounded-full -translate-x-1/2 ring-1 ring-background z-10">
                                    {exp.current && (
                                        <span className="absolute inset-0 rounded-full bg-[var(--color-primary)] animate-ping opacity-75" />
                                    )}
                                </div>

                                {/* Content of Experience */}
                                <div
                                    // Reverted padding back to pl-8 for mobile
                                    className={`pl-8 md:pl-0 ${idx % 2 === 0
                                            ? "md:pr-16 md:text-right"
                                            : "md:col-start-2 md:pl-16"
                                        }`}
                                >
                                    <div
                                        className={`glass p-6 rounded-2xl border border-[var(--color-primary)]/30 hover:border-[var(--color-primary)]/50 transition-all duration-1000`}
                                    >
                                        <span className="text-sm text-[var(--color-primary)] font-medium block mb-4"> <FiCalendar className="w-4 h-4 inline-block mr-2 justify-align text-[var(--color-primary)]" />
                                            {exp.period}
                                        </span>
                                        
                                        {/*Logo*/}
                                        <div className={`flex items-center gap-4 mb-4 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                            
                                            {/* The Logo Container (Now rounded-lg) */}
                                            <div className="w-18 h-18 shrink-0 glass p-1 rounded-full border border-[var(--color-primary)]/30">
                                                <img 
                                                    src={exp.logo} 
                                                    alt={`${exp.company} logo`} 
                                                    className="w-full h-full object-cover rounded-full bg-transparent" 
                                                />
                                            </div>

                                            {/* Title and Company Text */}
                                            <div>
                                                <h3 className="text-xl font-semibold leading-tight">{exp.role}</h3>
                                                <p className="text-sm text-[var(--color-muted-foreground)] mt-1">{exp.company}</p>
                                            </div>

                                        </div>

                                        <p className="text-sm text-[var(--color-muted-foreground)] mt-4">
                                            {exp.description}
                                        </p>
                                        
                                        <div
                                            className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""
                                                }`}
                                        >
                                            {exp.toolsntechnologies.map((toolntech, toolntechIdx) => (
                                                <span
                                                    key={toolntechIdx}
                                                    className="px-3 py-1 bg-[var(--color-surface)] text-xs rounded-lg text-[var(--color-muted-foreground)]"
                                                >
                                                    {toolntech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};