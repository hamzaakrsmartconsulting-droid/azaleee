"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function DonationOnereusePage() {
  const chartData = [
    { label: "Valeur moyenne", value: "€250,000" },
    { label: "Taux d'imposition", value: "2.5%" },
    { label: "Économies fiscales", value: "€42,500" },
    { label: "Durée de conservation", value: "20 ans" },
    { label: "Rendement moyen", value: "6.8%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section with onerous donation visualization */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
                Donation onéreuse
              </h1>
              <p className="text-[#686868] text-lg font-inter leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#B99066] text-white px-6 py-3 rounded-lg shadow-lg font-inter font-medium hover:bg-[#A67A5A] transition-colors duration-200">
                  Évaluer ma donation
                </button>
                <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-6 py-3 rounded-lg font-inter font-medium hover:bg-[#B99066] hover:text-white transition-colors duration-200">
                  Consulter un expert
                </button>
              </div>
            </div>
            
            {/* Right: Onerous Donation Comparison */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">💼</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">Lorem ipsum</h3>
                  <p className="text-[#B99066] text-2xl font-bold mb-2">€250K</p>
                  <p className="text-[#686868] text-xs">Dolor sit amet</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">📊</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">Consectetur</h3>
                  <p className="text-[#B99066] text-2xl font-bold mb-2">2.5%</p>
                  <p className="text-[#686868] text-xs">Adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Indicateurs de donation onéreuse"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Onerous Donation Process Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Lorem ipsum dolor sit amet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">📋</span>
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
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl">⚖️</span>
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
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#59E2E4] text-2xl">💰</span>
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
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Lorem ipsum dolor sit amet
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-[#4EBBBD] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Lorem ipsum</th>
                  <th className="px-6 py-4 text-center font-semibold">Dolor sit</th>
                  <th className="px-6 py-4 text-center font-semibold">Consectetur</th>
                  <th className="px-6 py-4 text-center font-semibold">Sed eiusmod</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Lorem ipsum dolor</td>
                  <td className="px-6 py-4 text-center text-[#4EBBBD] font-semibold">€250,000</td>
                  <td className="px-6 py-4 text-center">€100,000</td>
                  <td className="px-6 py-4 text-center">€150,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Consectetur adipiscing</td>
                  <td className="px-6 py-4 text-center text-[#4EBBBD] font-semibold">2.5%</td>
                  <td className="px-6 py-4 text-center">5-45%</td>
                  <td className="px-6 py-4 text-center">3.5%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Sed do eiusmod</td>
                  <td className="px-6 py-4 text-center text-[#4EBBBD] font-semibold">20 ans</td>
                  <td className="px-6 py-4 text-center">15 ans</td>
                  <td className="px-6 py-4 text-center">18 ans</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Ut labore et dolore</td>
                  <td className="px-6 py-4 text-center text-[#4EBBBD] font-semibold">€42,500</td>
                  <td className="px-6 py-4 text-center">€35,000</td>
                  <td className="px-6 py-4 text-center">€38,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits Analysis Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Benefits Content */}
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

            {/* Right: Benefits Calculator */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                Lorem ipsum dolor sit
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Lorem ipsum
                  </label>
                  <input 
                    type="number" 
                    placeholder="€250,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Dolor sit amet
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent">
                    <option>Lorem ipsum dolor</option>
                    <option>Consectetur adipiscing</option>
                    <option>Sed do eiusmod</option>
                    <option>Ut labore et dolore</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Consectetur elit
                  </label>
                  <input 
                    type="number" 
                    placeholder="30"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>

                <button className="w-full bg-[#4EBBBD] text-white py-3 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200">
                  Lorem ipsum dolor sit
                </button>

                <div className="bg-[#FAFFEF] rounded-lg p-4 text-center">
                  <p className="text-[#686868] text-sm">
                    <strong>Lorem ipsum :</strong><br />
                    <span className="text-[#4EBBBD] text-xl font-bold">€42,500</span> d'économies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Framework Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Lorem ipsum dolor sit amet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📜</span>
                </div>
                <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-2">Lorem ipsum</h3>
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

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚖️</span>
                </div>
                <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-2">Dolor sit amet</h3>
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

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-2">Consectetur elit</h3>
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
            Évaluer ma donation
          </button>
        </div>
      </section>
    </>
  );
} 