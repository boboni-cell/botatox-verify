import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us - HYUNDAIBIO",
  description:
    "如有任何疑问，请通过电话、WhatsApp、微信或邮件联系 HYUNDAIBIO。",
  openGraph: {
    title: "Contact Us - HYUNDAIBIO",
    description: "如有任何疑问，请通过电话、WhatsApp、微信或邮件联系 HYUNDAIBIO。",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
