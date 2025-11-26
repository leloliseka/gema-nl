"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Werkstoffen & Legeringen", href: "/werkstoffen-en-legeringen" },
    { name: "Bedrijfshistorie", href: "/bedrijfshistorie" },
    { name: "Kwaliteit & Certificeringen", href: "/kwaliteit-en-certificaten" },
    { name: "Contact", href: "/contact" },
];

import { usePathname } from "next/navigation";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";
    const isTransparent = isHome && !isScrolled;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50 select-none">
                    <div className="relative h-12 w-32">
                        <Image
                            src="/logo-gema.png"
                            alt="Gema Fasteners"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-base font-bold transition-colors select-none",
                                isTransparent
                                    ? "text-zinc-900 dark:text-white/90 hover:text-accent dark:hover:text-white"
                                    : "!text-zinc-900 dark:!text-white hover:!text-accent"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button & Theme Toggle */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold text-sm hover:bg-accent/90 transition-all shadow-[0_0_20px_-5px_rgba(74,222,128,0.5)] border border-accent/20"
                    >
                        Offerte Aanvragen
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={cn(
                        "md:hidden z-50 transition-colors",
                        mobileMenuOpen || isScrolled || !isHome ? "text-foreground" : "text-zinc-900 dark:text-white"
                    )}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 bg-background/98 backdrop-blur-xl z-40 flex flex-col items-center justify-start pt-32 gap-6 md:hidden overflow-y-auto"
                        >
                            <nav className="flex flex-col items-center gap-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-lg font-bold text-foreground hover:text-accent transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                            <div className="flex flex-col gap-4 mt-4 mb-8">
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold text-base hover:bg-accent/90 transition-all shadow-lg"
                                >
                                    Offerte Aanvragen
                                </Link>
                                <div className="flex justify-center">
                                    <ThemeToggle />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
