"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const STORAGE_KEY = "outilsFinanciersContent";

const defaultContent = {
  hero: {
    title: "Outils financiers",
    subtitle: "Chez Azalée Patrimoine, nous croyons que la gestion patrimoniale doit être fiable (données officielles, calculs objectifs), innovante (digitalisation, agrégation de comptes, back-testing), mais aussi humaine (proximité et accompagnement personnalisé).",
    description: "C'est pourquoi nous avons mis en place une combinaison unique d'outils technologiques et de partenariats institutionnels pour offrir à nos clients une vision claire, complète et actionnable de leur patrimoine.",
    button: "Accéder aux outils gratuits",
    image: "/images/outils-financiers-hero.jpg"
  },
  outils: {
    title: "Nos outils financiers",
    items: [
      {
        id: "simulations-fiscales",
        title: "1. Simulations fiscales",
        description: "Mesurer l'impact fiscal et social de chaque décision patrimoniale",
        details: [
          "Impôts : simulateurs officiels impots.gouv.fr pour IR, IFI, crédits et réductions fiscales",
          "Retraite : inforetraite.fr pour simuler plusieurs âges de départ, visualiser les trimestres manquants, anticiper les pensions"
        ],
        icon: "📊"
      },
      {
        id: "calculs-financiers",
        title: "2. Calculs financiers avancés",
        description: "Outil d'aide à la décision pour arbitrer entre fiscalité immédiate et différée",
        details: [
          "Kwipper BIG EXPERT : simulation des plus-values, frais, taux sur assurance-vie, PER, PEA, CTO…",
          "Comparaison des enveloppes fiscales et impact réel sur le rendement net"
        ],
        icon: "🧮"
      },
      {
        id: "guides-pratiques",
        title: "3. Guides pratiques partenaires",
        description: "Ces supports présentent de façon claire les caractéristiques, frais et avantages des produits disponibles",
        details: [
          "Nous mettons à disposition les guides pédagogiques de nos partenaires assureurs et sociétés de gestion :",
          "Selencia, Cardif, SwissLife, Vie Plus, UAF Life, Intencial"
        ],
        icon: "📚"
      },
      {
        id: "back-testing",
        title: "4. Back-testing et allocations d'actifs",
        description: "Permet de comparer différentes stratégies et de visualiser le couple risque / rendement d'une allocation",
        details: [
          "QUANTALYS : outil de référence pour analyser et simuler des portefeuilles d'actifs sur la base des performances passées",
          "Comparaison de différentes stratégies (ETF, fonds, UC, produits structurés)"
        ],
        icon: "📈"
      }
    ]
  },
  innovation: {
    title: "5. Innovation Azalée Patrimoine : agrégateur de comptes",
    subtitle: "Votre patrimoine en un seul coup d'œil",
    description: "Nous mettons à disposition de nos prospects et clients un agrégateur de comptes bancaires et financiers :",
    fonctionnalites: [
      "Visualisation consolidée de tous vos comptes (banques, assurances, placements, immobilier)",
      "Suivi en temps réel de l'évolution de votre patrimoine",
      "Alertes et reporting automatisés"
    ],
    conditions: {
      title: "Conditions d'accès",
      gratuit: "Gratuit pendant 1 mois pour tout prospect remplissant le formulaire de contact",
      client: "Gratuit à vie pour nos clients Azalée Patrimoine"
    },
    avantage: "Une innovation qui vous donne plus de transparence et de contrôle sur votre patrimoine."
  },
  digitalisation: {
    title: "🚀 Digitalisation & proximité humaine",
    description: "Chez Azalée Patrimoine :",
    points: [
      "Nous utilisons les meilleurs outils digitaux (simulateurs, agrégateurs, back-testing) pour gagner en précision et en réactivité",
      "Mais nous restons avant tout proches de nos clients : le digital est un support, pas une barrière",
      "Chaque simulation est interprétée et contextualisée par nos conseillers, pour devenir une véritable stratégie patrimoniale personnalisée"
    ],
    promesse: "Azalée Patrimoine, c'est l'alliance de l'innovation digitale et de la proximité humaine. Un patrimoine mieux suivi, mieux analysé, et mieux conseillé."
  },
  faq: {
    title: "FAQ – Agrégateur de comptes & outils digitaux Azalée Patrimoine",
    questions: [
      {
        question: "1. Qu'est-ce qu'un agrégateur de comptes ?",
        answer: "Un agrégateur de comptes est un outil digital qui permet de regrouper automatiquement tous vos comptes bancaires et financiers sur une seule interface.",
        details: [
          "vos comptes bancaires",
          "vos contrats d'assurance-vie, PEA, PER, CTO",
          "vos crédits et vos investissements"
        ]
      },
      {
        question: "2. L'agrégateur Azalée Patrimoine est-il gratuit ?",
        answer: "Oui, gratuit pendant 1 mois pour tout prospect qui remplit le formulaire de contact. Gratuit à vie pour les clients Azalée Patrimoine.",
        precision: "C'est un service premium offert pour renforcer le suivi et la transparence patrimoniale."
      },
      {
        question: "3. Est-ce sécurisé ?",
        answer: "Oui ✅ L'agrégateur utilise la technologie DSP2 (Directive européenne sur les services de paiement), identique à celle des banques.",
        details: [
          "Données cryptées et hébergées en France",
          "Lecture seule (aucune transaction possible depuis l'agrégateur)",
          "Authentification forte (identifiants bancaires jamais stockés)"
        ],
        precision: "En clair, vos données sont protégées au même niveau que vos comptes bancaires."
      },
      {
        question: "4. Quelles banques et assurances sont compatibles ?",
        answer: "La plupart des établissements français et européens sont compatibles :",
        details: [
          "Banques traditionnelles (BNP, Société Générale, Crédit Agricole, etc.)",
          "Banques en ligne (Boursorama, Hello Bank, etc.)",
          "Assureurs et gestionnaires d'actifs (SwissLife, Cardif, Generali, Vie Plus, Intencial, etc.)"
        ],
        precision: "Vous pouvez donc avoir une vision consolidée de 100% de votre patrimoine."
      },
      {
        question: "5. Quels sont les avantages concrets ?",
        answer: "Avec Azalée Patrimoine, cet outil devient un véritable tableau de bord patrimonial.",
        details: [
          "Gain de temps : plus besoin de se connecter à chaque banque",
          "Vision globale : suivi de la performance de l'ensemble de vos actifs",
          "Pilotage intelligent : reporting, alertes, et possibilité de simuler des arbitrages"
        ]
      },
      {
        question: "6. Comment Azalée Patrimoine utilise-t-il ces données ?",
        answer: "Nous utilisons l'agrégateur pour :",
        details: [
          "Réaliser des bilans patrimoniaux précis",
          "Proposer des arbitrages adaptés à votre profil",
          "Assurer un suivi personnalisé dans le temps"
        ],
        precision: "Mais vous gardez le contrôle : vos données restent confidentielles et ne sont jamais transmises sans votre accord."
      }
    ]
  },
  promesse: {
    title: "🚀 La promesse Azalée Patrimoine",
    description: "L'agrégateur de comptes est un outil d'innovation au service de nos clients.",
    avantage: "Grâce à lui, vous bénéficiez d'un patrimoine digitalisé, transparent et suivi en temps réel, tout en conservant la proximité humaine d'un conseiller dédié."
  },
  cta: {
    title: "📅 Demandez votre accès gratuit à l'agrégateur de comptes",
    subtitle: "Découvrez la gestion patrimoniale nouvelle génération",
    email: "contact@azalee-patrimoine.fr",
    primaryButton: "Demander l'accès gratuit",
    secondaryButton: "Nous écrire"
  }
};

export default function OutilsFinanciersPage() {
  const [content, setContent] = useState(defaultContent);
  const [activeTab, setActiveTab] = useState("outils");

  // Load content from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setContent((prev) => ({ ...prev, ...parsed }));
      }
    } catch (e) {
      console.error("Failed to load content", e);
    }
  }, []);

  // Live update on CustomEvent from CMS
  useEffect(() => {
    const handler = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) setContent((prev) => ({ ...prev, ...JSON.parse(saved) }));
      } catch {}
    };
    window.addEventListener("contentUpdated", handler);
    return () => window.removeEventListener("contentUpdated", handler);
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#FAFFEF] via-[#E8F5E8] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#4EBBBD] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Innovation digitale
              </span>
              <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                {content.hero.title}
              </h1>
              <p className="text-[#686868] text-lg leading-relaxed mb-4">
                {content.hero.subtitle}
              </p>
              <p className="text-[#686868] text-lg leading-relaxed mb-8">
                {content.hero.description}
              </p>
              <button className="bg-[#4EBBBD] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200 text-lg">
                {content.hero.button}
              </button>
            </div>
            <div className="relative">
              <img 
                src="/images/calcul.webp" 
                alt="Jeune homme utilisant calculateur sur smartphone et laptop dans un espace coworking moderne" 
                className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
                onError={(e) => {
                  console.log('Outils financiers hero image failed to load:', e.target.src);
                }}
                onLoad={() => console.log('Outils financiers hero image loaded successfully')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab("outils")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "outils"
                  ? "bg-[#4EBBBD] text-white"
                  : "bg-gray-100 text-[#686868] hover:bg-gray-200"
              }`}
            >
              🛠️ Nos outils
            </button>
            <button
              onClick={() => setActiveTab("innovation")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "innovation"
                  ? "bg-[#4EBBBD] text-white"
                  : "bg-gray-100 text-[#686868] hover:bg-gray-200"
              }`}
            >
              🚀 Innovation
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "faq"
                  ? "bg-[#4EBBBD] text-white"
                  : "bg-gray-100 text-[#686868] hover:bg-gray-200"
              }`}
            >
              ❓ FAQ
            </button>
          </div>
        </div>
      </section>

      {/* Outils Section */}
      {activeTab === "outils" && (
        <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
              {content.outils.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.outils.items.map((outil, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{outil.icon}</div>
                    <h3 className="text-[#112033] text-xl font-semibold">{outil.title}</h3>
                  </div>
                  <p className="text-[#686868] text-lg mb-4 font-medium">
                    👉 {outil.description}
                  </p>
                  <ul className="space-y-2">
                    {outil.details.map((detail, idx) => (
                      <li key={idx} className="text-[#112033] text-sm flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#4EBBBD] rounded-full mt-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Innovation Section */}
      {activeTab === "innovation" && (
        <div className="space-y-12">
          {/* Agrégateur Section */}
          <section className="py-12 bg-white">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
                {content.innovation.title}
              </h2>
              <h3 className="text-[#112033] text-xl font-semibold text-center mb-6">
                {content.innovation.subtitle}
              </h3>
              <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
                {content.innovation.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {content.innovation.fonctionnalites.map((fonctionnalite, index) => (
                  <div key={index} className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-6 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white text-[#4EBBBD] rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-sm font-medium">{fonctionnalite}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-8 mb-8">
                <h4 className="text-[#112033] text-lg font-semibold mb-4">{content.innovation.conditions.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-[#112033] font-medium">{content.innovation.conditions.gratuit}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-[#112033] font-medium">{content.innovation.conditions.client}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-6 text-white text-center">
                <p className="font-medium">{content.innovation.avantage}</p>
              </div>
            </div>
          </section>

          {/* Digitalisation Section */}
          <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
                {content.digitalisation.title}
              </h2>
              <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
                {content.digitalisation.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {content.digitalisation.points.map((point, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#4EBBBD] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-[#112033] text-sm font-medium">{point}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-8 text-white text-center">
                <p className="text-lg font-medium">{content.digitalisation.promesse}</p>
              </div>
            </div>
          </section>

          {/* Promesse Section */}
          <section className="py-12 bg-white">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
                {content.promesse.title}
              </h2>
              <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
                {content.promesse.description}
              </p>
              <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-8 text-white text-center">
                <p className="text-lg font-medium">{content.promesse.avantage}</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* FAQ Section */}
      {activeTab === "faq" && (
        <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
              {content.faq.title}
            </h2>
            <div className="space-y-6">
              {content.faq.questions.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-[#112033] text-lg font-semibold mb-4">{faq.question}</h3>
                  <p className="text-[#686868] text-sm mb-4">{faq.answer}</p>
                  
                  {faq.details && (
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {faq.details.map((detail, idx) => (
                          <li key={idx} className="text-[#112033] text-sm flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#4EBBBD] rounded-full mt-2 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {faq.precision && (
                    <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg p-4 text-white">
                      <p className="text-sm font-medium">👉 {faq.precision}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#F2F2F2] to-[#E5E5E5]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <h2 className="text-[#112033] text-2xl lg:text-3xl font-semibold mb-4">
              {content.cta.title}
            </h2>
            <p className="text-[#686868] text-lg mb-8 max-w-3xl mx-auto">
              {content.cta.subtitle}
            </p>
            <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-6 text-white mb-8">
              <h3 className="text-xl font-semibold mb-3">📧 {content.cta.email}</h3>
              <p className="text-sm opacity-90">Découvrez la gestion patrimoniale nouvelle génération</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#4EBBBD] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200 text-lg">
                🗓️ {content.cta.primaryButton}
              </button>
              <button className="border-2 border-[#4EBBBD] text-[#4EBBBD] px-8 py-4 rounded-lg font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors duration-200 text-lg">
                📧 {content.cta.secondaryButton}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}