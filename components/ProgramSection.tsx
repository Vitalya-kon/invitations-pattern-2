"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./CountdownSection";
import { useGlobalStore } from "@/store/useGlobalStore";
import Image from "next/image";

export function ProgramSection() {
    const { program } = useGlobalStore();
    return (
        <section
            id="program"
            className="py-24 px-6 relative"
            style={{ background: "#F5E8E4" }}
        >
            <div className="absolute inset-0 z-0 h-16 bg-linear-to-t from-[#f5e8e4] to-[#fdf8f2]"></div>

            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="h-86 w-full relative -top-25">
                        <Image
                            src="/images/wedding-bunner-clipart-lg.png"
                            alt="Flowers"
                            fill
                            className="object-contain w-full h-full"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="text-center mb-16 -mt-64"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <SectionLabel>14 сентября 2026</SectionLabel>
                    <h2
                        className="mt-3 text-5xl"
                        style={{
                            fontFamily: "'Great Vibes', serif",
                            fontWeight: 400,
                            color: "#2A1A1A",
                            lineHeight: 1.2,
                        }}
                    >
                        Программа дня
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical line */}
                    <div
                        className="absolute left-[5.5rem] top-0 bottom-0 w-px md:left-1/2"
                        style={{ background: "rgba(139,77,94,0.18)" }}
                    />

                    <div className="flex flex-col gap-0">
                        {program.map((item, i) => (
                            <motion.div
                                key={item.time}
                                className="relative flex items-start gap-0 md:gap-0"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                            >
                                {/* Mobile layout */}
                                <div className="flex items-start gap-6 w-full md:hidden">
                                    <div
                                        className="flex flex-col items-center pt-1"
                                        style={{ minWidth: "5.5rem" }}
                                    >
                                        <span
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif",
                                                fontSize: "0.8rem",
                                                color: "#B5935A",
                                                letterSpacing: "0.05em",
                                            }}
                                        >
                                            {item.time}
                                        </span>
                                    </div>
                                    {/* Dot */}
                                    <div
                                        className="relative flex flex-col items-center"
                                        style={{ marginTop: "0.3rem" }}
                                    >
                                        <div
                                            className="w-3 h-3 rounded-full border-2 flex-shrink-0"
                                            style={{
                                                background: "#FDF8F2",
                                                borderColor: "#8B4D5E",
                                            }}
                                        />
                                        {i < program.length - 1 && (
                                            <div
                                                className="w-px flex-1 mt-1 min-h-[3.5rem]"
                                                style={{
                                                    background:
                                                        "rgba(139,77,94,0.18)",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="pb-8 flex-1">
                                        <p
                                            className="text-2xl"
                                            style={{
                                                fontFamily:
                                                    "'Great Vibes', serif",
                                                fontWeight: 400,
                                                color: "#2A1A1A",
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {item.title}
                                        </p>
                                        <p
                                            className="mt-1"
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif",
                                                fontSize: "0.875rem",
                                                color: "#8B7B75",
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Desktop layout: alternating */}
                                <div
                                    className={`hidden md:flex w-full items-start gap-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                                >
                                    <div
                                        className={`flex-1 pb-10 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
                                    >
                                        <p
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif",
                                                fontSize: "0.8rem",
                                                color: "#B5935A",
                                                letterSpacing: "0.08em",
                                            }}
                                        >
                                            {item.time}
                                        </p>
                                        <p
                                            className="mt-1"
                                            style={{
                                                fontFamily:
                                                    "'Great Vibes', serif",
                                                fontSize: "1.8rem",
                                                fontWeight: 400,
                                                color: "#2A1A1A",
                                            }}
                                        >
                                            {item.title}
                                        </p>
                                        <p
                                            className="mt-1"
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif",
                                                fontSize: "0.875rem",
                                                color: "#8B7B75",
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Center dot */}
                                    <div
                                        className="relative flex items-start justify-center flex-shrink-0"
                                        style={{
                                            width: "0px",
                                            marginTop: "0.3rem",
                                        }}
                                    >
                                        <div
                                            className="w-3.5 h-3.5 rounded-full border-2 -ml-1.5 flex-shrink-0"
                                            style={{
                                                background: "#FDF8F2",
                                                borderColor: "#8B4D5E",
                                            }}
                                        />
                                    </div>

                                    <div className="flex-1 pb-10" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
