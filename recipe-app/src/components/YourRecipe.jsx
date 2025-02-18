import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function YourRecipe() {
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
    <div className='recipe-yourrecipe'>
      <nav>
        <h1>Recipe Master</h1>
        <p onClick={()=>{navigate('/dashboard ')}}>DASHBOARD</p>
        <p onClick={()=>{navigate('/favourites')}}>MY FAVOURITES</p>
        <p>ADD RECIPE</p>
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
    </div>
  )
}

export default YourRecipe
