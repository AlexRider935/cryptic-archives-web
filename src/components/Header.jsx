// File: web/src/components/Header.jsx

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

// The Main Header Component, combining the best of theme and marketing function
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const pathname = usePathname();

  // Dynamic access code for thematic flair
  useEffect(() => {
    const code = `CYA-${Math.random().toString(16).substr(2, 8).toUpperCase()}`;
    setAccessCode(code);
  }, []);

  // Navigation links are marketing-focused
  const navLinks = [
    { href: "/features", label: "The Method" },
    { href: "/about", label: "Our Story" },
    { href: "/pricing", label: "Membership" },
  ];

  return (
    // Base font is the thematic typewriter style
    <header className="bg-[#f3dfc1] border-b-2 border-black/20 text-gray-800 font-typewriter sticky top-0 z-50">
      <div className="container mx-auto flex items-end justify-between px-4">
        {/* --- LEFT SIDE: The Original, Beloved Logo Block --- */}
        <div className="flex items-center space-x-4 py-2">
          <Link
            href="/"
            className="flex flex-col items-center border-r-2 border-black/10 pr-4">
            <span className="text-xs text-red-700 tracking-widest">
              CONFIDENTIAL
            </span>
            {/* The main title uses the elegant serif font */}
            <span className=" text-3xl font-bold tracking-tighter text-black">
              CRYPTIC ARCHIVES
            </span>
          </Link>
          <div className="text-xs hidden lg:block">
            <p>DATE: {new Date().toLocaleDateString("en-CA")}</p>
            <p>ACCESS CODE: {accessCode}</p>
          </div>
        </div>

        {/* --- RIGHT SIDE: Marketing Navigation & CTAs in the Dossier Style --- */}
        <div className="hidden md:flex items-end space-x-2">
          {/* Main Navigation Tabs */}
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`uppercase tracking-wider px-4 pt-2 pb-1 text-sm border-x-2 border-t-2 border-black/20 transition-colors
                  ${
                    isActive
                      ? "bg-[#f3dfc1] border-b-0 -mb-[2px] z-10 text-black font-bold"
                      : "bg-black/10 text-gray-600 hover:bg-black/20"
                  }`}>
                {link.label}
              </Link>
            );
          })}

          {/* Separator and Clear Calls-to-Action */}
          <div className="h-8 border-l-2 border-black/20 ml-4 pl-6 flex items-center gap-6">
            <Link href="/login">
              <span className="font-sans text-sm font-bold text-gray-700 hover:text-black transition-colors">
                Agent Log In
              </span>
            </Link>
            <Link href="/register">
              <span className="bg-red-800 text-white font-sans text-sm font-bold py-2 px-4 flex items-center gap-2 hover:bg-red-900 transition-colors">
                Join Now <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden py-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- Full-featured Mobile Menu --- */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#f3dfc1] border-t-2 border-black/20 flex flex-col items-center space-y-6 p-8 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl uppercase"
              onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <hr className="w-1/2 border-black/20 my-4" />
          <div className="flex flex-col items-center space-y-4 w-full">
            <Link href="/login" className="w-full">
              <span className="block text-center font-sans text-lg font-bold text-gray-700 py-2">
                Agent Log In
              </span>
            </Link>
            <Link href="/register" className="w-full">
              <span className="block text-center bg-red-800 text-white font-sans font-bold py-4 text-lg">
                Join Now
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
