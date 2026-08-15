'use client'

import { useGlobalStore } from '@/store/useGlobalStore';
import Image from "next/image";
import { motion } from "motion/react";

export function FooterSection() {
    const man = useGlobalStore((state) => state.man);
    const woman = useGlobalStore((state) => state.woman);
    const weddingDay = useGlobalStore((state) => state.weddingDay);
    const location = useGlobalStore((state) => state.location);

    return (
        <footer
            className="py-16 px-6 text-center relative"
            style={{ background: "#F5E8E4" }}
        >
            <div className="absolute inset-0 z-0 h-16 bg-linear-to-t from-[#f5e8e4] to-[#fdf8f2]"></div>
            <motion.div
                className="absolute -top-24 sm:right-[22%] right-3 sm:w-56 sm:h-56 w-28 h-28 z-20"
                style={{ transformOrigin: "top center" }}
                animate={{ rotate: [5, -5] }}
                transition={{
                    duration: 4.0,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            >
                <Image
                    src="/images/bride-and-groom-clipart-md.png"
                    width={500}
                    height={500}
                    alt="Свадебная пара"
                    className="w-full h-full object-contain opacity-60 inline-block"
                />
            </motion.div>
            <p
                style={{
                    fontFamily: "'Great Vibes', serif",
                    fontSize: "2.5rem",
                    color: "#D4A574",
                }}
            >
                {woman} &amp; {man}
            </p>
            <p
                className="mt-3"
                style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.8rem",
                    color: "black",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                }}
            >
                {weddingDay} · {location}
            </p>
            <div
                className="mt-6 w-12 h-px mx-auto opacity-30"
                style={{ background: "#000" }}
            />
            <p
                className="mt-5"
                style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.78rem",
                    color: "black",
                }}
            >
                С любовью ждём вас на нашем торжестве
            </p>
        </footer>
    );
}
