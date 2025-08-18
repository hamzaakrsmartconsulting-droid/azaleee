"use client";

import React, { useState, useEffect } from 'react';

export default function DatabaseAdmin() {
  const [dbStatus, setDbStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const testDatabase = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/database/test');
      const data = await response.json();
      
      if (data.success) {
        setDbStatus(data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Erreur lors du test de la base de données');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Tester automatiquement au chargement de la page
    testDatabase();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Administration de la Base de Données
          </h1>

          {/* Statut de la base de données */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Statut de la Base de Données
            </h2>
            
            <div className="bg-gray-50 rounded-lg p-4">
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                  <span className="text-gray-600">Test de connexion en cours...</span>
                </div>
              ) : dbStatus ? (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${dbStatus.success ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="font-medium">
                      {dbStatus.success ? 'Connecté' : 'Déconnecté'}
                    </span>
                  </div>
                  <p className="text-gray-700">{dbStatus.message}</p>
                  {dbStatus.database && (
                    <p className="text-sm text-gray-600">
                      Base de données: <span className="font-mono">{dbStatus.database}</span>
                    </p>
                  )}
                </div>
              ) : error ? (
                <div className="text-red-600">
                  <p className="font-medium">Erreur:</p>
                  <p>{error}</p>
                </div>
              ) : null}
            </div>

            <button
              onClick={testDatabase}
              disabled={loading}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Test en cours...' : 'Tester la connexion'}
            </button>
          </div>

          {/* Instructions XAMPP */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Configuration XAMPP
            </h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-medium text-blue-900 mb-2">Étapes pour démarrer MySQL :</h3>
              <ol className="list-decimal list-inside space-y-1 text-blue-800 text-sm">
                <li>Ouvrir XAMPP Control Panel</li>
                <li>Démarrer le service Apache</li>
                <li>Démarrer le service MySQL</li>
                <li>Vérifier que les deux services sont en vert</li>
                <li>Ouvrir phpMyAdmin (http://localhost/phpmyadmin)</li>
                <li>Exécuter le script SQL d'initialisation</li>
              </ol>
            </div>
          </div>

          {/* Script SQL */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Script SQL d'Initialisation
            </h2>
            
            <div className="bg-gray-900 rounded-lg p-4">
              <p className="text-gray-300 text-sm mb-2">
                Copiez ce script dans phpMyAdmin pour créer la base de données :
              </p>
              <code className="text-green-400 text-xs block">
                {`-- Créer la base de données
CREATE DATABASE IF NOT EXISTS azalee_patrimoine 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE azalee_patrimoine;

-- Voir le fichier database/init.sql pour le script complet`}
              </code>
            </div>
            
            <p className="text-sm text-gray-600 mt-2">
              Le script complet se trouve dans <code className="bg-gray-100 px-1 rounded">database/init.sql</code>
            </p>
          </div>

          {/* Variables d'environnement */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Variables d'Environnement
            </h2>
            
            <div className="bg-gray-900 rounded-lg p-4">
              <p className="text-gray-300 text-sm mb-2">
                Créez un fichier <code className="text-green-400">.env.local</code> avec :
              </p>
              <code className="text-green-400 text-xs block">
                {`DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=azalee_patrimoine
DB_PORT=3306`}
              </code>
            </div>
          </div>

          {/* Actions */}
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Actions Rapides
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => window.open('http://localhost/phpmyadmin', '_blank')}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Ouvrir phpMyAdmin
              </button>
              
              <button
                onClick={() => window.open('http://localhost:4028', '_blank')}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Ouvrir l'Application
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <button
                onClick={() => window.open('/api/database/check-structure', '_blank')}
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 w-full"
              >
                Vérifier la structure de la table chatbot
              </button>
              
              <button
                onClick={() => window.open('/api/database/test', '_blank')}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 w-full"
              >
                Tester la connexion
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
