"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, Warehouse, Users, CheckCircle2 } from "lucide-react";

const history = [
    {
        year: "1976",
        title: "Vanuit de huiskamer met garage",
        description: "Gema Fast B.V. is in 1976 opgericht door de heer G.C. van der Werf. Begonnen vanuit een pand aan huis in Lelystad, met de garage als magazijn.",
        image: "/images/history/garage.jpg",
        icon: Warehouse,
    },
    {
        year: "Groei",
        title: "Eerste bedrijfspand",
        description: "Al snel groeide Gema Fast uit haar jasje door een steeds toenemende vraag naar haar producten en diensten. De garage werd te klein en Gema Fast betrok haar eerste bedrijfspand.",
        image: "/images/history/first-building.jpg",
        icon: Building2,
    },
    {
        year: "2015",
        title: "Verhuizing naar Zuiveringweg",
        description: "Uiteindelijk komen we terecht bij ons huidige adres. Per 2 november 2015 is de nieuwe locatie van Gema Fast: Zuiveringweg 50B 8243PZ LELYSTAD.",
        image: "/images/history/current-building.jpg",
        icon: MapPin,
    },
];

export default function BedrijfshistoriePage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-hidden pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative py-20 px-4 md:px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6 border border-accent/20"
                    >
                        <Calendar className="w-4 h-4" />
                        <span>Sinds 1976</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black tracking-tighter mb-6 font-heading"
                    >
                        VAN GARAGE NAAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">WERELDWIJDE SPELER</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Een reis door de tijd: hoe Gema Fast uitgroeide van een eenmanszaak in een garage tot een toonaangevende leverancier van bevestigingsmaterialen.
                    </motion.p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="container mx-auto px-4 md:px-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0 transform -translate-x-1/2 hidden md:block" />

                <div className="space-y-24 relative">
                    {history.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={index === 0 ? { opacity: 1, y: 0 } : undefined}
                            whileInView={index !== 0 ? { opacity: 1, y: 0 } : undefined}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content Side */}
                            <div className="flex-1 w-full md:w-1/2">
                                <div className={`flex flex-col gap-4 ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                    }`}>
                                    <div className={`flex items-center gap-3 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                        }`}>
                                        <span className="text-5xl font-black text-accent/20 font-heading">
                                            {item.year}
                                        </span>
                                        <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-heading">{item.title}</h2>
                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Center Dot (Desktop Only) */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-background border-4 border-accent z-10 shadow-[0_0_20px_rgba(74,222,128,0.5)]" />

                            {/* Image Side */}
                            <div className="flex-1 w-full md:w-1/2">
                                <div className="relative group">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-accent to-emerald-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-muted aspect-video shadow-2xl">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Werkwijze Section */}
            <section className="relative py-20 px-4 md:px-6 bg-muted/30 border-t border-white/5 mt-20">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6 border border-accent/20"
                    >
                        <Users className="w-4 h-4" />
                        <span>Onze Aanpak</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black tracking-tighter mb-8 font-heading"
                    >
                        WERKWIJZE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">PARTNERSHIP</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
                    >
                        <p>
                            Speciale bevestigingsmaterialen en draaiwerk vragen om een flexibele en andere benadering als standaard bevestigingsmaterialen en draaiwerk.
                        </p>
                        <p>
                            Daarom is Gema Fast nauw betrokken bij al haar klanten al vanaf het ontwerpstadium tot en met eindproduct.
                        </p>
                        <p className="font-medium text-foreground">
                            We zijn inmiddels meer dan 40 jaar een betrouwbare partner en toeleverancier voor:
                        </p>
                    </motion.div>

                    {/* Sectors Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
                        {["Industrie", "Overheid", "Dienstensector"].map((sector, index) => (
                            <motion.div
                                key={sector}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="p-6 rounded-2xl bg-background border border-white/5 shadow-lg hover:border-accent/30 transition-colors group"
                            >
                                <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold font-heading">{sector}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
