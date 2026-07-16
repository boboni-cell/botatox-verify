import type { Metadata } from "next";
import AboutNetworkContent from "@/components/AboutNetworkContent";

export const metadata: Metadata = {
  title: "全球网络 - HYUNDAIBIO",
  description: "Hyundai Bio 全球合作伙伴网络覆盖亚洲、美洲、欧洲。3+ 国家，3 大区域。",
};

export default function NetworkPage() {
  return <AboutNetworkContent />;
}
