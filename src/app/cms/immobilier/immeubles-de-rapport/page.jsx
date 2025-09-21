"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CMSImmeublesDeRapport() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState({
    title: "Immeubles de Rapport",
    subtitle: "Investissement immobilier locatif rentable",
    description: "L'investissement dans des immeubles de rapport consiste à acquérir un bâtiment entier ou plusieurs logements pour les louer. Cette stratégie permet de diversifier les risques locatifs et d'optimiser la rentabilité de l'investissement.",
    advantages: "• Diversification des risques locatifs\n• Gestion centralisée des biens\n• Possibilité de travaux d'amélioration\n• Optimisation fiscale\n• Revenus locatifs réguliers",
    fiscalBenefits: "• Déduction des intérêts d'emprunt\n• Amortissement des travaux\n• Déficit foncier possible\n• Optimisation avec SCI\n• Possibilité de LMNP",
    requirements: "• Budget d'acquisition important\n• Capacité de gestion locative\n• Respect des réglementations\n• Maintenance des biens",
    status: "published",
    order: 6,
    showInMenu: true,
    metaTitle: "Immeubles de Rapport - Investissement locatif | Azalée Patrimoine",
    metaDescription: "Investissement dans les immeubles de rapport. Stratégies, rentabilité et conseils d'experts pour optimiser votre investissement locatif avec Azalée Patrimoine."
  });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("cms_token");
    const userData = localStorage.getItem("cms_user");

    if (!token || !userData) {
      router.push("/cms/login");
      return;
    }

    try {
      setUser(JSON.parse(userData));
    } catch (error) {
      console.error("Error parsing user data:", error);
      router.push("/cms/login");
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  const handleSave = () => {
    alert("Contenu Immeubles de Rapport sauvegardé avec succès !");
  };

  const handlePreview = () => {
    window.open('/immobilier/immeubles-de-rapport', '_blank');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#4EBBBD]"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <button
                onClick={() => router.push('/cms/immobilier')}
                className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Immeubles de Rapport</h1>
                <p className="text-sm text-gray-600 font-medium">Gestion du contenu</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Bonjour, {user.name}</p>
                <p className="text-xs text-gray-500">Administrateur</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-[#253F60] to-[#4EBBBD] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">{user.name.charAt(0).toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Immeubles de Rapport
              </h2>
              <p className="text-lg opacity-90">
                Investissement immobilier locatif rentable
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Content Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Text Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contenu Textuel</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titre Principal
                </label>
                <input
                  type="text"
                  value={content.title}
                  onChange={(e) => setContent({...content, title: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sous-titre
                </label>
                <input
                  type="text"
                  value={content.subtitle}
                  onChange={(e) => setContent({...content, subtitle: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  rows={6}
                  value={content.description}
                  onChange={(e) => setContent({...content, description: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Avantages Principaux
                </label>
                <textarea
                  rows={4}
                  value={content.advantages}
                  onChange={(e) => setContent({...content, advantages: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Avantages Fiscaux
                </label>
                <textarea
                  rows={4}
                  value={content.fiscalBenefits}
                  onChange={(e) => setContent({...content, fiscalBenefits: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Conditions d'Éligibilité
                </label>
                <textarea
                  rows={4}
                  value={content.requirements}
                  onChange={(e) => setContent({...content, requirements: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={handleSave}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-6 rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 font-medium"
              >
                Sauvegarder les modifications
              </button>
            </div>
          </div>

          {/* Media & Settings */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Médias & Paramètres</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image Principale
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-yellow-400 transition-colors">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-600">Cliquez pour télécharger une image</p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Statut de la page
                </label>
                <select 
                  value={content.status}
                  onChange={(e) => setContent({...content, status: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="published">Publiée</option>
                  <option value="draft">Brouillon</option>
                  <option value="archived">Archivée</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ordre d'affichage
                </label>
                <input
                  type="number"
                  value={content.order}
                  onChange={(e) => setContent({...content, order: parseInt(e.target.value)})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={content.showInMenu}
                  onChange={(e) => setContent({...content, showInMenu: e.target.checked})}
                  className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Afficher dans le menu principal
                </label>
              </div>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={handlePreview}
                className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 px-6 rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-200 font-medium"
              >
                Prévisualiser la page
              </button>
            </div>
          </div>
        </div>

        {/* SEO Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Optimisation SEO</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meta Title
              </label>
              <input
                type="text"
                value={content.metaTitle}
                onChange={(e) => setContent({...content, metaTitle: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meta Description
              </label>
              <textarea
                rows={3}
                value={content.metaDescription}
                onChange={(e) => setContent({...content, metaDescription: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="mt-6">
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 font-medium">
              Optimiser le SEO
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
