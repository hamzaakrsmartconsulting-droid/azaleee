"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function BourseActionsPage() {
  const chartData = [
    { label: "Performance CAC 40 (YTD)", value: "+12.5%" },
    { label: "Volatilité moyenne", value: "18.2%" },
    { label: "Dividende moyen", value: "3.2%" },
    { label: "Frais de transaction", value: "0.1%" },
    { label: "Performance sur 5 ans", value: "+45.8%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section with market data */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
              Investissement en Actions
            </h1>
            <p className="text-[#686868] text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed max-w-4xl mx-auto">
              Participez à la croissance des entreprises et construisez un patrimoine sur le long terme
            </p>
          </div>
          
          {/* Market Data Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-[#686868] text-sm font-medium mb-2">CAC 40</h3>
              <p className="text-[#28A745] text-2xl font-bold">7,245.69</p>
              <p className="text-[#28A745] text-sm">+1.2%</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-[#686868] text-sm font-medium mb-2">S&P 500</h3>
              <p className="text-[#28A745] text-2xl font-bold">4,783.35</p>
              <p className="text-[#28A745] text-sm">+0.8%</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-[#686868] text-sm font-medium mb-2">DAX</h3>
              <p className="text-red-500 text-2xl font-bold">16,789.76</p>
              <p className="text-red-500 text-sm">-0.3%</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-[#686868] text-sm font-medium mb-2">FTSE 100</h3>
              <p className="text-[#28A745] text-2xl font-bold">7,689.12</p>
              <p className="text-[#28A745] text-sm">+0.5%</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67A5A] transition-colors duration-200">
              Commencer à investir
            </button>
            <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-[#B99066] hover:text-white transition-colors duration-200">
              Voir nos analyses
            </button>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Performance des marchés actions"
        data={chartData}
        chartImage="/images/cac40-chart-image-4f18b8.png"
      />

      {/* Investment Strategies Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Stratégies d'investissement en actions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Value Investing */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Value Investing</h3>
              </div>
              <p className="text-sm mb-4">
                Investir dans des entreprises sous-évaluées par rapport à leur valeur intrinsèque.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Analyse fondamentale</li>
                <li>• Ratio P/E bas</li>
                <li>• Dividendes élevés</li>
                <li>• Vision long terme</li>
              </ul>
            </div>

            {/* Growth Investing */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl">📈</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Growth Investing</h3>
              </div>
              <p className="text-sm mb-4">
                Investir dans des entreprises à forte croissance des revenus et bénéfices.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Croissance rapide</li>
                <li>• Secteurs innovants</li>
                <li>• Réinvestissement des bénéfices</li>
                <li>• Potentiel de hausse</li>
              </ul>
            </div>

            {/* Dividend Investing */}
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#59E2E4] text-2xl">💎</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Dividend Investing</h3>
              </div>
              <p className="text-sm mb-4">
                Se concentrer sur les entreprises qui versent des dividendes réguliers.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Revenus réguliers</li>
                <li>• Entreprises matures</li>
                <li>• Stabilité financière</li>
                <li>• Croissance des dividendes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Risk Management */}
            <div>
              <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-8">
                Gestion des risques
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Diversification
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Répartissez vos investissements entre différents secteurs, 
                      géographies et tailles d'entreprises.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B99066] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Investissement régulier
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Utilisez la technique du dollar-cost averaging pour lisser 
                      les effets de la volatilité.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#59E2E4] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Horizon long terme
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Investissez avec une vision de 5 à 10 ans minimum pour 
                      surmonter les cycles de marché.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Risk Level Chart */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                Niveaux de risque par type d'investissement
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#686868] text-sm">Livrets d'épargne</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-[#28A745] rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-[#686868] text-sm">Obligations</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-[#28A745] rounded"></div>
                    <div className="w-4 h-4 bg-[#28A745] rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-[#686868] text-sm">Actions blue chips</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-[#B99066] rounded"></div>
                    <div className="w-4 h-4 bg-[#B99066] rounded"></div>
                    <div className="w-4 h-4 bg-[#B99066] rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-[#686868] text-sm">Actions de croissance</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-[#4EBBBD] rounded"></div>
                    <div className="w-4 h-4 bg-[#4EBBBD] rounded"></div>
                    <div className="w-4 h-4 bg-[#4EBBBD] rounded"></div>
                    <div className="w-4 h-4 bg-[#4EBBBD] rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Sectors Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Secteurs d'investissement prometteurs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg p-6 text-white text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#4EBBBD] text-xl">💻</span>
              </div>
              <h3 className="font-semibold mb-2">Technologie</h3>
              <p className="text-sm opacity-90">IA, Cloud, Cybersécurité</p>
            </div>

            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg p-6 text-white text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#B99066] text-xl">🌱</span>
              </div>
              <h3 className="font-semibold mb-2">Énergies vertes</h3>
              <p className="text-sm opacity-90">Renouvelables, Stockage</p>
            </div>

            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg p-6 text-white text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#59E2E4] text-xl">🏥</span>
              </div>
              <h3 className="font-semibold mb-2">Santé</h3>
              <p className="text-sm opacity-90">Biotech, Médical</p>
            </div>

            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#B99066] rounded-lg p-6 text-white text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#4EBBBD] text-xl">🏦</span>
              </div>
              <h3 className="font-semibold mb-2">Finance</h3>
              <p className="text-sm opacity-90">Banques, Assurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
            Prêt à investir en actions ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans la construction de votre portefeuille actions 
            selon votre profil de risque et vos objectifs d'investissement.
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Démarrer mon investissement
          </button>
        </div>
      </section>
    </>
  );
} 