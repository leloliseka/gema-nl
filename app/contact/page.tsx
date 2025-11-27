"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import Link from "next/link";

import ContactAnimation from "@/components/ContactAnimation";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background text-foreground pt-20">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-muted/20 border-b border-border dark:border-white/5">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-12 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-accent/5 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="container relative z-10 px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground dark:text-white mb-6">
                            NEEM <span className="text-accent">CONTACT</span> OP
                        </h1>
                        <div className="text-xl md:text-2xl text-muted-foreground border-l-4 border-accent pl-6 space-y-4">
                            <p>
                                Heeft u een vraag over onze materialen of wilt u een offerte aanvragen?
                                Ons team van specialisten staat voor u klaar.
                            </p>
                            <p>
                                Onderaan deze pagina vindt u de Google routeplanner.
                            </p>
                        </div>
                    </motion.div>

                    {/* Animation Container */}
                    <div className="hidden lg:block h-[400px] w-full relative">
                        <ContactAnimation />
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20">
                <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Contactgegevens</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                        <MapPin className="text-accent" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Adres</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Gema Fast B.V.<br />
                                            Zuiveringweg 50B<br />
                                            8243 PZ Lelystad<br />
                                            Nederland
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                        <Phone className="text-accent" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Telefoon</h3>
                                        <p className="text-muted-foreground mb-2">
                                            Bereikbaar op werkdagen van 08:30 - 17:00
                                        </p>
                                        <a href="tel:+31320241000" className="text-xl font-bold hover:text-accent transition-colors">
                                            +31 (0)320 241 000
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                        <Mail className="text-accent" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">E-mail</h3>
                                        <p className="text-muted-foreground mb-2">
                                            Voor algemene vragen en offertes
                                        </p>
                                        <a href="mailto:info@gema.nl" className="text-xl font-bold hover:text-accent transition-colors">
                                            info@gema.nl
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-muted/30 border border-border dark:border-white/5">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <Clock size={20} className="text-accent" /> Openingstijden
                            </h3>
                            <div className="space-y-2">
                                <div className="flex justify-between py-2 border-b border-white/5">
                                    <span className="text-muted-foreground">Maandag - Vrijdag</span>
                                    <span className="font-mono font-bold">08:30 - 17:00</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-muted-foreground">Zaterdag - Zondag</span>
                                    <span className="font-mono font-bold text-accent">Gesloten</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-card border border-border dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-xl"
                    >
                        <h2 className="text-3xl font-bold mb-6">Stuur een bericht</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Naam</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        autoComplete="name"
                                        className="w-full bg-muted/50 border border-border dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                                        placeholder="Uw naam"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">E-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        className="w-full bg-muted/50 border border-border dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                                        placeholder="uw@email.nl"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Onderwerp</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-muted/50 border border-border dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Waar gaat het over?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Bericht</label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full bg-muted/50 border border-border dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                                    placeholder="Uw bericht..."
                                />
                            </div>

                            <button
                                type="button" // Prevent submit for demo
                                className="w-full py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 transition-all flex items-center justify-center gap-2 group"
                            >
                                VERSTUREN <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Map Section */}
            <section className="relative h-[500px] w-full bg-muted border-t border-border dark:border-white/5">
                <iframe
                    title="Google Maps locatie van Gema Fast B.V."
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.567890123456!2d5.4987654!3d52.5123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c64e6f12345678%3A0x1234567890abcdef!2sZuiveringweg%2050B%2C%208243%20PZ%20Lelystad!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="dark:invert-[0.9] dark:hue-rotate-180"
                />

                {/* Map Overlay Card */}
                <div className="absolute bottom-8 left-4 md:left-8 right-4 md:right-auto bg-card border border-border dark:border-white/10 p-6 rounded-2xl shadow-2xl max-w-sm">
                    <h3 className="font-bold text-lg mb-2">Bezoek ons</h3>
                    <p className="text-muted-foreground mb-4">
                        Zuiveringweg 50B<br />
                        8243 PZ Lelystad
                    </p>
                    <a
                        href="https://www.google.com/maps/dir//Zuiveringweg+50B,+8243+PZ+Lelystad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent font-bold hover:underline"
                    >
                        Route plannen <ArrowRight size={16} />
                    </a>
                </div>
            </section>
        </div>
    );
}
