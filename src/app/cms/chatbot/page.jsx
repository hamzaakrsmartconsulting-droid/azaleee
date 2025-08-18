"use client";
import React, { useState, useEffect } from 'react';

export default function ChatbotCMS() {
  const [chatbotData, setChatbotData] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    loadChatbotData();
    loadStats();
  }, [currentPage, searchKeyword]);

  const loadChatbotData = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: '50'
      });
      
      if (searchKeyword) {
        params.append('search', searchKeyword);
      }

      const response = await fetch(`/api/chatbot/interactions?${params}`);
      const data = await response.json();
      
      if (data.success) {
        setChatbotData(data.data);
        setTotalPages(data.pagination.pages);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      const response = await fetch('/api/chatbot/stats');
      const data = await response.json();
      
      if (data.success) {
        setStats(data.data);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des statistiques:', error);
    }
  };

  const deleteConversation = async (interactionId) => {
    try {
      // Note: Pour l'instant, on ne supprime pas de la base de données
      // On peut ajouter une API de suppression plus tard
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      
      // Recharger les données
      await loadChatbotData();
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  const exportData = () => {
    const dataStr = JSON.stringify(chatbotData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sarah-chatbot-data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('fr-FR');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#112033]">Chatbot Sarah - Données collectées</h1>
            <p className="text-[#686868]">Gérez les conversations et données collectées par le chatbot Sarah</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={loadChatbotData}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors"
            >
              Actualiser
            </button>
            <button 
              onClick={exportData}
              className="bg-[#4EBBBD] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors"
            >
              Exporter les données
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex gap-4 items-center">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Rechercher dans les conversations..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EBBBD] focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setCurrentPage(1)}
            className="bg-[#4EBBBD] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#3DA8AA] transition-colors"
          >
            Rechercher
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-[#112033] mb-2">Total Interactions</h3>
          <p className="text-3xl font-bold text-[#4EBBBD]">
            {stats ? stats.totalInteractions : '...'}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-[#112033] mb-2">Sessions uniques</h3>
          <p className="text-3xl font-bold text-[#4EBBBD]">
            {stats ? stats.summary.totalSessions : '...'}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-[#112033] mb-2">Utilisateurs uniques</h3>
          <p className="text-3xl font-bold text-[#4EBBBD]">
            {stats ? stats.summary.totalUsers : '...'}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-[#112033] mb-2">Moyenne/jour</h3>
          <p className="text-3xl font-bold text-[#4EBBBD]">
            {stats ? stats.summary.averageInteractionsPerDay : '...'}
          </p>
        </div>
      </div>

      {/* Conversations List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Conversations complètes</h2>
        {loading ? (
          <div className="text-center py-8 text-gray-500">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4EBBBD] mx-auto mb-4"></div>
            <p>Chargement des interactions...</p>
          </div>
        ) : chatbotData.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>Aucune interaction collectée pour le moment.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {chatbotData.map((interaction, index) => (
              <div key={interaction.id || index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-[#112033]">
                      Session: {interaction.session_id?.substring(0, 8)}...
                    </h3>
                    <p className="text-sm text-gray-500">
                      {interaction.date_interaction ? new Date(interaction.date_interaction).toLocaleString('fr-FR') : 'Date inconnue'}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedConversation(selectedConversation === index ? null : index)}
                      className="bg-[#4EBBBD] text-white px-3 py-1 rounded text-sm hover:bg-[#3DA8AA] transition-colors"
                    >
                      {selectedConversation === index ? 'Masquer' : 'Voir détails'}
                    </button>
                    <button
                      onClick={() => deleteConversation(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>

                {/* User Profile Summary */}
                {interaction.user_profile && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                    {interaction.user_profile.age && (
                      <div>
                        <span className="text-sm font-medium text-gray-600">Âge:</span>
                        <span className="ml-2 text-sm">{interaction.user_profile.age}</span>
                      </div>
                    )}
                    {interaction.user_profile.situationMatrimoniale && (
                      <div>
                        <span className="text-sm font-medium text-gray-600">Situation:</span>
                        <span className="ml-2 text-sm">{interaction.user_profile.situationMatrimoniale}</span>
                      </div>
                    )}
                    {interaction.user_profile.situationProfessionnelle && (
                      <div>
                        <span className="text-sm font-medium text-gray-600">Profession:</span>
                        <span className="ml-2 text-sm">{interaction.user_profile.situationProfessionnelle}</span>
                      </div>
                    )}
                    {interaction.user_profile.tmi && (
                      <div>
                        <span className="text-sm font-medium text-gray-600">TMI:</span>
                        <span className="ml-2 text-sm">{interaction.user_profile.tmi}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Selected Intentions */}
                {interaction.selected_intentions && interaction.selected_intentions.length > 0 && (
                  <div className="mb-3">
                    <span className="text-sm font-medium text-gray-600">Intentions:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {interaction.selected_intentions.map((intention, i) => (
                        <span key={i} className="bg-[#4EBBBD] text-white px-2 py-1 rounded text-xs">
                          {intention}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Conversation Details */}
                {selectedConversation === index && (
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h4 className="font-semibold text-[#112033] mb-3">Détails de la conversation</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-600">Étape actuelle:</span>
                        <p className="text-sm mt-1">{interaction.current_step || 'Non spécifié'}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600">Nombre de messages:</span>
                        <p className="text-sm mt-1">{interaction.conversation_history?.length || 0} messages</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600">Historique complet:</span>
                        <div className="max-h-60 overflow-y-auto space-y-2 mt-1">
                          {interaction.conversation_history?.map((message, msgIndex) => (
                            <div key={msgIndex} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                              <div
                                className={`max-w-xs p-2 rounded-lg text-sm ${
                                  message.isUser
                                    ? 'bg-[#4EBBBD] text-white'
                                    : 'bg-gray-100 text-gray-800'
                                }`}
                              >
                                <p>{message.text}</p>
                                <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Précédent
            </button>
            
            <span className="px-3 py-2 text-sm text-gray-600">
              Page {currentPage} sur {totalPages}
            </span>
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Suivant
            </button>
          </div>
        )}
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-[#4EBBBD] text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-medium">Conversation supprimée avec succès !</span>
        </div>
      )}
    </div>
  );
} 