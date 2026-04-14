import { DiPhotoshop } from "react-icons/di";
import { FaCode, FaFigma } from "react-icons/fa";

const highlights = [
    { Icon: FaCode,
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces." 
    },
    { Icon: DiPhotoshop,
    title: "Quality Design",
    description: "Creating visually appealing and effective designs." 
    },
    { Icon: FaFigma,
    title: "UI/UX Design",
    description: "Designing intuitive and user-friendly interfaces." 
    },
    { Icon: FaCode,
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces." 
    },
];

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/*Left Column*/}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">Building the future, </h2>
                <span className="font-serif italic font-normal text-white">one component at a time.</span>
            </div>
        </div>
    </section>);
};