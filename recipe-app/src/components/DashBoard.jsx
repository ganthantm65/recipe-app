import React, { useEffect } from 'react'
import { useState } from 'react'
import '/home/ganthan/Documents/projects/RecipeApp/recipe-app/src/App.css'

function DashBoard() {
  let [recipeData,setRecipeData]=useState([]);

  useEffect(()=>{
    fetchData()    
  },[])
  async function fetchData() {
      try{
        const url='http://localhost:8080/recipe';

        const response=await fetch(url,{
          method:"GET",
          header:{
            'Content-Type':'application/json'
          }
        })
        const data=await response.json();
        setRecipeData(data);
      }catch(error){
        console.log(error);
        
      }
  }
  console.log(recipeData);
  
  return (

      <div className='recipe-dashboard'>
          <nav>
              <div>
                  <h1>Recipe App</h1>
              </div>
              <div className='recipe-navigators'>
                <p>DASHBOARD</p>
                <p>MY FAVOURITES</p>
                <p>ADD RECIPE</p>
              </div>
          </nav>
          <div className="recipe-container">
            <div className="recipe-banner">
            
            </div>
            <div className="recipe">
              {
                recipeData.map((element)=>{
                  return(
                    <div key={element.id}>
                      <img 
                        src={element.image.startsWith('http') ? element.image : `http://localhost:8080${element.image}`} 
                        width="200px" 
                        height="200px"
                        alt={element.recipe_name} 
                        onError={(e) => e.target.src = 'https://via.placeholder.com/200'} 
                      />
                      <h3>{element.recipe_name}</h3>
                      <h4>{element.cuisine }</h4>
                    </div>
                  )
                })
              }
            </div>
        </div>
      </div>
  )
}

export default DashBoard