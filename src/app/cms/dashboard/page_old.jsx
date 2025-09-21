"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SaraChatbotStats from "../../../components/cms/SaraChatbotStats";

export default function CMSDashboard() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
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

  const handleLogout = () => {
    localStorage.removeItem("cms_token");
    localStorage.removeItem("cms_user");
    router.push("/cms/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
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
              <div className="w-12 h-12 bg-gradient-to-r from-[#253F60] to-[#4EBBBD] rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Azalée CMS</h1>
                <p className="text-sm text-gray-600 font-medium">Gestion de Patrimoine</p>
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
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[#253F60] to-[#4EBBBD] rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Tableau de bord CMS
              </h2>
              <p className="text-lg opacity-90">
                Bienvenue dans l'interface d'administration d'Azalée Patrimoine
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm">Système opérationnel</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-sm">Dernière connexion: {new Date().toLocaleDateString('fr-FR')}</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">Pages</h3>
                <p className="text-gray-600 text-sm">Gérer le contenu des pages</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">Contenu</h3>
                <p className="text-gray-600 text-sm">Éditer les sections</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">Utilisateurs</h3>
                <p className="text-gray-600 text-sm">Gérer les accès</p>
              </div>
            </div>
          </div>

          <div 
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300"
            onClick={() => router.push('/cms/chatbot')}
          >
            <div className="flex items-center">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">SARA Chatbot</h3>
                <p className="text-gray-600 text-sm">Gérer les conversations</p>
              </div>
            </div>
          </div>
        </div>

        {/* CMS Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* SARA Chatbot Management */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">🤖 SARA Chatbot</h3>
            </div>
            <div className="space-y-4">
              <button 
                onClick={() => router.push('/cms/chatbot')}
                className="w-full text-left p-6 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Gestion des Conversations</div>
                    <div className="text-gray-600">Sessions, leads et analytics</div>
                  </div>
                </div>
              </button>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                <div className="flex items-center text-sm text-blue-700 mb-3">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-bold">Fonctionnalités :</span>
                </div>
                <ul className="text-sm text-blue-600 space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Suivi des conversations en temps réel
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Gestion des leads qualifiés
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Analytics et statistiques
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Export des données
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SARA Statistics */}
          <SaraChatbotStats />

          {/* Pages Management */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:col-span-1 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Gestion des Pages</h3>
            </div>
            <div className="space-y-3">
              <button 
                onClick={() => router.push('/cms/homepage')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Page d'accueil</div>
                <div className="text-sm text-gray-600">Modifier le contenu principal</div>
              </button>
              <button 
                onClick={() => router.push('/cms/fiscalite')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Fiscalité</div>
                <div className="text-sm text-gray-600">Gérer les sections fiscales</div>
              </button>
              <button 
                onClick={() => router.push('/cms/placements/cms')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Placements</div>
                <div className="text-sm text-gray-600">Gérer les placements financiers</div>
              </button>
              <button 
                onClick={() => router.push('/cms/patrimoine/cms')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Patrimoine</div>
                <div className="text-sm text-gray-600">Gérer le patrimoine et transmission</div>
              </button>
              <button 
                onClick={() => router.push('/cms/immobilier/cms')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Immobilier</div>
                <div className="text-sm text-gray-600">Gérer toutes les pages immobilier</div>
              </button>
              <button 
                onClick={() => router.push('/cms/retraite/cms')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Retraite</div>
                <div className="text-sm text-gray-600">Gérer toutes les pages retraite</div>
              </button>
              <button 
                onClick={() => router.push('/cms/outils/cms')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Outils</div>
                <div className="text-sm text-gray-600">Gérer tous les outils financiers</div>
              </button>
            </div>
          </div>

          {/* Fiscalité Spécialisée */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:col-span-2 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Pages Fiscalité Spécialisées</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => router.push('/cms/fiscalite/impot-sur-le-revenu')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Impôt sur le revenu</div>
                <div className="text-sm text-gray-600">Gérer le contenu de l'IR</div>
              </button>
              <button 
                onClick={() => router.push('/cms/fiscalite/declaration-impots')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Déclaration d'impôts</div>
                <div className="text-sm text-gray-600">Gérer les déclarations</div>
              </button>
              <button 
                onClick={() => router.push('/cms/fiscalite/fiscalite-placements')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Fiscalité Placements</div>
                <div className="text-sm text-gray-600">Gérer la fiscalité des placements</div>
              </button>
              <button 
                onClick={() => router.push('/cms/fiscalite/pfu')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">PFU</div>
                <div className="text-sm text-gray-600">Gérer le Prélèvement Forfaitaire Unique</div>
              </button>
              <button 
                onClick={() => router.push('/cms/fiscalite/lois-fiscales')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Lois fiscales</div>
                <div className="text-sm text-gray-600">Gérer les lois fiscales</div>
              </button>
              <button 
                onClick={() => router.push('/cms/fiscalite/autre-fiscalite')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Autre fiscalité</div>
                <div className="text-sm text-gray-600">Gérer l'autre fiscalité</div>
              </button>
              <button 
                onClick={() => router.push('/cms/fiscalite/defiscalisation-cas-specifiques')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Défiscalisation - Cas spéciaux</div>
                <div className="text-sm text-gray-600">Gérer les cas spéciaux de défiscalisation</div>
              </button>
              <button 
                onClick={() => router.push('/cms/fiscalite/loi-cosse')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Loi Cosse</div>
                <div className="text-sm text-gray-600">Gérer la Loi Cosse</div>
              </button>
              <button 
                onClick={() => router.push('/cms/fiscalite/loi-denormandie')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Loi Denormandie</div>
                <div className="text-sm text-gray-600">Gérer la Loi Denormandie</div>
              </button>
              <button 
                onClick={() => router.push('/cms/fiscalite/loi-girardin')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Loi Girardin</div>
                <div className="text-sm text-gray-600">Gérer la Loi Girardin</div>
              </button>
              <button 
                onClick={() => router.push('/cms/fiscalite/loi-malraux')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Loi Malraux</div>
                <div className="text-sm text-gray-600">Gérer la Loi Malraux</div>
              </button>
              <button 
                onClick={() => router.push('/cms/fiscalite/loi-pinel')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Loi Pinel</div>
                <div className="text-sm text-gray-600">Gérer la Loi Pinel</div>
              </button>
              <button 
                onClick={() => router.push('/cms/fiscalite/monument-historique')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Monument Historique</div>
                <div className="text-sm text-gray-600">Gérer les monuments historiques</div>
              </button>
              <button 
                onClick={() => router.push('/cms/fiscalite/reductions-impot-deficit-foncier')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Réductions d'impôt</div>
                <div className="text-sm text-gray-600">Gérer les réductions d'impôt</div>
              </button>
              <button 
                onClick={() => router.push('/cms/fiscalite/tmi-prelevements-sociaux')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">TMI & Prélèvements Sociaux</div>
                <div className="text-sm text-gray-600">Gérer TMI et prélèvements sociaux</div>
              </button>
              <button 
                onClick={() => router.push('/cms/fiscalite/tranches-baremes-plafonds')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="font-bold text-gray-900">Tranches & Barèmes</div>
                <div className="text-sm text-gray-600">Gérer les tranches et barèmes</div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
