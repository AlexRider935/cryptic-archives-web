"use client";

import Link from "next/link";
import {
  Book,
  Scroll,
  Map,
  SendHorizonal,
  Twitter,
  Feather,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // A simple component for a themed social link
  const SocialLink = ({ href, icon: Icon, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-sans flex items-center text-gray-700 hover:text-black transition-colors group">
      <Icon className="w-4 h-4 mr-3 text-gray-500 group-hover:text-black" />
      <span>{label}</span>
    </a>
  );

  return (
    // The main font is now inherited from the body (font-sans / Libre Baskerville)
    <footer className="bg-[#f3dfc1] border-t-2 border-black/10 text-gray-800">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Motto */}
          <div className="md:col-span-2 lg:col-span-1">
            {/* Heading uses font-serif (Playfair Display) */}
            <h2 className="font-serif text-2xl font-bold tracking-tighter text-black">
              Cryptic Archives
            </h2>
            {/* Paragraph uses font-sans (Libre Baskerville) */}
            <p className="font-sans mt-4 text-sm leading-relaxed text-gray-700 italic">
              “The world is full of obvious things which nobody by any chance
              ever observes.”
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-serif text-lg font-bold text-black tracking-wide">
              Explore the Agency
            </h3>
            <ul className="font-sans mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/cases"
                  className="flex items-center text-gray-700 hover:text-black group">
                  <Book className="w-4 h-4 mr-2 text-gray-500 group-hover:text-black" />
                  Case Archives
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center text-gray-700 hover:text-black group">
                  <Scroll className="w-4 h-4 mr-2 text-gray-500 group-hover:text-black" />
                  Our Methods
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center text-gray-700 hover:text-black group">
                  <Map className="w-4 h-4 mr-2 text-gray-500 group-hover:text-black" />
                  Visit Baker Street
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Community */}
          <div>
            <h3 className="font-serif text-lg font-bold text-black tracking-wide">
              Follow the Clues
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <SocialLink href="#" icon={Twitter} label="The London Times" />
              <SocialLink href="#" icon={Feather} label="Archived Journals" />
            </div>
          </div>

          {/* Column 4: Newsletter CTA */}
          <div>
            <h3 className="font-serif text-lg font-bold text-black tracking-wide">
              Mysterious Correspondence
            </h3>
            <p className="font-sans mt-4 text-sm text-gray-700">
              Receive new case files and cryptic messages delivered directly by
              post.
            </p>
            <form className="mt-4 flex items-center">
              <input
                type="email"
                placeholder="Your mailing address..."
                className="font-sans bg-black/5 border-2 border-black/20 p-2 w-full focus:bg-white focus:border-black transition-colors outline-none placeholder:text-gray-600"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-stone-800 text-white p-2 border-2 border-stone-800 hover:bg-black transition-colors shrink-0">
                <SendHorizonal className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-black/10">
        <p className="font-sans container mx-auto text-center text-xs text-gray-600 py-4 tracking-wider">
          &copy; {currentYear} Cryptic Archives & Co. | Purveyors of Fine
          Mysteries, London.
        </p>
      </div>
    </footer>
  );
}
