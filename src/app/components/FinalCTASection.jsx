import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="bg-[#f3dfc1] py-20 md:py-28 border-y-2 border-black/20">
      <div className="container mx-auto px-4 relative">
        {/* Decorative Stamps - these are positioned relative to the container */}
        <div className="absolute top-12 left-12 border-4 border-red-700 text-red-700 p-3 text-center transform -rotate-12 hidden lg:block">
          <span className="block font-bold text-2xl tracking-widest leading-none font-typewriter">
            AUTHORIZED
          </span>
        </div>
        <div className="absolute bottom-12 right-12 border-2 border-gray-600 text-gray-600 p-2 text-center transform rotate-12 hidden lg:block">
          <span className="block font-bold text-lg tracking-wider font-typewriter">
            ACTION REQUIRED
          </span>
        </div>

        {/* The main "Letter" container */}
        <div className="bg-[#faf3e3] border-2 border-black/30 p-8 md:p-12 text-center max-w-3xl mx-auto shadow-2xl relative z-10">
          <div className="font-typewriter text-sm uppercase tracking-wider text-gray-600">
            <p>Office of the Archivist</p>
            <p>Document Finalization</p>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mt-6 mb-6">
            An Invitation to the Agency
          </h2>

          <p className="font-sans text-lg leading-relaxed text-gray-700 mb-6">
            You have reviewed the briefing. You understand the protocol. The
            reports from the field speak for themselves. The Archives are more
            than just a collection of stories; they are a training ground for
            the sharpest minds, and we believe your skills are required.
          </p>
          <p className="font-sans text-lg leading-relaxed text-gray-700 mb-10">
            Your desk is ready. The next case is waiting.
          </p>

          <Link
            href="/register"
            className="inline-block bg-red-700 text-white font-typewriter text-xl tracking-wider px-10 py-4 uppercase hover:bg-red-800 transition-colors shadow-lg">
            Accept Assignment & Create Profile
          </Link>

          {/* Signature */}
          <div className="mt-12 text-right border-t border-black/10 pt-6">
            <p className="font-serif italic text-lg text-gray-800">
              Sincerely,
            </p>
            <p className="font-serif text-3xl text-black">The Archivist</p>
          </div>
        </div>
      </div>
    </section>
  );
}