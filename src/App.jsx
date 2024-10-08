import React, { useState } from 'react'
 import Navbar from './Components/Navbar'
 import { BrowserRouter, Routes, Route } from 'react-router-dom'
 import Registration from './Pages/Registration'
// import Login from './Pages/Login'
// import Hooks from './Pages/Hooks'
import List from './Pages/List'
import Update from './Pages/Update'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/Update/:userId" element={<Update />} /> 
        <Route path="List" element={<List />} />
      </Routes>

    </BrowserRouter>

  )

}

export default App;
