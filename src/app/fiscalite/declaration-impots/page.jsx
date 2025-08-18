"use client";
import React, { useState } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function DeclarationImpotsPage() {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "Généralités", icon: "📋" },
    { id: "dates", label: "Dates & Calendrier", icon: "📅" },
    { id: "documents", label: "Documents", icon: "📄" },
    { id: "erreurs", label: "Erreurs courantes", icon: "⚠️" },
  ];

  const declarationSteps = [
    {
      step: "1",
      title: "Rassemblement des documents",
      description: "Collectez tous vos justificatifs de revenus, charges et investissements",
      details: ["Bulletins de salaire", "Attestations de loyer", "Relevés bancaires", "Quittances de charges"]
    },
    {
      step: "2",
      title: "Choix du mode de déclaration",
      description: "Optez pour la méthode qui vous convient le mieux",
      details: ["Déclaration en ligne (recommandée)", "Déclaration papier", "Déclaration par téléphone"]
    },
    {
      step: "3",
      title: "Saisie des informations",
      description: "Remplissez tous les champs avec précision",
      details: ["Revenus d'activité", "Revenus du patrimoine", "Charges déductibles", "Crédits d'impôt"]
    },
    {
      step: "4",
      title: "Vérification et validation",
      description: "Relisez attentivement avant de valider définitivement",
      details: ["Contrôle des montants", "Vérification des informations", "Validation finale"]
    }
  ];

  const calendarData = [
    {
      month: "Mai",
      dates: [
        { day: "15", description: "Départements 01 à 19" },
        { day: "22", description: "Départements 20 à 54" },
        { day: "29", description: "Départements 55 à 976" }
      ]
    },
    {
      month: "Juin",
      dates: [
        { day: "5", description: "Départements 01 à 19" },
        { day: "12", description: "Départements 20 à 54" },
        { day: "19", description: "Départements 55 à 976" }
      ]
    }
  ];

  const commonErrors = [
    {
      error: "Oubli de déclarer des revenus",
      impact: "Risque de redressement fiscal",
      solution: "Vérifiez tous vos comptes et sources de revenus"
    },
    {
      error: "Erreur dans le calcul des charges",
      impact: "Perte d'avantages fiscaux",
      solution: "Conservez tous vos justificatifs de charges"
    },
    {
      error: "Mauvaise catégorisation des revenus",
      impact: "Taux d'imposition incorrect",
      solution: "Consultez la notice explicative ou un professionnel"
    }
  ];

  return (
    <>
      <Header />

      {/* Hero Section with Gradient Background */}
      <section className="relative w-full bg-gradient-to-br from-[#FAFFEF] via-[#E8F5E8] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-block bg-[#4EBBBD] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Guide complet
            </span>
          </div>
          <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Déclaration d'impôts
          </h1>
          <p className="max-w-4xl mx-auto text-[#686868] text-base sm:text-lg leading-relaxed mb-8">
            Maîtrisez votre déclaration d'impôts en toute sérénité. Découvrez les étapes clés, 
            les dates importantes et les bonnes pratiques pour optimiser votre situation fiscale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#4EBBBD] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200">
              Simuler ma déclaration
            </button>
            <button className="border-2 border-[#4EBBBD] text-[#4EBBBD] px-6 py-3 rounded-lg font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors duration-200">
              Télécharger le guide
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats Cards */}
      <div className="relative -mt-8 sm:-mt-12">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">📊</span>
              </div>
              <p className="text-[#686868] text-sm uppercase tracking-wide mb-1">Déclaration</p>
              <p className="text-[#112033] text-2xl font-semibold">En ligne</p>
              <p className="text-[#686868] text-xs mt-1">Recommandée</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">⏰</span>
              </div>
              <p className="text-[#686868] text-sm uppercase tracking-wide mb-1">Délai</p>
              <p className="text-[#112033] text-2xl font-semibold">Mai-Juin</p>
              <p className="text-[#686868] text-xs mt-1">Selon département</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-[#008D78] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">✅</span>
              </div>
              <p className="text-[#686868] text-sm uppercase tracking-wide mb-1">Validation</p>
              <p className="text-[#112033] text-2xl font-semibold">Immédiate</p>
              <p className="text-[#686868] text-xs mt-1">En ligne</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <section className="py-12 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#4EBBBD] text-white shadow-lg"
                    : "bg-gray-100 text-[#686868] hover:bg-gray-200"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === "general" && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">Les étapes de votre déclaration</h2>
                  <p className="text-[#686868] text-lg">Suivez ce guide étape par étape pour une déclaration réussie</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {declarationSteps.map((step, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-xl p-6 shadow-md">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#4EBBBD] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[#112033] text-lg font-semibold mb-2">{step.title}</h3>
                          <p className="text-[#686868] text-sm mb-3">{step.description}</p>
                          <ul className="space-y-1">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="text-[#686868] text-sm flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#4EBBBD] rounded-full"></span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "dates" && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">Calendrier des déclarations</h2>
                  <p className="text-[#686868] text-lg">Respectez les dates limites selon votre département</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {calendarData.map((month, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                      <h3 className="text-[#112033] text-xl font-semibold mb-4 text-center">{month.month}</h3>
                      <div className="space-y-3">
                        {month.dates.map((date, idx) => (
                          <div key={idx} className="flex items-center gap-4 p-3 bg-[#FAFFEF] rounded-lg">
                            <div className="w-12 h-12 bg-[#4EBBBD] text-white rounded-full flex items-center justify-center font-bold">
                              {date.day}
                            </div>
                            <span className="text-[#112033] font-medium">{date.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-[#4EBBBD] to-[#008D78] rounded-xl p-6 text-white text-center">
                  <h3 className="text-xl font-semibold mb-2">⚠️ Important</h3>
                  <p className="text-sm opacity-90">
                    En cas de retard, vous risquez une majoration de 10% de vos impôts. 
                    Privilégiez la déclaration en ligne pour une validation immédiate.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "documents" && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">Documents à préparer</h2>
                  <p className="text-[#686868] text-lg">Organisez vos justificatifs pour une déclaration efficace</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-[#FFEFD5] to-[#FFE4B5] rounded-xl p-6">
                    <h3 className="text-[#112033] text-lg font-semibold mb-4 flex items-center gap-2">
                      <span>💼</span> Revenus d'activité
                    </h3>
                    <ul className="space-y-2 text-[#686868] text-sm">
                      <li>• Bulletins de salaire</li>
                      <li>• Attestations employeur</li>
                      <li>• Relevés de retraite</li>
                      <li>• Bénéfices BIC/BNC</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#E8F5E8] to-[#D4EDDA] rounded-xl p-6">
                    <h3 className="text-[#112033] text-lg font-semibold mb-4 flex items-center gap-2">
                      <span>🏠</span> Revenus du patrimoine
                    </h3>
                    <ul className="space-y-2 text-[#686868] text-sm">
                      <li>• Relevés bancaires</li>
                      <li>• Attestations de loyer</li>
                      <li>• Dividendes et intérêts</li>
                      <li>• Plus-values mobilières</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] rounded-xl p-6">
                    <h3 className="text-[#112033] text-lg font-semibold mb-4 flex items-center gap-2">
                      <span>📋</span> Charges déductibles
                    </h3>
                    <ul className="space-y-2 text-[#686868] text-sm">
                      <li>• Quittances de charges</li>
                      <li>• Attestations de dons</li>
                      <li>• Justificatifs de travaux</li>
                      <li>• Preuves d'investissements</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "erreurs" && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-[#112033] text-2xl font-semibold mb-4">Erreurs courantes à éviter</h2>
                  <p className="text-[#686868] text-lg">Connaître les pièges pour une déclaration sans accroc</p>
                </div>
                
                <div className="space-y-6">
                  {commonErrors.map((error, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#B99066]">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h3 className="text-[#112033] font-semibold mb-2">❌ {error.error}</h3>
                          <p className="text-[#686868] text-sm">{error.impact}</p>
                        </div>
                        <div className="md:col-span-2">
                          <h4 className="text-[#4EBBBD] font-medium mb-2">💡 Solution :</h4>
                          <p className="text-[#686868] text-sm">{error.solution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-[#FAFFEF] rounded-xl p-6 text-center">
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">Besoin d'aide ?</h3>
                  <p className="text-[#686868] text-sm mb-4">
                    Nos experts sont là pour vous accompagner dans votre déclaration
                  </p>
                  <button className="bg-[#4EBBBD] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200">
                    Consulter un expert
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#F2F2F2] to-[#E5E5E5]">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <h2 className="text-[#112033] text-2xl lg:text-3xl font-semibold mb-4">
              Prêt à déclarer vos impôts ?
            </h2>
            <p className="text-[#686868] text-lg mb-8 max-w-3xl mx-auto">
              Utilisez notre simulateur pour estimer vos impôts et découvrez comment optimiser 
              votre situation fiscale en toute légalité.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#4EBBBD] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200 text-lg">
                🧮 Simuler mes impôts
              </button>
              <button className="border-2 border-[#4EBBBD] text-[#4EBBBD] px-8 py-4 rounded-lg font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors duration-200 text-lg">
                📞 Parler à un expert
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 