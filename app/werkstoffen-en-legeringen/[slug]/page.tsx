import { notFound } from "next/navigation";
import { getMaterialBySlug, materials } from "@/lib/materials";
import { ArrowLeft, CheckCircle2, Factory, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Generate static params for all known slugs
export function generateStaticParams() {
    return materials.map((material) => ({
        slug: material.slug,
    }));
}

export default async function MaterialDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const material = getMaterialBySlug(slug);

    if (!material) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background text-foreground pt-20">
            {/* Hero - No Image, Solid/Gradient Background */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-muted/20 border-b border-border dark:border-white/5">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-12 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-accent/5 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="container relative z-10 px-4 md:px-6">
                    <Link
                        href="/werkstoffen-en-legeringen"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} /> Terug naar overzicht
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground dark:text-white mb-6">
                                {material.title.toUpperCase()}
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground border-l-4 border-accent pl-6">
                                {material.description}
                            </p>
                        </div>

                        <div className="relative hidden lg:flex justify-center items-center h-full min-h-[400px]">
                            {/* Mechanical Backdrop - Custom Industrial Cog */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -mt-6">
                                <div className="relative">
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full" />

                                    {/* Custom Industrial Spur Gear SVG */}
                                    <svg
                                        viewBox="0 0 100 100"
                                        className="w-[600px] h-[600px] text-accent/30 dark:text-accent/20 animate-[spin_60s_linear_infinite]"
                                        fill="currentColor"
                                    >
                                        <path d="M94.5,43.6l-8.6-1.5c-0.8-2.9-2-5.7-3.5-8.3l5.6-6.7c1.1-1.3,1-3.2-0.2-4.4l-5.7-5.7c-1.2-1.2-3.1-1.3-4.4-0.2l-6.7,5.6c-2.6-1.5-5.4-2.7-8.3-3.5l-1.5-8.6c-0.3-1.7-1.8-2.9-3.5-2.9h-8c-1.7,0-3.2,1.2-3.5,2.9l-1.5,8.6c-2.9,0.8-5.7,2-8.3,3.5l-6.7-5.6c-1.3-1.1-3.2-1-4.4,0.2l-5.7,5.7c-1.2,1.2-1.3,3.1-0.2,4.4l5.6,6.7c-1.5,2.6-2.7,5.4-3.5,8.3l-8.6,1.5c-1.7,0.3-2.9,1.8-2.9,3.5v8c0,1.7,1.2,3.2,2.9,3.5l8.6,1.5c0.8,2.9,2,5.7,3.5,8.3l-5.6,6.7c-1.1,1.3-1,3.2,0.2,4.4l5.7,5.7c1.2,1.2,3.1,1.3,4.4,0.2l6.7-5.6c2.6,1.5,5.4,2.7,8.3,3.5l1.5,8.6c0.3,1.7,1.8,2.9,3.5,2.9h8c1.7,0,3.2-1.2,3.5-2.9l1.5-8.6c2.9-0.8,5.7-2,8.3-3.5l6.7,5.6c1.3,1.1,3.2,1,4.4-0.2l5.7-5.7c1.2-1.2,1.3-3.1,0.2-4.4l-5.6-6.7c1.5-2.6,2.7-5.4,3.5-8.3l8.6-1.5c1.7-0.3,2.9-1.8,2.9-3.5v-8C97.4,45.4,96.2,43.9,94.5,43.6z M50,68c-9.9,0-18-8.1-18-18s8.1-18,18-18s18,8.1,18,18S59.9,68,50,68z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Floating Image with Perfect Corners */}
                            <div className="relative z-10 animate-[float_6s_ease-in-out_infinite] max-w-lg w-full">
                                {/* Outer 'Border' Container */}
                                <div className="relative rounded-3xl bg-accent shadow-2xl p-[6px]">
                                    {/* Inner Content Container */}
                                    <div className="relative rounded-[18px] bg-white dark:bg-black/40 overflow-hidden">
                                        {/* Image with manual crop */}
                                        <div className="relative w-full h-full min-h-[400px]">
                                            <Image
                                                src={material.image}
                                                alt={material.title}
                                                fill
                                                className="object-contain bg-white dark:bg-transparent -ml-[3px] w-[calc(100%+3px)] max-w-none"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20">
                <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Long Description */}
                        {material.longDescription && (
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                {material.longDescription.map((paragraph, i) => (
                                    <p key={i} className="text-muted-foreground leading-relaxed mb-6">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        )}

                        {/* Specs Table */}
                        {material.specs && (
                            <div className="mt-8">
                                <h3 className="text-2xl font-bold mb-6">Specificaties</h3>
                                <div className="overflow-hidden rounded-xl border border-border dark:border-white/10">
                                    <table className="w-full text-left">
                                        <tbody className="divide-y divide-border dark:divide-white/10">
                                            {material.specs.map((spec, i) => (
                                                <tr key={i} className="bg-card hover:bg-muted/50 transition-colors">
                                                    <td className="p-4 font-bold text-foreground dark:text-white w-1/4">{spec.label}</td>
                                                    <td className="p-4 text-muted-foreground font-mono text-sm">{spec.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Technical Data Tables */}
                        {material.tables && material.tables.map((table, tIndex) => (
                            <div key={tIndex} className="mt-8">
                                <h3 className="text-xl font-bold mb-4">{table.title}</h3>
                                <div className="overflow-x-auto rounded-xl border border-border dark:border-white/10">
                                    <table className="w-full text-left min-w-[600px]">
                                        <thead className="bg-muted/50">
                                            <tr>
                                                {table.headers.map((header, h) => (
                                                    <th key={h} className="p-3 font-bold text-foreground dark:text-white text-sm">{header}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border dark:divide-white/10">
                                            {table.rows.map((row, r) => (
                                                <tr key={r} className="bg-card hover:bg-muted/50 transition-colors">
                                                    {row.map((cell, c) => (
                                                        <td key={c} className="p-3 text-muted-foreground text-sm align-top whitespace-pre-line font-mono leading-relaxed">
                                                            {cell}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}

                        <div>
                            <h2 className="text-3xl font-bold mb-6">Eigenschappen</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {material.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border dark:border-white/5">
                                        <CheckCircle2 className="text-accent" size={20} />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-6">Toepassingen</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {material.applications.map((app, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border dark:border-white/5">
                                        <Factory className="text-accent" size={20} />
                                        <span>{app}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Grades */}
                    <div className="space-y-8">
                        <div className="p-6 rounded-2xl bg-card border border-border dark:border-white/10 shadow-lg sticky top-24">
                            <h3 className="text-xl font-bold mb-4">Beschikbare Kwaliteiten</h3>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {material.grades.map((grade, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full bg-accent/10 text-accent font-mono text-sm font-bold">
                                        {grade}
                                    </span>
                                ))}
                            </div>

                            <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
                                <h3 className="text-lg font-bold mb-2">Advies nodig?</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Onze experts helpen u graag bij het kiezen van de juiste {material.title.toLowerCase()} voor uw project.
                                </p>
                                <Link
                                    href="/contact"
                                    className="block w-full py-3 text-center rounded-lg bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-colors"
                                >
                                    Contact Opnemen
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
