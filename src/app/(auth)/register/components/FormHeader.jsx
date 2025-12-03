// File: web/src/app/(auth)/register/components/FormHeader.jsx

import { PenSquare } from "lucide-react"; // Changed icon to feel more like a dispatch

export const FormHeader = ({ title, referenceId }) => (
  <div className="border-2 border-black/15 bg-black/5 mb-8">
    {/* Top Bar with Title */}
    <div className="flex justify-between items-center p-4 border-b-2 border-black/10">
      <div className="flex items-center gap-3">
        <PenSquare className="w-8 h-8 text-stone-700" />
        <div>
          <p className="font-sans text-sm text-gray-600">DISPATCH TYPE:</p>
          <h3 className="font-serif text-xl font-bold text-black">{title}</h3>
        </div>
      </div>
      <div className="text-right">
        <p className="font-mono text-xs text-gray-600">REFERENCE CODE:</p>
        <p className="font-mono text-lg text-black">{referenceId}</p>
      </div>
    </div>

    {/* Bottom Bar with "Stamp" */}
    <div className="bg-black/5 text-center py-2">
      <p className="font-mono text-lg font-bold text-red-800/80 tracking-[0.2em]">
        URGENT & CONFIDENTIAL
      </p>
    </div>
  </div>
);
