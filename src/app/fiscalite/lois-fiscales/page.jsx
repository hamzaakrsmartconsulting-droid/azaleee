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
      description: "Soutenir l'investissement locatif dans le neuf, tout en encadrant les loyers",
      objectif: "Soutenir l'investissement locatif dans le neuf, tout en encadrant les loyers",
      avantages: [
        "Réduction d'impôt de 10,5% à 17,5% du prix d'acquisition",
        "Selon la durée de location (6, 9 ou 12 ans)",
        "Bien neuf ou rénové à neuf",
        "Zone tendue (A bis, A, B1)"
      ],
      conditions: [
        "Bien neuf ou rénové à neuf",
        "Zone tendue (A bis, A, B1)",
        "Plafonds de loyer et de ressources des locataires",
        "Engagement de location nue non meublée"
      ],
      taux: [
        { annees: "6 ans", reduction: "10,5%" },
        { annees: "9 ans", reduction: "13,5%" },
        { annees: "12 ans", reduction: "17,5%" }
      ],
      plafonds: {
        loyer: "Selon zone et surface",
        ressources: "Selon composition du foyer",
        investissement: "300 000€ max",
        prix_m2: "5 500€/m²"
      },
      risques: [
        "Surcote du neuf",
        "Faible rendement net (souvent <3%)",
        "Exigence de location stricte"
      ],
      cas_pratique: "Un contribuable à 40% IR investit 270 000€ sur 9 ans : Réduction d'impôt totale : 13,5% soit 36 450€",
      recommandation: "Pertinent en zone urbaine tendue, avec gestion sécurisée. Attention à l'emplacement et à l'analyse fine du rendement locatif net."
    },
    {
      id: "girardin",
      name: "Loi Girardin industriel",
      shortName: "Girardin",
      description: "Financer l'économie ultramarine via des investissements productifs",
      objectif: "Financer l'économie ultramarine via des investissements productifs",
      avantages: [
        "Réduction d'impôt \"one shot\" supérieure à l'investissement",
        "Jusqu'à 110% du montant investi",
        "Investissement via une société de portage en DOM-TOM",
        "Risque industriel réel : aucun remboursement du capital"
      ],
      conditions: [
        "Investissement via une société de portage en DOM-TOM",
        "Risque industriel réel : aucun remboursement du capital"
      ],
      taux: [
        { annees: "One shot", reduction: "110%" }
      ],
      plafonds: {
        loyer: "Non applicable",
        ressources: "Non applicable",
        investissement: "Variable"
      },
      risques: [
        "Risque juridique (non-respect des conditions)",
        "Risque de défiscalisation requalifiée"
      ],
      cas_pratique: "100 000€ investis en 2025 pour 110 000€ de réduction d'impôt. Le gain net d'impôt est de 10 000€.",
      recommandation: "Pour contribuables très fortement imposés (>30k€ d'impôt), acceptant un placement à fonds perdus mais sûr juridiquement (via opérateur labellisé)."
    },
    {
      id: "denormandie",
      name: "Loi Denormandie",
      shortName: "Denormandie",
      description: "Relancer la rénovation dans les centres-villes anciens",
      objectif: "Relancer la rénovation dans les centres-villes anciens",
      avantages: [
        "Même réduction d'impôt que Pinel",
        "Mais pour de l'ancien avec travaux",
        "Travaux = ≥ 25% du coût total",
        "Location nue à loyer plafonné"
      ],
      conditions: [
        "Biens situés dans une ville éligible (liste préfectorale)",
        "Travaux = ≥ 25% du coût total",
        "Location nue à loyer plafonné"
      ],
      taux: [
        { annees: "6 ans", reduction: "10,5%" },
        { annees: "9 ans", reduction: "13,5%" },
        { annees: "12 ans", reduction: "17,5%" }
      ],
      plafonds: {
        loyer: "Selon zone et surface",
        ressources: "Selon composition du foyer",
        investissement: "300 000€ max"
      },
      risques: [
        "Mauvaise estimation du coût des travaux",
        "Délais de rénovation et non-respect des conditions"
      ],
      cas_pratique: "Achat ancien 100 000€ + travaux 50 000€ = base fiscale 150 000€ pour réduction Pinel",
      recommandation: "Attractif pour investisseurs actifs ou appuyés par un bon promoteur. Fiscalement efficace mais technique."
    },
    {
      id: "malraux",
      name: "Loi Malraux",
      shortName: "Malraux",
      description: "Restaurer des biens immobiliers situés dans des secteurs historiques",
      objectif: "Restaurer des biens immobiliers situés dans des secteurs historiques",
      avantages: [
        "Réduction d'impôt sur le montant des travaux engagés",
        "22 à 30% selon le secteur",
        "Immeuble situé en SPR, PSMV ou QAD",
        "Travaux encadrés par architecte des Bâtiments de France"
      ],
      conditions: [
        "Immeuble situé en SPR, PSMV ou QAD",
        "Travaux encadrés par architecte des Bâtiments de France",
        "Location nue pendant 9 ans"
      ],
      taux: [
        { annees: "9 ans", reduction: "22-30%" }
      ],
      plafonds: {
        loyer: "Non applicable",
        ressources: "Non applicable",
        investissement: "400 000€ max",
        travaux: "400 000€ sur 4 ans max"
      },
      risques: [
        "Délais de livraison",
        "Coût des travaux",
        "Location obligatoire"
      ],
      cas_pratique: "200 000€ de travaux en secteur sauvegardé = 60 000€ d'économie fiscale",
      recommandation: "Pour investisseurs hauts revenus, amateurs de pierre de caractère. Stratégie de conservation long terme."
    },
    {
      id: "cosse",
      name: "Dispositif Cosse",
      shortName: "Cosse",
      description: "Inciter à louer à loyers modérés via un conventionnement avec l'ANAH",
      objectif: "Inciter à louer à loyers modérés via un conventionnement avec l'ANAH",
      avantages: [
        "Déduction spécifique sur les revenus fonciers",
        "Jusqu'à 85%",
        "Convention signée avec l'ANAH",
        "Secteur intermédiaire, social ou très social"
      ],
      conditions: [
        "Convention signée avec l'ANAH (secteur intermédiaire, social ou très social)",
        "Location nue, respect des plafonds de loyers et de ressources",
        "Engagement de 6 ou 9 ans"
      ],
      taux: [
        { annees: "6-9 ans", reduction: "Jusqu'à 85%" }
      ],
      plafonds: {
        loyer: "Plafonnés",
        ressources: "Plafonnées",
        investissement: "Non applicable"
      },
      risques: [
        "Règles complexes",
        "Rentabilité nette modeste"
      ],
      cas_pratique: "Revenus fonciers 12 000€/an avec abattement de 70% = base fiscale 3 600€",
      recommandation: "Utile pour lisser l'imposition foncière d'un parc existant. Nécessite un calcul précis."
    },
    {
      id: "monuments",
      name: "Monuments Historiques",
      shortName: "MH",
      description: "Conserver le patrimoine classé ou inscrit à l'inventaire",
      objectif: "Conserver le patrimoine classé ou inscrit à l'inventaire",
      avantages: [
        "Déduction des dépenses de travaux",
        "100% imputables sur le revenu global",
        "Immeuble classé ou inscrit",
        "Travaux validés par les ABF"
      ],
      conditions: [
        "Immeuble classé ou inscrit",
        "Travaux validés par les ABF",
        "Conservation du bien pendant 15 ans",
        "Location possible mais non obligatoire"
      ],
      taux: [
        { annees: "15 ans", reduction: "100%" }
      ],
      plafonds: {
        loyer: "Non applicable",
        ressources: "Non applicable",
        investissement: "Non plafonné"
      },
      risques: [
        "Très long terme",
        "Coût de rénovation",
        "Fiscalité très favorable mais à forte contrepartie"
      ],
      cas_pratique: "Travaux de 200 000€ imputés sur un revenu de 150 000€ : effacement de l'impôt sur 2 ans.",
      recommandation: "Outil d'excellence pour hauts revenus amoureux de la pierre et acceptant une durée d'immobilisation longue."
    },
    {
      id: "lli",
      name: "LLI (Location Longue Intermédiaire)",
      shortName: "LLI",
      description: "Créer des logements abordables dans les zones tendues sans engagement ANAH",
      objectif: "Créer des logements abordables dans les zones tendues sans engagement ANAH",
      avantages: [
        "Abattement forfaitaire sur les loyers perçus",
        "Si location à loyer intermédiaire",
        "Location à un locataire aux revenus plafonnés",
        "Loyer encadré, mais plus haut que Cosse"
      ],
      conditions: [
        "Location à un locataire aux revenus plafonnés",
        "Loyer encadré, mais plus haut que Cosse",
        "Pas de convention ANAH"
      ],
      taux: [
        { annees: "Variable", reduction: "Abattement 30%" }
      ],
      plafonds: {
        loyer: "Encadré",
        ressources: "Plafonnées",
        investissement: "Non applicable"
      },
      risques: [
        "Moins de contraintes administratives",
        "Montages plus souples"
      ],
      cas_pratique: "Loyer brut annuel de 10 000€ → abattement fiscal de 30% = base imposable 7 000€",
      recommandation: "Très intéressant pour biens en zone A/B1 non éligibles à Pinel. Combine flexibilité et fiscalité adoucie."
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

  // Safety check to prevent crashes
  if (!selectedLawData) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#4EBBBD] mx-auto mb-4"></div>
            <p className="text-[#686868]">Chargement des données...</p>
          </div>
        </div>
      </>
    );
  }

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
            <strong>Optimiser sa fiscalité, c'est protéger et valoriser durablement son patrimoine.</strong><br/><br/>
            Les dispositifs fiscaux d'investissement immobilier offrent des leviers puissants pour réduire son imposition, 
            préparer sa retraite ou transmettre plus efficacement. Ce guide décrypte les 7 principaux régimes en vigueur, 
            à jour des dernières réformes, pour vous aider à arbitrer en toute connaissance de cause.
          </p>
          
          {/* Law Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
            {loisImmobilieres.map((law, index) => (
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
                  {selectedLawData.avantages && (
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
                  )}

                  {selectedLawData.conditions && (
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
                  )}
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

                {/* Risques */}
                {selectedLawData.risques && (
                  <div className="mb-8">
                    <h3 className="text-[#112033] text-lg font-semibold mb-4 flex items-center gap-2">
                      <span>⚠️</span> Risques
                    </h3>
                    <div className="bg-gradient-to-br from-[#FFE4E1] to-[#FFCCCB] rounded-lg p-6">
                      <ul className="space-y-2">
                        {selectedLawData.risques.map((risque, index) => (
                          <li key={index} className="text-[#112033] text-sm flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                            {risque}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Cas pratique */}
                {selectedLawData.cas_pratique && (
                  <div className="mb-8">
                    <h3 className="text-[#112033] text-lg font-semibold mb-4 flex items-center gap-2">
                      <span>📊</span> Cas pratique
                    </h3>
                    <div className="bg-gradient-to-r from-[#E3F2FD] to-[#BBDEFB] rounded-lg p-6 border-l-4 border-[#4EBBBD]">
                      <p className="text-[#112033] text-sm leading-relaxed">{selectedLawData.cas_pratique}</p>
                    </div>
                  </div>
                )}

                {/* Recommandation Azalée */}
                {selectedLawData.recommandation && (
                  <div className="mb-8">
                    <h3 className="text-[#112033] text-lg font-semibold mb-4 flex items-center gap-2">
                      <span>💡</span> Recommandation Azalée
                    </h3>
                    <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg p-6 text-white">
                      <p className="text-sm leading-relaxed opacity-90">{selectedLawData.recommandation}</p>
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
              Besoin d'un arbitrage personnalisé ?
            </h2>
            <p className="text-[#686868] text-lg mb-8 max-w-3xl mx-auto">
              Chaque situation fiscale est unique. Chez Azalée, nous vous aidons à intégrer ces dispositifs 
              dans une stratégie globale patrimoniale (transmission, SCI, IR/IFI, assurance vie...)
            </p>
            <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-xl p-6 text-white mb-8">
              <h3 className="text-xl font-semibold mb-3">✉️ contact@azalee-patrimoine.fr</h3>
              <p className="text-sm opacity-90">Prendre rendez-vous pour un arbitrage personnalisé</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#4EBBBD] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200 text-lg">
                🗓️ Prendre rendez-vous
              </button>
              <button className="border-2 border-[#4EBBBD] text-[#4EBBBD] px-8 py-4 rounded-lg font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors duration-200 text-lg">
                📧 Nous écrire
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 
