"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

const STORAGE_KEY = "fiscalitePlacementsContent";

const defaultContent = {
  hero: {
    title: "Fiscalité des placements",
    subtitle: "Comprenez la fiscalité de vos différents placements et investissements. Optimisez votre stratégie d'investissement en tenant compte des impôts et prélèvements sociaux.",
    button: "Simuler mes placements",
    image: "/images/fiscalite-placements-hero.jpg"
  },
  quickStats: {
    title: "Taux de prélèvement",
    stats: [
      { label: "PFU", value: "30%", description: "Prélèvement Forfaitaire Unique" },
      { label: "Prélèvements sociaux", value: "17.2%", description: "CSG, CRDS, etc." },
      { label: "TMI moyen", value: "14%", description: "Taux Marginal d'Imposition" }
    ]
  },
  placementTypes: {
    title: "Types de placements et leur fiscalité",
    items: [
      {
        name: "Livret A",
        type: "Épargne réglementée",
        fiscalite: "Exonéré d'impôt et de prélèvements sociaux",
        avantages: ["Exonération totale", "Plafond 22 950€", "Taux garanti"],
        inconvenients: ["Taux faible", "Plafond limité"]
      },
      {
        name: "Assurance-vie",
        type: "Épargne long terme",
        fiscalite: "Exonération après 8 ans (plafond 4 600€/9 200€)",
        avantages: ["Exonération partielle", "Transmission optimisée", "Flexibilité"],
        inconvenients: ["Frais de gestion", "Fiscalité complexe"]
      },
      {
        name: "PEA",
        type: "Plan d'Épargne en Actions",
        fiscalite: "Exonération après 5 ans (plafond 150 000€)",
        avantages: ["Exonération totale", "Plafond élevé", "Actions européennes"],
        inconvenients: ["Engagement 5 ans", "Actions uniquement"]
      },
      {
        name: "SCPI",
        type: "Société Civile de Placement Immobilier",
        fiscalite: "Imposition au TMI + prélèvements sociaux",
        avantages: ["Diversification immobilière", "Liquidité", "Gestion déléguée"],
        inconvenients: ["Fiscalité classique", "Risque immobilier"]
      }
    ]
  },
  pfu: {
    title: "Prélèvement Forfaitaire Unique (PFU)",
    description: "Le PFU s'applique aux revenus du patrimoine mobilier depuis 2018",
    taux: [
      { revenu: "Dividendes", taux: "12.8%", details: "Impôt sur le revenu" },
      { revenu: "Intérêts", taux: "12.8%", details: "Impôt sur le revenu" },
      { revenu: "Plus-values", taux: "12.8%", details: "Impôt sur le revenu" }
    ],
    prélèvementsSociaux: "17.2% (CSG, CRDS, prélèvement de solidarité)",
    total: "30% (12.8% + 17.2%)"
  },
  tmi: {
    title: "Taux Marginal d'Imposition (TMI)",
    description: "Votre TMI détermine le taux d'imposition de vos revenus du patrimoine",
    bareme: [
      { seuil: "Jusqu'à 11 294€", taux: "0%" },
      { seuil: "De 11 295€ à 28 797€", taux: "11%" },
      { seuil: "De 28 798€ à 82 341€", taux: "30%" },
      { seuil: "De 82 342€ à 177 106€", taux: "41%" },
      { seuil: "Au-delà de 177 106€", taux: "45%" }
    ]
  },
  strategies: {
    title: "Stratégies d'optimisation fiscale",
    items: [
      {
        strategy: "Arbitrage PFU vs TMI",
        description: "Choisir entre le PFU (30%) et l'imposition au TMI selon votre situation",
        avantages: ["Choix du taux le plus avantageux", "Flexibilité annuelle"],
        exemple: "TMI 41% → PFU plus avantageux"
      },
      {
        strategy: "Utilisation des plafonds",
        description: "Optimiser l'utilisation des plafonds d'exonération",
        avantages: ["Maximiser les exonérations", "Réduire l'impôt global"],
        exemple: "Livret A + PEA + Assurance-vie"
      },
      {
        strategy: "Timing des plus-values",
        description: "Réaliser les plus-values au bon moment fiscal",
        avantages: ["Optimiser la fiscalité", "Planifier les sorties"],
        exemple: "Attendre 8 ans pour l'assurance-vie"
      }
    ]
  },
  examples: {
    title: "Exemples concrets de calcul",
    items: [
      {
        scenario: "Dividendes de 5 000€",
        pfu: "5 000€ × 30% = 1 500€",
        tmi: "5 000€ × 41% = 2 050€",
        choix: "PFU plus avantageux (économie de 550€)"
      },
      {
        scenario: "Plus-value de 10 000€",
        pfu: "10 000€ × 30% = 3 000€",
        tmi: "10 000€ × 30% = 3 000€",
        choix: "Égalité (choix selon situation personnelle)"
      }
    ]
  },
  cta: {
    title: "Besoin d'optimiser votre fiscalité ?",
    subtitle: "Nos experts vous accompagnent pour optimiser la fiscalité de vos placements",
    primaryButton: "Audit fiscal gratuit",
    secondaryButton: "Stratégie personnalisée"
  }
};

export default function FiscalitePlacementsPage() {
  const [content, setContent] = useState(defaultContent);
  const [selectedTMI, setSelectedTMI] = useState("30");

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

  const calculateFiscalite = (montant) => {
    const pfu = montant * 0.30;
    const tmi = montant * (parseInt(selectedTMI) / 100);
    const difference = Math.abs(pfu - tmi);
    const plusAvantageux = pfu < tmi ? "PFU" : "TMI";
    
    return { pfu, tmi, difference, plusAvantageux };
  };

  const [montantInput, setMontantInput] = useState("10000");
  const { pfu, tmi, difference, plusAvantageux } = calculateFiscalite(parseFloat(montantInput) || 0);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#E8F5E8] via-[#D7E8FF] to-[#FFEFD5] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#4EBBBD] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Guide fiscal
              </span>
              <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                {content.hero.title}
              </h1>
              <p className="text-[#686868] text-lg leading-relaxed mb-8">
                {content.hero.subtitle}
              </p>
              <button className="bg-[#4EBBBD] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200 text-lg">
                {content.hero.button}
              </button>
            </div>
            <div className="relative">
              <img 
                src={content.hero.image} 
                alt="Fiscalité des placements" 
                className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.quickStats.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.quickStats.stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-[#4EBBBD] mb-2">{stat.value}</div>
                <div className="text-[#112033] font-semibold mb-1">{stat.label}</div>
                <div className="text-[#686868] text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Types Comparison */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.placementTypes.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.placementTypes.items.map((placement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-[#112033] text-lg font-semibold">{placement.name}</h3>
                    <p className="text-[#686868] text-sm">{placement.type}</p>
                  </div>
                  <span className="inline-block bg-[#4EBBBD] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {placement.fiscalite}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-[#112033] font-medium mb-2 text-green-600">✅ Avantages</h4>
                    <ul className="space-y-1">
                      {placement.avantages.map((avantage, idx) => (
                        <li key={idx} className="text-[#686868] text-sm flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          {avantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-medium mb-2 text-red-600">❌ Inconvénients</h4>
                    <ul className="space-y-1">
                      {placement.inconvenients.map((inconvenient, idx) => (
                        <li key={idx} className="text-[#686868] text-sm flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          {inconvenient}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PFU Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                {content.pfu.title}
              </h2>
              <p className="text-[#686868] text-lg mb-6">
                {content.pfu.description}
              </p>
              <div className="space-y-4">
                {content.pfu.taux.map((taux, index) => (
                  <div key={index} className="bg-[#FAFFEF] rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#112033] font-medium">{taux.revenu}</span>
                      <span className="text-[#4EBBBD] font-bold">{taux.taux}</span>
                    </div>
                    <p className="text-[#686868] text-sm mt-1">{taux.details}</p>
                  </div>
                ))}
                <div className="bg-gradient-to-r from-[#4EBBBD] to-[#008D78] rounded-lg p-4 text-white text-center">
                  <div className="text-sm mb-1">Total avec prélèvements sociaux</div>
                  <div className="text-2xl font-bold">{content.pfu.total}</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-4">📊 Comparaison PFU vs TMI</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Montant des revenus
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={montantInput}
                      onChange={(e) => setMontantInput(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      placeholder="10000"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#686868]">€</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Votre TMI
                  </label>
                  <select
                    value={selectedTMI}
                    onChange={(e) => setSelectedTMI(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  >
                    <option value="0">0%</option>
                    <option value="11">11%</option>
                    <option value="30">30%</option>
                    <option value="41">41%</option>
                    <option value="45">45%</option>
                  </select>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-[#4EBBBD] text-white rounded-lg p-3">
                    <div className="flex justify-between">
                      <span>PFU (30%)</span>
                      <span className="font-bold">{pfu.toLocaleString()}€</span>
                    </div>
                  </div>
                  <div className="bg-[#B99066] text-white rounded-lg p-3">
                    <div className="flex justify-between">
                      <span>TMI ({selectedTMI}%)</span>
                      <span className="font-bold">{tmi.toLocaleString()}€</span>
                    </div>
                  </div>
                  <div className="bg-[#FAFFEF] rounded-lg p-3 text-center">
                    <div className="text-[#112033] font-semibold">
                      {plusAvantageux} plus avantageux
                    </div>
                    <div className="text-[#4EBBBD] text-sm">
                      Économie de {difference.toLocaleString()}€
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TMI Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.tmi.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.tmi.description}
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#4EBBBD] text-white p-4 text-center">
                <h3 className="text-lg font-semibold">Barème 2024</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {content.tmi.bareme.map((tranche, index) => (
                  <div key={index} className="p-4 flex justify-between items-center hover:bg-gray-50">
                    <span className="text-[#112033] font-medium">{tranche.seuil}</span>
                    <span className="inline-block bg-[#B99066] text-white px-3 py-1 rounded-full text-sm font-bold">
                      {tranche.taux}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.strategies.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.strategies.items.map((strategy, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-6 shadow-lg">
                <h3 className="text-[#112033] text-lg font-semibold mb-3">{strategy.strategy}</h3>
                <p className="text-[#686868] text-sm mb-4">{strategy.description}</p>
                <ul className="space-y-2 mb-4">
                  {strategy.avantages.map((avantage, idx) => (
                    <li key={idx} className="text-[#112033] text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#4EBBBD] rounded-full"></span>
                      {avantage}
                    </li>
                  ))}
                </ul>
                <div className="bg-[#FAFFEF] rounded-lg p-3 text-center">
                  <div className="text-[#4EBBBD] font-semibold text-sm">{strategy.exemple}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.examples.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.examples.items.map((example, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-[#112033] text-lg font-semibold mb-4">{example.scenario}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#686868]">PFU (30%):</span>
                    <span className="text-[#4EBBBD] font-semibold">{example.pfu}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#686868]">TMI:</span>
                    <span className="text-[#B99066] font-semibold">{example.tmi}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="text-center">
                      <span className="text-[#112033] font-bold text-lg">{example.choix}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#4EBBBD] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200 text-lg">
                {content.cta.primaryButton}
              </button>
              <button className="border-2 border-[#4EBBBD] text-[#4EBBBD] px-8 py-4 rounded-lg font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors duration-200 text-lg">
                {content.cta.secondaryButton}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 