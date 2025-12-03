// File: web/src/app/dashboard/cases/components/ActiveDossier.jsx

import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";

// 1. The component now accepts `agentName` as a prop
export const ActiveDossier = ({ caseData, agentName }) => {
  if (!caseData) {
    return (
      <div className="p-12 text-center flex items-center justify-center h-full">
        <p className="font-serif text-2xl text-gray-500">
          Select an index card to review the dossier.
        </p>
      </div>
    );
  }

  const { id, fileId, title, difficulty, status, synopsis } = caseData;

  const StatusStamp = () => (
    <div className="absolute top-8 -right-8 border-4 border-red-700 p-2 transform rotate-12">
      <h3 className="font-sans text-3xl font-bold text-red-700 tracking-widest leading-none">
        {status.toUpperCase()}
      </h3>
    </div>
  );

  return (
    <div className="relative paper-background border-2 border-black/20 shadow-2xl p-12 h-full flex flex-col justify-between">
      <StatusStamp />
      <div>
        <p className="font-typewriter text-lg text-gray-700">
          OFFICIAL DOSSIER
        </p>
        <h1 className="font-serif text-6xl font-bold text-black -mt-2">
          {title}
        </h1>

        <div className="border-y-2 border-dashed border-black/10 my-8 py-4 space-y-2 font-sans text-black">
          <p>
            <strong className="w-40 inline-block text-gray-600">
              CASE REFERENCE:
            </strong>{" "}
            {fileId}
          </p>
          <p>
            <strong className="w-40 inline-block text-gray-600">
              DIFFICULTY RATING:
            </strong>{" "}
            {difficulty} / 5
          </p>
          {/* 2. THE FIX: Use the `agentName` prop instead of trying to access `auth` */}
          <p>
            <strong className="w-40 inline-block text-gray-600">
              INVESTIGATING AGENT:
            </strong>{" "}
            {agentName || "Active User"}
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold text-black mb-2">
            Lead Investigator's Synopsis:
          </h2>
          <p className="font-sans text-gray-800 leading-relaxed max-w-prose whitespace-pre-wrap">
            {synopsis}
          </p>
        </div>
      </div>

      <div className="mt-12">
        <Link href={`/dashboard/cases/${id}`}>
          <span className="w-full bg-stone-800 text-white font-bold tracking-wider uppercase text-lg py-4 px-4 flex items-center justify-center gap-3 hover:bg-black transition-colors">
            <FileText size={20} /> Unseal Full Case File
          </span>
        </Link>
      </div>
    </div>
  );
};
