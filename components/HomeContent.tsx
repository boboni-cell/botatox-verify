"use client";

import NavBar from "@/components/NavBar";
import VerificationCard from "@/components/VerificationCard";
import VerificationSteps from "@/components/VerificationSteps";
import CodeVerification from "@/components/CodeVerification";
import Footer from "@/components/Footer";

export default function HomeContent() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 px-4 pt-24 pb-8">
        <CodeVerification />
        <VerificationCard />
        <VerificationSteps />
      </main>
      <Footer />
    </div>
  );
}
