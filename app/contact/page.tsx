import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "联系我们 - HYUNDAIBIO",
  description:
    "如有任何疑问，请通过电话、WhatsApp、Instagram 或邮件联系 HYUNDAIBIO。",
  openGraph: {
    title: "联系我们 - HYUNDAIBIO",
    description:
      "如有任何疑问，请通过电话、WhatsApp、Instagram 或邮件联系 HYUNDAIBIO。",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
