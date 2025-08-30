"use client";

import Link from "next/link";
import { Check, X } from "lucide-react";
import { FaSlack, FaTwitter, FaLinkedin } from "react-icons/fa";

import Book from "../book_a_Demo";

const VettioLogo = () => (
  <svg
    width="110"
    height="32"
    viewBox="0 0 110 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-auto"
  >
    <text
      x="0"
      y="24"
      fontFamily="Arial, Helvetica, sans-serif"
      fontSize="24"
      fontWeight="bold"
      fill="white"
    >
      VETTIO
    </text>
    <path
      d="M88.7,16c0-4.4-3.6-8-8-8s-8,3.6-8,8s3.6,8,8,8S88.7,20.4,88.7,16z M80.7,22c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S84,22,80.7,22z"
      fill="#F5A623"
    />
    <path
      d="M80.bg-7,12c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S82.9,12,80.7,12z"
      fill="#F5A623"
    />
    <path
      d="M84.3,10.9c-0.4-0.4-1-0.5-1.4-0.1l-2.2,1.3c-0.4,0.2-0.9,0.2-1.3,0l-2.2-1.3c-0.4-0.2-1-0.2-1.4,0.1c-0.4,0.4-0.5,1-0.1,1.4l2.2,3.8c0.2,0.4,0.6,0.6,1.1,0.6s0.9-0.2,1.1-0.6l2.2-3.8C84.7,11.9,84.7,11.3,84.3,10.9z"
      fill="white"
    />
  </svg>
);

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
            <VettioLogo />
            <Link
              href="mailto:contact@vettio.com"
              className="text-white hover:underline"
            >
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
