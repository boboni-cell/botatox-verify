import type { Metadata } from "next";
import FaqContent from "@/components/FaqContent";

export const metadata: Metadata = {
  title: "FAQ - HYUNDAIBIO",
  description: "BOTATOX 产品防伪验证常见问题解答。如何验证产品真伪、防伪码位置、扫描失败处理、销售网络及经销商合作。",
  openGraph: {
    title: "FAQ - HYUNDAIBIO",
    description: "BOTATOX 产品防伪验证常见问题解答。",
  },
};

export default function FaqPage() {
  return <FaqContent />;
}
