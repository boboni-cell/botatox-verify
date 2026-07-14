"use client";

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import VerificationCard from "@/components/VerificationCard";
import VerificationSteps from "@/components/VerificationSteps";
import CodeVerification from "@/components/CodeVerification";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";

export default function HomeContent() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <Hero />
      <main className="flex-1 px-4 pb-8" id="verify-section">
        <div className="-mt-8 relative z-10">
          <CodeVerification />
        </div>
        <div className="mt-10">
          <VerificationCard />
        </div>
        <VerificationSteps />
      </main>
      <TrustBadges />
      <Footer />
    </div>
  );
}
