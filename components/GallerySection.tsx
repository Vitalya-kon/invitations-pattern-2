"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { SectionLabel } from "./CountdownSection";
import Image from "next/image";
import CarouselStacked from "@/components/carousel/carousel"
// import Autoplay from "embla-carousel-autoplay"
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel";

const photos = [
    {
        id: 1,
        src: "/images/hero2.png",
        alt: "Жених и невеста",
        aspect: "portrait",
    },
    {
        id: 2,
        src: "/images/gallary-1.png",
        alt: "Влюблённые",
        aspect: "portrait",
    },
    {
        id: 3,
        src: "/images/kiss.png",
        alt: "Нежный поцелуй",
        aspect: "portrait",
    },
    {
        id: 4,
        src: "/images/hero2.png",
        alt: "Жених и невеста",
        aspect: "portrait",
    },
    {
        id: 5,
        src: "/images/gallary-1.png",
        alt: "Влюблённые",
        aspect: "portrait",
    },
    {
        id: 6,
        src: "/images/kiss.png",
        alt: "Нежный поцелуй",
        aspect: "portrait",
    },
];

// export function CarouselItems() {
//     return (
//         <Carousel 
//             className="w-full mx-6" 
//             opts={{ align: "start" }}
//             plugins={[
//                 Autoplay({
//                     delay: 4000,
//                 }),
//             ]}
//         >
//             <CarouselContent className="-ml-4">
//                 {photos.map((photo) => (
//                     <CarouselItem key={photo.id} className="pl-4 basis-2/3">
//                         <div className="p-1">
//                             <div className="relative w-full h-[500px]">
//                                 <Image
//                                     src={photo.src}
//                                     alt={photo.alt}
//                                     fill 
//                                     className="object-cover rounded-lg" 
//                                     sizes="(max-width: 768px) 100vw, 66vw" 
//                                 />
//                             </div>
//                         </div>
//                     </CarouselItem>
//                 ))}
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//         </Carousel>
//     );
// }



export function GallerySection() {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <section
            id="gallery"
            className="py-24 px-6 relative"
            style={{ background: "#F5E8E4" }}
        >
            <div className="absolute inset-0 z-0 h-16 bg-linear-to-t from-[#f5e8e4] to-[#fdf8f2]"></div>
             <motion.div
                className="absolute -top-16 sm:right-[30%] right-3 sm:w-56 sm:h-56 w-36 h-36 z-20"
                style={{ transformOrigin: "top center" }}
                animate={{ rotate: [10, -10] }}
                transition={{
                    duration: 4.0,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            >
                <Image
                    src="/images/rustic-wedding-clipart-md.png"
                    width={300}
                    height={300}
                    alt="Свадебная пара"
                    className="w-full h-full object-contain opacity-60 inline-block"
                />
            </motion.div>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <SectionLabel>Наша история</SectionLabel>
                    <h2
                        className="mt-3 text-5xl"
                        style={{
                            fontFamily: "'Great Vibes', serif",
                            fontWeight: 400,
                            color: "#2A1A1A",
                            lineHeight: 1.2,
                        }}
                    >
                        Галерея
                    </h2>
                </motion.div>

                <CarouselStacked />
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selected !== null && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        style={{ background: "rgba(42,26,26,0.92)" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.img
                            src={photos[selected].src.replace(
                                /w=\d+&h=\d+/,
                                "w=1200&h=900",
                            )}
                            alt={photos[selected].alt}
                            className="max-w-full max-h-full rounded-2xl object-contain"
                            style={{ maxHeight: "85vh" }}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                            onClick={() => setSelected(null)}
                            aria-label="Закрыть"
                        >
                            <X size={28} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
