"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

const STORAGE_KEY = "pfuContent";

const defaultContent = {
  hero: {
    title: "Prélèvement Forfaitaire Unique (PFU)",
    subtitle: "Comprenez le fonctionnement du PFU, ce prélèvement de 30% qui s'applique aux revenus du patrimoine mobilier depuis 2018.",
    button: "Calculer mon PFU",
    image: "/images/fiscalite-pfu-hero.jpg"
  },
  definition: {
    title: "Qu'est-ce que le PFU ?",
    description: "Le Prélèvement Forfaitaire Unique (PFU) est un système de taxation simplifié des revenus du patrimoine mobilier, introduit en 2018.",
    details: [
      "Taux unique de 30% (12.8% d'impôt + 17.2% de prélèvements sociaux)",
      "S'applique aux dividendes, intérêts et plus-values mobilières",
      "Alternative à l'imposition au barème progressif de l'impôt sur le revenu",
      "Choix annuel entre PFU et imposition classique"
    ]
  },
  taux: {
    title: "Composition du taux de 30%",
    items: [
      { label: "Impôt sur le revenu", taux: "12.8%", description: "Part revenant à l'État" },
      { label: "CSG", taux: "9.2%", description: "Contribution Sociale Généralisée" },
      { label: "CRDS", taux: "0.5%", description: "Contribution au Remboursement de la Dette Sociale" },
      { label: "Prélèvement de solidarité", taux: "7.5%", description: "Contribution additionnelle" }
    ]
  },
  revenus: {
    title: "Revenus concernés par le PFU",
    items: [
      {
        type: "Dividendes",
        description: "Revenus distribués par les sociétés",
        exemples: ["Actions françaises", "Actions étrangères", "Parts de SCPI"]
      },
      {
        type: "Intérêts",
        description: "Revenus des placements à revenus fixes",
        exemples: ["Comptes rémunérés", "Obligations", "Livrets bancaires"]
      },
      {
        type: "Plus-values mobilières",
        description: "Gains réalisés lors de la cession de titres",
        exemples: ["Vente d'actions", "Cession de parts", "Rachat de parts"]
      }
    ]
  },
  choix: {
    title: "PFU vs Imposition classique",
    description: "Vous pouvez choisir chaque année entre le PFU et l'imposition au barème progressif",
    avantages: [
      "Simplicité : taux unique de 30%",
      "Prévisibilité : pas de surprise fiscale",
      "Rapidité : calcul immédiat",
      "Pas de déclaration détaillée"
    ],
    inconvenients: [
      "Taux fixe : pas d'adaptation à votre situation",
      "Pas de déduction des charges",
      "Pas de report des pertes",
      "Peut être plus élevé que votre TMI"
    ]
  },
  calcul: {
    title: "Calculateur PFU",
    description: "Estimez le montant de votre PFU",
    fields: [
      { id: "dividendes", label: "Dividendes reçus", placeholder: "5000" },
      { id: "interets", label: "Intérêts perçus", placeholder: "2000" },
      { id: "plusValues", label: "Plus-values réalisées", placeholder: "3000" }
    ]
  },
  exemples: {
    title: "Exemples concrets",
    items: [
      {
        scenario: "Dividendes de 8 000€",
        pfu: "8 000€ × 30% = 2 400€",
        tmi: "8 000€ × 41% = 3 280€",
        choix: "PFU plus avantageux (économie de 880€)"
      },
      {
        scenario: "Intérêts de 3 000€",
        pfu: "3 000€ × 30% = 900€",
        tmi: "3 000€ × 11% = 330€",
        choix: "TMI plus avantageux (économie de 570€)"
      }
    ]
  },
  cta: {
    title: "Besoin d'aide pour optimiser votre fiscalité ?",
    subtitle: "Nos experts vous accompagnent pour choisir entre PFU et imposition classique",
    primaryButton: "Simulation gratuite",
    secondaryButton: "Consultation expert"
  }
};

export default function PFUPage() {
  const [content, setContent] = useState(defaultContent);
  const [calculValues, setCalculValues] = useState({
    dividendes: "",
    interets: "",
    plusValues: ""
  });

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

  const calculatePFU = () => {
    const dividendes = parseFloat(calculValues.dividendes) || 0;
    const interets = parseFloat(calculValues.interets) || 0;
    const plusValues = parseFloat(calculValues.plusValues) || 0;
    
    const totalRevenus = dividendes + interets + plusValues;
    const pfu = totalRevenus * 0.30;
    
    return { totalRevenus, pfu };
  };

  const { totalRevenus, pfu } = calculatePFU();

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
                alt="PFU" 
                className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-8 shadow-lg">
            <h2 className="text-[#112033] text-2xl font-semibold mb-6 text-center">
              {content.definition.title}
            </h2>
            <p className="text-[#686868] text-lg mb-6 text-center max-w-3xl mx-auto">
              {content.definition.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.definition.details.map((detail, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#4EBBBD] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-[#112033] font-medium">{detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Taux Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.taux.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.taux.items.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-[#4EBBBD] mb-2">{item.taux}</div>
                <div className="text-[#112033] font-semibold mb-2">{item.label}</div>
                <div className="text-[#686868] text-sm">{item.description}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-[#4EBBBD] to-[#008D78] rounded-xl p-6 text-white inline-block">
              <div className="text-sm mb-1">Total PFU</div>
              <div className="text-4xl font-bold">30%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenus Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.revenus.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.revenus.items.map((revenu, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-6 shadow-lg">
                <h3 className="text-[#112033] text-lg font-semibold mb-3">{revenu.type}</h3>
                <p className="text-[#686868] text-sm mb-4">{revenu.description}</p>
                <ul className="space-y-2">
                  {revenu.exemples.map((exemple, idx) => (
                    <li key={idx} className="text-[#112033] text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#4EBBBD] rounded-full"></span>
                      {exemple}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choix Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.choix.title}
          </h2>
          <p className="text-[#686868] text-lg text-center mb-8 max-w-3xl mx-auto">
            {content.choix.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-4 text-green-600">✅ Avantages du PFU</h3>
              <ul className="space-y-3">
                {content.choix.avantages.map((avantage, index) => (
                  <li key={index} className="text-[#112033] text-sm flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    {avantage}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-4 text-red-600">❌ Inconvénients du PFU</h3>
              <ul className="space-y-3">
                {content.choix.inconvenients.map((inconvenient, index) => (
                  <li key={index} className="text-[#112033] text-sm flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    {inconvenient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-6">
              <h2 className="text-[#112033] text-xl font-semibold mb-4">
                {content.calcul.title}
              </h2>
              <p className="text-[#686868] text-sm mb-6">
                {content.calcul.description}
              </p>
              <div className="space-y-4">
                {content.calcul.fields.map((field) => (
                  <div key={field.id}>
                    <label className="block text-[#686868] text-sm font-medium mb-2">
                      {field.label}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={calculValues[field.id]}
                        onChange={(e) => setCalculValues(prev => ({
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

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-4">📊 Résultats du calcul</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#4EBBBD] to-[#008D78] rounded-lg p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total des revenus</span>
                    <span className="text-2xl font-bold">{totalRevenus.toLocaleString()}€</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#B99066] to-[#A67C52] rounded-lg p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">PFU (30%)</span>
                    <span className="text-2xl font-bold">{pfu.toLocaleString()}€</span>
                  </div>
                </div>
                
                <div className="bg-[#FAFFEF] rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#112033] text-sm">Revenu net</span>
                    <span className="text-[#112033] text-lg font-semibold">
                      {(totalRevenus - pfu).toLocaleString()}€
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            {content.exemples.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.exemples.items.map((exemple, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-[#112033] text-lg font-semibold mb-4">{exemple.scenario}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#686868]">PFU (30%):</span>
                    <span className="text-[#4EBBBD] font-semibold">{exemple.pfu}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#686868]">TMI:</span>
                    <span className="text-[#B99066] font-semibold">{exemple.tmi}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="text-center">
                      <span className="text-[#112033] font-bold text-lg">{exemple.choix}</span>
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