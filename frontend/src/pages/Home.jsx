// import React from 'react'


// export default function Home() {
//   return (
//     <div>
    
//     <nav className="navbar">
//         <button><i className="fas fa-bars"></i></button>
//         <h1>E-Learn</h1>
//         <input type="text" placeholder="Search courses..."/>
//         <button>Instructor</button>
//         <i className="fas fa-bell"></i>
//         <i className="fas fa-user-circle"></i>
//     </nav>
    
//     <div className="content">
//         <h2>Learn Anytime, Anywhere</h2>
//         <p>Explore thousands of courses from top instructors.</p>
//         <button>Get Started</button>
//     </div>
    
//     <div className="swiper-container">
//         <div className="swiper-wrapper">
//             <div className="swiper-slide">
//                 <img src="https://via.placeholder.com/300" alt="Course 1"/>
//                 <h3>Course Title 1</h3>
//                 <p>Learn the fundamentals of coding.</p>
//                 <button>Enroll Now</button>
//             </div>
//             <div className="swiper-slide">
//                 <img src="https://via.placeholder.com/300" alt="Course 2"/>
//                 <h3>Course Title 2</h3>
//                 <p>Advanced programming concepts.</p>
//                 <button>Enroll Now</button>
//             </div>
//         </div>
//     </div>

//     </div>
//   )
// }


import React,{useState} from 'react';

export default function Home() {
  

  const [activeTab, setActiveTab] = useState('Technology');
  const courses = {
    Technology: [
      {
        name: 'Web Development',
        description: 'Master modern web technologies',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
      },
      {
        name: 'Data Science',
        description: 'Analyze and interpret complex data',
        image: 'https://images.unsplash.com/photo-1556740738-6b4d43f78168',
      },
    ],
    Design: [
      {
        name: 'Graphic Design',
        description: 'Create stunning visual content',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
      },
      {
        name: 'UI/UX Design',
        description: 'Design user-friendly interfaces',
        image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68',
      },
    ],
    Business: [
      {
        name: 'Project Management',
        description: 'Lead projects with confidence',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      },
      {
        name: 'Entrepreneurship',
        description: 'Start and grow your own business',
        image: 'https://images.unsplash.com/photo-1517245386807-9b4f0c2c8b3b',
      },
    ],
    Marketing: [
      {
        name: 'Digital Marketing',
        description: 'Boost your online presence',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      },
      {
        name: 'Social Media Marketing',
        description: 'Grow your brand on social platforms',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7',
      },
    ],
  };
  return (
    <div className="min-h-screen bg-gray-100 font-sans flex">
      {/* Sidebar (LinkedIn Learning Style) */}
      {/* <aside className="w-16 bg-gray-800 text-white flex flex-col items-center py-4 fixed h-full">
        <div className="mb-8">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
          </svg>
        </div>
        <nav className="space-y-6">
          <a
            href="#"
            // className="p-2 rounded-full bg-blue-600 text-white transition-colors"
            title="Home"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
          <a
            href="#"
            className="p-2 rounded-full hover:bg-gray-600 transition-colors"
            title="My Learning"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </a>
          <a
            href="#"
            className="p-2 rounded-full hover:bg-gray-600 transition-colors"
            title="Certification"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </a>
          <a
            href="#"
            className="p-2 rounded-full hover:bg-gray-600 transition-colors"
            title="Wishlist"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </a>
          <a
            href="#"
            className="p-2 rounded-full hover:bg-gray-600 transition-colors"
            title="About"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
          <a
            href="#"
            className="p-2 rounded-full hover:bg-gray-600 transition-colors"
            title="Contact"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-16">
        {/* Navbar */}
        {/* <nav className="bg-white shadow-md p-4">
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
              {/* </div>
            <button className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
                Sign Up
              </button>
             
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Login
              </button>
              <div className="relative">
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
              </div> */}
              
            {/* </div>
          </div>
        </nav>  */}

        {/* Hero Section with Background Image */}
        <section
          className="bg-blue-600 text-white py-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3')`,
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 0, 255, 0.7)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Learn Anything, Anytime, Anywhere
            </h1>
            <p className="text-xl mb-8">
              Unlock your potential with our world-class online courses
            </p>
            <div className="space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
                Get Started
              </button>
             
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-black">Expert Instructors</h3>
                <p className="text-gray-600">
                  Learn from industry professionals with years of experience
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-black">Flexible Learning</h3>
                <p className="text-gray-600">
                  Study at your own pace with 24/7 course access
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-black">Certification</h3>
                <p className="text-gray-600">
                  Earn recognized certificates upon course completion
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Preview with Side Scroll */}
        <section className="bg-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Popular Courses</h2>
            
            {/* <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow min-w-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                  alt="Web Development"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                  <p className="text-gray-600 mb-4">Master modern web technologies</p>
                  <button className="text-blue-600 font-semibold hover:underline">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow min-w-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1556740738-6b4d43f78168"
                  alt="Data Science"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">Data Science</h3>
                  <p className="text-gray-600 mb-4">Analyze and interpret complex data</p>
                  <button className="text-blue-600 font-semibold hover:underline">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow min-w-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1501504905252-473c47e087f8"
                  alt="Graphic Design"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">Graphic Design</h3>
                  <p className="text-gray-600 mb-4">Create stunning visual content</p>
                  <button className="text-blue-600 font-semibold hover:underline">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow min-w-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                  alt="Digital Marketing"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">Digital Marketing</h3>
                  <p className="text-gray-600 mb-4">Boost your online presence</p>
                  <button className="text-blue-600 font-semibold hover:underline">
                    Learn More
                  </button>
                </div> */}
                {/* Tabs */}
            <div className="flex justify-center mb-8 border-b border-gray-300">
              {['Technology', 'Design', 'Business', 'Marketing'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-300 relative ${
                    activeTab === category
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {category}
                  {activeTab === category && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600"></span>
                  )}
                </button>
              ))}
            </div>
            {/* Course Cards */}
            <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {courses[activeTab].map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow min-w-[300px]"
                >
                  <img
                    src={course.image}
                    alt={course.name}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-black">{course.name}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <p className="text-gray-600 mb-2">Instructor Name</p>
                    <div className="flex gap-12">
                    <button className="text-blue-600 font-semibold hover:underline">
                      Learn More
                    </button>
                    {/* <div className="flex items-center space-x-4 mt-4"></div> */}
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
                Enroll Now
              </button>
                    </div>
              
                  </div>
                </div>
              ))}
              </div>
            </div>
          
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">What Our Students Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"EduLearn transformed my career with their amazing courses!"</p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/1.jpg"
                    alt="Student"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-600">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Web Developer</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"The flexibility and quality of instruction are unmatched."</p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Student"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-600">Michael Chen</p>
                    <p className="text-sm text-gray-500">Data Analyst</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        {/* <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="text-2xl font-bold mb-4">EduLearn</div>
            <div className="space-x-4 mb-4">
              <a href="#" className="hover:text-blue-400">Privacy</a>
              <a href="#" className="hover:text-blue-400">Terms</a>
              <a href="#" className="hover:text-blue-400">Support</a>
            </div>
            <p>© 2025 EduLearn. All rights reserved.</p>
          </div>
        </footer> */}
      </div>
    </div>
  );
};

