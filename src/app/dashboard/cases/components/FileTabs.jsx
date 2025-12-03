// File: web/src/app/dashboard/cases/components/FileTabs.jsx

export const FileTabs = ({ cases, activeCaseId, onSelectCase }) => {
  return (
    <div className="bg-[#e9d8c1] border-r-2 border-black/15 w-full max-w-xs shrink-0 flex flex-col">
      {/* This is the "Drawer Label" at the top */}
      <div className="p-4 border-b-2 border-black/15 text-center shrink-0">
        <p className="font-typewriter text-xs text-gray-600">SECTION</p>
        <h2 className="font-serif text-2xl font-bold text-black -mt-1">
          Open Dossiers
        </h2>
      </div>

      {/* The list of tabs that can scroll */}
      <div className="overflow-y-auto flex-grow">
        {cases.map(caseItem => {
          const isActive = caseItem.id === activeCaseId;
          return (
            <button
              key={caseItem.id}
              onClick={() => onSelectCase(caseItem.id)}
              className={`w-full text-left p-4 border-b border-black/10 font-sans transition-all relative
                ${isActive
                  ? "bg-[#faf3e3] z-10" // Active tab has the same color as the file cover
                  : "bg-black/5 hover:bg-white/50"
                }`}
            >
              {/* This is the CSS trick: the active tab has no right border, making it blend */}
              <div className={`absolute right-0 top-0 bottom-0 w-px ${isActive ? 'bg-[#faf3e3]' : 'bg-black/15'}`}></div>
              
              <p className={`font-bold ${isActive ? 'text-red-800' : 'text-black'}`}>{caseItem.title}</p>
              <p className={`text-xs font-typewriter ${isActive ? 'text-gray-700' : 'text-gray-600'}`}>{caseItem.fileId}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};