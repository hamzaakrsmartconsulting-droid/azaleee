"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CmsReductionsImpotDeficitFoncierPage() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  // Réductions d'impôt sections configuration
  const reductionsImpotSections = [
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
      id: 'quickStats',
      name: 'Chiffres Clés',
      description: 'Statistiques rapides et chiffres importants',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'stats', label: 'Statistiques (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'comparison',
      name: 'Comparaison',
      description: 'Comparaison entre réduction d\'impôt et déduction',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'table', label: 'Tableau (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'investorProfile',
      name: 'Profil Investisseur',
      description: 'Qui peut en profiter',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'profiles', label: 'Profils (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'conditions',
      name: 'Conditions',
      description: 'Conditions pour créer un déficit foncier',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'conditions', label: 'Conditions (JSON)', type: 'textarea' }
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
      const response = await fetch('/api/pages/reductions-impot-deficit-foncier');
      if (response.ok) {
        const data = await response.json();
        if (data.content && Object.keys(data.content).length > 0) {
          setFormData(data.content);
        } else {
          // Load default content structure
          const defaultContent = {
            hero: {
              title: "Déficit foncier et réductions d'impôt",
              subtitle: "Un levier fiscal puissant pour investisseurs avertis",
              description: "Pour les investisseurs disposant de revenus fonciers imposables ou d'une tranche marginale d'imposition (TMI) élevée, le déficit foncier permet une double optimisation : réduction de l'impôt sur le revenu et diminution des prélèvements sociaux (CSG/CRDS à 17,2%) sur les revenus fonciers.",
              button: "Calculer mon déficit foncier",
              image: "/images/fiscalite-deficit-foncier-hero.jpg"
            },
            quickStats: {
              title: "Chiffres clés",
              stats: JSON.stringify([
                { label: "Déficit foncier", value: "10 700€", description: "Plafond annuel déductible" },
                { label: "Report", value: "10 ans", description: "Sur revenus fonciers" },
                { label: "Rendement fiscal", value: "58%", description: "TMI 41% + CSG/CRDS" }
              ])
            },
            comparison: {
              title: "Réduction d'impôt ou déduction du revenu ?",
              description: "Comprendre la différence entre les deux mécanismes fiscaux",
              table: JSON.stringify({
                headers: ["Mécanisme", "Effet fiscal", "Bénéfice"],
                rows: [
                  {
                    mecanisme: "Réduction d'impôt",
                    effet: "Soustraction directe de l'impôt à payer",
                    benefice: "1 000 € réduits = 1 000 € gagnés"
                  },
                  {
                    mecanisme: "Déficit foncier",
                    effet: "Diminution de la base imposable",
                    benefice: "Effet amplifié selon la TMI + économie de CSG/CRDS"
                  }
                ]
              })
            },
            investorProfile: {
              title: "Qui peut en profiter ?",
              description: "Le déficit foncier s'adresse à des investisseurs spécifiques",
              profiles: JSON.stringify([
                "Propriétaires de biens locatifs déjà imposables au régime réel (hors micro-foncier)",
                "Contribuables avec une TMI élevée (30% ou plus)",
                "Investisseurs souhaitant valoriser des biens anciens avec travaux"
              ])
            },
            conditions: {
              title: "Conditions pour créer un déficit foncier",
              description: "Les conditions spécifiques à respecter pour bénéficier du déficit foncier",
              conditions: JSON.stringify([
                "Bien en location nue (non meublée), soumis au régime réel",
                "Travaux éligibles : entretien, réparation, amélioration",
                "Pas d'agrandissement ni de construction neuve",
                "Travaux réellement payés et effectués avant d'être mis en location"
              ])
            },
            cta: {
              title: "Besoin d'aide pour optimiser votre fiscalité ?",
              description: "Nos experts vous accompagnent dans votre stratégie de déficit foncier et réductions d'impôt.",
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
      const response = await fetch('/api/cms/content/reductions-impot-deficit-foncier', {
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
              <h1 className="text-2xl font-bold text-gray-900">CMS - Réductions d'impôt</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.open('/fiscalite/reductions-impot-deficit-foncier', '_blank')}
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
                  {reductionsImpotSections.map((section) => (
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
                    {reductionsImpotSections.find(s => s.id === editingSection)?.name}
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {reductionsImpotSections.find(s => s.id === editingSection)?.fields.map((field) => (
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