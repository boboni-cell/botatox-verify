"use client";

import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/context/LanguageContext";
import { products, categoryLabels, type Product } from "@/data/products";

function PlayIcon() {
  return (
    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  );
}

function GalleryGrid({
  title,
  count,
  placeholder,
}: {
  title: string;
  count: number;
  placeholder: string;
}) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 text-base font-semibold tracking-wide text-navy">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="flex aspect-square items-center justify-center rounded-xl bg-[#edf2f7] text-xs text-[#94a3b8]"
          >
            {placeholder}
          </div>
        ))}
      </div>
    </section>
  );
}

function ComparisonPlaceholder({
  title,
  count,
  placeholder,
}: {
  title: string;
  count: number;
  placeholder: string;
}) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 text-base font-semibold tracking-wide text-navy">
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="flex aspect-[4/3] items-center justify-center rounded-xl bg-[#edf2f7] text-xs text-[#94a3b8]"
          >
            {placeholder}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetailContent({ id }: { id: string }) {
  const { locale, t } = useLanguage();
  const pd = t.productDetail;
  const product: Product | undefined = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col bg-gray-50">
        <NavBar />
        <main className="flex flex-1 flex-col items-center justify-center px-4 pt-24">
          <h1 className="text-xl font-bold text-navy">{pd.notFound}</h1>
          <p className="mt-2 text-sm text-gray-400">{pd.notFoundDesc}</p>
          <Link
            href="/products"
            className="mt-6 rounded-xl bg-[#2b6cb0] px-6 py-2.5 text-sm font-medium text-white"
          >
            {pd.back}
          </Link>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  const name = locale === "zh" ? product.nameZh : product.nameEn;
  const desc = locale === "zh" ? product.descZh : product.descEn;
  const catLabel =
    locale === "zh"
      ? categoryLabels[product.category].zh
      : categoryLabels[product.category].en;

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 px-4 pt-24 pb-8">
        <div className="mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 transition-colors hover:text-[#2b6cb0]"
          >
            {pd.back}
          </Link>

          {/* Product Main Area */}
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {/* Left: Product Image Placeholder */}
            <div className="flex aspect-square items-center justify-center rounded-xl bg-[#edf2f7]">
              <span className="text-sm font-medium text-gray-400">
                {product.nameEn}
              </span>
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col justify-center">
              {product.isFlagship && (
                <span className="mb-2 inline-flex w-fit items-center rounded-full bg-[#c9a96e]/20 px-3 py-1 text-xs font-semibold text-[#c9a96e]">
                  {pd.flagship}
                </span>
              )}
              <h1 className="text-2xl font-bold text-navy">{name}</h1>
              <p className="mt-2 inline-flex w-fit items-center rounded-full bg-[#EBF4FF] px-3 py-1 text-xs font-medium text-[#2b6cb0]">
                {pd.categoryLabel}: {catLabel}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                {desc}
              </p>
            </div>
          </div>

          {/* Product Description Section */}
          <section className="mt-10">
            <h2 className="text-base font-semibold tracking-wide text-navy">
              {pd.description}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              {desc}
            </p>
          </section>

          {/* Product Gallery */}
          <GalleryGrid
            title={pd.gallery}
            count={4}
            placeholder={pd.galleryPlaceholder}
          />

          {/* Before & After */}
          <ComparisonPlaceholder
            title={pd.beforeAfter}
            count={2}
            placeholder={pd.beforeAfterPlaceholder}
          />

          {/* Product Videos */}
          <section className="mt-8">
            <h2 className="mb-4 text-base font-semibold tracking-wide text-navy">
              {pd.videos}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: pd.unboxingVideo },
                { label: pd.demoVideo },
              ].map((v) => (
                <div
                  key={v.label}
                  className="flex aspect-video flex-col items-center justify-center gap-2 rounded-xl bg-[#edf2f7] text-[#94a3b8]"
                >
                  <PlayIcon />
                  <span className="text-xs">{v.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2b6cb0] to-[#1a365d] px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#2b6cb0]/20 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              {pd.contactCta}
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
