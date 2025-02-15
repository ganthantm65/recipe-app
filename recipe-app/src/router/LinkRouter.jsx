import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage.jsx'
import DashBoard from '../components/DashBoard.jsx'
import Login from '../components/Login.jsx'
import Signup from '../components/Signup.jsx'

function LinkRouter() {
  return (
    <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/dashboard' element={<DashBoard/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
  )
}

export default LinkRouter