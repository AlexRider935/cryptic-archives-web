"use client";

import { useState, useMemo } from "react";
import { mockCases } from "@/data/mockData";
import CaseCard from "@/components/CaseCard";
import CaseRow from "@/components/CaseRow";
import { Search, LayoutGrid, List } from "lucide-react";

// A new sub-component for the interactive star rating filter
const DifficultyFilter = ({ selected, onChange }) => {
  return (
    <div className="flex items-center space-x-1">
      <span className="font-typewriter text-sm mr-2">DIFFICULTY:</span>
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} onClick={() => onChange(star)}>
          <span
            className={`text-2xl transition-colors ${
              selected >= star
                ? "text-amber-600"
                : "text-black/20 hover:text-amber-600/50"
            }`}>
            ★
          </span>
        </button>
      ))}
      {selected > 0 && (
        <button
          onClick={() => onChange(0)}
          className="text-xs text-red-700 ml-2 hover:underline">
          [CLEAR]
        </button>
      )}
    </div>
  );
};

export default function CaseBrowser() {
  const [activeTier, setActiveTier] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [difficulty, setDifficulty] = useState(0); // 0 means all
  const [view, setView] = useState("grid");

  const tiers = ["All", "Vetted", "Community"];

  const filteredCases = useMemo(() => {
    return mockCases.filter((c) => {
      const tierMatch = activeTier === "All" || c.tier === activeTier;
      const searchMatch = c.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const difficultyMatch = difficulty === 0 || c.difficulty === difficulty;
      return tierMatch && searchMatch && difficultyMatch;
    });
  }, [activeTier, searchQuery, difficulty]);

  return (
    <div className="container mx-auto px-4 pt-28 pb-16">
      {/* Page Header */}
      <div className="text-center">
        <p className="font-typewriter text-red-700 uppercase tracking-widest">
          Declassified
        </p>
        <h1 className="font-serif text-6xl md:text-7xl font-bold text-black mt-2">
          The Archives
        </h1>
      </div>

      {/* Advanced File-Tab Filtering System */}
      <div className="mt-12 font-typewriter">
        {/* Main Tier Tabs */}
        <div className="flex border-b-2 border-black/20">
          {tiers.map((tier) => (
            <button
              key={tier}
              onClick={() => setActiveTier(tier)}
              className={`uppercase tracking-wider px-6 pt-3 pb-2 text-md border-x-2 border-t-2 border-black/20 transition-colors
                ${
                  activeTier === tier
                    ? "bg-[#f3dfc1] border-b-0 -mb-[2px] z-10 text-black font-bold"
                    : "bg-black/10 text-gray-600 hover:bg-black/20"
                }`}>
              {tier} Files
            </button>
          ))}
        </div>

        {/* Sub-Filter and Tools Bar */}
        <div className="bg-[#faf3e3] border-2 border-black/20 p-3 flex flex-col md:flex-row items-center justify-between gap-4">
          <DifficultyFilter selected={difficulty} onChange={setDifficulty} />
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-auto">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />
              <input
                type="text"
                placeholder="Search Dossiers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-black/20 p-2 pl-10 text-sm focus:border-black outline-none"
              />
            </div>
            <div className="flex border border-black/20">
              <button
                onClick={() => setView("grid")}
                className={`p-2 ${
                  view === "grid" ? "bg-black text-white" : "bg-white"
                }`}>
                <LayoutGrid size={20} />
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-2 ${
                  view === "list" ? "bg-black text-white" : "bg-white"
                }`}>
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Case Display Area */}
      <div className="py-12">
        {view === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((c) => (
              <CaseCard key={c.id} caseData={c} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCases.map((c) => (
              <CaseRow key={c.id} caseData={c} />
            ))}
          </div>
        )}
        {filteredCases.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-2xl text-gray-600">
              No matching case files found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
