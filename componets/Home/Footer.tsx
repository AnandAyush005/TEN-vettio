"use client";

import Link from "next/link";
import { Check, X } from "lucide-react";
import { FaSlack, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

import Book from "../book_a_Demo";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-[#5C2ED2] text-white py-12 sm:py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Stop Guessing, <br /> Start Hiring{" "}
              <span className="text-yellow-500">Confidently.</span>
            </h2>
            <p className="mt-4 text-lg">
              Join us today and see how Vettio can revolutionize your talent
              search.
            </p>
          </div>

          <div className="text-center">
            <Book />
            <div className="mt-4 flex justify-center items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-400" /> Free
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-400" /> No credit card
                needed
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/20 grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <Image
                  src="https://vettio.com/assets/Images/logo.svg"
                  alt="Vettio Logo"
                  width={120}
                  height={40}
                  className="w-40"
                />
            <Link href="mailto:contact@vettio.com" className="text-white hover:underline">
              contact@vettio.com
            </Link>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link href="#" className="hover:underline">
                LinkedIn
              </Link>
              <Link href="#" className="hover:underline">
                X (Twitter)
              </Link>
              <Link href="#" className="hover:underline">
                Slack
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-gray-300 text-sm py-6 px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          © 2025 Vettio. All rights reserved ·{" "}
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>{" "}
          ·{" "}
          <Link href="#" className="hover:underline">
            Terms and Conditions
          </Link>
        </p>
        <div className="flex items-center gap-4">
          <span>Social Media:</span>
          <FaSlack className="w-5 h-5" />
          <FaTwitter className="w-5 h-5" />
          <FaLinkedin className="w-5 h-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
