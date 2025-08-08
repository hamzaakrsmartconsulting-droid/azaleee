"use client";
import React, { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'sarahChatbotData';

export default function ChatbotCMS() {
  const [chatbotData, setChatbotData] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    loadChatbotData();
  }, []);

  const loadChatbotData = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          // Convert to array if it's a single object
          const dataArray = Array.isArray(parsed) ? parsed : [parsed];
          setChatbotData(dataArray);
        } catch (error) {
          console.error('Error loading chatbot data:', error);
        }
      }
    }
  };

  const deleteConversation = (index) => {
    const updatedData = chatbotData.filter((_, i) => i !== index);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData));
    }
    setChatbotData(updatedData);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
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
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-[#112033] mb-2">Total Conversations</h3>
          <p className="text-3xl font-bold text-[#4EBBBD]">{chatbotData.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-[#112033] mb-2">Rendez-vous demandés</h3>
          <p className="text-3xl font-bold text-[#4EBBBD]">
            {chatbotData.filter(data => data.selectedIntentions?.includes('rdv')).length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-[#112033] mb-2">Rappels demandés</h3>
          <p className="text-3xl font-bold text-[#4EBBBD]">
            {chatbotData.filter(data => data.selectedIntentions?.includes('rappel')).length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-[#112033] mb-2">PDFs demandés</h3>
          <p className="text-3xl font-bold text-[#4EBBBD]">
            {chatbotData.filter(data => data.selectedIntentions?.includes('pdf')).length}
          </p>
        </div>
      </div>

      {/* Conversations List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Conversations récentes</h2>
        {chatbotData.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>Aucune conversation collectée pour le moment.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {chatbotData.map((conversation, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-[#112033]">
                      Conversation #{index + 1}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {conversation.conversationHistory?.length || 0} messages
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
                {conversation.userProfile && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                    {conversation.userProfile.age && (
                      <div>
                        <span className="text-sm font-medium text-gray-600">Âge:</span>
                        <span className="ml-2 text-sm">{conversation.userProfile.age}</span>
                      </div>
                    )}
                    {conversation.userProfile.situationMatrimoniale && (
                      <div>
                        <span className="text-sm font-medium text-gray-600">Situation:</span>
                        <span className="ml-2 text-sm">{conversation.userProfile.situationMatrimoniale}</span>
                      </div>
                    )}
                    {conversation.userProfile.situationProfessionnelle && (
                      <div>
                        <span className="text-sm font-medium text-gray-600">Profession:</span>
                        <span className="ml-2 text-sm">{conversation.userProfile.situationProfessionnelle}</span>
                      </div>
                    )}
                    {conversation.userProfile.tmi && (
                      <div>
                        <span className="text-sm font-medium text-gray-600">TMI:</span>
                        <span className="ml-2 text-sm">{conversation.userProfile.tmi}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Selected Intentions */}
                {conversation.selectedIntentions && conversation.selectedIntentions.length > 0 && (
                  <div className="mb-3">
                    <span className="text-sm font-medium text-gray-600">Intentions:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {conversation.selectedIntentions.map((intention, i) => (
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
                    <h4 className="font-semibold text-[#112033] mb-3">Historique de la conversation</h4>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {conversation.conversationHistory?.map((message, msgIndex) => (
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
                )}
              </div>
            ))}
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