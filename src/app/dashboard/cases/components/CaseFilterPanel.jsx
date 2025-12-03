import { Search, RotateCcw, Shield, FileClock } from "lucide-react";

export const CaseFilterPanel = ({
  searchTerm, onSearchChange,
  difficulty, onDifficultyChange,
  status, onStatusChange,
  onReset
}) => {
  
  const difficulties = [1, 2, 3, 4, 5];
  const statuses = ['All', 'Open', 'Urgent', 'Cold Case'];

  const RadioButton = ({ value, checked, onChange, children }) => (
    <label className="font-sans text-sm block cursor-pointer">
      <input 
        type="radio" 
        className="sr-only peer" 
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="block w-full text-center px-3 py-1.5 border-2 border-black/15 bg-white/50 peer-checked:bg-stone-800 peer-checked:text-white peer-checked:border-stone-800 transition-colors">
        {children}
      </span>
    </label>
  );

  return (
    <div className="bg-[#e9d8c1] border-2 border-black/10 shadow-lg p-6 h-full">
      <h2 className="font-serif text-2xl text-black border-b-2 border-black/10 pb-3 mb-6">
        Selection Criteria
      </h2>

      {/* Search Section */}
      <div className="mb-6">
        <label htmlFor="search" className="font-sans text-sm font-bold text-gray-800 mb-2 block">
          Search Dossier
        </label>
        <div className="relative">
          <Search className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            id="search"
            type="text"
            placeholder="Keyword..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="font-sans w-full pl-10 pr-3 py-2 bg-white border-2 border-black/15 focus:bg-white focus:border-black/50 outline-none"
          />
        </div>
      </div>

      {/* Difficulty Section */}
      <div className="mb-6">
        <label className="font-sans text-sm font-bold text-gray-800 mb-3 block flex items-center gap-2">
          <Shield size={16}/> Difficulty Level
        </label>
        <div className="grid grid-cols-5 gap-2">
          {difficulties.map(d => (
            <RadioButton key={d} value={d} checked={difficulty === d} onChange={() => onDifficultyChange(d)}>
              {d}
            </RadioButton>
          ))}
        </div>
      </div>
      
      {/* Status Section */}
      <div className="mb-6">
        <label className="font-sans text-sm font-bold text-gray-800 mb-3 block flex items-center gap-2">
          <FileClock size={16}/> Case Status
        </label>
        <div className="grid grid-cols-2 gap-2">
          {statuses.map(s => (
            <RadioButton key={s} value={s} checked={status === s} onChange={() => onStatusChange(s)}>
              {s}
            </RadioButton>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <div className="border-t-2 border-black/10 pt-4 mt-6">
        <button 
          onClick={onReset}
          className="w-full font-sans text-sm text-gray-700 hover:text-black flex items-center justify-center gap-2 py-2 border-2 border-transparent hover:border-black/15 transition-colors"
        >
          <RotateCcw size={14}/> Reset Filters
        </button>
      </div>
    </div>
  );
};