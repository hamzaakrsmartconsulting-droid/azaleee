import { Inter } from "next/font/google";
import "../styles/index.css";
import ChatbotWrapper from "../components/chatbot/ChatbotWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Azalée Patrimoine - Gestion de patrimoine et conseil financier",
  description: "Expert en gestion de patrimoine, optimisation fiscale et conseil financier. Découvrez nos solutions personnalisées pour sécuriser et faire croître votre patrimoine.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <ChatbotWrapper />
      </body>
    </html>
  );
}
