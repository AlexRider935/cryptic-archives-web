"use client";

import { useState, useMemo } from "react";
import { mockCases } from "@/data/mockData";
import CaseCard from "@/components/CaseCard";
import CaseRow from "@/components/CaseRow";
import { Search, LayoutGrid, List } from "lucide-react";

export default function CaseLibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  const [tier, setTier] = useState("all");
  const [view, setView] = useState("grid"); // 'grid' or 'list'

  const filteredCases = useMemo(() => {
    return mockCases.filter((c) => {
      const searchMatch = c.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const difficultyMatch =
        difficulty === "all" || c.difficulty === parseInt(difficulty);
      const tierMatch = tier === "all" || c.tier === tier;
      return searchMatch && difficultyMatch && tierMatch;
    });
  }, [searchQuery, difficulty, tier]);

  return (
    <div>
      {/* Advanced Filter Bar */}
      <div className="bg-[#faf3e3] border-2 border-black/20 p-4 my-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-1/3">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by case title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-black/20 p-2 pl-10 font-sans text-sm focus:border-black outline-none"
          />
        </div>
        <div className="flex items-center gap-4 font-typewriter text-sm">
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="bg-white border border-black/20 p-2">
            <option value="all">All Difficulties</option>
            <option value="1">★☆☆☆☆</option>
            <option value="2">★★☆☆☆</option>
            <option value="3">★★★☆☆</option>
            <option value="4">★★★★☆</option>
            <option value="5">★★★★★</option>
          </select>
          <select
            value={tier}
            onChange={(e) => setTier(e.target.value)}
            className="bg-white border border-black/20 p-2">
            <option value="all">All Tiers</option>
            <option value="Vetted">Vetted</option>
            <option value="Community">Community</option>
          </select>
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

      {/* Conditional Rendering of Views */}
      {view === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((caseItem) => (
            <CaseCard key={caseItem.id} caseData={caseItem} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredCases.map((caseItem) => (
            <CaseRow key={caseItem.id} caseData={caseItem} />
          ))}
        </div>
      )}

      {filteredCases.length === 0 && (
        <div className="text-center py-20">
          <p className="font-serif text-2xl text-gray-600">
            No matching case files found in the archive.
          </p>
        </div>
      )}
    </div>
  );
}
