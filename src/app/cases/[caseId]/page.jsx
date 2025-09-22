// src/app/cases/[caseId]/page.jsx
"use client";

import { useState } from "react";
import { mockCases } from "@/data/MockData";
import Image from "next/image";

export default function CaseDetailPage({ params }) {
  const { caseId } = params;
  const caseData = mockCases.find((c) => c.id === caseId);

  // Set the first piece of evidence as the default view
  const [selectedEvidence, setSelectedEvidence] = useState(
    caseData?.evidence[0] || null
  );

  if (!caseData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-4xl font-serif text-white">Case Not Found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-28 pb-16">
      <h1 className="text-5xl font-serif font-bold text-center text-amber-300 mb-2">
        {caseData.title}
      </h1>
      <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-12">
        {caseData.description}
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Evidence Locker (Left Sidebar) */}
        <aside className="w-full md:w-1/3 lg:w-1/4">
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
            <h2 className="text-2xl font-serif text-white mb-4">
              Evidence Locker
            </h2>
            <ul className="space-y-2">
              {caseData.evidence.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setSelectedEvidence(item)}
                    className={`w-full text-left p-3 rounded-md transition-colors ${
                      selectedEvidence?.id === item.id
                        ? "bg-amber-300/10 text-amber-300"
                        : "hover:bg-gray-700/50 text-gray-300"
                    }`}>
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Evidence Viewer (Main Panel) */}
        <main className="w-full md:w-2/3 lg:w-3/4">
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6 min-h-[500px]">
            {selectedEvidence ? (
              <div>
                <h3 className="text-3xl font-serif text-white mb-4">
                  {selectedEvidence.title}
                </h3>
                {selectedEvidence.type === "document" && (
                  <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {selectedEvidence.content}
                  </p>
                )}
                {selectedEvidence.type === "image" && (
                  <div className="relative w-full h-96 mt-4">
                    <Image
                      src={selectedEvidence.content}
                      alt={selectedEvidence.title}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-400">
                Select an item from the Evidence Locker to view details.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
