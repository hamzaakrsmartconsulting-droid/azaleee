"use client";

import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';



const defaultContent = {
  hero: {
    title: "Investir avec le statut LMNP (location meublée non professionnelle) avec Azalee Wealth",
    subtitle: "L'investissement locatif est une stratégie d'épargne efficace. Ce système de défiscalisation immobilière permet de se constituer un patrimoine tout en percevant, mensuellement, un complément de salaire. Notre expertise de plus de 30 ans vous accompagne pour optimiser votre investissement LMNP.",
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
    intro: "Découvrez comment l'investissement LMNP peut transformer votre approche de l'immobilier locatif. Nos experts vous accompagnent dans la sélection de biens optimisés pour la location meublée.",
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
        title: "Revenus locatifs",
        bullets: [
          "Maximum 23 000 € par an",
          "Inférieurs aux autres revenus",
          "Pas d'activité principale",
        ],
      },
      {
        title: "Type de bien",
        bullets: [
          "Bien meublé obligatoire",
          "Équipements de base inclus",
          "Conformité aux normes",
        ],
      },
      {
        title: "Statut fiscal",
        bullets: [
          "Résident fiscal français",
          "Déclaration annuelle obligatoire",
          "Respect des obligations comptables",
        ],
      },
    ],
  },
  declaration: {
    title: "4. Comment déclarer ses revenus en LMNP ?",
    paragraphs: [
      "La déclaration des revenus LMNP se fait chaque année dans votre déclaration d'impôts. Vous devez remplir le formulaire 2042 C PRO pour déclarer vos revenus locatifs.",
      "Les charges déductibles incluent : l'amortissement du bien, les intérêts d'emprunt, les charges de copropriété, les assurances, les frais de gestion, etc.",
    ],
    steps: [
      "Remplir le formulaire 2042 C PRO",
      "Joindre le bilan et le compte de résultat",
      "Déclarer les revenus et charges",
      "Calculer le résultat imposable",
    ],
  },
  obtention: {
    title: "5. Comment obtenir le statut LMNP ?",
    paragraphs: [
      "Le statut LMNP s'obtient automatiquement dès lors que vous louez un bien meublé et que vous respectez les conditions de revenus. Aucune démarche administrative préalable n'est nécessaire.",
      "Cependant, il est recommandé de se faire accompagner par des professionnels pour optimiser votre investissement et respecter toutes les obligations.",
    ],
    conseils: [
      "Choisir un bien adapté à la location meublée",
      "Équiper le bien selon les standards",
      "Respecter les plafonds de revenus",
      "Tenir une comptabilité rigoureuse",
    ],
  },
  inconvenients: {
    title: "6. Quels sont les inconvénients de la location meublée non professionnelle ?",
    cards: [
      {
        title: "Complexité administrative",
        bullets: [
          "Comptabilité obligatoire",
          "Déclarations fiscales annuelles",
          "Respect des réglementations",
          "Gestion des charges",
        ],
      },
      {
        title: "Risques financiers",
        bullets: [
          "Vacances locatives possibles",
          "Coûts d'équipement et d'entretien",
          "Fiscalité complexe",
          "Évolution de la réglementation",
        ],
      },
      {
        title: "Engagement",
        bullets: [
          "Investissement à long terme",
          "Gestion locative continue",
          "Adaptation aux évolutions",
          "Maintenance du bien",
        ],
      },
    ],
  },
  faq: {
    title: "7. Questions et réponses sur la LMNP",
    questions: [
      {
        question: "Puis-je louer plusieurs biens en LMNP ?",
        reponse: "Oui, vous pouvez louer plusieurs biens en LMNP, mais le plafond de 23 000 € s'applique à l'ensemble de vos revenus locatifs.",
      },
      {
        question: "Quels meubles sont obligatoires ?",
        reponse: "Le bien doit être équipé des meubles de base : lit, table, chaises, armoire, électroménager de base, etc.",
      },
      {
        question: "Comment calculer l'amortissement ?",
        reponse: "L'amortissement se calcule sur la valeur du bien (hors terrain) sur une durée de 20 à 30 ans selon la nature du bien.",
      },
      {
        question: "Puis-je déduire les frais de notaire ?",
        reponse: "Non, les frais de notaire ne sont pas déductibles en LMNP, mais ils peuvent être inclus dans la base d'amortissement.",
      },
    ],
  },
  sectionOrder: [
    'hero',
    'sommaire',
    'imageBlock',
    'definition',
    'changes2025',
    'avantages',
    'conditions',
    'declaration',
    'lmnpVsLmp',
    'residences',
    'steps',
    'inconvenients',
    'faq',
    'finalCta',
  ],
};

// Deep merge utility to safely merge saved content with defaults
function deepMerge(defaultObj, sourceObj) {
  if (Array.isArray(defaultObj)) {
    return Array.isArray(sourceObj) ? sourceObj : defaultObj;
  }
  if (defaultObj && typeof defaultObj === 'object') {
    const result = {};
    const keys = new Set([
      ...Object.keys(defaultObj || {}),
      ...Object.keys(sourceObj || {}),
    ]);
    keys.forEach((key) => {
      const defaultVal = defaultObj ? defaultObj[key] : undefined;
      const sourceVal = sourceObj ? sourceObj[key] : undefined;
      result[key] = deepMerge(defaultVal, sourceVal);
    });
    return result;
  }
  return sourceObj != null ? sourceObj : defaultObj;
}

// Composant d'édition directe
const EditableElement = ({ value, onChange, element, className, placeholder, multiline = false }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleDoubleClick = () => {
    setIsEditing(true);
    setEditValue(value);
  };

    const handleSave = async () => {
    try {
      const response = await fetch('/api/pages/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pagePath: '/immobilier/lmnp',
          pageType: 'cms',
          content: content,
          metadata: {
            lastModified: new Date().toISOString(),
            modifiedBy: 'admin',
            pageType: 'cms'
          }
        })
      });

      if (response.ok) {
        console.log('Sauvegardé en base de données');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la sauvegarde');
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      alert('Erreur lors de la sauvegarde: ' + error.message);
    }
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('contentUpdated'));
  };

  // Drag & Drop: reorder sectionOrder
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const currentOrder = content.sectionOrder || defaultContent.sectionOrder;
    const newOrder = reorder(currentOrder, result.source.index, result.destination.index);
    const updated = { ...content, sectionOrder: newOrder };
    setContent(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('contentUpdated'));
      channel?.postMessage({ path: '/cms/immobilier/lmnp', key: LOCAL_STORAGE_KEY, ts: Date.now() });
    } catch {}
  };

  useEffect(() => {
    return () => {
      try { channel?.close?.(); } catch {}
    };
  }, [channel]);

  // Render a section by key based on current content
  const renderSection = (key) => {
    switch (key) {
      case 'hero':
  return (
          <section key="hero" className="bg-gradient-to-r from-[#FFEFD5] to-[#D7E8FF] py-16 sm:py-20 lg:py-24">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-1">
                  <EditableElement
                    value={content.hero.title}
                    onChange={(value) => handleChange('hero', 'title', value)}
                    element="h1"
                    className="text-[#112033] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6"
                    placeholder="Titre principal de la page"
                  />
                  <EditableElement
                    value={content.hero.subtitle}
                    onChange={(value) => handleChange('hero', 'subtitle', value)}
                    element="p"
                    className="text-[#374151] text-lg leading-relaxed mb-8"
                    placeholder="Sous-titre de la page"
                    multiline
                  />
                  <EditableElement
                    value={content.hero.button}
                    onChange={(value) => handleChange('hero', 'button', value)}
                    element="button"
                    className="inline-flex items-center justify-center bg-[#4EBBBD] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#3DA8AA] transition-colors"
                    placeholder="Texte du bouton CTA"
                  />
      </div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <EditableElement
                    value={content.rightCard.title}
                    onChange={(value) => handleChange('rightCard', 'title', value)}
                    element="h2"
                    className="text-2xl font-semibold text-[#112033] mb-6"
                    placeholder="Titre de la carte droite"
                  />
                  <EditableList
                    items={content.rightCard?.benefits || []}
                    onChange={(value) => handleChange('rightCard', 'benefits', value)}
                    className="space-y-3 mb-6"
                    placeholder="Ajoutez des avantages..."
                  />
                  <div className="bg-[#4EBBBD] rounded-lg p-4 text-white text-center">
                    <EditableElement
                      value={content.rightCard.floatingText}
                      onChange={(value) => handleChange('rightCard', 'floatingText', value)}
                      element="p"
                      className="text-lg font-semibold whitespace-pre-line"
                      placeholder="Texte flottant"
                    />
        </div>
        </div>
      </div>
        </div>
          </section>
        );
      case 'sommaire':
        return (
          <section key="sommaire" className="py-16 sm:py-20 bg-white">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-[#112033] text-3xl sm:text-4xl font-semibold text-center mb-12">Sommaire</h2>
              <div className="max-w-4xl mx-auto">
                <EditableList
                  items={content.sommaire?.items || []}
                  onChange={(value) => handleChange('sommaire', 'items', value)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  placeholder="Ajoutez des éléments au sommaire..."
                />
        </div>
      </div>
          </section>
        );
      case 'imageBlock':
        return (
          <section key="imageBlock" className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
                  <EditableElement
                    value={content.imageBlock.title}
                    onChange={(value) => handleChange('imageBlock', 'title', value)}
                    element="h2"
                    className="text-3xl font-semibold text-[#112033] mb-6"
                    placeholder="Titre du bloc image"
                  />
                  <EditableElement
                    value={content.imageBlock.intro}
                    onChange={(value) => handleChange('imageBlock', 'intro', value)}
                    element="p"
                    className="text-lg text-[#374151] leading-relaxed mb-6"
                    placeholder="Introduction du bloc image"
                    multiline
                  />
                  <EditableList
                    items={content.imageBlock?.bullets || []}
                    onChange={(value) => handleChange('imageBlock', 'bullets', value)}
                    className="space-y-2"
                    placeholder="Ajoutez des points clés..."
                  />
        </div>
                <div className="text-center">
                  <img src={content.imageBlock.image} alt="Investissement LMNP" className="w-full max-w-md mx-auto rounded-lg shadow-lg" />
        </div>
      </div>
            </div>
          </section>
        );
      case 'definition':
        return (
          <section key="definition" className="py-16 sm:py-20 bg-white">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <EditableElement
                  value={content.definition.title}
                  onChange={(value) => handleChange('definition', 'title', value)}
                  element="h2"
                  className="text-3xl font-semibold text-[#112033] mb-8"
                  placeholder="Titre de la définition"
                />
                <div className="space-y-4 mb-6">
                  {content.definition?.paragraphs?.map((paragraph, index) => (
                    <EditableElement
                      key={index}
                      value={paragraph}
                      onChange={(value) => {
                        const newParagraphs = [...content.definition.paragraphs];
                        newParagraphs[index] = value;
                        handleChange('definition', 'paragraphs', newParagraphs);
                      }}
                      element="p"
                      className="text-lg text-[#374151] leading-relaxed"
                      placeholder={`Paragraphe ${index + 1}`}
                      multiline
                    />
          ))}
        </div>
                <EditableList
                  items={content.definition?.bullets || []}
                  onChange={(value) => handleChange('definition', 'bullets', value)}
                  className="space-y-2 ml-6"
                  placeholder="Ajoutez des points à savoir..."
                />
      </div>
            </div>
          </section>
        );
      case 'changes2025':
        return (
          <section key="changes2025" className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <EditableElement
                  value={content.changes2025.title}
                  onChange={(value) => handleChange('changes2025', 'title', value)}
                  element="h2"
                  className="text-3xl font-semibold text-[#112033] mb-8"
                  placeholder="Titre des changements 2025"
                />
                <div className="space-y-4">
                  {content.changes2025?.paragraphs?.map((paragraph, index) => (
                    <EditableElement
                      key={index}
                      value={paragraph}
                      onChange={(value) => {
                        const newParagraphs = [...content.changes2025.paragraphs];
                        newParagraphs[index] = value;
                        handleChange('changes2025', 'paragraphs', newParagraphs);
                      }}
                      element="p"
                      className="text-lg text-[#374151] leading-relaxed"
                      placeholder={`Paragraphe ${index + 1}`}
                      multiline
                    />
          ))}
        </div>
      </div>
            </div>
          </section>
        );
      case 'avantages':
        return (
          <section key="avantages" className="py-16 sm:py-20 bg-white">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <EditableElement
                value={content.avantages.title}
                onChange={(value) => handleChange('avantages', 'title', value)}
                element="h2"
                className="text-3xl font-semibold text-[#112033] text-center mb-12"
                placeholder="Titre de la section avantages"
              />
              <EditableCards
                cards={content.avantages?.cards || []}
                onChange={(value) => handleChange('avantages', 'cards', value)}
                className=""
              />
            </div>
          </section>
        );
      case 'conditions':
        return (
          <section key="conditions" className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <EditableElement
                value={content.conditions.title}
                onChange={(value) => handleChange('conditions', 'title', value)}
                element="h2"
                className="text-3xl font-semibold text-[#112033] text-center mb-12"
                placeholder="Titre de la section conditions"
              />
              <EditableCards
                cards={content.conditions?.cards || []}
                onChange={(value) => handleChange('conditions', 'cards', value)}
                className=""
              />
            </div>
          </section>
        );
      case 'declaration':
        return (
          <section key="declaration" className="py-16 sm:py-20 bg-white">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <EditableElement
                  value={content.declaration.title}
                  onChange={(value) => handleChange('declaration', 'title', value)}
                  element="h2"
                  className="text-3xl font-semibold text-[#112033] mb-8"
                  placeholder="Titre de la section déclaration"
                />
                <div className="space-y-4 mb-6">
                  {content.declaration?.paragraphs?.map((paragraph, index) => (
                    <EditableElement
                      key={index}
                      value={paragraph}
                      onChange={(value) => {
                        const newParagraphs = [...(content.declaration?.paragraphs || [])];
                        newParagraphs[index] = value;
                        handleChange('declaration', 'paragraphs', newParagraphs);
                      }}
                      element="p"
                      className="text-lg text-[#374151] leading-relaxed"
                      placeholder={`Paragraphe ${index + 1}`}
                      multiline
                    />
          ))}
        </div>
                <EditableList
                  items={content.declaration?.steps || []}
                  onChange={(value) => handleChange('declaration', 'steps', value)}
                  className="space-y-2 ml-6"
                  placeholder="Ajoutez les étapes de déclaration..."
                />
      </div>
            </div>
          </section>
        );
      case 'obtention':
        return (
          <section key="obtention" className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <EditableElement
                  value={content.obtention.title}
                  onChange={(value) => handleChange('obtention', 'title', value)}
                  element="h2"
                  className="text-3xl font-semibold text-[#112033] mb-8"
                  placeholder="Titre de la section obtention"
                />
                <div className="space-y-4 mb-6">
                  {content.obtention?.paragraphs?.map((paragraph, index) => (
                    <EditableElement
                      key={index}
                      value={paragraph}
                      onChange={(value) => {
                        const newParagraphs = [...content.obtention.paragraphs];
                        newParagraphs[index] = value;
                        handleChange('obtention', 'paragraphs', newParagraphs);
                      }}
                      element="p"
                      className="text-lg text-[#374151] leading-relaxed"
                      placeholder={`Paragraphe ${index + 1}`}
                    />
                  ))}
        </div>
                <EditableList
                  items={content.obtention?.conseils || []}
                  onChange={(value) => handleChange('obtention', 'conseils', value)}
                  className="space-y-2 ml-6"
                  placeholder="Ajoutez des conseils..."
                />
      </div>
            </div>
          </section>
        );
      case 'inconvenients':
        return (
          <section key="inconvenients" className="py-16 sm:py-20 bg-white">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <EditableElement
                value={content.inconvenients.title}
                onChange={(value) => handleChange('inconvenients', 'title', value)}
                element="h2"
                className="text-3xl font-semibold text-[#112033] text-center mb-12"
                placeholder="Titre de la section inconvénients"
              />
              <EditableCards
                cards={content.inconvenients?.cards || []}
                onChange={(value) => handleChange('inconvenients', 'cards', value)}
                className=""
              />
            </div>
          </section>
        );
      case 'faq':
        return (
          <section key="faq" className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-[1368px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <EditableElement
                  value={content.faq.title}
                  onChange={(value) => handleChange('faq', 'title', value)}
                  element="h2"
                  className="text-3xl font-semibold text-[#112033] text-center mb-12"
                  placeholder="Titre de la section FAQ"
                />
                <div className="space-y-6">
                  {content.faq?.questions?.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                      <EditableElement
                        value={faq.question}
                        onChange={(value) => {
                          const newQuestions = [...content.faq.questions];
                          newQuestions[index] = { ...faq, question: value };
                          handleChange('faq', 'questions', newQuestions);
                        }}
                        element="h3"
                        className="text-lg font-semibold text-[#112033] mb-3"
                        placeholder="Question"
                      />
                      <EditableElement
                        value={faq.reponse}
                        onChange={(value) => {
                          const newQuestions = [...content.faq.questions];
                          newQuestions[index] = { ...faq, reponse: value };
                          handleChange('faq', 'questions', newQuestions);
                        }}
                        element="p"
                        className="text-[#374151] leading-relaxed"
                        placeholder="Réponse"
                        multiline
                      />
            </div>
          ))}
        </div>
      </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  if (!content) {
  return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4EBBBD] mx-auto mb-4"></div>
          <p className="text-[#686868]">Chargement du CMS...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header du CMS */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
      <div>
              <h1 className="text-2xl font-bold text-[#112033]">CMS LMNP - Mode Visuel</h1>
              <p className="text-[#686868]">Double-cliquez sur les éléments pour les modifier directement</p>
            </div>
            <div className="flex items-center gap-3">
        <button
                onClick={() => setEditMode(editMode === 'visual' ? 'form' : 'visual')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  editMode === 'visual' 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {editMode === 'visual' ? '📝 Mode Formulaire' : '👁️ Mode Visuel'}
              </button>
              <button
                onClick={handleSave}
                className="bg-[#4EBBBD] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#3DA8AA]"
              >
                💾 Sauvegarder
        </button>
            </div>
      </div>

          {/* Ordre des sections (Drag & Drop) */}
          <div className="mt-3">
            <h3 className="text-sm font-semibold text-[#112033] mb-2">Ordre des sections</h3>
            <p className="text-xs text-[#686868] mb-3">Faites glisser les éléments pour réordonner. L'ordre est appliqué sur la page officielle.</p>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="sections-order" direction="horizontal">
                {(provided) => (
                  <ul ref={provided.innerRef} {...provided.droppableProps} className="flex flex-wrap gap-2">
                    {(content.sectionOrder || defaultContent.sectionOrder).map((sec, index) => (
                      <Draggable key={sec} draggableId={sec} index={index}>
                        {(dragProvided, snapshot) => (
                          <li
                            ref={dragProvided.innerRef}
                            {...dragProvided.draggableProps}
                            {...dragProvided.dragHandleProps}
                            className={`px-3 py-1 rounded border text-xs select-none ${snapshot.isDragging ? 'bg-blue-50 border-blue-300' : 'bg-gray-50 border-gray-200'}`}
                          >
                            {sec}
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </div>

          {/* Instructions */}
          {editMode === 'visual' && (
            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700">
                💡 <strong>Mode Visuel :</strong> Double-cliquez sur n'importe quel texte pour le modifier. 
                Appuyez sur <kbd className="bg-blue-100 px-1 rounded text-xs">Entrée</kbd> pour sauvegarder, 
                <kbd className="bg-blue-100 px-1 rounded text-xs">Échap</kbd> pour annuler.
              </p>
        </div>
          )}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto">
        {editMode === 'visual' ? (
          // Mode Visuel — Render by current section order so drag changes show in real time
          <div className="space-y-0">
            {(content.sectionOrder || []).map((sec) => renderSection(sec))}
          </div>
        ) : (
          // Mode Formulaire - Interface classique
          <div className="space-y-6 p-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-[#112033] mb-4">Section Hero</h2>
              <div className="space-y-4">
      <div>
                  <label className="block text-sm font-medium text-[#686868] mb-2">Titre principal</label>
                  <input
                    value={content.hero.title}
                    onChange={(e) => handleChange('hero', 'title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
            </div>
                <div>
                  <label className="block text-sm font-medium text-[#686868] mb-2">Sous-titre</label>
                  <textarea
                    value={content.hero.subtitle}
                    onChange={(e) => handleChange('hero', 'subtitle', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#686868] mb-2">Bouton CTA</label>
                  <input
                    value={content.hero.button}
                    onChange={(e) => handleChange('hero', 'button', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
        </div>
      </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-[#112033] mb-4">Carte droite</h2>
              <div className="space-y-4">
      <div>
                  <label className="block text-sm font-medium text-[#686868] mb-2">Titre</label>
                  <input
                    value={content.rightCard.title}
                    onChange={(e) => handleChange('rightCard', 'title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#686868] mb-2">Texte flottant</label>
                  <textarea
                    value={content.rightCard.floatingText}
                    onChange={(e) => handleChange('rightCard', 'floatingText', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#686868] mb-2">Avantages</label>
                  {content.rightCard.benefits.map((benefit, index) => (
                    <div key={index} className="mb-2">
                      <input
                        value={benefit}
                        onChange={(e) => {
                          const newBenefits = [...content.rightCard.benefits];
                          newBenefits[index] = e.target.value;
                          handleChange('rightCard', 'benefits', newBenefits);
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
            </div>
          ))}
                </div>
        </div>
      </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-[#112033] mb-4">Sommaire</h2>
              <div className="space-y-4">
        <div>
                  <label className="block text-sm font-medium text-[#686868] mb-2">Éléments du sommaire</label>
                  {content.sommaire.items.map((item, index) => (
                    <div key={index} className="mb-2">
                      <input
                        value={item}
                        onChange={(e) => {
                          const newItems = [...content.sommaire.items];
                          newItems[index] = e.target.value;
                          handleChange('sommaire', 'items', newItems);
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      />
        </div>
          ))}
        </div>
      </div>
        </div>
        </div>
        )}
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-[#4EBBBD] text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Contenu sauvegardé avec succès !
        </div>
      )}
    </div>
  );
} 
