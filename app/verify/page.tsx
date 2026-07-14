import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "产品验证 - BOTATOX",
  description: "通过 HiddenTag APP 扫描 BOTATOX 产品标签，验证产品真伪。",
};

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

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="mt-4 flex h-40 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-sm text-gray-300">
      {label}
    </div>
  );
}

function AppStoreBadge({ store }: { store: "appstore" | "googleplay" }) {
  const isApple = store === "appstore";
  return (
    <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-xs text-gray-400 shadow-sm transition-colors hover:border-gray-300">
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
    </div>
  );
}

export default function VerifyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 px-4 pt-24 pb-8">
        {/* Page Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-xl font-bold tracking-wide text-navy sm:text-2xl">
            BOTATOX 正品验证服务使用向导
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            通过 HiddenTag APP 扫描产品上的标签，即可验证 BOTATOX 产品真伪
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-8 max-w-2xl space-y-0">
          {/* STEP 1 */}
          <div className="rounded-2xl bg-white px-6 py-6 shadow-sm shadow-gray-200/50 sm:px-8">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex-shrink-0 rounded-full bg-[#EBF4FF] px-3 py-1 text-xs font-bold tracking-wider text-[#2b6cb0]">
                STEP 1
              </span>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-navy">
                  下载 HiddenTag APP
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  在手机应用商店下载 HiddenTag APP 后，点击正品认证按钮。
                </p>
                <PlaceholderImage label="APP下载示意图" />
                {/* App Store badges */}
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
              <span className="mt-0.5 flex-shrink-0 rounded-full bg-[#EBF4FF] px-3 py-1 text-xs font-bold tracking-wider text-[#2b6cb0]">
                STEP 2
              </span>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-navy">
                  确认标签
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  请用肉眼确认标签。正品标签可以通过 HiddenTag 正常扫描识别，假的标签则无法被 HiddenTag APP 识别。
                </p>
                {/* Side-by-side comparison */}
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="flex h-36 items-center justify-center rounded-xl border-2 border-dashed border-green-200 bg-green-50/30 text-sm text-green-400">
                      正品标签
                    </div>
                    <p className="mt-1.5 text-center text-xs text-green-500">
                      ✓ 可被 HiddenTag 识别
                    </p>
                  </div>
                  <div>
                    <div className="flex h-36 items-center justify-center rounded-xl border-2 border-dashed border-red-200 bg-red-50/30 text-sm text-red-400">
                      假货标签
                    </div>
                    <p className="mt-1.5 text-center text-xs text-red-500">
                      ✗ 由二维码合成的假标签
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
              <span className="mt-0.5 flex-shrink-0 rounded-full bg-[#EBF4FF] px-3 py-1 text-xs font-bold tracking-wider text-[#2b6cb0]">
                STEP 3
              </span>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-navy">
                  扫描 HiddenTag 标签
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  请扫描附着在产品上的 HiddenTag 标签。在不反光的情况下扫描，能够更迅速的完成认证。
                </p>
                <PlaceholderImage label="扫描示意图" />
              </div>
            </div>
          </div>

          <Connector />

          {/* STEP 4 */}
          <div className="rounded-2xl bg-white px-6 py-6 shadow-sm shadow-gray-200/50 sm:px-8">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex-shrink-0 rounded-full bg-[#EBF4FF] px-3 py-1 text-xs font-bold tracking-wider text-[#2b6cb0]">
                STEP 4
              </span>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-navy">
                  查看验证结果
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  请在认证 BOTATOX 产品后，确认相关图片。如出现下方警告画面，请一定要向购买处咨询。
                </p>

                {/* Result Comparison Cards */}
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {/* Genuine */}
                  <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50/50 px-4 py-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      <svg
                        className="h-6 w-6 text-green-600"
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
                      <p className="text-sm font-bold text-green-700">
                        正品验证通过
                      </p>
                      <p className="mt-0.5 text-xs text-green-600/70">
                        产品为正品，请放心使用
                      </p>
                    </div>
                  </div>

                  {/* Counterfeit */}
                  <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50/50 px-4 py-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                      <svg
                        className="h-6 w-6 text-red-500"
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
                      <p className="text-sm font-bold text-red-600">
                        WARNING
                      </p>
                      <p className="mt-0.5 text-xs text-red-500/70">
                        可能为仿冒品，请向购买处咨询
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mx-auto mt-10 max-w-md px-4 text-center">
          <a
            href="https://www.hiddentag.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2b6cb0] to-[#1a365d] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#2b6cb0]/25 transition-all hover:shadow-xl hover:shadow-[#2b6cb0]/35 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto sm:px-10"
          >
            前往 HiddenTag 官方验证平台
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
