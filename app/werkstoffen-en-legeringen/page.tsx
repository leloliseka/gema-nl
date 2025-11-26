"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { materials } from "@/lib/materials";

export default function WerkstoffenEnLegeringen() {
    return (
        <div className="min-h-screen bg-background text-foreground pt-20">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/10 to-transparent skew-x-12 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-accent/5 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="container relative z-10 px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-foreground dark:text-white">
                            WERKSTOFFEN <span className="text-accent">&</span> <br />
                            LEGERINGEN
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl border-l-4 border-accent pl-6">
                            Ontdek ons uitgebreide assortiment aan hoogwaardige materialen.
                            Klik op een categorie voor meer specificaties en details.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-20 bg-muted/30 border-y border-border dark:border-white/5">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {materials.map((item, i) => (
                            <Link
                                href={`/werkstoffen-en-legeringen/${item.slug}`}
                                key={item.id}
                                className="group relative h-[400px] block"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="absolute inset-0 bg-card border border-border dark:border-white/5 transition-all duration-500 group-hover:-translate-y-4 group-hover:border-accent/50 z-10 flex flex-col justify-between p-8 rounded-2xl overflow-hidden"
                                >
                                    {/* Background Image Overlay */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    />

                                    <div className="relative z-10">
                                        <div className="text-accent text-xs font-bold tracking-widest uppercase mb-2">Categorie {item.id}</div>
                                        <h3 className="text-3xl font-black mb-4 text-foreground dark:text-white group-hover:text-accent transition-colors">{item.title}</h3>
                                        <p className="text-muted-foreground line-clamp-3">{item.description}</p>
                                    </div>

                                    <div className="relative z-10 flex items-center gap-2 text-sm font-bold text-foreground dark:text-white group-hover:text-accent transition-colors">
                                        Bekijk Specificaties <ArrowRight size={16} />
                                    </div>
                                </motion.div>

                                {/* Shadow Element */}
                                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
