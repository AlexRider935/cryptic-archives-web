// File: web/src/components/HeroSection.jsx

import Link from "next/link";
import { FileText } from "lucide-react";

export default function HeroSection() {
  const fileId = `CYA-${new Date().getFullYear()}-0901`; // Static for consistency

  return (
    <section className="bg-[#f3dfc1] min-h-screen w-full flex items-center justify-center font-sans p-4 md:p-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl">
        {/* Left Column: Dossier Metadata (No changes here) */}
        <div className="lg:col-span-1 text-gray-800/80 font-typewriter p-4">
          <div className="border-2 border-red-700 text-red-700 p-2 text-center mb-8">
            <span className="block font-bold text-2xl tracking-widest leading-none">
              CLASSIFIED
            </span>
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <span className="font-bold text-black">FILE ID:</span> {fileId}
            </p>
            <p>
              <span className="font-bold text-black">STATUS:</span> OPEN //
              URGENT
            </p>
            <p>
              <span className="font-bold text-black">ASSIGNED TO:</span> FIELD
              AGENT (YOU)
            </p>
            <hr className="border-black/20 my-4" />
            <p className="font-bold text-black uppercase">Briefing Summary:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Review Declassified Materials</li>
              <li>Analyze Forensic & Witness Data</li>
              <li>Identify Prime Suspect(s)</li>
              <li>Submit Final Conclusion</li>
            </ul>
          </div>
          <div className="mt-8 border border-black/20 p-3 text-gray-700 italic font-serif text-sm">
            "Archivist's Note: This one has stumped everyone. The key isn't in
            what's there, but what's missing. Good luck."
          </div>
        </div>

        {/* Right Column: Main Briefing */}
        {/* --- THE CHANGE IS HERE: A much lighter, more subtle paper color --- */}
        <div className="lg:col-span-2 bg-[#fdfbf5] border-2 border-black/30 p-8 md:p-12 text-gray-800 shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <FileText size={32} className="text-black" />
            <h2 className="font-typewriter text-2xl uppercase tracking-wider text-black">
              Investigation Mandate
            </h2>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-black leading-tight mb-6">
            Your Investigation Begins Now.
          </h1>
          <p className="text-lg leading-relaxed mb-8">
            Welcome to the Archives. The document you've been assigned contains
            an unsolved case, a story with no ending. Inside, you will find a
            collection of evidence—reports, photographs, and transcripts. There
            are no hints and no multiple choices. Your only tools are the
            evidence provided and your own intuition.
          </p>
          <p className="text-lg leading-relaxed mb-10">
            It is your mission to uncover the truth.
          </p>
          <Link
            href="/cases"
            className="inline-block bg-red-700 text-white font-typewriter text-lg tracking-wider px-10 py-4 uppercase hover:bg-red-800 transition-colors shadow-md">
            Review Case Files
          </Link>
        </div>
      </div>
    </section>
  );
}
