"use client";
import React, { useState } from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function ScpiOpciPage() {
  const [activeTab, setActiveTab] = useState("introduction");
  
  const chartData = [
    { label: "Rendement moyen SCPI", value: "5.8%" },
    { label: "Durée moyenne d'investissement", value: "8-10 ans" },
    { label: "Ticket d'entrée moyen", value: "€5,000" },
    { label: "Frais d'entrée", value: "10-15%" },
    { label: "Performance sur 5 ans", value: "+28.5%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold leading-tight mb-6">
                SCPI / OPCI
              </h1>
              <p className="text-[#686868] text-lg font-inter leading-relaxed mb-8">
                Les <strong>SCPI (Sociétés Civiles de Placement Immobilier)</strong> et les <strong>OPCI (Organismes de Placement Collectif Immobilier)</strong> permettent d'investir dans l'immobilier <strong>sans acheter directement un bien</strong>.
              </p>
              <p className="text-[#686868] text-base font-inter leading-relaxed mb-8">
                L'épargnant acquiert des <strong>parts gérées par une société de gestion</strong>, qui se charge de sélectionner les immeubles, de percevoir les loyers et de les redistribuer sous forme de revenus.
              </p>
              <div className="bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-4 rounded-r-lg mb-8">
                <p className="text-[#112033] text-sm font-inter">
                  👉 Ce sont des solutions d'<strong>immobilier collectif</strong> qui offrent une diversification inaccessible à l'investisseur particulier en direct.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#B99066] text-white px-6 py-3 rounded-lg shadow-lg font-inter font-medium hover:bg-[#A67A5A] transition-colors duration-200">
                  Découvrir nos solutions
                </button>
                <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-6 py-3 rounded-lg font-inter font-medium hover:bg-[#B99066] hover:text-white transition-colors duration-200">
                  Marché secondaire
                </button>
              </div>
            </div>
            
            {/* Right: SCPI/OPCI Cards */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* SCPI */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#4EBBBD] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🏢</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">SCPI</h3>
                  <p className="text-[#686868] text-sm mb-2">Société Civile de Placement Immobilier</p>
                  <p className="text-[#B99066] text-xl font-bold">5.8%</p>
                  <p className="text-[#686868] text-xs">Rendement moyen</p>
                </div>

                {/* OPCI */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#B99066] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🏗️</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">OPCI</h3>
                  <p className="text-[#686868] text-sm mb-2">Organisme de Placement Collectif Immobilier</p>
                  <p className="text-[#B99066] text-xl font-bold">4.2%</p>
                  <p className="text-[#686868] text-xs">Rendement moyen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Performance des SCPI et OPCI"
        data={chartData}
        chartImage="/images/scpi.webp"
      />

      {/* Navigation Tabs */}
      <section className="w-full bg-white py-8">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => setActiveTab("introduction")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "introduction" 
                  ? "bg-[#4EBBBD] text-white" 
                  : "bg-gray-100 text-[#686868] hover:bg-gray-200"
              }`}
            >
              Introduction
            </button>
            <button 
              onClick={() => setActiveTab("fiscalite")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "fiscalite" 
                  ? "bg-[#4EBBBD] text-white" 
                  : "bg-gray-100 text-[#686868] hover:bg-gray-200"
              }`}
            >
              Intérêt fiscal
            </button>
            <button 
              onClick={() => setActiveTab("avantages")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "avantages" 
                  ? "bg-[#4EBBBD] text-white" 
                  : "bg-gray-100 text-[#686868] hover:bg-gray-200"
              }`}
            >
              Avantages
            </button>
            <button 
              onClick={() => setActiveTab("inconvenients")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "inconvenients" 
                  ? "bg-[#4EBBBD] text-white" 
                  : "bg-gray-100 text-[#686868] hover:bg-gray-200"
              }`}
            >
              Inconvénients
            </button>
            <button 
              onClick={() => setActiveTab("types")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "types" 
                  ? "bg-[#4EBBBD] text-white" 
                  : "bg-gray-100 text-[#686868] hover:bg-gray-200"
              }`}
            >
              Types de SCPI
            </button>
            <button 
              onClick={() => setActiveTab("azalee")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === "azalee" 
                  ? "bg-[#4EBBBD] text-white" 
                  : "bg-gray-100 text-[#686868] hover:bg-gray-200"
              }`}
            >
              Solution Azalée
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "introduction" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
                  Qu'est-ce qu'un livret réglementé ?
                </h2>
                <p className="text-[#686868] text-lg max-w-4xl mx-auto">
                  Un <strong>livret réglementé</strong> est un produit d'épargne garanti par l'État, exonéré d'impôt sur le revenu et de prélèvements sociaux, accessible à tous avec un plafond fixé par la loi, rémunéré à un taux décidé par les pouvoirs publics.
                </p>
              </div>
              
              <div className="bg-[#F8F9FA] rounded-lg p-8">
                <h3 className="text-[#112033] text-xl font-semibold mb-4">Rôle économique</h3>
                <p className="text-[#686868] mb-4">
                  Ces livrets jouent un rôle essentiel dans le financement de l'économie française (logement social, collectivités, transition énergétique).
                </p>
              </div>
            </div>
          )}

          {activeTab === "fiscalite" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
                  Intérêt fiscal des SCPI/OPCI
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#4EBBBD]">
                  <h3 className="text-[#112033] text-lg font-semibold mb-3">En détention directe</h3>
                  <p className="text-[#686868] text-sm">
                    Les revenus des SCPI sont imposés comme des <strong>revenus fonciers</strong>, soumis au barème progressif + 17,2 % de prélèvements sociaux.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#B99066]">
                  <h3 className="text-[#112033] text-lg font-semibold mb-3">Via assurance-vie</h3>
                  <p className="text-[#686868] text-sm">
                    Fiscalité différée, plus douce, notamment sur les arbitrages.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#59E2E4]">
                  <h3 className="text-[#112033] text-lg font-semibold mb-3">En nue-propriété</h3>
                  <p className="text-[#686868] text-sm">
                    Pas de revenus pendant la durée du démembrement → donc <strong>pas d'imposition</strong>, avec un prix d'achat réduit.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "avantages" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
                  ✅ Avantages des SCPI/OPCI
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#4EBBBD] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-semibold mb-2">Accès simplifié</h3>
                    <p className="text-[#686868] text-sm">
                      Accès simplifié à l'immobilier tertiaire (bureaux, commerces, logistique, santé…).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-semibold mb-2">Diversification</h3>
                    <p className="text-[#686868] text-sm">
                      Diversification géographique et sectorielle immédiate.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#59E2E4] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-semibold mb-2">Mutualisation des risques</h3>
                    <p className="text-[#686868] text-sm">
                      Mutualisation des risques locatifs : un locataire qui part n'impacte qu'une petite fraction du patrimoine.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#4EBBBD] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-semibold mb-2">Ticket d'entrée accessible</h3>
                    <p className="text-[#686868] text-sm">
                      Ticket d'entrée accessible : à partir de quelques milliers d'euros.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-semibold mb-2">Effet de levier</h3>
                    <p className="text-[#686868] text-sm">
                      Possibilité de financer à crédit avec effet de levier bancaire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "inconvenients" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
                  ⚠️ Inconvénients et points de vigilance
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <h3 className="text-[#112033] text-lg font-semibold mb-3">Frais de souscription élevés</h3>
                  <p className="text-[#686868] text-sm mb-2">
                    Autour de <strong>10 % HT</strong>, ce qui oblige à investir long terme pour amortir ces frais.
                  </p>
                  <p className="text-[#686868] text-sm">
                    Certaines SCPI "<strong>0 % frais d'entrée</strong>" (ex. <strong>Iroko Zen</strong>) appliquent en réalité des <strong>frais de gestion internes plus élevés</strong> → ce modèle n'est pas forcément plus avantageux.
                  </p>
                </div>
                
                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
                  <h3 className="text-[#112033] text-lg font-semibold mb-3">Liquidité limitée</h3>
                  <p className="text-[#686868] text-sm">
                    Depuis 2023, certaines SCPI historiques sont devenues <strong>illiquides</strong>, bloquant les rachats.
                  </p>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="text-[#112033] text-lg font-semibold mb-3">Fiscalité lourde</h3>
                  <p className="text-[#686868] text-sm">
                    <strong>Revenus fiscalisés lourdement</strong> en détention directe (hors enveloppes fiscales).
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <h3 className="text-[#112033] text-lg font-semibold mb-3">Revalorisation à la baisse</h3>
                  <p className="text-[#686868] text-sm">
                    <strong>Revalorisation à la baisse des parts</strong> depuis 2023 (Primonial, Perial, Sofidy…), destinée à réaligner les valeurs avec le marché immobilier.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "types" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
                  Les différents types de SCPI
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-4">SCPI de rendement</h3>
                  <p className="text-sm mb-4">Objectif : générer des <strong>revenus réguliers</strong>.</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Investies dans les bureaux, commerces, santé, logistique</li>
                    <li>• Exemples : <strong>Immorente (Sofidy)</strong>, <strong>Efimmo 1 (Sofidy)</strong>, <strong>Épargne Pierre (Atland Voisin)</strong></li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-4">SCPI fiscales</h3>
                  <p className="text-sm mb-4">Objectif : <strong>avantage fiscal immédiat</strong> (Pinel, Malraux, déficit foncier).</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Investies dans du résidentiel en France</li>
                    <li>• Rendement financier plus faible mais avantage fiscal compensateur</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-4">SCPI patrimoniales (nue-propriété)</h3>
                  <p className="text-sm mb-4">Objectif : <strong>optimiser fiscalité et transmission</strong>.</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Achat en nue-propriété avec une décote de 20 à 40 %</li>
                    <li>• Pas de revenus pendant le démembrement → <strong>zéro fiscalité</strong></li>
                    <li>• Au terme, récupération de la pleine propriété sans droits supplémentaires</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-[#4EBBBD] to-[#B99066] rounded-lg shadow-lg p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-4">SCPI internationales</h3>
                  <p className="text-sm mb-4">Objectif : investir hors de France (Allemagne, Pays-Bas, Espagne…).</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Avantages : diversification économique, fiscalité souvent plus douce</li>
                    <li>• Exemple : <strong>Novapierre Allemagne (Paref Gestion)</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "azalee" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
                  🔑 L'action Azalée Patrimoine : retrouver de la liquidité
                </h2>
              </div>
              
              <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
                <div className="mb-6">
                  <p className="text-lg mb-4">
                    Chez <strong>Azalée Patrimoine</strong>, nous avons constaté que de nombreux épargnants de notre <strong>Club</strong> sont immobilisés depuis 2023 dans des SCPI historiques devenues <strong>illiquides</strong>.
                  </p>
                  <p className="text-sm mb-4">
                    Cette situation empêche toute évolution de leur stratégie patrimoniale, notamment pour ceux qui souhaitent :
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 mb-6">
                    <li>préparer leur retraite,</li>
                    <li>financer un projet,</li>
                    <li>ou optimiser leur transmission <strong>avant 70 ans</strong>.</li>
                  </ul>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">👉 Notre solution : marché secondaire de gré à gré</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-xl">🤝</span>
                      </div>
                      <h4 className="font-semibold mb-2">Mise en relation</h4>
                      <p className="text-sm">Acheteurs / vendeurs avec carnet d'ordres interne</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-xl">💰</span>
                      </div>
                      <h4 className="font-semibold mb-2">Décote maîtrisée</h4>
                      <p className="text-sm">~10 % HT pour fluidifier les transactions</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-xl">🛡️</span>
                      </div>
                      <h4 className="font-semibold mb-2">Accompagnement</h4>
                      <p className="text-sm">Fiscalité, transmission, sécurisation</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-lg font-semibold mb-2">🎯 Objectif</p>
                  <p className="text-sm">
                    Permettre à nos clients <strong>d'éviter d'être "bloqués"</strong> et de <strong>continuer à faire évoluer leur stratégie patrimoniale</strong>, plutôt que de subir une immobilisation forcée.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Classement SCPI Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              📋 Classement des SCPI parmi les plus performantes (S1 2025)
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Voici un tableau actualisé des SCPI les plus performantes au 1er semestre 2025, avec les rendements déclarés, points forts, et mises en garde.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#4EBBBD] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Rang</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">SCPI</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Société de Gestion</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Rendement</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Points Forts / Risques</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-semibold text-[#4EBBBD]">1</td>
                    <td className="px-4 py-3 text-sm font-semibold">Comète</td>
                    <td className="px-4 py-3 text-sm">Alderan</td>
                    <td className="px-4 py-3 text-sm font-bold text-green-600">≈ 11,18%</td>
                    <td className="px-4 py-3 text-sm">Très jeune SCPI (2023), stratégie diversifiée, investissements internationaux. Attention : profil de risque plus important.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-semibold text-[#4EBBBD]">2</td>
                    <td className="px-4 py-3 text-sm font-semibold">Osmo Énergie</td>
                    <td className="px-4 py-3 text-sm">Mata Capital</td>
                    <td className="px-4 py-3 text-sm font-bold text-green-600">≈ 9,33%</td>
                    <td className="px-4 py-3 text-sm">Entreprise très jeune, forte progression, rendement élevé au départ. Risque sur la pérennité.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-semibold text-[#4EBBBD]">3</td>
                    <td className="px-4 py-3 text-sm font-semibold">Mistral Sélection</td>
                    <td className="px-4 py-3 text-sm">Swiss Life REIM</td>
                    <td className="px-4 py-3 text-sm font-bold text-green-600">≈ 8,59%</td>
                    <td className="px-4 py-3 text-sm">SCPI "sans frais de souscription", bonne diversification, groupe reconnu. Risque modéré.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-semibold text-[#4EBBBD]">4</td>
                    <td className="px-4 py-3 text-sm font-semibold">Transitions Europe</td>
                    <td className="px-4 py-3 text-sm">Arkéa REIM</td>
                    <td className="px-4 py-3 text-sm font-bold text-green-600">≈ 8,25%</td>
                    <td className="px-4 py-3 text-sm">Capitalisation importante, stratégie très européenne. Risques liés à l'évolution macroéconomique.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-semibold text-[#4EBBBD]">5</td>
                    <td className="px-4 py-3 text-sm font-semibold">Upeka</td>
                    <td className="px-4 py-3 text-sm">Axipit REP</td>
                    <td className="px-4 py-3 text-sm font-bold text-green-600">≈ 7,96%</td>
                    <td className="px-4 py-3 text-sm">Jeune SCPI, bon positionnement. Moindre historique.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <h3 className="text-[#112033] text-lg font-semibold mb-3">⚠️ Ce qu'il faut nuancer / risques à connaître</h3>
            <ul className="space-y-2 text-sm text-[#686868]">
              <li>• <strong>Actualisation des chiffres</strong> : beaucoup de rendements sont ceux de 2024 et ne se traduisent pas nécessairement sur S1 2025</li>
              <li>• <strong>Valeur des parts</strong> : certaines SCPI ont vu leur prix de souscription / valeur des parts baisser en début d'année</li>
              <li>• <strong>Liquidité</strong> : dans un contexte de marché tendu, certaines SCPI peuvent avoir des difficultés à racheter des parts</li>
              <li>• <strong>Non garanti</strong> : les rendements projetés ou objectifs ne sont pas garantis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparatif Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              📊 Comparatif SCPI en fonction de l'accès
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#B99066] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Critères</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">SCPI traditionnelles</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">SCPI à 0% frais</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Solution gré à gré Azalée</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-semibold">Frais de souscription</td>
                    <td className="px-4 py-3 text-sm">Environ <strong>10% HT</strong> à l'entrée</td>
                    <td className="px-4 py-3 text-sm">0% à la souscription, mais frais de gestion souvent <strong>plus élevés</strong></td>
                    <td className="px-4 py-3 text-sm">Décote à l'entrée portée par le cédant (≈ <strong>10% HT</strong>)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-semibold">Frais de gestion annuels</td>
                    <td className="px-4 py-3 text-sm">8 à 12% des loyers</td>
                    <td className="px-4 py-3 text-sm">Souvent supérieurs (jusqu'à 15% des loyers)</td>
                    <td className="px-4 py-3 text-sm">Identiques à ceux des SCPI sous-jacentes</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-semibold">Liquidité</td>
                    <td className="px-4 py-3 text-sm">Limitée, surtout en période de crise (blocage depuis 2023)</td>
                    <td className="px-4 py-3 text-sm">Dépend du marché secondaire de la société de gestion</td>
                    <td className="px-4 py-3 text-sm"><strong>Marché secondaire interne Azalée</strong> : mise en relation acheteurs/vendeurs</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-semibold">Horizon conseillé</td>
                    <td className="px-4 py-3 text-sm">8 à 12 ans pour amortir les frais d'entrée</td>
                    <td className="px-4 py-3 text-sm">Plus flexible mais dépend du rendement net réel</td>
                    <td className="px-4 py-3 text-sm">Court / moyen terme → récupération de liquidité pour réinvestir avant 70 ans</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-semibold">Objectif pour l'épargnant</td>
                    <td className="px-4 py-3 text-sm">Revenus réguliers long terme</td>
                    <td className="px-4 py-3 text-sm">Revenus rapides, marketing axé sur la "gratuité"</td>
                    <td className="px-4 py-3 text-sm"><strong>Retrouver de la liquidité</strong> pour continuer à faire évoluer sa stratégie patrimoniale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* OPCI Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Les OPCI : une alternative plus liquide
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-semibold mb-4">Caractéristiques des OPCI</h3>
              <ul className="space-y-3 text-[#686868]">
                <li className="flex items-start gap-3">
                  <span className="text-[#4EBBBD] font-bold">•</span>
                  <span><strong>OPCI (Organismes de Placement Collectif Immobilier)</strong> : proches des SCPI mais investis à la fois en immobilier direct et en actifs financiers (actions, obligations, liquidités).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] font-bold">•</span>
                  <span>Objectif : offrir une <strong>meilleure liquidité</strong> (rachat sous quelques jours).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#59E2E4] font-bold">•</span>
                  <span>Contrepartie : plus de <strong>volatilité</strong>, car sensibles aux marchés financiers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4EBBBD] font-bold">•</span>
                  <span>Fiscalité : similaire aux fonds classiques (OPCVM) en assurance-vie.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-semibold mb-4">Crise de liquidité et ajustement du marché</h3>
              <p className="text-[#686868] mb-4">
                Depuis 2023, le marché des SCPI traverse une <strong>crise de liquidité</strong> :
              </p>
              <ul className="space-y-2 text-[#686868] text-sm">
                <li>• La hausse des taux d'intérêt a fait <strong>baisser la valeur des actifs immobiliers</strong></li>
                <li>• Les demandes de rachat se sont multipliées → certaines SCPI historiques n'arrivent plus à offrir de liquidité</li>
                <li>• Résultat : des <strong>revalorisations à la baisse</strong> des parts, qui assainissent le marché à long terme mais impactent les portefeuilles à court terme</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            En résumé
          </h2>
          <div className="text-white text-lg mb-8 max-w-4xl mx-auto space-y-4">
            <p>
              Les SCPI restent un outil puissant de diversification immobilière, mais avec des <strong>frais, une fiscalité et une liquidité à surveiller</strong>.
            </p>
            <p>
              Les OPCI offrent une alternative plus liquide mais plus volatile.
            </p>
            <p>
              Depuis 2023, la crise de liquidité a mis en évidence la <strong>fragilité du marché secondaire</strong>.
            </p>
            <p className="text-xl font-semibold">
              👉 Avec son service de <strong>vente de gré à gré</strong>, <strong>Azalée Patrimoine</strong> offre une <strong>solution concrète et innovante</strong> pour aider ses clients à <strong>retrouver de la liberté</strong> dans leur allocation patrimoniale.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-cairo font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
              Découvrir notre marché secondaire
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-cairo font-semibold text-lg hover:bg-white hover:text-[#4EBBBD] transition-colors duration-200">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>
    </>
  );
} 