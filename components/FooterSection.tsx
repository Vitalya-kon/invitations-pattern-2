'use client'

import { useGlobalStore } from '@/store/useGlobalStore';

export function FooterSection() {
    const man = useGlobalStore((state) => state.man);
    const woman = useGlobalStore((state) => state.woman);
    const weddingDay = useGlobalStore((state) => state.weddingDay);
    const location = useGlobalStore((state) => state.location);

    return (
        <footer
            className="py-16 px-6 text-center relative"
            style={{ background: "#FDF8F2" }}
        >
            <div className="absolute inset-0 z-0 h-16 bg-linear-to-b from-[#f5e8e4] to-[#fdf8f2]"></div>
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
