"use client";
import React from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function Page() {
  return (
    <>
      <Header />
      
      {/* Hero */}
      <section className="relative w-full bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
              <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-4">
                SCI : un outil de gestion et de transmission patrimoniale
              </h1>
              <p className="text-[#374151] text-base sm:text-lg font-inter leading-relaxed mb-6">
                La <strong>Société Civile Immobilière (SCI)</strong> est une structure juridique très utilisée par les familles et les investisseurs pour acheter, gérer et transmettre un bien immobilier à plusieurs. Elle permet de sortir du régime complexe de l'indivision et d'organiser de manière plus claire la répartition des droits et des décisions.
              </p>
              <p className="text-[#374151] text-base sm:text-lg font-inter leading-relaxed mb-6">
                La SCI est ainsi devenue un <strong>véritable outil de stratégie patrimoniale</strong>, que ce soit pour acquérir un bien avec des proches, préparer sa succession ou optimiser la fiscalité de ses revenus immobiliers.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#avantages" className="inline-flex items-center justify-center bg-[#4EBBBD] text-white px-5 py-3 rounded-lg font-inter font-medium hover:bg-[#3DA8AA] transition-colors">Les avantages</a>
                <a href="#fiscalite" className="inline-flex items-center justify-center bg-transparent border-2 border-[#4EBBBD] text-[#4EBBBD] px-5 py-3 rounded-lg font-inter font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors">IR ou IS ?</a>
              </div>
            </div>
            
            {/* Right card */}
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-6 sm:p-8 text-white">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-source-sans font-semibold leading-tight mb-2">SCI : gérez et transmettez</h2>
              <p className="text-sm opacity-90 mb-4">Outil puissant de gestion et de transmission patrimoniale</p>
              <ul className="space-y-2 text-sm font-source-sans font-semibold">
                <li className="flex items-start gap-2"><span>✓</span><span>Souplesse familiale</span></li>
                <li className="flex items-start gap-2"><span>✓</span><span>Gestion simplifiée</span></li>
                <li className="flex items-start gap-2"><span>✓</span><span>Optimisation fiscale IR/IS</span></li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="#conseil" className="bg-white text-[#005C69] px-5 py-3 rounded-lg font-inter font-medium hover:bg-gray-100 transition-colors">Conseil expert</a>
                <a href="#fiscalite" className="border-2 border-white text-white px-5 py-3 rounded-lg font-inter font-medium hover:bg-white hover:text-[#005C69] transition-colors">Fiscalité</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les avantages de la SCI */}
      <section id="avantages" className="w-full bg-white py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6 text-center">✅ Les avantages de la SCI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-[#59E2E4] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-4 text-center">Souplesse familiale</h3>
              <p className="text-[#374151] text-sm font-inter">
                La SCI facilite la transmission d'un patrimoine. Les associés peuvent donner progressivement des parts sociales à leurs enfants, tout en bénéficiant de l'abattement de <strong>100 000 € par parent et par enfant</strong>, renouvelable tous les 15 ans. Cela permet d'anticiper une succession tout en conservant une maîtrise sur le patrimoine.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚖️</span>
              </div>
              <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-4 text-center">Gestion simplifiée</h3>
              <p className="text-[#374151] text-sm font-inter">
                Contrairement à l'indivision, source fréquente de blocages entre héritiers, la SCI offre une <strong>gouvernance claire</strong> : un gérant est désigné, et les règles de prise de décision sont fixées dans les statuts.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-[#4EBBBD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-[#005C69] font-cairo font-semibold text-lg mb-4 text-center">Optimisation fiscale</h3>
              <p className="text-[#374151] text-sm font-inter">
                La SCI offre la possibilité de choisir entre deux régimes fiscaux :
              </p>
              <ul className="text-[#374151] text-sm font-inter mt-2 space-y-1">
                <li>• <strong>SCI à l'IR</strong> : revenus imposés directement chez les associés</li>
                <li>• <strong>SCI à l'IS</strong> : amortissement possible du bien</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Les inconvénients de la SCI */}
      <section className="w-full bg-[#F2F2F2] py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6 text-center">⚠️ Les inconvénients de la SCI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-[#B99066] font-cairo font-semibold text-lg mb-4 text-center">Formalités de création et de gestion</h3>
              <p className="text-[#374151] text-sm font-inter">
                Une SCI nécessite des statuts, une assemblée générale annuelle et une comptabilité plus stricte qu'une détention en direct.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚠️</span>
              </div>
              <h3 className="text-[#B99066] font-cairo font-semibold text-lg mb-4 text-center">Responsabilité des associés</h3>
              <p className="text-[#374151] text-sm font-inter">
                Chacun est <strong>indéfiniment responsable</strong> des dettes sociales, à hauteur de sa participation.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-[#B99066] font-cairo font-semibold text-lg mb-4 text-center">Choix fiscal piégeux</h3>
              <p className="text-[#374151] text-sm font-inter">
                Le passage à l'IS peut sembler attractif (grâce à l'amortissement), mais il entraîne une <strong>fiscalité lourde sur la plus-value</strong> à la revente, car celle-ci est calculée sur la valeur nette comptable (après amortissements) et non sur le prix d'achat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCI à l'IR ou SCI à l'IS */}
      <section id="fiscalite" className="w-full bg-white py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6 text-center">🔍 SCI à l'IR ou SCI à l'IS : quel régime choisir ?</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-r from-[#59E2E4] to-[#4EBBBD] rounded-lg p-6 sm:p-8 text-white">
              <h3 className="text-xl font-semibold mb-4 text-center">SCI à l'IR</h3>
              <div className="space-y-4">
                <p className="text-sm">
                  Adaptée pour des investisseurs qui perçoivent des <strong>loyers modestes</strong> ou qui souhaitent profiter de dispositifs comme le <strong>déficit foncier</strong>.
                </p>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <p className="text-sm">
                    ✅ <strong>Avantages :</strong> Fiscalité simple, déficit foncier possible
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <p className="text-sm">
                    ⚠️ <strong>Inconvénients :</strong> Fiscalité lourde si revenus élevés (tranche marginale d'imposition)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#B99066] to-[#D4A574] rounded-lg p-6 sm:p-8 text-white">
              <h3 className="text-xl font-semibold mb-4 text-center">SCI à l'IS</h3>
              <div className="space-y-4">
                <p className="text-sm">
                  Intéressante pour des projets générant <strong>beaucoup de loyers</strong> ou nécessitant d'importants travaux.
                </p>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <p className="text-sm">
                    ✅ <strong>Avantages :</strong> Amortissement possible, réduction du bénéfice imposable
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <p className="text-sm">
                    ⚠️ <strong>Inconvénients :</strong> Sortie pénalisante, plus-value calculée sur valeur réduite
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tableau comparatif */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-[#F2F2F2]">
                  <tr>
                    <th className="text-left text-[#112033] font-source-sans font-semibold px-4 py-3">Critère</th>
                    <th className="text-left text-[#112033] font-source-sans font-semibold px-4 py-3">SCI à l'IR</th>
                    <th className="text-left text-[#112033] font-source-sans font-semibold px-4 py-3">SCI à l'IS</th>
                  </tr>
                </thead>
                <tbody className="text-[#374151] font-inter">
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Imposition des revenus</td>
                    <td className="px-4 py-3">Directement chez les associés (revenus fonciers)</td>
                    <td className="px-4 py-3">Au niveau de la société (IS)</td>
                  </tr>
                  <tr className="border-t bg-[#FAFAFA]">
                    <td className="px-4 py-3 font-medium">Amortissement</td>
                    <td className="px-4 py-3">Non possible</td>
                    <td className="px-4 py-3">Possible (réduit le résultat imposable)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Déficit foncier</td>
                    <td className="px-4 py-3">Possible</td>
                    <td className="px-4 py-3">Non applicable</td>
                  </tr>
                  <tr className="border-t bg-[#FAFAFA]">
                    <td className="px-4 py-3 font-medium">Plus-value à la revente</td>
                    <td className="px-4 py-3">Régime des particuliers (abattements durée)</td>
                    <td className="px-4 py-3">Calculée sur valeur nette comptable</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Profil adapté</td>
                    <td className="px-4 py-3">Loyers modestes, déficit foncier</td>
                    <td className="px-4 py-3">Gros loyers, importants travaux</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Exemple concret */}
      <section className="w-full bg-[#F2F2F2] py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6 text-center">👉 Exemple concret</h2>
          <div className="bg-gradient-to-r from-[#59E2E4] to-[#4EBBBD] rounded-lg p-6 sm:p-8 text-white">
            <h3 className="text-xl font-semibold mb-6">
              Deux frères héritent d'un immeuble évalué à 600 000 €
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-semibold mb-3">❌ Sans SCI (indivision)</h4>
                <ul className="text-sm space-y-2">
                  <li>• Chaque décision doit être prise à l'unanimité</li>
                  <li>• Risque de blocages familiaux</li>
                  <li>• Gestion complexe</li>
                  <li>• Transmission difficile</li>
                </ul>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-semibold mb-3">✅ Avec SCI</h4>
                <ul className="text-sm space-y-2">
                  <li>• Création d'une SCI avec statuts clairs</li>
                  <li>• Choix du régime IR (abattements durée)</li>
                  <li>• Gérant désigné avec pouvoirs définis</li>
                  <li>• Évite les blocages familiaux</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-white bg-opacity-20 rounded-lg p-4 text-center">
              <p className="text-sm">
                <strong>Résultat :</strong> Les statuts définissent les pouvoirs du gérant et évitent les blocages familiaux. Les frères peuvent anticiper la transmission progressive à leurs enfants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conseil Azalée Patrimoine */}
      <section id="conseil" className="w-full bg-white py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-6 sm:p-8 lg:p-10 text-white">
            <h2 className="text-white text-2xl sm:text-3xl font-cairo font-semibold mb-6 text-center">
              🎯 Conseil Azalée Patrimoine
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-center">
                La SCI est un <strong>outil puissant de gestion et de transmission</strong>, mais elle doit être maniée avec précaution. Le choix entre <strong>IR et IS</strong> est une décision stratégique qui doit être prise en fonction de votre fiscalité actuelle, de vos revenus et de vos projets à long terme.
              </p>
              
              <p className="text-lg text-center">
                Chez <strong>Azalée Patrimoine</strong>, nous accompagnons nos clients pour :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#4EBBBD] text-xl">📋</span>
                  </div>
                  <h3 className="font-semibold mb-2">Créer leur SCI</h3>
                  <p className="text-sm">Avec des statuts adaptés à leur situation familiale</p>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#4EBBBD] text-xl">💰</span>
                  </div>
                  <h3 className="font-semibold mb-2">Choisir le régime fiscal</h3>
                  <p className="text-sm">Le plus pertinent (IR ou IS)</p>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#4EBBBD] text-xl">🔄</span>
                  </div>
                  <h3 className="font-semibold mb-2">Anticiper la transmission</h3>
                  <p className="text-sm">De leurs biens immobiliers dans un cadre fiscal optimisé</p>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <p className="text-sm">
                  👉 La SCI n'est pas une simple "boîte à outils" juridique : bien pensée, elle devient un <strong>véritable levier patrimonial</strong> qui sécurise votre patrimoine familial sur plusieurs générations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="w-full bg-[#F2F2F2] py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-8 sm:p-10 lg:p-12 text-center">
            <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-4 sm:mb-6">
              Prêt à créer votre SCI ?
            </h2>
            <p className="text-white text-base sm:text-lg font-inter mb-6 sm:mb-8 max-w-2xl mx-auto">
              Nos experts Azalée Patrimoine vous accompagnent pour savoir si la SCI est adaptée à votre situation et définir la fiscalité la plus avantageuse (IR ou IS).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#005C69] px-8 py-4 rounded-lg font-inter font-semibold hover:bg-gray-100 transition-colors duration-200">
                Prendre rendez-vous
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold hover:bg-white hover:text-[#005C69] transition-colors duration-200">
                Nous écrire
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}