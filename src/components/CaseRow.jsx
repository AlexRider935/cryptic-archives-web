import Link from 'next/link';

export default function CaseRow({ caseData }) {
  const { id, title, description, difficulty, tier } = caseData;

  return (
    <Link href={`/cases/${id}`} className="block group">
      <div className="bg-[#faf3e3] border-2 border-black/20 p-4 grid grid-cols-12 gap-4 items-center 
                      hover:bg-white hover:shadow-lg transition-all duration-300">
        <div className="col-span-12 md:col-span-6">
          <h3 className="font-serif text-2xl font-bold text-black group-hover:text-red-800 transition-colors">{title}</h3>
          <p className="font-sans text-gray-600 text-sm hidden md:block">{description}</p>
        </div>
        <div className="col-span-6 md:col-span-3 text-center">
          <span className={`font-typewriter text-xs font-bold px-3 py-1 rounded-full ${
            tier === 'Vetted' ? 'bg-amber-300/20 text-amber-800' : 'bg-cyan-300/20 text-cyan-800'
          }`}>
            {tier.toUpperCase()}
          </span>
        </div>
        <div className="col-span-6 md:col-span-3 text-center font-mono text-amber-700">
          {'★'.repeat(difficulty)}{'☆'.repeat(5 - difficulty)}
        </div>
      </div>
    </Link>
  );
}