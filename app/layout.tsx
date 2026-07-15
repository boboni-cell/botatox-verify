import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BOTATOX - Premium Medical Aesthetics | 高端医美产品",
    template: "%s - BOTATOX",
  },
  description:
    "BOTATOX 医美产品防伪码验证平台。采用 HiddenTag 防伪技术，确保正品保障。HYUNDAIBIO 旗下品牌。",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "BOTATOX - Premium Medical Aesthetics",
    description:
      "BOTATOX 医美产品防伪码验证平台。采用 HiddenTag 防伪技术，确保正品保障。",
    siteName: "BOTATOX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="646e078a-eb34-4df2-9290-142e2b54b6f7";
              (function(){
                d=document;
                s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
