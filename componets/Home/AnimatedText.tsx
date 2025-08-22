"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rotatingWords = [
  "SEO.",
  "Performance Marketing.",
  "Backend Development.",
  "Content Marketing.",
  "Email Marketing.",
  "Mobile Development.",
  "Digital Strategy.",
  "CRM Marketing.",
];

// 👇 Colors for each keyword
const wordColors = [
  "text-blue-600",     // SEO
  "text-indigo-500",   // Performance Marketing
  "text-black",        // Backend Development
  "text-green-600",    // Content Marketing
  "text-pink-600",     // Email Marketing
  "text-purple-600",   // Mobile Development
  "text-red-600",      // Digital Strategy
  "text-indigo-600",   // CRM Marketing
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length); // 🔄 continuous loop
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 max-w-5xl mx-auto mb-6 leading-tight text-center">
      Get Access To{" "}
      <span className="text-gray-900">Pre-Vetted Talent</span>{" "}
      Interviewed And Evaluated By Experts In{" "}
      <span className="inline-block relative w-auto ml-2">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className={`font-extrabold ${wordColors[index]}`}
          >
            {rotatingWords[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}
