"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function PlanRetraitePage() {
  const chartData = [
    { label: "Âge de départ moyen", value: "62.5 ans" },
    { label: "Montant moyen par mois", value: "€1,850" },
    { label: "Taux de remplacement", value: "74.2%" },
    { label: "Durée de cotisation", value: "42 ans" },
    { label: "Espérance de vie", value: "85.3 ans" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section with timeline visualization */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
              Planification de la retraite
            </h1>
            <p className="text-[#686868] text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed max-w-4xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          
          {/* Timeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center relative">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">Évaluation</h3>
              <p className="text-[#686868] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center relative">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">Stratégie</h3>
              <p className="text-[#686868] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center relative">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">Mise en œuvre</h3>
              <p className="text-[#686868] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67A5A] transition-colors duration-200">
              Commencer ma planification
            </button>
            <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-[#B99066] hover:text-white transition-colors duration-200">
              Télécharger le guide
            </button>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Indicateurs de retraite"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Planning Phases Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Phases de planification
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Planning Steps */}
            <div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-8">
                Lorem ipsum dolor sit amet
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-3">
                      Lorem ipsum dolor sit
                    </h4>
                    <p className="text-[#686868] text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#B99066] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-3">
                      Consectetur adipiscing elit
                    </h4>
                    <p className="text-[#686868] text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#59E2E4] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-3">
                      Sed do eiusmod tempor
                    </h4>
                    <p className="text-[#686868] text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Planning Calculator */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                Simulateur de retraite
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Âge actuel
                  </label>
                  <input 
                    type="number" 
                    placeholder="35"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Revenu annuel
                  </label>
                  <input 
                    type="number" 
                    placeholder="€45,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Âge de départ souhaité
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent">
                    <option>60 ans</option>
                    <option>62 ans</option>
                    <option>65 ans</option>
                    <option>67 ans</option>
                  </select>
                </div>

                <button className="w-full bg-[#4EBBBD] text-white py-3 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200">
                  Calculer ma retraite
                </button>

                <div className="bg-[#FAFFEF] rounded-lg p-4 text-center">
                  <p className="text-[#686868] text-sm">
                    <strong>Pension estimée :</strong><br />
                    <span className="text-[#4EBBBD] text-xl font-bold">€2,150</span> par mois
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retirement Products Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Solutions de retraite
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏦</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Lorem ipsum
              </h3>
              <p className="text-[#686868] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Dolor sit amet
              </h3>
              <p className="text-[#686868] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Consectetur elit
              </h3>
              <p className="text-[#686868] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Sed eiusmod
              </h3>
              <p className="text-[#686868] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Advice Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Expert Content */}
            <div>
              <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-8">
                Lorem ipsum dolor sit amet
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#4EBBBD] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Lorem ipsum dolor sit
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Consectetur adipiscing elit
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#59E2E4] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Sed do eiusmod tempor
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Statistics */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                Lorem ipsum dolor sit
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#686868] text-sm">Lorem ipsum</span>
                  <span className="text-[#4EBBBD] font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#4EBBBD] h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[#686868] text-sm">Dolor sit amet</span>
                  <span className="text-[#B99066] font-semibold">72%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#B99066] h-2 rounded-full" style={{width: '72%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[#686868] text-sm">Consectetur elit</span>
                  <span className="text-[#59E2E4] font-semibold">68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#59E2E4] h-2 rounded-full" style={{width: '68%'}}></div>
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
            Lorem ipsum dolor sit amet ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Commencer maintenant
          </button>
        </div>
      </section>
    </>
  );
} 