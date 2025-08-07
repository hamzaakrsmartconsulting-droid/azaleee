"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function ConseilsPage() {
  const chartData = [
    { label: "Conseils personnalisés", value: "25+" },
    { label: "Taux de satisfaction", value: "98.3%" },
    { label: "Économies moyennes", value: "€65,000" },
    { label: "Durée de conseil", value: "6-12 mois" },
    { label: "Suivi personnalisé", value: "100%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section with advice visualization */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
                Conseils patrimoniaux
              </h1>
              <p className="text-[#686868] text-lg font-inter leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#B99066] text-white px-6 py-3 rounded-lg shadow-lg font-inter font-medium hover:bg-[#A67A5A] transition-colors duration-200">
                  Prendre rendez-vous
                </button>
                <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-6 py-3 rounded-lg font-inter font-medium hover:bg-[#B99066] hover:text-white transition-colors duration-200">
                  Consulter nos experts
                </button>
              </div>
            </div>
            
            {/* Right: Advice Categories */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">💡</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">Lorem ipsum</h3>
                  <p className="text-[#B99066] text-2xl font-bold mb-2">25+</p>
                  <p className="text-[#686868] text-xs">Dolor sit amet</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">📊</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">Consectetur</h3>
                  <p className="text-[#B99066] text-2xl font-bold mb-2">98.3%</p>
                  <p className="text-[#686868] text-xs">Adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Indicateurs de conseils"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Advice Categories Section */}
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
                  <span className="text-[#4EBBBD] text-2xl">💼</span>
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

            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#59E2E4] text-2xl">🛡️</span>
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

      {/* Expert Team Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
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

            {/* Right: Expert Profiles */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                Lorem ipsum dolor sit
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">👨‍💼</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-semibold">Lorem ipsum</h4>
                    <p className="text-[#686868] text-sm">Dolor sit amet</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">👩‍💼</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-semibold">Consectetur</h4>
                    <p className="text-[#686868] text-sm">Adipiscing elit</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">👨‍💼</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-semibold">Sed eiusmod</h4>
                    <p className="text-[#686868] text-sm">Tempor incididunt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process Section */}
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
                <span className="text-white text-2xl">📋</span>
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
                <span className="text-white text-2xl">🔍</span>
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
                <span className="text-white text-2xl">⚙️</span>
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
                <span className="text-white text-2xl">✅</span>
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

      {/* Success Stories Section */}
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
                  <span className="text-white text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-2">Lorem ipsum</h3>
              </div>
              <p className="text-[#686868] text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <div className="text-center">
                <p className="text-[#4EBBBD] font-bold text-lg">€65,000</p>
                <p className="text-[#686868] text-sm">Dolor sit amet</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👨‍👩‍👦‍👦</span>
                </div>
                <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-2">Dolor sit amet</h3>
              </div>
              <p className="text-[#686868] text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <div className="text-center">
                <p className="text-[#B99066] font-bold text-lg">€78,000</p>
                <p className="text-[#686868] text-sm">Consectetur elit</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👨‍👩‍👧‍👧</span>
                </div>
                <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-2">Consectetur elit</h3>
              </div>
              <p className="text-[#686868] text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <div className="text-center">
                <p className="text-[#59E2E4] font-bold text-lg">€92,000</p>
                <p className="text-[#686868] text-sm">Sed eiusmod</p>
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
            Prendre rendez-vous
          </button>
        </div>
      </section>
    </>
  );
} 