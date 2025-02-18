import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import { useNavigate } from 'react-router-dom';

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

    const navigateToSearch = () => {
        navigate('/search', { state: { searchValue: searchValue } });
    }

    const updateClicked = () => {
        setIsClicked(!isClicked);
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
                                <button>Logout</button>
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
                        <button>Delete</button>
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
