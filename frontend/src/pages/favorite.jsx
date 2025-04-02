// FavoritesPage.jsx
// import React, { useState } from 'react';
// import { FaHeart, FaStar, FaClock, FaBook, FaSignal } from 'react-icons/fa';

// const FavoritesPage = () => {
//   const [favorites, setFavorites] = useState([
//     {
//       id: 1,
//       title: 'React Fundamentals: Building Modern Web Applications',
//       instructor: 'John Doe',
//       rating: 4.5,
//       reviews: 1234,
//       price: 49.99,
//       image: 'https://via.placeholder.com/300x200',
//       duration: '12h 30m',
//       lessons: 45,
//       level: 'Beginner',
//       description: 'Master React fundamentals and build responsive web applications from scratch.',
//     },
//     {
//       id: 2,
//       title: 'Advanced JavaScript: Design Patterns and Best Practices',
//       instructor: 'Jane Smith',
//       rating: 4.8,
//       reviews: 987,
//       price: 59.99,
//       image: 'https://via.placeholder.com/300x200',
//       duration: '15h 45m',
//       lessons: 62,
//       level: 'Advanced',
//       description: 'Deep dive into JavaScript patterns and modern development techniques.',
//     },
//     {
//       id: 3,
//       title: 'UI/UX Design Basics: From Wireframes to Prototypes',
//       instructor: 'Mike Johnson',
//       rating: 4.3,
//       reviews: 456,
//       price: 39.99,
//       image: 'https://via.placeholder.com/300x200',
//       duration: '8h 15m',
//       lessons: 28,
//       level: 'Intermediate',
//       description: 'Learn essential UI/UX design principles and tools.',
//     },
//   ]);

//   const removeFromFavorites = (courseId) => {
//     setFavorites(favorites.filter((course) => course.id !== courseId));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">My Favorites</h1>
//           <p className="mt-2 text-gray-600">
//             {favorites.length} {favorites.length === 1 ? 'course' : 'courses'} in your wishlist
//           </p>
//         </div>

//         {/* Courses Grid */}
//         {favorites.length === 0 ? (
//           <div className="text-center py-12">
//             <h2 className="text-xl font-semibold text-gray-900">Your wishlist is empty</h2>
//             <p className="mt-2 text-gray-600">
//               Save courses to your wishlist to easily find them later!
//             </p>
//             <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//               Browse Courses
//             </button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {favorites.map((course) => (
//               <div
//                 key={course.id}
//                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//               >
//                 {/* Course Image */}
//                 <div className="relative">
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <button
//                     onClick={() => removeFromFavorites(course.id)}
//                     className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:text-red-500"
//                   >
//                     <FaHeart className="w-5 h-5 text-red-400" />
//                   </button>
//                 </div>

//                 {/* Course Details */}
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
//                     {course.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 mt-1">{course.instructor}</p>
//                   <p className="text-sm text-gray-500 mt-1 line-clamp-2">
//                     {course.description}
//                   </p>

//                   {/* Rating */}
//                   <div className="flex items-center mt-2">
//                     <span className="text-sm font-medium text-gray-900 mr-1">
//                       {course.rating}
//                     </span>
//                     <div className="flex text-yellow-400">
//                       {[...Array(5)].map((_, i) => (
//                         <FaStar
//                           key={i}
//                           className={`w-4 h-4 ${
//                             i < Math.floor(course.rating) ? 'fill-current' : 'text-gray-300'
//                           }`}
//                         />
//                       ))}
//                     </div>
//                     <span className="text-sm text-gray-500 ml-1">
//                       ({course.reviews})
//                     </span>
//                   </div>

//                   {/* Additional Details */}
//                   <div className="mt-3 space-y-1">
//                     <div className="flex items-center text-sm text-gray-600">
//                       <FaClock className="w-4 h-4 mr-2" />
//                       <span>{course.duration}</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-600">
//                       <FaBook className="w-4 h-4 mr-2" />
//                       <span>{course.lessons} lessons</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-600">
//                       <FaSignal className="w-4 h-4 mr-2" />
//                       <span>{course.level}</span>
//                     </div>
//                   </div>

//                   {/* Price and Actions */}
//                   <div className="mt-4 flex items-center justify-between">
//                     <p className="text-lg font-semibold text-gray-900">
//                       ${course.price.toFixed(2)}
//                     </p>
//                     <div className="flex gap-2">
//                       <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//                         Add to Cart
//                       </button>
//                       <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FavoritesPage;


import { FaHeart, FaStar, FaClock, FaBook, FaSignal } from 'react-icons/fa';



export default function Favorite() {
  return (
  <div className="flex-1 ml-16">
    
    <header className="bg-blue-600 text-white py-6">
  <div className="container mx-auto px-4 flex justify-between items-center">
    <div>
      <h1 className="text-3xl font-bold">My Favorites</h1>
      <p className="mt-2">5 courses in your wishlist</p>
    </div>
    <button className="px-4 py-2 border border-gray-300 text-blue-700 bg-gray-100 rounded-md hover:bg-gray-100 hover:text-black self-center">
      Add More Courses
    </button>
  </div>
</header>

  <div className="min-h-screen bg-gray-100 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* <header className="bg-blue-600 text-white py-6"> */}
      {/* <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-900">My Favorites</h1>
        <p className="mt-2 text-gray-600">5 courses in your wishlist</p>
      </div> */}
    {/* </header> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[{
          title: "Advanced JavaScript: Design Patterns and Best Practices",
          instructor: "Jane Smith",
        //   rating: 4.8,
          reviews: 987,
         
          image: "https://via.placeholder.com/300x200",
          duration: "15h 45m",
          lessons: 62,
          level: "Advanced"
        }, {
          title: "React Fundamentals: Building Modern Web Applications",
          instructor: "John Doe",
        //   rating: 4.5,
          reviews: 1234,
          
          image: "https://via.placeholder.com/300x200",
          duration: "12h 30m",
          lessons: 45,
          level: "Beginner"
        }, {
          title: "UI/UX Design Basics: From Wireframes to Prototypes",
          instructor: "Mike Johnson",
        //   rating: 4.3,
          reviews: 456,
          
          image: "https://via.placeholder.com/300x200",
          duration: "8h 15m",
          lessons: 28,
          level: "Intermediate"
        }, {
          title: "Python for Data Science and Machine Learning",
          instructor: "Sarah Lee",
        //   rating: 4.7,
          reviews: 678,
         
          image: "https://via.placeholder.com/300x200",
          duration: "20h 10m",
          lessons: 75,
          level: "Intermediate"
        }, {
          title: "Full-Stack Web Development with Node.js and MongoDB",
          instructor: "David Miller",
        //   rating: 4.6,
          reviews: 845,
          
          image: "https://via.placeholder.com/300x200",
          duration: "18h 30m",
          lessons: 65,
          level: "Advanced"
        }].map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 text-black">
            <div className="relative">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md">
                <FaHeart className="w-5 h-5 text-red-400" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{course.instructor}</p>
              <div className="flex items-center mt-2">
                {/* <span className="text-sm font-medium text-gray-900 mr-1">{course.rating}</span> */}
                {/* <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'fill-current' : 'text-gray-300'}`} />
                  ))}
                </div> */}
                <span className="text-sm text-gray-500 ml-1">({course.reviews})</span>
              </div>
              <div className="mt-3 space-y-1">
                <div className="flex items-center text-sm text-gray-600">
                  <FaClock className="w-4 h-4 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaBook className="w-4 h-4 mr-2" />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaSignal className="w-4 h-4 mr-2" />
                  <span>{course.level}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                {/* <p className="text-lg font-semibold text-gray-900">${course.price.toFixed(2)}</p> */}
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Enroll Now</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">View Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>
);
}
