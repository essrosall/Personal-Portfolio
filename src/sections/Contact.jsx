import { useState } from "react";
import { LuPhone, LuMail, LuMapPin, LuSend } from "react-icons/lu";
import { Button } from "@/Components/Button";

const contactInfo = [{
    icon: LuMail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:rosales.johnrey.agpalza@gmail.com"
},
{
    icon: LuPhone,
    label: "Phone",
    value: "+63 9XX XXX XXXX",
    href: "tel:+639936768737"
},
{
    icon: LuMapPin,
    label: "Location",
    value: "Quezon City, Metro Manila, Philippines",
    href: "#"
},
]

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

    };

    return (
    <section id="contact" className="py-32 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[var(--color-highlight)]/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Get In Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
                    Let's build{" "}
                    <span className="font-serif italic font-normal text-white">
                        something great.
                    </span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
                    Have a vision you want to bring to life? I’d love to hear about it. Send me a message, and let’s discuss how we can craft a beautiful, user-centered design for your next project.
                </p>
            </div>

            {/*Contact Form*/}
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="glass p-8 rounded-3xl border border-[var(--color-primary)]/30 animate-fade-in animation-delay-300">
                    <form className="space-y-6">

                        {/*NAME*/}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                placeholder="e.g., Alex Smith"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                className="w-full px-4 py-3 bg-[var(--color-surface)] rounded-xl border border-[var(--color-muted-foreground)]/30 hover:border-white/50 focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all" />
                        </div>

                        {/*EMAIL*/}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email</label>
                            <input
                                type="email"
                                required
                                placeholder="hello@example.com"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                className="w-full px-4 py-3 bg-[var(--color-surface)] rounded-xl border border-[var(--color-muted-foreground)]/30 hover:border-white/50 focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all" />
                        </div>

                        {/*MESSAGE*/}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message</label>
                            <textarea
                                rows={5}
                                type="text"
                                placeholder="How can I help bring your vision to life?"
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                className="w-full px-4 py-3 bg-[var(--color-surface)] rounded-xl border border-[var(--color-muted-foreground)]/30 hover:border-white/50 focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all resize-none" />
                        </div>

                        <Button className="w-full" type="submit" size="md">
                            Send Message
                            <LuSend />
                        </Button>
                    </form>

                </div>
            </div>


        </div>
    </section>
    );
};