"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Sparkle , Check } from "lucide-react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import Book from "../book_a_Demo"
import Header from "../find_jobs/Header";

export default function Hero() { 
  
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false }); // don't let next-auth redirect
    router.push("/login");              // manually redirect
  };

  return (
    <header className="w-full">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-gray-50 pt-32 pb-24 border-b border-indigo-100 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-800 shadow-sm">
          <Sparkle className="w-4 h-4 text-blue-500" />
          <span>AI-Powered Domain Expert Interviewing</span>
        </div>

        <AnimatedText />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Book />
        </div>

        <div className="mt-4 flex justify-center items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <Check className="w-4 h-4 text-gray-400" /> Free
          </span>
          <span className="flex items-center gap-1">
            <Check className="w-4 h-4 text-gray-400" /> No credit card needed
          </span>
        </div>

        {/* Image with Gradient Glow */}
        <div className="mt-16 relative flex items-center justify-center">
          {/* Gradient Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-purple-500/20 blur-3xl" />

          {/* Image */}
          <Image
            src="https://vettio.com/assets/Images/landingAssetsR/firstFold.svg"
            alt="Hero visual"
            width={800}
            height={450}
            className="relative rounded-3xl  "
          />
        </div>
      </section>
    </header>
  );
}
