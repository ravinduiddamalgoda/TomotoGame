import { useState } from 'react'

import { Route, Router, Routes } from 'react-router-dom'
import Login from './Pages/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>

  )
}

export default App
