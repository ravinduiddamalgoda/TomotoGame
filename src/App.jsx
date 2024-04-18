import { useState } from 'react'

import { Route, Router, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'


function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </>

  )
}

export default App
