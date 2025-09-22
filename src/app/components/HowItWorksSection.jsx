import { Folder, Search, Key } from "lucide-react";

const Step = ({ number, icon, title, description }) => {
  return (
    <div className="relative flex items-start space-x-6 pl-12">
      {/* The large, stylistic step number */}
      <span className="absolute left-0 top-0 font-typewriter text-6xl font-bold text-black/10">
        {number}
      </span>

      {/* The main content for the step */}
      <div className="relative z-10 mt-1">
        <div className="flex items-center space-x-4">
          <div className="bg-black/80 p-3 text-amber-300">{icon}</div>
          <h3 className="font-serif text-3xl font-bold text-black">{title}</h3>
        </div>
        <p className="mt-3 text-gray-700 leading-relaxed font-sans max-w-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: <Folder size={32} />,
      title: "Acquire Dossier",
      description:
        "Access the archives and select an active case file. Each dossier is a self-contained mystery, providing you with all known background materials, preliminary reports, and initial evidence logs to begin your work.",
    },
    {
      number: "02",
      icon: <Search size={32} />,
      title: "Examine Evidence",
      description:
        "This is the core of your investigation. Sift through redacted documents, analyze crime scene photographs, listen to audio transcripts, and cross-reference witness statements. The truth hides in the contradictions.",
    },
    {
      number: "03",
      icon: <Key size={32} />,
      title: "Submit Conclusion",
      description:
        "Once you have connected the dots and formed a solid hypothesis, submit your final conclusion. Detail the who, what, and why. Your findings will be cross-referenced with the sealed solution to determine your success.",
    },
  ];

  return (
    <section className="bg-[#f3dfc1] py-20 md:py-28 border-y-2 border-black/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-typewriter text-red-700 uppercase tracking-widest">
            Field Agent Protocol
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mt-2 mb-16">
            The Method of Deduction
          </h2>
        </div>

        {/* The vertical steps layout */}
        <div className="relative max-w-2xl mx-auto">
          {/* The connecting line */}
          <div
            className="absolute left-14 top-0 h-full w-px bg-black/20"
            aria-hidden="true"></div>

          <div className="space-y-16">
            {steps.map((step) => (
              <Step key={step.number} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
