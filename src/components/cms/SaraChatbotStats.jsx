"use client";
import { useState, useEffect } from 'react';

export default function SaraChatbotStats() {
  const [stats, setStats] = useState({
    totalSessions: 0,
    completedSessions: 0,
    activeSessions: 0,
    totalLeads: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/sara/cms/sessions');
      const data = await response.json();
      
      if (data.sessions) {
        const sessions = data.sessions;
        setStats({
          totalSessions: sessions.length,
          completedSessions: sessions.filter(s => s.status === 'completed').length,
          activeSessions: sessions.filter(s => s.status === 'active').length,
          totalLeads: sessions.filter(s => s.nom && s.prenom).length
        });
      }
    } catch (error) {
      console.error('Error fetching SARA stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 Statistiques SARA</h3>
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          <div className="h-6 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">📊 Statistiques SARA</h3>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
          <span className="text-gray-600 font-medium">Sessions totales</span>
          <span className="font-bold text-gray-900 text-xl">{stats.totalSessions}</span>
        </div>
        <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-200">
          <span className="text-gray-600 font-medium">Sessions complétées</span>
          <span className="font-bold text-green-600 text-xl">{stats.completedSessions}</span>
        </div>
        <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl border border-blue-200">
          <span className="text-gray-600 font-medium">Sessions actives</span>
          <span className="font-bold text-blue-600 text-xl">{stats.activeSessions}</span>
        </div>
        <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl border border-purple-200">
          <span className="text-gray-600 font-medium">Leads qualifiés</span>
          <span className="font-bold text-purple-600 text-xl">{stats.totalLeads}</span>
        </div>
        
        {stats.totalSessions > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-200">
              <span className="text-gray-600 font-medium">Taux de conversion</span>
              <span className="font-bold text-indigo-600 text-xl">
                {((stats.completedSessions / stats.totalSessions) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
