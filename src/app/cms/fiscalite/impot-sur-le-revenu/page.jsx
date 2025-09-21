'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ImpotSurLeRevenuCMS() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  // Impôt sur le revenu sections configuration
  const impotSections = [
    {
      id: 'hero',
      name: 'Section Hero',
      description: 'Titre principal, description et boutons CTA',
      fields: [
        { key: 'title', label: 'Titre Principal', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'button1Text', label: 'Texte Bouton 1', type: 'text' },
        { key: 'button1Link', label: 'Lien Bouton 1', type: 'text' },
        { key: 'button2Text', label: 'Texte Bouton 2', type: 'text' },
        { key: 'button2Link', label: 'Lien Bouton 2', type: 'text' }
      ]
    },
    {
      id: 'stats',
      name: 'Statistiques Rapides',
      description: 'Cartes de statistiques flottantes',
      fields: [
        { key: 'stats', label: 'Statistiques (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'sommaire',
      name: 'Sommaire',
      description: 'Section sommaire avec navigation',
      fields: [
        { key: 'title', label: 'Titre', type: 'text' },
        { key: 'items', label: 'Éléments du sommaire (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'content',
      name: 'Contenu Principal',
      description: 'Contenu détaillé de la page',
      fields: [
        { key: 'sections', label: 'Sections de contenu (JSON)', type: 'textarea' }
      ]
    },
    {
      id: 'cta',
      name: 'Call-to-Action',
      description: 'Section d\'appel à l\'action',
      fields: [
        { key: 'title', label: 'Titre', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'buttonText', label: 'Texte du Bouton', type: 'text' }
      ]
    }
  ];

  useEffect(() => {
    loadSections();
  }, []);

  const loadSections = async () => {
    try {
      // Load CMS content first
      const cmsResponse = await fetch('/api/cms/content/impot-sur-le-revenu');
      let cmsSections = [];
      if (cmsResponse.ok) {
        cmsSections = await cmsResponse.json();
      }

      // Always use comprehensive default content that matches the impot page
      console.log('CMS Impôt - Loading comprehensive default content');
      
      const currentContent = {
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

      // Merge CMS sections with current content
      const mergedSections = impotSections.map(section => {
        const cmsSection = cmsSections.find(s => s.section_name === section.id);
        const currentSectionContent = currentContent[section.id] || {};
        
        console.log(`CMS Impôt - Section ${section.id}:`, {
          hasCmsData: !!cmsSection,
          hasCurrentData: Object.keys(currentSectionContent).length > 0,
          currentData: currentSectionContent
        });
        
        return {
          ...section,
          cmsData: cmsSection?.content_data ? JSON.parse(cmsSection.content_data) : {},
          currentData: currentSectionContent,
          hasCmsContent: !!cmsSection,
          hasCurrentContent: Object.keys(currentSectionContent).length > 0
        };
      });

      console.log('CMS Impôt - Loaded sections:', mergedSections.length);
      console.log('CMS Impôt - Current content keys:', Object.keys(currentContent));
      console.log('CMS Impôt - Sample content for hero:', currentContent.hero);
      console.log('CMS Impôt - Sample merged section:', mergedSections[0]);
      console.log('CMS Impôt - All sections with content:', mergedSections.filter(s => s.hasCurrentContent));
      setSections(mergedSections);
    } catch (error) {
      console.error('Error loading impot sections:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (section) => {
    setEditingSection(section.id);
    // Use current data if available, otherwise use CMS data
    const dataToEdit = section.hasCurrentContent ? section.currentData : section.cmsData;
    setFormData(dataToEdit);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      console.log('Saving impot content for section:', editingSection);
      console.log('Form data:', formData);
      
      const response = await fetch('/api/cms/content/impot-sur-le-revenu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          section: editingSection,
          data: formData
        }),
      });

      const responseData = await response.json();
      console.log('Save response:', responseData);

      if (response.ok) {
        await loadSections();
        setEditingSection(null);
        setFormData({});
        
        // Trigger content update event for all clients
        window.dispatchEvent(new CustomEvent('contentUpdated'));
        
        // Also trigger a global event that can be caught by other tabs
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('cms_content_updated', Date.now().toString());
        }
        
        alert('Contenu impôt sur le revenu sauvegardé avec succès! Tous les visiteurs verront la mise à jour IMMÉDIATEMENT.');
        
        // Show visual feedback
        const saveButton = document.getElementById('save-button');
        if (saveButton) {
          saveButton.style.backgroundColor = '#10B981';
          saveButton.textContent = '✓ Sauvegardé!';
          setTimeout(() => {
            saveButton.style.backgroundColor = '';
            saveButton.textContent = 'Sauvegarder';
          }, 2000);
        }
        
        // Test if content is actually saved and force reload
        setTimeout(async () => {
          try {
            // Force reload from server
            const reloadResponse = await fetch('/api/pages/impot-sur-le-revenu/reload', {
              method: 'POST'
            });
            const reloadData = await reloadResponse.json();
            console.log('Force reload response:', reloadData);
            
            // Also test normal API
            const testResponse = await fetch('/api/pages/impot-sur-le-revenu');
            const testData = await testResponse.json();
            console.log('Impôt content after save:', testData);
            
            alert(`Contenu impôt sauvegardé!\n\nSections chargées: ${reloadData.sectionsCount}\nTimestamp: ${new Date(reloadData.timestamp).toLocaleTimeString()}`);
          } catch (error) {
            console.error('Error testing reload:', error);
          }
        }, 1000);
        
      } else {
        alert('Erreur lors de la sauvegarde: ' + (responseData.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error saving impot content:', error);
      alert('Erreur lors de la sauvegarde: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setEditingSection(null);
    setFormData({});
  };

  const handleInputChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (loading) {
      return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement du CMS Impôt sur le revenu...</p>
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
                ← Retour au Dashboard
              </button>
              <h1 className="text-2xl font-bold text-gray-900">CMS Impôt sur le revenu</h1>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={loadSections}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
              >
                Recharger CMS
              </button>
            <button
                onClick={() => window.open('http://localhost:4028/fiscalite/impot-sur-le-revenu', '_blank')}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
              >
                Voir la Page
            </button>
          </div>
            </div>
          </div>
        </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex justify-between items-start mb-4">
            <div>
                  <h3 className="text-lg font-semibold text-gray-900">{section.name}</h3>
                  <p className="text-sm text-gray-600">{section.description}</p>
              </div>
                <div className="flex space-x-2">
                  {!editingSection && (
                    <button
                      onClick={() => handleEdit(section)}
                      className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                    >
                      Modifier
                    </button>
                  )}
          </div>
        </div>

              {editingSection === section.id ? (
                <div className="space-y-4">
                  <div className="grid gap-4">
                    {section.fields.map((field) => (
                      <div key={field.key}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {field.label}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            value={formData[field.key] || ''}
                            onChange={(e) => handleInputChange(field.key, e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={field.key.includes('JSON') ? 6 : 3}
                            placeholder={`Entrez ${field.label.toLowerCase()}...`}
                          />
                        ) : (
                          <input
                            type="text"
                            value={formData[field.key] || ''}
                            onChange={(e) => handleInputChange(field.key, e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={`Entrez ${field.label.toLowerCase()}...`}
                          />
                        )}
          </div>
                    ))}
        </div>

                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 text-sm"
                    >
                      Annuler
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      id="save-button"
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 text-sm"
                    >
                      {saving ? 'Sauvegarde...' : 'Sauvegarder'}
                    </button>
                </div>
              </div>
              ) : (
                <div className="space-y-4">
                  {/* Status indicators */}
                  <div className="flex gap-2 text-xs">
                    {section.hasCurrentContent && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                        Contenu actuel affiché
                      </span>
                    )}
                    {section.hasCmsContent && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                        Sauvegardé dans CMS
                      </span>
                    )}
                    {!section.hasCurrentContent && !section.hasCmsContent && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded">
                        Aucun contenu
                      </span>
                    )}
            </div>

                  {/* Current content display */}
                  {section.hasCurrentContent ? (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-3">Contenu actuellement affiché :</h4>
                      <div className="space-y-2">
                        {Object.entries(section.currentData).map(([key, value]) => (
                          <div key={key} className="text-sm">
                            <span className="font-medium text-gray-700">{key}:</span>
                            <div className="text-gray-600 mt-1">
                              {typeof value === 'object' ? (
                                <pre className="whitespace-pre-wrap text-xs bg-white p-2 rounded border">
                                  {JSON.stringify(value, null, 2)}
                                </pre>
                              ) : (
                                <span>{String(value).substring(0, 200)}
                                {String(value).length > 200 && '...'}</span>
                              )}
                </div>
              </div>
                        ))}
              </div>
            </div>
                  ) : (
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="text-yellow-800 text-sm">
                        ⚠️ Cette section utilise le contenu par défaut. Cliquez sur "Modifier" pour personnaliser le contenu.
                      </p>
                </div>
                  )}
                </div>
              )}
              </div>
          ))}
            </div>
      </div>
    </div>
  );
}
