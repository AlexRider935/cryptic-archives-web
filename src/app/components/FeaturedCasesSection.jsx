"use client";

import { useState } from "react";
import Link from "next/link";
import { mockCases } from "@/data/mockData";
import CaseCard from "@/components/CaseCard";

export default function FeaturedCasesSection() {
  const [activeTab, setActiveTab] = useState("Vetted");

  const tabs = ["Vetted", "Community"];

  const filteredCases = mockCases.filter((c) => c.tier === activeTab);

  return (
    <section className="bg-[#f3dfc1] py-20 md:py-28 border-y-2 border-black/20 font-sans">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-typewriter text-red-700 uppercase tracking-widest">
            Recently Declassified
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mt-2 mb-4">
            Active Investigations
          </h2>
          <p className="text-gray-700 leading-relaxed">
            These are the files currently demanding attention from our top
            agents. Each dossier is a complete, unsolved mystery. Select your
            assignment.
          </p>
        </div>

        {/* Interactive File Tabs */}
        <div className="flex justify-center border-b-2 border-black/20 mt-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-typewriter uppercase tracking-wider px-6 py-3 text-sm transition-colors duration-300
                ${
                  activeTab === tab
                    ? "border-2 border-black/20 border-b-transparent bg-[#f3dfc1] -mb-[2px] text-black"
                    : "bg-black/5 border-2 border-transparent text-gray-600 hover:bg-black/10"
                }`}>
              {tab} Cases
            </button>
          ))}
        </div>

        {/* Case Grid */}
        <div className="pt-12">
          {filteredCases.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseData={caseItem} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="font-serif text-2xl text-gray-600">
                No cases found in this category.
              </p>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            href="/cases"
            className="font-typewriter text-black border-b-2 border-black/50 pb-1 hover:border-black transition-colors">
            Access Full Archive &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
