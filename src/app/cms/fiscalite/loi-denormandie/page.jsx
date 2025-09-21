"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CmsLoiDenormandiePage() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  // Loi Denormandie sections configuration
  const loiDenormandieSections = [
    {
      id: 'hero',
      name: 'Section Hero',
      description: 'Titre principal, sous-titre et description',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'subtitle', label: 'Sous-titre', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'button', label: 'Texte du Bouton', type: 'text' },
        { key: 'image', label: 'Image', type: 'text' }
      ]
    },
    {
      id: 'overview',
      name: 'Section Présentation',
      description: 'Présentation générale de la loi Denormandie',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'keyPoints', label: 'Points Clés (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'benefits',
      name: 'Avantages Fiscaux',
      description: 'Avantages et bénéfices fiscaux',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'benefits', label: 'Avantages (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'conditions',
      name: 'Conditions d\'Éligibilité',
      description: 'Conditions pour bénéficier du dispositif',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'points', label: 'Points (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'cta',
      name: 'Section CTA',
      description: 'Call-to-action final',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'buttonText', label: 'Texte du Bouton', type: 'text' }
      ]
    }
  ];

  // Load content from official page
  const loadContent = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/pages/loi-denormandie');
      if (response.ok) {
        const data = await response.json();
        if (data.content && Object.keys(data.content).length > 0) {
          setFormData(data.content);
        } else {
          // Load default content structure
          const defaultContent = {
            hero: {
              title: "Loi Denormandie",
              subtitle: "Relancer la rénovation dans les centres-villes anciens",
              description: "La loi Denormandie offre la même réduction d'impôt que Pinel, mais pour de l'ancien avec travaux. Un dispositif fiscal attractif pour investisseurs actifs ou appuyés par un bon promoteur, fiscalement efficace mais technique.",
              button: "En savoir plus",
              image: "/images/loi-denormandie-hero.jpg"
            },
            overview: {
              title: "Présentation de la loi Denormandie",
              description: "La loi Denormandie est un dispositif de défiscalisation qui permet de réduire ses impôts en investissant dans la rénovation de logements anciens situés dans des zones de revitalisation urbaine. Elle vise à relancer la rénovation dans les centres-villes anciens.",
              keyPoints: JSON.stringify([
                "Même réduction d'impôt que Pinel",
                "Mais pour de l'ancien avec travaux",
                "Travaux = ≥ 25% du coût total",
                "Location nue à loyer plafonné"
              ])
            },
            benefits: {
              title: "Avantages fiscaux",
              benefits: JSON.stringify([
                {
                  title: "Réduction d'impôt",
                  description: "12% du montant investi par an pendant 9 ans",
                  percentage: "12%"
                },
                {
                  title: "Plafond d'investissement",
                  description: "300 000€ par an",
                  amount: "300k€"
                },
                {
                  title: "Durée d'engagement",
                  description: "9 ans minimum",
                  duration: "9 ans"
                }
              ])
            },
            conditions: {
              title: "Conditions d'éligibilité",
              description: "Pour bénéficier de la Loi Denormandie, plusieurs conditions doivent être respectées :",
              points: JSON.stringify([
                "Bien situé dans une zone de revitalisation urbaine",
                "Travaux représentant au moins 25% du coût total",
                "Location nue à loyer plafonné",
                "Engagement de location de 9 ans minimum"
              ])
            },
            cta: {
              title: "Besoin d'aide pour votre investissement ?",
              description: "Nos experts vous accompagnent dans votre projet d'investissement avec la Loi Denormandie.",
              buttonText: "Demander une consultation gratuite"
            }
          };
          setFormData(defaultContent);
        }
      }
    } catch (error) {
      console.error('Error loading content:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  const handleSave = async () => {
    try {
      setSaving(true);
      const response = await fetch('/api/cms/content/loi-denormandie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Contenu sauvegardé avec succès !');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Erreur lors de la sauvegarde');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      console.error('Error saving content:', error);
      setMessage('Erreur lors de la sauvegarde');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setSaving(false);
    }
  };

  const updateContent = (sectionId, fieldKey, value) => {
    setFormData(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        [fieldKey]: value
      }
    }));
  };

  const addArrayItem = (sectionId, fieldKey) => {
    const currentArray = JSON.parse(formData[sectionId]?.[fieldKey] || '[]');
    const newItem = {};
    setFormData(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        [fieldKey]: JSON.stringify([...currentArray, newItem])
      }
    }));
  };

  const removeArrayItem = (sectionId, fieldKey, index) => {
    const currentArray = JSON.parse(formData[sectionId]?.[fieldKey] || '[]');
    const newArray = currentArray.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        [fieldKey]: JSON.stringify(newArray)
      }
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#4EBBBD] mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement du contenu...</p>
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
                ← Retour au tableau de bord
              </button>
              <h1 className="text-2xl font-bold text-gray-900">CMS - Loi Denormandie</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.open('/fiscalite/loi-denormandie', '_blank')}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Voir la page officielle
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-4 py-2 text-sm font-medium text-white bg-[#4EBBBD] border border-transparent rounded-md hover:bg-[#3DA8AA] disabled:opacity-50"
              >
                {saving ? 'Sauvegarde...' : 'Sauvegarder'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Message */}
      {message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mx-4 mt-4 rounded">
          {message}
        </div>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sections List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Sections</h2>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {loiDenormandieSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setEditingSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                        editingSection === section.id
                          ? 'border-[#4EBBBD] bg-[#4EBBBD]/10 text-[#4EBBBD]'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-medium">{section.name}</div>
                      <div className="text-sm text-gray-500">{section.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Edit Form */}
          <div className="lg:col-span-2">
            {editingSection ? (
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">
                    {loiDenormandieSections.find(s => s.id === editingSection)?.name}
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {loiDenormandieSections.find(s => s.id === editingSection)?.fields.map((field) => (
                      <div key={field.key}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field.label}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            value={formData[editingSection]?.[field.key] || ''}
                            onChange={(e) => updateContent(editingSection, field.key, e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                            rows={4}
                          />
                        ) : (
                          <input
                            type={field.type}
                            value={formData[editingSection]?.[field.key] || ''}
                            onChange={(e) => updateContent(editingSection, field.key, e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <div className="text-gray-500">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Aucune section sélectionnée</h3>
                  <p className="mt-1 text-sm text-gray-500">Sélectionnez une section à gauche pour commencer l'édition.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}