"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

function WeChatIcon() {
  return (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm3.711 2.06c-3.868 0-6.997 2.909-6.997 6.506 0 1.905.886 3.644 2.308 4.86l.333.285-.592.886-.073.11c-.058.087-.058.16 0 .218.058.058.145.087.232.058l2.002-.816c.376.162.768.27 1.183.325l.371.032.379.025c3.868 0 6.997-2.909 6.997-6.506 0-3.604-3.129-6.513-6.997-6.513h-.465l-.351.011a5.97 5.97 0 00-.323.033zm-2.057 3.723c.461 0 .838.366.838.822a.83.83 0 01-.838.823.83.83 0 01-.838-.823c0-.456.377-.822.838-.822zm4.137 0c.46 0 .837.366.837.822a.83.83 0 01-.837.823.83.83 0 01-.838-.823c0-.456.377-.822.838-.822z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const { t } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(true);
  const [showWechatModal, setShowWechatModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showWechatModal) return;
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowWechatModal(false);
        setCopied(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showWechatModal]);

  const handleCopyWechat = async () => {
    try {
      await navigator.clipboard.writeText("Royalfill");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const wc = t.wechat;

  return (
    <div className="fixed bottom-[130px] right-6 z-40 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="animate-[fadeIn_0.3s_ease-out] rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-lg">
          {t.whatsapp.tooltip}
          <div className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 bg-white" />
        </div>
      )}

      {/* WeChat Button */}
      <div ref={modalRef} className="relative">
        <button
          onClick={() => setShowWechatModal(!showWechatModal)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#07C160] text-white shadow-lg shadow-[#07C160]/30 transition-all hover:scale-110 hover:shadow-xl active:scale-95"
          aria-label="WeChat"
        >
          <WeChatIcon />
        </button>

        {/* WeChat Modal */}
        {showWechatModal && (
          <div className="absolute bottom-full right-0 mb-3 w-64 animate-[fadeIn_0.2s_ease-out] rounded-2xl bg-white p-5 shadow-xl shadow-gray-200/50">
            <h3 className="text-center text-sm font-semibold text-[#1B6BAA]">
              {wc.title}
            </h3>

            {/* QR Code Placeholder */}
            <div className="mx-auto mt-4 flex aspect-square w-36 items-center justify-center rounded-xl bg-[#edf2f7]">
              <span className="text-xs text-[#94a3b8]">{wc.qrPlaceholder}</span>
            </div>

            {/* WeChat ID */}
            <p className="mt-3 text-center text-xs font-medium text-gray-500">
              {wc.wechatId}
            </p>

            {/* Copy Button */}
            <button
              onClick={handleCopyWechat}
              className={`mt-3 w-full rounded-lg py-2 text-xs font-medium transition-all ${
                copied
                  ? "bg-[#07C160] text-white"
                  : "border border-[#07C160] text-[#07C160] hover:bg-[#07C160] hover:text-white"
              }`}
            >
              {copied ? wc.copied : wc.copyButton}
            </button>
          </div>
        )}
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/821024158525"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-xl active:scale-95"
        aria-label="WhatsApp"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
