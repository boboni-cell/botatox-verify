import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "BOTATOX - Premium Medical Aesthetics | 高端医美产品",
  description:
    "BOTATOX 医美产品防伪码验证平台。采用 HiddenTag 防伪技术，输入防伪码或扫描标签即可验证产品真伪，确保正品保障。",
  openGraph: {
    title: "BOTATOX - Premium Medical Aesthetics | 高端医美产品",
    description:
      "BOTATOX 医美产品防伪码验证平台。采用 HiddenTag 防伪技术，确保正品保障。",
  },
};

export default function Home() {
  return <HomeContent />;
}
