import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "关于 HYUNDAIBIO - BOTATOX",
  description:
    "HYUNDAIBIO 是一家总部位于韩国首尔的医美生物科技公司，旗下品牌 BOTATOX 以卓越品质和创新技术远销全球。",
  openGraph: {
    title: "关于 HYUNDAIBIO - BOTATOX",
    description:
      "HYUNDAIBIO 是一家总部位于韩国首尔的医美生物科技公司，旗下品牌 BOTATOX 以卓越品质和创新技术远销全球。",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
