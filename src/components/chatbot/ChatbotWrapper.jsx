'use client';
import { usePathname } from 'next/navigation';

export default function ChatbotWrapper() {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin');

  // Ne pas afficher le chatbot sur les pages admin
  if (isAdminPage) {
    return null;
  }

  // TODO: Implement chatbot component
  // For now, returning null to prevent build errors
  // You can add your chatbot implementation here later
  return null;
}
