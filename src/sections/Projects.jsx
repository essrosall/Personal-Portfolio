import {FiArrowUpRight, FiGithub } from "react-icons/fi";
import { AnimatedBorderButton } from "@/Components/AnimatedBorderButton";

const projects = [
  {
    title: "Leandro Locsin Desktop SMS",
    description:
      "This sleek, dark-mode School Management System balances a strong brand identity with a clean, user-centered interface. It features a minimalist login flow and an intuitive dashboard layout designed to make managing school data both efficient and visually engaging.",
    image: "/projects/Project1.png",
    tags: ["Figma"],
    link: "#",
    github: "#",
  },
  {
    title: "Leandro Locsin Website",
    description:
      "A modern educational landing page with structured program highlights, dynamic campus news, and an intuitive user interface",
    image: "/projects/Project2.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
        {/*BG Glows*/}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          {/*Section Header*/}
          <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)] ">Projects that
            <span className="font-serif italic font-normal text-white"> {" "} make an impact.
          </span>
          </h2>
            <p className="text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
              A showcase of my work across UI/UX design and frontend development. Inside, you will find a mix of pure Figma prototypes focused on user-centered visual design, alongside coded web and desktop applications that bring those creative concepts to life.
            </p>
          </div>

          {/*Project Grid*/}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1">
                {/*Image*/}
              
              <div className="relative overflow-hidden aspect-video">
              <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"/>
               <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />

                {/*Overlay Links*/}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={project.link}
                    className="p-3 rounded-lg glass hover:bg-[var(--color-primary)] hover:text[var(--color-primary-foreground)] transition-all"
                  >
                    <FiArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-lg glass hover:bg-[var(--color-primary)] hover:text[var(--color-primary-foreground)] transition-all"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/*Content of Projets*/}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-[var(--color-primary)] transisitons-color">{project.title}</h3>
                  <FiArrowUpRight  className="w-5 h-5 
                  text-[var(--color-muted-foreground)] group-hover:text-[var(--color-primary)]
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"/>
                </div>
                <p className="text-[var(--color-muted-foreground)] text-sm">
                  {project.description}</p>
              
              <div>
                {project.tags.map((tag, tagIdx) => (
                  <span 
                  key={tagIdx}
                  className="px-4 py-1.5 rounded-full bg-[var(--color-surface)] text-xs font-medium border border-border/50 text-[var(--color-muted-foreground)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)] transitions-all duration-400">{tag}</span>

                ))}
                </div>
              </div>
            </div>
            ))}
          </div>
          {/*View All the CTA*/}
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton>
              View All Projects
              <FiArrowUpRight className="w-5 g-5"/>
            </AnimatedBorderButton>
          </div>
        </div>
    </section>
  );
};