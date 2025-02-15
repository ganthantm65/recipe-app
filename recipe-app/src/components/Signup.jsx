import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
        console.log(userName,passWord);        
    }
  return (
    <div className='recipe-signup'>
      <div className="recipe-signup-form">
        <h2>Sign-up</h2>
        <div>
            <FontAwesomeIcon icon={faUser}/>
            <input type="text" placeholder='Enter your username' onClick={(event)=>updateUser(event)}/>
        </div>
        <div>
            <FontAwesomeIcon icon={faLock}/>
            <input type="password"  placeholder='Set password' onClick={(event)=>updatePassWord(event)}/>
        </div>
        <button>Sign up</button>
        <hr />
        <p>Already have an account <Link to="/login">login</Link></p>
      </div>
      <div className='recipe-signup-banner'></div>
    </div>
  )
}

export default Signup
