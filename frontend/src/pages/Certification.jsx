// CertificationPage.jsx
import React from 'react';
export default function Certification() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="flex-1 ml-16">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Certification</h1>
          <p className="mt-2">Track and manage your professional certifications</p>
        </div>
      </header>

      {/* Main Content */}
      {/* <div className="flex-1 ml-16"> */}
      <main className="container mx-auto px-4 py-8">
        {/* Profile Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center">
            <img 
              src="https://via.placeholder.com/100" 
              alt="Profile" 
              className="w-24 h-24 rounded-full mr-4"
            />
            <div>
              <h2 className="text-2xl font-semibold text-black">John Doe</h2>
              <p className="text-gray-600">Professional Learner</p>
              <p className="text-gray-500">Completed Courses: 5</p>
            </div>
          </div>
        </section>

        {/* Certificates Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Certificate Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-black">Data Science Fundamentals</h3>
            <p className="text-gray-600 mb-4">Completed: March 15, 2025</p>
            <div className="flex justify-between items-center">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                Verified
              </span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                View Certificate
              </button>
            </div>
          </div>

          {/* Certificate Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-black">Machine Learning Basics</h3>
            <p className="text-gray-600 mb-4">Completed: February 28, 2025</p>
            <div className="flex justify-between items-center">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                Verified
              </span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                View Certificate
              </button>
            </div>
          </div>

          {/* Certificate Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-black">Python Programming</h3>
            <p className="text-gray-600 mb-4">Completed: January 20, 2025</p>
            <div className="flex justify-between items-center">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                Verified
              </span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                View Certificate
              </button>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-black">Download All Certificates</h2>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Download as pdf
          </button>
        </section>
      </main>
      </div>

     
    </div>
  );
};
