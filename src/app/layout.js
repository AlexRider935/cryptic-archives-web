import {
  Playfair_Display,
  Libre_Baskerville,
  Special_Elite,
} from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";

// --- Font setup remains unchanged ---
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});
const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-libre-baskerville",
});
const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-special-elite",
});

export const metadata = {
  title: "Cryptic Archives",
  description: "Unsolve the mysteries that lie within the archives.",
};

// CORRECTED ROOT LAYOUT
// It no longer imports or renders the Header and Footer.
// It only provides the global HTML structure.
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${libreBaskerville.variable} ${specialElite.variable}`}
    >
      <body className="bg-[#f3dfc1] text-gray-800 font-sans">
        <CustomCursor/>
        {children}
      </body>
    </html>
  );
}