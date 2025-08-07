"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function PeaPerPage() {
  const chartData = [
    { label: "Plafond PEA", value: "€150,000" },
    { label: "Plafond PER", value: "€8,000/an" },
    { label: "Rendement moyen PEA", value: "7.2%" },
    { label: "Avantage fiscal PER", value: "30%" },
    { label: "Performance sur 5 ans", value: "+35.8%" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section with dual focus */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-6">
              PEA & PER - Épargne retraite optimisée
            </h1>
            <p className="text-[#686868] text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed max-w-4xl mx-auto">
              Planifiez votre retraite avec des enveloppes fiscales avantageuses pour investir en actions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PEA Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">📈</span>
              </div>
              <h2 className="text-[#112033] text-2xl font-source-sans font-semibold mb-4">PEA</h2>
              <p className="text-[#686868] text-lg mb-4">Plan d'Épargne en Actions</p>
              <ul className="text-[#686868] text-sm space-y-2">
                <li>• Plafond : €150,000</li>
                <li>• Fiscalité avantageuse après 5 ans</li>
                <li>• Investissement en actions européennes</li>
                <li>• Liquidité disponible</li>
              </ul>
            </div>

            {/* PER Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <h2 className="text-[#112033] text-2xl font-source-sans font-semibold mb-4">PER</h2>
              <p className="text-[#686868] text-lg mb-4">Plan d'Épargne Retraite</p>
              <ul className="text-[#686868] text-sm space-y-2">
                <li>• Plafond : €8,000/an</li>
                <li>• Réduction d'impôt immédiate</li>
                <li>• Capital ou rente à la retraite</li>
                <li>• Déblocage anticipé possible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Performance des enveloppes PEA et PER"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* PEA Details Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Le Plan d'Épargne en Actions (PEA)
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Eligibility */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">👤</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Éligibilité</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li>• Résident fiscal français</li>
                <li>• Un seul PEA par personne</li>
                <li>• Âge minimum : 18 ans</li>
                <li>• Pas de condition de revenus</li>
              </ul>
            </div>

            {/* Investments */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl">💼</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Investissements</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li>• Actions européennes</li>
                <li>• ETF et trackers</li>
                <li>• OPCVM actions</li>
                <li>• SICAV et FCP</li>
              </ul>
            </div>

            {/* Taxation */}
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#59E2E4] text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-source-sans font-semibold mb-2">Fiscalité</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li>• Aucun impôt après 5 ans</li>
                <li>• Pas de prélèvements sociaux</li>
                <li>• Sortie libre à tout moment</li>
                <li>• Plafond : €150,000</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PER Details Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Le Plan d'Épargne Retraite (PER)
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: PER Benefits */}
            <div>
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-8">
                Avantages du PER
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4EBBBD] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Réduction d'impôt immédiate
                    </h4>
                    <p className="text-[#686868] text-sm">
                      Déduisez vos versements de votre revenu imposable, 
                      jusqu'à 30% d'économie d'impôt.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B99066] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Flexibilité de sortie
                    </h4>
                    <p className="text-[#686868] text-sm">
                      Déblocage anticipé possible pour certains événements 
                      (achat RP, chômage, invalidité).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#59E2E4] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-[#112033] font-source-sans font-semibold mb-2">
                      Choix de sortie
                    </h4>
                    <p className="text-[#686868] text-sm">
                      Capital ou rente viagère à la retraite selon vos besoins 
                      et votre situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: PER Calculator */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-6">
                Simulateur PER
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Revenu annuel imposable
                  </label>
                  <input 
                    type="number" 
                    placeholder="€50,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">
                    Versement annuel PER
                  </label>
                  <input 
                    type="number" 
                    placeholder="€5,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>

                <button className="w-full bg-[#4EBBBD] text-white py-3 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors duration-200">
                  Calculer mes économies
                </button>

                <div className="bg-[#FAFFEF] rounded-lg p-4 text-center">
                  <p className="text-[#686868] text-sm">
                    <strong>Économie d'impôt estimée :</strong><br />
                    <span className="text-[#4EBBBD] text-xl font-bold">€1,500</span> par an
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              PEA vs PER : Comparaison
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-[#4EBBBD] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Critères</th>
                  <th className="px-6 py-4 text-center font-semibold">PEA</th>
                  <th className="px-6 py-4 text-center font-semibold">PER</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Plafond</td>
                  <td className="px-6 py-4 text-center">€150,000</td>
                  <td className="px-6 py-4 text-center">€8,000/an</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Fiscalité</td>
                  <td className="px-6 py-4 text-center">Exonération après 5 ans</td>
                  <td className="px-6 py-4 text-center">Réduction immédiate</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Liquidité</td>
                  <td className="px-6 py-4 text-center">Libre</td>
                  <td className="px-6 py-4 text-center">Limitée</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Objectif</td>
                  <td className="px-6 py-4 text-center">Épargne long terme</td>
                  <td className="px-6 py-4 text-center">Retraite</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Investissements</td>
                  <td className="px-6 py-4 text-center">Actions européennes</td>
                  <td className="px-6 py-4 text-center">Multi-supports</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Investment Strategy Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
              Stratégie d'investissement recommandée
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">1</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Commencer par le PEA
              </h3>
              <p className="text-[#686868] text-sm">
                Ouvrez un PEA pour bénéficier de la fiscalité avantageuse sur les actions
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">2</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Compléter avec le PER
              </h3>
              <p className="text-[#686868] text-sm">
                Ajoutez un PER pour optimiser votre fiscalité et préparer la retraite
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">3</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Diversifier les supports
              </h3>
              <p className="text-[#686868] text-sm">
                Répartissez vos investissements entre actions, obligations et fonds
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">4</span>
              </div>
              <h3 className="text-[#112033] font-source-sans font-semibold mb-2">
                Investir régulièrement
              </h3>
              <p className="text-[#686868] text-sm">
                Mettez en place des versements automatiques pour optimiser votre épargne
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-source-sans font-semibold mb-6">
            Prêt à optimiser votre épargne retraite ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans l'ouverture et la gestion de vos enveloppes PEA et PER 
            pour maximiser vos avantages fiscaux et préparer votre retraite.
          </p>
          <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-source-sans font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Démarrer mon épargne retraite
          </button>
        </div>
      </section>
    </>
  );
} 