"use client";
import React, { useEffect, useMemo, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const STORAGE_KEY = "fiscalitePageContent";

// Default content to bootstrap the CMS when nothing is saved yet
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

function TextInput({ label, value, onChange }) {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium text-[#112033] mb-1">{label}</span>
      <input
        className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#4EBBBD]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

function TextArea({ label, value, onChange, rows = 5 }) {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium text-[#112033] mb-1">{label}</span>
      <textarea
        rows={rows}
        className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#4EBBBD]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

function ImageInput({ label, value, onChange, help }) {
  const [fileName, setFileName] = useState("");
  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result);
    reader.readAsDataURL(file);
  };
  return (
    <div className="mb-4">
      <span className="block text-sm font-medium text-[#112033] mb-1">{label}</span>
      <div className="flex items-center gap-2">
        <input
          className="flex-1 rounded border border-gray-300 px-3 py-2"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Image URL ou base64"
        />
        <label className="px-3 py-2 border rounded cursor-pointer bg-white">
          Importer
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) {
                setFileName(f.name);
                handleFile(f);
              }
            }}
          />
        </label>
      </div>
      {help && <p className="text-xs text-gray-500 mt-1">{help}</p>}
      {value && (
        <img src={value} alt="preview" className="mt-2 h-28 rounded border object-cover" />
      )}
    </div>
  );
}

export default function FiscaliteCMS() {
  const [data, setData] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setData(JSON.parse(saved));
    else setData(defaultContent);
  }, []);

  const sectionOrder = useMemo(() => data?.sectionOrder || [], [data]);

  if (!data) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <p className="text-sm text-gray-600">Chargement du contenu…</p>
      </div>
    );
  }

  const save = () => {
    setSaving(true);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setTimeout(() => {
      setSaving(false);
      window.dispatchEvent(new CustomEvent("contentUpdated"));
    }, 300);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    if (result.type === "sections") {
      const next = Array.from(sectionOrder);
      const [removed] = next.splice(result.source.index, 1);
      next.splice(result.destination.index, 0, removed);
      setData((prev) => ({ ...prev, sectionOrder: next }));
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-[#112033]">CMS — Page Fiscalité</h1>
        <button
          onClick={save}
          className="px-4 py-2 rounded bg-[#4EBBBD] text-white disabled:opacity-60"
          disabled={saving}
        >
          {saving ? "Sauvegarde…" : "Sauvegarder"}
        </button>
      </div>

      {/* Section order */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-[#112033] mb-2">Ordre des sections</h2>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="sections" type="sections" direction="vertical">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-2">
                {sectionOrder.map((s, idx) => (
                  <Draggable draggableId={s} index={idx} key={s}>
                    {(p) => (
                      <div
                        ref={p.innerRef}
                        {...p.draggableProps}
                        {...p.dragHandleProps}
                        className="px-3 py-2 rounded border bg-gray-50 text-sm"
                      >
                        {s}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      {/* HERO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">Hero</h3>
          <TextInput label="Titre" value={data.hero.title} onChange={(v) => setData({ ...data, hero: { ...data.hero, title: v } })} />
          <TextArea label="Paragraphe" value={data.hero.paragraph} onChange={(v) => setData({ ...data, hero: { ...data.hero, paragraph: v } })} />
          <TextArea
            label="Pill – puces (une par ligne)"
            rows={4}
            value={data.hero.pill.bullets.join("\n")}
            onChange={(v) => setData({ ...data, hero: { ...data.hero, pill: { ...data.hero.pill, bullets: v.split("\n").filter(Boolean) } } })}
          />
          <TextInput label="Bouton du Pill" value={data.hero.pill.cta} onChange={(v) => setData({ ...data, hero: { ...data.hero, pill: { ...data.hero.pill, cta: v } } })} />
          <ImageInput label="Pill – portrait" value={data.hero.pill.portrait} onChange={(v) => setData({ ...data, hero: { ...data.hero, pill: { ...data.hero.pill, portrait: v } } })} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">Hero – Bloc téléchargement</h3>
          <TextInput label="Titre" value={data.hero.ctaPanel.title} onChange={(v) => setData({ ...data, hero: { ...data.hero, ctaPanel: { ...data.hero.ctaPanel, title: v } } })} />
          <TextInput label="Tag" value={data.hero.ctaPanel.tag} onChange={(v) => setData({ ...data, hero: { ...data.hero, ctaPanel: { ...data.hero.ctaPanel, tag: v } } })} />
          <TextInput label="Placeholder email" value={data.hero.ctaPanel.placeholder} onChange={(v) => setData({ ...data, hero: { ...data.hero, ctaPanel: { ...data.hero.ctaPanel, placeholder: v } } })} />
          <TextInput label="Texte bouton" value={data.hero.ctaPanel.button} onChange={(v) => setData({ ...data, hero: { ...data.hero, ctaPanel: { ...data.hero.ctaPanel, button: v } } })} />
        </div>
      </div>

      {/* Sommaire */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">Sommaire – liste gauche</h3>
          <TextArea
            label="Éléments (un par ligne)"
            rows={8}
            value={data.sommaire.leftItems.join("\n")}
            onChange={(v) => setData({ ...data, sommaire: { ...data.sommaire, leftItems: v.split("\n").filter(Boolean) } })}
          />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">Sommaire – boîtes</h3>
          <TextArea
            label="Boîtes (une par ligne)"
            rows={8}
            value={data.sommaire.boxes.join("\n")}
            onChange={(v) => setData({ ...data, sommaire: { ...data.sommaire, boxes: v.split("\n").filter(Boolean) } })}
          />
        </div>
      </div>

      {/* LLI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">Bloc LLI</h3>
          <TextInput label="Titre" value={data.lli.title} onChange={(v) => setData({ ...data, lli: { ...data.lli, title: v } })} />
          <TextArea label="Texte (HTML autorisé, \n = saut)" rows={8} value={data.lli.html} onChange={(v) => setData({ ...data, lli: { ...data.lli, html: v } })} />
          <TextInput label="Bouton" value={data.lli.button} onChange={(v) => setData({ ...data, lli: { ...data.lli, button: v } })} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">LLI – Image</h3>
          <ImageInput label="Image" value={data.lli.image} onChange={(v) => setData({ ...data, lli: { ...data.lli, image: v } })} />
        </div>
      </div>

      {/* Bénéfices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">Bénéfices – Texte</h3>
          <TextArea label="Texte (\n = saut)" rows={12} value={data.benefits.html} onChange={(v) => setData({ ...data, benefits: { ...data.benefits, html: v } })} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">Bénéfices – Image</h3>
          <ImageInput label="Image" value={data.benefits.image} onChange={(v) => setData({ ...data, benefits: { ...data.benefits, image: v } })} />
        </div>
      </div>

      {/* CTA bas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">CTA bas – Texte</h3>
          <TextInput label="Titre" value={data.bottomCta.textTitle} onChange={(v) => setData({ ...data, bottomCta: { ...data.bottomCta, textTitle: v } })} />
          <TextArea label="Corps" rows={6} value={data.bottomCta.textBody} onChange={(v) => setData({ ...data, bottomCta: { ...data.bottomCta, textBody: v } })} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">CTA bas – Image</h3>
          <ImageInput label="Image" value={data.bottomCta.image} onChange={(v) => setData({ ...data, bottomCta: { ...data.bottomCta, image: v } })} />
        </div>
      </div>

      {/* Où investir */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">Où investir – Image</h3>
          <ImageInput label="Image" value={data.whereInvest.image} onChange={(v) => setData({ ...data, whereInvest: { ...data.whereInvest, image: v } })} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">Où investir – Intro</h3>
          <TextArea label="Texte" rows={6} value={data.whereInvest.intro} onChange={(v) => setData({ ...data, whereInvest: { ...data.whereInvest, intro: v } })} />
        </div>
      </div>

      {/* Villes */}
      <div className="mb-10">
        <h3 className="text-sm font-semibold text-[#112033] mb-3">Où investir – Villes</h3>
        <DragDropContext
          onDragEnd={(r) => {
            if (!r.destination) return;
            const next = Array.from(data.whereInvest.cities);
            const [removed] = next.splice(r.source.index, 1);
            next.splice(r.destination.index, 0, removed);
            setData({ ...data, whereInvest: { ...data.whereInvest, cities: next } });
          }}
        >
          <Droppable droppableId="cities" type="cities" direction="vertical">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-4">
                {data.whereInvest.cities.map((city, idx) => (
                  <Draggable draggableId={`city-${idx}`} index={idx} key={`city-${idx}`}>
                    {(p) => (
                      <div ref={p.innerRef} {...p.draggableProps} className="rounded border p-4 bg-gray-50">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-[#112033]">Ville #{idx + 1}</span>
                          <span {...p.dragHandleProps} className="text-xs text-gray-500 cursor-grab">Déplacer</span>
                        </div>
                        <TextInput
                          label="Titre"
                          value={city.name}
                          onChange={(v) => {
                            const next = [...data.whereInvest.cities];
                            next[idx] = { ...next[idx], name: v };
                            setData({ ...data, whereInvest: { ...data.whereInvest, cities: next } });
                          }}
                        />
                        <TextArea
                          label="Points (un par ligne)"
                          rows={5}
                          value={city.points.join("\n")}
                          onChange={(v) => {
                            const next = [...data.whereInvest.cities];
                            next[idx] = { ...next[idx], points: v.split("\n").filter(Boolean) };
                            setData({ ...data, whereInvest: { ...data.whereInvest, cities: next } });
                          }}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className="mt-3">
          <button
            className="px-3 py-2 text-sm rounded border"
            onClick={() => setData({ ...data, whereInvest: { ...data.whereInvest, cities: [...data.whereInvest.cities, { name: "Nouvelle ville", points: ["Point 1", "Point 2"] }] } })}
          >
            Ajouter une ville
          </button>
        </div>
      </div>

      {/* Exemple */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">Exemple</h3>
          <TextInput label="Titre" value={data.example.title} onChange={(v) => setData({ ...data, example: { ...data.example, title: v } })} />
          <TextArea label="Intro" rows={4} value={data.example.lead} onChange={(v) => setData({ ...data, example: { ...data.example, lead: v } })} />
          <TextArea
            label="Avantages (un par ligne)"
            rows={6}
            value={data.example.bullets.join("\n")}
            onChange={(v) => setData({ ...data, example: { ...data.example, bullets: v.split("\n").filter(Boolean) } })}
          />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">Exemple – Image</h3>
          <ImageInput label="Image" value={data.example.image} onChange={(v) => setData({ ...data, example: { ...data.example, image: v } })} />
        </div>
      </div>
    </div>
  );
} 