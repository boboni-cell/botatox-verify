"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

function Connector() {
  return (
    <div className="flex justify-center py-1">
      <svg
        className="h-6 w-6 text-[#3B9FDA]/40"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
}

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="mt-4 flex h-40 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-sm text-gray-300">
      {label}
    </div>
  );
}

function AppStoreBadge({ store }: { store: "appstore" | "googleplay" }) {
  const isApple = store === "appstore";
  const href = isApple
    ? "https://apps.apple.com/cn/app/hiddentag-cop/id962978798"
    : "https://play.google.com/store/apps/details?id=ScanTag.ndk.det&hl=zh";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-xs text-gray-400 shadow-sm transition-colors hover:border-gray-300 hover:text-gray-500"
    >
      {isApple ? (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm14.867 6.03l-3.332 2.864 3.332 2.864a.75.75 0 000-1.236l-.002-.002L15.142 12l3.332-2.92a.75.75 0 000-1.236zM4.527.6l-.002-.002a.75.75 0 00-.002 0zm0 0l-.002-.002a.751.751 0 00.002 0zM4.527.6h0zm-1.22-.002z" />
        </svg>
      )}
      <span>{isApple ? "App Store" : "Google Play"}</span>
    </a>
  );
}

export default function VerifyContent() {
  const { t } = useLanguage();
  const v = t.verify;

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 px-4 pt-28 pb-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-xl font-bold tracking-wide text-navy sm:text-2xl">
            {v.title}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            {v.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl space-y-0">
          {/* STEP 1 */}
          <div className="rounded-2xl bg-white px-6 py-6 shadow-sm shadow-gray-200/50 sm:px-8">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex-shrink-0 rounded-full bg-[#EBF4FF] px-3 py-1 text-xs font-bold tracking-wider text-[#3B9FDA]">
                {v.step1.label}
              </span>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-navy">{v.step1.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{v.step1.desc}</p>
                <PlaceholderImage label={v.step1.placeholder} />
                <div className="mt-4 flex flex-wrap gap-3">
                  <AppStoreBadge store="appstore" />
                  <AppStoreBadge store="googleplay" />
                </div>
              </div>
            </div>
          </div>

          <Connector />

          {/* STEP 2 */}
          <div className="rounded-2xl bg-white px-6 py-6 shadow-sm shadow-gray-200/50 sm:px-8">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex-shrink-0 rounded-full bg-[#EBF4FF] px-3 py-1 text-xs font-bold tracking-wider text-[#3B9FDA]">
                {v.step2.label}
              </span>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-navy">{v.step2.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{v.step2.desc}</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="flex h-36 items-center justify-center rounded-xl border-2 border-dashed border-green-200 bg-green-50/30 text-sm text-green-400">
                      {v.step2.genuineLabel}
                    </div>
                    <p className="mt-1.5 text-center text-xs text-green-500">
                      ✓ {v.step2.genuineHint}
                    </p>
                  </div>
                  <div>
                    <div className="flex h-36 items-center justify-center rounded-xl border-2 border-dashed border-red-200 bg-red-50/30 text-sm text-red-400">
                      {v.step2.fakeLabel}
                    </div>
                    <p className="mt-1.5 text-center text-xs text-red-500">
                      ✗ {v.step2.fakeHint}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Connector />

          {/* STEP 3 */}
          <div className="rounded-2xl bg-white px-6 py-6 shadow-sm shadow-gray-200/50 sm:px-8">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex-shrink-0 rounded-full bg-[#EBF4FF] px-3 py-1 text-xs font-bold tracking-wider text-[#3B9FDA]">
                {v.step3.label}
              </span>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-navy">{v.step3.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{v.step3.desc}</p>
                <PlaceholderImage label={v.step3.placeholder} />
              </div>
            </div>
          </div>

          <Connector />

          {/* STEP 4 */}
          <div className="rounded-2xl bg-white px-6 py-6 shadow-sm shadow-gray-200/50 sm:px-8">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex-shrink-0 rounded-full bg-[#EBF4FF] px-3 py-1 text-xs font-bold tracking-wider text-[#3B9FDA]">
                {v.step4.label}
              </span>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-navy">{v.step4.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{v.step4.desc}</p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50/50 px-4 py-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-green-700">{v.step4.genuineTitle}</p>
                      <p className="mt-0.5 text-xs text-green-600/70">{v.step4.genuineDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50/50 px-4 py-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                      <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-red-600">{v.step4.fakeTitle}</p>
                      <p className="mt-0.5 text-xs text-red-500/70">{v.step4.fakeDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-md px-4 text-center">
          <a
            href="https://www.hiddentag.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3B9FDA] to-[#1B6BAA] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#3B9FDA]/25 transition-all hover:shadow-xl hover:shadow-[#3B9FDA]/35 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto sm:px-10"
          >
            {v.cta}
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
