// File: web/src/app/dashboard/cases/components/CaseCard.jsx

import Link from "next/link";
import { FileText, Shield } from "lucide-react";

export const CaseCard = ({ caseData }) => {
  const { id, fileId, title, difficulty, status, synopsis, tags } = caseData;

  const getStatusColor = () => {
    switch (status) {
      case "Urgent":
        return "bg-red-700 text-white";
      case "Open":
        return "bg-sky-700 text-white";
      case "Cold Case":
        return "bg-gray-500 text-white";
      default:
        return "bg-black/20 text-black";
    }
  };

  return (
    // 1. REMOVED paper-background. Added a cleaner, lighter bg to look like a separate file.
    <div className="bg-[#faf3e3] border-2 border-black/15 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <p className="font-typewriter text-xs text-gray-600">{fileId}</p>
          <span
            className={`px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${getStatusColor()}`}>
            {status}
          </span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-black mb-2">
          {title}
        </h3>
        <div className="flex items-center gap-1 mb-4">
          <span className="font-sans text-xs font-bold text-gray-700">
            Difficulty:
          </span>
          {[...Array(5)].map((_, i) => (
            <Shield
              key={i}
              className={`w-4 h-4 ${
                i < difficulty ? "text-stone-800" : "text-black/10"
              }`}
            />
          ))}
        </div>
        <p className="font-sans text-sm text-gray-800 leading-relaxed mb-4">
          {synopsis}
        </p>
      </div>
      <div className="border-t-2 border-dashed border-black/10 p-4 bg-black/5">
        <Link href={`/dashboard/cases/${id}`}>
          <span className="w-full bg-stone-800 text-white font-bold tracking-wider uppercase text-sm py-2 px-4 flex items-center justify-center gap-2 hover:bg-black transition-colors">
            <FileText size={16} /> Open Case File
          </span>
        </Link>
      </div>
    </div>
  );
};
