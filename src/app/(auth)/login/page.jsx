// File: web/src/app/(auth)/login/page.jsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  KeyRound,
  LogIn,
  Eye,
  EyeOff,
  LoaderCircle,
  PenSquare,
  ShieldCheck,
} from "lucide-react";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AgencySealImage } from "../register/components/AgencySeal";
import { ThematicIllustration } from "../register/components/Thematicillustrations";

export default function GrandLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/cases"); // Redirect to a protected page on success
    } catch (error) {
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/invalid-credential"
      ) {
        setError(
          "Invalid credentials. Please verify your identifier and passphrase."
        );
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
      console.error("Firebase Login Error:", error);
    } finally {
      setIsLoading(false);
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
            Agent Recall Memorandum
          </h2>
          <div className="space-y-6 text-sm font-sans text-gray-800 flex-grow">
            <p>
              Welcome back, Agent. The archives have been awaiting your return.
              The shadows lengthen, and new mysteries require your unique
              expertise.
            </p>
            <h3 className="font-bold text-black">A Reminder of Your Oath:</h3>
            <ul className="list-none space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <Eye className="w-4 h-4 mt-0.5 shrink-0 text-stone-600" />
                <span>Your observations must remain sharp and unbiased.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-stone-600" />
                <span>
                  Your discretion is paramount. The Pledge is your bond.
                </span>
              </li>
            </ul>
            <p>Proceed with purpose. The truth does not wait.</p>
          </div>
          <div className="mt-12 text-center text-xs text-red-800/70 border-t border-black/10 pt-6 font-mono tracking-widest">
            ACTIVE PERSONNEL ONLY — SECURE ACCESS
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Login Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="w-full max-w-md mx-auto">
            <ThematicIllustration />
            <h1 className="font-serif text-3xl md:text-4xl text-black font-bold text-center mb-2">
              Access the Archives
            </h1>
            <p className="mt-1 text-center text-gray-700 font-sans mb-8">
              Present your credentials to resume your duties.
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-800 mb-2">
                  Agent Identifier (Email)
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g., agent.77@agency.net"
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
                    placeholder="Enter your classified code"
                    required
                    className="font-sans w-full pl-10 pr-10 py-3 bg-white/50 border-2 border-black/15 focus:bg-white focus:border-black/50 outline-none transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black">
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-sm text-center text-red-700 bg-red-100 p-3 font-sans rounded-md">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-stone-800 text-white font-bold tracking-wider uppercase py-3 px-4 flex items-center justify-center gap-3 hover:bg-black transition-colors disabled:bg-stone-800/50 disabled:cursor-not-allowed">
                {isLoading ? (
                  <LoaderCircle size={20} className="animate-spin" />
                ) : (
                  <LogIn size={20} />
                )}
                <span>
                  {isLoading ? "Verifying..." : "Unlock the Archives"}
                </span>
              </button>
            </form>

            <div className="mt-8 text-center border-t-2 border-black/10 pt-6">
              <p className="font-sans text-sm text-gray-700">
                Need to join the agency?{" "}
                <Link
                  href="/register"
                  className="font-bold text-stone-800 hover:text-black underline">
                  Submit an Application
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
