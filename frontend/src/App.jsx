import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import About from './pages/About'
import Profile from './pages/Profile'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import AppointmentBooking from './pages/AppointmentBooking'
import Footer from './components/Footer'
const App = () => {
  
  return (
   <div className='mx-4 sm:mx-[8%]'>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/appointment' element={<AppointmentBooking/>}/>
  
      </Routes>
    <Footer/>
    </div>
  )
}

export default App
