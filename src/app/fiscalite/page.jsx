"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "../../components/common/Header";

const STORAGE_KEY = "fiscalitePageContent";

// Mapping function to match sommaire titles with existing pages
const getPageUrl = (title) => {
  const pageMapping = {
    "Comment réduire l'impôt sur le revenu ?": "/fiscalite/impot-sur-le-revenu",
    "Comprendre les Tranches, barèmes, plafonds": "/fiscalite/tranches-baremes-plafonds",
    "Declaration de revenus": "/fiscalite/declaration-impots",
    "Tranche marginale d'imposition": "/fiscalite/tmi-prelevements-sociaux",
    "Réductions d'impôt/déficit foncier : un levier fiscal puissant pour investisseurs avertis": "/fiscalite/reductions-impot-deficit-foncier",
    "Qu'est-ce que le PFU ?": "/fiscalite/pfu",
    "Guide des 7 régimes de faveur en immobilier (Lois fiscales)": "/fiscalite/lois-fiscales",
    "Sécuriser son patrimoine sur plusieurs générations": null, // No existing page
    "Epargne salariale : un atout fiscalement négligé": null // No existing page
  };
  return pageMapping[title] || null;
};

const defaultContent = {
  hero: {
    title: "Maîtrisez votre fiscalité avec expertise",
    paragraph: "La fiscalité est au cœur des préoccupations des contribuables et des investisseurs. Bien la comprendre, c'est disposer de leviers concrets pour alléger sa charge fiscale, optimiser ses revenus et sécuriser sa stratégie patrimoniale.\n\nChez Azalée Patrimoine, nous accompagnons nos clients dans la compréhension et la maîtrise des principaux mécanismes fiscaux.",
  },
  sommaire: {
    leftItems: [
      {
        title: "1. Les bases de la fiscalité en France",
        url: "/fiscalite/bases-fiscalite",
        subtitles: [
          { 
            title: "Impôt sur le revenu", 
            url: "/fiscalite/impot-sur-le-revenu",
            description: "Découvrez le fonctionnement de l'impôt sur le revenu, ses catégories et ses règles de calcul."
          },
          { 
            title: "Déclaration d'impôts", 
            url: "/fiscalite/declaration-impots",
            description: "Tout ce qu'il faut savoir pour remplir correctement sa déclaration et éviter les erreurs coûteuses."
          },
          { 
            title: "Tranches, barèmes et plafonds", 
            url: "/fiscalite/tranches-baremes-plafonds",
            description: "Comprendre la progressivité de l'impôt, les seuils applicables et leur impact sur votre fiscalité."
          }
        ]
      },
      {
        title: "2. Optimiser sa fiscalité grâce aux dispositifs légaux",
        url: "/fiscalite/dispositifs-legaux",
        subtitles: [
          { 
            title: "Lois fiscales (Pinel, Malraux, Girardin…)", 
            url: "/fiscalite/lois-fiscales",
            description: "Explorez les dispositifs de défiscalisation immobilière et leurs conditions d'application."
          },
          { 
            title: "Réductions d'impôt et déficit foncier", 
            url: "/fiscalite/reductions-impot-deficit-foncier",
            description: "Découvrez comment la rénovation immobilière ou certains investissements ciblés peuvent alléger votre imposition."
          }
        ]
      },
      {
        title: "3. Fiscalité des placements et revenus financiers",
        url: "/fiscalite/placements-financiers",
        subtitles: [
          { 
            title: "Fiscalité des placements financiers", 
            url: "/fiscalite/fiscalite-placements",
            description: "Comprendre l'imposition applicable aux livrets, contrats d'assurance vie, actions, obligations et autres supports."
          },
          { 
            title: "PFU ou Prélèvement Forfaitaire Unique", 
            url: "/fiscalite/pfu",
            description: "Analyse du régime unique de 30 %, ses avantages et ses limites pour les investisseurs."
          },
          { 
            title: "Tranche Marginale d'Imposition (TMI) et prélèvements sociaux", 
            url: "/fiscalite/tmi-prelevements-sociaux",
            description: "Comment calculer sa TMI et mesurer l'impact réel des prélèvements sociaux sur vos revenus financiers."
          }
        ]
      },
      {
        title: "4. Fiscalité de l'épargne salariale et de la retraite",
        url: "/fiscalite/epargne-salariale-retraite",
        subtitles: [
          { 
            title: "Fiscalité de l'épargne salariale et retraite", 
            url: "/fiscalite/epargne-salariale-retraite",
            description: "Comprendre la fiscalité des PER, PEE et autres dispositifs pour préparer sa retraite tout en optimisant son imposition."
          }
        ]
      },
      {
        title: "5. Transmission et fiscalité du patrimoine",
        url: "/fiscalite/transmission-patrimoine",
        subtitles: [
          { 
            title: "Fiscalité des donations et successions", 
            url: "/fiscalite/donations-successions",
            description: "Découvrez les règles en vigueur et les leviers disponibles pour transmettre votre patrimoine dans les meilleures conditions fiscales et familiales."
          }
        ]
      }
    ],
    boxes: [
      "Analyse fiscale approfondie",
      "Conseil en optimisation de la rémunération", 
      "Accompagnement dans vos démarches"
    ],
  },
  lli: {
    title: "Faire de la fiscalité un levier patrimonial",
    html:
      "Anticiper et structurer sa fiscalité est une étape incontournable pour protéger et valoriser son patrimoine.\n\nAvec Azalée Patrimoine, vous bénéficiez d'un accompagnement sur mesure, associant pédagogie et expertise, pour prendre des décisions éclairées et optimiser chaque étape de votre stratégie patrimoniale.",
    button: "Contactez-nous",
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


  useEffect(() => {
    // Use default content only - no database loading
    console.log('Fiscalité - Using default content only');
    setContent(defaultContent);
  }, []);

  const sections = useMemo(() => content.sectionOrder || defaultContent.sectionOrder, [content.sectionOrder]);

  return (
    <>

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
              <button 
                className="bg-[#B99066] text-white px-8 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase shadow-lg hover:bg-[#A67A5A] transition-colors duration-200"
                onClick={() => window.location.href = '/fiscalite/reductions-impot-deficit-foncier'}
              >
                Je prends ma fiscalité en main maintenant
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
                <p className="text-[#4A5568] font-inter">Transformer la fiscalité en levier de performance et de transmission</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left: Topics List */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-[#112033] font-cairo font-semibold text-lg mb-6">Nos domaines d'expertise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(content.sommaire?.leftItems || defaultContent.sommaire.leftItems).map((item, index) => {
                      // Handle both string items and object items with subtitles
                      if (typeof item === 'object' && item.subtitles) {
                        return (
                          <div key={index} className="md:col-span-2">
                            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                              <Link href={item.url} className="text-[#374151] font-inter font-semibold text-sm leading-relaxed hover:text-[#4EBBBD] hover:underline transition-colors duration-200 cursor-pointer">
                                {item.title}
                              </Link>
                            </div>
                            <div className="ml-6 space-y-3">
                              {item.subtitles.map((subtitle, subIndex) => (
                                <div key={subIndex} className="border-l-2 border-[#4EBBBD] pl-4">
                                  <Link href={subtitle.url} className="text-[#374151] font-inter font-semibold text-sm hover:text-[#4EBBBD] hover:underline transition-colors duration-200 cursor-pointer block mb-1">
                                    {subtitle.title}
                                  </Link>
                                  <p className="text-[#6B7280] font-inter text-xs leading-relaxed">
                                    {subtitle.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      } else {
                        // Handle string items
                        const itemText = typeof item === 'string' ? item : item.title || item;
                        const pageUrl = getPageUrl(itemText);
                      const isClickable = pageUrl !== null;
                      
                      return (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                          {isClickable ? (
                            <Link href={pageUrl} className="text-[#374151] font-inter text-sm leading-relaxed hover:text-[#4EBBBD] hover:underline transition-colors duration-200 cursor-pointer">
                                {itemText}
                            </Link>
                          ) : (
                            <span className="text-[#374151] font-inter text-sm leading-relaxed opacity-75">
                                {itemText}
                            </span>
                          )}
                        </div>
                      );
                      }
                    })}
                  </div>
                </div>
              </div>

              {/* Right: Service Cards */}
              <div className="lg:col-span-5">
                <div className="grid grid-cols-1 gap-6">
                  {(content.sommaire?.boxes || defaultContent.sommaire.boxes).map((service, index) => (
                     <div key={index} className="bg-[#253F60] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-white">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-white/90 text-sm font-inter">
                             {index === 0 ? 'Hélène a récupéré 12 000€ en déclarant ses frais professionnels au réel grâce à AZALEE PATRIMOINE.' :
                              index === 1 ? 'Les revenus fonciers sont les plus fiscalisés. Vous pouvez payé jusqu\'à 62.2% d\'impôt sur vos loyers s\'ils ne sont pas optimisés. Grâce à un changement de dispositif fiscal, vos revenus bruts peuvent devenir des revenus nets.' :
                              'Laissez sa prime d\'intéressement dans le PEE de l\'entreprise vous fait économiser beaucoup d\'impôt sur le revenu mais en cas de décès, au moins 20% sera ponctionné par l\'Etat'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* CTA Section */}
                <div className="mt-8 text-center">
                  <button 
                    className="bg-gradient-to-r from-[#B99066] to-[#A67A5A] text-white px-8 py-4 rounded-lg font-inter font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://calendly.com/contact-azalee-patrimoine', '_blank')}
                  >
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
                <h3 className="uppercase text-[#112033] text-xl font-normal leading-snug mb-4">
                  {content.lli?.title || defaultContent.lli.title}
                </h3>
                <p className="text-[#686868] text-[14.4px] leading-7 mb-6 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: (content.lli?.html || defaultContent.lli.html).replace(/\n/g, '<br />') }} />
                <button 
                  className="rounded-lg px-6 py-3 bg-[#B99066] text-white font-semibold shadow"
                  onClick={() => window.open('https://calendly.com/contact-azalee-patrimoine', '_blank')}
                >
                  {content.lli?.button || defaultContent.lli.button}
                </button>
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