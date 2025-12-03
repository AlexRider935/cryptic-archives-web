// File: web/src/app/(auth)/register/page.jsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  KeyRound,
  User,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  PenSquare,
  Eye,
  EyeOff,
  LoaderCircle,
} from "lucide-react";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AgencySealImage } from "./components/AgencySeal";
import { StepContentWrapper } from "./components/StepContentWrapper";
import { ThematicIllustration } from "../register/components/Thematicillustrations";

// ProgressIndicator component is good as is, no changes needed.
const ProgressIndicator = ({ currentStep }) => {
  const steps = ["Initiation", "Credentials", "The Pledge"];
  return (
    <div className="flex items-start md:items-center justify-between mb-8 border-b-2 border-black/10 pb-4 flex-col md:flex-row gap-4 md:gap-0">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
              index + 1 <= currentStep
                ? "bg-stone-800 text-white"
                : "bg-black/10 text-gray-600"
            }`}>
            {index + 1}
          </div>
          <span
            className={`ml-3 text-sm uppercase tracking-wider transition-colors ${
              index + 1 <= currentStep
                ? "text-black font-bold"
                : "text-gray-600"
            }`}>
            {step}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function GrandRegisterPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [codename, setCodename] = useState("");
  const [password, setPassword] = useState("");
  const [signature, setSignature] = useState(""); // State for the signature
  const [pledge, setPledge] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state for submission
  const [showPassword, setShowPassword] = useState(false); // Password visibility
  const router = useRouter();

  const handleNext = () => {
    setError(null);
    if (step === 1 && !email) {
      setError("A secure email channel is required.");
      return;
    }
    if (step === 2 && (!codename || !password)) {
      setError("Codename and Passphrase are required.");
      return;
    }
    setStep((s) => s + 1);
  };

  const handlePrev = () => setStep((s) => s - 1);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    if (!pledge) {
      setError("You must accept the Pledge of Secrecy to proceed.");
      return;
    }
    // --- VALIDATION: Check if signature matches codename ---
    if (signature.trim().toLowerCase() !== codename.trim().toLowerCase()) {
      setError("Your signature must match your chosen codename exactly.");
      return;
    }

    setIsLoading(true); // --- UX: Set loading state ---
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: codename });
      router.push("/dashboard/welcome");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError(
          "This email is already known to the agency. Proceed to login."
        );
        setStep(1);
      } else if (error.code === "auth/weak-password") {
        setError(
          "Your passphrase must be more secure (at least 6 characters)."
        );
        setStep(2);
      } else {
        setError("Your application could not be processed at this time.");
      }
      console.error("Firebase Registration Error:", error);
    } finally {
      setIsLoading(false); // --- UX: Unset loading state ---
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 bg-[#f3dfc1] border-2 border-black/10 shadow-2xl min-h-[80vh] overflow-hidden">
        {/* LEFT COLUMN: Thematic Dossier Cover */}
        <div className="hidden lg:flex flex-col bg-[#e9d8c1] p-12 border-r-2 border-black/10">
          <div className="text-center my-8">
            <AgencySealImage />
          </div>
          <h2 className="font-serif text-2xl text-black border-b border-black/10 pb-3 mb-6">
            Memorandum for the Applicant
          </h2>
          <div className="space-y-6 text-sm font-sans text-gray-800 flex-grow">
            <p>
              Membership in this agency is a commitment to the pursuit of truth
              above all else. Your application is the first step in a lifelong
              journey of inquiry and discretion.
            </p>
            <h3 className="font-bold text-black">Qualities of an Agent:</h3>
            <ul className="list-none space-y-4 text-gray-700">
              {/* --- UI FIX: Correct vertical alignment --- */}
              <li className="flex items-start gap-3">
                <Eye className="w-4 h-4 mt-0.5 shrink-0 text-stone-600" />
                <span>
                  <span className="font-bold text-black">
                    Keen Observation:
                  </span>{" "}
                  See what others overlook.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <PenSquare className="w-4 h-4 mt-0.5 shrink-0 text-stone-600" />
                <span>
                  <span className="font-bold text-black">
                    Intellectual Rigor:
                  </span>{" "}
                  Question every assumption, especially your own.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-stone-600" />
                <span>
                  <span className="font-bold text-black">
                    Absolute Discretion:
                  </span>{" "}
                  The secrets you uncover are a burden you must carry alone.
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-12 text-center text-xs text-red-800/70 border-t border-black/10 pt-6 font-mono tracking-widest">
            CLASSIFIED DOCUMENTATION — EYES ONLY
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Application */}
        <div className="p-8 md:p-12 flex flex-col">
          <ThematicIllustration />
          <h1 className="font-serif text-3xl md:text-4xl text-black font-bold text-center mb-2">
            Application for Agency Membership
          </h1>
          <p className="mt-1 text-center text-gray-700 font-sans mb-8">
            Complete the following initiation rites to be considered for entry.
          </p>
          <ProgressIndicator currentStep={step} />

          <form
            onSubmit={handleRegister}
            className="flex-grow flex flex-col justify-between">
            <div className="py-6">
              {/* Step 1 */}
              {step === 1 && (
                <StepContentWrapper
                  title="Step 1: Initiation"
                  description="First, establish a secure communication channel. All agency correspondence will be directed here.">
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-800 mb-2">
                    Secure Channel (Email)
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="confidential.address@domain.com"
                      required
                      className="font-sans w-full pl-10 pr-3 py-3 bg-white/50 border-2 border-black/15 focus:bg-white focus:border-black/50 outline-none transition-colors"
                    />
                  </div>
                </StepContentWrapper>
              )}
              {/* Step 2 */}
              {step === 2 && (
                <StepContentWrapper
                  title="Step 2: Credentials"
                  description="Choose your agency codename and a secret passphrase. These will be your only identifiers within the archives.">
                  <div>
                    <label
                      htmlFor="codename"
                      className="block text-sm font-bold text-gray-800 mb-2">
                      Agent Codename
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        id="codename"
                        value={codename}
                        onChange={(e) => setCodename(e.target.value)}
                        placeholder="e.g., The Alchemist"
                        required
                        className="font-sans w-full pl-10 pr-3 py-3 bg-white/50 border-2 border-black/15 focus:bg-white focus:border-black/50 outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-bold text-gray-800 mb-2">
                      Secret Passphrase
                    </label>
                    <div className="relative">
                      <KeyRound className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Choose a memorable, secure phrase"
                        required
                        className="font-sans w-full pl-10 pr-10 py-3 bg-white/50 border-2 border-black/15 focus:bg-white focus:border-black/50 outline-none transition-colors"
                      />
                      {/* --- UX: Password visibility toggle --- */}
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black">
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                </StepContentWrapper>
              )}
              {/* Step 3 */}
              {step === 3 && (
                <StepContentWrapper
                  title="Step 3: The Pledge"
                  description="Read the following oath. Your acceptance is your bond and is non-negotiable. To seal your application, you must sign it with your chosen codename.">
                  <div className="font-sans text-sm text-gray-800 bg-black/5 p-4 border-l-4 border-stone-800 space-y-3">
                    <p className="italic">
                      "I solemnly swear to uphold the secrecy of the Archives
                      and its missions. I will pursue knowledge with integrity,
                      protect the innocent, and never reveal the identities of
                      my fellow agents. My discretion is my bond."
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="flex items-center text-sm font-sans cursor-pointer p-2 hover:bg-black/5">
                      <input
                        type="checkbox"
                        checked={pledge}
                        onChange={(e) => setPledge(e.target.checked)}
                        className="h-5 w-5 mr-4 accent-stone-800"
                      />
                      <span className="text-gray-800">
                        I have read and accept the Pledge of Secrecy.
                      </span>
                    </label>
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="signature"
                      className="block text-sm font-bold text-gray-800 mb-2">
                      Sign with your Codename
                    </label>
                    <div className="relative">
                      <PenSquare className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        id="signature"
                        value={signature}
                        onChange={(e) => setSignature(e.target.value)}
                        placeholder={`Type "${
                          codename || "your codename"
                        }" to sign`}
                        required
                        className="font-sans w-full pl-10 pr-3 py-3 bg-white/50 border-2 border-black/15 focus:bg-white focus:border-black/50 outline-none transition-colors disabled:opacity-50"
                        disabled={!pledge}
                      />
                    </div>
                  </div>
                </StepContentWrapper>
              )}
            </div>

            {/* --- Form Footer & Navigation --- */}
            <div className="space-y-4">
              {error && (
                <p className="text-sm text-center text-red-700 bg-red-100 p-3 font-sans rounded-md">
                  {error}
                </p>
              )}
              <div className="flex justify-between items-center border-t-2 border-black/10 pt-6">
                <div>
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handlePrev}
                      disabled={isLoading}
                      className="font-sans text-sm text-gray-700 hover:text-black flex items-center gap-2 py-2 px-3 disabled:opacity-50">
                      <ArrowLeft size={16} /> Previous Step
                    </button>
                  )}
                  {step === 1 && (
                    <p className="font-sans text-sm text-gray-600">
                      Already an agent?{" "}
                      <Link
                        href="/login"
                        className="font-bold hover:text-black underline">
                        Log In
                      </Link>
                      .
                    </p>
                  )}
                </div>
                <div>
                  {step < 3 && (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-stone-800 text-white font-bold tracking-wider uppercase py-2 px-4 flex items-center gap-2 hover:bg-black transition-colors">
                      Next Step <ArrowRight size={16} />
                    </button>
                  )}
                  {step === 3 && (
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-red-800 text-white font-bold tracking-wider uppercase py-2 px-4 flex items-center gap-2 hover:bg-red-900 transition-colors disabled:bg-red-900/50 disabled:cursor-not-allowed">
                      {/* --- UX: Loading indicator in button --- */}
                      {isLoading ? (
                        <LoaderCircle size={16} className="animate-spin" />
                      ) : (
                        <ShieldCheck size={16} />
                      )}
                      <span>
                        {isLoading ? "Submitting..." : "Submit Application"}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
