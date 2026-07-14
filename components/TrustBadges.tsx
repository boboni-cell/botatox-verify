"use client";

import { useLanguage } from "@/context/LanguageContext";

function ShieldIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

export default function TrustBadges() {
  const { t } = useLanguage();
  const b = t.home.trust;

  const badges = [
    { icon: <ShieldIcon />, title: b.authentic.title, desc: b.authentic.desc },
    { icon: <FlaskIcon />, title: b.rnd.title, desc: b.rnd.desc },
    { icon: <GlobeIcon />, title: b.global.title, desc: b.global.desc },
  ];

  return (
    <section className="mx-auto max-w-4xl px-4 pb-16 pt-4">
      <h2 className="mb-8 text-center text-lg font-semibold tracking-wider text-navy">
        {b.title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className="group rounded-2xl bg-white px-6 py-8 text-center shadow-sm shadow-gray-200/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-gray-200/60"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EBF4FF] text-[#2b6cb0] ring-1 ring-[#c9a96e]/20 transition-all group-hover:ring-[#c9a96e]/50">
              {badge.icon}
            </div>
            <h3 className="mt-4 text-sm font-semibold tracking-wide text-navy">
              {badge.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-gray-400">
              {badge.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
