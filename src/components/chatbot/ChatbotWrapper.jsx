"use client";
import { usePathname } from "next/navigation";
import SarahChatbot from "./SarahChatbot";

export default function ChatbotWrapper() {
  const pathname = usePathname();
  const isCmsPage = pathname?.startsWith('/cms');

  // Don't render the chatbot on CMS pages
  if (isCmsPage) {
    return null;
  }

  return <SarahChatbot />;
} 