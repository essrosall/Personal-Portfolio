const experience = [
    {
    period: "September 2025 - March 2026",
    role: "IT Support",
    company: "Concentrix Philippines - ETON",
    description: "Maintained optimal operational performance in a fast-paced BPO environment by configuring hardware, troubleshooting network connectivity, and efficiently resolving IT support tickets.",
    toolsntechnologies: ["Active Directory(AD)", "BigFix", "SCCM", "SolvNow", "Workday"] ,
    current: "false",
},
    {
    period: "September 2023- September 2024",
    role: "Layout Artist & Graphic Designer",
    company: "TAPP.Ph Printing Services",
    description: "I collaborated directly with clients to design and deliver visually appealing print apparel, digital assets, and website layouts under tight deadlines.",
    toolsntechnologies: ["Adobe Photoshop", "Abode Illustrator", "MainTop DTP", "DTF Software"] ,
    current: "false",
},

];

export const Experience = () => {
    return (
    <section
    id="experience"
    className="py-32 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2" 
    />

    <div className="container mx-auto px-6 relative z-10">
        {/*Section Header*/}
        <div  className="max-w-3xl mb-16">
            <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
                Experience that <span className="font-serif italic font-normal text-white"> speaks volumes.</span>
            </h2>
            <p
            className="text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
                
            </p>
        </div>
    </div>

    </section>)
};