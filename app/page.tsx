import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Botatox - 产品真伪验证",
  description: "Botatox 医美产品防伪码验证平台，通过 HiddenTag 技术验证产品真伪。",
};

export default function Home() {
  return <HomeContent />;
}
