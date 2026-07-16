import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About - HYUNDAIBIO",
  description: "HYUNDAIBIO 是一家总部位于韩国首尔的生物科技公司，专注于高端医美产品的研发与全球销售。旗下旗舰品牌 BOTATOX。",
  openGraph: {
    title: "About - HYUNDAIBIO",
    description: "HYUNDAIBIO 是一家总部位于韩国首尔的生物科技公司，专注于高端医美产品的研发与全球销售。",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
