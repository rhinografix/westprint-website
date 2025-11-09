import { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, Mail, Send, Clock, User, FileText } from 'lucide-react';

interface TestResult {
  formType: 'hero' | 'contact';
  timestamp: string;
  status: 'success' | 'error';
  response?: any;
  formData?: any;
  duration?: number;
}

export default function FormTestingDashboard() {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isTestingHero, setIsTestingHero] = useState(false);
  const [isTestingContact, setIsTestingContact] = useState(false);

  const testHeroForm = async () => {
    setIsTestingHero(true);
    const startTime = Date.now();

    const testData = {
      fullName: 'John Doe (TEST)',
      email: 'test@example.com',
      phone: '(555) 123-4567',
      projectDetails: 'This is a test submission from the form testing dashboard. Please disregard.'
    };

    try {
      const response = await fetch(
        'https://hdcqpvezfqfrieuvtdkv.supabase.co/functions/v1/make-server-a887b54b/send-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkY3FwdmV6ZnFmcmlldXZ0ZGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MTQ2MzEsImV4cCI6MjA3NjI5MDYzMX0.66TzzhiOhSyobSqSa1TJpzRwxbwyCk6O1DmDl6R_QrM',
          },
          body: JSON.stringify(testData),
        }
      );

      const result = await response.json();
      const duration = Date.now() - startTime;

      setTestResults(prev => [{
        formType: 'hero',
        timestamp: new Date().toLocaleTimeString(),
        status: response.ok ? 'success' : 'error',
        response: result,
        formData: testData,
        duration
      }, ...prev]);

    } catch (error) {
      const duration = Date.now() - startTime;
      setTestResults(prev => [{
        formType: 'hero',
        timestamp: new Date().toLocaleTimeString(),
        status: 'error',
        response: { error: error instanceof Error ? error.message : 'Unknown error' },
        formData: testData,
        duration
      }, ...prev]);
    } finally {
      setIsTestingHero(false);
    }
  };

  const testContactForm = async () => {
    setIsTestingContact(true);
    const startTime = Date.now();

    const testData = {
      firstName: 'Jane (TEST)',
      lastName: 'Smith',
      company: 'Test Company Inc.',
      email: 'test@example.com',
      phone: '(555) 987-6543',
      service: 'full-color-printing',
      quantity: '500-1000',
      timeline: 'standard',
      message: 'This is a test submission from the form testing dashboard. Please disregard. Testing all fields including dropdowns and detailed information.'
    };

    try {
      const response = await fetch(
        'https://hdcqpvezfqfrieuvtdkv.supabase.co/functions/v1/make-server-a887b54b/send-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkY3FwdmV6ZnFmcmlldXZ0ZGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MTQ2MzEsImV4cCI6MjA3NjI5MDYzMX0.66TzzhiOhSyobSqSa1TJpzRwxbwyCk6O1DmDl6R_QrM',
          },
          body: JSON.stringify(testData),
        }
      );

      const result = await response.json();
      const duration = Date.now() - startTime;

      setTestResults(prev => [{
        formType: 'contact',
        timestamp: new Date().toLocaleTimeString(),
        status: response.ok ? 'success' : 'error',
        response: result,
        formData: testData,
        duration
      }, ...prev]);

    } catch (error) {
      const duration = Date.now() - startTime;
      setTestResults(prev => [{
        formType: 'contact',
        timestamp: new Date().toLocaleTimeString(),
        status: 'error',
        response: { error: error instanceof Error ? error.message : 'Unknown error' },
        formData: testData,
        duration
      }, ...prev]);
    } finally {
      setIsTestingContact(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl text-gray-900">Form Testing Dashboard</h1>
              <p className="text-gray-600 mt-1">Test Westprint quote request forms and verify email delivery</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6 p-4 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl border border-cyan-200">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-cyan-600" />
              <div>
                <div className="text-sm text-gray-600">Email Recipients</div>
                <div className="text-gray-900 text-xs">estimating@westprint.com</div>
                <div className="text-gray-900 text-xs">rcarandang@advantageinc.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Send className="w-5 h-5 text-cyan-600" />
              <div>
                <div className="text-sm text-gray-600">Email Sender</div>
                <div className="text-gray-900">onboarding@resend.dev</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-cyan-600" />
              <div>
                <div className="text-sm text-gray-600">Total Tests</div>
                <div className="text-gray-900">{testResults.length}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Test Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Hero Form Test */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl text-gray-900">Homepage Hero Form</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Test the simplified quote request form from the homepage hero section (4 fields).
            </p>
            <div className="space-y-2 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>Full Name, Phone, Email, Project Details</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>Subject: "New Quote Request from Homepage"</span>
              </div>
            </div>
            <button
              onClick={testHeroForm}
              disabled={isTestingHero}
              className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-6 py-4 rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              {isTestingHero ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Testing...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Test Hero Form
                </>
              )}
            </button>
          </div>

          {/* Contact Form Test */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl text-gray-900">Contact Page Form</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Test the detailed quote request form from the contact page (9 fields with dropdowns).
            </p>
            <div className="space-y-2 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>Name, Company, Contact Info, Service, Quantity, Timeline</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>Subject: "New Quote Request from Contact Page"</span>
              </div>
            </div>
            <button
              onClick={testContactForm}
              disabled={isTestingContact}
              className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-4 rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              {isTestingContact ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Testing...
                </>
              ) : (
                <>
                  <FileText className="w-5 h-5" />
                  Test Contact Form
                </>
              )}
            </button>
          </div>
        </div>

        {/* Test Results */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-gray-900">Test Results</h2>
            {testResults.length > 0 && (
              <button
                onClick={() => setTestResults([])}
                className="text-sm text-gray-600 hover:text-gray-900 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Clear Results
              </button>
            )}
          </div>

          {testResults.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <AlertCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No test results yet</p>
              <p className="text-sm mt-2">Click a test button above to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {testResults.map((result, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 ${
                    result.status === 'success'
                      ? 'bg-green-50 border-green-200'
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {result.status === 'success' ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600" />
                      )}
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg text-gray-900">
                            {result.formType === 'hero' ? 'Homepage Hero Form' : 'Contact Page Form'}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            result.status === 'success'
                              ? 'bg-green-200 text-green-800'
                              : 'bg-red-200 text-red-800'
                          }`}>
                            {result.status === 'success' ? 'SUCCESS' : 'ERROR'}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {result.timestamp}
                          </span>
                          {result.duration && (
                            <span>{result.duration}ms</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Response Details */}
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="text-sm text-gray-700 mb-2">Form Data Sent:</h4>
                      <pre className="bg-white p-3 rounded-lg text-xs overflow-auto border border-gray-200">
                        {JSON.stringify(result.formData, null, 2)}
                      </pre>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-700 mb-2">Server Response:</h4>
                      <pre className="bg-white p-3 rounded-lg text-xs overflow-auto border border-gray-200">
                        {JSON.stringify(result.response, null, 2)}
                      </pre>
                    </div>
                  </div>

                  {result.status === 'success' && result.response?.emailId && (
                    <div className="mt-4 p-4 bg-white rounded-lg border border-green-200">
                      <p className="text-sm text-green-800">
                        ✓ Email sent successfully! Email ID: <code className="bg-green-100 px-2 py-1 rounded">{result.response.emailId}</code>
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        Check <strong>estimating@westprint.com</strong> and <strong>rcarandang@advantageinc.com</strong> inbox (or spam folder) for the email.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl shadow-lg p-8 border border-cyan-200">
          <h3 className="text-xl text-gray-900 mb-4">Testing Instructions</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <h4 className="text-gray-900 mb-2">What This Dashboard Does:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Sends test emails through the same API endpoints as your actual forms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Shows real-time success/error status</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Displays request/response data for debugging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Measures response time</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 mb-2">After Testing:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Check estimating@westprint.com inbox for test emails</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Check rcarandang@advantageinc.com inbox for test emails</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Verify email formatting looks professional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Test the actual forms on homepage and contact page</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
