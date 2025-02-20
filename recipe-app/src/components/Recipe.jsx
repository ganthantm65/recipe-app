import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Position, Toaster } from '@blueprintjs/core';

const toaster=Toaster.create({
  position:Position.TOP
})

function Recipe() {
  let userData=JSON.parse(sessionStorage.getItem("user_data"))
  
  let [favourites, setFavourites] = useState(userData?.favs || []);

  let [review,setReview]=useState();
  
  let navigate=useNavigate();

  let location=useLocation();
  
  let recipeData=location.state?.recipe;

  let [searchValue,setSearchValue]=useState("");

  let [isClicked,setIsClicked]=useState(false);

  const updateSeachValue=(event)=>{
    setSearchValue(event.target.value)
  }

  const updateReview=(event)=>{
    setReview(event.target.value);
  }

  const navigateToSearch=()=>{
    navigate('/search',{state:{searchValue:searchValue}})
  }
  const logout = () => {
    sessionStorage.removeItem("user_data");
    navigate("/login");
  };
  console.log(recipeData);
  
  const addReview=async(review,element)=>{
    let url=`http://localhost:8080/recipe/review/${element.id}`
    let options={
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        userName:userData.user_name,
        review:review
      })
    }
    try {
      let response=await fetch(url,options)

      if (response.ok) {
        toaster.show({
          message:"Review added",
          intent:"success"
        })
      }
    } catch (error) {
      toaster.show({
        message:"Error in server",
        intent:"danger"
      })
    }
  }

  const addToFavourites = async (user, favs) => {
    const updatedFavourites = [...favourites, favs];

    if (JSON.stringify(favourites) !== JSON.stringify(updatedFavourites)) {
      setFavourites(updatedFavourites);
      userData.favs = updatedFavourites;
      sessionStorage.setItem('user_data', JSON.stringify(userData));

      const url = `http://localhost:8080/recipe/favourites/${user.user_id}`;
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFavourites),
      };

      try {
        let response = await fetch(url, options);
        if (response.ok) {
          toaster.show({
            message: 'Updated successfully',
            intent: 'success',
          });
        } else {
          toaster.show({
            message: 'Failed to update favourites',
            intent: 'danger',
          });
        }
      } catch (error) {
        toaster.show({
          message: 'Error in server',
          intent: 'danger',
        });
      }
    }
  };

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
                  <p>{userData.user_name}</p>
                  <button onClick={logout}>Logout</button>
                </div>
              )
            }
        </div>
      </nav>
      <div className='recipe-view'>
            <div className='recipe-describe'>
                <img src={recipeData.image} width="400px" height="400px"/>
                <div>
                    <h2>{recipeData.recipe_name}</h2>
                    <h3>{recipeData.cuisine}</h3>
                    <h5>{recipeData.chef_name}</h5>
                    <p>{recipeData.description}</p>
                    <h5>Ingredients</h5>
                    {
                        recipeData.ingredients.map((element)=>{
                            return(
                                <li>{element}</li>
                            )
                        })
                    }
                    <h5>Steps:</h5>
                    {
                        recipeData.steps.map((element)=>{
                            return(
                                <li>{element}</li>
                            )
                        })
                    }
                    <button onClick={()=>addToFavourites(userData,recipeData)}>Add to favourites</button>
                </div>
            </div>
            <div className="recipe-review">
                    <h2>Reviews</h2>
                    <div className='recipe-add-review'>
                        <textarea placeholder='Give your review' id="" onChange={updateReview}></textarea>
                        <button onClick={()=>addReview(review,recipeData)}>Add</button>
                    </div>
                    {
                        recipeData.reviews.map((element)=>{
                            return(
                                <div>
                                    <h5>{element.userName}</h5>
                                    <p>{element.review}</p>
                                </div>
                            )
                        })
                    }
                </div>
      </div>
    </div>
  )
}

export default Recipe
