import React from 'react';

export default function CourseDetailPage() {
    

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Master React Development
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Learn React from scratch and build modern web applications with this comprehensive course.
        </p>
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-yellow-500 font-bold text-lg">4.8 ★</span>
          <span className="text-gray-600">(1,245 reviews)</span>
          <span className="text-gray-600">15,234 students</span>
        </div>
        <p className="text-gray-700">
          Created by <span className="text-blue-600 hover:underline">John Smith</span>
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2">
          {/* What You'll Learn */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-4">What you'll learn</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Build reusable React components
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Master React Hooks and state management
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Create responsive web applications
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Implement routing and navigation
              </li>
            </ul>
          </div>

          {/* Course Content */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
            <p className="text-gray-600 mb-4">24 hours • 15 sections • 120 lectures</p>
            <div className="border-b">
              <div className="flex justify-between items-center py-4">
                <span className="font-medium">Introduction</span>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 text-sm">5 lectures</span>
                  <span className="text-gray-600 text-sm">1h 20m</span>
                  <span>▼</span>
                </div>
              </div>
            </div>
            <div className="border-b">
              <div className="flex justify-between items-center py-4">
                <span className="font-medium">Components & Props</span>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 text-sm">8 lectures</span>
                  <span className="text-gray-600 text-sm">2h 15m</span>
                  <span>▼</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Courses */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Related Courses</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 border-b pb-4">
                <div className="w-24 h-16 bg-gray-200 rounded-md flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="font-medium">Advanced React Patterns</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>4.7 ★</span>
                    <span>(8,923 students)</span>
                  </div>
                  <span className="text-blue-600 font-medium">$59.99</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-24 h-16 bg-gray-200 rounded-md flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="font-medium">React with TypeScript</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>4.8 ★</span>
                    <span>(6,543 students)</span>
                  </div>
                  <span className="text-blue-600 font-medium">$69.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Course Card */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
            <div className="bg-gray-200 h-48 rounded-md mb-4 flex items-center justify-center">
              <span className="text-gray-500">Course Preview</span>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-bold">$89.99</span>
              <span className="text-gray-500 line-through ml-2">$199.99</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors mb-4">
              Add to Cart
            </button>
            <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-md hover:bg-gray-200 transition-colors mb-4">
              Buy Now
            </button>
            <div className="text-sm text-gray-600">
              <h3 className="font-semibold mb-2">This course includes:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  24 hours of on-demand video
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  12 coding exercises
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Certificate of completion
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Lifetime access
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

