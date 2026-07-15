import type { Metadata } from "next";
import VerifyContent from "@/components/VerifyContent";

export const metadata: Metadata = {
  title: "产品验证 - BOTATOX",
  description:
    "通过 HiddenTag APP 扫描 BOTATOX 产品标签，验证产品真伪。下载 HiddenTag APP 即可开始验证。",
  openGraph: {
    title: "产品验证 - BOTATOX",
    description:
      "通过 HiddenTag APP 扫描 BOTATOX 产品标签，验证产品真伪。下载 HiddenTag APP 即可开始验证。",
  },
};

export default function VerifyPage() {
  return <VerifyContent />;
}
