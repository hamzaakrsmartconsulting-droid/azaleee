"use client";

import React, { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "lmnpPageContent";

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

function ImageInput({ label, value, onChange }) {
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
          placeholder="URL ou base64"
        />
        <label className="px-3 py-2 border rounded cursor-pointer bg-white">
          Importer
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
          />
        </label>
      </div>
      {value && (
        <img src={value} alt="preview" className="mt-2 h-28 rounded border object-cover" />
      )}
    </div>
  );
}

const defaultContent = {
  hero: {
    title:
      "Investir avec le statut LMNP (location meublée non professionnelle) avec Azalee Wealth",
    subtitle:
      "L'investissement locatif est une stratégie d'épargne efficace. Ce système de défiscalisation immobilière permet de se constituer un patrimoine tout en percevant, mensuellement, un complément de salaire. Notre expertise de plus de 30 ans vous accompagne pour optimiser votre investissement LMNP.",
    button: "Simuler votre projet LMNP",
  },
  rightCard: {
    title: "Nos experts à votre service",
    benefits: [
      "Ne payez pas d'impôt sur vos revenus locatifs",
      "Meilleure rentabilité qu'avec une location nue",
      "Récupération de la TVA",
      "Accompagnement complet de votre projet",
    ],
    floatingText: "0 € →\nAnalyse personnalisée gratuite",
    icon: "/images/placements-responsive-header-icon-56586a.png",
  },
  sommaire: {
    items: [
      "Qu'est-ce que le statut LMNP (loueur meublé non professionnel) ?",
      "Quels sont les avantages du statut LMNP ?",
      "Quelles sont les conditions du statut LMNP ?",
      "Comment déclarer ses revenus en LMNP ?",
      "Comment obtenir le statut LMNP ?",
      "Quels sont les inconvénients de la location meublée non professionnelle ?",
      "Questions et réponses sur la LMNP",
    ],
  },
  imageBlock: {
    title: "Investissement LMNP en pratique",
    intro:
      "Découvrez comment l'investissement LMNP peut transformer votre approche de l'immobilier locatif. Nos experts vous accompagnent dans la sélection de biens optimisés pour la location meublée.",
    bullets: [
      "Biens sélectionnés pour la rentabilité LMNP",
      "Accompagnement personnalisé",
      "Optimisation fiscale garantie",
    ],
    image: "/images/imm1.jpg",
  },
  definition: {
    title: "1. Qu'est-ce que le statut LMNP (loueur meublé non professionnel) ?",
    paragraphs: [
      "Le statut de loueur meublé non professionnel (LMNP) est un statut attribué aux bailleurs non-professionnels qui louent des biens meublés. Cette activité ne constitue pas l'activité principale du bailleur. Il s'agit davantage d'un complément de revenus.",
      "Le statut LMNP est ouvert à tout contribuable français qui souhaite préparer sa retraite en investissant dans un bien meublé. Depuis 1949, le statut LMNP offre une optimisation fiscale intéressante à tout investisseur.",
      "Pour être considéré comme non professionnel, le propriétaire doit remplir certaines conditions :",
    ],
    bullets: [
      "Les recettes annuelles tirées de la location ne doivent pas dépasser 23 000 € pour l'ensemble du foyer fiscal.",
      "Ces recettes doivent également être inférieures au montant total des autres revenus d'activité du foyer fiscal (salaires, autres BIC, etc.).",
    ],
  },
  changes2025: {
    title: "Quels sont les changements du statut LMNP en 2025",
    paragraphs: [
      "L'adoption de la loi de finances 2025 par l'article 49.3 a renforcé les dispositions de la loi Le Meur relatives aux meublés de tourisme, impactant ainsi le statut LMNP. Désormais, l'amortissement, jusqu'à présent exclu du calcul de la plus-value lors de la revente, sera réintégré.",
      "Concrètement, si vous décidez de vendre votre bien, la somme totale des amortissements pratiqués pendant toute la durée de détention viendra diminuer votre prix d'achat initial. Résultat : la base taxable sur la plus-value augmente et, avec elle, l'impôt dû.",
    ],
  },
  avantages: {
    title: "2. Quels sont les avantages du statut LMNP ?",
    cards: [
      {
        title: "Optimisation fiscale",
        bullets: [
          "Amortissement du bien immobilier",
          "Déduction des charges et intérêts",
          "Réduction de l'impôt sur le revenu",
          "Possibilité de déficit foncier",
        ],
      },
      {
        title: "Rentabilité améliorée",
        bullets: [
          "Loyers plus élevés qu'en location nue",
          "Récupération de la TVA",
          "Complément de revenus mensuel",
          "Constitution d'un patrimoine",
        ],
      },
      {
        title: "Flexibilité",
        bullets: [
          "Baux courts renouvelables",
          "Adaptation aux besoins locatifs",
          "Gestion simplifiée",
          "Possibilité de résidence personnelle",
        ],
      },
    ],
  },
  conditions: {
    title: "3. Quelles sont les conditions du statut LMNP ?",
    cards: [
      {
        title: "Conditions de revenus",
        bullets: [
          "Recettes annuelles de location ≤ 23 000 €",
          "Revenus locatifs < autres revenus du foyer fiscal",
        ],
      },
      {
        title: "Conditions du bien",
        bullets: [
          "Logement meublé avec équipements de base",
          "Bail d'un an renouvelable (9 mois pour étudiants)",
          "Dépôt de garantie : 2 mois de loyer",
        ],
      },
    ],
  },
  declaration: {
    title: "4. Comment déclarer ses revenus en LMNP ?",
    cards: [
      {
        title: "Régime Micro-BIC",
        bullets: [
          "Recettes ≤ 72 600 € par an",
          "Abattement forfaitaire de 50%",
          "Pas de comptabilité obligatoire",
          "Déclaration simplifiée",
        ],
      },
      {
        title: "Régime Réel",
        bullets: [
          "Recettes > 72 600 € par an",
          "Comptabilité obligatoire",
          "Déduction des charges réelles",
          "Amortissement du bien",
        ],
      },
    ],
  },
  lmnpVsLmp: {
    title: "LMNP vs LMP : quelles différences ?",
    rows: [
      {
        critere: "Seuil de recettes",
        lmnp: "≤ 23 000 € et < autres revenus du foyer",
        lmp: "> 23 000 € ou > autres revenus du foyer",
      },
      { critere: "Statut", lmnp: "Non professionnel", lmp: "Professionnel" },
      {
        critere: "Régime fiscal",
        lmnp: "BIC (micro-BIC ou réel)",
        lmp: "BIC réel (cotisations sociales possibles)",
      },
      { critere: "Amortissements", lmnp: "Oui (impact plus-value en 2025)", lmp: "Oui" },
      {
        critere: "Plus-value à la revente",
        lmnp: "Régime des particuliers (avec réintégration des amortissements)",
        lmp: "Régime professionnel (selon situation)",
      },
    ],
    note:
      "Sources d'inspiration et synthèse basées sur des informations publiques du marché dont le dossier LMNP/LMP de Selexium.",
  },
  residences: {
    title: "Résidences éligibles au statut LMNP",
    items: [
      { title: "Étudiantes", text: "Proches des campus, adaptées aux besoins étudiants." },
      { title: "Senior", text: "Résidences services pour personnes âgées autonomes." },
      { title: "EHPAD", text: "Établissements d'hébergement pour dépendance." },
      { title: "Affaires", text: "Hébergement dédié aux déplacements professionnels." },
      { title: "Tourisme", text: "Résidences de vacances avec services." },
    ],
  },
  steps: {
    title: "5. Comment obtenir le statut LMNP ?",
    items: [
      { title: "Acquisition", text: "Achat d'un bien immobilier neuf ou ancien" },
      { title: "Aménagement", text: "Équipement du logement en meublé" },
      { title: "Location", text: "Mise en location avec bail meublé" },
      { title: "Déclaration", text: "Déclaration des revenus en BIC" },
    ],
  },
  inconvenients: {
    title:
      "6. Quels sont les inconvénients de la location meublée non professionnelle ?",
    cards: [
      {
        title: "Gestion locative",
        bullets: [
          "Rotation plus fréquente des locataires",
          "Entretien des meubles et équipements",
          "Gestion administrative plus complexe",
          "Risque de vacance locative",
        ],
      },
      {
        title: "Contraintes fiscales",
        bullets: [
          "Limitation des recettes à 23 000 €",
          "Obligation de respecter les conditions",
          "Risque de requalification en LMP",
          "Contrôles fiscaux possibles",
        ],
      },
      {
        title: "Investissement initial",
        bullets: [
          "Coût d'équipement du logement",
          "Amortissement sur plusieurs années",
          "Besoin de trésorerie initiale",
          "Délai de rentabilisation",
        ],
      },
    ],
  },
  faq: {
    title: "7. Questions et réponses sur la LMNP",
    items: [
      {
        q: "Quelles sont les différences entre la LMP et la LMNP ?",
        a: "Le statut de loueur en meublé professionnel implique de toucher des revenus locatifs suffisamment importants ... supérieurs à 23 000 € ou être plus importants que les revenus globaux du foyer fiscal soumis à l'impôt sur le revenu.",
      },
      {
        q: "Peut-on investir en LMNP dans l'ancien ?",
        a: "Il est tout à fait possible d'investir en LMNP dans l'ancien. Aussi connu sous le nom de LMNP d'occasion ... déjà équipé et parfois même occupé.",
      },
      {
        q: "Quelles résidences sont éligibles au statut LMNP ?",
        a: "Toutes les résidences donnent accès au statut LMNP : résidences étudiantes, senior, EHPAD, d'affaires et de tourisme.",
      },
      {
        q: "Comment revendre son bien LMNP ?",
        a: "La revente se fait comme une revente classique d'un bien immobilier. La plus-value est imposée à 19% + 17,2% de prélèvements sociaux, avec abattement selon la durée de détention.",
      },
    ],
  },
  finalCta: {
    title: "Prêt à investir en LMNP ?",
    subtitle:
      "Nos experts Azalee Wealth vous accompagnent pour construire votre stratégie d'investissement LMNP et optimiser votre défiscalisation immobilière.",
    primaryButton: "Simuler mon projet LMNP",
    secondaryButton: "Prendre rendez-vous",
  },
};

function normalize(saved) {
  const legacy = saved || {};
  return {
    ...defaultContent,
    ...legacy,
    hero: {
      ...defaultContent.hero,
      ...(legacy.hero || {}),
      ...(legacy.heroTitle || legacy.heroSubtitle || legacy.heroButton
        ? {
            title: legacy.heroTitle ?? (legacy.hero || {}).title ?? defaultContent.hero.title,
            subtitle: legacy.heroSubtitle ?? (legacy.hero || {}).subtitle ?? defaultContent.hero.subtitle,
            button: legacy.heroButton ?? (legacy.hero || {}).button ?? defaultContent.hero.button,
          }
        : {}),
    },
    rightCard: {
      ...defaultContent.rightCard,
      ...(legacy.rightCard || {}),
      ...(legacy.rightCardTitle || legacy.rightCardBenefits || legacy.floatingCardText || legacy.rightCardIcon
        ? {
            title: legacy.rightCardTitle ?? (legacy.rightCard || {}).title ?? defaultContent.rightCard.title,
            benefits: legacy.rightCardBenefits ?? (legacy.rightCard || {}).benefits ?? defaultContent.rightCard.benefits,
            floatingText: legacy.floatingCardText ?? (legacy.rightCard || {}).floatingText ?? defaultContent.rightCard.floatingText,
            icon: legacy.rightCardIcon ?? (legacy.rightCard || {}).icon ?? defaultContent.rightCard.icon,
          }
        : {}),
    },
    imageBlock: {
      ...defaultContent.imageBlock,
      ...(legacy.imageBlock || {}),
      ...(legacy.imageBlockImage ? { image: legacy.imageBlockImage } : {}),
    },
  };
}

export default function LMNPCMS() {
  const [data, setData] = useState(null);
  const [saving, setSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Charger le contenu depuis la base de données ou localStorage en fallback
  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      // Essayer d'abord la base de données
      const response = await fetch('/api/pages/content?path=/cms/immobilier/lmnp&type=cms');
      if (response.ok) {
        const result = await response.json();
        if (result.success && result.content) {
          setData(normalize(result.content.content));
          setIsLoading(false);
          return;
        }
      }
    } catch (error) {
      console.log('Base de données non disponible, utilisation du localStorage');
    }

    // Fallback vers localStorage
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          setData(normalize(JSON.parse(saved)));
        } else {
          setData(defaultContent);
        }
      } else {
        setData(defaultContent);
      }
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
      setData(defaultContent);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <p className="text-sm text-gray-600">Chargement du contenu depuis la base de données…</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <p className="text-sm text-gray-600">Erreur lors du chargement du contenu</p>
      </div>
    );
  }

  const save = async () => {
    setSaving(true);
    try {
      // Essayer d'abord la base de données
      try {
        const response = await fetch('/api/pages/content', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            pagePath: '/cms/immobilier/lmnp',
            pageType: 'cms',
            content: data,
            metadata: {
              lastModified: new Date().toISOString(),
              modifiedBy: 'admin'
            }
          })
        });

        if (response.ok) {
          console.log('Sauvegardé en base de données');
          window.dispatchEvent(new CustomEvent("contentUpdated"));
          setSaving(false);
          return;
        }
      } catch (error) {
        console.log('Base de données non disponible, utilisation du localStorage');
      }

      // Fallback vers localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        console.log('Sauvegardé en localStorage');
        window.dispatchEvent(new CustomEvent("contentUpdated"));
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[#112033]">CMS — Page LMNP</h1>
        <button
          onClick={save}
          className="px-4 py-2 rounded bg-[#4EBBBD] text-white disabled:opacity-60"
          disabled={saving}
        >
          {saving ? "Sauvegarde…" : "Sauvegarder"}
        </button>
      </div>

      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">Hero</h3>
          <TextInput label="Titre" value={data.hero.title} onChange={(v) => setData({ ...data, hero: { ...data.hero, title: v } })} />
          <TextArea label="Sous-titre" rows={5} value={data.hero.subtitle} onChange={(v) => setData({ ...data, hero: { ...data.hero, subtitle: v } })} />
          <TextInput label="Texte bouton" value={data.hero.button} onChange={(v) => setData({ ...data, hero: { ...data.hero, button: v } })} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">Carte droite</h3>
          <TextInput label="Titre carte" value={data.rightCard.title} onChange={(v) => setData({ ...data, rightCard: { ...data.rightCard, title: v } })} />
          <TextArea label="Avantages (un par ligne)" rows={6} value={data.rightCard.benefits.join("\n")} onChange={(v) => setData({ ...data, rightCard: { ...data.rightCard, benefits: v.split("\n").filter(Boolean) } })} />
          <TextArea label="Texte bulle flottante (\\n pour un saut)" rows={2} value={data.rightCard.floatingText} onChange={(v) => setData({ ...data, rightCard: { ...data.rightCard, floatingText: v } })} />
          <ImageInput label="Icône" value={data.rightCard.icon} onChange={(v) => setData({ ...data, rightCard: { ...data.rightCard, icon: v } })} />
        </div>
      </div>

      {/* Sommaire */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">Sommaire</h3>
          <TextArea label="Éléments (un par ligne)" rows={8} value={data.sommaire.items.join("\n")} onChange={(v) => setData({ ...data, sommaire: { ...data.sommaire, items: v.split("\n").filter(Boolean) } })} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">Bloc image</h3>
          <TextInput label="Titre" value={data.imageBlock.title} onChange={(v) => setData({ ...data, imageBlock: { ...data.imageBlock, title: v } })} />
          <TextArea label="Intro" rows={4} value={data.imageBlock.intro} onChange={(v) => setData({ ...data, imageBlock: { ...data.imageBlock, intro: v } })} />
          <TextArea label="Points (un par ligne)" rows={4} value={data.imageBlock.bullets.join("\n")} onChange={(v) => setData({ ...data, imageBlock: { ...data.imageBlock, bullets: v.split("\n").filter(Boolean) } })} />
          <ImageInput label="Image" value={data.imageBlock.image} onChange={(v) => setData({ ...data, imageBlock: { ...data.imageBlock, image: v } })} />
        </div>
      </div>

      {/* Définition */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">Définition</h3>
          <TextInput label="Titre" value={data.definition.title} onChange={(v) => setData({ ...data, definition: { ...data.definition, title: v } })} />
          <TextArea label="Paragraphes (un par ligne)" rows={6} value={data.definition.paragraphs.join("\n\n")} onChange={(v) => setData({ ...data, definition: { ...data.definition, paragraphs: v.split(/\n\n+/).filter(Boolean) } })} />
          <TextArea label="Puces (une par ligne)" rows={4} value={data.definition.bullets.join("\n")} onChange={(v) => setData({ ...data, definition: { ...data.definition, bullets: v.split("\n").filter(Boolean) } })} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">Changements 2025</h3>
          <TextInput label="Titre" value={data.changes2025.title} onChange={(v) => setData({ ...data, changes2025: { ...data.changes2025, title: v } })} />
          <TextArea label="Paragraphes (un par ligne)" rows={6} value={data.changes2025.paragraphs.join("\n\n")} onChange={(v) => setData({ ...data, changes2025: { ...data.changes2025, paragraphs: v.split(/\n\n+/).filter(Boolean) } })} />
        </div>
      </div>

      {/* Avantages */}
      <div>
        <h3 className="text-sm font-semibold text-[#112033] mb-3">Avantages</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.avantages.cards.map((card, idx) => (
            <div key={idx} className="rounded border p-4 bg-gray-50">
              <TextInput label={`Carte #${idx + 1} — Titre`} value={card.title} onChange={(v) => {
                const next = [...data.avantages.cards];
                next[idx] = { ...next[idx], title: v };
                setData({ ...data, avantages: { ...data.avantages, cards: next } });
              }} />
              <TextArea label="Puces (une par ligne)" rows={6} value={card.bullets.join("\n")} onChange={(v) => {
                const next = [...data.avantages.cards];
                next[idx] = { ...next[idx], bullets: v.split("\n").filter(Boolean) };
                setData({ ...data, avantages: { ...data.avantages, cards: next } });
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* Conditions */}
      <div>
        <h3 className="text-sm font-semibold text-[#112033] mb-3">Conditions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.conditions.cards.map((card, idx) => (
            <div key={idx} className="rounded border p-4 bg-gray-50">
              <TextInput label={`Bloc #${idx + 1} — Titre`} value={card.title} onChange={(v) => {
                const next = [...data.conditions.cards];
                next[idx] = { ...next[idx], title: v };
                setData({ ...data, conditions: { ...data.conditions, cards: next } });
              }} />
              <TextArea label="Puces (une par ligne)" rows={6} value={card.bullets.join("\n")} onChange={(v) => {
                const next = [...data.conditions.cards];
                next[idx] = { ...next[idx], bullets: v.split("\n").filter(Boolean) };
                setData({ ...data, conditions: { ...data.conditions, cards: next } });
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* Déclaration */}
      <div>
        <h3 className="text-sm font-semibold text-[#112033] mb-3">Déclaration des revenus</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.declaration.cards.map((card, idx) => (
            <div key={idx} className="rounded border p-4 bg-gray-50">
              <TextInput label={`Bloc #${idx + 1} — Titre`} value={card.title} onChange={(v) => {
                const next = [...data.declaration.cards];
                next[idx] = { ...next[idx], title: v };
                setData({ ...data, declaration: { ...data.declaration, cards: next } });
              }} />
              <TextArea label="Puces (une par ligne)" rows={6} value={card.bullets.join("\n")} onChange={(v) => {
                const next = [...data.declaration.cards];
                next[idx] = { ...next[idx], bullets: v.split("\n").filter(Boolean) };
                setData({ ...data, declaration: { ...data.declaration, cards: next } });
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* LMNP vs LMP */}
      <div>
        <h3 className="text-sm font-semibold text-[#112033] mb-3">Tableau — LMNP vs LMP</h3>
        <div className="space-y-4">
          {data.lmnpVsLmp.rows.map((row, idx) => (
            <div key={idx} className="rounded border p-4 bg-gray-50 grid grid-cols-1 md:grid-cols-3 gap-3">
              <TextInput label="Critère" value={row.critere} onChange={(v) => {
                const next = [...data.lmnpVsLmp.rows];
                next[idx] = { ...next[idx], critere: v };
                setData({ ...data, lmnpVsLmp: { ...data.lmnpVsLmp, rows: next } });
              }} />
              <TextInput label="LMNP" value={row.lmnp} onChange={(v) => {
                const next = [...data.lmnpVsLmp.rows];
                next[idx] = { ...next[idx], lmnp: v };
                setData({ ...data, lmnpVsLmp: { ...data.lmnpVsLmp, rows: next } });
              }} />
              <TextInput label="LMP" value={row.lmp} onChange={(v) => {
                const next = [...data.lmnpVsLmp.rows];
                next[idx] = { ...next[idx], lmp: v };
                setData({ ...data, lmnpVsLmp: { ...data.lmnpVsLmp, rows: next } });
              }} />
            </div>
          ))}
          <TextArea label="Note" rows={2} value={data.lmnpVsLmp.note || ""} onChange={(v) => setData({ ...data, lmnpVsLmp: { ...data.lmnpVsLmp, note: v } })} />
        </div>
      </div>

      {/* Résidences */}
      <div>
        <h3 className="text-sm font-semibold text-[#112033] mb-3">Résidences éligibles</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {data.residences.items.map((it, idx) => (
            <div key={idx} className="rounded border p-4 bg-gray-50">
              <TextInput label="Titre" value={it.title} onChange={(v) => {
                const next = [...data.residences.items];
                next[idx] = { ...next[idx], title: v };
                setData({ ...data, residences: { ...data.residences, items: next } });
              }} />
              <TextArea label="Texte" rows={3} value={it.text} onChange={(v) => {
                const next = [...data.residences.items];
                next[idx] = { ...next[idx], text: v };
                setData({ ...data, residences: { ...data.residences, items: next } });
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* Étapes */}
      <div>
        <h3 className="text-sm font-semibold text-[#112033] mb-3">Étapes — Obtenir le statut LMNP</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {data.steps.items.map((it, idx) => (
            <div key={idx} className="rounded border p-4 bg-gray-50">
              <TextInput label="Titre" value={it.title} onChange={(v) => {
                const next = [...data.steps.items];
                next[idx] = { ...next[idx], title: v };
                setData({ ...data, steps: { ...data.steps, items: next } });
              }} />
              <TextArea label="Texte" rows={3} value={it.text} onChange={(v) => {
                const next = [...data.steps.items];
                next[idx] = { ...next[idx], text: v };
                setData({ ...data, steps: { ...data.steps, items: next } });
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* Inconvénients */}
      <div>
        <h3 className="text-sm font-semibold text-[#112033] mb-3">Inconvénients</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.inconvenients.cards.map((card, idx) => (
            <div key={idx} className="rounded border p-4 bg-gray-50">
              <TextInput label="Titre" value={card.title} onChange={(v) => {
                const next = [...data.inconvenients.cards];
                next[idx] = { ...next[idx], title: v };
                setData({ ...data, inconvenients: { ...data.inconvenients, cards: next } });
              }} />
              <TextArea label="Puces (une par ligne)" rows={6} value={card.bullets.join("\n")} onChange={(v) => {
                const next = [...data.inconvenients.cards];
                next[idx] = { ...next[idx], bullets: v.split("\n").filter(Boolean) };
                setData({ ...data, inconvenients: { ...data.inconvenients, cards: next } });
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h3 className="text-sm font-semibold text-[#112033] mb-3">FAQ</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.faq.items.map((it, idx) => (
            <div key={idx} className="rounded border p-4 bg-gray-50">
              <TextInput label="Question" value={it.q} onChange={(v) => {
                const next = [...data.faq.items];
                next[idx] = { ...next[idx], q: v };
                setData({ ...data, faq: { ...data.faq, items: next } });
              }} />
              <TextArea label="Réponse" rows={4} value={it.a} onChange={(v) => {
                const next = [...data.faq.items];
                next[idx] = { ...next[idx], a: v };
                setData({ ...data, faq: { ...data.faq, items: next } });
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* CTA final */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-semibold text-[#112033] mb-3">CTA final</h3>
          <TextInput label="Titre" value={data.finalCta.title} onChange={(v) => setData({ ...data, finalCta: { ...data.finalCta, title: v } })} />
          <TextArea label="Sous-titre" rows={4} value={data.finalCta.subtitle} onChange={(v) => setData({ ...data, finalCta: { ...data.finalCta, subtitle: v } })} />
        </div>
        <div>
          <TextInput label="Bouton primaire" value={data.finalCta.primaryButton} onChange={(v) => setData({ ...data, finalCta: { ...data.finalCta, primaryButton: v } })} />
          <TextInput label="Bouton secondaire" value={data.finalCta.secondaryButton} onChange={(v) => setData({ ...data, finalCta: { ...data.finalCta, secondaryButton: v } })} />
        </div>
      </div>
    </div>
  );
} 