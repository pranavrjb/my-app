import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import BookAppointment from './pages/BookAppointment'
import DoctorSearch from './pages/DoctorSearch'
import PatientDashboard from './components/Dashboard/PatientDashboard'
import DoctorDashboard from './components/Dashboard/DoctorDashboard'
import HomePage from './pages/HomePage'

const App = () => {
  
  return (
   <div className='mx-4 sm:mx-[8%]'>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      <Route path='/booking' element={<BookAppointment/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
        <Route path="/patients/dashboard" element={<PatientDashboard />} />
        <Route path="/doctors/dashboard" element={<DoctorDashboard />} />
  
      </Routes>
    </div>
  )
}

export default App
