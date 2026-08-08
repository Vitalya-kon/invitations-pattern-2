"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useGlobalStore } from "@/store/useGlobalStore";

const WEDDING_DATE = useGlobalStore.getState().weddingDate; // Получаем дату свадьбы из глобального состояния

function getTimeLeft() {
    const now = new Date();
    const diff = WEDDING_DATE.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

export function CountdownSection() {
    const weddingDay = useGlobalStore((state) => state.weddingDay);
    // 1. Инициализируем нулями. Сервер и первый рендер клиента нарисуют "00"
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // 2. Флаг, который скажет нам: "Йоу, мы уже в браузере, JS работает!"
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Отмечаем, что гидрация прошла успешно
        setTime(getTimeLeft()); // Считаем реальное время

        const id = setInterval(() => setTime(getTimeLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    const units = [
        { value: time.days, label: "дней" },
        { value: time.hours, label: "часов" },
        { value: time.minutes, label: "минут" },
        { value: time.seconds, label: "секунд" },
    ];

    return (
        <section
            id="countdown"
            className="py-24 px-6 relative"
            style={{ background: "#F5E8E4" }}
        >
            {/* Твой прекрасный маятник с картинкой, я его не трогал */}
            <motion.div
                className="absolute top-2 sm:right-[20%] right-3 sm:w-36 sm:h-36 w-28 h-28 z-20"
                style={{ transformOrigin: "top center" }}
                animate={{ rotate: [15, -15] }}
                transition={{
                    duration: 2.0,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            >
                <Image
                    src="/images/time.png"
                    width={100}
                    height={100}
                    alt="Свадебная пара"
                    className="w-full h-full object-contain opacity-40 inline-block"
                />
            </motion.div>

            <div className="max-w-4xl mx-auto text-center ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <SectionLabel>До торжества</SectionLabel>
                    <h2
                        className="mt-3 mb-12 text-5xl md:text-5xl"
                        style={{
                            fontFamily: "'Great Vibes', serif",
                            fontWeight: 400,
                            color: "#2A1A1A",
                            lineHeight: 1.2,
                        }}
                    >
                        Осталось совсем немного
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {units.map(({ value, label }, i) => (
                        <motion.div
                            key={label}
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <div
                                className="w-full aspect-square flex items-center justify-center rounded-4xl mb-3 relative overflow-hidden shadow-md"
                                style={{
                                    background: "#FFFFFF",
                                    border: "1px solid rgba(139,77,94,0.15)",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Gloock', serif",
                                        fontSize: "clamp(2.5rem, 6vw, 4rem)",
                                        fontWeight: 400,
                                        color: "#8B4D5E",
                                        lineHeight: 1,
                                    }}
                                >
                                    {/* 3. МАГИЯ ЗДЕСЬ: Рендерим реальное время только после монтирования */}
                                    {isMounted
                                        ? String(value).padStart(2, "0")
                                        : "00"}
                                </span>
                            </div>
                            <span
                                className="tracking-widest uppercase"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "0.7rem",
                                    color: "#8B7B75",
                                    letterSpacing: "0.2em",
                                }}
                            >
                                {label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-14 flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div
                        className="h-px flex-1 max-w-24"
                        style={{ background: "rgba(139,77,94,0.25)" }}
                    />
                    <span
                        style={{
                            fontFamily: "'Dancing Script', cursive",
                            fontSize: "1.5rem",
                            color: "#8B4D5E",
                        }}
                    >
                        {weddingDay}
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

export function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p
            className="tracking-widest uppercase"
            style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                color: "#B5935A",
                letterSpacing: "0.3em",
            }}
        >
            {children}
        </p>
    );
}
