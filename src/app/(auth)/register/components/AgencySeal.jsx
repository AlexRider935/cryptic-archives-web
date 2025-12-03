// File: web/src/app/(auth)/register/components/AgencySealImage.jsx

import Image from "next/image";

export const AgencySealImage = () => (
  // HOW TO EDIT SIZE:
  // Change the width and height classes below (e.g., from w-56 to w-64).
  // That is the ONLY change you need to make.
  <div className="relative w-70 h-70 mx-auto">
    <Image
      src="/agency-seal-circle.png"
      alt="Cryptic Archives Agency Seal"
      fill={true} // `fill` makes the image expand to the parent div's size.
      sizes="14rem" // Good practice to provide a size hint for optimization.

    />
  </div>
);
