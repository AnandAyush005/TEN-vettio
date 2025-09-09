import React from 'react';
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Book from "../book_a_Demo"
import Image from "next/image";
import {User, Menu, X  } from "lucide-react";
import { useState } from "react";
import BookButton from '../book_a_Demo';

const Header = ({page}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  const handleSignOut = async () => {
    await signOut({ redirect: false }); // don't let next-auth redirect
    router.push("/");              // manually redirect
  };
  
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
              href={page === "home" ? "/find_jobs" : "/Home"}
              className="px-8 py-3 rounded-lg bg-white text-black 
              border-2 border-black 
              hover:bg-yellow-500 hover:border-transparent 
              transition-colors duration-300"
            >
              {page === "home"? "Find Jobs" : "Hire Talent"}
            </a>

            <a
              href="#"
              className="px-8 py-3 rounded-lg bg-yellow-500 text-black border-2 border-transparent hover:border-black hover:bg-white transition-colors text-center flex items-center justify-center"
              onClick={handleSignOut}
            >
              Sign Out
            </a>
            <BookButton />

            <a
              href="/profile"
              className="w-12 h-12 flex items-center justify-center rounded-full border-3 border-yellow-500 hover:border-black transition-colors"
            >
              <User className="w-9 h-9 text-gray-600 hover:text-yellow-500" />
            </a>

          </nav>

          {/* Mobile Hamburger Button */}
          <button
            aria-label="Toggle menu"
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
              href="/find_jobs"
              className="px-8 py-3 rounded-lg bg-yellow-500 text-black border-2 border-transparent hover:border-black hover:bg-white transition-colors text-center flex items-center justify-center"
            >
              Find Jobs
            </a>
            <a
              className="px-8 py-3 rounded-lg bg-yellow-500 text-black border-2 border-transparent hover:border-black hover:bg-white transition-colors text-center flex items-center justify-center"
              onClick={handleSignOut}
            >
             Sign out
            </a>
            <BookButton />
            <a href="/profile" className="flex items-center gap-2 w-full justify-center">
              <User className="w-8 h-8 text-gray-700 hover:text-yellow-500 cursor-pointer" />
              <span>Profile</span>
            </a>
          </div>
        )}
      </div>
    </header>

  );
};

export default Header;
