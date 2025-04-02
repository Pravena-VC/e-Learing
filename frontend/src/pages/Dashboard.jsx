// import React from "react";

// export default function StudentDashboard() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* Sidebar */}
//       <aside className="bg-blue-700 text-white w-64 p-6 space-y-4 fixed h-full">
//         <button className="text-white text-xl mb-4">&times;</button>
//         <ul className="space-y-4">
//           <li className="flex items-center space-x-2">Dashboard</li>
//           <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">My Courses</li>
//           <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">Certificates</li>
//           <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">Discussions</li>
//           <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">Logout</li>
//         </ul>
//       </aside>

//       <div className="flex-1 ml-0 md:ml-64">
//         {/* Navbar */}
//         <nav className="bg-white shadow-md p-4 flex items-center justify-between fixed w-full z-10">
//           <div className="flex items-center space-x-4 fixed">
//             <button className="text-gray-700 text-2xl">☰</button>
//             <h1 className="text-2xl font-bold text-blue-600">Student Dashboard</h1>
//           </div>
//           {/* <div className="flex items-center space-x-4">
//             <span className="text-gray-700 text-xl cursor-pointer">🔔</span>
//             <span className="text-gray-700 text-2xl cursor-pointer">👤</span>
//           </div> */}
//         </nav>

//         <main className="p-6 flex-1 mt-16">
//           <h2 className="text-3xl font-bold mb-6">Welcome, Student!</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold">Enrolled Courses</h3>
//               <p className="text-gray-600 mt-2">View your active courses</p>
//               <div className="mt-4">
//                 <p className="text-gray-700">Course Progress:</p>
//                 <div className="w-full bg-gray-200 rounded-full h-4">
//                   <div className="bg-blue-600 h-4 rounded-full" style={{ width: "70%" }}></div>
//                 </div>
//                 <p className="text-gray-600 text-sm mt-2">70% completed</p>
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold">Certificates Earned</h3>
//               <p className="text-gray-600 mt-2">Check your completed courses</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold">Upcoming Deadlines</h3>
//               <p className="text-gray-600 mt-2">Track your assignments</p>
//             </div>
//           </div>
//         </main>


//       </div>
//     </div>
//   );
// }




import React from 'react';


function Dashboard() {
  
  return (

    <div className="flex-1 p-8 overflow-auto min-h-screen bg-gray-100 font-sans ">
      {/* Main Content */}
      <div className="flex-1 ml-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-black">Welcome, Student!</h1>
        <div className="flex items-center">
          <span className="mr-4 text-gray-400">March 27, 2025</span>
          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white">
            P
          </div>
        </div>
      </div>
      </div>
      
      {/* Main Grid Layout */}
      <div className="flex-1 ml-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Enrolled Courses */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Enrolled Courses</h2>
            <p className="text-sm text-gray-500">Number of Enrolled Courses</p>
            {/* Placeholder for dynamic data */}
            <p className="text-2xl font-bold text-indigo-600">3</p>
          </div>
          <div className="text-3xl text-indigo-500">📚</div>
        </div>

        {/* Course Progress */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Course Progress</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-700">React Basics</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-sm text-gray-500">75% Complete</p>
            </div>
            <div>
              <p className="text-gray-700">Tailwind CSS Mastery</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <p className="text-sm text-gray-500">40% Complete</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Learning Streak</h2>
            <p className="text-3xl font-bold text-orange-500"> Days</p>
          </div>
          <div className="text-orange-500">🔥</div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Upcoming Tasks</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center text-gray-700">
              <span>Submit React Assignment</span>
              <span className="text-sm text-red-500">Due: Mar 29</span>
            </li>
            <li className="flex justify-between items-center text-gray-700">
              <span>Quiz: CSS Fundamentals</span>
              <span className="text-sm text-red-500">Due: Mar 30</span>
            </li>
          </ul>
        </div>
        {/* Microlearning */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-black">Microlearning Bite</h2>
          <p className="text-gray-700 mb-2">Quick Tip: Use `flex` for layouts!</p>
          <button className="text-indigo-600 hover:underline text-sm">Learn More (2 min)</button>
        </div>
      </div>

      {/* Additional Sections */}
      <section className="bg-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-left mb-12 text-black">Enrolled Courses</h2>
            
            <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow min-w-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                  alt="Web Development"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">Web Development</h3>
                  <p className="text-gray-500 mb-4">Master modern web technologies</p>
                  <p className="text-gray-600 mb-4">Bradly Berger</p>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
            Start Course
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
                  <p className="text-gray-500 mb-4">Analyze and interpret complex data</p>
                  <p className="text-gray-600 mb-4">Bradly Berger</p>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
            Start Course
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
                  <p className="text-gray-500 mb-4">Create stunning visual content</p>
                  <p className="text-gray-600 mb-4">Bradly Berger</p>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
            Start Course
          </button>
                </div>
              </div>
              </div>
              </div>
      </section>
      {/* Course Card */}
      
      {/* <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex items-center space-x-4">
          <div className="w-24 h-24 bg-yellow-400 rounded-lg flex items-center justify-center">
            {/* Placeholder for course image/icon */}
            {/* <span className="text-3xl">🌐</span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">
              WEB DEVELOPMENT BY DOING: HTML / CSS FROM SCRATCH
            </h3>
            <p className="text-gray-500">Bradly Berger</p>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
            START COURSE
          </button>
        </div> */} 
        
      

      {/* Quick Links */}
      <div className="bg-white p-6 rounded-lg shadow-md gap-2">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="#"
            className="p-4 bg-indigo-100 text-indigo-800 rounded-lg text-center hover:bg-indigo-200 transition duration-200"
          >
            View All Courses
          </a>
          <a
            href="#"
            className="p-4 bg-indigo-100 text-indigo-800 rounded-lg text-center hover:bg-indigo-200 transition duration-200"
          >
            Check Grades
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;