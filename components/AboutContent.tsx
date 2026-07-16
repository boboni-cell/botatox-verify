"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();
  const a = t.about;

  const missions = [
    {
      title: a.mission.innovation.title,
      desc: a.mission.innovation.desc,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
    },
    {
      title: a.mission.quality.title,
      desc: a.mission.quality.desc,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: a.mission.global.title,
      desc: a.mission.global.desc,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
    },
  ];

  const contacts = [
    { label: "Tel", value: "+82-10-2114-8516", href: "tel:+82-10-2114-8516" },
    { label: "E-mail", value: "mariobio@naver.com", href: "mailto:mariobio@naver.com" },
    { label: "Website", value: "www.hyundai-bio.com", href: "https://www.hyundai-bio.com/" },
    { label: "Address", value: "#Gasan Publik A08-0816, 60-26, Gasan-Dong, Geumcheon-Gu, Seoul, Korea" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 px-4 pt-24 pb-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-center text-xl font-bold tracking-wide text-navy sm:text-2xl">{a.title}</h1>
          <div className="mx-auto mt-3 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#3B9FDA] to-transparent" />

          <section className="mt-10">
            <h2 className="text-base font-semibold tracking-wide text-navy">{a.overview.title}</h2>
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              <p className="text-sm leading-relaxed text-gray-500 md:col-span-2">{a.overview.desc}</p>
              <div className="flex aspect-square items-center justify-center rounded-xl bg-[#edf2f7] text-sm text-[#94a3b8]">{a.overview.imagePlaceholder}</div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-center text-base font-semibold tracking-wide text-navy">{a.mission.title}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {missions.map((m) => (
                <div key={m.title} className="group rounded-xl bg-white px-6 py-8 text-center shadow-[0_2px_12px_rgba(26,54,93,0.06)] border border-[rgba(26,54,93,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(26,54,93,0.10)]">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF4FF] text-[#3B9FDA]">{m.icon}</div>
                  <h3 className="mt-4 text-sm font-semibold text-navy">{m.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-400">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-center text-base font-semibold tracking-wide text-navy">{a.certifications.title}</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex aspect-square items-center justify-center rounded-xl bg-[#edf2f7] text-xs text-[#94a3b8]">{a.certifications.placeholder}</div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-center text-sm font-semibold tracking-wide text-navy">{a.contactTitle}</h2>
            <div className="mx-auto mt-4 max-w-md space-y-2">
              {contacts.map((c) => {
                const content = (
                  <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                    <span className="min-w-[80px] text-xs font-medium uppercase text-gray-400">{c.label}</span>
                    <span className="break-words text-sm text-navy">{c.value}</span>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{content}</a>
                ) : (
                  <div key={c.label}>{content}</div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
