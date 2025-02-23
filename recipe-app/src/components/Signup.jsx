import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Position, Toaster } from '@blueprintjs/core';

const toaster=Toaster.create({
  position:Position.TOP
})

function Signup() {
    let [userName,setUserName]=useState('');
    let [passWord,setPassWord]=useState('');

    const updateUser=(event)=>{
        setUserName(event.target.value);
    }
    const updatePassWord=(event)=>{
        setPassWord(event.target.value)
    }
    const updateFormData=()=>{
      const userData={user_name:userName,password:passWord}  
      console.log(userData);
      fetchData(userData);
    }
    const fetchData = async (userData) => {
      let url = `http://localhost:8080/recipe/signup`;
      let option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      };
    
      try {
        let response = await fetch(url, option);
    
        if (response.ok) {
          toaster.show({
            message: "Account is created",
            intent: "success",
            icon: "tick-circle",
          });
        } else {
          toaster.show({
            message: "Invalid username or password",
            intent: "danger",
            icon: "error",
          });
        }
      } catch (error) {
        toaster.show({
          message: "Network error. Please try again.",
          intent: "danger",
          icon: "warning-sign",
        });
      }
    };    
  return (
    <div className='recipe-signup'>
      <div className="recipe-signup-form">
        <h2>Sign-up</h2>
        <div>
            <FontAwesomeIcon icon={faUser}/>
            <input type="text" placeholder='Enter your username' onChange={(event)=>updateUser(event)}/>
        </div>
        <div>
            <FontAwesomeIcon icon={faLock}/>
            <input type="password"  placeholder='Set password' onChange={(event)=>updatePassWord(event)}/>
        </div>
        <button onClick={updateFormData}>Sign up</button>
        <hr />
        <p>Already have an account <Link to="/login">login</Link></p>
      </div>
      <div className='recipe-signup-banner'></div>
    </div>
  )
}

export default Signup
