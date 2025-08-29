"use client";

import { Sparkle, Check, User, Menu, X } from "lucide-react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white border-b border-indigo-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="https://vettio.com/assets/Images/logo.svg"
              alt="Vettio Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <a
              href="#"
              className="px-8 py-3 rounded-lg bg-white text-black 
              border-2 border-black 
              hover:bg-yellow-500 hover:border-transparent 
              transition-colors duration-300"
            >
              Find Jobs
            </a>

            <a
              href="#"
              className="px-8 py-3 rounded-lg bg-yellow-500 text-black border-2 border-transparent hover:border-black hover:bg-white transition-colors"
            >
              Login & Sign up
            </a>
            <a
              href="#"
              className="px-8 py-3 rounded-lg bg-yellow-500 text-black border-2 border-transparent hover:border-black hover:bg-white transition-colors"
            >
              Book a demo
            </a>

            <a
  href="#"
  className="w-12 h-12 flex items-center justify-center rounded-full border-3 border-yellow-500 hover:border-black transition-colors"
>
  <User className="w-9 h-9 text-gray-600 hover:text-yellow-500" />
</a>

          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="sm:hidden p-2 rounded-lg border border-gray-300 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
            <a
              href="#"
              className="px-6 py-2 rounded-lg bg-white text-black border-2 border-black hover:bg-yellow-500 hover:border-transparent transition-colors"
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="px-6 py-2 rounded-lg bg-yellow-500 text-black border-2 border-transparent hover:border-black hover:bg-white transition-colors"
            >
              Login & Sign up
            </a>
            <a
              href="#"
              className="px-6 py-2 rounded-lg bg-yellow-500 text-black border-2 border-transparent hover:border-black hover:bg-white transition-colors"
            >
              Book a demo
            </a>
            <a href="#" className="flex items-center gap-2">
              <User className="w-8 h-8 text-gray-700 hover:text-yellow-500 cursor-pointer" />
              <span>Profile</span>
            </a>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section className="w-full bg-gray-50 pt-32 pb-24 border-b border-indigo-100 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-800 shadow-sm">
          <Sparkle className="w-4 h-4 text-blue-500" />
          <span>AI-Powered Domain Expert Interviewing</span>
        </div>

        <AnimatedText />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 rounded-lg bg-yellow-500 text-black font-medium border-2 border-transparent hover:border-black hover:bg-white transition-colors">
            Book a demo
          </button>
        </div>

        <div className="mt-4 flex justify-center items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <Check className="w-4 h-4 text-gray-400" /> Free
          </span>
          <span className="flex items-center gap-1">
            <Check className="w-4 h-4 text-gray-400" /> No credit card needed
          </span>
        </div>

        <div className="mt-16 relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-purple-500/20 blur-3xl" />
          <Image
            src="https://vettio.com/assets/Images/landingAssetsR/firstFold.svg"
            alt="Hero visual"
            width={800}
            height={450}
            className="relative rounded-3xl"
          />
        </div>
      </section>
    </header>
  );
}
