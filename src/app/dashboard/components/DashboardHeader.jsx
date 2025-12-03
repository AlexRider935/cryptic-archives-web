// File: web/src/components/DashboardHeader.jsx

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, User } from "lucide-react";

export default function DashboardHeader() {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  const navLinks = [
    { href: "/dashboard/welcome", label: "Dashboard" },
    { href: "/dashboard/cases", label: "Case Files" },
    { href: "/dashboard/evidence-locker", label: "Evidence Locker" },
  ];

  if (loading) {
    return (
      <header className="bg-[#f3dfc1] border-b-2 border-black/20 h-[76px] shrink-0"></header>
    );
  }

  return (
    <header className="bg-[#f3dfc1] border-b-2 border-black/20 text-gray-800 font-typewriter sticky top-0 z-50 shrink-0">
      <div className="container mx-auto flex items-end justify-between px-4">
        {/* LEFT SIDE: Thematic Branding (remains the same) */}
        <div className="flex items-center space-x-4 py-2">
          <Link
            href="/dashboard/welcome"
            className="flex flex-col items-center border-r-2 border-black/10 pr-4">
            <span className="text-xs text-red-700 tracking-widest">
              AGENT PORTAL
            </span>
            <span className="text-3xl font-bold tracking-tighter text-black">
              CRYPTIC ARCHIVES
            </span>
          </Link>
        </div>

        {/* --- RIGHT SIDE: Agent Navigation with the new "Clip" feature --- */}
        <div className="hidden md:flex items-end space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);

            // --- THE CHANGE: Conditional Rendering for the "Clipped" Tab ---
            if (link.label === "Case Files") {
              return (
                <Link key={link.href} href={link.href} className="relative">
                  <div
                    className={`uppercase tracking-wider px-4 pt-2 pb-1 text-sm border-x-2 border-t-2 border-black/20 transition-colors ${
                      isActive
                        ? "bg-[#e9d8c1] border-b-0 -mb-[2px] z-10 text-black font-bold"
                        : "bg-black/10 text-gray-600 hover:bg-black/20"
                    }`}>
                    {/* The "Clip" only appears when this tab is active */}
                    {isActive && (
                      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-red-700 text-white px-3 py-0.5 rounded-t-md text-xs font-bold shadow-md">
                        SELECTED
                      </div>
                    )}
                    {link.label}
                  </div>
                </Link>
              );
            }

            // --- The original code for all other tabs ---
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`uppercase tracking-wider px-4 pt-2 pb-1 text-sm border-x-2 border-t-2 border-black/20 transition-colors ${
                  isActive
                    ? "bg-[#e9d8c1] border-b-0 -mb-[2px] z-10 text-black font-bold"
                    : "bg-black/10 text-gray-600 hover:bg-black/20"
                }`}>
                {link.label}
              </Link>
            );
          })}

          {/* Profile Section (remains the same) */}
          <div className="h-8 border-l-2 border-black/20 ml-4 pl-6 flex items-center">
            {user && (
              <div className="group relative">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <User size={16} />
                  <span className="uppercase text-sm font-bold">
                    {user.displayName || "Agent"}
                  </span>
                </div>
                <div className="absolute top-full right-0 mt-2 w-48 bg-[#faf3e3] border-2 border-black/20 shadow-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  <div className="p-1">
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-3 py-2 text-sm text-red-700 hover:bg-red-700 hover:text-white">
                      <LogOut className="w-4 h-4 mr-3" />
                      End Session
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
