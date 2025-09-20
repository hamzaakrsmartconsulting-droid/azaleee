"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Icônes pour chaque section
const sectionIcons = {
  "Accueil": "🏠",
  "Immobilier": "🏗️",
  "Fiscalité": "💰",
  "Placements": "📈",
  "Retraite": "🌅",
  "Patrimoine": "🏛️",
  "Outils": "🛠️",
  "Investissement Immobilier": "🏢",
  "Chatbot": "🤖"
};

const navGroups = [
  {
    label: "Accueil",
    items: [
      { href: "/cms", label: "Page d'accueil", icon: "📄" },
    ],
  },
  {
    label: "Immobilier",
    items: [
      { href: "/cms/immobilier", label: "Page Immobilier", icon: "📋" },
      { href: "/cms/immobilier/immobilier-neuf", label: "Immobilier neuf", icon: "🏢" },
      { href: "/cms/immobilier/vefa", label: "VEFA", icon: "📝" },
      { href: "/cms/immobilier/scellier", label: "Scellier", icon: "🏠" },
      { href: "/cms/immobilier/robien", label: "Robien", icon: "🏡" },
      { href: "/cms/immobilier/faire-construire", label: "Faire construire", icon: "🔨" },
      { href: "/cms/immobilier/investissement-locatif", label: "Investissement locatif", icon: "🔑" },
      { href: "/cms/immobilier/sci", label: "SCI", icon: "🏢" },
      { href: "/cms/immobilier/credit-immobilier-ptz", label: "Crédit immobilier / PTZ", icon: "💳" },
      { href: "/cms/immobilier/plus-value-immobiliere", label: "Plus-value immobilière", icon: "📊" },
      { href: "/cms/immobilier/lmnp", label: "LMNP", icon: "🏘️" },
      { href: "/cms/immobilier/immeubles-de-rapport", label: "Immeubles de rapport", icon: "🏢" },
    ],
  },
  {
    label: "Fiscalité",
    items: [
      { href: "/cms/fiscalite", label: "Page Fiscalité", icon: "📋" },
      { href: "/cms/fiscalite/impot-sur-le-revenu", label: "Impôt sur le revenu", icon: "📊" },
      { href: "/cms/fiscalite/declaration-impots", label: "Déclaration d'impôts", icon: "📝" },
      { href: "/cms/fiscalite/tranches-baremes-plafonds", label: "Tranches, barèmes, plafonds", icon: "📏" },
      { href: "/cms/fiscalite/lois-fiscales", label: "Lois fiscales", icon: "⚖️" },
      { href: "/cms/fiscalite/reductions-impot-deficit-foncier", label: "Réductions d'impôt / Déficit foncier", icon: "💸" },
      { href: "/cms/fiscalite/fiscalite-placements", label: "Fiscalité des placements", icon: "📈" },
      { href: "/cms/fiscalite/pfu", label: "PFU (Prélèvement Forfaitaire Unique)", icon: "🏦" },
      { href: "/cms/fiscalite/tmi-prelevements-sociaux", label: "TMI et prélèvements sociaux", icon: "📊" },
      { href: "/cms/fiscalite/defiscalisation-cas-specifiques", label: "Défiscalisation & cas spécifiques", icon: "🎯" },
      { href: "/cms/fiscalite/autre-fiscalite", label: "Autre fiscalité", icon: "🔍" },
    ],
  },
  {
    label: "Placements",
    items: [
      { href: "/cms/placements", label: "Page Placements", icon: "📋" },
      { href: "/cms/placements/assurance-vie", label: "Assurance-vie", icon: "🛡️" },
      { href: "/cms/placements/assurance-vie-luxembourg", label: "Assurance-vie luxembourgeoise", icon: "🇱🇺" },
      { href: "/cms/placements/compte-titres", label: "Compte titres ordinaires", icon: "📊" },
      { href: "/cms/placements/contrat-capitalisation", label: "Contrat de capitalisation", icon: "💎" },
      { href: "/cms/placements/livret", label: "Livrets (A, LDDS, etc.)", icon: "🏦" },
      { href: "/cms/placements/bourse-actions", label: "Bourse, actions et indices", icon: "📈" },
      { href: "/cms/placements/scpi-opci", label: "SCPI / OPCI", icon: "🏢" },
      { href: "/cms/placements/pea-per", label: "PEA / PER", icon: "🎯" },
      { href: "/cms/placements/taux-interets", label: "Taux, intérêts", icon: "📊" },
      { href: "/cms/placements/etf-produits-financiers", label: "ETF, produits financiers", icon: "📊" },
      { href: "/cms/placements/autres", label: "Autres placements", icon: "🔍" },
    ],
  },
  {
    label: "Retraite",
    items: [
      { href: "/cms/retraite", label: "Page Retraite", icon: "📋" },
      { href: "/cms/retraite/plan-retraite", label: "Plans retraite PER/PERP/PEE etc.", icon: "🌅" },
      { href: "/cms/retraite/rachat-trimestres", label: "Rachat de trimestres", icon: "⏰" },
      { href: "/cms/retraite/simulation", label: "Simulation retraite", icon: "🧮" },
      { href: "/cms/retraite/prevoyance-protection", label: "Prévoyance / protection famille", icon: "🛡️" },
      { href: "/cms/retraite/autre", label: "Autre retraite", icon: "🔍" },
    ],
  },
  {
    label: "Patrimoine",
    items: [
      { href: "/cms/patrimoine", label: "Page Patrimoine", icon: "📋" },
      { href: "/cms/patrimoine/succession-heritage", label: "Succession, héritage", icon: "🏛️" },
      { href: "/cms/patrimoine/donation-gratuite", label: "Donation gratuite", icon: "🎁" },
      { href: "/cms/patrimoine/donation-onereuse", label: "Donation onéreuse", icon: "💼" },
      { href: "/cms/patrimoine/protection-famille", label: "Protection famille", icon: "👨‍👩‍👧‍👦" },
      { href: "/cms/patrimoine/transmission", label: "Transmission", icon: "🔄" },
      { href: "/cms/patrimoine/bilan", label: "Bilan patrimonial", icon: "📊" },
      { href: "/cms/patrimoine/conseils", label: "Conseils patrimoniaux", icon: "💡" },
      { href: "/cms/patrimoine/autre", label: "Autre patrimoine", icon: "🔍" },
    ],
  },
  {
    label: "Outils",
    items: [
      { href: "/cms/outils", label: "Page Outils", icon: "📋" },
      { href: "/cms/outils/calculatrice-impots", label: "Calculatrice impôts", icon: "🧮" },
      { href: "/cms/outils/calculs-financiers", label: "Calculs financiers", icon: "📊" },
      { href: "/cms/outils/simulateurs", label: "Simulateurs financiers", icon: "🎮" },
      { href: "/cms/outils/calculatrices", label: "Calculatrices spécialisées", icon: "🔢" },
      { href: "/cms/outils/ressources", label: "Ressources et guides", icon: "📚" },
      { href: "/cms/outils/faqs", label: "FAQs", icon: "❓" },
    ],
  },
  {
    label: "Investissement Immobilier",
    items: [
      { href: "/cms/investissement-immobilier", label: "Page Investissement Immobilier", icon: "📋" },
      { href: "/cms/investissement-immobilier/strategies", label: "Stratégies d'investissement", icon: "🎯" },
      { href: "/cms/investissement-immobilier/analyse", label: "Analyse de marché", icon: "📊" },
      { href: "/cms/investissement-immobilier/gestion", label: "Gestion locative", icon: "🔑" },
      { href: "/cms/investissement-immobilier/defiscalisation", label: "Défiscalisation immobilière", icon: "💸" },
      { href: "/cms/investissement-immobilier/valorisation", label: "Valorisation", icon: "📈" },
      { href: "/cms/investissement-immobilier/news", label: "Actualités immobilières", icon: "📰" },
    ],
  },
  {
    label: "Chatbot",
    items: [
      { href: "/cms/chatbot", label: "Sarah - Données collectées", icon: "🤖" },
      { href: "/cms/chatbot/conversations", label: "Historique des conversations", icon: "💬" },
      { href: "/cms/chatbot/statistiques", label: "Statistiques d'utilisation", icon: "📊" },
      { href: "/cms/chatbot/configuration", label: "Configuration du chatbot", icon: "⚙️" },
    ],
  },
];

function SidebarItem({ href, label, icon, isActive, hasChildren, isExpanded, onToggle }) {
  return (
    <div className="relative">
      <Link
        href={href}
        className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-gradient-to-r from-[#EAF7F7] to-[#D1F2F2] text-[#005C69] border-l-4 border-[#4EBBBD] shadow-sm"
            : "text-[#374151] hover:bg-[#F8FAFC] hover:text-[#111827] hover:shadow-sm"
        }`}
      >
        <span className="text-lg">{icon}</span>
        <span className="flex-1">{label}</span>
        {hasChildren && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onToggle();
            }}
            className={`ml-auto transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          >
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </Link>
    </div>
  );
}

export default function Layout({ children }) {
  const [expandedSections, setExpandedSections] = useState(new Set(['Accueil']));

  const toggleSection = (sectionLabel) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionLabel)) {
      newExpanded.delete(sectionLabel);
    } else {
      newExpanded.add(sectionLabel);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top Bar */}
      <div className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="/images/img_header_logo.png" 
                alt="Azalée Patrimoine" 
                className="h-10 w-10 rounded-xl object-cover shadow-sm"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div className="h-6 w-px bg-gradient-to-b from-gray-200 to-gray-300"></div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs uppercase tracking-wider text-[#6B7280] font-medium">Tableau de bord</span>
              <span className="text-[#111827] font-semibold text-lg">CMS - Gestion du site</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>En ligne</span>
            </div>
            <a 
              href="/" 
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#4EBBBD] to-[#3A9A9C] px-4 py-2 text-sm font-medium text-white shadow-sm hover:from-[#3A9A9C] hover:to-[#2A7A7C] transition-all duration-200 hover:shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Voir le site
            </a>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
        {/* Sidebar */}
        <aside className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-max sticky top-24">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#111827] mb-2">Navigation</h2>
            <p className="text-sm text-gray-500">Gérez le contenu de votre site</p>
          </div>
          
          <nav className="space-y-1">
            {navGroups.map((group) => {
              const isExpanded = expandedSections.has(group.label);
              const hasChildren = group.items.length > 1;
              
              return (
                <div key={group.label} className="space-y-1">
                  {/* Section Header */}
                  <div 
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200 ${
                      hasChildren 
                        ? 'hover:bg-gray-50' 
                        : ''
                    }`}
                    onClick={() => hasChildren && toggleSection(group.label)}
                  >
                    <span className="text-xl">{sectionIcons[group.label]}</span>
                    <span className="text-sm font-semibold uppercase tracking-wide text-[#6B7280] flex-1">
                      {group.label}
                    </span>
                    {hasChildren && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {group.items.length}
                      </span>
                    )}
                  </div>
                  
                  {/* Section Items */}
                  {(!hasChildren || isExpanded) && (
                    <div className="ml-6 space-y-1 border-l border-gray-100 pl-4">
                      {group.items.map((item) => (
                        <SidebarItem 
                          key={item.href} 
                          href={item.href} 
                          label={item.label} 
                          icon={item.icon}
                          isActive={false} // Will be handled by usePathname
                          hasChildren={false}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          
          {/* Footer de la sidebar */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="text-center">
              <div className="w-8 h-8 bg-gradient-to-r from-[#4EBBBD] to-[#3A9A9C] rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-sm font-bold">AP</span>
              </div>
              <p className="text-xs text-gray-500">Azalee Patrimoine</p>
              <p className="text-xs text-gray-400">CMS v2.0</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-h-[70vh] bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}