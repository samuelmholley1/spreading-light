import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Mendo Grass',
  description: 'Admin dashboard for managing newsletters and communications.',
  robots: 'noindex, nofollow', // Keep admin pages out of search engines
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-300 mt-2">Newsletter management and communication tools</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">1,247</div>
            <div className="text-gray-600">Email Subscribers</div>
            <div className="text-sm text-green-600 mt-1">+12% this month</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">89</div>
            <div className="text-gray-600">SMS Subscribers</div>
            <div className="text-sm text-orange-600 mt-1">+23% this month</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">156</div>
            <div className="text-gray-600">School Contacts</div>
            <div className="text-sm text-blue-600 mt-1">+8% this month</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">73%</div>
            <div className="text-gray-600">Open Rate</div>
            <div className="text-sm text-green-600 mt-1">Above industry avg</div>
          </div>
        </div>

        {/* Newsletter Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Email Newsletter Section */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Email Newsletters</h2>
              <p className="text-gray-600">Send newsletters to email subscribers</p>
            </div>
            <div className="p-6 space-y-4">
              {/* General Newsletter */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">General Newsletter</h3>
                <p className="text-sm text-gray-600 mb-4">1,247 subscribers</p>
                <div className="space-y-3">
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                    Send Latest Newsletter
                  </button>
                  <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                    Preview Before Send
                  </button>
                </div>
              </div>

              {/* Schools Newsletter */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Schools Newsletter</h3>
                <p className="text-sm text-gray-600 mb-4">156 school contacts</p>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    Send Latest Newsletter
                  </button>
                  <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                    Preview Before Send
                  </button>
                </div>
              </div>

              {/* Restaurants Newsletter */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Restaurants Newsletter</h3>
                <p className="text-sm text-gray-600 mb-4">243 restaurant contacts</p>
                <div className="space-y-3">
                  <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors">
                    Send Latest Newsletter
                  </button>
                  <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                    Preview Before Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* SMS Communications Section */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">SMS Communications</h2>
              <p className="text-gray-600">Send text messages to chef subscribers</p>
            </div>
            <div className="p-6 space-y-4">
              {/* Chef SMS */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Chef SMS Updates</h3>
                <p className="text-sm text-gray-600 mb-4">89 chef subscribers</p>
                <div className="space-y-3">
                  <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
                    Send Latest Newsletter via SMS
                  </button>
                  <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors">
                    Send Availability Update
                  </button>
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                    Send Special Offer
                  </button>
                </div>
              </div>

              {/* Custom SMS */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Custom SMS Message</h3>
                <textarea
                  placeholder="Type your custom message here..."
                  className="w-full h-24 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  maxLength={160}
                ></textarea>
                <div className="text-xs text-gray-500 mt-1">160 characters max</div>
                <button className="w-full mt-3 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Send Custom Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 py-3 border-b border-gray-100">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">General Newsletter Sent</div>
                  <div className="text-xs text-gray-500">Sent to 1,247 subscribers • 2 hours ago</div>
                </div>
                <div className="text-sm text-gray-500">73% opened</div>
              </div>
              
              <div className="flex items-center space-x-4 py-3 border-b border-gray-100">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Chef SMS Sent</div>
                  <div className="text-xs text-gray-500">Availability update to 89 chefs • 1 day ago</div>
                </div>
                <div className="text-sm text-gray-500">94% delivered</div>
              </div>
              
              <div className="flex items-center space-x-4 py-3 border-b border-gray-100">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Schools Newsletter Sent</div>
                  <div className="text-xs text-gray-500">Sent to 156 school contacts • 3 days ago</div>
                </div>
                <div className="text-sm text-gray-500">81% opened</div>
              </div>
              
              <div className="flex items-center space-x-4 py-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Restaurant Newsletter Sent</div>
                  <div className="text-xs text-gray-500">Sent to 243 restaurant contacts • 1 week ago</div>
                </div>
                <div className="text-sm text-gray-500">69% opened</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl mb-2">📧</div>
                <div className="text-sm font-medium">Export Emails</div>
              </button>
              <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl mb-2">📱</div>
                <div className="text-sm font-medium">Export SMS List</div>
              </button>
              <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl mb-2">📊</div>
                <div className="text-sm font-medium">View Analytics</div>
              </button>
              <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl mb-2">⚙️</div>
                <div className="text-sm font-medium">Settings</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
