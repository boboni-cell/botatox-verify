"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/context/LanguageContext";
import {
  products,
  categoryLabels,
  groupByCategory,
  type Product,
  type Category,
} from "@/data/products";

const OWN = "own" as const;
const DIST = "distribution" as const;
type Tab = typeof OWN | typeof DIST;

function ImagePlaceholder({ name }: { name: string }) {
  return (
    <div className="flex aspect-square items-center justify-center rounded-t-2xl bg-gray-100">
      <span className="text-center text-[10px] font-medium text-gray-400 leading-tight px-2">
        {name}
      </span>
    </div>
  );
}

function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const { locale } = useLanguage();
  const desc = locale === "zh" ? product.descZh : product.descEn;
  const name = locale === "zh" ? product.nameZh : product.nameEn;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl animate-[fadeIn_0.2s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex h-48 items-center justify-center rounded-xl bg-gray-100">
          <span className="text-sm font-medium text-gray-400">
            {product.nameEn}
          </span>
        </div>
        <h2 className="text-lg font-semibold text-navy">
          {product.nameEn}
        </h2>
        <p className="mt-1 text-sm font-medium text-[#2b6cb0]">
          {product.nameZh}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">{desc}</p>
        <button
          onClick={onClose}
          className="mt-5 w-full rounded-xl bg-gray-100 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200"
        >
          {locale === "zh" ? "关闭" : "Close"}
        </button>
      </div>
    </div>
  );
}

function ProductCard({
  product,
  isFlagship,
  onClick,
}: {
  product: Product;
  isFlagship?: boolean;
  onClick: () => void;
}) {
  const { locale } = useLanguage();
  const name = locale === "zh" ? product.nameZh : product.nameEn;
  const desc = locale === "zh" ? product.descZh : product.descEn;

  if (isFlagship) {
    return (
      <div
        onClick={onClick}
        className="group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-[#EBF4FF] to-white shadow-md shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="grid sm:grid-cols-2">
          <div className="flex items-center justify-center bg-[#1a365d]/5 p-6">
            <div className="flex aspect-square w-full max-w-[200px] items-center justify-center rounded-xl bg-[#1a365d]/10">
              <span className="text-center text-sm font-bold text-[#1a365d]/60">
                {product.nameEn}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center p-6">
            <span className="inline-flex w-fit items-center rounded-full bg-[#c9a96e]/20 px-3 py-1 text-xs font-semibold text-[#c9a96e]">
              {locale === "zh" ? "旗舰产品" : "Flagship Product"}
            </span>
            <h3 className="mt-3 text-lg font-bold text-navy">
              {product.nameEn}
            </h3>
            <p className="mt-1 text-sm font-medium text-[#2b6cb0]">
              {product.nameZh}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-gray-500 line-clamp-2">
              {desc}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#2b6cb0]">
              {locale === "zh" ? "了解详情" : "View Details"}
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <ImagePlaceholder name={product.nameEn} />
      <div className="p-4">
        <h3 className="text-sm font-semibold text-navy truncate">
          {product.nameEn}
        </h3>
        <p className="mt-0.5 text-xs font-medium text-[#2b6cb0] truncate">
          {product.nameZh}
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-gray-400 line-clamp-2">
          {desc}
        </p>
      </div>
    </div>
  );
}

function CategorySection({
  category,
  list,
  isOwn,
}: {
  category: Category;
  list: Product[];
  isOwn: boolean;
}) {
  const { locale } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const label = categoryLabels[category];
  const catName = locale === "zh" ? label.zh : label.en;

  const flagship = list.find((p) => p.isFlagship);
  const regular = list.filter((p) => !p.isFlagship);

  return (
    <section className="mt-6">
      <h3 className="mb-4 text-base font-semibold tracking-wide text-navy">
        {catName}
      </h3>

      {/* Flagship Card */}
      {isOwn && flagship && (
        <div className="mb-4">
          <ProductCard
            product={flagship}
            isFlagship
            onClick={() => setSelectedProduct(flagship)}
          />
        </div>
      )}

      {/* Regular Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {regular.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onClick={() => setSelectedProduct(p)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

export default function ProductsContent() {
  const { t, locale } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>(OWN);

  const ownByCategory = groupByCategory(
    products.filter((p) => p.brand === OWN)
  );
  const distByCategory = groupByCategory(
    products.filter((p) => p.brand === DIST)
  );

  const categoryOrder: Category[] = [1, 2, 3];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 px-4 pt-24 pb-8">
        {/* Page Title */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-xl font-bold tracking-wider text-navy sm:text-2xl">
            {locale === "zh"
              ? "HYUNDAIBIO 产品系列"
              : "HYUNDAIBIO Product Line"}
          </h1>
          <div className="mx-auto mt-3 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />
        </div>

        {/* Tabs */}
        <div className="mx-auto mt-8 flex max-w-sm justify-center rounded-xl bg-gray-100 p-1">
          <button
            onClick={() => setActiveTab(OWN)}
            className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all ${
              activeTab === OWN
                ? "bg-white text-navy shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {locale === "zh" ? "自有品牌" : "Our Brands"}
          </button>
          <button
            onClick={() => setActiveTab(DIST)}
            className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all ${
              activeTab === DIST
                ? "bg-white text-navy shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {locale === "zh" ? "代理品牌" : "Distribution Brands"}
          </button>
        </div>

        {/* Product Categories */}
        <div className="mx-auto mt-6 max-w-5xl">
          {activeTab === OWN &&
            categoryOrder.map((cat) => {
              const list = ownByCategory.get(cat);
              if (!list || list.length === 0) return null;
              return (
                <CategorySection
                  key={cat}
                  category={cat}
                  list={list}
                  isOwn
                />
              );
            })}

          {activeTab === DIST &&
            categoryOrder.map((cat) => {
              const list = distByCategory.get(cat);
              if (!list || list.length === 0) return null;
              return (
                <CategorySection
                  key={cat}
                  category={cat}
                  list={list}
                  isOwn={false}
                />
              );
            })}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
