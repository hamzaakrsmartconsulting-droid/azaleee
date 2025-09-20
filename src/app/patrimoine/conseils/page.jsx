"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function ConseilsPage() {
  const chartData = [
    { label: "Conseils personnalisés", value: "25+" },
    { label: "Taux de satisfaction", value: "98.3%" },
    { label: "Économies moyennes", value: "€15,000" },
    { label: "Durée de conseil", value: "6-12 mois" },
    { label: "Suivi personnalisé", value: "100%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold leading-tight mb-6">
              Conseils patrimoniaux
            </h1>
            <p className="text-[#686868] text-lg font-inter leading-relaxed max-w-4xl mx-auto mb-8">
              Le patrimoine n'est pas qu'une addition de biens immobiliers et financiers.
            </p>
            <p className="text-[#686868] text-lg font-inter leading-relaxed max-w-4xl mx-auto mb-8">
              C'est un <strong>ensemble cohérent</strong> qui doit être :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🏗️</span>
                </div>
                <h3 className="text-[#112033] font-semibold mb-2">Construit</h3>
                <p className="text-[#686868] text-sm">Stratégie d'accumulation</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🛡️</span>
                </div>
                <h3 className="text-[#112033] font-semibold mb-2">Protégé</h3>
                <p className="text-[#686868] text-sm">Sécurité et assurance</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">💰</span>
                </div>
                <h3 className="text-[#112033] font-semibold mb-2">Optimisé fiscalement</h3>
                <p className="text-[#686868] text-sm">Réduction des impôts</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🔄</span>
                </div>
                <h3 className="text-[#112033] font-semibold mb-2">Transmis</h3>
                <p className="text-[#686868] text-sm">Dans les meilleures conditions</p>
              </div>
            </div>
            <div className="bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-4 rounded-r-lg max-w-4xl mx-auto mb-8">
              <p className="text-[#112033] text-sm font-inter">
                👉 Des décisions isolées peuvent sembler intéressantes, mais <strong>sans stratégie globale</strong>, elles créent souvent des incohérences, voire une sur-fiscalisation.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67A5A] transition-colors duration-200">
              Prendre rendez-vous
            </button>
            <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-[#B99066] hover:text-white transition-colors duration-200">
              Consulter nos experts
            </button>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Indicateurs de conseils"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Les piliers d'une stratégie patrimoniale réussie Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Les piliers d'une stratégie patrimoniale réussie
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pilier 1: L'immobilier */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">🏠</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">1. L'immobilier</h3>
              </div>
              <div className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Résidence principale, secondaire, locatif</li>
                  <li>• Location nue, meublée (LMNP/LMP), nue-propriété</li>
                  <li>• SCPI/OPCI/SCI pour diversifier</li>
                </ul>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mt-4">
                  <p className="text-xs">
                    👉 Azalée évalue la rentabilité <strong>nette d'impôts</strong>, la fiscalité (revenus fonciers vs BIC), et le mode de détention le plus pertinent (individuel, SCI, démembrement).
                  </p>
                </div>
              </div>
            </div>

            {/* Pilier 2: L'assurance-vie */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">2. L'assurance-vie</h3>
              </div>
              <div className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Placement préféré des Français</strong>, souple et polyvalent</li>
                  <li>• Atout majeur pour la <strong>transmission</strong> (abattements jusqu'à 152 500 € par bénéficiaire avant 70 ans)</li>
                  <li>• Diversification possible (fonds euros, UC, SCPI, produits structurés, ETF)</li>
                </ul>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mt-4">
                  <p className="text-xs">
                    👉 Azalée optimise la <strong>répartition fonds euros / UC</strong>, adapte la <strong>clause bénéficiaire</strong> et veille à la <strong>liquidité</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Pilier 3: Les produits financiers */}
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#59E2E4] text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">3. Les produits financiers</h3>
              </div>
              <div className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• <strong>PEA / CTO</strong> : actions, ETF, produits structurés</li>
                  <li>• <strong>PER</strong> : optimisation fiscale à l'entrée, rente ou capital à la sortie</li>
                  <li>• Allocation dynamique ou sécurisée selon l'âge et le profil de risque</li>
                </ul>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mt-4">
                  <p className="text-xs">
                    👉 Azalée bâtit des portefeuilles équilibrés, en intégrant les cycles économiques, les taux et les besoins de liquidité.
                  </p>
                </div>
              </div>
            </div>

            {/* Pilier 4: La transmission et la fiscalité */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">🔄</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">4. La transmission et la fiscalité</h3>
              </div>
              <div className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Anticiper les droits de succession</li>
                  <li>• Organiser des donations progressives</li>
                  <li>• Recourir au démembrement ou à l'assurance-vie pour optimiser</li>
                </ul>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mt-4">
                  <p className="text-xs">
                    👉 Azalée travaille <strong>en équipe avec notaires et experts-comptables</strong> pour fluidifier la transmission et réduire les coûts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exemple concret d'arbitrage patrimonial Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Exemple concret d'arbitrage patrimonial
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Un couple de 55 ans, 2 enfants, patrimoine de 1,8 M€ (immobilier + financier) :
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Situation initiale */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-semibold mb-6 text-center">
                📊 Situation initiale
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg">
                  <span className="text-red-600 text-xl">🏠</span>
                  <div>
                    <p className="text-red-800 font-medium text-sm">3 appartements locatifs</p>
                    <p className="text-red-700 text-xs">Taxés à l'IR (revenus fonciers lourds)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                  <span className="text-orange-600 text-xl">🛡️</span>
                  <div>
                    <p className="text-orange-800 font-medium text-sm">Assurance-vie peu diversifiée</p>
                    <p className="text-orange-700 text-xs">Manque d'optimisation</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h4 className="text-red-800 font-semibold mb-2">⚠️ Problématiques :</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Fiscalité lourde sur les revenus fonciers</li>
                  <li>• Manque de diversification</li>
                  <li>• Optimisation insuffisante</li>
                </ul>
              </div>
            </div>

            {/* Arbitrages proposés par Azalée */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-semibold mb-6 text-center">
                ✅ Arbitrages proposés par Azalée
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 text-xl">🏠</span>
                  <div>
                    <p className="text-green-800 font-medium text-sm">Passage d'un appartement en <strong>LMNP</strong></p>
                    <p className="text-green-700 text-xs">Pour alléger la fiscalité</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 text-xl">🌍</span>
                  <div>
                    <p className="text-green-800 font-medium text-sm">Intégration de <strong>SCPI internationales</strong> via assurance-vie</p>
                    <p className="text-green-700 text-xs">Pour diversifier</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 text-xl">💰</span>
                  <div>
                    <p className="text-green-800 font-medium text-sm">Ouverture d'un <strong>PER</strong> avec versements déductibles</p>
                    <p className="text-green-700 text-xs">Pour réduire l'IR</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 text-xl">🔄</span>
                  <div>
                    <p className="text-green-800 font-medium text-sm">Mise en place d'une <strong>donation de nue-propriété</strong></p>
                    <p className="text-green-700 text-xs">Pour anticiper la transmission</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <h4 className="text-green-800 font-semibold mb-2">🎯 Résultat :</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Fiscalité allégée de <strong>15 000 €/an</strong></li>
                  <li>• Plus de revenus nets disponibles</li>
                  <li>• Transmission optimisée pour les enfants</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white text-center">
            <h3 className="text-xl font-semibold mb-6">
              👉 Résultat : Fiscalité allégée de <strong>15 000 €/an</strong>, plus de revenus nets disponibles, transmission optimisée pour les enfants.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  <strong>Fiscalité allégée</strong><br />
                  15 000 €/an d'économies
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  <strong>Plus de revenus nets</strong><br />
                  Disponibles pour la famille
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  <strong>Transmission optimisée</strong><br />
                  Pour les enfants
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La valeur ajoutée Azalée Patrimoine Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6 flex items-center justify-center gap-3">
              <span className="text-[#4EBBBD] text-3xl">🚀</span>
              La valeur ajoutée Azalée Patrimoine
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Chez <strong>Azalée Patrimoine</strong>, nos conseils vont au-delà du produit :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Stratégie globale
              </h3>
              <p className="text-[#686868] text-sm">
                Nous créons une <strong>stratégie globale</strong>, adaptée à votre profil, votre famille et vos objectifs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚠️</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Éviter les incohérences
              </h3>
              <p className="text-[#686868] text-sm">
                Nous vous aidons à <strong>éviter les incohérences fiscales</strong> et les mauvaises décisions isolées.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Suivi régulier
              </h3>
              <p className="text-[#686868] text-sm">
                Nous assurons un <strong>suivi régulier</strong> pour ajuster vos choix selon l'évolution de la législation et des marchés.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white text-center">
            <h3 className="text-xl font-semibold mb-6">
              👉 Nous ne vendons pas uniquement des placements, nous construisons un <strong>projet patrimonial cohérent et durable</strong>.
            </h3>
            
            <div className="mt-8 bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-6 rounded-r-lg">
              <p className="text-[#112033] text-center font-semibold">
                📅 <strong>Prenez rendez-vous dès aujourd'hui</strong> pour bénéficier d'un conseil patrimonial personnalisé avec Azalée Patrimoine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            Prêt à optimiser votre patrimoine ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
            Nos experts vous accompagnent pour construire une <strong>stratégie patrimoniale cohérente et durable</strong>, adaptée à votre profil et vos objectifs.
          </p>
          
          <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-white text-xl font-semibold mb-4">
              👉 Chez <strong>Azalée Patrimoine</strong>, nous vous apportons :
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-white">
                  Une <strong>stratégie globale</strong> personnalisée
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-white">
                  L'évitement des <strong>incohérences fiscales</strong>
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-white">
                  Un <strong>suivi régulier</strong> et adaptatif
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
              Prendre rendez-vous
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-white hover:text-[#4EBBBD] transition-colors duration-200">
              Consulter nos experts
            </button>
          </div>

          <div className="mt-8 bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-4 rounded-r-lg max-w-4xl mx-auto">
            <p className="text-[#112033] text-center font-semibold">
              📅 <strong>Prenez rendez-vous dès aujourd'hui</strong> pour bénéficier d'un conseil patrimonial personnalisé avec Azalée Patrimoine.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}