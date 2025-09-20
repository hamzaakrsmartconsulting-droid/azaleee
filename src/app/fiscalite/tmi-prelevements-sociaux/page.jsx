"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

const STORAGE_KEY = "tmiPrelevementsSociauxContent";

const defaultContent = {
  hero: {
    title: "Tranche Marginale d'Imposition (TMI) + Prélèvements sociaux",
    subtitle: "Ce que tout investisseur doit comprendre. La fiscalité des placements dépend en grande partie de votre Tranche Marginale d'Imposition (TMI). Couplée aux prélèvements sociaux (17,2%), elle conditionne le rendement net de vos investissements.",
    button: "Calculer ma TMI",
    image: "/images/fiscalite-tmi-hero.jpg"
  },
  definition: {
    title: "📊 Qu'est-ce que la TMI ?",
    description: "La TMI correspond au taux d'imposition marginal auquel sont soumis vos derniers euros de revenu imposable.",
    tableau: {
      headers: ["Revenu imposable (2024)", "Taux TMI"],
      rows: [
        { revenu: "Jusqu'à 11 294 €", taux: "0 %" },
        { revenu: "De 11 295 à 28 797 €", taux: "11 %" },
        { revenu: "De 28 798 à 82 341 €", taux: "30 %" },
        { revenu: "De 82 342 à 177 106 €", taux: "41 %" },
        { revenu: "Au-delà de 177 106 €", taux: "45 %" }
      ]
    },
    precision: "Il s'agit d'un taux marginal, et non global : seule la fraction de revenu correspondante est taxée à ce taux."
  },
  prelevementsSociaux: {
    title: "🏛️ Qu'ajoute-t-on à la TMI ? Les prélèvements sociaux",
    description: "Quel que soit le mode d'imposition, les revenus du capital supportent aussi 17,2% de prélèvements sociaux :",
    composition: [
      { nom: "CSG", taux: "9,2%", details: "dont 6,8% déductibles" },
      { nom: "CRDS", taux: "0,5%", details: "Contribution au Remboursement de la Dette Sociale" },
      { nom: "Prélèvement de solidarité", taux: "7,5%", details: "Contribution additionnelle" }
    ],
    application: "Ces prélèvements s'appliquent sur :",
    revenusConcernes: [
      "Les intérêts, dividendes, revenus fonciers",
      "Les plus-values mobilières et immobilières"
    ]
  },
  simulation: {
    title: "🤔 TMI + PS ou PFU ? Simulation comparative",
    description: "Supposons 10 000 € de dividendes encaissés.",
    tableau: {
      headers: ["TMI", "Option PFU (30%)", "Option barème IR + PS (avec abattement 40%)"],
      rows: [
        { tmi: "0%", pfu: "3 000 €", bareme: "1 032 €" },
        { tmi: "11%", pfu: "3 000 €", bareme: "1 584 €" },
        { tmi: "30%", pfu: "3 000 €", bareme: "2 544 €" },
        { tmi: "41%", pfu: "3 000 €", bareme: "3 264 €" },
        { tmi: "45%", pfu: "3 000 €", bareme: "3 504 €" }
      ]
    },
    conclusion: "Le barème devient moins favorable dès la TMI ≥ 30%, sauf cas particuliers (ex : faibles montants, déductions spécifiques)."
  },
  vigilance: {
    title: "⚠ Points de vigilance pour l'investisseur averti",
    points: [
      "La CSG de 9,2% comprend 6,8% déductibles l'année suivante (hors PFU)",
      "Si vous optez pour le barème IR, vos revenus sont ajoutés à votre base imposable, ce qui peut élever artificiellement votre TMI",
      "Le PFU vous protège d'une progressivité fiscale punitive, mais supprime certains abattements et déductions"
    ]
  },
  strategies: {
    title: "🚀 Stratégies d'optimisation patrimoniale",
    strategies: [
      {
        strategy: "Enveloppes fiscales",
        description: "Préférer les enveloppes fiscales (PEA, assurance vie, PER) pour les TMI élevées",
        icon: "🛡️"
      },
      {
        strategy: "Déficit foncier",
        description: "Utiliser le déficit foncier pour compenser les revenus fortement imposés",
        icon: "🏠"
      },
      {
        strategy: "Arbitrage fiscal",
        description: "Arbitrer entre PFU et barème selon structure de revenus + objectifs à long terme",
        icon: "⚖️"
      },
      {
        strategy: "Fiscalité déférée",
        description: "Envisager des supports à fiscalité déférée (contrat de capitalisation, foncières à l'IS...)",
        icon: "⏰"
      }
    ]
  },
  azaleeRecommendation: {
    title: "Recommandation Azalée Patrimoine",
    description: "Nous accompagnons nos clients dans l'étude personnalisée de leur TMI, leurs revenus du capital et leurs options fiscales afin de :",
    objectifs: [
      "Maximiser le rendement net d'impôt",
      "Anticiper les effets de seuil",
      "Structurer leur portefeuille avec des enveloppes pertinentes"
    ]
  },
  cta: {
    title: "Vous hésitez entre PFU et barème IR pour vos placements ?",
    subtitle: "Nos experts vous accompagnent pour optimiser votre fiscalité patrimoniale",
    email: "contact@azalee-patrimoine.fr",
    primaryButton: "Prenez rendez-vous ici",
    secondaryButton: "Nous écrire"
  }
};

export default function TMIPrelevementsSociauxPage() {
  const [content, setContent] = useState(defaultContent);
  const [calculValues, setCalculValues] = useState({
    revenus: "",
    tmi: ""
  });

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

  const calculateFiscalite = () => {
    const revenus = parseFloat(calculValues.revenus) || 0;
    const tmi = parseFloat(calculValues.tmi) || 0;
    
    const pfu = revenus * 0.30;
    const bareme = revenus * (tmi / 100) + revenus * 0.172;
    const difference = Math.abs(pfu - bareme);
    const plusAvantageux = pfu < bareme ? "PFU" : "Barème IR";
    
    return { pfu, bareme, difference, plusAvantageux };
  };

  const { pfu, bareme, difference, plusAvantageux } = calculateFiscalite();

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#FAFFEF] via-[#E8F5E8] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
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
                alt="TMI et Prélèvements sociaux" 
                className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.definition.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.definition.description}
          </p>
          
          <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#4EBBBD] text-white">
                    {content.definition.tableau.headers.map((header, index) => (
                      <th key={index} className="text-left py-4 px-6 font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.definition.tableau.rows.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-[#112033]">{row.revenu}</td>
                      <td className="py-4 px-6 text-[#4EBBBD] font-bold text-lg">{row.taux}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-6 text-white text-center">
            <p className="font-medium">{content.definition.precision}</p>
          </div>
        </div>
      </section>

      {/* Prélèvements Sociaux Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.prelevementsSociaux.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.prelevementsSociaux.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {content.prelevementsSociaux.composition.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-[#4EBBBD] mb-2">{item.taux}</div>
                <div className="text-[#112033] font-semibold mb-2">{item.nom}</div>
                <div className="text-[#686868] text-sm">{item.details}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-[#112033] text-xl font-semibold mb-4 text-center">
              {content.prelevementsSociaux.application}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.prelevementsSociaux.revenusConcernes.map((revenu, index) => (
                <div key={index} className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg p-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white text-[#4EBBBD] rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="font-medium">{revenu}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simulation Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.simulation.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.simulation.description}
          </p>
          
          <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#4EBBBD] text-white">
                    {content.simulation.tableau.headers.map((header, index) => (
                      <th key={index} className="text-left py-4 px-6 font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.simulation.tableau.rows.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-[#112033]">{row.tmi}</td>
                      <td className="py-4 px-6 text-[#4EBBBD] font-semibold">{row.pfu}</td>
                      <td className="py-4 px-6 text-[#B99066] font-semibold">{row.bareme}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-6 text-white text-center">
            <p className="font-medium">{content.simulation.conclusion}</p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-xl font-semibold mb-4">📊 Calculateur TMI</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Montant des revenus du capital
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={calculValues.revenus}
                      onChange={(e) => setCalculValues(prev => ({
                        ...prev,
                        revenus: e.target.value
                      }))}
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
                    value={calculValues.tmi}
                    onChange={(e) => setCalculValues(prev => ({
                      ...prev,
                      tmi: e.target.value
                    }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  >
                    <option value="0">0%</option>
                    <option value="11">11%</option>
                    <option value="30">30%</option>
                    <option value="41">41%</option>
                    <option value="45">45%</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-4">📊 Résultats du calcul</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#4EBBBD] to-[#008D78] rounded-lg p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">PFU (30%)</span>
                    <span className="text-2xl font-bold">{pfu.toLocaleString()}€</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-lg p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Barème IR + PS</span>
                    <span className="text-2xl font-bold">{bareme.toLocaleString()}€</span>
                  </div>
                </div>
                
                <div className="bg-[#FAFFEF] rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#112033] text-sm">Plus avantageux</span>
                    <span className="text-[#112033] text-lg font-semibold">{plusAvantageux}</span>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-[#4EBBBD] text-sm">
                      Économie de {difference.toLocaleString()}€
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vigilance Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.vigilance.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.vigilance.points.map((point, index) => (
              <div key={index} className="bg-gradient-to-br from-[#FFE4E1] to-[#FFCCCB] rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-[#112033] text-sm font-medium">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.strategies.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.strategies.strategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{strategy.icon}</div>
                <h3 className="text-[#112033] text-lg font-semibold mb-3">{strategy.strategy}</h3>
                <p className="text-[#686868] text-sm">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Azalée Recommendation Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.azaleeRecommendation.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.azaleeRecommendation.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.azaleeRecommendation.objectifs.map((objectif, index) => (
              <div key={index} className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white text-[#4EBBBD] rounded-full flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium">{objectif}</p>
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
            <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-6 text-white mb-8">
              <h3 className="text-xl font-semibold mb-3">📧 {content.cta.email}</h3>
              <p className="text-sm opacity-90">Prenez rendez-vous pour optimiser votre fiscalité</p>
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

