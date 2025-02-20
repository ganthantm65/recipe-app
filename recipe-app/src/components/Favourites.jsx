import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Position, Toaster } from '@blueprintjs/core';

function Favourites() {
    const [userData, setUserData] = useState({});
    const [favourites, setFavourites] = useState([]);
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const userDataFromSession = sessionStorage.getItem("user_data");
        if (userDataFromSession) {
            try {
                setUserData(JSON.parse(userDataFromSession));
            } catch (e) {
                console.error("Error parsing user data", e);
            }
        } else {
            setUserData({});
        }
    }, []);

    useEffect(() => {
        const favouritesFromSession = sessionStorage.getItem("user_data");
        if (favouritesFromSession) {
            try {
                const favouritesData = JSON.parse(favouritesFromSession)?.favs;
                setFavourites(favouritesData || []);
            } catch (e) {
                console.error("Error parsing favourites data", e);
            }
        } else {
            setFavourites([]);
        }
    }, []);

    const updateSearchValue = (event) => {
        setSearchValue(event.target.value);
    }

    const logout = () => {
        sessionStorage.removeItem("user_data");
        navigate("/login");
      };      

    const navigateToSearch = () => {
        navigate('/search', { state: { searchValue: searchValue } });
    }

    const updateClicked = () => {
        setIsClicked(!isClicked);
    }

    const deleteData = (favourite) => {
        const updatedFavourites = favourites.filter((element) => element.id !== favourite.id);
    
        setFavourites(updatedFavourites);  
        sessionStorage.setItem("user_data", JSON.stringify({ ...userData, favs: updatedFavourites })); 

        fetchData(updatedFavourites)
        console.log(favourites);
        
    };
    
    const fetchData=async(updatedData)=>{
        let url=`http://localhost:8080/recipe/favourites/${userData.user_id}`
        let options={
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updatedData)
        }

        try {
            let response=await fetch(url,options);

            if (response.ok) {
                const toaster=Toaster.create({
                    position:Position.TOP
                })
                toaster.show({
                    message:"Deleted successfully",
                    intent:"success"
                })
            }else{
                console.log(response.statusText);
                
            }
        } catch (error) {
            const toaster=Toaster.create({
                position:Position.TOP
            })
            toaster.show({
                message:"Error in server",
                intent:"danger"
            })
        }        
    }

    return (
        <div className='recipe-dashboard'>
            <nav>
                <h1>Recipe Master</h1>
                <p onClick={() => { navigate('/dashboard') }}>DASHBOARD</p>
                <p onClick={() => { navigate('/favourites') }}>MY FAVOURITES</p>
                <p onClick={() => { navigate('/yourrecipe') }}>ADD RECIPE</p>
                <div className="recipe-search">
                    <input type="text" placeholder='Search recipe' onChange={updateSearchValue} />
                    <button onClick={navigateToSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className='recipe-user' onClick={updateClicked}>
                    <FontAwesomeIcon icon={faUser} />
                    {
                        isClicked && (
                            <div className='user-dropdown'>
                                <p>{userData?.user_name || "Guest"}</p>
                                <button onClick={logout}>Logout</button>
                            </div>
                        )
                    }
                </div>
            </nav>
            <div className="recipe-favourites">
              {
                favourites.map((element)=>{
                  return(
                    <div>
                      <img src={element.image} width="450px" height="450px" />
                      <div className="recipe-favourites-content">
                        <h2>{element.recipe_name}</h2>
                        <h3>{element.chef_name}</h3>
                        <h4>Description:</h4>
                        <p>{element.description}</p>
                        <h4>Steps:</h4>
                        {element.steps.map((step,index)=>{
                          return(
                            <ul key={index}>
                              <li>{step}</li>
                            </ul>
                          )
                        })}
                        <button onClick={()=>deleteData(element)}>Delete</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
        </div>
    );
}

export default Favourites;
