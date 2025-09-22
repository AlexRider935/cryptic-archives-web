"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";

// New Sub-component for the user profile, styled as a file tab
const ProfileTab = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname.startsWith("/dashboard");

  return (
    <div className="relative">
      {/* The Tab itself, which is a clickable button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`flex items-center space-x-2 uppercase tracking-wider px-4 pt-2 pb-1 text-sm border-x-2 border-t-2 border-black/20 transition-colors
          ${
            isActive || isMenuOpen
              ? "bg-[#f3dfc1] border-b-0 -mb-[2px] z-10 text-black font-bold"
              : // Note: changed from bg-black/5 to bg-black/10 to be more visible on manila bg
                "bg-black/10 text-gray-600 hover:bg-black/20"
          }`}>
        <User size={16} />
        <span>{user.agentId}</span>
      </button>

      {/* The simple, thematic menu that appears on click */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-[2px] w-56 bg-[#faf3e3] border-2 border-black/20 shadow-lg font-typewriter z-20">
          <div className="p-1">
            <Link
              href="/dashboard"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center w-full px-3 py-2 text-sm hover:bg-black/5">
              <LayoutDashboard className="w-4 h-4 mr-3" />
              Agent Dashboard
            </Link>
            <button
              onClick={onLogout}
              className="flex items-center w-full px-3 py-2 text-sm text-red-700 hover:bg-red-700 hover:text-white">
              <LogOut className="w-4 h-4 mr-3" />
              End Session
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// The Main Header Component
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Toggle to see both states
  const [accessCode, setAccessCode] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    const code = `CYA-${Math.random().toString(16).substr(2, 8).toUpperCase()}`;
    setAccessCode(code);
  }, []);

  const navLinks = [
    { href: "/cases", label: "Case Files" },
    { href: "/evidence-locker", label: "Evidence Locker" },
    { href: "/agents", label: "Field Agents" },
  ];

  const user = { agentId: "AGENT 77" };

  return (
    <header className="bg-[#f3dfc1] border-b-2 border-black/20 text-gray-800 font-typewriter sticky top-0 z-50">
      <div className="container mx-auto flex items-end justify-between px-4">
        <div className="flex items-center space-x-4 py-2">
          <Link
            href="/"
            className="flex flex-col items-center border-r-2 border-black/10 pr-4">
            <span className="text-xs text-red-700 tracking-widest">
              CONFIDENTIAL
            </span>
            <span className="text-2xl font-bold tracking-tighter">
              CRYPTIC ARCHIVES
            </span>
          </Link>
          <div className="text-xs hidden lg:block">
            <p>
              DATE:{" "}
              {new Date("2025-09-01T17:33:01").toLocaleDateString("en-CA")}
            </p>
            <p>ACCESS CODE: {accessCode}</p>
          </div>
        </div>

        {/* Combined Navigation and Profile Area */}
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

          {/* Separator and Profile Section */}
          <div className="h-8 border-l-2 border-black/20 ml-4 pl-6">
            {isLoggedIn ? (
              <ProfileTab user={user} onLogout={() => setIsLoggedIn(false)} />
            ) : (
              <Link
                href="/login"
                className="bg-red-700 text-white px-4 py-2 text-sm tracking-wider hover:bg-red-800 transition-colors">
                ACCESS TERMINAL
              </Link>
            )}
          </div>
        </div>

        <div className="md:hidden py-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- COMPLETE MOBILE MENU CODE --- */}
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
          {isLoggedIn ? (
            <div className="flex flex-col items-center space-y-4">
              <p className="text-xl">AGENT ID: 77</p>
              <Link
                href="/dashboard"
                className="text-lg text-amber-800"
                onClick={() => setIsMenuOpen(false)}>
                Dashboard
              </Link>
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setIsMenuOpen(false);
                }}
                className="text-lg text-red-700">
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-red-700 text-white mt-4 px-6 py-3 tracking-wider"
              onClick={() => setIsMenuOpen(false)}>
              ACCESS TERMINAL
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
