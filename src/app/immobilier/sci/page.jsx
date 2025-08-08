"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

const LOCAL_STORAGE_KEY = 'sciPageContent';

const defaultContent = {
  heroTitle: "Découvrir la Société Civile Immobilière (SCI)",
  heroSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. La SCI permet de gérer et transmettre un patrimoine immobilier à plusieurs avec une grande souplesse statutaire et fiscale.",
  heroButton1: "L'essentiel",
  heroButton2: "Sommaire",
  rightCardTitle: "SCI : gérez et transmettez",
  rightCardSubtitle: "Optimisez la gestion, facilitez la transmission, choisissez votre fiscalité.",
  rightCardBenefits: [
    "Gestion mutualisée du patrimoine",
    "Transmission familiale allégée",
    "Choix IR / IS"
  ],
  rightCardButton1: "Prendre rendez-vous",
  rightCardButton2: "Fiscalité",
  essentielTitle: "L'essentiel",
  essentielItems: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. (#1)",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. (#2)",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. (#3)",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. (#4)",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. (#5)",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. (#6)"
  ],
  sommaireTitle: "Sommaire",
  sommaireItems: [
    "1. Qu'est-ce qu'une SCI ?",
    "2. Comment fonctionne une SCI ?",
    "3. Caractéristiques principales",
    "4. Pourquoi créer une SCI ?",
    "5. Les différentes formes",
    "6. Fiscalité : IR ou IS",
    "7. Questions-réponses"
  ],
  definitionTitle: "Qu'est-ce qu'une SCI ?",
  definitionText1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. La SCI est une société civile destinée à la détention et à la gestion de biens immobiliers par plusieurs associés.",
  definitionText2: "Elle dissocie le patrimoine immobilier du patrimoine privé des associés et offre une grande liberté statutaire.",
  definitionSavoirTitle: "À savoir",
  definitionSavoirItems: [
    "Au moins deux associés",
    "Objet civil (pas d'activité commerciale)",
    "Durée jusqu'à 99 ans"
  ]
};

export default function Page() {
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setContent({ ...defaultContent, ...parsed });
    }

    // Listen for custom content update events
    const handleContentUpdate = () => {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setContent({ ...defaultContent, ...parsed });
      }
    };

    window.addEventListener('contentUpdated', handleContentUpdate);
    return () => window.removeEventListener('contentUpdated', handleContentUpdate);
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero */}
      <section className="relative w-full bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
              <h1 className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-cairo font-semibold leading-tight mb-4">
                {content.heroTitle}
              </h1>
              <p className="text-[#374151] text-base sm:text-lg font-inter leading-relaxed mb-6">
                {content.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#lessentiel" className="inline-flex items-center justify-center bg-[#4EBBBD] text-white px-5 py-3 rounded-lg font-inter font-medium hover:bg-[#3DA8AA] transition-colors">{content.heroButton1}</a>
                <a href="#sommaire" className="inline-flex items-center justify-center bg-transparent border-2 border-[#4EBBBD] text-[#4EBBBD] px-5 py-3 rounded-lg font-inter font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors">{content.heroButton2}</a>
              </div>
            </div>
            
            {/* Right card */}
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-6 sm:p-8 text-white">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-source-sans font-semibold leading-tight mb-2">{content.rightCardTitle}</h2>
              <p className="text-sm opacity-90 mb-4">{content.rightCardSubtitle}</p>
              <ul className="space-y-2 text-sm font-source-sans font-semibold">
                {content.rightCardBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2"><span>✓</span><span>{benefit}</span></li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="#contact" className="bg-white text-[#005C69] px-5 py-3 rounded-lg font-inter font-medium hover:bg-gray-100 transition-colors">{content.rightCardButton1}</a>
                <a href="#fiscalite" className="border-2 border-white text-white px-5 py-3 rounded-lg font-inter font-medium hover:bg-white hover:text-[#005C69] transition-colors">{content.rightCardButton2}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'essentiel */}
      <section id="lessentiel" className="w-full bg-white py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">{content.essentielTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.essentielItems.map((item, i) => (
              <div key={i} className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-5">
                <p className="text-[#374151] text-sm font-inter">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sommaire */}
      <section id="sommaire" className="w-full bg-[#F2F2F2] py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
            <h3 className="text-[#112033] text-xl font-source-sans font-semibold mb-4">{content.sommaireTitle}</h3>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[#686868] font-inter">
              {content.sommaireItems.map((item, index) => (
                <li key={index}><a href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '')}`} className="hover:text-[#4EBBBD]">{item}</a></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Définition */}
      <section id="definition" className="w-full bg-white py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h3 className="text-[#005C69] text-2xl font-cairo font-semibold mb-4">{content.definitionTitle}</h3>
            <p className="text-[#374151] font-inter mb-4">{content.definitionText1}</p>
            <p className="text-[#374151] font-inter">{content.definitionText2}</p>
          </div>
          <div className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 sm:p-8">
            <h4 className="text-[#005C69] text-xl font-cairo font-semibold mb-3">{content.definitionSavoirTitle}</h4>
            <ul className="list-disc pl-5 space-y-2 text-[#374151] font-inter">
              {content.definitionSavoirItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fonctionnement */}
      <section id="fonctionnement" className="w-full bg-[#F2F2F2] py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-[#112033] text-2xl font-cairo font-semibold mb-6">Comment fonctionne une SCI ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <h5 className="text-[#005C69] font-cairo font-semibold mb-2">Associés</h5>
              <p className="text-[#374151] text-sm font-inter">Apports en numéraire ou en nature contre parts sociales. Droits de vote et bénéfices au prorata.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h5 className="text-[#005C69] font-cairo font-semibold mb-2">Gérant</h5>
              <p className="text-[#374151] text-sm font-inter">Gère les opérations courantes (gestion locative, travaux, administration) selon les statuts.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h5 className="text-[#005C69] font-cairo font-semibold mb-2">Statuts</h5>
              <p className="text-[#374151] text-sm font-inter">Règles souples : objet social, capital, siège, répartition des droits, modalités de décision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Caractéristiques */}
      <section id="caracteristiques" className="w-full bg-white py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-[#112033] text-2xl font-cairo font-semibold mb-6">Les principales caractéristiques d’une SCI</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Objet civil (pas d’achat-revente habituel)",
              "Gestion en commun hors indivision",
              "Responsabilité indéfinie et proportionnelle",
              "Apports en numéraire ou en nature",
            ].map((t, i) => (
              <div key={i} className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6">
                <p className="text-[#374151] text-sm font-inter">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi créer */}
      <section id="pourquoi" className="w-full bg-[#F2F2F2] py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-[#112033] text-2xl font-cairo font-semibold mb-6">Pourquoi créer une SCI ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <h5 className="text-[#005C69] font-cairo font-semibold mb-2">Transmission</h5>
              <p className="text-[#374151] text-sm font-inter">Lorem ipsum dolor sit amet, facilisis laoreet egestas. Démembrement et donations de parts.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h5 className="text-[#005C69] font-cairo font-semibold mb-2">Protection</h5>
              <p className="text-[#374151] text-sm font-inter">Sépare patrimoine immobilier et patrimoine privé. Organisation claire entre associés.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h5 className="text-[#005C69] font-cairo font-semibold mb-2">Souplesse</h5>
              <p className="text-[#374151] text-sm font-inter">Statuts modulables, gouvernance adaptée, durée jusqu’à 99 ans.</p>
            </div>
          </div>
                </div>
      </section>

      {/* Formes de SCI */}
      <section id="formes" className="w-full bg-white py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-[#112033] text-2xl font-cairo font-semibold mb-6">Les différentes formes existantes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { t: "SCI familiale", d: "Parts détenues entre membres d’une même famille." },
              { t: "SCI professionnelle", d: "Dissocie locaux pro et exploitation commerciale." },
              { t: "SCI de location", d: "Génère des loyers, éligible à certains dispositifs." },
              { t: "SCI à capital variable", d: "Fourchette min/max, souplesse d’entrées/sorties." },
              { t: "SCI d’attribution", d: "Acquérir, répartir, puis dissoudre après attribution." },
            ].map(({ t, d }, i) => (
              <div key={i} className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 shadow">
                <h5 className="text-[#005C69] font-cairo font-semibold mb-2">{t}</h5>
                <p className="text-[#374151] text-sm font-inter">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fiscalité IR vs IS */}
      <section id="fiscalite" className="w-full bg-[#F2F2F2] py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-[#112033] text-2xl font-cairo font-semibold mb-6">Comment est imposée une SCI ?</h3>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-[#F2F2F2]">
                  <tr>
                    <th className="text-left text-[#112033] font-source-sans font-semibold px-4 py-3">Critère</th>
                    <th className="text-left text-[#112033] font-source-sans font-semibold px-4 py-3">Impôt sur le revenu (IR)</th>
                    <th className="text-left text-[#112033] font-source-sans font-semibold px-4 py-3">Impôt sur les sociétés (IS)</th>
                  </tr>
                </thead>
                <tbody className="text-[#374151] font-inter">
                  <tr className="border-t"><td className="px-4 py-3">Déclaration</td><td className="px-4 py-3">Par les associés</td><td className="px-4 py-3">Par la société</td></tr>
                  <tr className="border-t bg-[#FAFAFA]"><td className="px-4 py-3">Base</td><td className="px-4 py-3">Quote-part des bénéfices</td><td className="px-4 py-3">Résultat imposable de la SCI</td></tr>
                  <tr className="border-t"><td className="px-4 py-3">Déductibilité</td><td className="px-4 py-3">Frais limités, déficit foncier</td><td className="px-4 py-3">Amortissements et charges</td></tr>
                  <tr className="border-t bg-[#FAFAFA]"><td className="px-4 py-3">Choix</td><td className="px-4 py-3">Régime par défaut</td><td className="px-4 py-3">Option irrévocable</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-[#686868] text-xs p-4">Informations indicatives, à adapter selon votre situation.</p>
          </div>
                </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="w-full bg-white py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 sm:p-8">
            <h3 className="text-[#005C69] text-xl font-cairo font-semibold mb-3">Questions & réponses</h3>
            <div className="space-y-3 text-[#374151] font-inter">
              <div>
                <p className="font-medium">SCI ou indivision ?</p>
                <p className="text-sm text-[#686868]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales nibh et lectus.</p>
              </div>
              <div>
                <p className="font-medium">SCI vs SCPI ?</p>
                <p className="text-sm text-[#686868]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
              <div>
                <p className="font-medium">Obligations comptables ?</p>
                <p className="text-sm text-[#686868]">Excepté à l’IS, la SCI reste légère. Tenir néanmoins une comptabilité interne.</p>
              </div>
            </div>
          </div>
          <div id="contact" className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-6 sm:p-8 text-center">
            <h4 className="text-white text-xl font-cairo font-semibold mb-2">Parler à un expert</h4>
            <p className="text-white text-sm mb-4">Nos conseillers vous accompagnent pour structurer votre SCI.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="bg-white text-[#005C69] px-5 py-3 rounded-lg font-inter font-medium hover:bg-gray-100 transition-colors">Prendre RDV</a>
              <a href="#" className="border-2 border-white text-white px-5 py-3 rounded-lg font-inter font-medium hover:bg-white hover:text-[#005C69] transition-colors">Nous écrire</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 