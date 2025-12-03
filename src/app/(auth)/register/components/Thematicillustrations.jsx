// File: web/src/app/(auth)/register/components/ThematicIllustration.jsx

import Image from "next/image";

export const ThematicIllustration = () => (
  <div className="w-full max-w-xs mx-auto mb-8">
    <Image
      src="/investigator-tools1.png" // Assumes the image is in /public
      alt="Illustration of a magnifying glass, key, and quill"
      width={320}
      height={80} // A wide, short aspect ratio is best here
      className="opacity-70"
    />
  </div>
);
