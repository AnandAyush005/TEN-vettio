import React from 'react';
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Book from "../book_a_Demo"
import Image from "next/image";

const Header = () => {
    
  const router = useRouter();
  
  const handleSignOut = async () => {
    await signOut({ redirect: false }); // don't let next-auth redirect
    router.push("/");              // manually redirect
  };
  
  return (
      <div className="fixed top-0 left-0 w-full z-50 bg-white border-b border-indigo-200">
        <div className="max-w-7xl mx-auto py-4 flex items-center justify-between">
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

  );
};

export default Header;
