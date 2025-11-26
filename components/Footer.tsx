import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-muted py-12 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2 select-none">
                            <div className="relative h-14 w-40">
                                <Image
                                    src="/logo-gema.png"
                                    alt="Gema Fasteners"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed max-w-sm">
                            Uw partner in speciale bevestigingsmaterialen en draaiwerk. Kwaliteit, flexibiliteit en betrouwbaarheid sinds 1976.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground dark:text-white mb-4">Diensten</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/werkstoffen-en-legeringen" className="text-muted-foreground hover:text-accent transition-colors">
                                    Werkstoffen & Legeringen
                                </Link>
                            </li>
                            <li>
                                <Link href="/bedrijfshistorie" className="text-muted-foreground hover:text-accent transition-colors">
                                    Bedrijfshistorie
                                </Link>
                            </li>
                            <li>
                                <Link href="/kwaliteit-en-certificaten" className="text-muted-foreground hover:text-accent transition-colors">
                                    Kwaliteit & Certificeringen
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                                    Maatwerk
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground dark:text-white mb-4">Contact</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>info@gema.nl</li>
                            <li>+31 (0) 12 345 6789</li>
                            <li>Zuiveringweg 50B<br />8243 PZ, Lelystad</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-border dark:border-white/10 flex justify-between items-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Gema Fast B.V.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-accent transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-accent transition-colors">Voorwaarden</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
