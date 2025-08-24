"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const rotatingWords = [
  "Digital Marketing.",
  "SEO.",
  "Frontend Development.",
  "Performance Marketing.",
  "Backend Development.",
  "Content Marketing.",
  "Email Marketing.",
  "Mobile Development.",
  "Digital Strategy.",
  "CRM Marketing.",
];

const wordColors = [
  "text-yellow-400", 
  "text-blue-600",     
  "text-red-600",   
  "text-blue-600",    
  "text-yellow-400",   
  "text-blue-600", 
  "text-red-600",  
  "text-blue-600",      
  "text-yellow-400",   
  "text-blue-600",
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 100; 
    let timeout: NodeJS.Timeout;

    const currentWord = rotatingWords[index];

    if (!isDeleting && displayedText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500); 
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index]);

  return (
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 max-w-5xl mx-auto mb-6 leading-tight text-center px-4">
      Get Access To{" "}
      <span className="text-gray-900">Pre-Vetted Talent</span>
      <br className="hidden md:block" />
      Interviewed And Evaluated By Experts In{" "}
      <motion.span
        key={index}
        className={`font-extrabold ${wordColors[index]} border-r-2 border-black pr-1`}
      >
        {displayedText}
      </motion.span>
    </h1>
  );
}
