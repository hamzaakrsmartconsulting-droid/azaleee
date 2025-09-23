"use client";
import React from "react";
import Header from "../../../components/common/Header";

export default function CreditImmobilierPTZPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[543px] bg-gradient-to-r from-[#253F60] to-[#B99066] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="w-full lg:w-[733px] bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
              <h1 className="text-[#112033] text-xs sm:text-2xl lg:text-4xl font-cairo font-semibold leading-tight mb-6 sm:mb-8 text-center lg:text-left">
                Crédit immobilier et PTZ : le levier incontournable
              </h1>
              
              <p className="text-[#686868] text-xs sm:text-base lg:text-lg font-inter leading-relaxed mb-6 sm:mb-8 text-center lg:text-left">
                Le <strong>crédit immobilier</strong> est au cœur de toute stratégie patrimoniale. Il permet de réaliser un projet immobilier important sans disposer immédiatement de la totalité des fonds. Grâce à l'<strong>effet de levier du crédit</strong>, il est possible d'acheter un bien d'une valeur de 200 000 € avec seulement 20 000 € d'apport.
              </p>
              
              <p className="text-[#686868] text-xs sm:text-base lg:text-lg font-inter leading-relaxed mb-6 sm:mb-8 text-center lg:text-left">
                En parallèle, l'État soutient les primo-accédants grâce au <strong>PTZ (Prêt à Taux Zéro)</strong>. Ce dispositif d'aide permet de financer jusqu'à 40 % du prix d'un logement neuf sans payer d'intérêts, rendant l'accession à la propriété plus accessible.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <button 
                  onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                  className="bg-[#B99066] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg font-inter font-medium text-xs sm:text-base hover:bg-[#A67A5A] transition-colors duration-200"
                >
                  Prendre rendez-vous
                </button>
              </div>
            </div>
            
            {/* Right Card */}
            <div className="w-full lg:w-[467px] bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-lg p-6 sm:p-8 relative">
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <img
                  src="/images/placements-responsive-header-icon-56586a.png"
                  alt="Expert Icon"
                  className="w-8 h-8 sm:w-9 sm:h-9"
                />
                <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-source-sans font-semibold leading-tight">
                  Nos experts à votre service
                </h2>
              </div>
              
              <div className="absolute -top-16 -right-8 w-[51.3px] h-[51.3px] sm:w-[202px] sm:h-[202px] bg-gradient-to-r from-[#B99066] to-[#253F60] rounded-full shadow-lg flex items-center justify-center">
                <div className="text-center text-white font-source-sans font-semibold text-xs sm:text-base lg:text-xl leading-tight px-1 sm:px-0">
                  <span className="hidden sm:block">Effet →<br /></span>
                  <span className="sm:hidden">x10</span>
                  <span className="hidden sm:block">de levier</span>
                </div>
              </div>
              
              <div className="mt-8 sm:mt-12">
                <ul className="space-y-2 sm:space-y-3 text-white text-xs sm:text-sm font-source-sans font-semibold leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">1</span>
                    <span>Effet de levier financier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">1</span>
                    <span>PTZ jusqu'à 40% sans intérêts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">1</span>
                    <span>Constitution de patrimoine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">1</span>
                    <span>Optimisation fiscale</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Les avantages du crédit immobilier */}
          <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#112033] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
              Les avantages du crédit immobilier
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#253F60] rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-white font-cairo font-semibold text-lg mb-4 text-center">Effet de levier financier</h3>
                <p className="text-white text-sm font-inter">
                  Le crédit permet d'investir dans un bien immobilier d'une valeur bien supérieure à vos fonds propres. Avec 20 000 € d'apport, vous pouvez financer un projet de 200 000 € et bénéficier des loyers et de la valorisation du bien.
                </p>
              </div>
              
              <div className="bg-[#253F60] rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-white font-cairo font-semibold text-lg mb-4 text-center">Constitution de patrimoine</h3>
                <p className="text-white text-sm font-inter">
                  Chaque mensualité rembourse une partie de votre emprunt. À terme, vous devenez pleinement propriétaire d'un bien qui peut être transmis à vos enfants ou revendu avec une plus-value.
                </p>
              </div>
              
              <div className="bg-[#253F60] rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-white font-cairo font-semibold text-lg mb-4 text-center">Optimisation fiscale</h3>
                <p className="text-white text-sm font-inter">
                  Dans certains régimes (par exemple pour une SCI à l'IS), les intérêts d'emprunt sont déductibles, ce qui réduit l'imposition des loyers perçus.
                </p>
              </div>
              
              <div className="bg-[#253F60] rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-white font-cairo font-semibold text-lg mb-4 text-center">Sécurité du placement</h3>
                <p className="text-white text-sm font-inter">
                  L'immobilier est un actif tangible. Contrairement aux placements financiers volatils, un bien immobilier conserve une valeur patrimoniale, surtout si son emplacement est bien choisi.
                </p>
              </div>
            </div>
          </div>

          {/* Les inconvénients et risques */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#112033] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
              Les inconvénients et risques du crédit immobilier
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-[#F2F2F2] to-[#E8E8E8] rounded-lg p-6">
                <h3 className="text-[#B99066] font-cairo font-semibold text-lg mb-4">Endettement</h3>
                <p className="text-[#686868] text-sm font-inter">
                  Un emprunt engage sur le long terme (15 à 25 ans), ce qui réduit la capacité d'emprunt future.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[#F2F2F2] to-[#E8E8E8] rounded-lg p-6">
                <h3 className="text-[#B99066] font-cairo font-semibold text-lg mb-4">Risque de taux</h3>
                <p className="text-[#686868] text-sm font-inter">
                  La hausse des taux d'intérêt peut augmenter le coût total du crédit et réduire la rentabilité.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[#F2F2F2] to-[#E8E8E8] rounded-lg p-6">
                <h3 className="text-[#B99066] font-cairo font-semibold text-lg mb-4">Assurance emprunteur</h3>
                <p className="text-[#686868] text-sm font-inter">
                  Souvent coûteuse, elle peut représenter une charge importante si elle n'est pas renégociée.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[#F2F2F2] to-[#E8E8E8] rounded-lg p-6">
                <h3 className="text-[#B99066] font-cairo font-semibold text-lg mb-4">Vacance locative</h3>
                <p className="text-[#686868] text-sm font-inter">
                  Dans le cas d'un investissement locatif, l'absence de locataire peut déséquilibrer votre trésorerie.
                </p>
              </div>
            </div>
          </div>

          {/* Le PTZ */}
          <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#112033] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
              🔎 Le PTZ (Prêt à Taux Zéro) : un coup de pouce pour les primo-accédants
            </h2>
            <div className="space-y-6">
              <p className="text-[#686868] text-sm sm:text-base lg:text-lg font-inter leading-relaxed">
                Le <strong>Prêt à Taux Zéro</strong> est un dispositif de l'État destiné aux ménages achetant leur <strong>résidence principale</strong> pour la première fois. Il finance jusqu'à 40 % du prix du logement <strong>sans intérêts</strong>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="w-16 h-16 bg-[#253F60] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">40%</span>
                  </div>
                  <h3 className="text-[#112033] font-cairo font-semibold text-lg mb-2">Financement</h3>
                  <p className="text-[#686868] text-sm font-inter">Jusqu'à 40% du prix du logement</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">0%</span>
                  </div>
                  <h3 className="text-[#112033] font-cairo font-semibold text-lg mb-2">Taux d'intérêt</h3>
                  <p className="text-[#686868] text-sm font-inter">Aucun intérêt à payer</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="w-16 h-16 bg-[#B99066] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-[#112033] font-cairo font-semibold text-lg mb-2">Logements éligibles</h3>
                  <p className="text-[#686868] text-sm font-inter">Neufs ou anciens avec travaux</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#253F60] to-[#B99066] rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Exemple concret</h3>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <p className="text-sm">
                    Un couple achète un logement neuf à 220 000 € dans une zone éligible. Le PTZ finance 88 000 € sans intérêts, le reste est couvert par un crédit classique. Leur charge mensuelle est réduite, ce qui sécurise leur budget et facilite l'accession à la propriété.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Exemple concret d'effet de levier */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#112033] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
              Exemple concret d'effet de levier
            </h2>
            <div className="bg-gradient-to-r from-[#253F60] to-[#B99066] rounded-lg p-6 sm:p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">
                Un investisseur achète un appartement de 200 000 € avec 20 000 € d'apport et un prêt de 180 000 € sur 20 ans.
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <h4 className="font-semibold mb-2">Loyer perçu</h4>
                  <p className="text-lg font-bold">900 €/mois</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <h4 className="font-semibold mb-2">Mensualité crédit</h4>
                  <p className="text-lg font-bold">1 000 €/mois</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <h4 className="font-semibold mb-2">Effort d'épargne</h4>
                  <p className="text-lg font-bold">100 €/mois</p>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <h4 className="font-semibold mb-2">Résultat après 20 ans</h4>
                <p className="text-sm mb-2">
                  L'investisseur est pleinement propriétaire d'un bien valorisé <strong>240 000 €</strong> grâce à la revalorisation du marché.
                </p>
                <p className="text-sm">
                  Son effort total d'épargne a été de <strong>24 000 €</strong>, pour un patrimoine net <strong>dix fois supérieur</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Conseil Azalée Patrimoine */}
          <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#112033] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">
              Conseil Azalée Patrimoine
            </h2>
            <div className="space-y-6">
              <p className="text-[#686868] text-lg">
                Le crédit immobilier est un <strong>outil de richesse incomparable</strong>, mais il doit être utilisé avec prudence. La clé est d'adapter le montant emprunté, la durée et le type de crédit à votre situation et à vos objectifs patrimoniaux.
              </p>
              
              <p className="text-[#686868] text-lg">
                Chez <strong>Azalée Patrimoine</strong>, nous aidons nos clients à :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#253F60] rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-white">Négocier les meilleures conditions</h3>
                  <p className="text-sm text-white">De crédit (taux, assurance, durée)</p>
                </div>
                <div className="bg-[#253F60] rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-white">Optimiser l'effet de levier</h3>
                  <p className="text-sm text-white">Tout en gardant une trésorerie saine</p>
                </div>
                <div className="bg-[#253F60] rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-white">Profiter des dispositifs d'aide</h3>
                  <p className="text-sm text-white">Comme le PTZ lorsqu'ils sont éligibles</p>
                </div>
                <div className="bg-[#253F60] rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-white">Intégrer le financement</h3>
                  <p className="text-sm text-white">Dans une stratégie patrimoniale globale</p>
                </div>
              </div>
              
              <div className="bg-[#253F60] rounded-lg p-4 text-center">
                <p className="text-sm text-white">
                  Bien maîtrisé, le crédit immobilier n'est pas une charge : c'est un <strong>levier patrimonial</strong> qui vous permet de transformer une petite mise de départ en un patrimoine solide et transmissible.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-br from-[#253F60] to-[#B99066] rounded-lg p-8 sm:p-10 lg:p-12 text-center">
            <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-4 sm:mb-6">
              Prêt à financer votre projet immobilier ?
            </h2>
            <p className="text-white text-base sm:text-lg font-inter mb-6 sm:mb-8 max-w-2xl mx-auto">
              Nos experts Azalée Patrimoine vous accompagnent pour simuler votre capacité d'emprunt et découvrir la meilleure stratégie de financement pour vos projets immobiliers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                className="bg-white text-[#112033] px-8 py-4 rounded-lg font-inter font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Prendre rendez-vous
              </button>
              <button 
                onClick={() => window.open('https://calendly.com/rdv-azalee-patrimoine/30min', '_blank')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold hover:bg-white hover:text-[#112033] transition-colors duration-200"
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}