// File: web/src/app/dashboard/cases/components/FileCover.jsx

import Link from "next/link";
import { FileText } from "lucide-react";

export const FileCover = ({ caseData }) => {
  if (!caseData) {
    return (
      <div className="bg-[#faf3e3] p-12 text-center flex items-center justify-center h-full">
        <p className="font-serif text-2xl text-gray-500">
          Select a file tab to review its cover.
        </p>
      </div>
    );
  }

  const { id, fileId, title, difficulty, status, synopsis } = caseData;

  const getStatusColor = () => {
    switch (status) {
      case "Urgent":
        return "border-red-700 text-red-700";
      case "Open":
        return "border-sky-700 text-sky-700";
      case "Cold Case":
        return "border-gray-500 text-gray-500";
      default:
        return "border-black/20 text-black";
    }
  };

  return (
    // The background color is now the clean file cover color
    <div className="bg-[#faf3e3] paper-background p-12 h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <div>
            <p className="font-typewriter text-lg text-gray-700">Dossier:</p>
            <h1 className="font-serif text-6xl font-bold text-black -mt-2">
              {title}
            </h1>
          </div>
          <div className={`border-2 p-2 text-center ${getStatusColor()}`}>
            <span className="block font-bold text-2xl tracking-widest leading-none">
              STATUS: {status.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="border-y-2 border-dashed border-black/10 my-8 py-4 space-y-2 font-sans text-black">
          <p>
            <span className="font-bold w-32 inline-block">File Reference:</span>{" "}
            {fileId}
          </p>
          <p>
            <span className="font-bold w-32 inline-block">
              Difficulty Level:
            </span>{" "}
            {difficulty} / 5
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold text-black mb-2">
            Case Synopsis:
          </h2>
          <p className="font-sans text-gray-800 leading-relaxed max-w-prose">
            {synopsis}
          </p>
        </div>
      </div>

      <div className="mt-12">
        <Link href={`/dashboard/cases/${id}`}>
          <span className="w-full bg-red-800 text-white font-bold tracking-wider uppercase text-lg py-4 px-4 flex items-center justify-center gap-3 hover:bg-red-900 transition-colors">
            <FileText size={20} /> Begin Investigation
          </span>
        </Link>
      </div>
    </div>
  );
};
