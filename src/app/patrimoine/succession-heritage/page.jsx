"use client";
import React from "react";
import Header from "../../../components/common/Header";
import PlacementChart from "../../../components/PlacementChart";

export default function SuccessionHeritagePage() {
  const chartData = [
    { label: "Droits de succession moyens", value: "€38,000" },
    { label: "Abattement enfants", value: "€100,000" },
    { label: "Exonération conjoint", value: "100%" },
    { label: "Économies moyennes", value: "€28,500" },
    { label: "Durée de transmission", value: "3-6 mois" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-[#112033] text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold leading-tight mb-6">
              Comprendre la succession
            </h1>
            <p className="text-[#686868] text-lg font-inter leading-relaxed max-w-4xl mx-auto mb-8">
              La <strong>succession</strong> correspond à la transmission du patrimoine d'une personne décédée à ses héritiers.
            </p>
            <p className="text-[#686868] text-lg font-inter leading-relaxed max-w-4xl mx-auto mb-8">
              Elle est encadrée par le <strong>Code civil</strong>, qui fixe :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🛡️</span>
                </div>
                <h3 className="text-[#112033] font-semibold mb-2">La réserve héréditaire</h3>
                <p className="text-[#686868] text-sm">Part du patrimoine obligatoirement attribuée aux héritiers réservataires (enfants, conjoint survivant)</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <h3 className="text-[#112033] font-semibold mb-2">La quotité disponible</h3>
                <p className="text-[#686868] text-sm">Part libre que l'on peut léguer à la personne de son choix (enfant, conjoint, tiers, association...)</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B99066] text-white px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-[#A67A5A] transition-colors duration-200">
              Simuler ma succession
            </button>
            <button className="bg-transparent border-2 border-[#B99066] text-[#B99066] px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-[#B99066] hover:text-white transition-colors duration-200">
              Consulter un expert
            </button>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <PlacementChart 
        title="Indicateurs de succession"
        data={chartData}
        chartImage="/images/variation-chart-image-944f04.png"
      />

      {/* Réserve héréditaire et quotité disponible Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Réserve héréditaire et quotité disponible
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Définition de la quotité disponible */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">📋</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Définition de la quotité disponible</h3>
              </div>
              <p className="text-sm mb-4">
                C'est la <strong>portion du patrimoine dont on peut disposer librement</strong> (par testament ou donation), après application de la réserve héréditaire.
              </p>
            </div>

            {/* Exemple de calcul */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl">🧮</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Exemple de calcul</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <p><strong>1 enfant</strong> : réserve = 50% → quotité disponible = 50%</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <p><strong>2 enfants</strong> : réserve = 2/3 (1/3 chacun) → quotité disponible = 1/3</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <p><strong>3 enfants ou +</strong> : réserve = 3/4 → quotité disponible = 1/4</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <p><strong>Sans enfant</strong> : conjoint survivant = 25%, reste = quotité disponible</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exemple concret */}
          <div className="bg-gradient-to-r from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white text-center">
            <h3 className="text-xl font-semibold mb-6">
              👉 Exemple concret : Un patrimoine de <strong>600 000 €</strong> avec <strong>2 enfants</strong>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <h4 className="font-semibold mb-3">🛡️ Réserve héréditaire</h4>
                <p className="text-sm">
                  <strong>400 000 €</strong><br />
                  (200 000 € chacun)
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <h4 className="font-semibold mb-3">🎯 Quotité disponible</h4>
                <p className="text-sm">
                  <strong>200 000 €</strong><br />
                  librement attribuable
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Droits de succession : abattements et barème fiscal Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Droits de succession : abattements et barème fiscal
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Chaque héritier bénéficie d'un <strong>abattement fiscal</strong> sur la part reçue.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Tableau des abattements */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-semibold mb-6 text-center">
                📊 Barème des abattements et droits
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#4EBBBD] text-white">
                      <th className="px-4 py-3 text-left">Lien de parenté</th>
                      <th className="px-4 py-3 text-center">Abattement</th>
                      <th className="px-4 py-3 text-center">Taux des droits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">Enfants / parents</td>
                      <td className="px-4 py-3 text-center font-bold text-[#4EBBBD]">100 000 €</td>
                      <td className="px-4 py-3 text-center text-xs">5% à 45% (progressif)</td>
                    </tr>
                    <tr className="border-b bg-green-50">
                      <td className="px-4 py-3 font-medium">Conjoint / partenaire PACS</td>
                      <td className="px-4 py-3 text-center font-bold text-green-600">Exonération totale</td>
                      <td className="px-4 py-3 text-center text-xs">0%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">Frères et sœurs</td>
                      <td className="px-4 py-3 text-center font-bold text-[#B99066]">15 932 €</td>
                      <td className="px-4 py-3 text-center text-xs">35% (≤ 24 430 €), 45% (&gt; 24 430 €)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">Neveux et nièces</td>
                      <td className="px-4 py-3 text-center font-bold text-[#B99066]">7 967 €</td>
                      <td className="px-4 py-3 text-center text-xs">55%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Autres héritiers</td>
                      <td className="px-4 py-3 text-center font-bold text-red-600">1 594 €</td>
                      <td className="px-4 py-3 text-center text-xs">60%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Exemple de calcul */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-[#112033] text-xl font-semibold mb-6 text-center">
                🧮 Exemple de calcul
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg p-6 text-white">
                  <h4 className="font-semibold mb-3">📊 Situation</h4>
                  <p className="text-sm">
                    Un héritage de <strong>300 000 €</strong> transmis à un enfant
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <span className="text-blue-800 font-medium">Abattement</span>
                    <span className="text-blue-800 font-bold">100 000 €</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <span className="text-green-800 font-medium">Base taxable</span>
                    <span className="text-green-800 font-bold">200 000 €</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <span className="text-red-800 font-medium">Droits de succession</span>
                    <span className="text-red-800 font-bold">≈ 38 000 €</span>
                  </div>
                </div>
                
                <div className="bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-4 rounded-r-lg">
                  <p className="text-[#112033] text-xs">
                    👉 Calcul selon le barème progressif par tranches
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Régime matrimonial et impact sur la succession Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Régime matrimonial et impact sur la succession
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Le régime matrimonial conditionne ce qui entre dans la succession :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Communauté légale */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚖️</span>
                </div>
                <h3 className="text-[#112033] text-xl font-semibold mb-2">Communauté légale</h3>
              </div>
              <p className="text-[#686868] text-sm mb-4">
                Moitié des biens communs + biens propres du défunt.
              </p>
              <div className="bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-4 rounded-r-lg">
                <p className="text-[#112033] text-xs">
                  👉 Régime par défaut si aucun contrat de mariage
                </p>
              </div>
            </div>

            {/* Séparation de biens */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔒</span>
                </div>
                <h3 className="text-[#112033] text-xl font-semibold mb-2">Séparation de biens</h3>
              </div>
              <p className="text-[#686868] text-sm mb-4">
                Uniquement les biens personnels du défunt.
              </p>
              <div className="bg-[#FFF4E6] border-l-4 border-[#B99066] p-4 rounded-r-lg">
                <p className="text-[#112033] text-xs">
                  👉 Chaque époux garde ses biens propres
                </p>
              </div>
            </div>

            {/* Communauté universelle */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔄</span>
                </div>
                <h3 className="text-[#112033] text-xl font-semibold mb-2">Communauté universelle</h3>
              </div>
              <p className="text-[#686868] text-sm mb-4">
                Avec attribution intégrale : le conjoint recueille tout, les enfants n'héritent qu'au second décès.
              </p>
              <div className="bg-[#E6F7FF] border-l-4 border-[#59E2E4] p-4 rounded-r-lg">
                <p className="text-[#112033] text-xs">
                  👉 Outil puissant de protection du conjoint survivant
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white text-center">
            <h3 className="text-xl font-semibold mb-6">
              👉 Adapter son régime matrimonial est un outil puissant de <strong>protection du conjoint survivant</strong>.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  <strong>Protection</strong><br />
                  Du conjoint survivant
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  <strong>Optimisation</strong><br />
                  De la transmission
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">
                  <strong>Flexibilité</strong><br />
                  Selon la situation familiale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optimiser sa succession Section */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">
              Optimiser sa succession
            </h2>
            <p className="text-[#686868] text-lg max-w-4xl mx-auto">
              Plusieurs leviers permettent de réduire le coût fiscal :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Assurance-vie */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Assurance-vie</h3>
              </div>
              <p className="text-sm mb-4">
                Exonération jusqu'à <strong>152 500 €</strong> par bénéficiaire avant 70 ans.
              </p>
            </div>

            {/* Démembrement */}
            <div className="bg-gradient-to-br from-[#B99066] to-[#D4A574] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#B99066] text-2xl">🏠</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Démembrement</h3>
              </div>
              <p className="text-sm mb-4">
                Donner la <strong>nue-propriété</strong> d'un bien, conserver l'usufruit.
              </p>
            </div>

            {/* Donation-partage */}
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#4EBBBD] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#59E2E4] text-2xl">📋</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Donation-partage</h3>
              </div>
              <p className="text-sm mb-4">
                Figer les valeurs et <strong>anticiper la répartition</strong>.
              </p>
            </div>

            {/* Pacte Dutreil */}
            <div className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4EBBBD] text-2xl">🏢</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Pacte Dutreil</h3>
              </div>
              <p className="text-sm mb-4">
                Réduire de <strong>75%</strong> la base taxable en cas de transmission d'entreprise.
              </p>
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
              Anticiper sa succession, c'est protéger ses proches et éviter qu'ils ne subissent une fiscalité lourde ou des conflits familiaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Travail d'équipe
              </h3>
              <p className="text-[#686868] text-sm">
                Nous travaillons avec vos <strong>notaires et experts-comptables</strong>.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Anticipation
              </h3>
              <p className="text-[#686868] text-sm">
                Nous vous aidons à <strong>anticiper</strong> et à <strong>choisir les bons outils</strong>.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-[#112033] text-xl font-semibold mb-3">
                Stratégie optimisée
              </h3>
              <p className="text-[#686868] text-sm">
                Nous construisons une stratégie qui assure une <strong>succession fluide et la moins coûteuse possible</strong>.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] rounded-lg shadow-lg p-8 text-white text-center">
            <h3 className="text-xl font-semibold mb-6">
              👉 Chez <strong>Azalée Patrimoine</strong>, nous sommes le <strong>chef d'orchestre</strong> de votre transmission.
            </h3>
            
            <div className="mt-8 bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-6 rounded-r-lg">
              <p className="text-[#112033] text-center font-semibold">
                📅 <strong>Prenez rendez-vous dès aujourd'hui</strong> pour organiser votre succession avec sérénité.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#59E2E4] to-[#B99066] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            Prêt à organiser votre succession ?
          </h2>
          <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
            Nos experts vous accompagnent pour <strong>anticiper votre succession</strong> et protéger vos proches d'une fiscalité lourde ou de conflits familiaux.
          </p>
          
          <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-white text-xl font-semibold mb-4">
              👉 Chez <strong>Azalée Patrimoine</strong>, nous vous apportons :
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-white">
                  Un <strong>travail d'équipe</strong> avec notaires et experts-comptables
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-white">
                  Une <strong>anticipation</strong> et le choix des bons outils
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-white">
                  Une <strong>stratégie optimisée</strong> pour une succession fluide
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#4EBBBD] px-8 py-4 rounded-lg shadow-lg font-inter font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
              Simuler ma succession
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-white hover:text-[#4EBBBD] transition-colors duration-200">
              Consulter un expert
            </button>
          </div>

          <div className="mt-8 bg-[#E8F4F8] border-l-4 border-[#4EBBBD] p-4 rounded-r-lg max-w-4xl mx-auto">
            <p className="text-[#112033] text-center font-semibold">
              📅 <strong>Prenez rendez-vous dès aujourd'hui</strong> pour organiser votre succession avec sérénité.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}