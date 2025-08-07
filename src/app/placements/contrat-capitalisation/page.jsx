"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function ContratCapitalisationPage() {
  const chartData = [
    { label: "Taux de rendement moyen", value: "4.2%" },
    { label: "Durée moyenne du contrat", value: "8 ans" },
    { label: "Montant moyen investi", value: "€75,000" },
    { label: "Frais de gestion annuels", value: "1.2%" },
    { label: "Performance sur 5 ans", value: "+18.5%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section with different layout */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-br from-[#FFF8E1] to-[#E3F2FD] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-black text-2xl sm:text-3xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
              Contrat de Capitalisation
            </h1>
            <p className="text-[#374151] text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed max-w-4xl mx-auto">
              Un placement de long terme pour préparer votre avenir et optimiser votre fiscalité
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-3">
                Épargne de long terme
              </h3>
              <p className="text-[#686868] text-sm">
                Capitalisez vos économies sur plusieurs années pour un rendement optimisé
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-3">
                Avantages fiscaux
              </h3>
              <p className="text-[#686868] text-sm">
                Bénéficiez d'une fiscalité avantageuse après 8 ans de détention
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-3">
                Protection du capital
              </h3>
              <p className="text-[#686868] text-sm">
                Sécurisez votre épargne avec des supports adaptés à votre profil
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Performance des contrats de capitalisation"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Benefits Section with timeline */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Les avantages du contrat de capitalisation
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#4EBBBD] opacity-30"></div>
            
            <div className="space-y-12">
              {/* Timeline item 1 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-2">
                    Flexibilité des versements
                  </h3>
                  <p className="text-[#686868] text-sm">
                    Effectuez des versements libres selon vos disponibilités financières
                  </p>
                </div>
                <div className="w-8 h-8 bg-[#4EBBBD] rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Timeline item 2 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-[#B99066] rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-2">
                    Choix des supports
                  </h3>
                  <p className="text-[#686868] text-sm">
                    Optez pour des fonds en euros sécurisés ou des unités de compte dynamiques
                  </p>
                </div>
              </div>

              {/* Timeline item 3 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-2">
                    Fiscalité avantageuse
                  </h3>
                  <p className="text-[#686868] text-sm">
                    Après 8 ans, bénéficiez d'un prélèvement forfaitaire unique de 7.5%
                  </p>
                </div>
                <div className="w-8 h-8 bg-[#59E2E4] rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Timeline item 4 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-[#4EBBBD] rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-2">
                    Transmission facilitée
                  </h3>
                  <p className="text-[#686868] text-sm">
                    Transmettez votre contrat dans des conditions fiscales avantageuses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="w-full bg-[#F8F9FA] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Contrat de capitalisation vs autres placements
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Capitalisation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#4EBBBD] text-2xl font-source-sans font-semibold mb-6 text-center">
                Contrat de Capitalisation
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#4EBBBD] mt-1">✓</span>
                  <span className="text-[#686868]">Fiscalité avantageuse après 8 ans</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4EBBBD] mt-1">✓</span>
                  <span className="text-[#686868]">Versements libres</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4EBBBD] mt-1">✓</span>
                  <span className="text-[#686868]">Choix des supports d'investissement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4EBBBD] mt-1">✓</span>
                  <span className="text-[#686868]">Transmission facilitée</span>
                </li>
              </ul>
            </div>

            {/* Other placements */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#B99066] text-2xl font-source-sans font-semibold mb-6 text-center">
                Autres placements
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1">•</span>
                  <span className="text-[#686868]">Fiscalité immédiate sur les revenus</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1">•</span>
                  <span className="text-[#686868]">Versements souvent contraints</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1">•</span>
                  <span className="text-[#686868]">Supports d'investissement limités</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B99066] mt-1">•</span>
                  <span className="text-[#686868]">Transmission soumise aux droits de succession</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#F8F9FA] rounded-lg p-6">
              <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">
                Quelle est la durée minimale d'un contrat de capitalisation ?
              </h3>
              <p className="text-[#686868] text-sm">
                Il n'y a pas de durée minimale imposée, mais pour bénéficier des avantages fiscaux, 
                il est recommandé de conserver le contrat au moins 8 ans.
              </p>
            </div>

            <div className="bg-[#F8F9FA] rounded-lg p-6">
              <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">
                Puis-je effectuer des retraits partiels ?
              </h3>
              <p className="text-[#686868] text-sm">
                Oui, vous pouvez effectuer des retraits partiels à tout moment, 
                mais attention aux conséquences fiscales avant 8 ans.
              </p>
            </div>

            <div className="bg-[#F8F9FA] rounded-lg p-6">
              <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">
                Quels sont les frais appliqués ?
              </h3>
              <p className="text-[#686868] text-sm">
                Les frais varient selon les contrats : frais d'entrée, frais de gestion annuels, 
                et éventuellement frais de sortie. Nos conseillers vous détaillent tous les coûts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#B99066] to-[#4EBBBD] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
            Prêt à optimiser votre épargne ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans la souscription et la gestion de votre contrat de capitalisation 
            pour maximiser vos avantages fiscaux et votre rendement.
          </p>
          <button className="bg-white text-[#B99066] px-8 py-4 rounded-lg shadow-lg font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Demander une étude personnalisée
          </button>
        </div>
      </section>
    </>
  );
} 