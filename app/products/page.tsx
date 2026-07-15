import type { Metadata } from "next";
import ProductsContent from "@/components/ProductsContent";

export const metadata: Metadata = {
  title: "BOTATOX 产品系列",
  description:
    "BOTATOX 医美产品系列，高纯度肉毒杆菌素，适用于面部皱纹改善、咬肌瘦脸等医学美容领域。",
  openGraph: {
    title: "BOTATOX 产品系列",
    description:
      "BOTATOX 医美产品系列，高纯度肉毒杆菌素，适用于面部皱纹改善、咬肌瘦脸等医学美容领域。",
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
