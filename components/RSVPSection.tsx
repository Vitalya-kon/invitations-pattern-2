"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";
import { SectionLabel } from "./CountdownSection";

type FormState = {
    name: string;
    attendance: "yes" | "no" | "";
    guests: string;
    dietary: string;
    message: string;
};

export function RSVPSection() {
    const [form, setForm] = useState<FormState>({
        name: "",
        attendance: "",
        guests: "1",
        dietary: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1200);
    };

    const inputStyle: React.CSSProperties = {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "0.9rem",
        color: "#2A1A1A",
        background: "#FAF3EF",
        border: "1px solid rgba(139,77,94,0.2)",
        borderRadius: "12px",
        padding: "12px 16px",
        width: "100%",
        outline: "none",
    };

    const labelStyle: React.CSSProperties = {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "0.78rem",
        color: "#8B7B75",
        letterSpacing: "0.08em",
        textTransform: "uppercase" as const,
        marginBottom: "6px",
        display: "block",
    };

    return (
        <section
            id="rsvp"
            className="py-24 px-6 relative"
            style={{ background: "#F5E8E4" }}
        >
            <div className="absolute inset-0 z-0 h-16 bg-linear-to-t from-[#f5e8e4] to-[#fdf8f2]"></div>
            <div className="max-w-xl mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <SectionLabel>Подтверждение</SectionLabel>
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
                        Будете ли вы?
                    </h2>
                    <p
                        className="mt-4"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "0.95rem",
                            color: "#8B7B75",
                            lineHeight: 1.7,
                        }}
                    >
                        Пожалуйста, подтвердите своё присутствие до{" "}
                        <strong style={{ color: "#8B4D5E" }}>
                            1 августа 2026 года
                        </strong>
                        .
                    </p>
                </motion.div>

                <AnimatePresence mode="wait">
                    {submitted ? (
                        <motion.div
                            key="success"
                            className="text-center py-16 flex flex-col items-center gap-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center"
                                style={{ background: "#8B4D5E" }}
                            >
                                <Check size={36} color="white" />
                            </div>
                            <div>
                                <p
                                    style={{
                                        fontFamily: "'Gloock', serif",
                                        fontSize: "1.5rem",
                                        color: "#2A1A1A",
                                        fontWeight: 400,
                                    }}
                                >
                                    Спасибо, {form.name.split(" ")[0]}!
                                </p>
                                <p
                                    className="mt-3"
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "0.95rem",
                                        color: "#8B7B75",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {form.attendance === "yes"
                                        ? "Мы так рады, что вы будете с нами! Увидимся 14 сентября."
                                        : "Очень жаль, что не получится встретиться. Будем скучать по вам!"}
                                </p>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div
                                className="rounded-2xl overflow-hidden"
                                style={{
                                    background: "#FFFFFF",
                                    border: "1px solid rgba(139,77,94,0.12)",
                                }}
                            >
                                <div className="p-6 flex flex-col gap-5">
                                    {/* Name */}
                                    <div>
                                        <label style={labelStyle}>
                                            Ваше имя
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Имя и фамилия"
                                            value={form.name}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    name: e.target.value,
                                                })
                                            }
                                            style={inputStyle}
                                        />
                                    </div>

                                    {/* Attendance */}
                                    <div>
                                        <label style={labelStyle}>
                                            Присутствие
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {[
                                                {
                                                    value: "yes",
                                                    label: "С радостью!",
                                                },
                                                {
                                                    value: "no",
                                                    label: "К сожалению, нет",
                                                },
                                            ].map((opt) => (
                                                <button
                                                    key={opt.value}
                                                    type="button"
                                                    onClick={() =>
                                                        setForm({
                                                            ...form,
                                                            attendance:
                                                                opt.value as
                                                                    | "yes"
                                                                    | "no",
                                                        })
                                                    }
                                                    className="py-3 px-4 rounded-xl transition-all"
                                                    style={{
                                                        fontFamily:
                                                            "'Montserrat', sans-serif",
                                                        fontSize: "0.875rem",
                                                        background:
                                                            form.attendance ===
                                                            opt.value
                                                                ? "#f2d6ce"
                                                                : "#FAF3EF",
                                                        color:
                                                            form.attendance ===
                                                            opt.value
                                                                ? "#8B4D5E"
                                                                : "#8B7B75",
                                                    }}
                                                >
                                                    {opt.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Guests count */}
                                    {form.attendance === "yes" && (
                                        <div>
                                            <label style={labelStyle}>
                                                Количество гостей
                                            </label>
                                            <select
                                                value={form.guests}
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        guests: e.target.value,
                                                    })
                                                }
                                                style={{
                                                    ...inputStyle,
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {["1", "2", "3", "4"].map(
                                                    (n) => (
                                                        <option
                                                            key={n}
                                                            value={n}
                                                        >
                                                            {n}{" "}
                                                            {n === "1"
                                                                ? "гость"
                                                                : "гостя"}
                                                        </option>
                                                    ),
                                                )}
                                            </select>
                                        </div>
                                    )}

                                    {/* Dietary */}
                                    <div>
                                        <label style={labelStyle}>
                                            Пожелания по меню
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Вегетарианское, аллергии и т.д."
                                            value={form.dietary}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    dietary: e.target.value,
                                                })
                                            }
                                            style={inputStyle}
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label style={labelStyle}>
                                            Поздравление (по желанию)
                                        </label>
                                        <textarea
                                            placeholder="Напишите пару тёплых слов…"
                                            value={form.message}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    message: e.target.value,
                                                })
                                            }
                                            rows={3}
                                            style={{
                                                ...inputStyle,
                                                resize: "vertical" as const,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={
                                    !form.name || !form.attendance || loading
                                }
                                className="py-4 rounded-full transition-all disabled:opacity-50"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "0.9rem",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    background: "#8B4D5E",
                                    color: "#FFFFFF",
                                    cursor:
                                        !form.name || !form.attendance
                                            ? "not-allowed"
                                            : "pointer",
                                }}
                                whileHover={{
                                    scale:
                                        form.name && form.attendance ? 1.02 : 1,
                                }}
                                whileTap={{
                                    scale:
                                        form.name && form.attendance ? 0.98 : 1,
                                }}
                            >
                                {loading ? "Отправляем…" : "Подтвердить"}
                            </motion.button>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
