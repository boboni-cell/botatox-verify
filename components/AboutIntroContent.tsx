"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutIntroContent() {
  const { t } = useLanguage();
  const a = t.about;
  const i = a.intro;

  const values = [
    { label: i.values.quality.label, title: i.values.quality.title, desc: i.values.quality.desc },
    { label: i.values.reliability.label, title: i.values.reliability.title, desc: i.values.reliability.desc },
    { label: i.values.scalability.label, title: i.values.scalability.title, desc: i.values.scalability.desc },
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
          {/* Hero */}
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#3B9FDA]">{i.subtitle}</p>
          <h1 className="mt-2 text-center text-2xl font-bold tracking-wide text-navy sm:text-3xl">{i.title}</h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">{i.heroDesc}</p>
          <div className="mx-auto mt-6 h-[1px] w-16 bg-[#e2e8f0]" />

          {/* Mission */}
          <section className="mt-10">
            <h2 className="text-base font-semibold tracking-wide text-navy">{i.missionTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">{i.missionDesc}</p>
          </section>

          {/* Core Values */}
          <section className="mt-10">
            <h2 className="text-center text-base font-semibold tracking-wide text-navy">{i.values.title}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {values.map((v) => (
                <div key={v.label} className="rounded-xl bg-white px-6 py-8 text-center shadow-[0_2px_12px_rgba(26,54,93,0.06)] border border-[rgba(26,54,93,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(26,54,93,0.10)]">
                  <span className="text-xs font-bold tracking-widest text-[#3B9FDA]">{v.label}</span>
                  <h3 className="mt-2 text-sm font-semibold text-navy">{v.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-400">{v.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Vision */}
          <section className="mt-10 rounded-xl bg-[#EBF4FF] px-6 py-8 text-center">
            <h2 className="text-base font-semibold tracking-wide text-navy">{i.vision.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">{i.vision.desc}</p>
          </section>

          {/* Certifications */}
          <section className="mt-10">
            <h2 className="text-center text-base font-semibold tracking-wide text-navy">{a.certifications.title}</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {Array.from({ length: 4 }).map((_, j) => (
                <div key={j} className="flex aspect-square items-center justify-center rounded-xl bg-[#edf2f7] text-xs text-[#94a3b8]">{a.certifications.placeholder}</div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="mt-10">
            <h2 className="text-center text-sm font-semibold tracking-wide text-navy">{a.contactTitle}</h2>
            <div className="mx-auto mt-4 grid max-w-[700px] gap-4 sm:grid-cols-2">
              {contacts.map((c) => {
                const icons: Record<string, React.ReactNode> = {
                  Tel: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>,
                  "E-mail": <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
                  Website: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
                  Address: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
                };
                const card = (
                  <div className="group rounded-xl bg-white px-5 py-6 text-center shadow-[0_2px_12px_rgba(26,54,93,0.06)] border border-[rgba(26,54,93,0.06)] transition-all duration-200 hover:-translate-y-0.5">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#EBF4FF] text-[#3B9FDA]">{icons[c.label]}</div>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-gray-400">{c.label}</p>
                    <p className="mt-1 break-words text-sm font-medium text-navy">{c.value}</p>
                  </div>
                );
                return c.href ? <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{card}</a> : <div key={c.label}>{card}</div>;
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
