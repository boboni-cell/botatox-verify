"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

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
        className="h-6 w-6 text-[#0072CE]/30"
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

function StepCard({
  label,
  title,
  children,
  index,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  index: number;
}) {
  const { ref, inView } = useInView(0.15);

  return (
    <div
      ref={ref}
      className="rounded-xl bg-white px-6 py-6 shadow-[0_2px_12px_rgba(26,54,93,0.06)] border border-[rgba(26,54,93,0.06)] transition-all duration-200 sm:px-8 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(26,54,93,0.10)]"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
      }}
    >
      <div className="flex items-start gap-4">
        <span className="mt-0.5 flex-shrink-0 rounded-full bg-[#EBF4FF] px-3 py-1 text-xs font-bold tracking-wider text-[#0072CE]">
          {label}
        </span>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-navy">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function VerificationSteps() {
  const { t } = useLanguage();
  const s = t.home.steps;

  return (
    <section className="mx-auto mt-12 w-full max-w-2xl px-4 pb-12">
      <div className="mb-10 text-center">
        <h2 className="text-lg font-semibold tracking-wider text-navy">
          {s.title}
        </h2>
        <div className="mx-auto mt-3 h-[1px] w-12 bg-[#e2e8f0]" />
      </div>

      <div className="space-y-0">
        <StepCard label={s.step1.label} title={s.step1.title} index={0}>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.step1.desc}</p>
          <PlaceholderImage label={s.step1.placeholder} />
        </StepCard>

        <Connector />

        <StepCard label={s.step2.label} title={s.step2.title} index={1}>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.step2.desc}</p>
          <PlaceholderImage label={s.step2.placeholder} />
        </StepCard>

        <Connector />

        <StepCard label={s.step3.label} title={s.step3.title} index={2}>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.step3.desc}</p>
          <PlaceholderImage label={s.step3.placeholder} />
        </StepCard>

        <Connector />

        <StepCard label={s.step4.label} title={s.step4.title} index={3}>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.step4.desc}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50/50 px-4 py-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-green-700">{s.step4.genuineTitle}</p>
                <p className="text-xs text-green-600/70">{s.step4.genuineDesc}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50/50 px-4 py-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-red-600">{s.step4.fakeTitle}</p>
                <p className="text-xs text-red-500/70">{s.step4.fakeDesc}</p>
              </div>
            </div>
          </div>
        </StepCard>
      </div>
    </section>
  );
}
