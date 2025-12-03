// File: web/src/app/(dashboard)/welcome/page.jsx

"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { BookOpen, UserCheck } from "lucide-react";
import { BriefingTypingEffect } from "../components/BriefingTypingEffect";
import { DirectiveCard } from "../components/DirectiveCard";

export default function AdvancedWelcomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#f3dfc1]">
        <p className="font-serif text-xl animate-pulse">
          VERIFYING CLEARANCE...
        </p>
      </div>
    );
  }

  const agentId = `AGENT-${user.uid.substring(0, 8).toUpperCase()}`;
  const briefingText =
    "Your application has been accepted and your credentials verified. You are now a provisional field agent of the Cryptic Archives. Your dossier is now active. Your primary directive is to investigate unsolved cases, analyze evidence, and bring the truth to light. Discretion is your greatest asset. The information you are about to access is highly sensitive. Adhere to the Pledge at all times. Welcome to the fold.";

  return (
    <div className="container mx-auto p-8 md:p-12">
      <div className="relative paper-background border-2 border-black/10 p-10">
        {/* Thematic Stamp Image */}
        <Image
          src="/classified-stamp.png"
          alt="Classified"
          width={250}
          height={100}
          className="absolute top-4 right-4 opacity-80 -rotate-6 pointer-events-none"
        />

        {/* Page Header */}
        <div className="border-b-2 border-black/10 pb-6 mb-8">
          <p className="font-sans text-gray-700">{agentId}</p>
          <h1 className="font-serif text-5xl text-black font-bold mt-2">
            Welcome, Agent {user.displayName}
          </h1>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left Column: Main Briefing */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-black">
              Your First Briefing
            </h2>
            <BriefingTypingEffect text={briefingText} speed={25} />
            <p className="text-gray-800 leading-relaxed font-sans pt-4">
              Failure to adhere to protocol will result in immediate revocation
              of your clearance. We expect great things from you. Do not
              disappoint.
            </p>
          </div>

          {/* Right Column: Actionable Directives */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <h3 className="font-serif text-xl font-bold text-black border-b border-black/10 pb-2">
              Operational Directives
            </h3>
            <DirectiveCard
              href="/cases"
              icon={BookOpen}
              title="Proceed to Case Files">
              The archives are open. Select your first assignment. We recommend
              a Level 1 case to familiarize yourself with field protocol.
            </DirectiveCard>
            <DirectiveCard
              href="/profile"
              icon={UserCheck}
              title="Review Your Dossier">
              Ensure your credentials are in order. While your codename is
              permanent, other details can be managed in your agent profile.
            </DirectiveCard>
          </div>
        </div>
      </div>
    </div>
  );
}
