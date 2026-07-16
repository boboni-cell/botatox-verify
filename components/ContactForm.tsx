"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { t, locale } = useLanguage();
  const f = t.contact.form;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    inquiryType: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const isValid = form.name.trim() && form.email.trim() && form.inquiryType && form.message.trim() && agreed;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\nCountry: ${form.country}\nInquiry: ${form.inquiryType}\n\nMessage:\n${form.message}`;

    const mailto = `mailto:mariobio@naver.com?subject=${encodeURIComponent("Inquiry from " + form.name)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, "_blank");

    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", company: "", country: "", inquiryType: "", message: "" });
    setAgreed(false);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="mx-auto mt-12 max-w-2xl">
      <h2 className="text-center text-base font-semibold tracking-wide text-navy">{f.title}</h2>
      <div className="mx-auto mt-3 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#3B9FDA] to-transparent" />

      <form onSubmit={handleSubmit} className="mt-6 rounded-xl bg-white p-6 shadow-[0_2px_12px_rgba(26,54,93,0.06)] border border-[rgba(26,54,93,0.06)] sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label className="mb-1 block text-xs font-medium text-navy">{f.name} *</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder={f.namePlaceholder}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-navy placeholder:text-gray-300 outline-none focus:border-[#3B9FDA] focus:ring-1 focus:ring-[#3B9FDA]"
            />
          </div>
          {/* Email */}
          <div>
            <label className="mb-1 block text-xs font-medium text-navy">{f.email} *</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder={f.emailPlaceholder}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-navy placeholder:text-gray-300 outline-none focus:border-[#3B9FDA] focus:ring-1 focus:ring-[#3B9FDA]"
            />
          </div>
          {/* Phone */}
          <div>
            <label className="mb-1 block text-xs font-medium text-navy">{f.phone}</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder={f.phonePlaceholder}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-navy placeholder:text-gray-300 outline-none focus:border-[#3B9FDA] focus:ring-1 focus:ring-[#3B9FDA]"
            />
          </div>
          {/* Company */}
          <div>
            <label className="mb-1 block text-xs font-medium text-navy">{f.company}</label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              placeholder={f.companyPlaceholder}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-navy placeholder:text-gray-300 outline-none focus:border-[#3B9FDA] focus:ring-1 focus:ring-[#3B9FDA]"
            />
          </div>
          {/* Country */}
          <div>
            <label className="mb-1 block text-xs font-medium text-navy">{f.country}</label>
            <input
              type="text"
              value={form.country}
              onChange={(e) => update("country", e.target.value)}
              placeholder={f.countryPlaceholder}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-navy placeholder:text-gray-300 outline-none focus:border-[#3B9FDA] focus:ring-1 focus:ring-[#3B9FDA]"
            />
          </div>
          {/* Inquiry Type */}
          <div>
            <label className="mb-1 block text-xs font-medium text-navy">{f.inquiryType} *</label>
            <select
              required
              value={form.inquiryType}
              onChange={(e) => update("inquiryType", e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-navy text-gray-400 outline-none focus:border-[#3B9FDA] focus:ring-1 focus:ring-[#3B9FDA]"
            >
              <option value="" disabled>{f.inquiryPlaceholder}</option>
              {f.inquiryOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="mt-4">
          <label className="mb-1 block text-xs font-medium text-navy">{f.message} *</label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder={f.messagePlaceholder}
            className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-navy placeholder:text-gray-300 outline-none focus:border-[#3B9FDA] focus:ring-1 focus:ring-[#3B9FDA]"
          />
        </div>

        {/* Privacy Checkbox */}
        <div className="mt-4 flex items-start gap-2">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#3B9FDA] focus:ring-[#3B9FDA]"
          />
          <span className="text-xs text-gray-500">
            {f.privacy.split("Privacy Policy")[0]}
            <button type="button" onClick={() => setShowPrivacy(true)} className="text-[#3B9FDA] underline">
              Privacy Policy
            </button>
            {f.privacy.split("Privacy Policy")[1] || ""}
          </span>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!isValid}
          className="mt-6 w-full rounded-lg bg-gradient-to-br from-[#3B9FDA] to-[#1B6BAA] py-3 text-sm font-semibold text-white shadow-md transition-all hover:brightness-110 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {f.submit}
        </button>

        {/* Success toast */}
        {submitted && (
          <div className="mt-4 animate-[fadeIn_0.3s_ease-out] rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
            {f.success}
          </div>
        )}
      </form>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm" onClick={() => setShowPrivacy(false)}>
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl animate-[fadeIn_0.2s_ease-out]" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-base font-semibold text-navy">{f.privacyTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">{f.privacyContent}</p>
            <button onClick={() => setShowPrivacy(false)} className="mt-5 w-full rounded-lg bg-gray-100 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-200">
              {f.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
