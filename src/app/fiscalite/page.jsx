"use client";
import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/common/Header";

const STORAGE_KEY = "fiscalitePageContent";

const defaultContent = {
  hero: {
    title: "Tout savoir sur la fiscalité patrimoniale et l'optimisation fiscale",
    paragraph:
      "Vous cherchez à optimiser votre fiscalité tout en sécurisant et valorisant votre patrimoine ? Les stratégies de fiscalité patrimoniale vous permettent de conjuguer rendement, sécurité et transmission, en toute conformité avec la législation fiscale. Accessible aussi bien aux particuliers qu'aux chefs d’entreprise, l'optimisation fiscale repose sur des solutions juridiques, financières et immobilières adaptées à votre situation et à vos projets.",
    pill: {
      bullets: [
        "Investissez dans l’immobilier neuf et profitez d’avantages fiscaux exclusifs :",
        "TVA réduite à 10 %",
        "Crédit d’impôt sur la taxe foncière",
      ],
      cta: "Je calcule mon avantage fiscal",
      portrait: "/images/fiscalite-hero-small-photo.png",
    },
    ctaPanel: {
      title: "Je télécharge mon guide de l’optimisation fiscale",
      tag: "Version numérique",
      placeholder: "Votre email",
      button: "Télécharger le guide",
    },
  },
  sommaire: {
    leftItems: [
      "Qu’est-ce que l’optimisation fiscale patrimoniale ?",
      "Pourquoi mettre en place une stratégie d’optimisation fiscale ?",
      "Quelles sont les règles à respecter pour bénéficier des avantages fiscaux ?",
      "Quels sont les meilleurs supports et placements pour optimiser sa fiscalité ?",
      "Exemple d’une stratégie d’optimisation fiscale réussie",
      "Quels pièges éviter et quelles bonnes pratiques adopter ?",
      "Questions fréquentes sur l’optimisation fiscale",
    ],
    boxes: [
      "Un prix d’acquisition avantageux grâce à une TVA réduite à 10 %",
      "Autre avantage fiscal ou information",
      "Encore un autre avantage ou info",
    ],
  },
  lli: {
    title: "Investissement Patrimonial & Fiscalité Optimisée : Le Dispositif LLI",
    html:
      "Le Logement Locatif Intermédiaire (LLI) est une solution d’investissement immobilier conçue pour les particuliers souhaitant optimiser leur fiscalité tout en développant leur patrimoine. Il s’adresse aux investisseurs recherchant une combinaison efficace entre performance financière, sécurité patrimoniale et avantages fiscaux.\n\n<b>Avec le dispositif LLI, vous bénéficiez :</b>\nD’un investissement dans un bien immobilier neuf, conforme aux dernières réglementations techniques et environnementales\nD’une TVA réduite à 10 % sur le prix d’acquisition, permettant d’alléger votre coût d’investissement\nD’un crédit d’impôt sur la taxe foncière, valable jusqu’à 20 ans, venant renforcer la rentabilité de votre opération patrimoniale",
    button: "Je réalise ma simulation",
    image: "/images/fiscalite-lli-image-aeac3b.png",
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
    "benefits",
    "bottomCta",
    "whereInvest",
    "example",
  ],
};

export default function FiscalitePage() {
  const [content, setContent] = useState(defaultContent);

  // Load content from database or localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const loadContentFromDatabase = async () => {
      try {
        // Essayer d'abord la base de données
        const response = await fetch('/api/pages/content?path=/fiscalite&type=cms');
        if (response.ok) {
          const result = await response.json();
          if (result.success && result.content) {
            setContent((prev) => ({ ...prev, ...result.content.content }));
            return;
          }
        }
      } catch (error) {
        console.log('Base de données non disponible, utilisation du localStorage');
      }

      // Fallback vers localStorage
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          setContent((prev) => ({ ...prev, ...parsed }));
        }
      } catch (e) {
        console.error("Failed to load fiscalité content", e);
      }
    };

    loadContentFromDatabase();
  }, []);

  // Live update on CustomEvent from CMS
  useEffect(() => {
    const handler = async () => {
      // Recharger depuis la base de données quand le contenu est mis à jour
      try {
        const response = await fetch('/api/pages/content?path=/fiscalite&type=cms');
        if (response.ok) {
          const result = await response.json();
          if (result.success && result.content) {
            setContent((prev) => ({ ...prev, ...result.content.content }));
            return;
          }
        }
      } catch (error) {
        console.log('Base de données non disponible, utilisation du localStorage');
      }

      // Fallback vers localStorage
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) setContent((prev) => ({ ...prev, ...JSON.parse(saved) }));
      } catch {}
    };
    window.addEventListener("contentUpdated", handler);
    return () => window.removeEventListener("contentUpdated", handler);
  }, []);

  const sections = useMemo(() => content.sectionOrder || defaultContent.sectionOrder, [content.sectionOrder]);

  return (
    <>
      <Header />

      {sections.includes("hero") && (
        <section className="bg-[#FAFFEF]">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <h1 className="font-[300] text-[#112033] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                  {content.hero.title}
                </h1>
                <p className="text-[#686868] text-sm sm:text-base leading-relaxed max-w-2xl">
                  {content.hero.paragraph}
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-[220px] sm:h-[230px] lg:h-[208px] w-full max-w-[560px] ml-auto rounded-l-xl rounded-r-[220px] bg-white shadow-md overflow-hidden">
                  <div className="h-full pr-40 pl-5 sm:pl-6 py-5 flex flex-col justify-center">
                    <p className="uppercase text-[11px] tracking-wide text-[#112033] mb-1">
                      Optimisez votre fiscalité grâce au dispositif LLI
                    </p>
                    <ul className="text-[12px] uppercase text-black/80 leading-7 list-disc list-inside">
                      {content.hero.pill.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    <button className="mt-3 inline-flex items-center rounded-md bg-[#B99066] text-white text-[12px] font-semibold px-3.5 py-2 shadow">
                      {content.hero.pill.cta}
                    </button>
                  </div>
                  <img
                    src={content.hero.pill.portrait}
                    alt="LLI"
                    className="absolute top-4 right-4 w-[168px] h-[168px] rounded-full object-cover ring-8 ring-white"
                  />
                </div>
              </div>

              <div className="lg:col-start-7 lg:col-span-6">
                <div className="rounded-xl bg-[#008D78] text-white p-5 sm:p-6 shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                    <div className="md:col-span-5">
                      <h3 className="uppercase text-lg sm:text-xl font-semibold">{content.hero.ctaPanel.title}</h3>
                      <span className="inline-block mt-3 px-2 py-1 bg-white text-[#008D78] rounded text-[12px]">
                        {content.hero.ctaPanel.tag}
                      </span>
                    </div>
                    <div className="md:col-span-7 w-full flex gap-2">
                      <input
                        type="email"
                        placeholder={content.hero.ctaPanel.placeholder}
                        className="flex-1 h-10 px-3 rounded text-[#112033] border-0 focus:ring-2 focus:ring-white/50"
                      />
                      <button className="h-10 px-4 rounded bg-[#B99066] text-white text-sm shadow whitespace-nowrap">
                        {content.hero.ctaPanel.button}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {sections.includes("sommaire") && (
        <section className="py-10 lg:py-14">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="uppercase text-[#112033] text-xl sm:text-2xl font-semibold">Sommaire</h2>
              <div className="hidden md:block w-6 h-6 opacity-50 bg-[#4EBBBD] rounded"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 text-[#243E5F] text-sm leading-7">
                <p>
                  {content.sommaire.leftItems.map((it, i) => (
                    <span key={i}>
                      {it}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6">
                {content.sommaire.boxes.map((label, i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-[#4EBBBD] text-white p-4 flex items-center justify-center text-center text-[13px] font-semibold min-h-[120px] shadow"
                  >
                    {label}
                  </div>
                ))}
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
                <h3 className="uppercase text-[#112033] text-xl font-normal leading-snug mb-4">{content.lli.title}</h3>
                <p className="text-[#686868] text-[14.4px] leading-7 mb-6 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: content.lli.html.replace(/\n/g, '<br />') }} />
                <button className="rounded-lg px-6 py-3 bg-[#B99066] text-white font-semibold shadow">{content.lli.button}</button>
              </div>
              <div className="order-1 lg:order-2">
                <img src={content.lli.image} alt="Investissement LLI" className="w-full h-[360px] sm:h-[440px] lg:h-[620px] object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </section>
      )}

      {sections.includes("benefits") && (
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="rounded-xl overflow-hidden order-2 lg:order-1">
                <img src={content.benefits.image} alt="LLI Avantages" className="w-full h-[360px] sm:h-[420px] object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-[1.6px] h-24 bg-[#4EBBBD] mb-6 hidden lg:block" />
                <div className="text-[#000] text-base leading-8 uppercase whitespace-pre-line" dangerouslySetInnerHTML={{ __html: content.benefits.html.replace(/\n/g, '<br />') }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {sections.includes("bottomCta") && (
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-xl shadow-md">
              <div className="p-6 lg:p-8">
                <h4 className="font-semibold text-[#000] leading-6 mb-4">{content.bottomCta.textTitle}</h4>
                <p className="text-[#000] leading-7 text-sm mb-4">{content.bottomCta.textBody}</p>
                <button className="rounded-md bg-[#B99066] text-white px-6 py-2 shadow font-semibold">{content.bottomCta.button}</button>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img src={content.bottomCta.image} alt="LLI Section Bottom" className="w-full h-56 sm:h-64 lg:h-[254px] object-cover" />
              </div>
            </div>
          </div>
        </section>
      )}

      {sections.includes("whereInvest") && (
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
              <div className="order-1 h-80 sm:h-[480px] lg:h-full">
                <img src={content.whereInvest.image} alt="Conseillère - Où investir" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="order-2">
                <h3 className="text-[#112033] text-xl font-semibold mb-4">Où investir pour maximiser les avantages du LLI ?</h3>
                <p className="text-[#686868] text-[15px] leading-7 mb-6">{content.whereInvest.intro}</p>
                <div className="space-y-6 text-[#686868] text-[15px] leading-7">
                  {content.whereInvest.cities.map((city, idx) => (
                    <div key={idx}>
                      <h4 className="text-[#112033] font-semibold mb-1">{city.name}</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {city.points.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {sections.includes("example") && (
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <h3 className="text-[#112033] text-lg sm:text-xl font-semibold mb-4">{content.example.title}</h3>
                <div className="space-y-4 text-[#686868] text-[15px] leading-7">
                  <p>{content.example.lead}</p>
                  <div>
                    <p className="text-[#112033] font-semibold mb-2">{content.example.bulletsTitle}</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {content.example.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-12 h-[1.6px] bg-[#4EBBBD] mb-4 hidden lg:block" />
                <img src={content.example.image} alt="Investir dans l’immobilier avec succès" className="w-full h-[260px] sm:h-[360px] lg:h-[574px] object-cover" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
} 