import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function DashBoard() {
  let userData=JSON.parse(sessionStorage.getItem("user_data"))
  console.log(userData);
  
  let navigate=useNavigate();

  let [searchValue,setSearchValue]=useState("");

  let [isClicked,setIsClicked]=useState(false);

  const updateSeachValue=(event)=>{
    setSearchValue(event.target.value)
  }

  const navigateToSearch=()=>{
    navigate('/search',{state:{searchValue:searchValue}})
  }

  const updateClicked=()=>{
    setIsClicked(!isClicked);
  }
  
  return (
    <div className='recipe-dashboard'>
      <nav>
        <h1>Recipe Master</h1>
        <p onClick={()=>{navigate('/dashboard ')}}>DASHBOARD</p>
        <p onClick={()=>{navigate('/favourites')}}>MY FAVOURITES</p>
        <p onClick={()=>{navigate('/yourrecipe')}}>ADD RECIPE</p>
        <div className="recipe-search">
            <input type="text" placeholder='Search recipe' onChange={(event)=>updateSeachValue(event)}/>
            <button onClick={navigateToSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
          </div>
          <div className='recipe-user' onClick={updateClicked}>
            <FontAwesomeIcon icon={faUser}/>
            {
              isClicked && (
                <div className='user-dropdown'>
                  <p>{userData.user_name || "Guest"}</p>
                  <button>Logout</button>
                </div>
              )
            }
        </div>
      </nav>
      <div className="recipe-container">
        <div className="recipe-topbar">
          
        </div>
        <div className="recipe-about">
          <div>
            <h2>Make your dish</h2>
            <h2>in your way</h2>
          </div>
        </div>
        <h1>Cuisines</h1>
        <div className="recipe-cuisines">
        {[
            { name: "Indian cuisine", img: "https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/l-intro-1733153567.jpg" },
            { name: "French cuisine", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2LINArfis4cqDnYhYurrGuw6nNCRPO1VXlQ&s" },
            { name: "Chinese cuisine", img: "https://images-cdn.welcomesoftware.com/Zz0zMDM2ZWM5NmQ5YjAxMWViODcwYmI5NWUzYmNlYzM0NA==/Zz01NTg2OGYyMmQ4MmYxMWViOGM4NjRkNDA4MzFmNzQ4OA%3D%3D.jpg?width=1366" },
            { name: "Italian cuisine", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYruj-zEr-MkMMpcfA6AnY6m_Qg-PJCTgXg&s" },
            { name: "Japanese Cuisine", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrPuPo2fLeCNgegg8nWihEOI8BEAXRoWeYA&s" },
            { name: "American Cuisine", img: "https://ik.imagekit.io/shortpedia/Voices/wp-content/uploads/2021/10/american-cuisine-1200x900@1000worldrecipes.jpg" }
          ].map((cuisine, index) => (
            <div key={index}>
              <img src={cuisine.img} width="350px" height="250px" alt={cuisine.name} />
              <h3>{cuisine.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default DashBoard;
