import { DiPhotoshop } from "react-icons/di";
import { FaCode, FaFigma } from "react-icons/fa";

const highlights = [
    {
        Icon: FaCode,
        title: "Frontend Development",
        description: "Creating responsive and interactive user interfaces."
    },
    {
        Icon: DiPhotoshop,
        title: "Quality Design",
        description: "Creating visually appealing and effective designs."
    },
    {
        Icon: FaFigma,
        title: "UI/UX Design",
        description: "Designing intuitive and user-friendly interfaces."
    },
    {
        Icon: FaCode,
        title: "Frontend Development",
        description: "Creating responsive and interactive user interfaces."
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase">
                                About Me</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
                            Building the future,
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                one component at a time.
                            </span>
                        </h2>

                        <div className="space-y-4 text-[var(--color-muted-foreground)] animate-fade-in animate-delay-200">
                            <p>
                                I’m an aspiring web developer with a strong foundation in design and logic. I am currently in the exciting phase of learning how to code, taking it one step at a time with HTML, CSS, and JavaScript to eventually bring my ideas to life.</p>
                            <p>
                                Design is the core of everything I build. I have a relentless eye for aesthetics and a drive to craft visually stunning, highly intuitive interfaces where every pixel serves a purpose.                    </p>
                            <p>
                                I’m excited to keep growing as a web developer and designer. By combining my strong eye for design with my growing coding skills, my goal is to build web experiences that are both beautiful and easy to use.                    </p>

                        </div>

                        <div className="glass rounded-2xl p-8 glow-border animate-fade-in animation-delay-400">
                            <p className="text-md font-sm italic text-[var(--color-foreground)]">
                                My mission is to design and develop visually stunning, user-centered web applications by seamlessly merging intuitive interfaces with clean structural logic.                    </p>
                        </div>
                    </div>

                    {/*Right Column*/}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass rounded-xl p-6 animate-fade-in"
                                style={{ animationDelay: '${(idx + 1) * 100}ms' }}>
                                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 hover:bg-[var(--color-primary)]/20">
                                    <item.Icon className="w-6 h-6 text-[var(--color-primary)]" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-[var(--color-muted-foreground)]">{item.description}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>);
};