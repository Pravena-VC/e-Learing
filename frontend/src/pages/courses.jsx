import React from 'react'

import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

export default function Courses() {
  return (
    
    // CoursesPage.jsx
    <div className="min-h-screen bg-gray-100">
        <div className="flex-1 ml-16">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white">Explore Our Courses</h1>
          <p className="text-white mt-2">Learn new skills from industry experts</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select className="border rounded-md px-4 py-2 bg-white text-black">
            <option>Category</option>
            <option>Web Development</option>
            <option>Mobile Development</option>
            <option>Data Science</option>
            <option>Artificial Intelligence</option>
            <option>Machine Learning</option>
            <option>Design</option>
          </select>
          {/* <select className="border rounded-md px-4 py-2 bg-white">
            <option>Price</option>
          </select> */}
          {/* <input
            type="text"
            placeholder="Search courses..."
            className="border rounded-md px-4 py-2 w-64"
          /> */}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Course Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-48 bg-gray-200" /> {/* Image placeholder */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Course Title Goes Here
              </h3>
              <p className="text-sm text-gray-600 mb-2">Instructor Name</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 font-bold mr-1">4.8</span>
                <span className="text-sm text-gray-600">(1,245 reviews)</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-gray-800">Free</span>
                  <span className="text-sm text-gray-500 line-through ml-2">$199.99</span>
                </div>
                <span className="text-sm text-gray-600">12 hours</span>
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                Category
              </span>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-48 bg-gray-200" /> {/* Image placeholder */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Another Course Title
              </h3>
              <p className="text-sm text-gray-600 mb-2">Instructor Name</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 font-bold mr-1">4.9</span>
                <span className="text-sm text-gray-600">(892 reviews)</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-gray-800">Free</span>
                  <span className="text-sm text-gray-500 line-through ml-2">$149.99</span>
                </div>
                <span className="text-sm text-gray-600">15 hours</span>
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                Category
              </span>
            </div>
          </div>
           <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-48 bg-gray-200" /> {/* Image placeholder */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Another Course Title
              </h3>
              <p className="text-sm text-gray-600 mb-2">Instructor Name</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 font-bold mr-1">4.9</span>
                <span className="text-sm text-gray-600">(892 reviews)</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-gray-800">Free</span>
                  <span className="text-sm text-gray-500 line-through ml-2">$149.99</span>
                </div>
                <span className="text-sm text-gray-600">15 hours</span>
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                Category
              </span>
            </div>
          </div>
           <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-48 bg-gray-200" /> {/* Image placeholder */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Another Course Title
              </h3>
              <p className="text-sm text-gray-600 mb-2">Instructor Name</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 font-bold mr-1">4.9</span>
                <span className="text-sm text-gray-600">(892 reviews)</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-gray-800">Free</span>
                  <span className="text-sm text-gray-500 line-through ml-2">$149.99</span>
                </div>
                <span className="text-sm text-gray-600">15 hours</span>
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                Category
              </span>
            </div>
          </div>
           <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-48 bg-gray-200" /> {/* Image placeholder */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Another Course Title
              </h3>
              <p className="text-sm text-gray-600 mb-2">Instructor Name</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 font-bold mr-1">4.9</span>
                <span className="text-sm text-gray-600">(892 reviews)</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-gray-800">Free</span>
                  <span className="text-sm text-gray-500 line-through ml-2">$149.99</span>
                </div>
                <span className="text-sm text-gray-600">15 hours</span>
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                Category
              </span>
            </div>
          </div>
           <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-48 bg-gray-200" /> {/* Image placeholder */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Another Course Title
              </h3>
              <p className="text-sm text-gray-600 mb-2">Instructor Name</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 font-bold mr-1">4.9</span>
                <span className="text-sm text-gray-600">(892 reviews)</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-gray-800">Free</span>
                  <span className="text-sm text-gray-500 line-through ml-2">$149.99</span>
                </div>
                <span className="text-sm text-gray-600">15 hours</span>
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                Category
              </span>
            </div>
          </div>
           <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-48 bg-gray-200" /> {/* Image placeholder */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Another Course Title
              </h3>
              <p className="text-sm text-gray-600 mb-2">Instructor Name</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 font-bold mr-1">4.9</span>
                <span className="text-sm text-gray-600">(892 reviews)</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-gray-800">Free</span>
                  <span className="text-sm text-gray-500 line-through ml-2">$149.99</span>
                </div>
                <span className="text-sm text-gray-600">15 hours</span>
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                Category
              </span>
            </div>
          </div>
           <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-48 bg-gray-200" /> {/* Image placeholder */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Another Course Title
              </h3>
              <p className="text-sm text-gray-600 mb-2">Instructor Name</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 font-bold mr-1">4.9</span>
                <span className="text-sm text-gray-600">(892 reviews)</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-gray-800">Free</span>
                  <span className="text-sm text-gray-500 line-through ml-2">$149.99</span>
                </div>
                <span className="text-sm text-gray-600">15 hours</span>
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                Category
              </span>
            </div>
          </div>
          {/* Add more cards as needed */}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center gap-2">
          <button className="px-4 py-2 bg-white rounded-md border hover:bg-gray-50 text-black">Previous</button>
          <button className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 text-black">1</button>
          <button className="px-4 py-2 bg-white rounded-md border hover:bg-gray-50 text-black">2</button>
          <button className="px-4 py-2 bg-white rounded-md border hover:bg-gray-50 text-black">3</button>
          <button className="px-4 py-2 bg-white rounded-md border hover:bg-gray-50 text-black">Next</button>
        </div>
      </div>
    </div>
    </div>
  );
};




