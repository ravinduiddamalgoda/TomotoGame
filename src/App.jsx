import { useState } from 'react'

import { Route, Router, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Game from './Pages/Game'

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/game' element={<Game/>} ></Route>
      </Routes>
    </>

  )
}

export default App
