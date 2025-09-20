"use client";
import { useState, useEffect } from 'react';

export default function ChatbotTestPage() {
  const [testResults, setTestResults] = useState({});
  const [loading, setLoading] = useState(false);

  const runTests = async () => {
    setLoading(true);
    const results = {};

    try {
      // Test 1: Database connection
      console.log('🧪 Testing database connection...');
      const dbResponse = await fetch('/api/chatbot/test');
      results.database = await dbResponse.json();
      console.log('✅ Database test result:', results.database);

      // Test 2: Chatbot data endpoint
      console.log('🧪 Testing chatbot data endpoint...');
      const dataResponse = await fetch('/api/chatbot/data');
      results.data = await dataResponse.json();
      console.log('✅ Data endpoint test result:', results.data);

      // Test 3: Create test conversation
      console.log('🧪 Testing conversation creation...');
      const testData = {
        session_id: `test_${Date.now()}`,
        conversationHistory: [
          { id: 1, text: "Test message", isUser: false, timestamp: new Date().toLocaleTimeString() }
        ],
        userProfile: { nom: "Test", prenom: "User" },
        selectedIntentions: ["test"],
        currentStep: "welcome"
      };

      const createResponse = await fetch('/api/chatbot/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testData)
      });
      results.create = await createResponse.json();
      console.log('✅ Create test result:', results.create);

    } catch (error) {
      console.error('❌ Test failed:', error);
      results.error = error.message;
    }

    setTestResults(results);
    setLoading(false);
  };

  useEffect(() => {
    runTests();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          🤖 Sarah Chatbot Test Page
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Results</h2>
          
          {loading && (
            <div className="text-blue-600 mb-4">
              🔄 Running tests...
            </div>
          )}

          {testResults.database && (
            <div className="mb-4">
              <h3 className="font-semibold text-green-600">✅ Database Test</h3>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
                {JSON.stringify(testResults.database, null, 2)}
              </pre>
            </div>
          )}

          {testResults.data && (
            <div className="mb-4">
              <h3 className="font-semibold text-green-600">✅ Data Endpoint Test</h3>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
                {JSON.stringify(testResults.data, null, 2)}
              </pre>
            </div>
          )}

          {testResults.create && (
            <div className="mb-4">
              <h3 className="font-semibold text-green-600">✅ Create Test</h3>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
                {JSON.stringify(testResults.create, null, 2)}
              </pre>
            </div>
          )}

          {testResults.error && (
            <div className="mb-4">
              <h3 className="font-semibold text-red-600">❌ Error</h3>
              <pre className="bg-red-100 p-3 rounded text-sm overflow-auto">
                {testResults.error}
              </pre>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Check that the database test shows "connected: true"</li>
            <li>Verify all required tables exist</li>
            <li>Check that the data endpoint returns conversations</li>
            <li>Confirm that creating a test conversation works</li>
            <li>If all tests pass, the chatbot should work on the main site</li>
          </ol>
        </div>

        <div className="mt-6">
          <button 
            onClick={runTests}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded"
          >
            {loading ? 'Running Tests...' : 'Run Tests Again'}
          </button>
        </div>
      </div>
    </div>
  );
}




