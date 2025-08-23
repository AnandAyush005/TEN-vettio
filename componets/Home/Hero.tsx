"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Sparkle , Check } from "lucide-react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import Book from "../book_a_Demo"


export default function Hero() { 
  
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false }); // don't let next-auth redirect
    router.push("/login");              // manually redirect
  };

  return (
    <header className="w-full">
      <div className="fixed top-0 left-0 w-full z-50 bg-white border-b border-indigo-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://vettio.com/assets/Images/logo.svg"
              alt="Vettio Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <a href="/find_jobs" className="px-8 py-3 rounded-lg bg-yellow-500 text-black border border-transparent hover:border-black hover:bg-white transition-colors">Find Jobs</a>
            <a onClick={handleSignOut} className="px-8 py-3 rounded-lg bg-yellow-500 text-black border border-transparent hover:border-black hover:bg-white transition-colors">Sign Out</a>
            <Book />
          </nav>
        </div>
      </div>

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

       <div className="mt-15 mx-auto max-w-2xl bg-gradient-to-br from-yellow-50 to-purple-50 shadow-md rounded-2xl">
      <Image
      src="https://vettio.com/assets/Images/landingAssetsR/firstFold.svg"
      alt="Hero visual"
      width={800}
      height={450}
      className="w-full h-auto rounded-3xl    object-contain"
      />
      </div>
      </section>
    </header>
  );
}
