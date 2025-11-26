"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />; // Avoid hydration mismatch
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-10 h-10 rounded-full bg-muted flex items-center justify-center border border-white/10 hover:border-accent/50 transition-colors"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 1 : 0,
                    rotate: theme === "dark" ? 0 : 90,
                }}
                transition={{ duration: 0.2 }}
                className="absolute"
            >
                <Moon size={20} className="text-accent" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "light" ? 1 : 0,
                    rotate: theme === "light" ? 0 : -90,
                }}
                transition={{ duration: 0.2 }}
                className="absolute"
            >
                <Sun size={20} className="text-orange-500" />
            </motion.div>
        </button>
    );
}
