"use client";
import React, { useState } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function LoisFiscalesPage() {
  const [selectedLaw, setSelectedLaw] = useState("pinel");
  const [selectedCategory, setSelectedCategory] = useState("immobilier");

  const categories = [
    { id: "immobilier", label: "Immobilier", icon: "🏠" },
    { id: "entreprise", label: "Entreprise", icon: "💼" },
    { id: "patrimoine", label: "Patrimoine", icon: "💰" },
    { id: "retraite", label: "Retraite", icon: "👴" }
  ];

  const loisImmobilieres = [
    {
      id: "pinel",
      name: "Loi Pinel",
      shortName: "Pinel",
      description: "Réduction d'impôt pour investissement immobilier neuf",
      avantages: [
        "Réduction d'impôt jusqu'à 21%",
        "Investissement plafonné à 300 000€",
        "Engagement de location 6, 9 ou 12 ans",
        "TVA réduite à 5,5% ou 10%"
      ],
      conditions: [
        "Bien neuf ou en VEFA",
        "Location à usage d'habitation principale",
        "Respect des plafonds de loyer",
        "Respect des plafonds de ressources"
      ],
      taux: [
        { annees: "6 ans", reduction: "12%" },
        { annees: "9 ans", reduction: "18%" },
        { annees: "12 ans", reduction: "21%" }
      ],
      plafonds: {
        loyer: "Selon zone et surface",
        ressources: "Selon composition du foyer",
        investissement: "300 000€ max"
      }
    },
    {
      id: "girardin",
      name: "Loi Girardin",
      shortName: "Girardin",
      description: "Défiscalisation outre-mer pour investissement immobilier",
      avantages: [
        "Réduction d'impôt jusqu'à 40%",
        "Investissement plafonné à 300 000€",
        "Engagement de location 5 ans minimum",
        "Possibilité de location saisonnière"
      ],
      conditions: [
        "Bien situé en outre-mer",
        "Location à usage d'habitation",
        "Respect des plafonds de loyer",
        "Investissement en direct ou via SCPI"
      ],
      taux: [
        { annees: "5 ans", reduction: "40%" },
        { annees: "6 ans", reduction: "40%" },
        { annees: "7 ans", reduction: "40%" }
      ],
      plafonds: {
        loyer: "Selon zone et surface",
        ressources: "Non applicable",
        investissement: "300 000€ max"
      }
    },
    {
      id: "denormandie",
      name: "Loi Denormandie",
      shortName: "Denormandie",
      description: "Réduction d'impôt pour rénovation de logements anciens",
      avantages: [
        "Réduction d'impôt jusqu'à 22%",
        "Investissement plafonné à 300 000€",
        "Engagement de location 6, 9 ou 12 ans",
        "Rénovation de biens anciens"
      ],
      conditions: [
        "Bien ancien rénové",
        "Location à usage d'habitation principale",
        "Respect des plafonds de loyer",
        "Respect des plafonds de ressources"
      ],
      taux: [
        { annees: "6 ans", reduction: "12%" },
        { annees: "9 ans", reduction: "18%" },
        { annees: "12 ans", reduction: "22%" }
      ],
      plafonds: {
        loyer: "Selon zone et surface",
        ressources: "Selon composition du foyer",
        investissement: "300 000€ max"
      }
    },
    {
      id: "malraux",
      name: "Loi Malraux",
      shortName: "Malraux",
      description: "Réduction d'impôt pour rénovation de monuments historiques",
      avantages: [
        "Réduction d'impôt jusqu'à 30%",
        "Investissement plafonné à 400 000€",
        "Engagement de location 9 ans minimum",
        "Rénovation de monuments historiques"
      ],
      conditions: [
        "Bien classé ou inscrit aux monuments historiques",
        "Location à usage d'habitation",
        "Respect des normes de rénovation",
        "Engagement de location 9 ans"
      ],
      taux: [
        { annees: "9 ans", reduction: "30%" },
        { annees: "12 ans", reduction: "30%" },
        { annees: "15 ans", reduction: "30%" }
      ],
      plafonds: {
        loyer: "Non applicable",
        ressources: "Non applicable",
        investissement: "400 000€ max"
      }
    },
    {
      id: "cosse",
      name: "Loi Cosse",
      shortName: "Cosse",
      description: "Réduction d'impôt pour rénovation énergétique",
      avantages: [
        "Réduction d'impôt jusqu'à 30%",
        "Investissement plafonné à 8 000€",
        "Engagement de résidence principale",
        "Rénovation énergétique"
      ],
      conditions: [
        "Résidence principale",
        "Travaux de rénovation énergétique",
        "Respect des normes techniques",
        "Engagement de résidence 3 ans"
      ],
      taux: [
        { annees: "3 ans", reduction: "30%" },
        { annees: "4 ans", reduction: "30%" },
        { annees: "5 ans", reduction: "30%" }
      ],
      plafonds: {
        loyer: "Non applicable",
        ressources: "Non applicable",
        investissement: "8 000€ max"
      }
    }
  ];

  const loisEntreprise = [
    {
      id: "madelin",
      name: "Loi Madelin",
      shortName: "Madelin",
      description: "Déduction des cotisations de retraite et prévoyance",
      avantages: [
        "Déduction des cotisations retraite",
        "Déduction des cotisations prévoyance",
        "Déduction des cotisations santé",
        "Plafonds annuels variables"
      ],
      conditions: [
        "Profession libérale ou artisan",
        "Cotisations versées à des organismes agréés",
        "Respect des plafonds annuels",
        "Justificatifs des versements"
      ]
    },
    {
      id: "censi-bouvard",
      name: "Loi Censi-Bouvard",
      shortName: "Censi-Bouvard",
      description: "Réduction d'impôt pour investissement en résidence services",
      avantages: [
        "Réduction d'impôt jusqu'à 11%",
        "Investissement plafonné à 300 000€",
        "Engagement de location 9 ans minimum",
        "Services inclus dans la location"
      ],
      conditions: [
        "Résidence services seniors",
        "Location à usage d'habitation",
        "Services minimum inclus",
        "Engagement de location 9 ans"
      ]
    }
  ];

  const loisPatrimoine = [
    {
      id: "pacte",
      name: "Loi PACTE",
      shortName: "PACTE",
      description: "Plan d'action pour la croissance et la transformation des entreprises",
      avantages: [
        "Épargne retraite collective",
        "Plan d'épargne entreprise",
        "Actions gratuites",
        "Incitations à l'investissement"
      ]
    },
    {
      id: "tepa",
      name: "Loi TEPA",
      shortName: "TEPA",
      description: "Travail, emploi et pouvoir d'achat",
      avantages: [
        "Exonération des heures supplémentaires",
        "Exonération des primes",
        "Exonération des stock-options",
        "Plafonds annuels variables"
      ]
    }
  ];

  const loisRetraite = [
    {
      id: "per",
      name: "Plan Épargne Retraite",
      shortName: "PER",
      description: "Épargne retraite avec avantages fiscaux",
      avantages: [
        "Déduction des versements",
        "Report d'imposition des plus-values",
        "Sortie en capital ou rente",
        "Transmission optimisée"
      ]
    }
  ];

  const getLoisByCategory = () => {
    switch(selectedCategory) {
      case "immobilier": return loisImmobilieres;
      case "entreprise": return loisEntreprise;
      case "patrimoine": return loisPatrimoine;
      case "retraite": return loisRetraite;
      default: return loisImmobilieres;
    }
  };

  const selectedLawData = getLoisByCategory().find(law => law.id === selectedLaw) || getLoisByCategory()[0];

  return (
    <>
      <Header />

      {/* Hero Section with Law Icons */}
      <section className="relative w-full bg-gradient-to-br from-[#FAFFEF] via-[#E8F5E8] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-block bg-[#4EBBBD] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Guide complet
            </span>
          </div>
          <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Lois fiscales
          </h1>
          <p className="max-w-4xl mx-auto text-[#686868] text-base sm:text-lg leading-relaxed mb-8">
            Découvrez les principales lois fiscales qui peuvent vous permettre d'optimiser 
            votre situation fiscale. Chaque dispositif a ses spécificités et conditions d'application.
          </p>
          
          {/* Law Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {loisImmobilieres.slice(0, 5).map((law, index) => (
              <div key={law.id} className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-[#4EBBBD] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-2">
                  {law.shortName.charAt(0)}
                </div>
                <p className="text-[#112033] text-xs font-medium">{law.shortName}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-[#4EBBBD] text-white shadow-lg"
                    : "bg-gray-100 text-[#686868] hover:bg-gray-200"
                }`}
              >
                <span>{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Laws List */}
            <div className="lg:col-span-1">
              <h2 className="text-[#112033] text-xl font-semibold mb-6">Dispositifs disponibles</h2>
              <div className="space-y-3">
                {getLoisByCategory().map((law) => (
                  <button
                    key={law.id}
                    onClick={() => setSelectedLaw(law.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                      selectedLaw === law.id
                        ? "bg-[#4EBBBD] text-white shadow-lg"
                        : "bg-white text-[#112033] hover:bg-gray-50 shadow-md"
                    }`}
                  >
                    <h3 className="font-semibold mb-1">{law.name}</h3>
                    <p className={`text-sm ${selectedLaw === law.id ? 'text-white/80' : 'text-[#686868]'}`}>
                      {law.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Law Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
                <div className="mb-6">
                  <span className="inline-block bg-[#4EBBBD] text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                  </span>
                  <h2 className="text-[#112033] text-2xl font-semibold mb-2">{selectedLawData.name}</h2>
                  <p className="text-[#686868] text-lg">{selectedLawData.description}</p>
                </div>

                {/* Avantages et Conditions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-[#E8F5E8] to-[#D4EDDA] rounded-lg p-6">
                    <h3 className="text-[#112033] text-lg font-semibold mb-4 flex items-center gap-2">
                      <span>✅</span> Avantages
                    </h3>
                    <ul className="space-y-2">
                      {selectedLawData.avantages.map((avantage, index) => (
                        <li key={index} className="text-[#112033] text-sm flex items-start gap-2">
                          <span className="w-2 h-2 bg-[#4EBBBD] rounded-full mt-2 flex-shrink-0"></span>
                          {avantage}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-[#FFEFD5] to-[#FFE4B5] rounded-lg p-6">
                    <h3 className="text-[#112033] text-lg font-semibold mb-4 flex items-center gap-2">
                      <span>📋</span> Conditions
                    </h3>
                    <ul className="space-y-2">
                      {selectedLawData.conditions.map((condition, index) => (
                        <li key={index} className="text-[#112033] text-sm flex items-start gap-2">
                          <span className="w-2 h-2 bg-[#B99066] rounded-full mt-2 flex-shrink-0"></span>
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Taux et Plafonds */}
                {selectedLawData.taux && (
                  <div className="mb-8">
                    <h3 className="text-[#112033] text-lg font-semibold mb-4">📊 Taux de réduction</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedLawData.taux.map((taux, index) => (
                        <div key={index} className="bg-[#FAFFEF] rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-[#4EBBBD] mb-1">{taux.reduction}</div>
                          <div className="text-[#112033] text-sm font-medium">{taux.annees}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Plafonds */}
                {selectedLawData.plafonds && (
                  <div className="mb-8">
                    <h3 className="text-[#112033] text-lg font-semibold mb-4">💰 Plafonds applicables</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.entries(selectedLawData.plafonds).map(([key, value]) => (
                        <div key={key} className="bg-white border border-gray-200 rounded-lg p-4">
                          <div className="text-[#686868] text-xs uppercase mb-1">{key}</div>
                          <div className="text-[#112033] font-semibold">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-gradient-to-r from-[#4EBBBD] to-[#008D78] rounded-lg p-6 text-white text-center">
                  <h3 className="text-xl font-semibold mb-2">Prêt à optimiser votre fiscalité ?</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Nos experts vous accompagnent pour identifier le dispositif le plus adapté à votre situation.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button className="bg-white text-[#4EBBBD] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                      🧮 Simuler mes avantages
                    </button>
                    <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#4EBBBD] transition-colors duration-200">
                      📞 Consulter un expert
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            Comparatif des dispositifs immobiliers
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-[#4EBBBD] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Dispositif</th>
                  <th className="px-6 py-4 text-center font-semibold">Réduction max</th>
                  <th className="px-6 py-4 text-center font-semibold">Plafond</th>
                  <th className="px-6 py-4 text-center font-semibold">Engagement</th>
                  <th className="px-6 py-4 text-center font-semibold">Type de bien</th>
                </tr>
              </thead>
              <tbody>
                {loisImmobilieres.map((law, index) => (
                  <tr key={law.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#4EBBBD] text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {law.shortName.charAt(0)}
                        </div>
                        <div>
                          <div className="text-[#112033] font-semibold">{law.name}</div>
                          <div className="text-[#686868] text-sm">{law.shortName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block bg-[#B99066] text-white px-3 py-1 rounded-full text-sm font-bold">
                        {law.taux?.[law.taux.length - 1]?.reduction || "N/A"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-[#112033] font-medium">
                      {law.plafonds?.investissement || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-center text-[#112033] font-medium">
                      {law.taux?.[0]?.annees || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-center text-[#686868] text-sm">
                      {law.id === "pinel" ? "Neuf" : 
                       law.id === "denormandie" ? "Rénové" :
                       law.id === "malraux" ? "Historique" :
                       law.id === "cosse" ? "Résidence" : "Variable"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl font-semibold text-center mb-8">
            Questions fréquentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-3">🤔 Puis-je cumuler plusieurs dispositifs ?</h3>
              <p className="text-[#686868] text-sm">
                Oui, dans certains cas, vous pouvez cumuler plusieurs dispositifs fiscaux. 
                Par exemple, la loi Pinel peut être combinée avec le prêt à taux zéro (PTZ) 
                ou d'autres aides régionales.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-3">⏰ Quand dois-je m'engager ?</h3>
              <p className="text-[#686868] text-sm">
                L'engagement de location doit généralement être pris dès l'acquisition du bien. 
                La durée varie selon le dispositif : 6, 9 ou 12 ans pour Pinel, 9 ans pour Malraux, etc.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-3">💰 Quels sont les risques ?</h3>
              <p className="text-[#686868] text-sm">
                Les principaux risques sont la non-respect des conditions d'engagement, 
                la baisse de la valeur du bien, et les évolutions législatives qui peuvent 
                modifier les avantages fiscaux.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-[#112033] text-lg font-semibold mb-3">📋 Quels documents fournir ?</h3>
              <p className="text-[#686868] text-sm">
                Vous devrez fournir les justificatifs d'acquisition, les contrats de location, 
                les attestations de loyer, et respecter les déclarations fiscales annuelles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#F2F2F2] to-[#E5E5E5]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <h2 className="text-[#112033] text-2xl lg:text-3xl font-semibold mb-4">
              Besoin d'optimiser votre fiscalité ?
            </h2>
            <p className="text-[#686868] text-lg mb-8 max-w-3xl mx-auto">
              Nos experts analysent votre situation et vous proposent les dispositifs 
              les plus adaptés pour réduire vos impôts en toute légalité.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#4EBBBD] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200 text-lg">
                🎯 Audit fiscal gratuit
              </button>
              <button className="border-2 border-[#4EBBBD] text-[#4EBBBD] px-8 py-4 rounded-lg font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors duration-200 text-lg">
                📚 Télécharger le guide
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 