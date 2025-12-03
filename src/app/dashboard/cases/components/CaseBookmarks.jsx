// File: web/src/app/dashboard/cases/components/CaseBookmarks.jsx

export const CaseBookmarks = ({ cases, activeCaseId, onSelectCase }) => {
  return (
    <div className="bg-[#e9d8c1] border-r-2 border-black/10 h-full flex flex-col">
      <h2 className="font-serif text-xl p-4 border-b-2 border-black/10 text-black shrink-0">
        Case Dossiers
      </h2>
      <div className="overflow-y-auto flex-grow">
        {cases.map((caseItem) => {
          const isActive = caseItem.id === activeCaseId;
          return (
            <button
              key={caseItem.id}
              onClick={() => onSelectCase(caseItem.id)}
              className={`w-full text-left p-4 border-b border-black/5 font-typewriter transition-all text-sm relative
                ${
                  isActive
                    ? "bg-white/80 shadow-inner"
                    : "hover:bg-white/50 hover:translate-x-1"
                }`}>
              <span
                className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                  isActive ? "bg-red-700" : "bg-transparent"
                }`}></span>
              <p
                className={`font-bold ${
                  isActive ? "text-red-800" : "text-black"
                }`}>
                {caseItem.title}
              </p>
              <p
                className={`text-xs ${
                  isActive ? "text-gray-700" : "text-gray-600"
                }`}>
                {caseItem.fileId}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
