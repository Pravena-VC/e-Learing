// import React from 'react'

// export default function Login() {
//   return (
 
//           <div className="auth-layout">
//         <h2>Sign in to your account</h2>
//         <p>
//             Or <a href="/register" className="text-indigo-600 hover:text-indigo-500">create a new account</a>
//         </p>
//         <form className="space-y-6" onsubmit="handleSubmit(event)">
//             <div className="input-group">
//                 <label for="email">Email address</label>
//                 <input type="email" id="email" name="email" autocomplete="email" required/>
//             </div>
            
//             <div className="input-group">
//                 <label for="password">Password</label>
//                 <input type="password" id="password" name="password" autocomplete="current-password" required/>
//             </div>
            
//             <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                     <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4"/>
//                     <label for="remember-me" className="ml-2">Remember me</label>
//                 </div>
//                 <div className="text-sm">
//                     <a href="/forgot-password" className="text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
//                 </div>
//             </div>
            
//             <button type="submit" id="submit-btn">Sign in</button>
//         </form>
//     </div>

//   )
// }


import React from 'react'

export default function Login() {
  return (
    <div>
      <nav className="bg-white shadow-md p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">EduLearn</div>
            <div className="flex items-center space-x-4">
              <div className="relative">

                <input
                  type="text"
                  placeholder="Search courses..."
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 w-64"
                />
                {/* <svg
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
                </svg> */}
                
              </div>
            </div>
            <div className="flex items-center space-x-4">
            <div className="relative">
            {/* <svg className="w-6 h-6 text-gray-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg> */}
                {/* <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                  3
                </span> */}
              </div>
            <button className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
                Instructor
              </button>
             
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Login
              </button>
              {/* <div className="relative">
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
              </div> */}
              
            </div>
          </div>
        </nav>
        
    <div className="min-h-screen flex items-center px-10" 
    style={{
        backgroundImage: `url('/edu.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-2/4 flex justify-start">
    <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10 backdrop-blur-sm w-full max-w-md">

      
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-1 text-left text-3xl font-extrabold text-white drop-shadow-md">
          Sign in to your account
        </h2>
        <p className="mt-2 text-left text-sm text-white drop-shadow-md">
          Or{' '}
          <a href="#" className="font-medium text-blue-200 hover:text-indigo-200">
            create a new account
          </a>
        </p>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md ">
        <div className="bg-white/90 py-12 px-4 shadow sm:rounded-lg sm:px-10 backdrop-blur-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white/90 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  Google
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

    

   




