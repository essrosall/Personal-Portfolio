import { useState } from "react";
import { LuPhone, LuMail, LuMapPin, LuSend, LuCircleAlert, LuCircleCheck } from "react-icons/lu";
import { Button } from "@/Components/Button";
import emailjs from "@emailjs/browser";

const contactInfo = [
    {
        icon: LuMail,
        label: "Email",
        value: "rosales.johnrey.agpalza@gmail.com",
        href: "mailto:rosales.johnrey.agpalza@gmail.com"
    },
    {
        icon: LuPhone,
        label: "Phone",
        value: "+63 993 6768 737",
        href: "tel:+639936768737"
    },
    {
        icon: LuMapPin,
        label: "Location",
        value: "Quezon City, Metro Manila, Philippines",
        href: "#"
    },
];

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });

        const currentTime = new Date().toLocaleString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS Configuration is missing. Please check your .env variables."
                );
            }

            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                time: currentTime,
            }, publicKey);

            setSubmitStatus({
                type: "Success",
                message: "Message sent successfully! I'll get back to you soon.",
            });
            setFormData({ name: "", email: "", message: "" });

        } catch (error) {
            console.error("EmailJS error: ", error);
            setSubmitStatus({
                type: "error",
                message: error?.text || "Failed to send message. Please try again later."
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-32 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
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

                {/* Contact Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* RIGHT COLUMN: Contact Form */}
                    <div className="glass p-8 rounded-3xl border border-[var(--color-primary)]/30 animate-fade-in animation-delay-400">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* NAME */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    placeholder="e.g., Alex Smith"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-[var(--color-surface)] rounded-xl border border-[var(--color-muted-foreground)]/30 hover:border-white/50 focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all text-white"
                                />
                            </div>

                            {/* EMAIL */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    placeholder="hello@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-[var(--color-surface)] rounded-xl border border-[var(--color-muted-foreground)]/30 hover:border-white/50 focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all text-white"
                                />
                            </div>

                            {/* MESSAGE */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    placeholder="How can I help bring your vision to life?"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-[var(--color-surface)] rounded-xl border border-[var(--color-muted-foreground)]/30 hover:border-white/50 focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all resize-none text-white"
                                />
                            </div>

                            <Button className="w-full flex items-center justify-center gap-2" type="submit" size="md" disabled={isLoading}>
                                {isLoading ? (
                                    <>Sending...</>
                                ) : (
                                    <>Send Message <LuSend className="w-5 h-5" /></>
                                )}
                            </Button>

                            {submitStatus.type && (
                                <div
                                    className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "Success"
                                            ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                            : "bg-red-500/10 border border-red-500/20 text-red-400"
                                        }`}
                                >
                                    {submitStatus.type === "Success" ? (
                                        <LuCircleCheck className="w-5 h-5 flex-shrink-0" />
                                    ) : (
                                        <LuCircleAlert className="w-5 h-5 flex-shrink-0" />
                                    )}
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>
                    {/* Contact Info */}
                    <div className="space-y-6 animate-fade-in animation-delay-400">
                        <div className="glass rounded-3xl p-8">
                            <h3 className="text-xl font-semibold mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.href}
                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-[var(--color-surface)] transition-colors group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center group-hover:bg-[var(--color-primary)]/20 transition-colors">
                                            <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-[var(--color-smuted-foreground)]">
                                                {item.label}
                                            </div>
                                            <div className="font-medium">{item.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="glass rounded-3xl p-8 border border-[var(--color-primary)]/30">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="font-medium">Currently Available</span>
                            </div>
                            <p className="text-[var(--color-muted-foreground)] text-sm">
                                I'm currently open to new opportunities and exciting design projects. Whether you need a dedicated UI/UX designer to join your team or a freelance creative collaborator, let's talk!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};