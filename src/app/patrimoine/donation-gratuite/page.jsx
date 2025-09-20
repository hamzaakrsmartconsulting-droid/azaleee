"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function DonationGratuitePage() {
  const chartData = [
    { label: "Abattement par enfant", value: "€100,000" },
    { label: "Don Sarkozy supplémentaire", value: "€31,865" },
    { label: "Taux fiscal après abattement", value: "5-45%" },
    { label: "Renouvelable tous les", value: "15 ans" },
    { label: "Nue-propriété à 70 ans", value: "60%" }
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
                Donation à titre gratuit
              </h1>
              <p className="text-[#686868] text-lg font-inter leading-relaxed mb-8">
                Une <strong>donation à titre gratuit</strong> est un transfert de patrimoine effectué <strong>sans contrepartie</strong>.
              </p>
              <p className="text-[#686868] text-lg font-inter leading-relaxed mb-8">
                Elle permet de <strong>transmettre de son vivant</strong>, d'anticiper sa succession et de réduire la facture fiscale grâce aux <strong>abattements renouvelables tous les 15 ans</strong>.
              </p>
              <div className="bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-4 rounded-r-lg mb-8">
                <p className="text-[#112033] text-sm font-inter">
                  👉 Anticiper, c'est transmettre plus et payer moins.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#B99066] text-white px-6 py-3 rounded-lg shadow-lg font-inter font-medium hover:bg-[#A67A5A] transition-colors duration-200">
                  Simuler ma donation
                </button>
                <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-6 py-3 rounded-lg font-inter font-medium hover:bg-[#B99066] hover:text-white transition-colors duration-200">
                  Consulter un notaire
                </button>
              </div>
            </div>
            
            {/* Right: Key Benefits Cards */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎁</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">Abattement</h3>
                  <p className="text-[#686868] text-sm mb-2">Par enfant</p>
                  <p className="text-[#B99066] text-xl font-bold">€100,000</p>
                  <p className="text-[#686868] text-xs">Tous les 15 ans</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">Don Sarkozy</h3>
                  <p className="text-[#686868] text-sm mb-2">Abattement supplémentaire</p>
                  <p className="text-[#B99066] text-xl font-bold">€31,865</p>
                  <p className="text-[#686868] text-xs">En numéraire</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⏰</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">Renouvelable</h3>
                  <p className="text-[#686868] text-sm mb-2">Tous les</p>
                  <p className="text-[#B99066] text-xl font-bold">15 ans</p>
                  <p className="text-[#686868] text-xs">Anticipation fiscale</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <h3 className="text-[#112033] text-lg font-semibold mb-2">Taux fiscal</h3>
                  <p className="text-[#686868] text-sm mb-2">Après abattement</p>
                  <p className="text-[#B99066] text-xl font-bold">5-45%</p>
                  <p className="text-[#686868] text-xs">Barème progressif</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Caractéristiques des donations à titre gratuit"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Les différentes formes de donation Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Les différentes formes de donation à titre gratuit
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Don manuel */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#4EBBBD]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#4EBBBD] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📝</span>
                </div>
                <div>
                  <h3 className="text-[#112033] text-xl font-semibold">1. Le don manuel</h3>
                  <p className="text-[#B99066] font-bold">Transmission directe</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[#686868] text-sm">
                  Transmission directe d'une somme d'argent, de bijoux, de titres financiers ou d'objets de valeur.
                </p>
                <p className="text-[#686868] text-sm">
                  Déclaration obligatoire au fisc via le formulaire n°2735.
                </p>
                <div className="bg-[#E8F4F8] p-3 rounded-lg">
                  <p className="text-[#112033] text-xs">
                    Fiscalité : application des abattements (100 000 € par enfant, tous les 15 ans).
                  </p>
                </div>
              </div>
            </div>

            {/* Don familial d'argent */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#B99066]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#B99066] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">💰</span>
                </div>
                <div>
                  <h3 className="text-[#112033] text-xl font-semibold">2. Le don familial d'argent</h3>
                  <p className="text-[#B99066] font-bold">"Don Sarkozy"</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[#686868] text-sm">
                  Spécifique aux dons en numéraire (argent).
                </p>
                <p className="text-[#686868] text-sm">
                  Conditions : donateur &lt; 80 ans, donataire majeur.
                </p>
                <div className="bg-[#FFF8E1] p-3 rounded-lg">
                  <p className="text-[#112033] text-xs">
                    Abattement supplémentaire de <strong>31 865 €</strong>, en plus des abattements classiques.
                  </p>
                </div>
              </div>
            </div>

            {/* Présents d'usage */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#59E2E4]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#59E2E4] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🎁</span>
                </div>
                <div>
                  <h3 className="text-[#112033] text-xl font-semibold">3. Les présents d'usage</h3>
                  <p className="text-[#B99066] font-bold">Cadeaux d'occasion</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[#686868] text-sm">
                  Cadeaux offerts à l'occasion d'événements particuliers (mariage, anniversaire, Noël…).
                </p>
                <p className="text-[#686868] text-sm">
                  Ils ne sont pas taxés <strong>s'ils restent proportionnés</strong> au patrimoine et aux revenus du donateur.
                </p>
                <div className="bg-[#E8F4F8] p-3 rounded-lg">
                  <p className="text-[#112033] text-xs">
                    Exemple : un chèque de 2 000 € pour un mariage peut être considéré comme présent d'usage pour un patrimoine de 500 000 €.
                  </p>
                </div>
              </div>
            </div>

            {/* Donation-partage */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#4EBBBD]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#4EBBBD] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">⚖️</span>
                </div>
                <div>
                  <h3 className="text-[#112033] text-xl font-semibold">4. La donation-partage</h3>
                  <p className="text-[#B99066] font-bold">Répartition équitable</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[#686868] text-sm">
                  Permet de <strong>répartir équitablement</strong> son patrimoine entre ses héritiers.
                </p>
                <p className="text-[#686868] text-sm">
                  Avantage : fige la valeur des biens au jour de la donation, évitant les contestations futures.
                </p>
                <div className="bg-[#E8F4F8] p-3 rounded-lg">
                  <p className="text-[#112033] text-xs">
                    Fiscalité : application immédiate des abattements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barème fiscal des donations Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Barème fiscal des donations (après abattement)
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              En ligne directe (parents ↔ enfants)
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#4EBBBD] text-white">
                    <th className="px-6 py-4 text-left font-semibold">Part taxable</th>
                    <th className="px-6 py-4 text-center font-semibold">Taux</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-medium">Jusqu'à 8 072 €</td>
                    <td className="px-6 py-4 text-center text-[#4EBBBD] font-bold">5 %</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-4 font-medium">8 072 € – 12 109 €</td>
                    <td className="px-6 py-4 text-center text-[#4EBBBD] font-bold">10 %</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-medium">12 109 € – 15 932 €</td>
                    <td className="px-6 py-4 text-center text-[#4EBBBD] font-bold">15 %</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-4 font-medium">15 932 € – 552 324 €</td>
                    <td className="px-6 py-4 text-center text-[#4EBBBD] font-bold">20 %</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-medium">552 324 € – 902 838 €</td>
                    <td className="px-6 py-4 text-center text-[#4EBBBD] font-bold">30 %</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-4 font-medium">902 838 € – 1 805 677 €</td>
                    <td className="px-6 py-4 text-center text-[#4EBBBD] font-bold">40 %</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Au-delà</td>
                    <td className="px-6 py-4 text-center text-[#4EBBBD] font-bold">45 %</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
            <h3 className="text-xl font-semibold mb-6 text-center">
              👉 Exemple : un parent donne 200 000 € à son enfant
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <h4 className="font-semibold mb-2">Donation totale</h4>
                <p className="text-2xl font-bold">200 000 €</p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <h4 className="font-semibold mb-2">Abattement</h4>
                <p className="text-2xl font-bold">100 000 €</p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <h4 className="font-semibold mb-2">Base taxable</h4>
                <p className="text-2xl font-bold">100 000 €</p>
              </div>
            </div>
            
            <div className="mt-6 bg-white bg-opacity-20 rounded-lg p-4 text-center">
              <p className="text-lg">
                <strong>Droits à payer ≈ 20 000 €</strong> (taux de 20 %)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation de la nue-propriété Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Donation de la nue-propriété : optimiser la transmission
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Le <strong>démembrement de propriété</strong> permet de transmettre la nue-propriété d'un bien en conservant l'usufruit (droit d'usage et perception des loyers).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Barème fiscal */}
            <div>
              <h3 className="text-[#112033] text-xl font-semibold mb-8">
                Barème fiscal (usufruit / nue-propriété) – Article 669 CGI :
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#4EBBBD]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#112033] font-semibold">Moins de 51 ans</span>
                    <span className="text-[#4EBBBD] font-bold">50% / 50%</span>
                  </div>
                  <p className="text-[#686868] text-sm">usufruit = 50 % / nue-propriété = 50 %</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#B99066]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#112033] font-semibold">61-70 ans</span>
                    <span className="text-[#B99066] font-bold">40% / 60%</span>
                  </div>
                  <p className="text-[#686868] text-sm">usufruit = 40 % / nue-propriété = 60 %</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#59E2E4]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#112033] font-semibold">71-80 ans</span>
                    <span className="text-[#59E2E4] font-bold">30% / 70%</span>
                  </div>
                  <p className="text-[#686868] text-sm">usufruit = 30 % / nue-propriété = 70 %</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#4EBBBD]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#112033] font-semibold">Plus de 81 ans</span>
                    <span className="text-[#4EBBBD] font-bold">20% / 80%</span>
                  </div>
                  <p className="text-[#686868] text-sm">usufruit = 20 % / nue-propriété = 80 %</p>
                </div>
              </div>
            </div>

            {/* Right: Exemple concret */}
            <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <h3 className="text-xl font-semibold mb-6 text-center">
                👉 Exemple concret
              </h3>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-6">
                <h4 className="font-semibold mb-4 text-center">Un bien immobilier de 500 000 € transmis en nue-propriété à 70 ans</h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Valeur du bien :</span>
                    <span className="font-bold">500 000 €</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Usufruit (40%) :</span>
                    <span className="font-bold">200 000 €</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Nue-propriété (60%) :</span>
                    <span className="font-bold">300 000 €</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <p className="text-lg">
                  <strong>Valeur taxable = 300 000 €</strong> (60 %)
                </p>
                <p className="text-sm mt-2">
                  Résultat : baisse significative des droits de donation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intérêt de payer la tranche à 5% Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Intérêt de payer la tranche à 5 %
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Un conseil souvent méconnu : <strong>payer volontairement une petite tranche taxable à 5 %</strong> peut permettre de <strong>gonfler la donation</strong> et de transmettre davantage en net.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Explanation */}
              <div>
                <h3 className="text-[#112033] text-xl font-semibold mb-6">
                  La stratégie de la tranche à 5%
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#4EBBBD] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">💡</span>
                    </div>
                    <div>
                      <h4 className="text-[#112033] font-semibold mb-2">
                        Optimisation fiscale intelligente
                      </h4>
                      <p className="text-[#686868] text-sm">
                        Au lieu de s'arrêter exactement à l'abattement, il peut être avantageux de dépasser légèrement pour utiliser la tranche à 5%.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#B99066] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">💰</span>
                    </div>
                    <div>
                      <h4 className="text-[#112033] font-semibold mb-2">
                        Coût marginal faible
                      </h4>
                      <p className="text-[#686868] text-sm">
                        Le coût fiscal supplémentaire est très faible comparé au patrimoine transmis en plus.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#59E2E4] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">📈</span>
                    </div>
                    <div>
                      <h4 className="text-[#112033] font-semibold mb-2">
                        Maximisation du patrimoine transmis
                      </h4>
                      <p className="text-[#686868] text-sm">
                        Cette stratégie permet de transmettre plus de patrimoine net aux bénéficiaires.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Example */}
              <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  👉 Exemple concret
                </h3>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold mb-4 text-center">Ajouter 20 000 € de donation au-delà de l'abattement</h4>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Donation supplémentaire :</span>
                      <span className="font-bold">20 000 €</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>Taux d'imposition :</span>
                      <span className="font-bold">5%</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>Droits à payer :</span>
                      <span className="font-bold">1 000 €</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <p className="text-lg">
                    <strong>Résultat :</strong> 1 000 € de droits génèrent 20 000 € de patrimoine transmis
                  </p>
                  <p className="text-sm mt-2">
                    Soit un coût fiscal de seulement 5% pour transmettre 20 000 € supplémentaires
                  </p>
                </div>
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
              Chez <strong>Azalée Patrimoine</strong>, nous analysons votre situation familiale et fiscale pour optimiser votre transmission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">Déterminer la meilleure forme</h3>
              <p className="text-[#686868] text-sm">
                Nous analysons votre situation pour choisir la forme de donation la plus adaptée à vos objectifs patrimoniaux.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⏰</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">Optimiser le timing</h3>
              <p className="text-[#686868] text-sm">
                Nous planifions le calendrier optimal : avant 70 ans, tous les 15 ans, en fonction de votre situation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">Solutions fiscales intelligentes</h3>
              <p className="text-[#686868] text-sm">
                Démembrement, assurance-vie, donation-partage : nous combinons les outils pour maximiser votre transmission.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
            <h3 className="text-xl font-semibold mb-6 text-center">
              👉 Notre rôle : vous aider à <strong>transmettre plus, en payant moins</strong>, dans un cadre familial sécurisé.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <h4 className="font-semibold mb-2">Transmettre plus</h4>
                <p className="text-sm">Optimisation fiscale et stratégies patrimoniales</p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <h4 className="font-semibold mb-2">Payer moins</h4>
                <p className="text-sm">Minimisation des droits de donation et de succession</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-6 rounded-r-lg">
            <p className="text-[#112033] text-center font-semibold">
              📅 <strong>Prenez rendez-vous dès aujourd'hui</strong> : Azalée Patrimoine, le chef d'orchestre de votre transmission patrimoniale.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            Prêt à optimiser votre transmission patrimoniale ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
            Nos experts vous accompagnent pour mettre en place la stratégie de donation la plus adaptée à votre situation familiale et fiscale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
              Simuler ma donation
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