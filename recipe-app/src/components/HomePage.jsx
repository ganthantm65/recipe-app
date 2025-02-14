import React from 'react'
import '/home/ganthan/Documents/projects/RecipeApp/recipe-app/src/App.css'
function HomePage() {
  return (
    <div className='recipe-home-page'>
        <nav>
            <div className="logo">
                <h1>Recipe Master</h1>
            </div>
            <div>
                <button className='recipe-sign-up'>Sign Up</button>
                <button className='recipe-login-btn'>Login</button>
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