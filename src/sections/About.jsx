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
                        I’m an aspiring web developer with a passion for seamless user experiences and visually stunning interfaces. While I am currently building my hands-on coding fluency in HTML, CSS, and JavaScript, I bring a strong understanding of structural logic and design principles to the table. I love the process of figuring out how things work behind the scenes and am dedicated to continuously learning how to translate that logic into captivating web applications.
                    </p>
                    <p>
                        Design is a huge part of my journey. I have a keen eye for aesthetics and a deep appreciation for the art of crafting beautiful, user-friendly interfaces. I am committed to honing my design skills and creating visually stunning websites that not only look great but also provide an intuitive and enjoyable user experience.
                    </p>
                    <p>
                        I am excited to continue my growth as a web developer and designer, and I am eager to contribute my creativity, problem-solving skills, and passion for learning to the world of web development. With a strong foundation in design and a growing proficiency in coding, I am confident that I can create engaging and impactful web experiences that leave a lasting impression on users.
                    </p>

                </div>

                <div className="glass rounded-2xl p-8 glow-border animate-fade-in animation-delay-400">
                    <p className="text-md font-sm italic text-[var(--color-foreground)]"> 
                        My mission is to create visually stunning and user-friendly websites that not only look great but also provide an intuitive and enjoyable user experience. I am committed to honing my design skills and continuously learning how to translate my understanding of structural logic into captivating web applications. With a strong foundation in design and a growing proficiency in coding, I am confident that I can create engaging and impactful web experiences that leave a lasting impression on users.
                    </p>
                </div>
            </div>

            {/*Right Column*/}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div 
                            key={idx} 
                            className="glass rounded-xl p-6 animate-fade-in"
                            style={{animationDelay: '${(idx + 1) * 100}ms'}}>
                                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 hover:bg-[var(--color-primary)]/20">
                                    <item.Icon className="w-6 h-6 text-[var(--color-primary)]"/>
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