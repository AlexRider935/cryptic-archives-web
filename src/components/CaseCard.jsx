import Link from "next/link";
import Image from "next/image";
import { Paperclip } from "lucide-react";

export default function CaseCard({ caseData }) {
  const { id, title, description, image, difficulty, tier } = caseData;

  return (
    <Link href={`/cases/${id}`} className="block group">
      <div
        className="bg-[#faf3e3] h-full rounded-sm border border-black/20 shadow-md 
                      transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={`Image for ${title}`}
            layout="fill"
            objectFit="cover"
            className="rounded-t-sm"
          />
          {/* Thematic Paperclip Element */}
          <div className="absolute top-2 left-2 bg-black/50 p-1 rounded-full">
            <Paperclip size={20} className="text-white/80" />
          </div>
        </div>
        <div className="p-5 text-gray-800">
          <div className="flex justify-between items-center mb-2 font-typewriter">
            <span
              className={`text-xs font-bold uppercase px-2 py-1 border ${
                tier === "Vetted"
                  ? "border-red-700 text-red-700"
                  : "border-blue-700 text-blue-700"
              }`}>
              {tier}
            </span>
            <span className="text-black/70 text-lg">
              {"★".repeat(difficulty)}
              {"☆".repeat(5 - difficulty)}
            </span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-black mb-2 group-hover:text-red-800 transition-colors">
            {title}
          </h3>
          <p className="font-sans text-gray-600 text-sm">{description}</p>
        </div>
        <div className="p-5 pt-0">
          <span className="font-typewriter text-sm text-black group-hover:underline">
            Open File →
          </span>
        </div>
      </div>
    </Link>
  );
}
