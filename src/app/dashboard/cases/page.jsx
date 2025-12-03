// File: web/src/app/dashboard/cases/page.jsx

"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { mockCases } from "@/data/mockCases"; // 1. THE FIX: Import the case data
import { IndexCard } from "./components/IndexCard";
import { ActiveDossier } from "./components/ActiveDossier";

export default function InvestigatorDeskPage() {
  const { user } = useAuth();
  // This line will now work correctly because mockCases is defined
  const [selectedCaseId, setSelectedCaseId] = useState(
    mockCases[0]?.id || null
  );
  const selectedCase = mockCases.find((c) => c.id === selectedCaseId);

  return (
    <div className="leather-folio-bg min-h-full">
      <div className="container mx-auto p-8 md:p-12">
        <div className="text-center mb-8">
          <h1 className="font-serif text-5xl text-white/90 font-bold [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]">
            The Archives
          </h1>
          <p className="font-sans text-white/70 mt-2">
            Select a case from the evidence board to begin your investigation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="manila-folder-bg border-4 border-[#6b5a48] shadow-2xl p-6">
              <h2 className="font-serif text-2xl text-black border-b-2 border-black/20 pb-3 mb-6 text-center [text-shadow:_0_1px_0_rgb(255_255_255_/_30%)]">
                Pending Cases
              </h2>
              <div className="space-y-4">
                {mockCases.map((caseData) => (
                  <IndexCard
                    key={caseData.id}
                    caseData={caseData}
                    isActive={selectedCaseId === caseData.id}
                    onSelect={() => setSelectedCaseId(caseData.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ActiveDossier
              caseData={selectedCase}
              agentName={user?.displayName}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
