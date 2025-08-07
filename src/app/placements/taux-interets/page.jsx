"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function TauxInteretsPage() {
  const chartData = [
    { label: "Taux directeur BCE", value: "4.50%" },
    { label: "Taux Livret A", value: "3.00%" },
    { label: "Taux moyen obligations", value: "2.80%" },
    { label: "Taux crédit immobilier", value: "4.20%" },
    { label: "Inflation actuelle", value: "2.10%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section with rate visualization */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
              Taux d'intérêts et marchés monétaires
            </h1>
            <p className="text-[#686868] text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed max-w-4xl mx-auto">
              Comprendre l'évolution des taux pour optimiser vos placements et emprunts
            </p>
          </div>
          
          {/* Current Rates Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-[#686868] text-sm font-medium mb-2">BCE</h3>
              <p className="text-[#4EBBBD] text-3xl font-bold">4.50%</p>
              <p className="text-[#686868] text-sm">Taux directeur</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-[#686868] text-sm font-medium mb-2">Livret A</h3>
              <p className="text-[#B99066] text-3xl font-bold">3.00%</p>
              <p className="text-[#686868] text-sm">Taux réglementé</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-[#686868] text-sm font-medium mb-2">Obligations</h3>
              <p className="text-[#59E2E4] text-3xl font-bold">2.80%</p>
              <p className="text-[#686868] text-sm">Taux moyen</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-[#686868] text-sm font-medium mb-2">Crédit</h3>
              <p className="text-[#4EBBBD] text-3xl font-bold">4.20%</p>
              <p className="text-[#686868] text-sm">Immobilier</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67A5A] transition-colors duration-200">
              Simuler un placement
            </button>
            <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-[#B99066] hover:text-white transition-colors duration-200">
              Voir l'évolution
            </button>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Évolution des taux d'intérêts"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Rate Types Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Les différents types de taux
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Central Bank Rates */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">🏦</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Taux directeurs</h3>
              </div>
              <p className="text-sm mb-4">
                Fixés par les banques centrales pour contrôler l'inflation et la croissance économique.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• BCE : 4.50%</li>
                <li>• Fed : 5.25%</li>
                <li>• BoE : 5.25%</li>
                <li>• Impact sur tous les marchés</li>
              </ul>
            </div>

            {/* Market Rates */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Taux de marché</h3>
              </div>
              <p className="text-sm mb-4">
                Déterminés par l'offre et la demande sur les marchés financiers.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Euribor : 3.85%</li>
                <li>• Libor : 5.33%</li>
                <li>• Taux interbancaire</li>
                <li>• Évolution quotidienne</li>
              </ul>
            </div>

            {/* Regulated Rates */}
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#59E2E4] text-2xl">⚖️</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Taux réglementés</h3>
              </div>
              <p className="text-sm mb-4">
                Fixés par les autorités pour protéger les épargnants et les emprunteurs.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Livret A : 3.00%</li>
                <li>• LDDS : 3.00%</li>
                <li>• LEP : 5.00%</li>
                <li>• Taux plafonnés</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Analysis Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Impact des taux sur vos placements
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Impact on Savings */}
            <div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-8">
                Impact sur l'épargne
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Livrets et comptes épargne
                    </h4>
                    <p className="text-[#686868] text-sm">
                      Les taux hauts favorisent les placements sans risque 
                      comme le Livret A et les comptes épargne.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B99066] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Obligations
                    </h4>
                    <p className="text-[#686868] text-sm">
                      Les taux hauts font baisser les prix des obligations 
                      existantes mais augmentent les rendements futurs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#59E2E4] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Actions
                    </h4>
                    <p className="text-[#686868] text-sm">
                      Les taux hauts peuvent peser sur les actions 
                      mais certaines entreprises en bénéficient.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Rate Calculator */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                Calculateur d'intérêts
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Montant investi
                  </label>
                  <input 
                    type="number" 
                    placeholder="€10,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Taux d'intérêt (%)
                  </label>
                  <input 
                    type="number" 
                    placeholder="3.00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Durée (années)
                  </label>
                  <input 
                    type="number" 
                    placeholder="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>

                <button className="w-full bg-[#4EBBBD] text-white py-3 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200">
                  Calculer les intérêts
                </button>

                <div className="bg-[#FAFFEF] rounded-lg p-4 text-center">
                  <p className="text-[#686868] text-sm">
                    <strong>Intérêts générés :</strong><br />
                    <span className="text-[#4EBBBD] text-xl font-bold">€1,592</span> sur 5 ans
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Evolution Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Évolution historique des taux
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Années 2000-2008
              </h3>
              <p className="text-[#686868] text-sm">
                Période de taux bas favorisant l'immobilier et l'endettement
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📉</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Crise 2008-2015
              </h3>
              <p className="text-[#686868] text-sm">
                Taux ultra-bas pour relancer l'économie après la crise
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚖️</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                2015-2021
              </h3>
              <p className="text-[#686868] text-sm">
                Taux négatifs en Europe pour stimuler l'inflation
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔥</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                2022-2024
              </h3>
              <p className="text-[#686868] text-sm">
                Remontée des taux pour lutter contre l'inflation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
            Prêt à optimiser vos placements selon les taux ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nos experts analysent l'évolution des taux pour vous proposer 
            les meilleures stratégies d'investissement adaptées au contexte économique.
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Optimiser mes placements
          </button>
        </div>
      </section>
    </>
  );
} 