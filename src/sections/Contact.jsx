import { useState } from "react";
import { LuPhone, LuMail, LuMapPin, LuSend, LuCircleAlert, LuCircleCheck } from "react-icons/lu";
import { Button } from "@/Components/Button";
import emailjs from "@emailjs/browser";

const contactInfo = [
    {
        icon: LuMail,
        label: "Email",
        value: "rosales.johnrey.agpalza@gmail.com"
    },
    {
        icon: LuPhone,
        label: "Phone",
        value: "+63 993 6768 737"
    },
    {
        icon: LuMapPin,
        label: "Location",
        value: "Quezon City, Metro Manila, Philippines"
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
        <section id="contact" className="py-16 sm:py-24 md:py-32 overflow-hidden relative">
            <div className="absolute top-1/3 left-[-4rem] w-96 h-96 bg-[var(--color-primary)]/7 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-[-2rem] w-80 h-80 bg-[var(--color-primary)]/6 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[var(--color-secondary-foreground)] text-xs font-semibold tracking-[0.2em] uppercase animate-fade-in">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-5 sm:mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto w-full items-stretch">

                    {/* RIGHT COLUMN: Contact Form */}
                    <div className="glass p-5 sm:p-8 rounded-3xl border border-[var(--color-primary)]/30 animate-fade-in animation-delay-400 w-full order-2 lg:order-2">
                        <h3 className="text-xl font-semibold mb-6">
                            Send Me a Message
                        </h3>
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

                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                    submitStatus.type ? "max-h-24 opacity-100 mt-4" : "max-h-0 opacity-0"
                                }`}
                            >
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
                            </div>
                        </form>
                    </div>
                    {/* Contact Info */}
                    <div className="space-y-6 animate-fade-in animation-delay-400 w-full order-1 lg:order-1">
                        <div className="glass rounded-3xl p-5 sm:p-8 w-full border border-[var(--color-primary)]/30">
                            <h3 className="text-xl font-semibold mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((item, i) => (
                                    <div
                                        key={i}
                                        className="glass grid grid-cols-[3rem_1fr] items-start gap-4 p-4 rounded-xl border border-[var(--color-primary)]/15"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                                            <item.icon className="w-5 h-5 shrink-0 text-[var(--color-primary)]" />
                                        </div>
                                        <div className="min-w-0 leading-tight">
                                            <div className="text-xs sm:text-sm font-medium uppercase tracking-wide text-[var(--color-muted-foreground)]">
                                                {item.label}
                                            </div>
                                            <div className="mt-1 font-medium break-words text-[15px] sm:text-base text-[var(--color-foreground)]">
                                                {item.value}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hidden lg:block glass rounded-3xl p-5 sm:p-8 border border-[var(--color-primary)]/30 w-full">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="font-medium">Currently Available</span>
                            </div>
                            <p className="text-[var(--color-muted-foreground)] text-sm">
                                I'm currently open to new opportunities and exciting design projects. Whether you need a dedicated UI/UX designer to join your team or a freelance creative collaborator, let's talk!
                            </p>
                        </div>
                    </div>

                    {/* Currently Available - Mobile Only (Below Form) */}
                    <div className="lg:hidden glass rounded-3xl p-5 sm:p-8 border border-[var(--color-primary)]/30 w-full order-3">
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
        </section>
    );
};