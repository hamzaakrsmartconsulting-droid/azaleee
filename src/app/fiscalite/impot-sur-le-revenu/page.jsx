"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

export default function Page() {
  const [content, setContent] = useState({});
  const [isLoadingFromDatabase, setIsLoadingFromDatabase] = useState(false);
  const [contentSource, setContentSource] = useState('Default');
  const [pollingInterval, setPollingInterval] = useState(null);

  // Default content structure
  const defaultContent = {
    hero: {
      title: "Impôt sur le revenu",
      description: "L'impôt sur le revenu (IR) est l'un des piliers du système fiscal français. Depuis 2019, il est prélevé à la source, ce qui permet une collecte immédiate et continue. Il s'applique aux revenus d'activité, fonciers, financiers et exceptionnels.",
      button1Text: "Accéder au simulateur",
      button1Link: "#simulateur",
      button2Text: "Voir le sommaire",
      button2Link: "#sommaire"
    },
    stats: {
      stats: [
        {
          subtitle: "Depuis 2019",
          title: "Prélèvement à la source",
          description: "Collecte immédiate et continue"
        },
        {
          subtitle: "Optimisation",
          title: "Dispositifs fiscaux",
          description: "PER, Pinel, Girardin, déficit foncier"
        },
        {
          subtitle: "Stratégie",
          title: "Patrimoine",
          description: "Maîtrise de l'IR essentielle"
        }
      ]
    },
    sommaire: {
      title: "Sommaire",
      items: [
        "1. Qu'est-ce que l'impôt sur le revenu ?",
        "2. Calcul de l'impôt sur le revenu",
        "3. Quotient familial et parts",
        "4. Prélèvement à la source",
        "5. Optimisation fiscale",
        "6. Déclaration et paiement"
      ]
    },
    content: {
      sections: [
        {
          title: "Qu'est-ce que l'impôt sur le revenu ?",
          content: "L'impôt sur le revenu est un impôt direct qui frappe le revenu net des personnes physiques. Il s'applique aux revenus de source française et étrangère des personnes domiciliées en France."
        },
        {
          title: "Calcul de l'impôt sur le revenu",
          content: "Le calcul de l'IR se fait selon un barème progressif par tranches. Le taux d'imposition varie de 0% à 45% selon le niveau de revenus."
        }
      ]
    },
    cta: {
      title: "Besoin d'aide pour optimiser votre fiscalité ?",
      description: "Nos experts en fiscalité vous accompagnent pour réduire votre impôt sur le revenu et optimiser votre situation fiscale.",
      buttonText: "Demander une consultation gratuite"
    }
  };

  // Load content from CMS
  const loadContentFromCMS = async () => {
    try {
      setIsLoadingFromDatabase(true);
      const response = await fetch('/api/pages/impot-sur-le-revenu');
      if (response.ok) {
        const data = await response.json();
        if (data.content && Object.keys(data.content).length > 0) {
          setContent(data.content);
          setContentSource('Database');
          console.log('✅ Impôt sur le revenu content loaded from database');
        } else {
          setContent(defaultContent);
          setContentSource('Default');
          console.log('⚠️ No database content found, using default');
        }
      } else {
        setContent(defaultContent);
        setContentSource('Default');
        console.log('❌ Failed to load from database, using default');
      }
    } catch (error) {
      console.error('Error loading impot-sur-le-revenu content:', error);
      setContent(defaultContent);
      setContentSource('Default');
    } finally {
      setIsLoadingFromDatabase(false);
    }
  };

  useEffect(() => {
    // Set default content first
    setContent(defaultContent);
    
    // Load content from CMS
    loadContentFromCMS();
    
    // Start polling after initial load
    const interval = setInterval(() => {
      loadContentFromCMS();
    }, 30000); // Poll every 30 seconds
    
    setPollingInterval(interval);
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  const handleManualReload = () => {
    loadContentFromCMS();
  };

  return (
    <>
      {/* Loading indicator */}
      {isLoadingFromDatabase && (
        <div className="fixed top-4 right-4 z-50 bg-blue-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-2 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-spin"></div>
          Loading from Database...
        </div>
      )}
      
      <Header />

      {/* Hero with light gradient and centered heading */}
      <section className="relative w-full bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[#112033] text-2xl sm:text-3xl lg:text-5xl font-cairo font-semibold leading-tight mb-4 sm:mb-6">
            {content.hero?.title || defaultContent.hero.title}
          </h1>
          <p className="max-w-3xl mx-auto text-[#686868] text-sm sm:text-base lg:text-lg font-inter leading-relaxed mb-6 sm:mb-8">
            {content.hero?.description || defaultContent.hero.description}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={content.hero?.button1Link || defaultContent.hero.button1Link} className="inline-flex items-center justify-center bg-[#4EBBBD] text-white px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-inter font-medium hover:bg-[#3DA8AA] transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base">
              {content.hero?.button1Text || defaultContent.hero.button1Text}
            </a>
            <a href={content.hero?.button2Link || defaultContent.hero.button2Link} className="inline-flex items-center justify-center bg-transparent border-2 border-[#4EBBBD] text-[#4EBBBD] px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-inter font-medium hover:bg-[#4EBBBD] hover:text-white transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base">
              {content.hero?.button2Text || defaultContent.hero.button2Text}
            </a>
          </div>
        </div>
      </section>

      {/* Floating quick stats */}
      <div className="relative -mt-8 sm:-mt-10 lg:-mt-14">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {(content.stats?.stats || defaultContent.stats.stats).map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100">
              <p className="text-[#686868] text-xs uppercase tracking-wide mb-1">{stat.subtitle}</p>
              <p className="text-[#112033] text-lg sm:text-xl lg:text-2xl font-cairo font-semibold">{stat.title}</p>
              <p className="text-[#686868] text-xs sm:text-sm mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sommaire and key sections */}
      <section id="sommaire" className="w-full py-8 sm:py-10 lg:py-16 bg-white">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-10 mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-[#112033] text-xl sm:text-2xl font-source-sans font-semibold mb-4">
              {content.sommaire?.title || defaultContent.sommaire.title}
            </h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[#686868] font-inter text-sm sm:text-base">
              {(content.sommaire?.items || defaultContent.sommaire.items).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>

          {/* Two-column informational blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {(content.content?.sections || defaultContent.content.sections).slice(0, 2).map((section, index) => (
              <div key={index} className={`bg-gradient-to-r ${index === 0 ? 'from-[#F8F9FA] to-[#E9ECEF]' : 'from-[#FFEFD5] to-[#D7E8FF]'} rounded-lg p-4 sm:p-6 lg:p-8`}>
                <h3 className="text-[#005C69] text-lg sm:text-xl font-cairo font-semibold mb-3">{section.title}</h3>
                <p className="text-[#374151] font-inter mb-3 text-sm sm:text-base">{section.content}</p>
                {section.details && (
                  <ul className="list-disc pl-5 text-[#374151] font-inter space-y-1 text-sm sm:text-base">
                    {section.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Wide card with optimization explanation */}
          <div className="mt-6 sm:mt-8 bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-10">
            <h3 className="text-[#005C69] text-lg sm:text-xl font-cairo font-semibold mb-3">3. Optimisation fiscale patrimoniale</h3>
            <p className="text-[#374151] font-inter mb-4 text-sm sm:text-base">Pour un contribuable patrimonial, la maîtrise de l'impôt sur le revenu est essentielle afin d'optimiser la charge fiscale et d'adapter la stratégie d'investissement.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-[#F9FAFB] rounded-lg p-3 sm:p-4">
                <p className="text-[#6B7280] text-xs uppercase mb-1">Optimisation</p>
                <p className="text-[#112033] font-source-sans font-semibold text-sm sm:text-base">Charge fiscale</p>
                <p className="text-[#6B7280] text-xs mt-1">Grâce aux dispositifs existants</p>
              </div>
              <div className="bg-[#F9FAFB] rounded-lg p-3 sm:p-4">
                <p className="text-[#6B7280] text-xs uppercase mb-1">Stratégie</p>
                <p className="text-[#112033] font-source-sans font-semibold text-sm sm:text-base">Investissement</p>
                <p className="text-[#6B7280] text-xs mt-1">Selon la fiscalité applicable</p>
              </div>
              <div className="bg-[#F9FAFB] rounded-lg p-3 sm:p-4 sm:col-span-2 lg:col-span-1">
                <p className="text-[#6B7280] text-xs uppercase mb-1">Anticipation</p>
                <p className="text-[#112033] font-source-sans font-semibold text-sm sm:text-base">Réformes fiscales</p>
                <p className="text-[#6B7280] text-xs mt-1">Impact sur le rendement net</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispositifs fiscaux */}
      <section className="w-full bg-[#F2F2F2] py-8 sm:py-10 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#112033] text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold mb-6 sm:mb-8 text-center">Dispositifs de défiscalisation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 text-center">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-[#112033] text-base sm:text-lg font-source-sans font-semibold mb-3">PER</h3>
              <p className="text-[#374151] text-xs sm:text-sm font-inter">Plan d'Épargne Retraite pour optimiser la fiscalité</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 text-center">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-[#112033] text-base sm:text-lg font-source-sans font-semibold mb-3">Loi Pinel</h3>
              <p className="text-[#374151] text-xs sm:text-sm font-inter">Investissement locatif avec réduction d'impôt</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 text-center">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-[#112033] text-base sm:text-lg font-source-sans font-semibold mb-3">Girardin</h3>
              <p className="text-[#374151] text-xs sm:text-sm font-inter">Investissement outre-mer avec avantages fiscaux</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 text-center">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-[#112033] text-base sm:text-lg font-source-sans font-semibold mb-3">Déficit foncier</h3>
              <p className="text-[#374151] text-xs sm:text-sm font-inter">Réduction d'impôt via travaux immobiliers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simulateur CTA section */}
      <section id="simulateur" className="w-full bg-[#F2F2F2] py-8 sm:py-10 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-[#112033] text-lg sm:text-xl font-source-sans font-semibold mb-4">Simulateur (démo)</h3>
              <p className="text-[#686868] text-xs sm:text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget tellus eget risus varius posuere. (Demo statique)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[#686868] text-xs sm:text-sm font-medium mb-2">Revenu net imposable</label>
                  <input type="number" placeholder="€50,000" className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-[#686868] text-xs sm:text-sm font-medium mb-2">Situation</label>
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent text-sm sm:text-base">
                    <option>Célibataire</option>
                    <option>Marié(e)/Pacsé(e)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#686868] text-xs sm:text-sm font-medium mb-2">Enfants</label>
                  <input type="number" placeholder="0" className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-[#686868] text-xs sm:text-sm font-medium mb-2">Crédits d'impôt</label>
                  <input type="number" placeholder="€1,200" className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent text-sm sm:text-base" />
                </div>
              </div>
              <button className="mt-4 sm:mt-6 inline-flex items-center justify-center bg-[#4EBBBD] text-white px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-inter font-medium hover:bg-[#3DA8AA] transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base">Estimer</button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-[#112033] text-lg sm:text-xl font-source-sans font-semibold mb-4">Déclaration et calendrier</h3>
              <p className="text-[#374151] font-inter mb-3 text-sm sm:text-base">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <ul className="list-disc pl-5 text-[#374151] font-inter space-y-1 text-sm sm:text-base">
                <li>Déclaration en ligne: dates limites par département</li>
                <li>Paiement: prélèvement à la source et solde</li>
                <li>Suivi: avis d'imposition et corrections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="w-full bg-white py-8 sm:py-10 lg:py-16">
        <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="lg:col-span-2 bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] rounded-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-[#005C69] text-lg sm:text-xl font-cairo font-semibold mb-3">Questions fréquentes</h3>
              <div className="space-y-3 text-[#374151] font-inter">
                <div>
                  <p className="font-medium text-sm sm:text-base">Pourquoi le prélèvement à la source est-il important pour les contribuables patrimoniaux ?</p>
                  <p className="text-xs sm:text-sm text-[#686868]">Il permet une collecte immédiate et continue, simplifiant la gestion fiscale et l'anticipation des flux de trésorerie.</p>
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base">Comment optimiser l'impôt sur le revenu avec les dispositifs fiscaux ?</p>
                  <p className="text-xs sm:text-sm text-[#686868]">Les dispositifs comme le PER, la loi Pinel, Girardin et le déficit foncier permettent de réduire significativement la charge fiscale.</p>
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base">Quelle est l'importance de l'anticipation des réformes fiscales ?</p>
                  <p className="text-xs sm:text-sm text-[#686868]">Anticiper les réformes permet d'adapter la stratégie d'investissement et de préserver le rendement net des placements.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#59E2E4] to-[#B99066] rounded-lg p-4 sm:p-6 lg:p-8 text-center">
              <h4 className="text-white text-lg sm:text-xl font-cairo font-semibold mb-2">
                {content.cta?.title || defaultContent.cta.title}
              </h4>
              <p className="text-white text-xs sm:text-sm mb-4">
                {content.cta?.description || defaultContent.cta.description}
              </p>
              <div className="flex flex-col gap-2 sm:gap-3 justify-center">
                <a href="#" className="bg-white text-[#005C69] px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-inter font-medium hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base">
                  {content.cta?.buttonText || defaultContent.cta.buttonText}
                </a>
                <a href="#" className="border-2 border-white text-white px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-inter font-medium hover:bg-white hover:text-[#005C69] transition-colors duration-200 text-sm sm:text-base">Nous écrire</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 
