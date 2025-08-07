"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function AutresPage() {
  const chartData = [
    { label: "Performance moyenne", value: "6.8%" },
    { label: "Nombre de produits", value: "150+" },
    { label: "Ticket d'entrée moyen", value: "€10,000" },
    { label: "Frais de gestion", value: "1.5%" },
    { label: "Performance sur 5 ans", value: "+28.5%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section with diverse products */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
              Autres Solutions de Placement
            </h1>
            <p className="text-[#686868] text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed max-w-4xl mx-auto">
              Découvrez nos solutions d'investissement alternatives et spécialisées
            </p>
          </div>
          
          {/* Product Categories Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏛️</span>
              </div>
              <h3 className="text-[#112033] text-lg font-semibold mb-2">Private Equity</h3>
              <p className="text-[#686868] text-sm">Investissement dans des entreprises non cotées</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌾</span>
              </div>
              <h3 className="text-[#112033] text-lg font-semibold mb-2">Foncière Agricole</h3>
              <p className="text-[#686868] text-sm">Investissement dans les terres agricoles</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💎</span>
              </div>
              <h3 className="text-[#112033] text-lg font-semibold mb-2">Matières Premières</h3>
              <p className="text-[#686868] text-sm">Or, argent, pétrole et autres commodités</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-[#112033] text-lg font-semibold mb-2">Art & Collection</h3>
              <p className="text-[#686868] text-sm">Œuvres d'art et objets de collection</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67A5A] transition-colors duration-200">
              Découvrir nos solutions
            </button>
            <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-[#B99066] hover:text-white transition-colors duration-200">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Performance des placements alternatifs"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Alternative Investments Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Solutions d'investissement alternatives
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Private Equity */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">🏛️</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Private Equity</h3>
              </div>
              <p className="text-sm mb-4">
                Investissement dans des entreprises non cotées en phase de croissance.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Potentiel de croissance élevé</li>
                <li>• Durée d'investissement : 5-10 ans</li>
                <li>• Ticket d'entrée : €50,000+</li>
                <li>• Gestion déléguée</li>
              </ul>
            </div>

            {/* Agricultural Real Estate */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl">🌾</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Foncière Agricole</h3>
              </div>
              <p className="text-sm mb-4">
                Investissement dans des terres agricoles et exploitations.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Revenus locatifs stables</li>
                <li>• Plus-value foncière</li>
                <li>• Diversification géographique</li>
                <li>• Impact environnemental positif</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commodities Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Matières premières et métaux précieux
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gold */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🥇</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">Or</h3>
              <p className="text-[#B99066] font-bold text-lg mb-4">+15.2% sur 1 an</p>
              <p className="text-[#686868] text-sm mb-4">
                Valeur refuge par excellence, protection contre l'inflation.
              </p>
              <ul className="space-y-2 text-sm text-[#686868]">
                <li>• Actif refuge</li>
                <li>• Protection inflation</li>
                <li>• Diversification</li>
              </ul>
            </div>

            {/* Silver */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🥈</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">Argent</h3>
              <p className="text-[#B99066] font-bold text-lg mb-4">+8.7% sur 1 an</p>
              <p className="text-[#686868] text-sm mb-4">
                Métal industriel et précieux, usage technologique.
              </p>
              <ul className="space-y-2 text-sm text-[#686868]">
                <li>• Usage industriel</li>
                <li>• Volatilité élevée</li>
                <li>• Potentiel de croissance</li>
              </ul>
            </div>

            {/* Oil */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🛢️</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">Pétrole</h3>
              <p className="text-[#B99066] font-bold text-lg mb-4">+12.3% sur 1 an</p>
              <p className="text-[#686868] text-sm mb-4">
                Énergie fossile, impact géopolitique important.
              </p>
              <ul className="space-y-2 text-sm text-[#686868]">
                <li>• Énergie fossile</li>
                <li>• Volatilité géopolitique</li>
                <li>• Transition énergétique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Art & Collection Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Art Investment */}
            <div>
              <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-8">
                Art et objets de collection
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Plus-value potentielle
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Les œuvres d'art peuvent prendre de la valeur 
                      de manière significative sur le long terme.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B99066] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Diversification
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Corrélation faible avec les marchés financiers 
                      traditionnels.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#59E2E4] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Expertise requise
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Nécessite une expertise spécialisée et 
                      une connaissance du marché de l'art.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Art Categories */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                Catégories d'art
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#686868] text-sm">Art contemporain</span>
                  <span className="text-[#4EBBBD] font-semibold">+18.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#4EBBBD] h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[#686868] text-sm">Art moderne</span>
                  <span className="text-[#B99066] font-semibold">+12.3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#B99066] h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[#686868] text-sm">Art classique</span>
                  <span className="text-[#59E2E4] font-semibold">+8.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#59E2E4] h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk & Benefits Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Risques et avantages
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#4EBBBD] text-2xl font-source-sans font-semibold mb-6 text-center">
                Avantages
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#4EBBBD] font-bold">✓</span>
                  <span className="text-[#686868]">Diversification du portefeuille</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#4EBBBD] font-bold">✓</span>
                  <span className="text-[#686868]">Potentiel de rendement élevé</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#4EBBBD] font-bold">✓</span>
                  <span className="text-[#686868]">Protection contre l'inflation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#4EBBBD] font-bold">✓</span>
                  <span className="text-[#686868]">Corrélation faible avec les marchés</span>
                </div>
              </div>
            </div>

            {/* Risks */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#B99066] text-2xl font-source-sans font-semibold mb-6 text-center">
                Risques
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#B99066] font-bold">⚠️</span>
                  <span className="text-[#686868]">Liquidité limitée</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#B99066] font-bold">⚠️</span>
                  <span className="text-[#686868]">Volatilité élevée</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#B99066] font-bold">⚠️</span>
                  <span className="text-[#686868]">Expertise spécialisée requise</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#B99066] font-bold">⚠️</span>
                  <span className="text-[#686868]">Frais de gestion élevés</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Comment investir dans les alternatives ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">1</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Évaluation du profil
              </h3>
              <p className="text-[#686868] text-sm">
                Analyse de votre profil de risque et de vos objectifs d'investissement
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">2</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Sélection des produits
              </h3>
              <p className="text-[#686868] text-sm">
                Choix des solutions alternatives adaptées à votre situation
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">3</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Mise en place
              </h3>
              <p className="text-[#686868] text-sm">
                Souscription et configuration de vos investissements alternatifs
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">4</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Suivi et optimisation
              </h3>
              <p className="text-[#686868] text-sm">
                Accompagnement continu et ajustements selon l'évolution des marchés
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
            Prêt à explorer les investissements alternatifs ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans la découverte et la mise en place 
            de solutions d'investissement alternatives adaptées à votre profil.
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Découvrir nos solutions
          </button>
        </div>
      </section>
    </>
  );
} 