import React from 'react'
import { Navbar } from './Navbar'

const CommunitiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Communities</h1>
          
          <p className="text-gray-600 mb-8">
            Explore and join communities of developers, designers, and creators who share your interests.
            Connect with like-minded individuals, collaborate on projects, and learn from each other.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample communities */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community {item}</h3>
                <p className="text-gray-600 mb-4">A community of developers focused on building amazing projects together.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{Math.floor(Math.random() * 1000) + 100} members</span>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default CommunitiesPage
