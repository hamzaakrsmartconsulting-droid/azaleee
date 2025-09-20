"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

const LOCAL_STORAGE_KEY = 'vefaPageContent';

const defaultContent = {
  heroTitle: "VEFA (Vente en l'État Futur d'Achèvement)",
  heroSubtitle: "Investir dans l'immobilier neuf, et plus particulièrement en VEFA, consiste à acheter un logement sur plan, dont la construction est en cours ou à venir. Ce mode d'acquisition séduit de nombreux investisseurs qui souhaitent bénéficier d'un bien moderne, conforme aux normes énergétiques actuelles, et d'avantages fiscaux attractifs.",
  heroButton1: "L'essentiel",
  heroButton2: "Sommaire",
  rightCardTitle: "VEFA : investissez dans le neuf",
  rightCardSubtitle: "Bénéficiez d'avantages fiscaux, d'un financement adapté et d'une plus-value garantie.",
  rightCardBenefits: [
    "Logements économes en énergie (RE2020)",
    "Frais de notaire réduits (2-3% vs 7%)",
    "Garanties constructeur sécurisées",
    "Défiscalisation loi Pinel"
  ],
  rightCardButton1: "Prendre rendez-vous",
  rightCardButton2: "Fiscalité",
  essentielTitle: "L'essentiel",
  essentielItems: [
    "Des logements économes en énergie grâce aux normes RE2020, gage de valorisation à long terme.",
    "Des frais de notaire réduits (2 à 3 % contre 7 % dans l'ancien).",
    "Des garanties constructeur (parfait achèvement, décennale, biennale) qui sécurisent l'investissement.",
    "La possibilité de bénéficier de dispositifs fiscaux comme la loi Pinel, réduisant significativement l'impôt.",
    "Délais de livraison pouvant s'allonger, avec parfois des retards de chantier.",
    "Surcote du neuf : le prix au m² est souvent plus élevé que dans l'ancien, ce qui limite la rentabilité."
  ],
  sommaireTitle: "Sommaire",
  sommaireItems: [
    "1. Qu'est-ce que la VEFA ?",
    "2. Avantages de la VEFA",
    "3. Inconvénients à anticiper",
    "4. Exemple concret",
    "5. Financement et étapes",
    "6. Fiscalité et défiscalisation",
    "7. Conseil Azalée Patrimoine",
    "8. Risques et précautions",
    "9. Comparaison avec l'existant"
  ],
  definitionTitle: "Qu'est-ce que la VEFA ?",
  definitionText1: "La Vente en l'État Futur d'Achèvement (VEFA) est un contrat de vente d'un bien immobilier neuf qui n'est pas encore terminé au moment de la signature.",
  definitionText2: "L'acheteur devient propriétaire du bien dès la signature du contrat, mais la livraison et le transfert de propriété effective se font à la fin des travaux.",
  definitionSavoirTitle: "À savoir",
  definitionSavoirItems: [
    "Contrat de vente signé avant achèvement",
    "Propriété acquise dès la signature",
    "Livraison à la fin des travaux",
    "Garanties constructeur obligatoires"
  ],
  avantagesTitle: "Avantages de la VEFA",
  avantagesItems: [
    {
      title: "Économies d'énergie",
      description: "Logements conformes aux normes RE2020, gage de valorisation à long terme",
      icon: "🌱"
    },
    {
      title: "Frais réduits",
      description: "Frais de notaire réduits (2 à 3 % contre 7 % dans l'ancien)",
      icon: "💰"
    },
    {
      title: "Garanties sécurisées",
      description: "Garanties constructeur (parfait achèvement, décennale, biennale)",
      icon: "🛡️"
    },
    {
      title: "Défiscalisation",
      description: "Dispositifs fiscaux comme la loi Pinel réduisant significativement l'impôt",
      icon: "📊"
    }
  ],
  inconvenientsTitle: "Inconvénients",
  inconvenientsItems: [
    {
      title: "Délais de livraison",
      description: "Délais pouvant s'allonger, avec parfois des retards de chantier",
      icon: "⏰"
    },
    {
      title: "Surcote du neuf",
      description: "Le prix au m² est souvent plus élevé que dans l'ancien, limitant la rentabilité",
      icon: "📈"
    },
    {
      title: "Plafonds de loyers",
      description: "En cas de Pinel, plafonds pouvant restreindre la cible de locataires",
      icon: "🏠"
    },
    {
      title: "Risque de vacance",
      description: "Vacance locative si l'emplacement est mal choisi (zones saturées)",
      icon: "⚠️"
    }
  ],
  exempleTitle: "Exemple concret",
  exempleContent: "Un investisseur acquiert un T2 en VEFA à Nantes pour 230 000 €. Grâce au dispositif Pinel, il bénéficie d'une réduction d'impôt de 4 600 €/an pendant 9 ans. Loué 650 €/mois, son bien lui permet de limiter son effort d'épargne à 150 €/mois tout en se constituant un patrimoine valorisé.",
  financementTitle: "Financement et étapes",
  financementSteps: [
    {
      step: "1",
      title: "Signature du contrat",
      description: "Engagement d'achat avec un acompte de 5%"
    },
    {
      step: "2",
      title: "Période de construction",
      description: "Paiement des intérêts uniquement"
    },
    {
      step: "3",
      title: "Livraison",
      description: "Paiement du solde et transfert de propriété"
    },
    {
      step: "4",
      title: "Possession",
      description: "Occupation et jouissance du bien"
    }
  ],
  fiscaliteTitle: "Fiscalité et défiscalisation",
  fiscaliteContent: "La VEFA offre plusieurs avantages fiscaux : TVA réduite, possibilité de déficit foncier, et éligibilité aux dispositifs de défiscalisation comme Pinel ou Malraux selon la localisation et le type de bien.",
  conseilTitle: "Conseil Azalée Patrimoine",
  conseilContent: "La VEFA est particulièrement adaptée aux investisseurs qui recherchent sécurité et défiscalisation. Mais le choix de la ville, du quartier et de la demande locative réelle est primordial. Chez Azalée Patrimoine, nous vous aidons à sélectionner uniquement les programmes offrant un véritable potentiel locatif et patrimonial.",
  risquesTitle: "Risques et précautions",
  risquesItems: [
    "Délais de livraison non respectés",
    "Qualité des finitions",
    "Évolution des prix du marché",
    "Risques de défaillance du promoteur"
  ],
  comparaisonTitle: "VEFA vs Immobilier existant",
  comparaisonData: [
    { critere: "TVA", vefa: "5,5%", existant: "20%" },
    { critere: "Plus-value", vefa: "Élevée", existant: "Modérée" },
    { critere: "Délai", vefa: "12-24 mois", existant: "Immédiat" },
    { critere: "Risque", vefa: "Modéré", existant: "Faible" }
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
            <h4 className="text-[#112033] text-lg font-source-sans font-semibold mb-4">{content.definitionSavoirTitle}</h4>
            <ul className="space-y-2 text-[#374151] font-inter">
              {content.definitionSavoirItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#4EBBBD] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section id="avantages" className="w-full bg-[#F2F2F2] py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-8 text-center">{content.avantagesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.avantagesItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">{item.title}</h3>
                <p className="text-[#374151] text-sm font-inter">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inconvénients */}
      <section id="inconvenients" className="w-full bg-white py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-8 text-center">{content.inconvenientsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.inconvenientsItems.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-[#FFF5F5] to-[#FED7D7] rounded-lg shadow-lg p-6 text-center border-l-4 border-[#E53E3E]">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">{item.title}</h3>
                <p className="text-[#374151] text-sm font-inter">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exemple concret */}
      <section id="exemple" className="w-full bg-[#F2F2F2] py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">{content.exempleTitle}</h2>
            <div className="bg-gradient-to-r from-[#F0F9FF] to-[#E0F2FE] rounded-lg p-6 border-l-4 border-[#4EBBBD]">
              <p className="text-[#374151] text-base font-inter leading-relaxed">{content.exempleContent}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financement */}
      <section id="financement" className="w-full bg-white py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-8 text-center">{content.financementTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.financementSteps.map((step, index) => (
              <div key={index} className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-[#4EBBBD] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-[#112033] text-lg font-source-sans font-semibold mb-3">{step.title}</h3>
                <p className="text-[#374151] text-sm font-inter">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fiscalité */}
      <section id="fiscalite" className="w-full bg-[#F2F2F2] py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">{content.fiscaliteTitle}</h2>
            <p className="text-[#374151] text-base font-inter leading-relaxed">{content.fiscaliteContent}</p>
          </div>
        </div>
      </section>

      {/* Conseil Azalée Patrimoine */}
      <section id="conseil" className="w-full bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6 text-center">{content.conseilTitle}</h2>
            <div className="bg-gradient-to-r from-[#F0F9FF] to-[#E0F2FE] rounded-lg p-6 border-l-4 border-[#4EBBBD]">
              <p className="text-[#374151] text-base font-inter leading-relaxed">{content.conseilContent}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Risques */}
      <section id="risques" className="w-full bg-white py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6">{content.risquesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.risquesItems.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-[#FFF5F5] to-[#FED7D7] rounded-lg p-5 border-l-4 border-[#E53E3E]">
                <p className="text-[#374151] text-sm font-inter font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparaison */}
      <section id="comparaison" className="w-full bg-[#F2F2F2] py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
            <h2 className="text-[#112033] text-2xl sm:text-3xl font-cairo font-semibold mb-6 text-center">{content.comparaisonTitle}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#4EBBBD] text-white">
                    <th className="border border-gray-300 p-3 text-left font-source-sans font-semibold">Critère</th>
                    <th className="border border-gray-300 p-3 text-center font-source-sans font-semibold">VEFA</th>
                    <th className="border border-gray-300 p-3 text-center font-source-sans font-semibold">Existant</th>
                  </tr>
                </thead>
                <tbody>
                  {content.comparaisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="border border-gray-300 p-3 font-inter font-medium text-[#112033]">{row.critere}</td>
                      <td className="border border-gray-300 p-3 text-center font-inter text-[#4EBBBD] font-semibold">{row.vefa}</td>
                      <td className="border border-gray-300 p-3 text-center font-inter text-[#686868]">{row.existant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="w-full bg-gradient-to-r from-[#4EBBBD] to-[#59E2E4] py-16 sm:py-20">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-cairo font-semibold mb-6">
            Prêt à investir en VEFA ?
          </h2>
          <p className="text-white text-lg font-inter mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans votre projet d'investissement immobilier neuf avec une approche personnalisée.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#005C69] px-8 py-4 rounded-lg font-inter font-semibold hover:bg-gray-100 transition-colors">
              Prendre rendez-vous
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold hover:bg-white hover:text-[#005C69] transition-colors">
              Télécharger le guide
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
