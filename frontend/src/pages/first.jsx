import React from 'react'
import { FaPlayCircle, FaStar, FaUsers } from 'react-icons/fa';

export default function First() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
    {/* Navigation Bar */}
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">EduLearn</div>
        <div className="flex items-center space-x-4">
              <div className="relative">

                <input
                  type="text"
                  placeholder="Search courses..."
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 w-64"
                />
                <svg
                  className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                
              </div>
            </div>
        <div className="space-x-4">
          <button className="text-gray-700 hover:text-blue-600">Courses</button>
          <button className="text-gray-700 hover:text-blue-600">Sign Up</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Log In
          </button>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="bg-gradient-to-r from-blue-500 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learn New Skills Online with Top Instructors
          </h1>
          <p className="text-xl mb-6">
            Explore thousands of courses 
          </p>
          {/* <div className="flex justify-center md:justify-start">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full md:w-2/3 p-3 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-r-md hover:bg-yellow-500">
              Search
            </button>
          </div> */}
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Learning illustration"
            className="w-full"
          />
        </div>
      </div>
    </section>

    {/* Featured Categories */}
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Popular Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            'Development',
            'Business',
            'Design',
            'Marketing'
          ].map((category) => (
            <div
              key={category}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {category}
              </h3>
              <p className="text-gray-600">
                Explore {category.toLowerCase()} courses
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

     {/* Featured Courses */}
     <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((course) => (
              <div key={course} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-300 rounded-md mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800">Course Title</h3>
                <p className="text-gray-600 mb-2">Instructor Name</p>
                <div className="flex items-center text-yellow-500 mb-4">
                  {/* {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))} */}
                  <span className="text-gray-700 ml-2">4.8 (1,200 ratings)</span>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-200 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            What Our Learners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((testimonial) => (
              <div key={testimonial} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <p className="text-gray-700 italic mb-4">
                  "This platform has transformed my career! The courses are top-notch and easy to follow."
                </p>
                <p className="text-gray-900 font-semibold">- John Doe</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Footer */}
    <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="text-2xl font-bold mb-4">EduLearn</div>
      <div className="space-x-4 mb-4">
        <a href="#" className="hover:text-blue-400">Privacy</a>
        <a href="#" className="hover:text-blue-400">Terms</a>
        <a href="#" className="hover:text-blue-400">Support</a>
      </div>
      <p>© 2025 EduLearn. All rights reserved.</p>
    </div>
  </footer>
  </div>
  )
}
