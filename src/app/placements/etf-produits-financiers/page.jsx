"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function EtfProduitsFinanciersPage() {
  const chartData = [
    { label: "Performance moyenne ETF", value: "8.5%" },
    { label: "Frais de gestion moyens", value: "0.3%" },
    { label: "Nombre d'ETF disponibles", value: "2,500+" },
    { label: "Volume d'échanges quotidien", value: "€45M" },
    { label: "Performance sur 5 ans", value: "+42.3%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section with ETF visualization */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
              ETF et Produits Financiers
            </h1>
            <p className="text-[#686868] text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed max-w-4xl mx-auto">
              Investissez dans des fonds indiciels et produits financiers pour une diversification optimale
            </p>
          </div>
          
          {/* ETF Categories Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-[#112033] text-lg font-semibold mb-2">ETF Actions</h3>
              <p className="text-[#686868] text-sm">Répliquent les indices boursiers</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-[#112033] text-lg font-semibold mb-2">ETF Obligations</h3>
              <p className="text-[#686868] text-sm">Exposition aux marchés obligataires</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-[#112033] text-lg font-semibold mb-2">ETF Secteurs</h3>
              <p className="text-[#686868] text-sm">Spécialisés par secteur d'activité</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-[#112033] text-lg font-semibold mb-2">ETF Thématiques</h3>
              <p className="text-[#686868] text-sm">Tendances et innovations</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67A5A] transition-colors duration-200">
              Découvrir nos ETF
            </button>
            <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-[#B99066] hover:text-white transition-colors duration-200">
              Comparer les produits
            </button>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Performance des ETF et produits financiers"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* ETF Types Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Types d'ETF disponibles
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Equity ETFs */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">📈</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">ETF Actions</h3>
              </div>
              <p className="text-sm mb-4">
                Répliquent les performances des indices boursiers mondiaux.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• CAC 40, S&P 500, MSCI World</li>
                <li>• Frais très faibles (0.1-0.3%)</li>
                <li>• Liquidité quotidienne</li>
                <li>• Diversification automatique</li>
              </ul>
            </div>

            {/* Bond ETFs */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">ETF Obligations</h3>
              </div>
              <p className="text-sm mb-4">
                Exposition aux marchés obligataires pour la stabilité.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Obligations d'État et corporate</li>
                <li>• Rendement régulier</li>
                <li>• Réduction du risque</li>
                <li>• Diversification par maturité</li>
              </ul>
            </div>

            {/* Sector ETFs */}
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#59E2E4] text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">ETF Secteurs</h3>
              </div>
              <p className="text-sm mb-4">
                Spécialisés par secteur d'activité pour une exposition ciblée.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Technologie, santé, finance</li>
                <li>• Énergie, consommation</li>
                <li>• Stratégies sectorielles</li>
                <li>• Rotation des secteurs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Advantages */}
            <div>
              <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-8">
                Les avantages des ETF
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Frais réduits
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Des frais de gestion très faibles (0.1-0.3%) 
                      comparés aux fonds traditionnels (1-2%).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B99066] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Transparence
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Composition connue en temps réel et 
                      réplication fidèle de l'indice de référence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#59E2E4] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Liquidité
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Achat et vente possibles en continu 
                      pendant les heures de marché.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Diversification
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Accès à des centaines d'actions ou obligations 
                      avec un seul produit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Performance Chart */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                Performance comparée
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#686868] text-sm">ETF MSCI World</span>
                  <span className="text-[#4EBBBD] font-semibold">+8.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#4EBBBD] h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[#686868] text-sm">Fonds actif moyen</span>
                  <span className="text-[#B99066] font-semibold">+6.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#B99066] h-2 rounded-full" style={{width: '62%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[#686868] text-sm">Livret A</span>
                  <span className="text-[#59E2E4] font-semibold">+3.0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#59E2E4] h-2 rounded-full" style={{width: '30%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategy Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Stratégies d'investissement en ETF
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Core-Satellite */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#4EBBBD]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#4EBBBD] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-[#112033] text-xl font-source-sans font-semibold">Core-Satellite</h3>
                  <p className="text-[#B99066] font-bold">Stratégie équilibrée</p>
                </div>
              </div>
              <p className="text-[#686868] text-sm mb-4">
                80% en ETF indiciels (core) + 20% en ETF thématiques (satellite).
              </p>
              <ul className="space-y-2 text-sm text-[#686868]">
                <li>• Diversification large</li>
                <li>• Exposition ciblée</li>
                <li>• Gestion simplifiée</li>
              </ul>
            </div>

            {/* DCA Strategy */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#B99066]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#B99066] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📅</span>
                </div>
                <div>
                  <h3 className="text-[#112033] text-xl font-source-sans font-semibold">Dollar Cost Averaging</h3>
                  <p className="text-[#B99066] font-bold">Investissement régulier</p>
                </div>
              </div>
              <p className="text-[#686868] text-sm mb-4">
                Investissement mensuel automatique pour lisser les prix d'achat.
              </p>
              <ul className="space-y-2 text-sm text-[#686868]">
                <li>• Lissage des prix</li>
                <li>• Discipline d'investissement</li>
                <li>• Réduction du stress</li>
              </ul>
            </div>

            {/* Asset Allocation */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#59E2E4]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#59E2E4] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">⚖️</span>
                </div>
                <div>
                  <h3 className="text-[#112033] text-xl font-source-sans font-semibold">Asset Allocation</h3>
                  <p className="text-[#B99066] font-bold">Répartition d'actifs</p>
                </div>
              </div>
              <p className="text-[#686868] text-sm mb-4">
                Répartition entre actions, obligations et autres classes d'actifs.
              </p>
              <ul className="space-y-2 text-sm text-[#686868]">
                <li>• Gestion du risque</li>
                <li>• Optimisation rendement</li>
                <li>• Rééquilibrage périodique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Comparison Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              ETF vs Fonds traditionnels
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-[#4EBBBD] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Critères</th>
                  <th className="px-6 py-4 text-center font-semibold">ETF</th>
                  <th className="px-6 py-4 text-center font-semibold">Fonds actifs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Frais de gestion</td>
                  <td className="px-6 py-4 text-center text-[#4EBBBD] font-semibold">0.1-0.3%</td>
                  <td className="px-6 py-4 text-center">1-2%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Performance</td>
                  <td className="px-6 py-4 text-center text-[#4EBBBD] font-semibold">Rendement de l'indice</td>
                  <td className="px-6 py-4 text-center">Variable selon le gérant</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Transparence</td>
                  <td className="px-6 py-4 text-center text-[#4EBBBD] font-semibold">Composition quotidienne</td>
                  <td className="px-6 py-4 text-center">Composition mensuelle</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Liquidité</td>
                  <td className="px-6 py-4 text-center text-[#4EBBBD] font-semibold">Quotidienne</td>
                  <td className="px-6 py-4 text-center">Quotidienne</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Ticket d'entrée</td>
                  <td className="px-6 py-4 text-center text-[#4EBBBD] font-semibold">À partir de €50</td>
                  <td className="px-6 py-4 text-center">À partir de €1,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
            Prêt à investir en ETF ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans la sélection des meilleurs ETF 
            selon votre profil de risque et vos objectifs d'investissement.
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Découvrir nos ETF
          </button>
        </div>
      </section>
    </>
  );
} 