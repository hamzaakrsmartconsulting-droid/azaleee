"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navGroups = [
  {
    label: "Accueil",
    items: [
      { href: "/cms", label: "Page d'accueil" },
    ],
  },
  {
    label: "Immobilier",
    items: [
      { href: "/cms/immobilier/lmnp", label: "LMNP" },
      { href: "/cms/immobilier/sci", label: "SCI" },
    ],
  },
  {
    label: "Fiscalité",
    items: [
      { href: "/cms/fiscalite", label: "Page Fiscalité" },
      { href: "/cms/fiscalite/impot-sur-le-revenu", label: "Impôt sur le revenu" },
    ],
  },
  {
    label: "Outils",
    items: [
      { href: "/cms/outils/calculatrice-impots", label: "Calculatrice impôts" },
      { href: "/cms/outils/calculs-financiers", label: "Calculs financiers" },
    ],
  },
  {
    label: "Patrimoine",
    items: [
      { href: "/cms/patrimoine/protection-famille", label: "Protection famille" },
    ],
  },
  {
    label: "Chatbot",
    items: [
      { href: "/cms/chatbot", label: "Sarah - Données collectées" },
    ],
  },
];

function SidebarItem({ href, label }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "bg-[#EAF7F7] text-[#005C69] border border-[#4EBBBD]"
          : "text-[#112033] hover:bg-[#F5F7FA]"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Top Bar */}
      <div className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/images/img_header_logo.png" 
              alt="Azalée Patrimoine" 
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm uppercase tracking-wide text-[#686868]">Tableau de bord</span>
              <span className="text-[#112033] font-semibold">CMS - Gestion du site</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="/" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-[#112033] hover:bg-gray-50">
              Voir le site
            </a>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Sidebar */}
        <aside className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 h-max">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-4 last:mb-0">
              <div className="px-2 text-xs font-semibold uppercase tracking-wide text-[#686868] mb-2">{group.label}</div>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <SidebarItem key={item.href} href={item.href} label={item.label} />
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* Main */}
        <main className="min-h-[70vh]">
          {children}
        </main>
      </div>
    </div>
  );
} 