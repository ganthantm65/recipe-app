import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Toaster, Position } from '@blueprintjs/core';

const toaster = Toaster.create({ position: Position.TOP });

function SearchResult() {
  let userData = JSON.parse(sessionStorage.getItem('user_data'));

  let [favourites, setFavourites] = useState(userData?.favs || []);

  const location = useLocation();
  let value = location.state?.searchValue;

  let navigate = useNavigate();

  let [searchResults, setSearchResults] = useState([]);
  let [searchValue, setSearchValue] = useState(value);
  let [isClicked, setIsClicked] = useState(false);

  const logout = () => {
    sessionStorage.removeItem("user_data");
    navigate("/login");
  };  

  const updateSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const navigateToSearch = () => {
    navigate('/search', { state: { searchValue } });
  };

  const navigateToDashBoard = () => {
    navigate('/dashboard');
  };

  const updateClicked = () => {
    setIsClicked(!isClicked);
  };

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

  useEffect(() => {
    if (searchValue) {
      fetchData(searchValue);
    }
  }, [searchValue]); 

  const fetchData = async (searchValue) => {
    let url = `http://localhost:8080/recipe/search/${searchValue}`;
    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      let data = await response.json();
      setSearchResults(data);
    } catch (error) {
      toaster.show({
        message: 'Error in server',
        intent: 'danger',
      });
    }
  };

  return (
    <div className='recipe-searchresult'>
      <nav>
        <h1>Recipe Master</h1>
        <p onClick={navigateToDashBoard}>DASHBOARD</p>
        <p onClick={()=>{navigate('/favourites')}}>MY FAVOURITES</p>
        <p onClick={()=>{navigate('/yourrecipe')}}>ADD RECIPE</p>
        <div className='recipe-search'>
          <input type='text' placeholder='Search recipe' onChange={updateSearchValue} />
          <button onClick={navigateToSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className='recipe-user' onClick={updateClicked}>
          <FontAwesomeIcon icon={faUser} />
          {isClicked && (
            <div className='user-dropdown'>
              <p>{userData?.user_name || 'Guest'}</p>
              <button onClick={logout}>Logout</button>
            </div>
          )}
        </div>
      </nav>
      <div className='recipe-results'>
        <div className='recipes'>
          {searchResults.map((element) => {
            return (
              <div key={element.id} className='recipe' onClick={()=>{navigate('/recipe',{state:{recipe:element}})}}>
                <img src={element.image} width='180px' height='180px' />
                <div className='content'>
                  <h2>{element.recipe_name}</h2>
                  <h5>{element.chef_name}</h5>
                  <p>{element.description}</p>
                  <button onClick={(event) => {
                    event.stopPropagation();
                    addToFavourites(userData, element)}}>
                      Add to Favourites
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
