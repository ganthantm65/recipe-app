import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Position, Toaster } from '@blueprintjs/core';

function YourRecipe() {
  let userData = JSON.parse(sessionStorage.getItem("user_data")) || { user_name: "Guest" };
  let navigate = useNavigate();

  let [searchValue, setSearchValue] = useState("");
  let [isClicked, setIsClicked] = useState(false);
  let [numIngredients, setNumIngredients] = useState(0);
  let [numSteps, setNumSteps] = useState(0);

  let [recipeName,setRecipeName]=useState("");
  let [chefName,setChefName]=useState("");
  let [cuisine,setCuisine]=useState("");
  let [imageLink,setImageLink]=useState("");
  let [description,setDescription]=useState("");
  let [ingredients,setIngredients]=useState([]);
  let [steps,setSteps]=useState([])

  const updateRecipeName=(event)=>{
    setRecipeName(event.target.value);
  }

  const updateChefName=(event)=>{
    setChefName(event.target.value);
  }

  const updateCuisine=(event)=>{
    setCuisine(event.target.value);
  }

  const updateImage=(event)=>{
    setImageLink(event.target.value);
  }

  const updateIngredients = (event, index) => {
    let updatedIngredients = [...ingredients];
    updatedIngredients[index] = event.target.value;
    setIngredients(updatedIngredients);
  };
  
  const updateSteps = (event, index) => {
    let updatedSteps = [...steps];
    updatedSteps[index] = event.target.value;
    setSteps(updatedSteps);
  };
  
  const updateDescription=(event)=>{
    setDescription(event.target.value)
  }

  const updateSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const navigateToSearch = () => {
    navigate('/search', { state: { searchValue: searchValue } });
  };

  const updateClicked = () => {
    setIsClicked(!isClicked);
  };

  const sendRecipe=()=>{
    let recipeData={
      recipe_name:recipeName,
      chef_name:chefName,
      cuisine:cuisine,
      description:description,
      image:imageLink,
      ingredients:ingredients,
      steps:steps,
      reviews:[]
    }
    console.log(recipeData);
    
    fetchData(recipeData)
  }
  const logout = () => {
    sessionStorage.removeItem("user_data");
    navigate("/login");
  };
  
  const fetchData=async(recipeData)=>{
    let url="http://localhost:8080/recipe"
    let options={
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(recipeData)
    }
    try {
      let response=await fetch(url,options)
      if (response.ok) {
        const toaster=Toaster.create({position:Position.TOP})
        toaster.show({
          message:"Added successfully",
          intent:"success"
        })
      }
    } catch (error) {
    const toaster=Toaster.create({position:Position.TOP})
      toaster.show({
        message:"Error in server",
        intent:"danger"
      })
    }
  }
  return (
    <div className='recipe-yourrecipe'>
      <nav>
        <h1>Recipe Master</h1>
        <p onClick={() => navigate('/dashboard')}>DASHBOARD</p>
        <p onClick={() => navigate('/favourites')}>MY FAVOURITES</p>
        <p>ADD RECIPE</p>
        <div className="recipe-search">
          <input type="text" placeholder='Search recipe' onChange={updateSearchValue} />
          <button onClick={navigateToSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className='recipe-user' onClick={updateClicked}>
          <FontAwesomeIcon icon={faUser} />
          {isClicked && (
            <div className='user-dropdown'>
              <p>{userData.user_name}</p>
              <button onClick={logout}>Logout</button>
            </div>
          )}
        </div>
      </nav>

      <div className="recipe-addrecipe">
        <h2>Add Recipe</h2>
        <div>
          <div className="recipe-addrecipe-form1">
            <label>Recipe Name</label>
            <input type="text" placeholder='Eg. Veg Sandwich' onChange={(event)=>updateRecipeName(event)}/>
            <label>Chef Name</label>
            <input type="text" placeholder='Eg. Gordon Ramsay' onChange={(event)=>updateChefName(event)}/>
            <label>Cuisine</label>
            <input type="text" placeholder='Eg. Italian' onChange={(event)=>updateCuisine(event)}/>
            <label>Image Link</label>
            <input type="text" placeholder='Eg.http://www.name.com' onChange={(event)=>updateImage(event)}/>
            <label>Description</label>
            <textarea placeholder='Eg. Describe the recipe...' onChange={(event)=>updateDescription(event)}></textarea>
          </div>
          <div className='recipe-addrecipe-form2'>
            <label>No of Ingredients</label>
            <input
              type="number"
              placeholder='Eg. 7'
              onChange={(e) => setNumIngredients(Number(e.target.value))}
            />
            {Array.from({ length: numIngredients }).map((_, index) => (
              <div key={index}>
                <label>Ingredient {index + 1}</label>
                <input type="text" placeholder={`Eg. Ingredient ${index + 1}`} onChange={(event)=>updateIngredients(event,index)} />
              </div>
            ))}
          </div>

          <div className='recipe-addrecipe-form3'>
            <label>No of Steps</label>
            <input
              type="number"
              placeholder='Eg. 7'
              onChange={(e) => setNumSteps(Number(e.target.value))}
            />
            {Array.from({ length: numSteps }).map((_, index) => (
              <div key={index}>
                <label>Step {index + 1}</label>
                <textarea placeholder={`Eg. Describe step ${index + 1}`} onChange={(event)=>updateSteps(event,index)}></textarea>
              </div>
            ))}
          </div>
        </div>
        <button onClick={sendRecipe}>Add recipe</button>
      </div>
    </div>
  );
}

export default YourRecipe;
