import React from 'react'
import Login from './components/Login/Login'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'


const App = () => {
  return (
    <div>
    
    <Routes>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </div>
  )
}

export default App