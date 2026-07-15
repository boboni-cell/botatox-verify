"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

function FlagshipCard({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const name = locale === "zh" ? product.nameZh : product.nameEn;
  const desc = locale === "zh" ? product.descZh : product.descEn;

  return (
    <Link
      href={`/products/${product.id}`}
      className="group block cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-[#EBF4FF] to-white shadow-[0_2px_12px_rgba(26,54,93,0.06)] border border-[rgba(26,54,93,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(26,54,93,0.10)]"
    >
      <div className="grid sm:grid-cols-2">
        <div className="flex items-center justify-center bg-[#1B6BAA]/5 p-6">
          <div className="flex aspect-square w-full max-w-[200px] items-center justify-center overflow-hidden rounded-xl bg-[#1B6BAA]/10">
            {product.id === "botatox-100u" ? (
              <div className="relative h-full w-full">
                <Image
                  src="/images/botatox100u.png"
                  alt={product.nameEn}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            ) : (
              <span className="text-center text-sm font-bold text-[#1B6BAA]/60">
                {product.nameEn}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center p-6">
          <span className="inline-flex w-fit items-center rounded-full bg-[#3B9FDA]/20 px-3 py-1 text-xs font-semibold text-[#3B9FDA]">
            {locale === "zh" ? "旗舰产品" : "Flagship Product"}
          </span>
          <h3 className="mt-3 text-lg font-bold text-navy">{name}</h3>
          <p className="mt-2 text-xs leading-relaxed text-gray-500 line-clamp-2">
            {desc}
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#3B9FDA]">
            {locale === "zh" ? "了解详情" : "View Details"}
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

function RegularCard({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const name = locale === "zh" ? product.nameZh : product.nameEn;
  const desc = locale === "zh" ? product.descZh : product.descEn;

  return (
    <Link
      href={`/products/${product.id}`}
      className="group block cursor-pointer overflow-hidden rounded-xl bg-white shadow-[0_2px_12px_rgba(26,54,93,0.06)] border border-[rgba(26,54,93,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(26,54,93,0.10)]"
    >
      <div className="flex aspect-square items-center justify-center rounded-t-xl bg-[#edf2f7]">
        <span className="text-center text-[10px] font-medium text-[#94a3b8] leading-tight px-2">
          {product.nameEn}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-navy truncate">{name}</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-gray-400 line-clamp-2">
          {desc}
        </p>
      </div>
    </Link>
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
  const label = categoryLabels[category];
  const catName = locale === "zh" ? label.zh : label.en;

  const flagship = list.find((p) => p.isFlagship);
  const regular = list.filter((p) => !p.isFlagship);

  return (
    <section className="mt-6">
      <h3 className="mb-4 text-base font-semibold tracking-wide text-navy">
        {catName}
      </h3>

      {isOwn && flagship && (
        <div className="mb-4">
          <FlagshipCard product={flagship} />
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {regular.map((p) => (
          <RegularCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export default function ProductsContent() {
  const { locale, t } = useLanguage();
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
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-xl font-bold tracking-wider text-navy sm:text-2xl">
            {locale === "zh"
              ? "HYUNDAIBIO 产品系列"
              : "HYUNDAIBIO Product Line"}
          </h1>
          <div className="mx-auto mt-3 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#3B9FDA] to-transparent" />
        </div>

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
