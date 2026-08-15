"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./CountdownSection";
import { useGlobalStore } from "@/store/useGlobalStore";
import Image from "next/image";

export function DresscodeSection() {
    const { dresscode } = useGlobalStore();

    return (
        <section
            id="dresscode"
            className="py-24 px-6 relative"
            style={{ background: "#FDF8F2" }}
        >
            <div className="absolute inset-0 z-0 h-16 bg-linear-to-b from-[#f5e8e4] to-[#fdf8f2]" />

            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <SectionLabel>Палитра праздника</SectionLabel>
                    <h2
                        className="mt-3"
                        style={{
                            fontFamily: "'Great Vibes', serif",
                            fontSize: "clamp(2rem, 5vw, 3.5rem)",
                            fontWeight: 400,
                            color: "#2A1A1A",
                            lineHeight: 1.2,
                        }}
                    >
                        {dresscode.title}
                    </h2>
                    <p
                        className="mt-4 max-w-md mx-auto"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "0.95rem",
                            color: "#8B7B75",
                            lineHeight: 1.7,
                        }}
                    >
                        {dresscode.description}
                    </p>
                </motion.div>

                {/* Color palette */}
                <motion.div
                    className="mt-14 flex flex-wrap items-center justify-center gap-5"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {dresscode.colors.map((item, i) => (
                        <motion.div
                            key={item.label}
                            className="flex flex-col items-center gap-2"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            whileHover={{ scale: 1.08 }}
                        >
                            <div
                                className="w-14 h-14 rounded-full shadow-md border-2 border-white"
                                style={{ background: item.color }}
                            />
                            <span
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: "0.7rem",
                                    color: "#8B7B75",
                                    letterSpacing: "0.05em",
                                }}
                            >
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Divider */}
                <motion.div
                    className="mt-12 flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div
                        className="h-px flex-1 max-w-24"
                        style={{ background: "rgba(139,77,94,0.25)" }}
                    />
                    <span
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.75rem",
                            color: "#B5935A",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                        }}
                    >
                        Будем благодарны за соблюдение палитры
                    </span>
                    <div
                        className="h-px flex-1 max-w-24"
                        style={{ background: "rgba(139,77,94,0.25)" }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
