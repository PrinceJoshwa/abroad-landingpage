import React from 'react'

export default function ResultsPage({ selectedFilters }) {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl font-bold text-center mb-8">
          Your Results
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Selected Filters
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(selectedFilters).map(([key, value]) => (
              <div key={key} className="border p-4 rounded-lg">
                <h3 className="text-gray-600 font-medium capitalize">
                  {key.replace(/([A-Z])/g, ' $1')}
                </h3>
                <p className="text-gray-800">{value || 'N/A'}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">
            Recommended Courses and Universities
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Example cards */}
            <div className="border p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-600">
                Offered by: <span className="font-medium">University of Example</span>
              </p>
            </div>
            <div className="border p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                Master of Business Administration
              </h3>
              <p className="text-gray-600">
                Offered by: <span className="font-medium">Business Academy</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            onClick={() => window.location.reload()}
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  )
}
