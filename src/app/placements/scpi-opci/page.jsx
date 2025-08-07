"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function ScpiOpciPage() {
  const chartData = [
    { label: "Rendement moyen SCPI", value: "5.8%" },
    { label: "Durée moyenne d'investissement", value: "8-10 ans" },
    { label: "Ticket d'entrée moyen", value: "€5,000" },
    { label: "Frais d'entrée", value: "10-15%" },
    { label: "Performance sur 5 ans", value: "+28.5%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section with building visualization */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold leading-tight mb-6">
                SCPI & OPCI - Investissement immobilier collectif
              </h1>
              <p className="text-[#686868] text-lg font-inter leading-relaxed mb-8">
                Investissez dans l'immobilier sans les contraintes de gestion directe. 
                Les SCPI et OPCI vous permettent de détenir des parts de portefeuilles immobiliers diversifiés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#B99066] text-white px-6 py-3 rounded-lg shadow-lg font-inter font-medium hover:bg-[#A67A5A] transition-colors duration-200">
                  Découvrir nos SCPI
                </button>
                <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-6 py-3 rounded-lg font-inter font-medium hover:bg-[#B99066] hover:text-white transition-colors duration-200">
                  Comparer les solutions
                </button>
              </div>
            </div>
            
            {/* Right: Building Visualization */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#4EBBBD] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🏢</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">SCPI</h3>
                  <p className="text-[#686868] text-sm">Société Civile de Placement Immobilier</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#B99066] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🏗️</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">OPCI</h3>
                  <p className="text-[#686868] text-sm">Organisme de Placement Collectif Immobilier</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Performance des SCPI et OPCI"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* SCPI vs OPCI Comparison */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              SCPI vs OPCI : Quelle solution choisir ?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SCPI */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-3xl">🏢</span>
                </div>
                <h3 className="text-3xl font-source-sans font-semibold mb-2">SCPI</h3>
                <p className="text-xl font-bold">5.8% de rendement moyen</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  <span className="text-sm">Investissement direct en immobilier</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  <span className="text-sm">Liquidité limitée (rachat trimestriel)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  <span className="text-sm">Fiscalité avantageuse après 8 ans</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  <span className="text-sm">Ticket d'entrée accessible</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  <span className="text-sm">Gestion déléguée</span>
                </div>
              </div>
            </div>

            {/* OPCI */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-3xl">🏗️</span>
                </div>
                <h3 className="text-3xl font-source-sans font-semibold mb-2">OPCI</h3>
                <p className="text-xl font-bold">4.2% de rendement moyen</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  <span className="text-sm">Liquidité quotidienne</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  <span className="text-sm">Investissement en titres</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  <span className="text-sm">Fiscalité des actions</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  <span className="text-sm">Plus grande flexibilité</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  <span className="text-sm">Cotation en bourse</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Comment investir en SCPI/OPCI ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">
                Choisir sa SCPI/OPCI
              </h3>
              <p className="text-[#686868] text-sm">
                Sélectionnez selon vos objectifs : rendement, croissance, diversification géographique ou sectorielle.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">
                Souscrire
              </h3>
              <p className="text-[#686868] text-sm">
                Effectuez votre souscription auprès de votre conseiller ou en ligne selon les modalités.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">
                Recevoir les revenus
              </h3>
              <p className="text-[#686868] text-sm">
                Percevez régulièrement les loyers générés par votre investissement immobilier.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">
                Suivre l'évolution
              </h3>
              <p className="text-[#686868] text-sm">
                Suivez la valorisation de vos parts et la performance de votre investissement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCPI Categories Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Types de SCPI disponibles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bureaux */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#4EBBBD]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#4EBBBD] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-[#112033] text-xl font-source-sans font-semibold">Bureaux</h3>
                  <p className="text-[#B99066] font-bold">6.2% de rendement</p>
                </div>
              </div>
              <p className="text-[#686868] text-sm mb-4">
                Investissement dans des immeubles de bureaux en zones dynamiques.
              </p>
              <ul className="space-y-2 text-sm text-[#686868]">
                <li>• Zones d'activité dynamiques</li>
                <li>• Baux commerciaux longs</li>
                <li>• Revalorisation régulière</li>
              </ul>
            </div>

            {/* Commerce */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#B99066]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#B99066] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🛍️</span>
                </div>
                <div>
                  <h3 className="text-[#112033] text-xl font-source-sans font-semibold">Commerce</h3>
                  <p className="text-[#B99066] font-bold">5.8% de rendement</p>
                </div>
              </div>
              <p className="text-[#686868] text-sm mb-4">
                Centres commerciaux, galeries marchandes et commerces de proximité.
              </p>
              <ul className="space-y-2 text-sm text-[#686868]">
                <li>• Emplacements stratégiques</li>
                <li>• Diversification des commerçants</li>
                <li>• Revenus stables</li>
              </ul>
            </div>

            {/* Logistique */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#59E2E4]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#59E2E4] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📦</span>
                </div>
                <div>
                  <h3 className="text-[#112033] text-xl font-source-sans font-semibold">Logistique</h3>
                  <p className="text-[#B99066] font-bold">6.5% de rendement</p>
                </div>
              </div>
              <p className="text-[#686868] text-sm mb-4">
                Entrepôts, plateformes logistiques et centres de distribution.
              </p>
              <ul className="space-y-2 text-sm text-[#686868]">
                <li>• Croissance e-commerce</li>
                <li>• Baux longs terme</li>
                <li>• Forte demande</li>
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
                Les avantages des SCPI/OPCI
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#4EBBBD] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Accessibilité
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Investissez dans l'immobilier avec des montants réduits, 
                      à partir de quelques milliers d'euros.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Diversification
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Accédez à des portefeuilles immobiliers diversifiés géographiquement 
                      et sectoriellement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#59E2E4] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Gestion déléguée
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Profitez d'une gestion professionnelle sans vous occuper 
                      de la gestion locative.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Performance Chart */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                Performance historique
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#686868] text-sm">SCPI Bureaux</span>
                  <span className="text-[#4EBBBD] font-semibold">+6.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#4EBBBD] h-2 rounded-full" style={{width: '62%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[#686868] text-sm">SCPI Commerce</span>
                  <span className="text-[#B99066] font-semibold">+5.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#B99066] h-2 rounded-full" style={{width: '58%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[#686868] text-sm">SCPI Logistique</span>
                  <span className="text-[#59E2E4] font-semibold">+6.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#59E2E4] h-2 rounded-full" style={{width: '65%'}}></div>
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
            Prêt à investir dans l'immobilier collectif ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans la sélection des meilleures SCPI et OPCI 
            selon votre profil d'investisseur et vos objectifs.
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Découvrir nos solutions
          </button>
        </div>
      </section>
    </>
  );
} 