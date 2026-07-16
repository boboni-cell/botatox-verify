import type { Metadata } from "next";
import NewsContent from "@/components/NewsContent";

export const metadata: Metadata = {
  title: "新闻动态 - HYUNDAIBIO",
  description: "HYUNDAIBIO 最新新闻动态与活动视频。BOTATOX 品牌资讯。",
};

export default function NewsPage() {
  return <NewsContent />;
}
