import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Profile from './pages/Profile'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import AppointmentBooking from './pages/AppointmentBooking'
import Footer from './components/Footer'
import CompanyRegistration from './pages/CompanyRegistration'
const App = () => {
  
  return (
   <div className='mx-4 sm:mx-[8%]'>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/company' element={<CompanyRegistration/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/appointment' element={<AppointmentBooking/>}/>
  
      </Routes>
    <Footer/>
    </div>
  )
}

export default App
