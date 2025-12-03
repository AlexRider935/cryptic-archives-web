// File: web/src/app/dashboard/cases/components/IndexCard.jsx

import { MapPin } from "lucide-react";

export const IndexCard = ({ caseData, isActive, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className={`relative w-full text-left p-4 transition-all duration-200
        ${
          isActive
            ? "bg-[#fdfbf5] shadow-lg scale-105 z-10"
            : "bg-[#faf3e3]/80 hover:bg-white/90 shadow-md hover:shadow-lg"
        }`}
      style={{
        border: "1px solid rgba(0,0,0,0.2)",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // For clean borders
      }}>
      {/* The "Pin" that appears on the active card */}
      {isActive && (
        <MapPin className="absolute top-2 right-2 w-6 h-6 text-red-700 fill-current" />
      )}

      <p className="font-typewriter text-xs text-gray-500">{caseData.fileId}</p>
      <h3 className="font-serif font-bold text-lg text-black">
        {caseData.title}
      </h3>
      <div className="mt-2 flex gap-1.5">
        {caseData.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-black/10 text-gray-700 px-1.5 py-0.5 font-sans">
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
};
