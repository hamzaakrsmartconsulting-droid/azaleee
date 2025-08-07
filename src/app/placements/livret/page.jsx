"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function LivretPage() {
  const chartData = [
    { label: "Taux de rémunération actuel", value: "3.0%" },
    { label: "Plafond de versement", value: "€22,950" },
    { label: "Montant moyen détenu", value: "€15,200" },
    { label: "Frais de gestion", value: "0%" },
    { label: "Performance annuelle", value: "+3.0%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section with split layout */}
      <section className="relative w-full min-h-[500px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold leading-tight mb-6">
                Livret A et autres livrets d'épargne
              </h1>
              <p className="text-[#686868] text-lg font-inter leading-relaxed mb-8">
                Les livrets d'épargne réglementés offrent une solution d'épargne sécurisée 
                avec des avantages fiscaux. Découvrez nos conseils pour optimiser votre épargne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#B99066] text-white px-6 py-3 rounded-lg shadow-lg font-inter font-medium hover:bg-[#A67A5A] transition-colors duration-200">
                  Simuler mon épargne
                </button>
                <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-6 py-3 rounded-lg font-inter font-medium hover:bg-[#B99066] hover:text-white transition-colors duration-200">
                  En savoir plus
                </button>
              </div>
            </div>
            
            {/* Right: Livret Cards */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Livret A */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-2">
                    Livret A
                  </h3>
                  <p className="text-[#B99066] text-2xl font-bold mb-2">3.0%</p>
                  <p className="text-[#686868] text-xs">
                    Plafond : €22,950
                  </p>
                </div>

                {/* LDDS */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">D</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-2">
                    LDDS
                  </h3>
                  <p className="text-[#B99066] text-2xl font-bold mb-2">3.0%</p>
                  <p className="text-[#686868] text-xs">
                    Plafond : €12,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Évolution des taux des livrets"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Livret Types Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Les différents types de livrets
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Livret A */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] font-bold text-2xl">A</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Livret A</h3>
                <p className="text-3xl font-bold">3.0%</p>
              </div>
              <ul className="space-y-3 text-sm">
                <li>• Plafond : €22,950</li>
                <li>• Versements libres</li>
                <li>• Retraits à tout moment</li>
                <li>• Intérêts exonérés d'impôts</li>
                <li>• Garantie de l'État</li>
              </ul>
            </div>

            {/* LDDS */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] font-bold text-2xl">D</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">LDDS</h3>
                <p className="text-3xl font-bold">3.0%</p>
              </div>
              <ul className="space-y-3 text-sm">
                <li>• Plafond : €12,000</li>
                <li>• Versements libres</li>
                <li>• Retraits à tout moment</li>
                <li>• Intérêts exonérés d'impôts</li>
                <li>• Garantie de l'État</li>
              </ul>
            </div>

            {/* LEP */}
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#59E2E4] font-bold text-2xl">E</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">LEP</h3>
                <p className="text-3xl font-bold">5.0%</p>
              </div>
              <ul className="space-y-3 text-sm">
                <li>• Plafond : €10,000</li>
                <li>• Réservé aux revenus modestes</li>
                <li>• Retraits à tout moment</li>
                <li>• Intérêts exonérés d'impôts</li>
                <li>• Garantie de l'État</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Stratégie d'épargne optimisée
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Strategy Steps */}
            <div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-8">
                Comment optimiser votre épargne ?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#4EBBBD] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Commencez par le Livret A
                    </h4>
                    <p className="text-[#686868] text-sm">
                      Remplissez d'abord votre Livret A jusqu'au plafond de €22,950 
                      pour bénéficier du taux de 3% garanti.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Complétez avec le LDDS
                    </h4>
                    <p className="text-[#686868] text-sm">
                      Si vous êtes éligible, ouvrez un LDDS pour placer jusqu'à €12,000 
                      supplémentaires au même taux.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#59E2E4] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Vérifiez l'éligibilité LEP
                    </h4>
                    <p className="text-[#686868] text-sm">
                      Si vos revenus le permettent, le LEP offre un taux de 5% 
                      sur un plafond de €10,000.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Calculator */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                Simulateur d'épargne
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Montant à épargner
                  </label>
                  <input 
                    type="number" 
                    placeholder="€10,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Durée d'épargne
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent">
                    <option>1 an</option>
                    <option>2 ans</option>
                    <option>5 ans</option>
                    <option>10 ans</option>
                  </select>
                </div>

                <button className="w-full bg-[#4EBBBD] text-white py-3 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200">
                  Calculer mes intérêts
                </button>

                <div className="bg-[#FAFFEF] rounded-lg p-4 text-center">
                  <p className="text-[#686868] text-sm">
                    <strong>Résultat estimé :</strong><br />
                    <span className="text-[#4EBBBD] text-xl font-bold">€300</span> d'intérêts par an
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Conseils d'experts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Épargnez régulièrement
              </h3>
              <p className="text-[#686868] text-sm">
                Même de petits montants réguliers peuvent faire une grande différence à long terme
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Respectez les plafonds
              </h3>
              <p className="text-[#686868] text-sm">
                Optimisez vos placements en respectant les plafonds de chaque livret
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Surveillez les taux
              </h3>
              <p className="text-[#686868] text-sm">
                Les taux peuvent évoluer, restez informé des changements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Diversifiez
              </h3>
              <p className="text-[#686868] text-sm">
                Combinez livrets avec d'autres placements pour optimiser votre rendement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
            Optimisez votre épargne dès aujourd'hui
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nos conseillers vous aident à structurer votre épargne et à choisir 
            les meilleurs livrets selon votre situation.
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Prendre rendez-vous
          </button>
        </div>
      </section>
    </>
  );
} 