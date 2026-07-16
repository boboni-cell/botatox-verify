import type { Metadata } from "next";
import AboutIntroContent from "@/components/AboutIntroContent";

export const metadata: Metadata = {
  title: "公司介绍 - HYUNDAIBIO",
  description: "Hyundai Bio Co., Ltd. - Global Bio & Cosmetic Leading Group. 致力于生物与化妆品行业创新。",
};

export default function IntroPage() {
  return <AboutIntroContent />;
}
