// import { Star } from "lucide-react";

// export default function Instructor() {
//   return (
   

//     <div className="flex-1 ml-16">
//       <div className="min-h-screen bg-gray-100 py-8">
//         <div className="p-6 max-w-4xl mx-auto">
//           {/* Instructor Profile */}
//           <div className="flex items-center gap-6 p-6 bg-white shadow-lg rounded-2xl">
//             <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
//             <div>
//               <h2 className="text-xl font-bold text-black">Instructor Name</h2>
//               <p className="text-gray-600">Instructor Bio</p>
//               <div className="flex gap-4 mt-2">
//                 <span className="text-blue-500">Twitter</span>
//                 <span className="text-blue-500">LinkedIn</span>
//               </div>
//             </div>
//           </div>
    
//           {/* Courses */}
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold text-black">Courses</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
//               <div className="p-4 shadow-md border rounded-lg">
//                 <h4 className="font-medium text-black">Course Title</h4>
//                 <p className="text-gray-500">Students enrolled</p>
//               </div>
//               <div className="p-4 shadow-md border rounded-lg">
//                 <h4 className="font-medium text-black">Course Title</h4>
//                 <p className="text-gray-500">Students enrolled</p>
//               </div>
//             </div>
//           </div>
    
//           {/* Reviews */}
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold">Student Reviews</h3>
//             <div className="mt-2 space-y-3">
//               <div className="p-4 border rounded-md">
//                 <p className="font-medium text-black">Student Name</p>
//                 <div className="flex items-center gap-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={16} className="text-yellow-500" />
//                   ))}
//                 </div>
//                 <p className="text-gray-600">Review comment</p>
//               </div>
//               <div className="p-4 border rounded-md">
//                 <p className="font-medium text-black">Student Name</p>
//                 <div className="flex items-center gap-1">
//                   {[...Array(4)].map((_, i) => (
//                     <Star key={i} size={16} className="text-yellow-500" />
//                   ))}
//                 </div>
//                 <p className="text-gray-600">Review comment</p>
//               </div>
//             </div>
//           </div>
//           </div>
//       </div>
//         </div>
//       );
//     };
  

// InstructorPage.jsx
import React from 'react';
import { FaStar, FaTwitter, FaLinkedin, FaGlobe, FaTrophy } from 'react-icons/fa';

export default function Instructor() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Instructor"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900">John Doe</h1>
              <p className="text-gray-600 mt-1">Senior Software Engineer</p>
              <div className="flex items-center justify-center md:justify-start mt-2">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="font-semibold text-gray-800">4.7</span>
                <span className="text-gray-600 ml-1">(1,523 reviews)</span>
              </div>
              <div className="mt-2 text-gray-600">
                <span>45,678 Students</span>
                <span className="mx-2">•</span>
                <span>12 Courses</span>
              </div>
            </div>
            <div className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">
              Follow
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            John is a passionate software developer with over 10 years of experience in web development. He specializes in React, Node.js, and cloud architecture.
          </p>
          <div className="mt-4 flex gap-4">
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-800">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaGlobe size={24} />
            </a>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <FaTrophy className="text-yellow-500" />
              <span>Certified AWS Solutions Architect</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaTrophy className="text-yellow-500" />
              <span>10+ Years Industry Experience</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaTrophy className="text-yellow-500" />
              <span>Top Rated Instructor 2024</span>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Courses by John Doe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">React Masterclass</h3>
                <div className="mt-2 flex items-center gap-4 text-gray-600">
                  <span>23,456 students</span>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span>4.8</span>
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 bg-blue-500 text-white rounded-md font-semibold">
                Enroll
              </div>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Node.js Fundamentals</h3>
                <div className="mt-2 flex items-center gap-4 text-gray-600">
                  <span>15,678 students</span>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span>4.6</span>
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 bg-blue-500 text-white rounded-md font-semibold">
                Enroll
              </div>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">AWS for Developers</h3>
                <div className="mt-2 flex items-center gap-4 text-gray-600">
                  <span>6,543 students</span>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span>4.7</span>
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 bg-blue-500 text-white rounded-md font-semibold">
                Enroll
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Student Testimonials</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold">Sarah M.</span>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span>5</span>
                </div>
              </div>
              <p className="text-gray-700">
                John's teaching style is exceptional! His React course helped me land my first dev job.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold">Mike R.</span>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span>4.5</span>
                </div>
              </div>
              <p className="text-gray-700">
                Clear explanations and practical examples. Highly recommended!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

