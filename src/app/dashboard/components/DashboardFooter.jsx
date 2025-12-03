// File: web/src/components/DashboardFooter.jsx

"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth"; // Correct path as confirmed
import { Wifi, Clock, User } from "lucide-react";

export default function DashboardFooter() {
  const { user } = useAuth(); // 1. Get the current logged-in user
  const [systemTime, setSystemTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setSystemTime(new Date().toLocaleTimeString("en-CA", { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#e9d8c1] border-t-2 border-black/10 text-gray-800 font-typewriter shrink-0">
      <div className="container mx-auto flex justify-between items-center p-4 text-sm">
        {/* 2. Status color changed from green to a thematic, serious stone color */}
        <div className="flex items-center gap-2 text-stone-800 font-bold">
          <Wifi size={16} />
          <span>UPLINK: SECURE</span>
        </div>

        {/* 3. Center section now shows the logged-in agent's codename */}
        <div className="hidden md:flex items-center gap-2">
          {user && (
            <>
              <User size={16} className="text-black/60" />
              <span className="text-black/60">AGENT:</span>
              <span className="font-mono font-bold">
                {user.displayName || "IDENTIFYING..."}
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} className="text-black/60" />
          <span>{systemTime}</span>
        </div>
      </div>

      {/* 4. Bottom bar now uses the primary red accent and includes branding */}
      <div className="bg-stone-800 text-stone-300 py-2 text-center">
        <p className="container mx-auto text-xs uppercase tracking-wider">
          <span className="font-bold text-red-500">CLASSIFIED</span>
          <span className="text-stone-400">
            {" "}
            // &copy; {currentYear} CRYPTIC ARCHIVES // EYES ONLY
          </span>
        </p>
      </div>
    </footer>
  );
}
