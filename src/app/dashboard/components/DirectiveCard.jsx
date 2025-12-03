// File: web/src/app/(dashboard)/welcome/components/DirectiveCard.jsx

import Link from "next/link";

export const DirectiveCard = ({ href, icon: Icon, title, children }) => (
  // 1. Make the Link tag a flex container so it can grow
  <Link href={href} className="flex">
    {/* 2. The main div now takes up the full width and is a vertical flex container */}
    <div className="bg-black/5 p-6 border border-black/10 hover:border-black/30 hover:shadow-lg transition-all group w-full flex flex-col">
      <div className="flex items-center gap-4">
        <Icon className="w-8 h-8 text-stone-700 shrink-0" />
        <h4 className="font-serif text-xl font-bold text-black">{title}</h4>
      </div>
      {/* 3. The <p> tag is told to grow, filling any available vertical space */}
      <p className="text-sm text-gray-700 mt-3 font-sans leading-relaxed flex-grow">
        {children}
      </p>
    </div>
  </Link>
);
