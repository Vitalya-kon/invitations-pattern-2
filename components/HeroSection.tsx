"use client"; 

import Image from "next/image";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useGlobalStore } from '@/store/useGlobalStore';

const HERO_IMAGE = "/images/hero.webp";

export function HeroSection() {
  const scrollToNext = () => {
    const el = document.getElementById("countdown");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const man = useGlobalStore((state) => state.man);
  const woman = useGlobalStore((state) => state.woman);
  const weddingDay = useGlobalStore((state) => state.weddingDay);
  const location = useGlobalStore((state) => state.location);
  const locatiionRegion = useGlobalStore((state) => state.locationRegion);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[#2A1A1A]">
        <Image
            src={HERO_IMAGE}
            width={1000}
            height={400}
            alt="Свадебная пара"
            className="w-full h-full object-cover opacity-40"
            />
      </div>

      {/* Decorative overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(42,26,26,0.3) 0%, rgba(42,26,26,0.55) 50%, rgba(42,26,26,0.75) 100%)",
        }}
      />

      {/* Decorative floral corners */}
      <FloralCorner className="absolute top-6 left-6 opacity-60" />
      <FloralCorner className="absolute top-6 right-6 opacity-60 scale-x-[-1]" />
      <FloralCorner className="absolute bottom-6 left-6 opacity-60 scale-y-[-1]" />
      <FloralCorner className="absolute bottom-6 right-6 opacity-60 scale-[-1]" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div 
        initial={{  x:0, y:-200,rotate: -24  }}
        animate={{ x:0, y:0,rotate:0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -inset-32 z-20">
            <Image
            src='/images/heart.png'
            width={1000}
            height={400}
            alt="Свадебная пара"
            className="w-full h-full object-contain opacity-40"
            />
        </motion.div>

        <motion.p
          className="text-[#f5c2cd] tracking-[0.35em] uppercase mb-6"
          style={{ fontFamily: "'Calligraffitti', serif", fontSize: "0.8rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Мы приглашаем вас разделить нашу радость
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h2
            className="text-white leading-none text-7xl"
            style={{
              fontFamily: "'Great Vibes', serif",
              fontWeight: 400,
            }}
          >
            {woman}
          </h2>
          <p
            className=""
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: "#D4A574",
            }}
          >
            &amp;
          </p>
          <h2
            className="text-white leading-none text-7xl"
            style={{
              fontFamily: "'Great Vibes', serif",
              fontWeight: 400,
            }}
          >
            {man}
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div
            className="w-16 h-px opacity-60"
            style={{ background: "#D4A574" }}
          />
          <p
            className="text-[#E8D5C8] tracking-widest uppercase"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.25em",
            }}
          >
            {weddingDay}
          </p>
          <p
            className="text-[#C4A898]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem" }}
          >
            {location} <br/> · {locatiionRegion}
          </p>
          <div
            className="w-16 h-px opacity-60"
            style={{ background: "#D4A574" }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        aria-label="Прокрутить вниз"
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
}

function FloralCorner({ className }: { className?: string }) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 10 Q 40 10 60 30 Q 80 50 80 80"
        stroke="#D4A574"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M10 10 Q 10 40 30 60 Q 50 80 80 80"
        stroke="#D4B0B8"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      <circle cx="22" cy="22" r="3" fill="#D4A574" opacity="0.5" />
      <circle cx="45" cy="18" r="2" fill="#D4B0B8" opacity="0.4" />
      <circle cx="18" cy="45" r="2" fill="#D4B0B8" opacity="0.4" />
      <path
        d="M30 15 Q 35 8 40 15 Q 35 22 30 15Z"
        fill="#D4A574"
        opacity="0.4"
      />
      <path
        d="M15 30 Q 8 35 15 40 Q 22 35 15 30Z"
        fill="#D4A574"
        opacity="0.4"
      />
      <path
        d="M55 25 Q 60 18 65 25 Q 60 32 55 25Z"
        fill="#D4B0B8"
        opacity="0.35"
      />
      <path
        d="M25 55 Q 18 60 25 65 Q 32 60 25 55Z"
        fill="#D4B0B8"
        opacity="0.35"
      />
    </svg>
  );
}
