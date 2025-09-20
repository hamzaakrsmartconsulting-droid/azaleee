"use client";
import { useState, useEffect } from 'react';

export default function ChatbotDataManagement() {
  const [sessions, setSessions] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSession, setSelectedSession] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [activeTab, setActiveTab] = useState('sessions');

  // Fetch chatbot sessions
  const fetchSessions = async () => {
    try {
      const response = await fetch('/api/chatbot/sessions');
      const data = await response.json();
      if (data.success) {
        setSessions(data.data);
      }
    } catch (error) {
      console.error('Error fetching sessions:', error);
    }
  };

  // Fetch user profiles
  const fetchProfiles = async () => {
    try {
      const response = await fetch('/api/chatbot/profiles');
      const data = await response.json();
      if (data.success) {
        setProfiles(data.data);
      }
    } catch (error) {
      console.error('Error fetching profiles:', error);
    }
  };

  // Fetch conversation history for a session
  const fetchConversations = async (sessionId) => {
    try {
      const response = await fetch(`/api/chatbot/conversations?sessionId=${sessionId}`);
      const data = await response.json();
      if (data.success) {
        setConversations(data.data);
      }
    } catch (error) {
      console.error('Error fetching conversations:', error);
    }
  };

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchSessions(), fetchProfiles()]);
      setLoading(false);
    };
    loadData();
  }, []);

  // Handle session selection
  const handleSessionSelect = (session) => {
    setSelectedSession(session);
    fetchConversations(session.session_id);
  };

  // Delete session
  const deleteSession = async (sessionId) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette session ?')) {
      try {
        const response = await fetch(`/api/chatbot/sessions?sessionId=${sessionId}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          fetchSessions();
          fetchProfiles();
          if (selectedSession?.session_id === sessionId) {
            setSelectedSession(null);
            setConversations([]);
          }
        }
      } catch (error) {
        console.error('Error deleting session:', error);
      }
    }
  };

  // Update session status
  const updateSessionStatus = async (sessionId, status) => {
    try {
      const response = await fetch('/api/chatbot/sessions', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          status,
          completedAt: status === 'completed' ? new Date().toISOString() : null
        })
      });
      if (response.ok) {
        fetchSessions();
      }
    } catch (error) {
      console.error('Error updating session status:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Chargement des données du chatbot...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Gestion des Données du Chatbot SARA
        </h1>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('sessions')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'sessions'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Sessions ({sessions.length})
              </button>
              <button
                onClick={() => setActiveTab('profiles')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'profiles'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Profils Utilisateurs ({profiles.length})
              </button>
            </nav>
          </div>
        </div>

        {/* Sessions Tab */}
        {activeTab === 'sessions' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sessions List */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Sessions du Chatbot</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {sessions.map((session) => (
                    <div
                      key={session.session_id}
                      className={`p-6 cursor-pointer hover:bg-gray-50 ${
                        selectedSession?.session_id === session.session_id ? 'bg-blue-50' : ''
                      }`}
                      onClick={() => handleSessionSelect(session)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-medium text-gray-900">
                              {session.prenom} {session.nom}
                            </span>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              session.status === 'completed' ? 'bg-green-100 text-green-800' :
                              session.status === 'active' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {session.status}
                            </span>
                          </div>
                          <div className="mt-1 text-sm text-gray-500">
                            {session.intention && `Intention: ${session.intention}`}
                          </div>
                          <div className="mt-1 text-sm text-gray-500">
                            Créé le: {new Date(session.session_created_at).toLocaleString()}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <select
                            value={session.status}
                            onChange={(e) => updateSessionStatus(session.session_id, e.target.value)}
                            className="text-sm border border-gray-300 rounded px-2 py-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <option value="active">Actif</option>
                            <option value="completed">Terminé</option>
                            <option value="abandoned">Abandonné</option>
                          </select>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteSession(session.session_id);
                            }}
                            className="text-red-600 hover:text-red-800 text-sm"
                          >
                            Supprimer
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Session Details */}
            <div className="lg:col-span-1">
              {selectedSession ? (
                <div className="bg-white shadow rounded-lg">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Détails de la Session</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Nom</label>
                        <p className="mt-1 text-sm text-gray-900">{selectedSession.nom || 'Non renseigné'}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Prénom</label>
                        <p className="mt-1 text-sm text-gray-900">{selectedSession.prenom || 'Non renseigné'}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Âge</label>
                        <p className="mt-1 text-sm text-gray-900">{selectedSession.age || 'Non renseigné'}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Situation Matrimoniale</label>
                        <p className="mt-1 text-sm text-gray-900">{selectedSession.situation_matrimoniale || 'Non renseigné'}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Enfants</label>
                        <p className="mt-1 text-sm text-gray-900">{selectedSession.enfants || 'Non renseigné'}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Situation Professionnelle</label>
                        <p className="mt-1 text-sm text-gray-900">{selectedSession.situation_professionnelle || 'Non renseigné'}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">TMI</label>
                        <p className="mt-1 text-sm text-gray-900">{selectedSession.tmi || 'Non renseigné'}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Placements Actuels</label>
                        <p className="mt-1 text-sm text-gray-900">{selectedSession.placements_actuels || 'Non renseigné'}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Budget Projet</label>
                        <p className="mt-1 text-sm text-gray-900">{selectedSession.budget_projet || 'Non renseigné'}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Intention</label>
                        <p className="mt-1 text-sm text-gray-900">{selectedSession.intention || 'Non renseigné'}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <p className="mt-1 text-sm text-gray-900">{selectedSession.email || 'Non renseigné'}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                        <p className="mt-1 text-sm text-gray-900">{selectedSession.telephone || 'Non renseigné'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white shadow rounded-lg p-6 text-center text-gray-500">
                  Sélectionnez une session pour voir les détails
                </div>
              )}
            </div>
          </div>
        )}

        {/* Profiles Tab */}
        {activeTab === 'profiles' && (
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Profils Utilisateurs</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nom/Prénom
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Âge
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Situation
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Intention
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {profiles.map((profile) => (
                    <tr key={profile.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {profile.prenom} {profile.nom}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {profile.age || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {profile.situation_matrimoniale || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {profile.intention || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {profile.email || profile.telephone || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(profile.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Conversation History */}
        {selectedSession && conversations.length > 0 && (
          <div className="mt-6 bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Historique de la Conversation</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {conversations.map((conversation, index) => (
                  <div
                    key={index}
                    className={`flex ${conversation.message_type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        conversation.message_type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{conversation.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {new Date(conversation.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}