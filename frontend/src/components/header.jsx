import React from 'react'

export default function Header() {
  return (
    <div>
      <nav className="bg-white shadow-md p-4 ">
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
            <div className="flex items-center space-x-4">
            <div className="relative">
            <svg className="w-6 h-6 text-gray-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                {/* <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                  3
                </span> */}
              </div>
             
      
        <svg className="w-6 h-6" fill="none" stroke="gray" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      
            <button className=" text-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
                Courses
              </button>
             
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                instructor
              </button>
              <div className="relative">
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
              </div>
              
            </div>
          </div>
        </nav>
    </div>
  )
}


