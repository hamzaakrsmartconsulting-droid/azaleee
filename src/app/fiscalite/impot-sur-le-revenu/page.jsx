import React from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function Page() {
  return (
    <>
      <Header />

      {/* Hero with light gradient and centered heading */}
      <section className="relative w-full bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-4">
            Impôt sur le revenu
          </h1>
          <p className="max-w-3xl mx-auto text-[#686868] text-base sm:text-lg font-inter leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non est sit amet massa finibus
            rhoncus. Vivamus sed efficitur nibh, in convallis urna.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#simulateur" className="inline-flex items-center justify-center bg-[#4EBBBD] text-white px-5 py-3 rounded-lg font-inter font-medium hover:bg-[#3DA8AA] transition-colors duration-200">Accéder au simulateur</a>
            <a href="#sommaire" className="inline-flex items-center justify-center bg-transparent border-2 border-[#4EBBBD] text-[#4EBBBD] px-5 py-3 rounded-lg font-inter font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors duration-200">Voir le sommaire</a>
          </div>
        </div>
      </section>

      {/* Floating quick stats */}
      <div className="relative -mt-10 sm:-mt-12 lg:-mt-14">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
            <p className="text-[#686868] text-xs uppercase tracking-wide mb-1">Lorem ipsum</p>
            <p className="text-[#112033] text-2xl font-cairo font-semibold">Barème progressif</p>
            <p className="text-[#686868] text-xs mt-1">Dolor sit amet</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
            <p className="text-[#686868] text-xs uppercase tracking-wide mb-1">Consectetur</p>
            <p className="text-[#112033] text-2xl font-cairo font-semibold">Quotient familial</p>
            <p className="text-[#686868] text-xs mt-1">Adipiscing elit</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
            <p className="text-[#686868] text-xs uppercase tracking-wide mb-1">Sed do</p>
            <p className="text-[#112033] text-2xl font-cairo font-semibold">Crédits & réductions</p>
            <p className="text-[#686868] text-xs mt-1">Eiusmod tempor</p>
          </div>
        </div>
      </div>

      {/* Sommaire and key sections */}
      <section id="sommaire" className="w-full py-10 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <h2 className="text-[#112033] text-2xl font-source-sans font-semibold mb-4">Sommaire</h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[#686868] font-inter">
              <li>1. Bases de l'impôt sur le revenu</li>
              <li>2. Tranches et barème en vigueur</li>
              <li>3. Quotient familial et parts</li>
              <li>4. Déductions, crédits et réductions</li>
              <li>5. Déclaration et calendrier</li>
              <li>6. Questions fréquentes</li>
            </ol>
          </div>

          {/* Two-column informational blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 sm:p-8">
              <h3 className="text-[#005C69] text-xl font-cairo font-semibold mb-3">1. Bases de l'impôt</h3>
              <p className="text-[#374151] font-inter mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a porta ipsum. Pellentesque non leo sit amet metus faucibus venenatis.</p>
              <ul className="list-disc pl-5 text-[#374151] font-inter space-y-1">
                <li>Assiette, revenu net imposable</li>
                <li>Foyer fiscal, rattachement</li>
                <li>Revenus catégoriels</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] rounded-lg p-6 sm:p-8">
              <h3 className="text-[#005C69] text-xl font-cairo font-semibold mb-3">2. Tranches et barème</h3>
              <p className="text-[#374151] font-inter mb-3">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer euismod, nisl ac facilisis egestas, nunc eros fermentum enim.</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white rounded-lg p-4 shadow">
                  <p className="text-[#686868]">0% jusqu'à 11 294 €</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <p className="text-[#686868]">11% de 11 295 à 28 797 €</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <p className="text-[#686868]">30% de 28 798 à 82 341 €</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <p className="text-[#686868]">41% de 82 342 à 177 106 €</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow col-span-2">
                  <p className="text-[#686868]">45% au-delà</p>
                </div>
              </div>
            </div>
          </div>

          {/* Wide card with quotient familial explanation */}
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
            <h3 className="text-[#005C69] text-xl font-cairo font-semibold mb-3">3. Quotient familial et parts</h3>
            <p className="text-[#374151] font-inter mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#F9FAFB] rounded-lg p-4">
                <p className="text-[#6B7280] text-xs uppercase mb-1">Célibataire</p>
                <p className="text-[#112033] font-source-sans font-semibold">1 part</p>
              </div>
              <div className="bg-[#F9FAFB] rounded-lg p-4">
                <p className="text-[#6B7280] text-xs uppercase mb-1">Marié / Pacsé</p>
                <p className="text-[#112033] font-source-sans font-semibold">2 parts</p>
              </div>
              <div className="bg-[#F9FAFB] rounded-lg p-4">
                <p className="text-[#6B7280] text-xs uppercase mb-1">Enfants</p>
                <p className="text-[#112033] font-source-sans font-semibold">+0,5 puis +1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulateur CTA section */}
      <section id="simulateur" className="w-full bg-[#F2F2F2] py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">Simulateur (démo)</h3>
              <p className="text-[#686868] text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget tellus eget risus varius posuere. (Demo statique)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">Revenu net imposable</label>
                  <input type="number" placeholder="€50,000" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">Situation</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent">
                    <option>Célibataire</option>
                    <option>Marié(e)/Pacsé(e)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">Enfants</label>
                  <input type="number" placeholder="0" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-[#686868] text-sm font-medium mb-2">Crédits d'impôt</label>
                  <input type="number" placeholder="€1,200" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent" />
                </div>
              </div>
              <button className="mt-6 inline-flex items-center justify-center bg-[#4EBBBD] text-white px-5 py-3 rounded-lg font-inter font-medium hover:bg-[#3DA8AA] transition-colors duration-200">Estimer</button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">Déclaration et calendrier</h3>
              <p className="text-[#374151] font-inter mb-3">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <ul className="list-disc pl-5 text-[#374151] font-inter space-y-1">
                <li>Déclaration en ligne: dates limites par département</li>
                <li>Paiement: prélèvement à la source et solde</li>
                <li>Suivi: avis d'imposition et corrections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="w-full bg-white py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 sm:p-8">
              <h3 className="text-[#005C69] text-xl font-cairo font-semibold mb-3">Questions fréquentes</h3>
              <div className="space-y-3 text-[#374151] font-inter">
                <div>
                  <p className="font-medium">Lorem ipsum dolor sit amet?</p>
                  <p className="text-sm text-[#686868]">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <div>
                  <p className="font-medium">Duis aute irure dolor in reprehenderit?</p>
                  <p className="text-sm text-[#686868]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-6 sm:p-8 text-center">
              <h4 className="text-white text-xl font-cairo font-semibold mb-2">Besoin d'aide ?</h4>
              <p className="text-white text-sm mb-4">Parlez à un conseiller pour optimiser votre fiscalité.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#" className="bg-white text-[#005C69] px-5 py-3 rounded-lg font-inter font-medium hover:bg-gray-100 transition-colors duration-200">Prendre RDV</a>
                <a href="#" className="border-2 border-white text-white px-5 py-3 rounded-lg font-inter font-medium hover:bg-white hover:text-[#005C69] transition-colors duration-200">Nous écrire</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 