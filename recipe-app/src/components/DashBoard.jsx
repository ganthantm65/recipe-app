import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import 'E:/projects/recipe-app/recipe-app/src/App.css';

function DashBoard() {
  
  return (
    <div className='recipe-dashboard'>
      <nav>
        <h1>Recipe App</h1>
        <p>DASHBOARD</p>
        <p>MY FAVOURITES</p>
        <p>ADD RECIPE</p>
      </nav>
      <div className="recipe-container">
        <div className="recipe-topbar">
          <h1>Recipe Master</h1>
          <div className="recipe-search">
            <input type="text" placeholder='Search recipe'/>
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
          </div>
          <div className='recipe-user'></div>
        </div>
        <div className="recipe-about">
          <div>
            <h2>Make your dish</h2>
            <h2>in your way</h2>
          </div>
        </div>
        <h1>Cuisines</h1>
        <div className="recipe-cuisines">
          <div>
            <img 
              src="https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/l-intro-1733153567.jpg" 
              width="350px"
              height="250px"
             />
             <h3>Indian cuisine</h3>
          </div>
          <div>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2LINArfis4cqDnYhYurrGuw6nNCRPO1VXlQ&s" 
            width="350px"
            height="250px"
            />
            <h3>French cuisine</h3>
          </div>
          <div>
            <img 
            src="https://images-cdn.welcomesoftware.com/Zz0zMDM2ZWM5NmQ5YjAxMWViODcwYmI5NWUzYmNlYzM0NA==/Zz01NTg2OGYyMmQ4MmYxMWViOGM4NjRkNDA4MzFmNzQ4OA%3D%3D.jpg?width=1366" 
            width="350px"
            height="250px"
            />
            <h3>Chinese cuisine</h3>
          </div>
          <div>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYruj-zEr-MkMMpcfA6AnY6m_Qg-PJCTgXg&s" 
            width="350px"
            height="250px"
            />
            <h3>Italian cuisine</h3>
          </div>
          <div>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrPuPo2fLeCNgegg8nWihEOI8BEAXRoWeYA&s" 
            width="350px"
            height="250px"
            />
            <h3>Japanese Cuisine</h3>
          </div>
          <div>
            <img 
            src="https://ik.imagekit.io/shortpedia/Voices/wp-content/uploads/2021/10/american-cuisine-1200x900@1000worldrecipes.jpg" 
            width="350px"
            height="250px"
            />
            <h3>American Cuisine</h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DashBoard;
