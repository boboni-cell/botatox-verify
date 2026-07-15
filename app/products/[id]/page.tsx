import type { Metadata } from "next";
import { products } from "@/data/products";
import ProductDetailContent from "@/components/ProductDetailContent";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) {
    return { title: "产品未找到" };
  }
  return {
    title: `${product.nameEn} - HYUNDAIBIO`,
    description: product.descEn,
    openGraph: {
      title: `${product.nameEn} - HYUNDAIBIO`,
      description: product.descEn,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProductDetailContent id={id} />;
}
