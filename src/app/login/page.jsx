"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, KeyRound, LogIn } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder for login logic
    console.log("Attempting login with:", { email, password });
    // In a real application, you would make an API call here.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e9d8c1] p-4">
      <div className="w-full max-w-md bg-[#f3dfc1] border-2 border-black/10 shadow-lg p-8 md:p-12">
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl text-black font-bold">
            Access the Archives
          </h1>
          <p className="mt-4 text-gray-700">
            Kindly present your credentials to proceed into the study.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-800 mb-2">
              Agent Identifier or Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="w-5 h-5 text-gray-500" />
              </span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g., agent.77@agency.net"
                required
                className="font-sans w-full pl-10 pr-3 py-2 bg-black/5 border-2 border-black/15 focus:bg-white focus:border-black/50 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Password Input Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-bold text-gray-800 mb-2">
              Secret Passphrase
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <KeyRound className="w-5 h-5 text-gray-500" />
              </span>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your classified code"
                required
                className="font-sans w-full pl-10 pr-3 py-2 bg-black/5 border-2 border-black/15 focus:bg-white focus:border-black/50 outline-none transition-colors"
              />
            </div>
            <div className="text-right mt-2">
              <Link
                href="/forgot-password"
                className="text-xs text-gray-600 hover:text-black hover:underline">
                Misplaced your key?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-stone-800 text-white font-bold tracking-wider uppercase py-3 px-4 flex items-center justify-center gap-2 hover:bg-black transition-colors">
            <LogIn className="w-5 h-5" />
            <span>Unlock the Archives</span>
          </button>
        </form>

        {/* Registration Link */}
        <div className="mt-8 text-center border-t-2 border-black/10 pt-6">
          <p className="text-sm text-gray-700">
            First time consulting with the agency?{" "}
            <Link
              href="/register"
              className="font-bold text-stone-800 hover:text-black underline">
              Become an Agent
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
