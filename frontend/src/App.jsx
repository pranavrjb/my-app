import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import SignUp from './pages/Signup'

const App = () => {
  
  return (
   <div className='mx-4 sm:mx-[8%]'>
    <Navbar/>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
  
      </Routes>
    </div>
  )
}

export default App
