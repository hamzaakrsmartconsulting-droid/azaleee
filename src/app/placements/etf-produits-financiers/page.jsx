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
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold leading-tight mb-6">
                Produits financiers : actions, ETF, produits structurés
              </h1>
              <p className="text-[#686868] text-lg font-inter leading-relaxed mb-8">
                Les <strong>supports dynamiques</strong> disponibles dans les enveloppes fiscales pour accéder à la <strong>croissance des marchés financiers</strong> avec une <strong>diversification optimale</strong>.
              </p>
              <div className="bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-4 rounded-r-lg mb-8">
                <p className="text-[#112033] text-sm font-inter">
                  👉 La réussite d'un placement dépend autant du support que de l'enveloppe fiscale choisie.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#B99066] text-white px-6 py-3 rounded-lg shadow-lg font-inter font-medium hover:bg-[#A67A5A] transition-colors duration-200">
                  Analyser mes placements
                </button>
                <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-6 py-3 rounded-lg font-inter font-medium hover:bg-[#B99066] hover:text-white transition-colors duration-200">
                  En savoir plus
                </button>
              </div>
            </div>
            
            {/* Right: Product Types Cards */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📈</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">Actions</h3>
                  <p className="text-[#686868] text-sm mb-2">Titres vifs d'entreprises</p>
                  <p className="text-[#B99066] text-xl font-bold">Volatilité élevée</p>
                  <p className="text-[#686868] text-xs">Croissance potentielle</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">ETF</h3>
                  <p className="text-[#686868] text-sm mb-2">Fonds indiciels</p>
                  <p className="text-[#B99066] text-xl font-bold">Diversification</p>
                  <p className="text-[#686868] text-xs">Frais réduits</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🔗</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">Produits structurés</h3>
                  <p className="text-[#686868] text-sm mb-2">Instruments combinés</p>
                  <p className="text-[#B99066] text-xl font-bold">Rendement conditionnel</p>
                  <p className="text-[#686868] text-xs">Complexité variable</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚖️</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">Enveloppes fiscales</h3>
                  <p className="text-[#686868] text-sm mb-2">Assurance-vie, PEA, PER</p>
                  <p className="text-[#B99066] text-xl font-bold">Optimisation fiscale</p>
                  <p className="text-[#686868] text-xs">Stratégie patrimoniale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Performance des ETF et produits financiers"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Définition Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Définition
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Les <strong>supports dynamiques</strong> disponibles dans les enveloppes fiscales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Actions */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">📈</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Actions</h3>
              </div>
              <p className="text-sm mb-4">
                <strong>Titres vifs d'entreprises</strong> donnant droit à une part du capital et des bénéfices.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Participation au capital</li>
                <li>• Dividendes possibles</li>
                <li>• Plus-value potentielle</li>
                <li>• Volatilité élevée</li>
              </ul>
            </div>

            {/* ETF */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">ETF (trackers)</h3>
              </div>
              <p className="text-sm mb-4">
                <strong>Fonds indiciels</strong> répliquant un indice boursier de manière passive.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Réplication d'indices</li>
                <li>• Frais très faibles</li>
                <li>• Diversification automatique</li>
                <li>• Liquidité quotidienne</li>
              </ul>
            </div>

            {/* Produits structurés */}
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#59E2E4] text-2xl">🔗</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Produits structurés</h3>
              </div>
              <p className="text-sm mb-4">
                <strong>Instruments combinés</strong> actions, obligations et dérivés pour un rendement conditionnel.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Combinaison d'actifs</li>
                <li>• Rendement conditionnel</li>
                <li>• Protection partielle</li>
                <li>• Complexité variable</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages et Inconvénients Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Avantages */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-8 flex items-center gap-3">
                <span className="text-green-500 text-3xl">✅</span>
                Avantages
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#4EBBBD] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-semibold mb-2">
                      Accès à la croissance des marchés financiers
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Participation directe à la performance des entreprises et des indices boursiers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-semibold mb-2">
                      Diversification (ETF)
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Accès à des centaines d'actions ou obligations avec un seul produit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#59E2E4] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-semibold mb-2">
                      Rendements potentiellement élevés
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Performance supérieure aux placements sécurisés sur le long terme.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inconvénients */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-8 flex items-center gap-3">
                <span className="text-red-500 text-3xl">⚠️</span>
                Inconvénients / contre-indications
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">⚠</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-semibold mb-2">
                      Volatilité élevée (actions)
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Fluctuations importantes des cours pouvant générer du stress.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">⚠</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-semibold mb-2">
                      Produits structurés parfois complexes et risqués
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Mécanismes sophistiqués nécessitant une compréhension approfondie.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">⚠</span>
                  </div>
                  <div>
                    <h3 className="text-[#112033] font-semibold mb-2">
                      Risque de perte en capital
                    </h3>
                    <p className="text-[#686868] text-sm">
                      Possibilité de perdre une partie ou la totalité de l'investissement initial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conseil Azalée Patrimoine Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6 flex items-center justify-center gap-3">
              <span className="text-[#4EBBBD] text-3xl">🎯</span>
              Conseil Azalée Patrimoine
            </h2>
          </div>

          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white mb-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-4">
                La réussite d'un placement ne dépend pas uniquement du <strong>support choisi</strong>, mais surtout de l'<strong>enveloppe fiscale</strong> dans laquelle il est logé.
              </h3>
              <p className="text-lg">
                Un ETF monde en assurance-vie, en PEA ou en CTO n'aura <strong>pas du tout le même rendement net après impôt</strong>.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#4EBBBD]">
            <h3 className="text-[#112033] text-xl font-semibold mb-6">
              Chez <strong>Azalée Patrimoine</strong>, nous construisons avec vous une <strong>stratégie patrimoniale sur mesure</strong>, en choisissant :
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📦</span>
                </div>
                <h4 className="text-[#112033] font-semibold mb-3">La bonne enveloppe fiscale</h4>
                <p className="text-[#686868] text-sm">
                  Assurance-vie, PEA, PER, CTO... selon votre situation et vos objectifs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h4 className="text-[#112033] font-semibold mb-3">Les bons supports</h4>
                <p className="text-[#686868] text-sm">
                  ETF, SCPI, produits structurés, actions... adaptés à votre profil de risque.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚖️</span>
                </div>
                <h4 className="text-[#112033] font-semibold mb-3">Le bon équilibre</h4>
                <p className="text-[#686868] text-sm">
                  Entre <strong>sécurité, liquidité et performance</strong> selon vos besoins.
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-6 rounded-r-lg">
              <p className="text-[#112033] text-lg font-semibold text-center">
                👉 Votre patrimoine mérite mieux qu'un simple placement : il mérite une <strong>stratégie patrimoniale cohérente</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Contactez un conseiller Azalée Patrimoine
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Pour définir la meilleure combinaison <strong>enveloppe / support</strong> et optimiser vos placements.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h3 className="text-[#112033] text-xl font-semibold mb-3">Appelez-nous</h3>
                <p className="text-[#686868] text-sm mb-4">
                  Un conseiller vous accompagne dans votre stratégie patrimoniale.
                </p>
                <button className="bg-[#4EBBBD] text-white px-6 py-3 rounded-lg font-inter font-medium hover:bg-[#3A9B9D] transition-colors duration-200">
                  Prendre rendez-vous
                </button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📧</span>
                </div>
                <h3 className="text-[#112033] text-xl font-semibold mb-3">Écrivez-nous</h3>
                <p className="text-[#686868] text-sm mb-4">
                  Obtenez une analyse personnalisée de vos placements actuels.
                </p>
                <button className="bg-[#B99066] text-white px-6 py-3 rounded-lg font-inter font-medium hover:bg-[#A67A5A] transition-colors duration-200">
                  Analyser mes placements
                </button>
              </div>
            </div>
            
            <div className="mt-8 bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-6 rounded-r-lg">
              <p className="text-[#112033] text-center font-semibold">
                📩 <strong>Contactez un conseiller Azalée Patrimoine</strong> pour définir la meilleure combinaison enveloppe / support et optimiser vos placements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            Prêt à optimiser vos produits financiers ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans la construction d'une <strong>stratégie patrimoniale cohérente</strong> 
            en choisissant la meilleure combinaison enveloppe fiscale / supports financiers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
              Analyser mes placements
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-white hover:text-[#4EBBBD] transition-colors duration-200">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>
    </>
  );
} 