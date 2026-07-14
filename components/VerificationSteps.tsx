"use client";

import { useLanguage } from "@/context/LanguageContext";

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="mt-4 flex h-36 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-sm text-gray-300">
      {label}
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-1">
      <svg
        className="h-6 w-6 text-[#2b6cb0]/40"
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

export default function VerificationSteps() {
  const { t } = useLanguage();
  const s = t.home.steps;

  return (
    <section className="mx-auto mt-10 w-full max-w-2xl px-4 pb-12">
      <div className="mb-8 text-center">
        <h2 className="text-lg font-semibold tracking-wide text-navy">
          {s.title}
        </h2>
        <div className="mx-auto mt-2 h-[2px] w-10 rounded-full bg-[#2b6cb0]" />
      </div>

      <div className="space-y-0">
        {/* STEP 1 */}
        <div className="rounded-2xl bg-white px-6 py-6 shadow-sm shadow-gray-200/50 sm:px-8">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex-shrink-0 rounded-full bg-[#EBF4FF] px-3 py-1 text-xs font-bold tracking-wider text-[#2b6cb0]">
              {s.step1.label}
            </span>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-navy">
                {s.step1.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {s.step1.desc}
              </p>
              <PlaceholderImage label={s.step1.placeholder} />
            </div>
          </div>
        </div>

        <Connector />

        {/* STEP 2 */}
        <div className="rounded-2xl bg-white px-6 py-6 shadow-sm shadow-gray-200/50 sm:px-8">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex-shrink-0 rounded-full bg-[#EBF4FF] px-3 py-1 text-xs font-bold tracking-wider text-[#2b6cb0]">
              {s.step2.label}
            </span>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-navy">
                {s.step2.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {s.step2.desc}
              </p>
              <PlaceholderImage label={s.step2.placeholder} />
            </div>
          </div>
        </div>

        <Connector />

        {/* STEP 3 */}
        <div className="rounded-2xl bg-white px-6 py-6 shadow-sm shadow-gray-200/50 sm:px-8">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex-shrink-0 rounded-full bg-[#EBF4FF] px-3 py-1 text-xs font-bold tracking-wider text-[#2b6cb0]">
              {s.step3.label}
            </span>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-navy">
                {s.step3.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {s.step3.desc}
              </p>
              <PlaceholderImage label={s.step3.placeholder} />
            </div>
          </div>
        </div>

        <Connector />

        {/* STEP 4 */}
        <div className="rounded-2xl bg-white px-6 py-6 shadow-sm shadow-gray-200/50 sm:px-8">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex-shrink-0 rounded-full bg-[#EBF4FF] px-3 py-1 text-xs font-bold tracking-wider text-[#2b6cb0]">
              {s.step4.label}
            </span>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-navy">
                {s.step4.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {s.step4.desc}
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50/50 px-4 py-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-700">
                      {s.step4.genuineTitle}
                    </p>
                    <p className="text-xs text-green-600/70">
                      {s.step4.genuineDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50/50 px-4 py-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                    <svg
                      className="h-5 w-5 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-red-600">
                      {s.step4.fakeTitle}
                    </p>
                    <p className="text-xs text-red-500/70">
                      {s.step4.fakeDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
