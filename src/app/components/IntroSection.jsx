import Image from "next/image";

export default function IntroSection() {
  return (
    // THEME CONSISTENCY: Using the same background and border style as the header/footer
    <section className="bg-[#f3dfc1] py-20 md:py-28 border-t-2 border-black/20 font-sans">
      {/* THEME CONSISTENCY: Constraining the content to match the header's width */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4">
        {/* Left Column: Interactive Evidence Collage */}
        {/* This advanced, detailed element remains the same internally */}
        <div className="relative h-96 w-full flex items-center justify-center">
          <Image
            src="/images/evidence-doc.png"
            alt="Redacted Document"
            width={300}
            height={400}
            className="absolute top-0 left-10 transform -rotate-12 transition-all duration-300 hover:rotate-[-15deg] hover:scale-105 hover:z-20 shadow-lg rounded-sm"
          />
          <Image
            src="/images/evidence-photo.jpg"
            alt="Crime Scene Photograph"
            width={350}
            height={250}
            className="absolute z-10 transition-all duration-300 hover:scale-105 hover:z-20 shadow-xl rounded-sm"
          />
          <Image
            src="/images/evidence-fingerprint.png"
            alt="Fingerprint Card"
            width={250}
            height={150}
            className="absolute bottom-0 right-10 transform rotate-6 transition-all duration-300 hover:rotate-[10deg] hover:scale-105 hover:z-20 shadow-lg rounded-sm"
          />
        </div>

        {/* Right Column: Thematic Content */}
        {/* This advanced, detailed element also remains the same internally */}
        <div className="text-gray-800">
          <p className="font-typewriter text-red-700 uppercase tracking-widest">
            Directive 01: The Premise
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mt-2 mb-6">
            Beyond The Headlines.
          </h2>
          <div className="font-sans text-lg space-y-4 text-gray-700 leading-relaxed">
            <p>
              At Cryptic Archives, the story is never what it seems. We don't
              give you puzzles; we give you the raw, unfiltered contents of a
              case file.
            </p>
            <div className="border-l-4 border-black/30 pl-6 py-2 space-y-2 bg-black/5 rounded-r-sm">
              <p>
                <strong className="text-black">Your Task:</strong> To sift
                through police reports, witness interviews, crime scene photos,
                and cryptic notes.
              </p>
              <p>
                <strong className="text-black">Your Method:</strong> Pure
                deduction. There are no hints, no skill trees, and no
                multiple-choice answers. Only the evidence and your intellect.
              </p>
            </div>
            <p className="font-serif italic text-gray-600 pt-4">
              "The truth is rarely found in the open. It hides in the margins,
              between the lines of the official report."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
