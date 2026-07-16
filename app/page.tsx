import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "BOTATOX - Premium Medical Aesthetics by HYUNDAIBIO",
  description:
    "BOTATOX by HYUNDAIBIO - Premium botulinum toxin and medical aesthetic products. Verify product authenticity and explore our full range of dermal fillers, skin boosters and more.",
  openGraph: {
    title: "BOTATOX - Premium Medical Aesthetics",
    description:
      "BOTATOX by HYUNDAIBIO - Premium botulinum toxin and medical aesthetic products.",
    images: ["https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/botatox100u.png"],
    type: "website",
  },
};

export default function Home() {
  return <HomeContent />;
}
