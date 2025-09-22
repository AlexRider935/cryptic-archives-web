import {
  Playfair_Display,
  Libre_Baskerville,
  Special_Elite,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 1. Import and configure the desired fonts
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

// This font can be kept for any remaining "dossier" style elements
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

export default function RootLayout({ children }) {
  return (
    // 2. Attach the font variables to the <html> element
    <html
      lang="en"
      className={`${playfair.variable} ${libreBaskerville.variable} ${specialElite.variable}`}>
      {/*
        3. Apply the default font class to the body.
        Our CSS will make `font-sans` use Libre Baskerville.
      */}
      <body className="bg-[#f3dfc1] text-gray-800 font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}