"use client";

import { motion } from "framer-motion";

export default function ContactAnimation() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Central Pulse */}
            <motion.div
                className="absolute w-32 h-32 rounded-full border-2 border-accent/30"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute w-48 h-48 rounded-full border border-accent/20"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0, 0.2],
                }}
                transition={{
                    duration: 3,
                    delay: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Central Node */}
            <div className="relative z-10 w-16 h-16 bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-accent/50 shadow-[0_0_30px_-5px_rgba(74,222,128,0.4)]">
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-4 h-4 bg-accent rounded-full"
                />
            </div>

            {/* Orbiting Satellites */}
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="absolute w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 10 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 2,
                    }}
                >
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-3 h-3 bg-foreground/20 dark:bg-white/20 rounded-full"
                        style={{
                            marginLeft: `${80 + i * 40}px`,
                            marginTop: "-6px",
                        }}
                    >
                        <div className="absolute inset-0 bg-accent/50 blur-sm rounded-full" />
                    </motion.div>
                </motion.div>
            ))}

            {/* Connecting Lines (Abstract Network) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <motion.path
                    d="M100,150 Q200,50 300,150 T500,150"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                <motion.path
                    d="M50,250 Q150,350 250,250 T450,250"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
            </svg>
        </div>
    );
}
