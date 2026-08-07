"use client";

import { motion } from "motion/react";
import { MapPin, Clock, Heart } from "lucide-react";
import { SectionLabel } from "./CountdownSection";
import Image from "next/image";

const VENUE_IMAGE = "/images/usadba.webp";

export function DetailsSection() {
    const events = [
        {
            icon: <Heart size={20} />,
            title: "Церемония",
            time: "16:00",
            location: "Белый зал усадьбы",
            description:
                "Торжественная регистрация брака в окружении самых близких людей.",
        },
        {
            icon: <Clock size={20} />,
            title: "Коктейльный час",
            time: "17:00",
            location: "Терраса с видом на парк",
            description:
                "Прогулка, фотографии и лёгкие закуски в ожидании праздничного ужина.",
        },
        {
            icon: <MapPin size={20} />,
            title: "Банкет",
            time: "18:30",
            location: "Большой зал",
            description:
                "Праздничный ужин, живая музыка и танцы до самого утра.",
        },
    ];

    return (
        <section
            id="details"
            className="py-24 px-6 relative"
            style={{ background: "#FDF8F2" }}
        >
            <div 
            className="absolute inset-0 z-0 h-16 bg-linear-to-b from-[#f5e8e4] to-[#fdf8f2]"
            
            >

            </div>
            <motion.div
                className="absolute -top-4 sm:left-[20%] left-3 sm:w-40 sm:h-40 w-28 h-28 z-20"
                style={{
                    transformOrigin: "top center",
                }}
                animate={{
                    rotate: [5, -5],
                }}
                transition={{
                    duration: 1.0,
                    repeat: Infinity,
                    repeatType: "reverse", // Плавный возврат в обратную сторону (15 -> -15 -> 15)
                    ease: "easeInOut", // Замедление в крайних точках (имитация физики маятника)
                }}
            >
                <Image
                    src="/images/location.png"
                    width={100}
                    height={100}
                    alt="Свадебная пара"
                    className="w-full h-full object-contain opacity-40 inline-block"
                />
            </motion.div>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <SectionLabel>Детали праздника</SectionLabel>
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
                        Место и время
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div
                        className="relative rounded-3xl overflow-hidden"
                        style={{ aspectRatio: "4/3", background: "#EEE4DF" }}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                    >
                        <img
                            src={VENUE_IMAGE}
                            alt="Место проведения свадьбы"
                            className="w-full h-full object-cover"
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(to top, rgba(42,26,26,0.4) 0%, transparent 50%)",
                            }}
                        />
                        <div className="absolute bottom-6 left-6 right-6">
                            <p
                                className="text-white"
                                style={{
                                    fontFamily: "'Gloock', serif",
                                    fontSize: "1.4rem",
                                    fontWeight: 400,
                                }}
                            >
                                Усадьба «Архангельское»
                            </p>
                            <p
                                className="text-white/70 mt-1"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "0.85rem",
                                }}
                            >
                                Красногорский район, Московская область
                            </p>
                        </div>
                    </motion.div>

                    {/* Events */}
                    <div className="flex flex-col gap-8">
                        {events.map((event, i) => (
                            <motion.div
                                key={event.title}
                                className="flex gap-5"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.15 }}
                            >
                                <div
                                    className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                                    style={{
                                        background: "#F5E8E4",
                                        color: "#8B4D5E",
                                    }}
                                >
                                    {event.icon}
                                </div>
                                <div>
                                    <div className="flex items-baseline gap-3 flex-wrap">
                                        <h3
                                            style={{
                                                fontFamily: "'Great Vibes', serif",
                                                fontWeight: 400,
                                                color: "#2A1A1A",
                                            }}
                                            className="text-3xl"
                                        >
                                            {event.title}
                                        </h3>
                                        <span
                                            className="px-3 py-0.5 rounded-full"
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif",
                                                fontSize: "0.75rem",
                                                background: "#F5E8E4",
                                                color: "#8B4D5E",
                                                letterSpacing: "0.05em",
                                            }}
                                        >
                                            {event.time}
                                        </span>
                                    </div>
                                    <p
                                        className="mt-0.5"
                                        style={{
                                            fontFamily: "'Montserrat', sans-serif",
                                            fontSize: "0.82rem",
                                            color: "#B5935A",
                                        }}
                                    >
                                        {event.location}
                                    </p>
                                    <p
                                        className="mt-1.5"
                                        style={{
                                            fontFamily: "'Montserrat', sans-serif",
                                            fontSize: "0.9rem",
                                            color: "#8B7B75",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {event.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Map link */}
                        <motion.a
                            href="https://maps.google.com/?q=Усадьба+Архангельское"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "0.875rem",
                                background: "#8B4D5E",
                                color: "#FFFFFF",
                                width: "fit-content",
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <MapPin size={16} />
                            Открыть на карте
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}
