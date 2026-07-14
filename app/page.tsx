import BrandLogo from "@/components/BrandLogo";
import VerificationCard from "@/components/VerificationCard";
import VerificationSteps from "@/components/VerificationSteps";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <BrandLogo />
      <main className="flex-1 px-4 pb-8">
        <VerificationCard />
        <VerificationSteps />
      </main>
      <Footer />
    </div>
  );
}
