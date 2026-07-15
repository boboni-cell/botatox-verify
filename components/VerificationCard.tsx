"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function VerificationCard() {
  const { t } = useLanguage();
  const g = t.home.guide;

  return (
    <div className="mx-auto w-full max-w-md rounded-xl bg-white shadow-[0_2px_12px_rgba(26,54,93,0.06)] border border-[rgba(26,54,93,0.06)] px-6 py-8 sm:px-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(26,54,93,0.10)]">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#EBF4FF]">
        <svg
          className="h-7 w-7 text-[#0072CE]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      </div>

      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold text-navy">{g.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">
          {g.description}
        </p>
      </div>

      <Link
        href="/verify"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0072CE] to-[#003A70] py-3.5 text-sm font-semibold text-white tracking-wide shadow-md shadow-[#0072CE]/20 transition-all hover:shadow-lg hover:shadow-[#0072CE]/30 hover:-translate-y-0.5 active:translate-y-0"
      >
        {g.button}
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
  );
}
