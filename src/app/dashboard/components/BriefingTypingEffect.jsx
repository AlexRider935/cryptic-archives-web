// File: web/src/app/(dashboard)/welcome/components/BriefingTypingEffect.jsx

"use client";
import { useState, useEffect } from "react";

export const BriefingTypingEffect = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return (
    <p className="text-gray-800 leading-relaxed font-sans">{displayedText}</p>
  );
};
