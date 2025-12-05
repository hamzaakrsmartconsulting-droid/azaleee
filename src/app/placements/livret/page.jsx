"use client";
import React from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
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
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#253F60] to-[#B99066] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold leading-tight mb-6">
                Livrets réglementés (Livret A, LDDS, LEP, PEL…) : utiles mais pas suffisants
              </h1>
              <p className="text-white text-lg font-inter leading-relaxed mb-8">
                Les <strong>livrets réglementés</strong> (Livret A, LDDS, LEP, PEL…) font partie des placements préférés des Français. Sécurisés, liquides et garantis par l'État, ils constituent souvent la première étape de l'épargne.
              </p>
              <div className="bg-white bg-opacity-20 border-l-4 border-white p-4 rounded-r-lg mb-8">
                <p className="text-white text-sm font-inter">
                  👉 Mais derrière cette sécurité se cache une réalité : leur <strong>rendement réel est très faible</strong>, et ils ne permettent pas de protéger efficacement son patrimoine face à l'<strong>inflation</strong>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#B99066] text-white px-6 py-3 rounded-lg shadow-lg font-inter font-medium hover:bg-[#A67A5A] transition-colors duration-200">
                  Analyser mon épargne
                </button>
                <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-inter font-medium hover:bg-white hover:text-[#253F60] transition-colors duration-200">
                  En savoir plus
                </button>
              </div>
            </div>
            
            {/* Right: Livret Cards */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-4">
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">Livret A</h3>
                  <p className="text-[#686868] text-sm mb-2">Taux 2025</p>
                  <p className="text-[#B99066] text-xl font-bold">3% net</p>
                  <p className="text-[#686868] text-xs">Plafond : 22 950 €</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">LDDS</h3>
                  <p className="text-[#686868] text-sm mb-2">Taux identique</p>
                  <p className="text-[#B99066] text-xl font-bold">3% net</p>
                  <p className="text-[#686868] text-xs">Plafond : 12 000 €</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">LEP</h3>
                  <p className="text-[#686868] text-sm mb-2">Taux 2025</p>
                  <p className="text-[#B99066] text-xl font-bold">5% net</p>
                  <p className="text-[#686868] text-xs">Plafond : 10 000 €</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-4">
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">PEL</h3>
                  <p className="text-[#686868] text-sm mb-2">Taux variable</p>
                  <p className="text-[#B99066] text-xl font-bold">2.25% brut</p>
                  <p className="text-[#686868] text-xs">Plafond : 61 200 €</p>
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

      {/* Image Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Comprendre les livrets réglementés
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Visualisez l'impact des livrets réglementés sur votre patrimoine
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-4xl">
              <img 
                src="/images/livret.webp" 
                alt="Graphique des livrets réglementés et leur impact sur le patrimoine"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Définition Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Qu'est-ce qu'un livret réglementé ?
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Un <strong>livret réglementé</strong> est un produit d'épargne garanti par l'État.
            </p>
          </div>

          <div className="bg-[#253F60] rounded-lg shadow-lg p-8 text-white mb-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Caractéristiques des livrets réglementés
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-3">
                </div>
                <h4 className="font-semibold mb-2 text-white">Garanti par l'État</h4>
                <p className="text-sm text-white">Capital protégé</p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-3">
                </div>
                <h4 className="font-semibold mb-2 text-white">Exonéré d'impôt</h4>
                <p className="text-sm text-white">Pas de prélèvements sociaux</p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-3">
                </div>
                <h4 className="font-semibold mb-2 text-white">Accessible à tous</h4>
                <p className="text-sm text-white">Plafond fixé par la loi</p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-3">
                </div>
                <h4 className="font-semibold mb-2 text-white">Taux réglementé</h4>
                <p className="text-sm text-white">Décidé par les pouvoirs publics</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#253F60]">
            <h3 className="text-[#112033] text-xl font-semibold mb-6">
              Rôle économique essentiel
            </h3>
            <p className="text-[#686868] text-lg mb-4">
              Ces livrets jouent un rôle essentiel dans le <strong>financement de l'économie française</strong> :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-3">
                </div>
                <h4 className="text-[#112033] font-semibold mb-2">Logement social</h4>
                <p className="text-[#686868] text-sm">Financement des projets sociaux</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-3">
                </div>
                <h4 className="text-[#112033] font-semibold mb-2">Collectivités locales</h4>
                <p className="text-[#686868] text-sm">Projets des territoires</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#253F60] to-[#B99066] rounded-full flex items-center justify-center mx-auto mb-3">
                </div>
                <h4 className="text-[#112033] font-semibold mb-2">Transition énergétique</h4>
                <p className="text-[#686868] text-sm">Économie sociale et solidaire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les différents livrets réglementés Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Les différents livrets réglementés
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Livret A */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#253F60]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#253F60] rounded-lg flex items-center justify-center">
                </div>
                <div>
                  <h3 className="text-[#112033] text-xl font-semibold">Le Livret A</h3>
                  <p className="text-[#B99066] font-bold">Taux 2025 : 3% net</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#686868]">Plafond :</span>
                  <span className="font-semibold">22 950 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#686868]">Rôle économique :</span>
                  <span className="text-sm">Logement social et collectivités locales</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#686868]">Usage type :</span>
                  <span className="text-sm">Épargne de précaution à court terme</span>
                </div>
              </div>
            </div>

            {/* LDDS */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#B99066]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#B99066] rounded-lg flex items-center justify-center">
                </div>
                <div>
                  <h3 className="text-[#112033] text-xl font-semibold">Le LDDS</h3>
                  <p className="text-[#B99066] font-bold">Taux identique au Livret A</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#686868]">Plafond :</span>
                  <span className="font-semibold">12 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#686868]">Rôle économique :</span>
                  <span className="text-sm">Transition énergétique et économie sociale</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#686868]">Usage type :</span>
                  <span className="text-sm">Complément au Livret A</span>
                </div>
              </div>
            </div>

            {/* LEP */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#B99066]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#B99066] rounded-lg flex items-center justify-center">
                </div>
                <div>
                  <h3 className="text-[#112033] text-xl font-semibold">Le LEP</h3>
                  <p className="text-[#B99066] font-bold">Taux 2025 : 5% net</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#686868]">Plafond :</span>
                  <span className="font-semibold">10 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#686868]">Conditions :</span>
                  <span className="text-sm">Réservé aux ménages modestes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#686868]">Usage type :</span>
                  <span className="text-sm">Excellent outil d'épargne court terme</span>
                </div>
              </div>
            </div>

            {/* PEL */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#253F60]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#253F60] rounded-lg flex items-center justify-center">
                </div>
                <div>
                  <h3 className="text-[#112033] text-xl font-semibold">Le PEL</h3>
                  <p className="text-[#B99066] font-bold">Taux variable : 2.25% brut</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#686868]">Plafond :</span>
                  <span className="font-semibold">61 200 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#686868]">Particularité :</span>
                  <span className="text-sm">Imposition après 12 ans</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#686868]">Usage type :</span>
                  <span className="text-sm">Épargne logement (peu attractive)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages et limites Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Avantages et limites des livrets réglementés
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Avantages */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500">
              <h3 className="text-[#112033] text-xl font-semibold mb-8 flex items-center gap-3">
                <span className="text-green-500 text-3xl">✅</span>
                Les avantages
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-semibold mb-2">
                      Sécurité absolue
                    </h4>
                    <p className="text-[#686868] text-sm">
                      Capital garanti par l'État, aucun risque de perte.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-semibold mb-2">
                      Liquidité
                    </h4>
                    <p className="text-[#686868] text-sm">
                      Retraits possibles à tout moment (sauf PEL).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-semibold mb-2">
                      Simplicité
                    </h4>
                    <p className="text-[#686868] text-sm">
                      Pas de frais, pas de complexité administrative.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-semibold mb-2">
                      Exonération fiscale
                    </h4>
                    <p className="text-[#686868] text-sm">
                      Intérêts exonérés d'impôt sur le revenu et de prélèvements sociaux (hors PEL).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Limites */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-500">
              <h3 className="text-[#112033] text-xl font-semibold mb-8 flex items-center gap-3">
                <span className="text-red-500 text-3xl">⚠️</span>
                Les limites
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">⚠</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-semibold mb-2">
                      Plafonds restreints
                    </h4>
                    <p className="text-[#686868] text-sm">
                      Impossible d'y loger des montants importants pour un patrimoine conséquent.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">⚠</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-semibold mb-2">
                      Rendement limité
                    </h4>
                    <p className="text-[#686868] text-sm">
                      Taux fixés par l'État, rarement supérieurs à l'inflation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">⚠</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-semibold mb-2">
                      Érosion du capital réel
                    </h4>
                    <p className="text-[#686868] text-sm">
                      La valeur de l'argent placé diminue en pouvoir d'achat si l'inflation est supérieure au rendement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Érosion monétaire Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              L'érosion monétaire : le vrai coût caché
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Placer son argent sur un livret réglementé, c'est choisir la sécurité… mais au prix d'une <strong>érosion silencieuse du capital</strong>.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-[#112033] text-xl font-semibold mb-6 text-center">
              Exemple chiffré : 100 000 € placés pendant 10 ans
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-lg p-6 text-white">
                <h4 className="text-lg font-semibold mb-4">Hypothèse 1 : Livret A</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Taux moyen :</span>
                    <span className="font-bold">3% net</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Capital après 10 ans :</span>
                    <span className="font-bold">134 392 €</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#B99066] to-[#253F60] rounded-lg p-6 text-white">
                <h4 className="text-lg font-semibold mb-4">Hypothèse 2 : Inflation</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Inflation moyenne :</span>
                    <span className="font-bold">4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pouvoir d'achat réel :</span>
                    <span className="font-bold">90 247 €</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h4 className="text-[#112033] text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-red-500 text-xl">⚠️</span>
                Résultat dramatique
              </h4>
              <p className="text-[#686868] mb-2">
                ➡️ Après 10 ans :
              </p>
              <ul className="text-[#686868] space-y-1 ml-4">
                <li>• Capital sur Livret A : <strong>134 392 €</strong></li>
                <li>• Pouvoir d'achat réel (corrigé de l'inflation) : <strong>90 247 €</strong></li>
              </ul>
              <div className="mt-4 bg-red-100 p-4 rounded-lg">
                <p className="text-[#112033] font-semibold text-center">
                  👉 Résultat : vous perdez <strong>près de 10 % de pouvoir d'achat</strong>, malgré un placement "sécurisé".
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-[#E8F4F8] border-l-4 border-[#253F60] p-4 rounded-r-lg">
              <p className="text-[#112033] text-sm">
                Cet effet est encore plus marqué si l'inflation reste élevée plusieurs années (comme en 2022–2023).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Place dans le patrimoine Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Quelle place donner aux livrets réglementés dans son patrimoine ?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Utiles pour */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500">
              <h3 className="text-[#112033] text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-green-500 text-2xl">✅</span>
                Les livrets réglementés sont utiles pour :
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-semibold mb-2">
                      Constituer une épargne de précaution
                    </h4>
                    <p className="text-[#686868] text-sm">
                      3 à 6 mois de dépenses courantes pour faire face aux imprévus.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-semibold mb-2">
                      Sécuriser un fonds disponible
                    </h4>
                    <p className="text-[#686868] text-sm">
                      En cas de coup dur, avec une liquidité immédiate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-semibold mb-2">
                      Bénéficier d'une petite rémunération
                    </h4>
                    <p className="text-[#686868] text-sm">
                      Nette et garantie, même si elle reste limitée.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compléter avec */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#253F60]">
              <h3 className="text-[#112033] text-xl font-semibold mb-6 flex items-center gap-3">
                Mais ils ne doivent pas constituer l'essentiel d'un patrimoine
              </h3>
              
              <p className="text-[#686868] mb-6">
                Pour <strong>protéger son capital de l'inflation</strong> et viser une <strong>croissance à long terme</strong>, il est nécessaire de compléter avec :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#253F60] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-[#686868] text-sm">Assurance-vie en unités de compte</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#253F60] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-[#686868] text-sm">PEA et ETF diversifiés</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#253F60] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-[#686868] text-sm">Contrats de capitalisation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#253F60] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-[#686868] text-sm">SCPI ou immobilier locatif</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#253F60] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-[#686868] text-sm">Produits structurés adaptés</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Conclusion : utile, mais insuffisant face à l'inflation
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <p className="text-[#686868] text-lg mb-6">
                Les <strong>livrets réglementés</strong> sont une brique indispensable de l'épargne des Français.
              </p>
              <p className="text-[#686868] text-lg mb-6">
                Ils offrent sécurité et liquidité, et jouent un rôle économique majeur.
              </p>
            </div>
            
            <div className="bg-[#E8F4F8] border-l-4 border-[#253F60] p-6 rounded-r-lg mb-8">
              <p className="text-[#112033] text-lg font-semibold text-center">
                👉 Mais en tant que placement à long terme, ils sont insuffisants. L'inflation érode le pouvoir d'achat du capital, et un épargnant qui se contente de livrets voit sa richesse <strong>fondre en valeur réelle</strong>.
              </p>
            </div>

            <div className="bg-[#253F60] rounded-lg shadow-lg p-8 text-white">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Chez <strong>Azalée Patrimoine</strong>, nous aidons nos clients à trouver le juste équilibre entre :
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-3">
                  </div>
                  <h4 className="font-semibold mb-2">La sécurité</h4>
                  <p className="text-sm">Livrets réglementés</p>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-3">
                  </div>
                  <h4 className="font-semibold mb-2">La performance</h4>
                  <p className="text-sm">Placements financiers et immobiliers</p>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-3">
                  </div>
                  <h4 className="font-semibold mb-2">La stratégie patrimoniale</h4>
                  <p className="text-sm">Fiscalité, transmission, diversification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#253F60] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            Optimisez votre stratégie d'épargne
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent pour trouver le <strong>juste équilibre</strong> entre sécurité, performance et stratégie patrimoniale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67C52] transition-colors duration-200">
              Analyser mon épargne
            </button>
            <button 
              onClick={() => window.open('https://calendly.com/azalee-patrimoine', '_blank')}
              className="bg-transparent border-2 border-[#B99066] text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-[#B99066] hover:text-white transition-colors duration-200"
            >
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
} 