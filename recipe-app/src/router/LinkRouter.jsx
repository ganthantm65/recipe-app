import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage.jsx'
import DashBoard from '../components/DashBoard.jsx'
import Login from '../components/Login.jsx'
import Signup from '../components/Signup.jsx'
import SearchResult from '../components/SearchResult.jsx'
import Favourites from '../components/Favourites.jsx'
import YourRecipe from '../components/YourRecipe.jsx'
import Recipe from '../components/Recipe.jsx'

function LinkRouter() {
  return (
    <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/dashboard' element={<DashBoard/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/search' element={<SearchResult/>}/>
            <Route path='/favourites' element={<Favourites/>}></Route>
            <Route path='/yourrecipe' element={<YourRecipe/>}></Route>
            <Route path='/recipe' element={<Recipe/>}></Route>
    </Routes>
  )
}

export default LinkRouter