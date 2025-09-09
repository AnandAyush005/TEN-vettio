"use client";
import React from "react";
<<<<<<< HEAD
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Sparkle, Check } from "lucide-react";
=======
import { Sparkle , Check} from "lucide-react";
>>>>>>> 9f61f420b025da5af59e58bc0b63da909dc1be19
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import Book from "../book_a_Demo";
import Header from "../find_jobs/Header";

<<<<<<< HEAD
export default function Hero() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false }); // don't let next-auth redirect
    router.push("/"); // manually redirect
  };
=======

export default function Hero() { 

>>>>>>> 9f61f420b025da5af59e58bc0b63da909dc1be19

  return (
    <header className="w-full">
      {/* Navbar */}
      <Header page="home"/>

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

        <MainImg page="home" />
        
      </section>

      </header>
)}

export function MainImg({page}:{page : any}){
  return (<div className="mt-16 relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-purple-500/20 blur-3xl" />
          <Image
            src={page === "home" ? "https://vettio.com/assets/Images/landingAssetsR/firstFold.svg" : "https://vettio.com/assets/Images/landingAssets/firstFold.svg"}
            alt="Hero visual"
            width={800}
            height={450}
            className="relative rounded-3xl"
          />
        </div>)
};



