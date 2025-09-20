"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function PlanRetraitePage() {
  const chartData = [
    { label: "PER - Enveloppe universelle", value: "100%" },
    { label: "Versements déductibles", value: "€10,000" },
    { label: "Sortie en rente/capital", value: "Mixte" },
    { label: "Sortie anticipée", value: "Possible" },
    { label: "Transfert anciennes enveloppes", value: "✓" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
              Plan retraite (PER, PERP, PEE, PERCO…)
            </h1>
            <p className="text-[#686868] text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed max-w-4xl mx-auto">
              L'épargne retraite est un pilier essentiel de votre stratégie patrimoniale. Découvrez les solutions adaptées à votre statut et vos objectifs.
            </p>
          </div>
          
          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center relative">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">PER</h3>
              <p className="text-[#686868] text-sm">
                L'enveloppe universelle qui remplace PERP, Madelin, PERCO, Article 83
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center relative">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">PERCO / PEE</h3>
              <p className="text-[#686868] text-sm">
                Dispositifs d'épargne entreprise alimentés par participation, intéressement, abondement
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center relative">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">Anciennes enveloppes</h3>
              <p className="text-[#686868] text-sm">
                PERP, Madelin, Art. 83 : transférables vers le PER
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67A5A] transition-colors duration-200">
              Analyser ma situation
            </button>
            <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-[#B99066] hover:text-white transition-colors duration-200">
              Comparer les solutions
            </button>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Caractéristiques des plans retraite"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* PER Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              PER (Plan Épargne Retraite – loi Pacte)
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              L'enveloppe universelle qui remplace PERP, Madelin, PERCO, Article 83
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Avantage fiscal */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Avantage fiscal immédiat</h3>
              </div>
              <p className="text-sm text-center">
                Versements déductibles du revenu imposable
              </p>
            </div>

            {/* Sortie flexible */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl">🔄</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Sortie flexible</h3>
              </div>
              <p className="text-sm text-center">
                Sortie en rente, capital ou mixte
              </p>
            </div>

            {/* Sortie anticipée */}
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#59E2E4] text-2xl">🏠</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Sortie anticipée</h3>
              </div>
              <p className="text-sm text-center">
                Possible (résidence principale, accident de la vie)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERCO / PEE Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: PERCO/PEE Info */}
            <div>
              <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-8">
                PERCO / PEE
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#4EBBBD] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Dispositifs d'épargne entreprise
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Alimentés par participation, intéressement, abondement
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Abondement employeur
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Complément de versement de l'entreprise sur vos cotisations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#59E2E4] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Transfert vers PER
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Possibilité de transférer vers un PER individuel
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Anciennes enveloppes */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                Anciennes enveloppes transférables
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-[#F8F9FA] rounded-lg">
                  <span className="text-[#686868] text-sm">PERP</span>
                  <span className="text-[#4EBBBD] font-semibold">Transférable</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-[#F8F9FA] rounded-lg">
                  <span className="text-[#686868] text-sm">Madelin</span>
                  <span className="text-[#4EBBBD] font-semibold">Transférable</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-[#F8F9FA] rounded-lg">
                  <span className="text-[#686868] text-sm">Article 83</span>
                  <span className="text-[#4EBBBD] font-semibold">Transférable</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-[#F8F9FA] rounded-lg">
                  <span className="text-[#686868] text-sm">PERCO</span>
                  <span className="text-[#4EBBBD] font-semibold">Transférable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conseil Azalée Patrimoine Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              👉 Conseil Azalée Patrimoine
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-8">
                Azalée Patrimoine analyse chaque situation pour choisir le meilleur véhicule d'épargne retraite, en tenant compte de la fiscalité, du statut (salarié, TNS, dirigeant) et des objectifs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">📊 Analyse fiscale</h3>
                  <p className="text-sm">Optimisation selon votre tranche d'imposition</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">👔 Statut professionnel</h3>
                  <p className="text-sm">Salarié, TNS, dirigeant : solutions adaptées</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">🎯 Objectifs personnels</h3>
                  <p className="text-sm">Horizon, montant, flexibilité</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
            Prêt à optimiser votre épargne retraite ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nos experts Azalée Patrimoine vous accompagnent pour choisir la meilleure solution d'épargne retraite adaptée à votre situation.
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Analyser ma situation
          </button>
        </div>
      </section>
    </>
  );
}