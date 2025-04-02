import React from 'react';

export default function Create() {
  return (
    <div className="flex-1 ml-16">
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Instructor Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage your courses efficiently</p>
        </div>

        {/* Create New Course Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4 text-black">Create New Course</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Course Title"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Course Description"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                rows="3"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Create Course
            </button>
          </form>
        </div>

        {/* Course List */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-black">Your Courses</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left text-gray-600">Title</th>
                  <th className="p-3 text-left text-gray-600">Description</th>
                  <th className="p-3 text-left text-gray-600">Status</th>
                  <th className="p-3 text-left text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 text-black">Sample Course</td>
                  <td className="p-3 text-black">This is a sample description.</td>
                  <td className="p-3">
                    <span className="px-2 py-1 rounded-full text-sm bg-green-100 text-green-800">Published</span>
                  </td>
                  <td className="p-3">
                    <button className="text-blue-500 hover:text-blue-700 mr-3">Edit</button>
                    <button className="text-red-500 hover:text-red-700">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
