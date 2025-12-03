// File: web/src/components/CustomCursor.jsx

"use client";

import { useEffect } from 'react';
import Image from 'next/image';

export const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const links = document.querySelectorAll('a, button, [role="button"]');

    const onMouseMove = (e) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
    };

    const onMouseEnterLink = () => {
      cursor.classList.add('hover');
    };

    const onMouseLeaveLink = () => {
      cursor.classList.remove('hover');
    };

    // Listen for mouse movement on the whole window
    window.addEventListener('mousemove', onMouseMove);

    // Add hover listeners to all interactive elements
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    // Cleanup listeners when the component unmounts
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <div id="custom-cursor">
      <Image
        src="/cursor-default.png" // Your original, default cursor image
        alt="Custom cursor"
        width={32}
        height={32}
      />
    </div>
  );
};