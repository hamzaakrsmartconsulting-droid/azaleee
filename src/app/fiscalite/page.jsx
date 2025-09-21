"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "../../components/common/Header";

const STORAGE_KEY = "fiscalitePageContent";

// Mapping function to match sommaire titles with existing pages
const getPageUrl = (title) => {
  const pageMapping = {
    "Impôt sur le revenu": "/fiscalite/impot-sur-le-revenu",
    "Déclaration d'impôts": "/fiscalite/declaration-impots", 
    "Tranches, barèmes, plafonds": "/fiscalite/tranches-baremes-plafonds",
    "Lois fiscales": "/fiscalite/lois-fiscales",
    "Réductions d'impôt/déficit foncier": "/fiscalite/reductions-impot-deficit-foncier",
    "Fiscalité des placements financiers : ce qu'il faut absolument comprendre": "/fiscalite/fiscalite-placements",
    "PFU ou Prélèvement Forfaitaire Unique : tout ce qu'un investisseur doit savoir": "/fiscalite/pfu",
    "Tranche Marginale d'Imposition (TMI) + Prélèvements sociaux : ce que tout investisseur doit comprendre": "/fiscalite/tmi-prelevements-sociaux",
    "Fiscalité de l'épargne salariale et retraite": null, // No existing page
    "Fiscalité des donations et successions": null // No existing page
  };
  return pageMapping[title] || null;
};

const defaultContent = {
  hero: {
    title: "Maîtrisez votre fiscalité avec expertise",
    paragraph: "Optimisez votre situation fiscale grâce à notre expertise de plus de 30 ans. Nous vous accompagnons dans la compréhension et l'application des stratégies fiscales les plus avantageuses pour votre patrimoine. Découvrez comment réduire légalement vos impôts tout en sécurisant votre avenir financier.",
  },
  sommaire: {
    leftItems: [
      "Impôt sur le revenu",
      "Déclaration d'impôts", 
      "Tranches, barèmes, plafonds",
      "Lois fiscales",
      "Réductions d'impôt/déficit foncier",
      "Fiscalité des placements financiers : ce qu'il faut absolument comprendre",
      "PFU ou Prélèvement Forfaitaire Unique : tout ce qu'un investisseur doit savoir",
      "Tranche Marginale d'Imposition (TMI) + Prélèvements sociaux : ce que tout investisseur doit comprendre",
      "Fiscalité de l'épargne salariale et retraite",
      "Fiscalité des donations et successions"
    ],
    boxes: [
      "Optimisation fiscale personnalisée",
      "Conseil en stratégie patrimoniale", 
      "Accompagnement dans vos démarches"
    ],
  },
  lli: {
    title: "Investissement Patrimonial & Fiscalité Optimisée : Le Dispositif LLI",
    html:
      "Le Logement Locatif Intermédiaire (LLI) est une solution d’investissement immobilier conçue pour les particuliers souhaitant optimiser leur fiscalité tout en développant leur patrimoine. Il s’adresse aux investisseurs recherchant une combinaison efficace entre performance financière, sécurité patrimoniale et avantages fiscaux.\n\n<b>Avec le dispositif LLI, vous bénéficiez :</b>\nD’un investissement dans un bien immobilier neuf, conforme aux dernières réglementations techniques et environnementales\nD’une TVA réduite à 10 % sur le prix d’acquisition, permettant d’alléger votre coût d’investissement\nD’un crédit d’impôt sur la taxe foncière, valable jusqu’à 20 ans, venant renforcer la rentabilité de votre opération patrimoniale",
    button: "Je réalise ma simulation",
    image: "/images/fisc2.webp",
  },
  benefits: {
    image: "/images/fiscalite-lli-benefits-66eac5.png",
    html:
      "Pourquoi choisir le dispositif LLI pour votre stratégie patrimoniale ?\n\nInvestir en LLI, c’est bénéficier d’une combinaison gagnante entre avantages fiscaux et acquisition d’un patrimoine immobilier neuf, tout en maîtrisant vos risques.\n\n✅ TVA réduite à 10 % sur l’acquisition, pour un prix d’achat optimisé\n✅ Crédit d’impôt sur la taxe foncière, valable jusqu’à 20 ans, permettant d’alléger vos charges\n✅ Frais de notaire réduits (2 à 3 %), bien plus avantageux que dans l’immobilier ancien\n✅ Exonération partielle de taxe foncière pendant les deux premières années\n✅ Conformité aux dernières normes énergétiques (RE2020), garantissant des performances optimales et évitant les passoires thermiques\n✅ Garantie décennale, garantie biennale et garantie de parfait achèvement sécurisant votre investissement\n✅ Possibilité de personnaliser les finitions en VEFA (Vente en l’état futur d’achèvement)\n✅ Pas de travaux à prévoir et des équipements modernes intégrés dès la livraison",
  },
  bottomCta: {
    textTitle: "Investissez avec le LLI : TVA réduite et avantages fiscaux durables",
    textBody:
      "Profitez d’un investissement sécurisé qui combine : TVA réduite à 10 % sur l’acquisition de biens immobiliers neufs, Crédit d’impôt sur la taxe foncière, vous garantissant des économies fiscales pendant jusqu’à 20",
    button: "Je réalise ma simulation",
    image: "/images/fiscalite-lli-section-bottom-1b4b7d.png",
  },
  whereInvest: {
    image: "/images/fiscalite-ou-investir-portrait.png",
    intro:
      "La réussite d’un investissement locatif repose sur le choix de la bonne localisation. Avec le Logement Locatif Intermédiaire (LLI), il est essentiel de privilégier des zones à fort potentiel locatif, proches des bassins d’emploi, des universités et bien connectées aux transports.",
    cities: [
      {
        name: "Toulouse – Un marché en pleine expansion",
        points: [
          "Ville universitaire et technologique, attractive pour les jeunes actifs.",
          "Dynamisme soutenu (aéronautique, spatial, services).",
          "✅ Quartiers recommandés : Compans-Caffarelli, Rangueil",
          "✅ 18 490 créations d’emplois au 1er trimestre 2024",
        ],
      },
      {
        name: "Paris – La sécurité d’un placement patrimonial",
        points: [
          "Marché solide, demande locative soutenue.",
          "✅ Quartiers recommandés : Marais, 15ème arrondissement",
          "✅ Rendements fiables et valorisation garantie",
        ],
      },
    ],
  },
  example: {
    title: "Exemple d’un investissement optimisé avec le dispositif LLI",
    lead:
      "En 2025, Clara, dirigeante d’entreprise à Bordeaux, décide de diversifier son patrimoine en investissant dans l’immobilier locatif via le dispositif LLI. Elle choisit un appartement neuf de 50 m², situé à quelques minutes de la gare Bordeaux Saint-Jean, un secteur à forte demande locative.",
    bulletsTitle: "Les avantages financiers pour Clara :",
    bullets: [
      "Exonération de taxe foncière : pendant 20 ans, elle économise environ 1 500 € par an, soit un total potentiel de 30 000 €.",
      "TVA réduite à 10 % : économie immédiate d’environ 20 000 € sur le prix d’achat.",
      "Frais de notaire réduits : grâce au neuf, les frais avoisinent 2,5 %, permettant une économie d’environ 10 000 € par rapport à un bien ancien.",
    ],
    image: "/images/fiscalite-exemple-illustration.png",
  },
  sectionOrder: [
    "hero",
    "sommaire",
    "lli",
  ],
};

// Fonction pour convertir le contenu du CMS vers le format de la page
const convertCMSContentToPageFormat = (cmsContent) => {
  if (!cmsContent) {
    return {};
  }

  // Le nouveau CMS utilise un format plat, pas besoin de conversion complexe
  // On peut utiliser directement le contenu
  return cmsContent;
};

export default function FiscalitePage() {
  const [content, setContent] = useState(defaultContent);
  const [isLoadingFromDatabase, setIsLoadingFromDatabase] = useState(true);
  const [contentSource, setContentSource] = useState('default');

  // Load content from CMS database
  const loadContentFromCMS = async () => {
    try {
      console.log('Fiscalité - Loading content from CMS database...');
      const response = await fetch('/api/pages/fiscalite');
      
      if (response.ok) {
        const cmsContent = await response.json();
        console.log('Fiscalité - CMS content loaded:', cmsContent);
        console.log('Fiscalité - Number of CMS sections:', Object.keys(cmsContent).length);
        
        if (Object.keys(cmsContent).length > 0) {
          // Database has content - merge it with default content
          console.log('Fiscalité - Database sections found:', Object.keys(cmsContent));
          console.log('Fiscalité - Database content details:', cmsContent);
          
          const mergedContent = { ...defaultContent };
          
          // Merge each CMS section with default content
          Object.keys(cmsContent).forEach(sectionKey => {
            if (mergedContent[sectionKey]) {
              mergedContent[sectionKey] = {
                ...mergedContent[sectionKey],
                ...cmsContent[sectionKey]
              };
            } else {
              mergedContent[sectionKey] = cmsContent[sectionKey];
            }
          });
          
          console.log('Fiscalité - Using database content merged with default');
          console.log('Fiscalité - Merged content keys:', Object.keys(mergedContent));
          
          setContent(mergedContent);
          setContentSource('database');
        } else {
          // No database content - use default
          console.log('Fiscalité - No database content found, using default content');
          setContent(defaultContent);
          setContentSource('default');
        }
      } else {
        console.log('Fiscalité - CMS API error, using default content');
        setContent(defaultContent);
        setContentSource('default');
      }
    } catch (error) {
      console.error('Fiscalité - Error loading CMS content:', error);
      console.log('Fiscalité - Falling back to default content');
      setContent(defaultContent);
      setContentSource('default');
    } finally {
      setIsLoadingFromDatabase(false);
    }
  };

  useEffect(() => {
    // Load from database first, then fallback to default content
    loadContentFromCMS();
    
    // Listen for content update events
    const handleContentUpdate = async () => {
      console.log('Fiscalité - Content update event received - reloading from CMS');
      await loadContentFromCMS();
    };

    // Use polling for real-time updates
    let pollingInterval = null;
    
    const startPolling = () => {
      console.log('Fiscalité - Starting polling for content updates');
      
      pollingInterval = setInterval(async () => {
        try {
          // Check if page is visible before polling
          if (document.visibilityState === 'visible') {
            console.log('Fiscalité - Polling for updates...');
            await loadContentFromCMS();
          }
        } catch (error) {
          console.error('Fiscalité - Polling error:', error);
        }
      }, 3000); // Poll every 3 seconds for faster updates
    };
    
    // Start polling after initial load is complete
    setTimeout(() => {
      if (!isLoadingFromDatabase) {
        startPolling();
      }
    }, 2000);
    
    // Also keep the old event listeners as backup
    window.addEventListener('contentUpdated', handleContentUpdate);
    
    // Listen for localStorage changes (cross-tab communication)
    const handleStorageChange = (e) => {
      if (e.key === 'cms_content_updated') {
        console.log('Fiscalité - localStorage change detected - reloading content');
        loadContentFromCMS();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      if (pollingInterval) {
        clearInterval(pollingInterval);
      }
      window.removeEventListener('contentUpdated', handleContentUpdate);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const sections = useMemo(() => content.sectionOrder || defaultContent.sectionOrder, [content.sectionOrder]);

  return (
    <>
      {/* Loading indicator */}
      {isLoadingFromDatabase && (
        <div className="fixed top-4 right-4 z-50 bg-blue-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-2 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-spin"></div>
          Loading Fiscalité from Database...
        </div>
      )}
      
      {/* Content source indicator */}
      {!isLoadingFromDatabase && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-2 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          Content: {contentSource === 'database' ? 'CMS Database' : 'Default'}
        </div>
      )}

      <Header />

      {sections.includes("hero") && (
        <section className="relative w-full min-h-[600px] py-12 sm:py-20 lg:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/upgrade.webp"
              alt="Background fiscalité - Upgrade professionnel"
              className="w-full h-full object-cover"
              onError={(e) => {
                console.log('Fiscalité background image failed to load:', e.target.src);
                e.target.style.display = 'none';
              }}
              onLoad={() => console.log('Fiscalité background image loaded successfully')}
            />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#253F60]/80 via-[#253F60]/60 to-transparent"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center lg:items-start justify-center text-center lg:text-left min-h-[600px]">
            <div className="max-w-2xl">
              <h1 className="text-white text-[12px] sm:text-lg md:text-xl lg:text-4xl font-cairo font-semibold uppercase mb-4 leading-snug">
                {content.hero?.title || defaultContent.hero.title}
              </h1>
              <p className="text-white text-[10px] sm:text-base md:text-lg lg:text-xl mb-8 font-inter leading-relaxed">
                {content.hero?.paragraph || defaultContent.hero.paragraph}
              </p>
              
              {/* CTA Button */}
              <button className="bg-[#B99066] text-white px-8 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase shadow-lg hover:bg-[#A67A5A] transition-colors duration-200">
                Optimiser ma fiscalité maintenant
              </button>
            </div>
          </div>
        </section>
      )}

      {sections.includes("sommaire") && (
        <section className="py-16 lg:py-20 bg-gradient-to-br from-[#F8FAFB] to-[#F1F5F9]">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#B99066] to-[#4EBBBD] mb-4 rounded-full mx-auto"></div>
              <h2 className="text-2xl lg:text-3xl font-cairo font-semibold text-[#112033] mb-2">Sommaire</h2>
              <p className="text-[#4A5568] font-inter">Découvrez tous nos domaines d'expertise fiscale</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left: Topics List */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-[#112033] font-cairo font-semibold text-lg mb-6">Nos domaines d'expertise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(content.sommaire?.leftItems || defaultContent.sommaire.leftItems).map((item, index) => {
                      const pageUrl = getPageUrl(item);
                      const isClickable = pageUrl !== null;
                      
                      return (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                          {isClickable ? (
                            <Link href={pageUrl} className="text-[#374151] font-inter text-sm leading-relaxed hover:text-[#4EBBBD] hover:underline transition-colors duration-200 cursor-pointer">
                              {item}
                            </Link>
                          ) : (
                            <span className="text-[#374151] font-inter text-sm leading-relaxed opacity-75">
                              {item}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right: Service Cards */}
              <div className="lg:col-span-5">
                <div className="grid grid-cols-1 gap-6">
                  {(content.sommaire?.boxes || defaultContent.sommaire.boxes).map((service, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#4EBBBD] to-[#59E2E4] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-white">
                      <div className="flex items-center gap-4">
                        <div>
                          <h3 className="font-cairo font-semibold text-lg mb-1">{service}</h3>
                          <p className="text-white/90 text-sm font-inter">
                            {index === 0 ? 'Solutions sur-mesure adaptées à votre situation' :
                             index === 1 ? 'Stratégies patrimoniales personnalisées' :
                             'Accompagnement complet dans vos démarches'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* CTA Section */}
                <div className="mt-8 text-center">
                  <button className="bg-gradient-to-r from-[#B99066] to-[#A67A5A] text-white px-8 py-4 rounded-lg font-inter font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Consulter nos experts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {sections.includes("lli") && (
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
              <div className="order-2 lg:order-1">
                <div className="w-12 h-[1.6px] bg-[#4EBBBD] mb-6" />
                <h3 className="uppercase text-[#112033] text-xl font-normal leading-snug mb-4">{content.lli?.title || defaultContent.lli.title}</h3>
                <p className="text-[#686868] text-[14.4px] leading-7 mb-6 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: (content.lli?.html || defaultContent.lli.html).replace(/\n/g, '<br />') }} />
                <button className="rounded-lg px-6 py-3 bg-[#B99066] text-white font-semibold shadow">{content.lli?.button || defaultContent.lli.button}</button>
              </div>
              <div className="order-1 lg:order-2">
                <img src={content.lli?.image || defaultContent.lli.image} alt="Investissement LLI" className="w-full h-[360px] sm:h-[440px] lg:h-[620px] object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </section>
      )}




    </>
  );
} 