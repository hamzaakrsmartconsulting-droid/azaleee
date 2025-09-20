"use client";
import React, { useState, useEffect } from 'react';
import { ClientCMSMigration } from '../../../lib/utils/ClientCMSMigration';

export default function CMSMigrationPage() {
  const [migrationStatus, setMigrationStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [localStorageData, setLocalStorageData] = useState([]);

  useEffect(() => {
    checkLocalStorageData();
    checkMigrationStatus();
  }, []);

  const checkLocalStorageData = () => {
    const cmsKeys = Object.keys(localStorage).filter(key => 
      key.includes('PageContent') || key.includes('homepageContent')
    );
    
    const data = cmsKeys.map(key => {
      try {
        const content = JSON.parse(localStorage.getItem(key));
        return {
          key,
          hasData: true,
          size: localStorage.getItem(key).length,
          sections: Object.keys(content).length
        };
      } catch (error) {
        return {
          key,
          hasData: false,
          size: 0,
          sections: 0
        };
      }
    });

    setLocalStorageData(data);
  };

  const checkMigrationStatus = async () => {
    try {
      const status = await ClientCMSMigration.getMigrationStatus();
      setMigrationStatus(status);
    } catch (error) {
      console.error('Error checking migration status:', error);
    }
  };

  const runMigration = async () => {
    setIsLoading(true);
    try {
      const results = await ClientCMSMigration.migrateFromLocalStorage();
      alert(`Migration completed! ${results.length} pages processed.`);
      checkLocalStorageData();
      checkMigrationStatus();
    } catch (error) {
      alert(`Migration error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const clearLocalStorage = async () => {
    if (!confirm('Are you sure you want to clear all CMS data from localStorage? This action cannot be undone.')) {
      return;
    }

    try {
      const result = ClientCMSMigration.clearLocalStorageCMS();
      alert(`LocalStorage cleared! ${result.clearedKeys} keys removed.`);
      checkLocalStorageData();
    } catch (error) {
      alert(`Clear error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h1 className="text-2xl font-bold text-[#112033] mb-2">CMS Database Migration</h1>
        <p className="text-[#686868]">
          Migrate your CMS content from localStorage to MySQL database for centralized content management.
        </p>
      </div>

      {/* Migration Status */}
      {migrationStatus && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-[#112033] mb-4">Migration Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">{migrationStatus.totalPages}</div>
              <div className="text-sm text-blue-800">Total Pages in DB</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">{migrationStatus.migratedPages}</div>
              <div className="text-sm text-green-800">Migrated Pages</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600">
                {migrationStatus.migrationComplete ? '✅' : '❌'}
              </div>
              <div className="text-sm text-purple-800">Migration Complete</div>
            </div>
          </div>
        </div>
      )}

      {/* LocalStorage Data */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">LocalStorage Data</h2>
        {localStorageData.length > 0 ? (
          <div className="space-y-3">
            {localStorageData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-[#112033]">{item.key}</div>
                  <div className="text-sm text-[#686868]">
                    {item.hasData ? `${item.sections} sections, ${item.size} chars` : 'No data'}
                  </div>
                </div>
                <div className={`px-2 py-1 rounded text-xs ${
                  item.hasData ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                }`}>
                  {item.hasData ? 'Has Data' : 'Empty'}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-[#686868]">
            <div className="text-4xl mb-2">📭</div>
            <p>No CMS data found in localStorage</p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-[#112033] mb-4">Migration Actions</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <button
              onClick={runMigration}
              disabled={isLoading || localStorageData.length === 0}
              className="bg-[#4EBBBD] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3DA8AA] disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Migrating...' : 'Migrate to Database'}
            </button>
            <div className="text-sm text-[#686868]">
              Migrate all localStorage CMS data to MySQL database
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={clearLocalStorage}
              disabled={localStorageData.length === 0}
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Clear LocalStorage
            </button>
            <div className="text-sm text-[#686868]">
              Remove all CMS data from localStorage (after migration)
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
        <h2 className="text-lg font-semibold text-blue-800 mb-4">📋 Migration Instructions</h2>
        <div className="space-y-3 text-sm text-blue-700">
          <div className="flex items-start gap-2">
            <span className="font-bold">1.</span>
            <span>Click "Migrate to Database" to transfer all localStorage CMS data to MySQL</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-bold">2.</span>
            <span>Verify that all pages are working correctly with database content</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-bold">3.</span>
            <span>Click "Clear LocalStorage" to remove old data (optional but recommended)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-bold">4.</span>
            <span>All CMS pages now use the database for content management</span>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-green-50 rounded-xl border border-green-200 p-6">
        <h2 className="text-lg font-semibold text-green-800 mb-4">✅ Benefits of Database Migration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700">
          <div>
            <div className="font-semibold mb-2">🔄 Centralized Management</div>
            <p>All users see the same content updates</p>
          </div>
          <div>
            <div className="font-semibold mb-2">💾 Persistent Storage</div>
            <p>Content survives browser cache clearing</p>
          </div>
          <div>
            <div className="font-semibold mb-2">👥 Multi-user Support</div>
            <p>Multiple admins can manage content</p>
          </div>
          <div>
            <div className="font-semibold mb-2">📊 Version Control</div>
            <p>Track changes and maintain history</p>
          </div>
        </div>
      </div>
    </div>
  );
}
