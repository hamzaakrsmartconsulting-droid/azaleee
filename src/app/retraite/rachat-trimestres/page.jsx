"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function RachatTrimestresPage() {
  const chartData = [
    { label: "Coût moyen par trimestre", value: "€1,250" },
    { label: "Trimestres rachetables", value: "12 max" },
    { label: "Économie moyenne", value: "€8,500" },
    { label: "Durée de versement", value: "3 ans" },
    { label: "Rendement estimé", value: "15.2%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section with calculator visualization */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
                Rachat de trimestres
              </h1>
              <p className="text-[#686868] text-lg font-inter leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#B99066] text-white px-6 py-3 rounded-lg shadow-lg font-inter font-medium hover:bg-[#A67A5A] transition-colors duration-200">
                  Simuler mon rachat
                </button>
                <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-6 py-3 rounded-lg font-inter font-medium hover:bg-[#B99066] hover:text-white transition-colors duration-200">
                  En savoir plus
                </button>
              </div>
            </div>
            
            {/* Right: Quick Calculator */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                  Calculateur rapide
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-[#686868] text-sm font-medium mb-2">
                      Nombre de trimestres
                    </label>
                    <input 
                      type="number" 
                      placeholder="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-[#686868] text-sm font-medium mb-2">
                      Âge actuel
                    </label>
                    <input 
                      type="number" 
                      placeholder="45"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>

                  <button className="w-full bg-[#4EBBBD] text-white py-3 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200">
                    Calculer le coût
                  </button>

                  <div className="bg-[#FAFFEF] rounded-lg p-4 text-center">
                    <p className="text-[#686868] text-sm">
                      <strong>Coût estimé :</strong><br />
                      <span className="text-[#4EBBBD] text-xl font-bold">€5,000</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Économies de rachat de trimestres"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Benefits Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Avantages du rachat
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">⏰</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Lorem ipsum</h3>
              </div>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Lorem ipsum dolor sit</li>
                <li>• Consectetur adipiscing</li>
                <li>• Sed do eiusmod tempor</li>
                <li>• Ut labore et dolore</li>
              </ul>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Dolor sit amet</h3>
              </div>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Lorem ipsum dolor sit</li>
                <li>• Consectetur adipiscing</li>
                <li>• Sed do eiusmod tempor</li>
                <li>• Ut labore et dolore</li>
              </ul>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#59E2E4] text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Consectetur elit</h3>
              </div>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Lorem ipsum dolor sit</li>
                <li>• Consectetur adipiscing</li>
                <li>• Sed do eiusmod tempor</li>
                <li>• Ut labore et dolore</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Eligibility Criteria */}
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

            {/* Right: Cost Breakdown */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                Lorem ipsum dolor sit
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#686868] text-sm">Lorem ipsum</span>
                  <span className="text-[#4EBBBD] font-semibold">€1,250</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#4EBBBD] h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[#686868] text-sm">Dolor sit amet</span>
                  <span className="text-[#B99066] font-semibold">€2,100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#B99066] h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[#686868] text-sm">Consectetur elit</span>
                  <span className="text-[#59E2E4] font-semibold">€3,200</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#59E2E4] h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Lorem ipsum dolor sit amet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">1</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Lorem ipsum
              </h3>
              <p className="text-[#686868] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">2</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Dolor sit amet
              </h3>
              <p className="text-[#686868] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">3</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Consectetur elit
              </h3>
              <p className="text-[#686868] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">4</span>
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
            Simuler maintenant
          </button>
        </div>
      </section>
    </>
  );
} 