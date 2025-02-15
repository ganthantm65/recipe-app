import React, { useState } from 'react'
import 'E:/projects/recipe-app/recipe-app/src/App.css'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='recipe-home-page'>
        <nav>
            <div className="recipe-logo">
                <h1>Recipe Master</h1>
            </div>
            <div>
                <button className='recipe-sign-up'><Link to='/signup'>Sign Up</Link></button>
                <button className='recipe-login-btn'><Link to='/login'>Login</Link></button>
            </div>
        </nav>
        <div className='recipe-home-content'>
            <h1>Enjoy your bread</h1>
            <p>Discover, save, and share delicious recipes with ease! <strong>RecipeMaster</strong> offers step-by-step instructions, a variety of dishes, and an easy way to organize your favorite meals. Cook smarter and tastier today!</p>
        </div>
    </div>
  )
}

export default HomePage