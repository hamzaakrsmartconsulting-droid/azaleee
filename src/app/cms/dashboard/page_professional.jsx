"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SaraChatbotStats from "../../../components/cms/SaraChatbotStats";
import { 
  ChartBarIcon, 
  DocumentTextIcon, 
  UsersIcon, 
  ChatBubbleLeftRightIcon,
  HomeIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CogIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

export default function ProfessionalCMSDashboard() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalPages: 25,
    activeUsers: 12,
    totalContent: 156,
    lastUpdate: new Date()
  });
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Chargement du tableau de bord...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Professionnel */}
      <header className="bg-white shadow-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              {/* Logo Azalee Professionnel */}
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <div className="text-white font-bold text-2xl">A</div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircleIcon className="w-4 h-4 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Azalee Wealth CMS
                </h1>
                <p className="text-sm text-gray-600 font-medium">Gestion de Patrimoine Professionnel</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">Bonjour, {user.name}</p>
                <p className="text-xs text-gray-500 flex items-center">
                  <ClockIcon className="w-3 h-3 mr-1" />
                  Dernière connexion: {new Date().toLocaleDateString('fr-FR')}
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">{user.name.charAt(0).toUpperCase()}</span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium flex items-center gap-2"
              >
                <CogIcon className="w-4 h-4" />
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section Professionnelle */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-8 mb-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-3">
                Tableau de Bord Professionnel
              </h2>
              <p className="text-xl opacity-90 mb-6">
                Bienvenue dans l'interface d'administration d'Azalee Wealth
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm font-medium">Système opérationnel</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Version 2.0</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Interface moderne</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <ChartBarIcon className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques Professionnelles */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pages Total</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalPages}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <ArrowRightIcon className="w-3 h-3 mr-1" />
                  +2 cette semaine
                </p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <DocumentTextIcon className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Utilisateurs Actifs</p>
                <p className="text-3xl font-bold text-gray-900">{stats.activeUsers}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <ArrowRightIcon className="w-3 h-3 mr-1" />
                  +3 ce mois
                </p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <UsersIcon className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Contenu Total</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalContent}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <ArrowRightIcon className="w-3 h-3 mr-1" />
                  +12 cette semaine
                </p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <ChartBarIcon className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>

          <div 
            className="bg-white rounded-2xl shadow-xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200"
            onClick={() => router.push('/cms/chatbot')}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">SARA Chatbot</p>
                <p className="text-3xl font-bold text-gray-900">24/7</p>
                <p className="text-sm text-indigo-600 flex items-center mt-1">
                  <ArrowRightIcon className="w-3 h-3 mr-1" />
                  Actif
                </p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <ChatBubbleLeftRightIcon className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Sections Principales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* SARA Chatbot Management */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">🤖 SARA Chatbot</h3>
                <p className="text-gray-600">Assistant IA Professionnel</p>
              </div>
            </div>
            <div className="space-y-4">
              <button 
                onClick={() => router.push('/cms/chatbot')}
                className="w-full text-left p-6 border-2 border-gray-200 rounded-2xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Gestion des Conversations</div>
                    <div className="text-gray-600">Sessions, leads et analytics</div>
                  </div>
                </div>
              </button>
              
              <div className="mt-6 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200">
                <div className="flex items-center text-sm text-indigo-700 mb-4">
                  <InformationCircleIcon className="w-5 h-5 mr-2" />
                  <span className="font-bold">Fonctionnalités Avancées :</span>
                </div>
                <ul className="text-sm text-indigo-600 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                    Suivi des conversations en temps réel
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                    Gestion des leads qualifiés
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                    Analytics et statistiques avancées
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                    Export des données professionnel
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SARA Statistics */}
          <SaraChatbotStats />

          {/* Pages Management */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:col-span-1 border border-gray-100 hover:shadow-3xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <DocumentTextIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Gestion des Pages</h3>
                <p className="text-gray-600">Contenu Principal</p>
              </div>
            </div>
            <div className="space-y-4">
              <button 
                onClick={() => router.push('/cms/homepage')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <HomeIcon className="w-5 h-5 text-orange-500 mr-3" />
                  <div>
                    <div className="font-bold text-gray-900">Page d'accueil</div>
                    <div className="text-sm text-gray-600">Modifier le contenu principal</div>
                  </div>
                </div>
              </button>
              
              <button 
                onClick={() => router.push('/cms/fiscalite')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <CurrencyDollarIcon className="w-5 h-5 text-orange-500 mr-3" />
                  <div>
                    <div className="font-bold text-gray-900">Fiscalité</div>
                    <div className="text-sm text-gray-600">Gérer les sections fiscales</div>
                  </div>
                </div>
              </button>
              
              <button 
                onClick={() => router.push('/cms/placements/cms')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <ChartBarIcon className="w-5 h-5 text-orange-500 mr-3" />
                  <div>
                    <div className="font-bold text-gray-900">Placements</div>
                    <div className="text-sm text-gray-600">Gérer les placements financiers</div>
                  </div>
                </div>
              </button>
              
              <button 
                onClick={() => router.push('/cms/patrimoine/cms')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <BuildingOfficeIcon className="w-5 h-5 text-orange-500 mr-3" />
                  <div>
                    <div className="font-bold text-gray-900">Patrimoine</div>
                    <div className="text-sm text-gray-600">Gérer le patrimoine et transmission</div>
                  </div>
                </div>
              </button>
              
              <button 
                onClick={() => router.push('/cms/immobilier/cms')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <BuildingOfficeIcon className="w-5 h-5 text-orange-500 mr-3" />
                  <div>
                    <div className="font-bold text-gray-900">Immobilier</div>
                    <div className="text-sm text-gray-600">Gérer toutes les pages immobilier</div>
                  </div>
                </div>
              </button>
              
              <button 
                onClick={() => router.push('/cms/retraite/cms')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <ClockIcon className="w-5 h-5 text-orange-500 mr-3" />
                  <div>
                    <div className="font-bold text-gray-900">Retraite</div>
                    <div className="text-sm text-gray-600">Gérer toutes les pages retraite</div>
                  </div>
                </div>
              </button>
              
              <button 
                onClick={() => router.push('/cms/outils/cms')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <CogIcon className="w-5 h-5 text-orange-500 mr-3" />
                  <div>
                    <div className="font-bold text-gray-900">Outils</div>
                    <div className="text-sm text-gray-600">Gérer tous les outils financiers</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Fiscalité Spécialisée */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:col-span-2 border border-gray-100 hover:shadow-3xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <CurrencyDollarIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Pages Fiscalité Spécialisées</h3>
                <p className="text-gray-600">Gestion Avancée de la Fiscalité</p>
              </div>
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
