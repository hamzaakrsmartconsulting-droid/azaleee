"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

const STORAGE_KEY = "reductionsImpotDeficitFoncierContent";

const defaultContent = {
  hero: {
    title: "Réductions d'impôt et déficit foncier",
    subtitle: "Optimisez votre fiscalité grâce aux réductions d'impôt et au déficit foncier. Découvrez comment transformer vos charges immobilières en avantages fiscaux.",
    button: "Calculer mes réductions",
    image: "/images/fiscalite-deficit-foncier-hero.jpg"
  },
  quickStats: {
    title: "Chiffres clés",
    stats: [
      { label: "Réduction max", value: "21%", description: "Loi Pinel" },
      { label: "Déficit foncier", value: "10 700€", description: "Plafond annuel" },
      { label: "Report", value: "10 ans", description: "Déficit foncier" }
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
    title: "Exemples concrets",
    items: [
      {
        scenario: "Investissement Pinel",
        revenus: "12 000€",
        charges: "8 000€",
        reduction: "2 520€",
        total: "2 520€ d'économie"
      },
      {
        scenario: "Déficit foncier",
        revenus: "15 000€",
        charges: "18 000€",
        deficit: "3 000€",
        total: "3 000€ de déficit reportable"
      }
    ]
  },
  cta: {
    title: "Prêt à optimiser votre fiscalité ?",
    subtitle: "Nos experts vous accompagnent pour maximiser vos réductions d'impôt",
    primaryButton: "Simulation gratuite",
    secondaryButton: "Consultation expert"
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

      {/* Examples */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.examples.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.examples.items.map((example, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-6 shadow-lg">
                <h3 className="text-[#112033] text-lg font-semibold mb-4">{example.scenario}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#686868]">Revenus locatifs:</span>
                    <span className="text-[#112033] font-medium">{example.revenus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#686868]">Charges:</span>
                    <span className="text-[#112033] font-medium">{example.charges}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#686868]">Réduction/Déficit:</span>
                    <span className="text-[#4EBBBD] font-semibold">{example.reduction || example.deficit}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="text-center">
                      <span className="text-[#112033] font-bold text-lg">{example.total}</span>
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