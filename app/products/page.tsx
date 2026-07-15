import type { Metadata } from "next";
import ProductsContent from "@/components/ProductsContent";

export const metadata: Metadata = {
  title: "产品系列 - HYUNDAIBIO",
  description:
    "HYUNDAIBIO 产品系列，涵盖肉毒素、填充剂、皮肤管理等医学美容产品。自有品牌 BOTATOX 旗舰产品及多品牌代理。",
  openGraph: {
    title: "HYUNDAIBIO 产品系列 - BOTATOX",
    description:
      "HYUNDAIBIO 产品系列，涵盖肉毒素、填充剂、皮肤管理等医学美容产品。",
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
