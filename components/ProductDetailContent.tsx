"use client";

import Image from "next/image";
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
        <main className="flex flex-1 flex-col items-center justify-center px-4 pt-28">
          <h1 className="text-xl font-bold text-navy">{pd.notFound}</h1>
          <p className="mt-2 text-sm text-gray-400">{pd.notFoundDesc}</p>
          <Link
            href="/products"
            className="mt-6 rounded-xl bg-[#3B9FDA] px-6 py-2.5 text-sm font-medium text-white"
          >
            {pd.back}
          </Link>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  const name =
    locale === "zh"
      ? `${product.nameZh} ${product.nameEn}`
      : locale === "ko"
        ? `${product.nameKo} ${product.nameEn}`
        : product.nameEn;
  const desc = locale === "zh" ? product.descZh : locale === "ko" ? product.descKo : product.descEn;
  const catLabel =
    locale === "zh"
      ? categoryLabels[product.category].zh
      : locale === "ko"
        ? categoryLabels[product.category].ko
        : categoryLabels[product.category].en;

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 px-4 pt-28 pb-8">
        <div className="mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 transition-colors hover:text-[#3B9FDA]"
          >
            {pd.back}
          </Link>

          {/* Product Main Area */}
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {/* Left: Product Image */}
            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-white p-5">
              {product.id === "botatox-100u" ? (
                <div className="relative h-full w-full">
                  <Image
                    src="https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/botatox100u.png"
                    alt={product.nameEn}
                    fill
                    unoptimized
                    className="object-contain p-2"
                  />
                </div>
              ) : (
                <span className="text-sm font-medium text-[#94a3b8]">
                  {product.nameEn}
                </span>
              )}
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col justify-center">
              {product.isFlagship && (
                <span className="mb-2 inline-flex w-fit items-center rounded-full bg-[#3B9FDA]/20 px-3 py-1 text-xs font-semibold text-[#3B9FDA]">
                  {pd.flagship}
                </span>
              )}
              <h1 className="text-2xl font-bold text-navy">{name}</h1>
              <p className="mt-2 inline-flex w-fit items-center rounded-full bg-[#EBF4FF] px-3 py-1 text-xs font-medium text-[#3B9FDA]">
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

          {/* Brand Story (BOTATOX only) */}
          {product.id === "botatox-100u" && (
            <section className="mt-10">
              <h2 className="text-base font-semibold tracking-wide text-navy">{pd.brandStory.title}</h2>
              <div className="mt-4 border-l-[3px] border-[#3B9FDA] pl-5">
                <div className="max-w-[800px] text-sm leading-[1.8] text-gray-500 whitespace-pre-line">
                  {pd.brandStory.content}
                </div>
                {/* Timeline */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {pd.brandStory.timeline.map((item: string, i: number) => (
                    <span key={i} className="inline-flex items-center gap-2 text-xs text-gray-400">
                      <span className="h-2 w-2 rounded-full bg-[#3B9FDA]" />
                      {item}
                      {i < pd.brandStory.timeline.length - 1 && (
                        <span className="h-[1px] w-6 bg-gray-200" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Manufacturing Facility (BOTATOX only) */}
          {product.id === "botatox-100u" && (
            <section className="mt-10">
              <h2 className="text-base font-semibold tracking-wide text-navy">{pd.facility.title}</h2>
              <div className="mt-4 grid items-stretch gap-4 md:grid-cols-[55%_45%]">
                {/* Factory Image */}
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img
                    src="https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/gentox1.jpg"
                    alt={pd.facility.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Map + Info */}
                <div className="flex flex-col gap-3">
                  <iframe
                    src="https://maps.google.com/maps?q=37.467,127.985&output=embed"
                    className="h-[250px] w-full rounded-xl md:flex-1 md:h-auto"
                    style={{ border: 0, pointerEvents: "auto" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={pd.facility.title}
                  />
                  <div className="rounded-xl bg-white p-4 shadow-[0_2px_12px_rgba(26,54,93,0.06)] border border-[rgba(26,54,93,0.06)]">
                    <div className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#3B9FDA]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                      <span className="break-all text-[13px] text-gray-500">{pd.facility.address}</span>
                    </div>
                    <div className="mt-3 flex flex-col gap-2">
                      <a href={`tel:${pd.facility.tel}`} className="flex items-center gap-2 rounded-lg bg-[#EBF4FF] px-3 py-2 text-[13px] text-navy hover:bg-[#dbeafe]">
                        <svg className="h-4 w-4 flex-shrink-0 text-[#3B9FDA]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                        {pd.facility.tel}
                      </a>
                      <div className="flex items-center gap-2 rounded-lg bg-[#EBF4FF] px-3 py-2 text-[13px] text-gray-400">
                        <svg className="h-4 w-4 flex-shrink-0 text-[#3B9FDA]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                        {pd.facility.mail}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

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
          {product.id === "botatox-100u" && (
            <section className="mt-8">
              <h2 className="mb-4 text-base font-semibold tracking-wide text-navy">
                {pd.videos}
              </h2>
              <div
                className={`mx-auto overflow-hidden rounded-xl bg-black ${
                  locale === "zh"
                    ? "aspect-video"
                    : "aspect-[3/4] md:max-h-[350px] md:max-w-[260px]"
                }`}
              >
                <video
                  controls
                  playsInline
                  className="h-full w-full"
                  src={
                    locale === "zh"
                      ? "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/boatox.chinese.mp4"
                      : "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/botatox.en.mp4"
                  }
                />
              </div>
            </section>
          )}

          {/* Video Placeholders (non-BOTATOX products) */}
          {product.id !== "botatox-100u" && (
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
          )}

          {/* CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3B9FDA] to-[#1B6BAA] px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#3B9FDA]/20 transition-all hover:shadow-lg hover:-translate-y-0.5"
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
