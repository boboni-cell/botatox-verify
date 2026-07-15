"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();
  const a = t.about;

  const missions = [
    { title: a.mission.innovation.title, sub: a.mission.innovation.sub, desc: a.mission.innovation.desc },
    { title: a.mission.quality.title, sub: a.mission.quality.sub, desc: a.mission.quality.desc },
    { title: a.mission.global.title, sub: a.mission.global.sub, desc: a.mission.global.desc },
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
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-xl font-bold tracking-wide text-navy sm:text-2xl">{a.title}</h1>
          <div className="mx-auto mt-3 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#3B9FDA] to-transparent" />
        </div>

        {/* Company Intro */}
        <div className="mx-auto mt-8 max-w-3xl">
          <p className="text-sm leading-relaxed text-gray-500">{a.intro}</p>
        </div>

        {/* Mission Cards */}
        <section className="mx-auto mt-10 max-w-3xl">
          <h2 className="mb-6 text-center text-lg font-semibold tracking-wider text-navy">
            {a.mission.title}
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {missions.map((m) => (
              <div
                key={m.title}
                className="group rounded-xl bg-white px-6 py-8 text-center shadow-[0_2px_12px_rgba(26,54,93,0.06)] border border-[rgba(26,54,93,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(26,54,93,0.10)]"
              >
                <p className="text-xs font-medium uppercase tracking-widest text-[#3B9FDA]">
                  {m.sub}
                </p>
                <h3 className="mt-3 text-base font-semibold tracking-wide text-navy">
                  {m.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <section className="mx-auto mt-12 max-w-lg">
          <h2 className="mb-4 text-center text-sm font-semibold tracking-wider text-navy">
            {a.contactTitle}
          </h2>
          <div className="space-y-2">
            {contacts.map((c) => {
              const content = (
                <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                  <span className="text-xs font-medium uppercase text-gray-400 min-w-[80px]">
                    {c.label}
                  </span>
                  <span className="break-words text-sm text-navy">{c.value}</span>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={c.label}>{content}</div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
