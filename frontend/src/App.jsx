import React from 'react'
import Login from './pages/login'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard';
import Courses from './pages/courses';
import {Routes, Route, Navigate} from 'react-router'
import RootLayouts from './layout/RootLayouts';
import Favorite from './pages/favorite'
import First from './pages/first'
import Register from './pages/register';
import ForgotPassword from './pages/forgotpassword';
import ResetPassword from './pages/resetpassword';
import Certification from './pages/Certification';
import About from './pages/about';
import Contact from './pages/contact';
import Instructor from './pages/instructor';
import Create from './pages/create';
export default function App() {
  return (
    <div>
       
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route element={<RootLayouts/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard />} /> 
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/certification" element={<Certification/>}/>
            <Route path="/FavoritesPage"element={<Favorite/>}/>
            <Route path="/about"element={<About/>}/>
            <Route path="/contact"element={<Contact/>}/>
            <Route path="/instructor" element={<Instructor />} />
            <Route path="/create" element={<Create />} />
          </Route>
          <Route path="*" element={<h1>404-Page not found</h1>}></Route>
      <Route path="/first" element={<First />} /> 
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
      
        </Routes>
      </div>
  )
}

