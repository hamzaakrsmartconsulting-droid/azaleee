"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CmsDefiscalisationCasSpecifiquesPage() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  // Defiscalisation Cas Specifiques sections configuration
  const defiscalisationCasSpecifiquesSections = [
    {
      id: 'hero',
      name: 'Section Hero',
      description: 'Titre principal, sous-titre et bouton CTA',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'subtitle', label: 'Sous-titre', type: 'textarea' },
        { key: 'button', label: 'Texte du Bouton', type: 'text' },
        { key: 'image', label: 'Image Hero', type: 'text' }
      ]
    },
    {
      id: 'casSpecifiques',
      name: 'Cas Spécifiques',
      description: 'Liste des cas spécifiques de défiscalisation',
      fields: [
        { key: 'title', label: 'Titre de la Section', type: 'text' },
        { key: 'items', label: 'Liste des Cas (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'situationsParticulieres',
      name: 'Situations Particulières',
      description: 'Situations particulières et cas spéciaux',
      fields: [
        { key: 'title', label: 'Titre de la Section', type: 'text' },
        { key: 'items', label: 'Liste des Situations (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'cta',
      name: 'Call to Action',
      description: 'Section d\'appel à l\'action',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'subtitle', label: 'Sous-titre', type: 'textarea' },
        { key: 'primaryButton', label: 'Bouton Principal', type: 'text' },
        { key: 'secondaryButton', label: 'Bouton Secondaire', type: 'text' }
      ]
    }
  ];

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/pages/defiscalisation-cas-specifiques');
      if (response.ok) {
        const data = await response.json();
        if (data.content && Object.keys(data.content).length > 0) {
          // Convert content to sections format
          const sectionsData = defiscalisationCasSpecifiquesSections.map(section => ({
            ...section,
            content: data.content[section.id] || {}
          }));
          setSections(sectionsData);
        } else {
          // Load default content
          const defaultContent = {
            hero: {
              title: "Défiscalisation - Cas spéciaux",
              subtitle: "Découvrez les dispositifs de défiscalisation spécifiques et les situations particulières qui peuvent vous permettre d'optimiser votre fiscalité.",
              button: "Étudier mon cas",
              image: "/images/fiscalite-cas-specifiques-hero.jpg"
            },
            casSpecifiques: {
              title: "Cas spéciaux de défiscalisation",
              items: [
                {
                  nom: "Défiscalisation outre-mer",
                  description: "Dispositifs spécifiques pour les investissements en outre-mer",
                  avantages: ["Réduction jusqu'à 40%", "Investissement plafonné à 300k€", "Engagement 5 ans minimum"],
                  conditions: ["Bien situé en outre-mer", "Location à usage d'habitation", "Investissement direct ou SCPI"]
                },
                {
                  nom: "Défiscalisation monuments historiques",
                  description: "Réduction d'impôt pour la rénovation de monuments classés",
                  avantages: ["Réduction jusqu'à 30%", "Plafond 400k€", "Engagement 9 ans minimum"],
                  conditions: ["Bien classé ou inscrit", "Rénovation aux normes", "Location 9 ans minimum"]
                },
                {
                  nom: "Défiscalisation rénovation énergétique",
                  description: "Réduction d'impôt pour les travaux de rénovation énergétique",
                  avantages: ["Réduction jusqu'à 30%", "Plafond 8k€", "Engagement 3 ans"],
                  conditions: ["Résidence principale", "Travaux énergétiques", "Engagement 3 ans"]
                }
              ]
            },
            situationsParticulieres: {
              title: "Situations particulières",
              items: [
                {
                  situation: "Investisseur étranger",
                  description: "Fiscalité spécifique pour les non-résidents",
                  points: ["Imposition différente", "Conventions fiscales", "Obligations déclaratives"]
                },
                {
                  situation: "Expatrié",
                  description: "Optimisation fiscale pour les expatriés",
                  points: ["Résidence fiscale", "Imposition des revenus", "Défiscalisation à distance"]
                },
                {
                  situation: "Retraité",
                  description: "Stratégies fiscales pour les retraités",
                  points: ["TMI réduit", "Défiscalisation adaptée", "Transmission optimisée"]
                }
              ]
            },
            cta: {
              title: "Votre cas est-il éligible ?",
              subtitle: "Nos experts analysent votre situation pour identifier les dispositifs applicables",
              primaryButton: "Analyse gratuite",
              secondaryButton: "Consultation spécialisée"
            }
          };
          
          const sectionsData = defiscalisationCasSpecifiquesSections.map(section => ({
            ...section,
            content: defaultContent[section.id] || {}
          }));
          setSections(sectionsData);
        }
      }
    } catch (error) {
      console.error('Erreur lors du chargement du contenu:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditSection = (section) => {
    setEditingSection(section);
    setFormData(section.content || {});
  };

  const handleSaveSection = async () => {
    if (!editingSection) return;

    setSaving(true);
    try {
      // Update sections state
      setSections(prev => prev.map(section => 
        section.id === editingSection.id 
          ? { ...section, content: formData }
          : section
      ));

      // Convert sections back to content format
      const content = {};
      sections.forEach(section => {
        if (section.id === editingSection.id) {
          content[section.id] = formData;
        } else {
          content[section.id] = section.content;
        }
      });

      // Save to database
      const response = await fetch('/api/cms/content/defiscalisation-cas-specifiques', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        console.log('✅ Section sauvegardée avec succès');
      } else {
        console.error('❌ Erreur lors de la sauvegarde');
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    } finally {
      setSaving(false);
      setEditingSection(null);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4EBBBD] mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement du contenu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/cms/dashboard')}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">CMS - Défiscalisation Cas Spécifiques</h1>
                <p className="text-gray-600">Gérez le contenu de la page Défiscalisation Cas Spécifiques</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => router.push('/fiscalite/defiscalisation-cas-specifiques')}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Voir la page
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {editingSection ? (
          /* Edit Mode */
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{editingSection.name}</h2>
                <p className="text-gray-600">{editingSection.description}</p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setEditingSection(null)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSaveSection}
                  disabled={saving}
                  className="px-6 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA] transition-colors disabled:opacity-50"
                >
                  {saving ? 'Sauvegarde...' : 'Sauvegarder'}
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {editingSection.fields.map(field => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      value={formData[field.key] || ''}
                      onChange={(e) => handleInputChange(field.key, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      rows={4}
                      placeholder={`Saisissez ${field.label.toLowerCase()}...`}
                    />
                  ) : (
                    <input
                      type="text"
                      value={formData[field.key] || ''}
                      onChange={(e) => handleInputChange(field.key, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                      placeholder={`Saisissez ${field.label.toLowerCase()}...`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* List Mode */
          <div className="space-y-6">
            {sections.map(section => (
              <div key={section.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{section.name}</h2>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                  <button
                    onClick={() => handleEditSection(section)}
                    className="px-4 py-2 bg-[#4EBBBD] text-white rounded-lg hover:bg-[#3DA8AA] transition-colors"
                  >
                    Modifier
                  </button>
                </div>

                {/* Content Preview */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Aperçu du contenu :</h3>
                  <div className="space-y-2">
                    {section.fields.map(field => {
                      const value = section.content[field.key];
                      if (!value) return null;
                      
                      return (
                        <div key={field.key} className="text-sm">
                          <span className="font-medium text-gray-600">{field.label}:</span>
                          <span className="ml-2 text-gray-900">
                            {field.type === 'textarea' ? (
                              <div className="whitespace-pre-wrap">{value}</div>
                            ) : (
                              value
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}