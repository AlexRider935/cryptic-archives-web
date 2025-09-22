// A sub-component to render each individual report for a cleaner structure.
const FieldReportCard = ({ report }) => {
  return (
    // The card itself, styled as a separate piece of paper on the main file.
    <div className="bg-[#faf3e3] border-2 border-black/20 p-6 h-full flex flex-col shadow-lg">
      {/* Header of the report with metadata */}
      <div className="border-b border-black/20 pb-3 mb-4 font-typewriter text-sm text-gray-700">
        <p><span className="font-bold text-black">AGENT ID:</span> {report.agentId}</p>
        <p><span className="font-bold text-black">SUBJECT:</span> {report.subject}</p>
      </div>

      {/* The main quote/testimonial */}
      <blockquote className="flex-grow font-serif italic text-lg text-gray-800 leading-relaxed">
        "{report.quote}"
      </blockquote>

      {/* Signature/Stamp at the bottom */}
      <div className="text-right mt-6">
        <p className="font-typewriter text-red-800 text-lg">--- End of Report ---</p>
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  const reports = [
    {
      agentId: "K-73A (Vetted)",
      subject: "Post-Action Debrief: 'The Missing Rembrandt'",
      quote: "The level of detail is unlike anything I've encountered. For three hours, I wasn't just sitting at my desk; I was walking the halls of that museum. The documents felt real, the contradictions were subtle. A truly authentic challenge.",
    },
    {
      agentId: "S-J9 (Community)",
      subject: "Assessment of 'The Silent Sabotage'",
      quote: "Finally, a platform that doesn't hold your hand. You're given the facts and expected to perform. The solution was clever and, more importantly, fair. It was hidden in plain sight the entire time. Highly satisfying.",
    },
  ];

  return (
    <section className="bg-[#f3dfc1] py-20 md:py-28 border-y-2 border-black/20">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-typewriter text-red-700 uppercase tracking-widest">
            From The Community
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mt-2 mb-16">
            Agent Field Reports
          </h2>
        </div>

        {/* Grid of Reports */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reports.map((report) => (
            <FieldReportCard key={report.agentId} report={report} />
          ))}
        </div>

      </div>
    </section>
  );
}