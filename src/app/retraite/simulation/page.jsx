"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function SimulationPage() {
  const chartData = [
    { label: "Pension de base estimée", value: "€1,450" },
    { label: "Pension complémentaire", value: "€850" },
    { label: "Épargne retraite", value: "€650" },
    { label: "Total mensuel", value: "€2,950" },
    { label: "Taux de remplacement", value: "78.5%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section with simulation dashboard */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
              Simulation de retraite
            </h1>
            <p className="text-[#686868] text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed max-w-4xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          
          {/* Quick Results Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-[#686868] text-sm font-medium mb-2">Lorem ipsum</h3>
              <p className="text-[#4EBBBD] text-3xl font-bold">€2,950</p>
              <p className="text-[#686868] text-sm">Dolor sit amet</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-[#686868] text-sm font-medium mb-2">Consectetur</h3>
              <p className="text-[#B99066] text-3xl font-bold">78.5%</p>
              <p className="text-[#686868] text-sm">Adipiscing elit</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-[#686868] text-sm font-medium mb-2">Sed eiusmod</h3>
              <p className="text-[#59E2E4] text-3xl font-bold">65</p>
              <p className="text-[#686868] text-sm">Tempor incididunt</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-[#686868] text-sm font-medium mb-2">Ut labore</h3>
              <p className="text-[#4EBBBD] text-3xl font-bold">€850K</p>
              <p className="text-[#686868] text-sm">Dolore magna</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67A5A] transition-colors duration-200">
              Lancer ma simulation
            </button>
            <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-[#B99066] hover:text-white transition-colors duration-200">
              Voir les exemples
            </button>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Répartition de la pension de retraite"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Advanced Simulation Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Lorem ipsum dolor sit amet
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Simulation Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                Lorem ipsum dolor sit
              </h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#686868] text-sm font-medium mb-2">
                      Lorem ipsum
                    </label>
                    <input 
                      type="number" 
                      placeholder="35"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-[#686868] text-sm font-medium mb-2">
                      Dolor sit amet
                    </label>
                    <input 
                      type="number" 
                      placeholder="€45,000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#686868] text-sm font-medium mb-2">
                      Consectetur elit
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent">
                      <option>Lorem ipsum</option>
                      <option>Dolor sit amet</option>
                      <option>Consectetur elit</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#686868] text-sm font-medium mb-2">
                      Sed eiusmod
                    </label>
                    <input 
                      type="number" 
                      placeholder="42"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Ut labore et dolore
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent">
                    <option>60 ans</option>
                    <option>62 ans</option>
                    <option>65 ans</option>
                    <option>67 ans</option>
                  </select>
                </div>

                <button className="w-full bg-[#4EBBBD] text-white py-3 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200">
                  Lorem ipsum dolor sit
                </button>
              </div>
            </div>

            {/* Right: Results Display */}
            <div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-8">
                Lorem ipsum dolor sit amet
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#4EBBBD]">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-[#112033] font-source-sans font-semibold">Lorem ipsum dolor</h4>
                    <span className="text-[#4EBBBD] font-bold text-xl">€1,450</span>
                  </div>
                  <p className="text-[#686868] text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#B99066]">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-[#112033] font-source-sans font-semibold">Consectetur adipiscing</h4>
                    <span className="text-[#B99066] font-bold text-xl">€850</span>
                  </div>
                  <p className="text-[#686868] text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#59E2E4]">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-[#112033] font-source-sans font-semibold">Sed do eiusmod</h4>
                    <span className="text-[#59E2E4] font-bold text-xl">€650</span>
                  </div>
                  <p className="text-[#686868] text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg p-6 text-white text-center">
                  <h4 className="font-source-sans font-semibold mb-2">Lorem ipsum dolor sit amet</h4>
                  <p className="text-3xl font-bold">€2,950</p>
                  <p className="text-sm opacity-90">Consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Lorem ipsum dolor sit amet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Scenario 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-2">Lorem ipsum</h3>
                <p className="text-[#B99066] font-bold text-lg">€3,200</p>
              </div>
              <p className="text-[#686868] text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <ul className="space-y-2 text-sm text-[#686868]">
                <li>• Lorem ipsum dolor sit</li>
                <li>• Consectetur adipiscing</li>
                <li>• Sed do eiusmod tempor</li>
              </ul>
            </div>

            {/* Scenario 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚖️</span>
                </div>
                <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-2">Dolor sit amet</h3>
                <p className="text-[#B99066] font-bold text-lg">€2,950</p>
              </div>
              <p className="text-[#686868] text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <ul className="space-y-2 text-sm text-[#686868]">
                <li>• Lorem ipsum dolor sit</li>
                <li>• Consectetur adipiscing</li>
                <li>• Sed do eiusmod tempor</li>
              </ul>
            </div>

            {/* Scenario 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📉</span>
                </div>
                <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-2">Consectetur elit</h3>
                <p className="text-[#B99066] font-bold text-lg">€2,400</p>
              </div>
              <p className="text-[#686868] text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <ul className="space-y-2 text-sm text-[#686868]">
                <li>• Lorem ipsum dolor sit</li>
                <li>• Consectetur adipiscing</li>
                <li>• Sed do eiusmod tempor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Tips Content */}
            <div>
              <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-8">
                Lorem ipsum dolor sit amet
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#4EBBBD] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">💡</span>
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
                    <span className="text-white font-bold">📊</span>
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
                    <span className="text-white font-bold">🎯</span>
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

            {/* Right: Comparison Chart */}
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
            Commencer ma simulation
          </button>
        </div>
      </section>
    </>
  );
} 