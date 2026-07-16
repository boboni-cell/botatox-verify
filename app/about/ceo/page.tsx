import type { Metadata } from "next";
import AboutCeoContent from "@/components/AboutCeoContent";

export const metadata: Metadata = {
  title: "CEO 致辞 - HYUNDAIBIO",
  description: "Hyundai Bio CEO Zhang Yongnan 致辞。致力于将尖端生物科技与美容创新相结合。",
};

export default function CeoPage() {
  return <AboutCeoContent />;
}
