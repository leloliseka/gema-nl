"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, FileCheck, CheckCircle2, Award, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const certificates = [
    {
        id: "2.1",
        title: "2.1 Certificaat",
        shortDescription: "Verklaring van overeenstemming met de bestelling, zonder beproevingsresultaten.",
        fullDescription: "Dit is een document waarin wordt verklaard dat de producten die geleverd worden aan de eisen voldoen die bij de bestelling zijn opgegeven. In dit type certificaat zijn geen beproevingsresultaten vermeld.",
        icon: FileCheck,
    },
    {
        id: "2.2",
        title: "2.2 Certificaat",
        shortDescription: "Verklaring van overeenstemming met beproevingsresultaten van niet-voorgeschreven keuringen.",
        fullDescription: "In dit certificaat wordt eveneens verklaard dat de geleverde producten aan de eisen voldoen die bij de bestelling zijn opgegeven. Tevens worden de beproevingsresultaten vermeld van niet voorgeschreven keuringen.",
        icon: CheckCircle2,
    },
    {
        id: "3.1",
        title: "3.1 Certificaat",
        shortDescription: "Verklaring met beproevingsresultaten, geldig verklaard door een onafhankelijke vertegenwoordiger.",
        fullDescription: "Dit document bevat een verklaring dat de geleverde producten voldoen aan de eisen van de bestelling. Ook worden in dit type certificaat beproevingsresultaten vermeld van nader voorgeschreven keuringen. De uit te voeren beproevingen en de keuringseenheden worden bepaald door de productspecificaties en geldende voorschriften volgens officiële regelingen. Ook kunnen er bij bestelling nog specifieke extra beproevingen worden gevraagd waarvan de resultaten eveneens in dit type certificaat worden opgenomen. Het certificaat wordt opgesteld en geldig verklaard door een bevoegde vertegenwoordiger van de producent die hiërarchisch onafhankelijk is van de productieafdeling.",
        icon: ShieldCheck,
    },
    {
        id: "3.2",
        title: "3.2 Certificaat",
        shortDescription: "Geldig verklaard door producent én onafhankelijke keurder, met volledige beproevingsresultaten.",
        fullDescription: "Dit certificaat is opgesteld en geldig verklaard door een bevoegde vertegenwoordiger van de producent die hiërarchisch onafhankelijk is van de productieafdeling en daarnaast door een bevoegde vertegenwoordiger voor de keuring van de koper en/of de keurder aangewezen door officiële regelingen. In het keuringsrapport wordt verklaard dat de geleverde producten aan de bij bestelling gestelde eisen voldoen. Ook worden de beproevingsresultaten vermeld.",
        icon: Award,
    },
];

export default function KwaliteitPage() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-background text-foreground pt-24 pb-20">
            {/* Animated Background Seal - Fixed Global */}
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-5 overflow-hidden z-0">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-[800px] h-[800px] md:w-[1200px] md:h-[1200px]"
                >
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent">
                        {/* Outer Ring */}
                        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
                        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" />

                        {/* Decorative Stars */}
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                            <g key={angle} transform={`rotate(${angle} 100 100)`}>
                                <path d="M100 20 L102 25 L107 25 L103 28 L104 33 L100 30 L96 33 L97 28 L93 25 L98 25 Z" fill="currentColor" />
                            </g>
                        ))}

                        {/* Inner Shield (Static relative to ring, but rotating with it) */}
                        <path d="M100 60 C100 60 130 70 130 100 C130 130 100 150 100 150 C100 150 70 130 70 100 C70 70 100 60 100 60 Z" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path d="M85 100 L95 110 L115 90" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="py-20 px-4 md:px-6 bg-muted/30 border-b border-white/5 overflow-hidden">
                    <div className="container mx-auto max-w-4xl text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6 border border-accent/20"
                        >
                            <ShieldCheck className="w-4 h-4" />
                            <span>EN10204:2004 Normering</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black tracking-tighter mb-6 font-heading"
                        >
                            KWALITEIT & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">CERTIFICERING</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        >
                            Bij Gema Fast staat kwaliteit voorop. Wij leveren onze producten inclusief materiaalcertificaten volgens de Europese norm EN10204:2004.
                        </motion.p>
                    </div>
                </section>

                {/* Certificates Grid */}
                <section className="container mx-auto px-4 md:px-6 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                className={cn(
                                    "group relative p-8 rounded-3xl bg-muted border border-white/5 hover:border-accent/30 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5 cursor-pointer",
                                    expandedId === cert.id ? "border-accent/30 shadow-accent/5" : ""
                                )}
                                onClick={() => setExpandedId(expandedId === cert.id ? null : cert.id)}
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <cert.icon size={120} />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <cert.icon size={24} />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 font-heading group-hover:text-accent transition-colors">
                                        {cert.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        {cert.shortDescription}
                                    </p>

                                    <AnimatePresence>
                                        {expandedId === cert.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-muted-foreground leading-relaxed pt-4 border-t border-white/10">
                                                    {cert.fullDescription}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="mt-4 w-full text-sm font-bold text-accent flex items-center justify-between">
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {expandedId === cert.id ? "Minder lezen" : "Lees meer"}
                                        </span>
                                        {expandedId === cert.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
