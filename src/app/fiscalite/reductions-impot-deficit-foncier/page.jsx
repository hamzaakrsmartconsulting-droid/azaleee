"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

const STORAGE_KEY = "reductionsImpotDeficitFoncierContent";

const defaultContent = {
  hero: {
    title: "Déficit foncier et réductions d'impôt",
    subtitle: "Un levier fiscal puissant pour investisseurs avertis. Pour les investisseurs disposant de revenus fonciers imposables ou d'une tranche marginale d'imposition (TMI) élevée, le déficit foncier permet une double optimisation : réduction de l'impôt sur le revenu et diminution des prélèvements sociaux (CSG/CRDS à 17,2%) sur les revenus fonciers.",
    button: "Calculer mon déficit foncier",
    image: "/images/fiscalite-deficit-foncier-hero.jpg"
  },
  quickStats: {
    title: "Chiffres clés",
    stats: [
      { label: "Déficit foncier", value: "10 700€", description: "Plafond annuel déductible" },
      { label: "Report", value: "10 ans", description: "Sur revenus fonciers" },
      { label: "Rendement fiscal", value: "58%", description: "TMI 41% + CSG/CRDS" }
    ]
  },
  comparison: {
    title: "Réduction d'impôt ou déduction du revenu ?",
    description: "Comprendre la différence entre les deux mécanismes fiscaux",
    table: {
      headers: ["Mécanisme", "Effet fiscal", "Bénéfice"],
      rows: [
        {
          mecanisme: "Réduction d'impôt",
          effet: "Soustraction directe de l'impôt à payer",
          benefice: "1 000 € réduits = 1 000 € gagnés"
        },
        {
          mecanisme: "Déficit foncier",
          effet: "Diminution de la base imposable",
          benefice: "Effet amplifié selon la TMI + économie de CSG/CRDS"
        }
      ]
    },
    example: {
      title: "⚡ Exemple pour une TMI à 41% :",
      scenarios: [
        {
          description: "1 000 € de déficit foncier imputé sur le revenu global =",
          details: [
            "→ 410 € d'économie d'impôt sur le revenu",
            "→ 0 € de CSG économisée (car imputé sur le revenu global)"
          ]
        },
        {
          description: "1 000 € imputés sur les revenus fonciers =",
          details: [
            "→ 410 € d'économie IR",
            "→ 172 € d'économie de prélèvements sociaux",
            "→ Gain total : 582 €, soit un rendement fiscal de 58%"
          ]
        }
      ]
    }
  },
  investorProfile: {
    title: "Qui peut en profiter ?",
    description: "Le déficit foncier s'adresse à des investisseurs spécifiques",
    profiles: [
      "Propriétaires de biens locatifs déjà imposables au régime réel (hors micro-foncier)",
      "Contribuables avec une TMI élevée (30% ou plus)",
      "Investisseurs souhaitant valoriser des biens anciens avec travaux"
    ]
  },
  conditions: {
    title: "Conditions pour créer un déficit foncier",
    description: "Les conditions spécifiques à respecter pour bénéficier du déficit foncier",
    conditions: [
      "Bien en location nue (non meublée), soumis au régime réel",
      "Travaux éligibles : entretien, réparation, amélioration",
      "Pas d'agrandissement ni de construction neuve",
      "Travaux réellement payés et effectués avant d'être mis en location"
    ]
  },
  calculator: {
    title: "Calculateur de réductions d'impôt",
    description: "Estimez vos réductions d'impôt et votre déficit foncier",
    fields: [
      { id: "revenus", label: "Revenus locatifs", placeholder: "15000" },
      { id: "charges", label: "Charges déductibles", placeholder: "8000" },
      { id: "interets", label: "Intérêts d'emprunt", placeholder: "5000" },
      { id: "amortissement", label: "Amortissement", placeholder: "3000" }
    ]
  },
  reductions: {
    title: "Types de réductions d'impôt",
    items: [
      {
        name: "Loi Pinel",
        reduction: "21%",
        description: "Investissement immobilier neuf",
        conditions: ["Bien neuf", "Location 12 ans", "Plafond 300k€"]
      },
      {
        name: "Loi Denormandie",
        reduction: "22%",
        description: "Rénovation de logements anciens",
        conditions: ["Bien ancien", "Rénovation", "Location 12 ans"]
      },
      {
        name: "Loi Malraux",
        reduction: "30%",
        description: "Rénovation monuments historiques",
        conditions: ["Bien classé", "Rénovation", "Location 9 ans"]
      }
    ]
  },
  deficitFoncier: {
    title: "Déficit foncier",
    description: "Le déficit foncier permet de déduire les charges immobilières de vos revenus globaux",
    avantages: [
      "Déduction des charges d'exploitation",
      "Déduction des intérêts d'emprunt",
      "Déduction des travaux d'amélioration",
      "Report sur 10 ans"
    ],
    plafonds: [
      { label: "Plafond annuel", value: "10 700€" },
      { label: "Report maximum", value: "10 ans" },
      { label: "Déduction charges", value: "100%" }
    ]
  },
  examples: {
    title: "Cas pratique d'optimisation fiscale",
    description: "Exemple concret avec calcul détaillé",
    detailedCase: {
      scenario: "Un contribuable avec :",
      data: [
        "Revenu global : 120 000 € (TMI 41%)",
        "Revenus fonciers nets : 15 000 €",
        "Travaux réalisés en 2025 : 35 000 €"
      ],
      calculation: {
        title: "Effet fiscal :",
        steps: [
          "10 700 € imputés sur le revenu global →",
          "10 700 × 41% = 4 387 € d'économie IR",
          "24 300 € imputés sur les revenus fonciers :",
          "24 300 × (41% + 17,2%) = 14 154 € d'économie fiscale totale"
        ],
        result: {
          title: "✅ Gain fiscal global = 18 541 €",
          subtitle: "sur un chantier de 35 000 € soit rendement net de 53%"
        }
      }
    }
  },
  strategies: {
    title: "Stratégies associées",
    description: "Les stratégies complémentaires pour optimiser le déficit foncier",
    strategies: [
      {
        title: "SCI à l'IR + travaux",
        description: "Permet de mutualiser le déficit sur plusieurs revenus fonciers"
      },
      {
        title: "Déficit foncier + nue-propriété",
        description: "Transmission anticipée + valorisation du capital sans fiscalité sur la revente"
      },
      {
        title: "Revente après 3 ans de location",
        description:         "Respect du seuil fiscal pour conserver l'avantage (risque de reprise en cas de revente anticipée)"
      }
    ]
  },
  risks: {
    title: "Risques et points de vigilance",
    description: "Les points d'attention pour éviter les erreurs",
    risks: [
      "Travaux non éligibles : extension, piscine, rénovation de luxe",
      "Justificatifs obligatoires : factures, devis, attestations",
      "Location effective obligatoire 3 ans sous peine de reprise du déficit",
      "Pas de cumul possible avec d'autres réductions d'impôt foncier (ex : Cosse)"
    ]
  },
  azaleeRecommendation: {
    title: "Recommandation Azalée Patrimoine",
    description: "Notre approche complète pour optimiser votre déficit foncier",
    recommendations: [
      "Audit complet de vos revenus fonciers",
      "Analyse éligibilité / devis travaux / simulation fiscale",
      "Structuration patrimoniale (SCI, indivision, transmission)",
      "Intégration dans une stratégie de retraite ou de capitalisation"
    ]
  },
  cta: {
    title: "Envie d'optimiser votre fiscalité foncière ?",
    subtitle: "Nos experts vous accompagnent pour maximiser votre déficit foncier",
    email: "contact@azalee-patrimoine.fr",
    primaryButton: "Prendre rendez-vous",
    secondaryButton: "Nous écrire"
  }
};

export default function ReductionsImpotDeficitFoncierPage() {
  const [content, setContent] = useState(defaultContent);
  const [calculatorValues, setCalculatorValues] = useState({
    revenus: "",
    charges: "",
    interets: "",
    amortissement: ""
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

  const calculateReductions = () => {
    const revenus = parseFloat(calculatorValues.revenus) || 0;
    const charges = parseFloat(calculatorValues.charges) || 0;
    const interets = parseFloat(calculatorValues.interets) || 0;
    const amortissement = parseFloat(calculatorValues.amortissement) || 0;

    const totalCharges = charges + interets + amortissement;
    const resultat = revenus - totalCharges;
    const deficit = resultat < 0 ? Math.abs(resultat) : 0;
    const reduction = resultat > 0 ? resultat * 0.41 : 0; // Taux marginal 41%

    return { resultat, deficit, reduction };
  };

  const { resultat, deficit, reduction } = calculateReductions();

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#FAFFEF] via-[#E8F5E8] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#4EBBBD] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Optimisation fiscale
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
                alt="Réductions d'impôt" 
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

      {/* Comparison Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.comparison.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.comparison.description}
          </p>
          
          {/* Comparison Table */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  {content.comparison.table.headers.map((header, index) => (
                    <th key={index} className="text-left py-3 px-4 font-semibold text-[#112033]">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.comparison.table.rows.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-[#112033]">{row.mecanisme}</td>
                    <td className="py-3 px-4 text-[#686868]">{row.effet}</td>
                    <td className="py-3 px-4 text-[#4EBBBD] font-medium">{row.benefice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Example */}
          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">{content.comparison.example.title}</h3>
            <div className="space-y-4">
              {content.comparison.example.scenarios.map((scenario, index) => (
                <div key={index}>
                  <p className="font-medium mb-2">{scenario.description}</p>
                  <ul className="ml-4 space-y-1">
                    {scenario.details.map((detail, idx) => (
                      <li key={idx} className="text-sm opacity-90">{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investor Profile Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.investorProfile.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.investorProfile.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.investorProfile.profiles.map((profile, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#4EBBBD] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    {index + 1}
                  </div>
                  <p className="text-[#112033] text-sm font-medium">{profile}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.conditions.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.conditions.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.conditions.conditions.map((condition, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#4EBBBD] rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-[#112033] text-sm">{condition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Input */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-[#112033] text-xl font-semibold mb-4">
                {content.calculator.title}
              </h2>
              <p className="text-[#686868] text-sm mb-6">
                {content.calculator.description}
              </p>
              <div className="space-y-4">
                {content.calculator.fields.map((field) => (
                  <div key={field.id}>
                    <label className="block text-[#686868] text-sm font-medium mb-2">
                      {field.label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={calculatorValues[field.id]}
                        onChange={(e) => setCalculatorValues(prev => ({
                          ...prev,
                          [field.id]: e.target.value
                        }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                        placeholder={field.placeholder}
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#686868]">€</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calculator Results */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-4">📊 Résultats du calcul</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#4EBBBD] to-[#008D78] rounded-lg p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Résultat locatif</span>
                    <span className="text-2xl font-bold">{resultat.toLocaleString()}€</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-lg p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Déficit foncier</span>
                    <span className="text-2xl font-bold">{deficit.toLocaleString()}€</span>
                  </div>
                </div>
                
                <div className="bg-[#FAFFEF] rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#112033] text-sm">Réduction d'impôt</span>
                    <span className="text-[#112033] text-lg font-semibold">
                      {reduction.toLocaleString()}€
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reductions Types */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.reductions.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.reductions.items.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-6 shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-[#4EBBBD] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                    {item.reduction}
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold">{item.name}</h3>
                  <p className="text-[#686868] text-sm mt-1">{item.description}</p>
                </div>
                <ul className="space-y-2">
                  {item.conditions.map((condition, idx) => (
                    <li key={idx} className="text-[#112033] text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#4EBBBD] rounded-full"></span>
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Déficit Foncier */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-[#112033] text-2xl font-semibold mb-4">
                {content.deficitFoncier.title}
              </h2>
              <p className="text-[#686868] text-lg mb-6">
                {content.deficitFoncier.description}
              </p>
              <ul className="space-y-3 mb-6">
                {content.deficitFoncier.avantages.map((avantage, index) => (
                  <li key={index} className="text-[#112033] text-sm flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#4EBBBD] rounded-full"></span>
                    {avantage}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.deficitFoncier.plafonds.map((plafond, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md">
                  <div className="text-2xl font-bold text-[#4EBBBD] mb-1">{plafond.value}</div>
                  <div className="text-[#112033] text-sm font-medium">{plafond.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Case Study */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.examples.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.examples.description}
          </p>
          
          <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-8 shadow-lg">
            <h3 className="text-[#112033] text-xl font-semibold mb-6">{content.examples.detailedCase.scenario}</h3>
            
            {/* Data */}
            <div className="mb-6">
              <ul className="space-y-2">
                {content.examples.detailedCase.data.map((item, index) => (
                  <li key={index} className="text-[#112033] text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4EBBBD] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Calculation */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h4 className="text-[#112033] text-lg font-semibold mb-4">{content.examples.detailedCase.calculation.title}</h4>
              <ul className="space-y-2">
                {content.examples.detailedCase.calculation.steps.map((step, index) => (
                  <li key={index} className="text-[#112033] text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#B99066] rounded-full"></span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            {/* Result */}
            <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg p-6 text-white text-center">
              <h4 className="text-xl font-semibold mb-2">{content.examples.detailedCase.calculation.result.title}</h4>
              <p className="text-sm opacity-90">{content.examples.detailedCase.calculation.result.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.strategies.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.strategies.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.strategies.strategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-[#112033] text-lg font-semibold mb-3">{strategy.title}</h3>
                <p className="text-[#686868] text-sm">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.risks.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.risks.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.risks.risks.map((risk, index) => (
              <div key={index} className="bg-gradient-to-br from-[#FFE4E1] to-[#FFCCCB] rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-[#112033] text-sm">{risk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Azalée Recommendation Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.azaleeRecommendation.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.azaleeRecommendation.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.azaleeRecommendation.recommendations.map((recommendation, index) => (
              <div key={index} className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✔</span>
                  <p className="text-sm font-medium">{recommendation}</p>
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
              <p className="text-sm opacity-90">Prendre rendez-vous pour optimiser votre fiscalité foncière</p>
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