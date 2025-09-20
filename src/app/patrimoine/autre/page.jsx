"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function AutrePatrimoinePage() {
  const chartData = [
    { label: "Solutions alternatives", value: "3" },
    { label: "Exonération IFI", value: "75%" },
    { label: "Ticket minimum", value: "€5,000" },
    { label: "Rendement moyen", value: "1-3%" },
    { label: "Avantages fiscaux", value: "Multiples" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold leading-tight mb-6">
              Autres solutions patrimoniales
            </h1>
            <p className="text-[#686868] text-lg font-inter leading-relaxed max-w-4xl mx-auto mb-8">
              En dehors des placements classiques (immobilier, assurance-vie, produits financiers), il existe des <strong>solutions patrimoniales originales</strong> permettant de :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🔄</span>
                </div>
                <h3 className="text-[#112033] font-semibold mb-2">Diversifier son patrimoine</h3>
                <p className="text-[#686868] text-sm">Solutions originales et méconnues</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">💰</span>
                </div>
                <h3 className="text-[#112033] font-semibold mb-2">Bénéficier d'avantages fiscaux</h3>
                <p className="text-[#686868] text-sm">IFI, IR, transmission</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🌱</span>
                </div>
                <h3 className="text-[#112033] font-semibold mb-2">S'impliquer dans l'économie réelle</h3>
                <p className="text-[#686868] text-sm">Agriculture, forêt, vigne</p>
              </div>
            </div>
            <div className="bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-4 rounded-r-lg max-w-4xl mx-auto mb-8">
              <p className="text-[#112033] text-sm font-inter">
                👉 Ces véhicules collectifs sont souvent méconnus, mais peuvent jouer un rôle stratégique dans une <strong>gestion patrimoniale équilibrée</strong>.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67A5A] transition-colors duration-200">
              Découvrir les solutions
            </button>
            <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-[#B99066] hover:text-white transition-colors duration-200">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Indicateurs de solutions alternatives"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Les 3 solutions patrimoniales Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Les solutions patrimoniales originales
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Solution 1: GFA */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">🌾</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">1. GFA</h3>
                <p className="text-sm font-medium">Groupement Foncier Agricole</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">📋 Définition</h4>
                  <p className="text-xs">
                    Société civile permettant de détenir collectivement des terres agricoles, louées à des exploitants.
                  </p>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✅ Avantages</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Exonération partielle d'<strong>IFI</strong> (jusqu'à 75%)</li>
                    <li>• Transmission facilitée</li>
                    <li>• Soutien à l'agriculture française</li>
                  </ul>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">⚠️ Inconvénients</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Rendement faible (1-2%/an)</li>
                    <li>• Liquidité limitée</li>
                    <li>• Dépendance à l'exploitant</li>
                  </ul>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💰 Ticket minimum</h4>
                  <p className="text-xs">
                    À partir de <strong>5 000 à 15 000 €</strong> selon les groupements.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 2: GFI */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl">🌲</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">2. GFI</h3>
                <p className="text-sm font-medium">Groupement Forestier d'Investissement</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">📋 Définition</h4>
                  <p className="text-xs">
                    Permet d'investir dans des forêts françaises (plantation, exploitation, entretien).
                  </p>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✅ Avantages</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Réduction d'impôt sur le revenu (<strong>18%</strong>)</li>
                    <li>• Exonération partielle d'<strong>IFI</strong> (75%)</li>
                    <li>• Transmission avantageuse (abattement 75%)</li>
                    <li>• Valorisation long terme</li>
                  </ul>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">⚠️ Inconvénients</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Rendement modeste (1-3%/an)</li>
                    <li>• Placement long terme (10-15 ans)</li>
                    <li>• Dépendance aux aléas climatiques</li>
                  </ul>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💰 Ticket minimum</h4>
                  <p className="text-xs">
                    À partir de <strong>5 000 €</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3: GFV */}
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#59E2E4] text-2xl">🍷</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">3. GFV</h3>
                <p className="text-sm font-medium">Groupement Foncier Viticole</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">📋 Définition</h4>
                  <p className="text-xs">
                    Permet d'acquérir collectivement des vignes, confiées à un exploitant (domaine viticole).
                  </p>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✅ Avantages</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Revenus réguliers en loyers... parfois en <strong>bouteilles de vin</strong> 🍷</li>
                    <li>• Exonération partielle d'<strong>IFI</strong> (75%)</li>
                    <li>• Transmission facilitée</li>
                    <li>• Valeur patrimoniale et affective</li>
                  </ul>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">⚠️ Inconvénients</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Rendement faible (1-3%/an)</li>
                    <li>• Marché de revente limité</li>
                    <li>• Dépendance à l'exploitant et climat</li>
                  </ul>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💰 Ticket minimum</h4>
                  <p className="text-xs">
                    De <strong>30 000 € à 100 000 €</strong> selon le domaine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exemple chiffré GFV Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Exemple chiffré : investissement de 100 000 € dans un GFV
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Investissement dans un GFV prestigieux (ex. Bourgogne) :
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Détails de l'investissement */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-semibold mb-6 text-center">
                📊 Détails de l'investissement
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-green-600 text-xl">💰</span>
                    <div>
                      <p className="text-green-800 font-medium text-sm">Investissement initial</p>
                      <p className="text-green-700 text-xs">Montant investi</p>
                    </div>
                  </div>
                  <p className="text-green-800 font-bold text-lg">100 000 €</p>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-600 text-xl">🏛️</span>
                    <div>
                      <p className="text-blue-800 font-medium text-sm">Exonération IFI</p>
                      <p className="text-blue-700 text-xs">75% de la valeur</p>
                    </div>
                  </div>
                  <p className="text-blue-800 font-bold text-lg">75 000 €</p>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-purple-600 text-xl">📈</span>
                    <div>
                      <p className="text-purple-800 font-medium text-sm">Revenus annuels</p>
                      <p className="text-purple-700 text-xs">2% par an</p>
                    </div>
                  </div>
                  <p className="text-purple-800 font-bold text-lg">2 000 €/an</p>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-orange-600 text-xl">🔄</span>
                    <div>
                      <p className="text-orange-800 font-medium text-sm">Base taxable transmission</p>
                      <p className="text-orange-700 text-xs">Après abattement 75%</p>
                    </div>
                  </div>
                  <p className="text-orange-800 font-bold text-lg">25 000 €</p>
                </div>
              </div>
            </div>

            {/* Avantages fiscaux */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-semibold mb-6 text-center">
                ✅ Avantages fiscaux
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg p-6 text-white">
                  <h4 className="font-semibold mb-3">🏛️ Impôt sur la Fortune Immobilière (IFI)</h4>
                  <div className="space-y-2 text-sm">
                    <p>• Valeur totale : <strong>100 000 €</strong></p>
                    <p>• Exonération : <strong>75%</strong> → 75 000 €</p>
                    <p>• Base taxable : <strong>25 000 €</strong> seulement</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#B99066] to-[#D4A574] rounded-lg p-6 text-white">
                  <h4 className="font-semibold mb-3">🔄 Transmission</h4>
                  <div className="space-y-2 text-sm">
                    <p>• Si transmission de son vivant</p>
                    <p>• Abattement : <strong>75%</strong> de la valeur</p>
                    <p>• Base taxable : <strong>25 000 €</strong> seulement</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#59E2E4] to-[#4EBBBD] rounded-lg p-6 text-white">
                  <h4 className="font-semibold mb-3">💰 Revenus</h4>
                  <div className="space-y-2 text-sm">
                    <p>• Rendement : <strong>2%/an</strong></p>
                    <p>• Revenus : <strong>2 000 €/an</strong></p>
                    <p>• Soit en loyers, soit en bouteilles de vin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white text-center">
            <h3 className="text-xl font-semibold mb-6">
              👉 Double avantage : <strong>diversification + optimisation fiscale</strong>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  <strong>Diversification</strong><br />
                  Investissement dans l'économie réelle
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  <strong>Optimisation fiscale</strong><br />
                  IFI et transmission réduits
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  <strong>Rendement</strong><br />
                  2 000 €/an + valorisation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La vision Azalée Patrimoine Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6 flex items-center justify-center gap-3">
              <span className="text-[#4EBBBD] text-3xl">🚀</span>
              La vision Azalée Patrimoine
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Chez <strong>Azalée Patrimoine</strong>, nous intégrons ces solutions "niches" dans une <strong>stratégie patrimoniale globale</strong> :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Analyse de l'intérêt réel
              </h3>
              <p className="text-[#686868] text-sm">
                Selon vos objectifs (fiscalité, transmission, diversification).
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Sélection des meilleurs véhicules
              </h3>
              <p className="text-[#686868] text-sm">
                GFA, GFI, GFV avec notaires et experts-comptables.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Simulation chiffrée
              </h3>
              <p className="text-[#686868] text-sm">
                De l'impact (IFI, droits de succession, revenus).
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white text-center">
            <h3 className="text-xl font-semibold mb-6">
              👉 Notre rôle : transformer ces placements atypiques en <strong>leviers patrimoniaux puissants</strong>, au service de votre stratégie familiale.
            </h3>
            
            <div className="mt-8 bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-6 rounded-r-lg">
              <p className="text-[#112033] text-center font-semibold">
                📅 <strong>Contactez Azalée Patrimoine</strong> pour explorer ces solutions et découvrir si elles correspondent à votre profil et vos objectifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            Prêt à découvrir ces solutions patrimoniales originales ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
            Nos experts vous accompagnent pour intégrer ces <strong>solutions "niches"</strong> dans votre stratégie patrimoniale globale et transformer ces placements atypiques en <strong>leviers patrimoniaux puissants</strong>.
          </p>
          
          <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-white text-xl font-semibold mb-4">
              👉 Chez <strong>Azalée Patrimoine</strong>, nous vous apportons :
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-white">
                  Une <strong>analyse de l'intérêt réel</strong> selon vos objectifs
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-white">
                  La <strong>sélection des meilleurs véhicules</strong> (GFA, GFI, GFV)
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-white">
                  Une <strong>simulation chiffrée</strong> de l'impact fiscal
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
              Découvrir les solutions
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-white hover:text-[#4EBBBD] transition-colors duration-200">
              Prendre rendez-vous
            </button>
          </div>

          <div className="mt-8 bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-4 rounded-r-lg max-w-4xl mx-auto">
            <p className="text-[#112033] text-center font-semibold">
              📅 <strong>Contactez Azalée Patrimoine</strong> pour explorer ces solutions et découvrir si elles correspondent à votre profil et vos objectifs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 