import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Position, Toaster } from "@blueprintjs/core";

const toaster=Toaster.create(
    {position:Position.TOP}
)

function Login() {
    let [userName,setUserName]=useState('');
    let [passWord,setPassWord]=useState('');

    let navigate=useNavigate();

    const updateUser=(event)=>{
        setUserName(event.target.value);
    }

    const updatePassWord=(event)=>{
        setPassWord(event.target.value)
    }

    const validateData=()=>{
        let formData={user_name:userName,password:passWord};
        console.log(formData);
        
        fetchData(formData)
    }

    const fetchData = async (userData) => {
        let url = `http://localhost:8080/recipe/login`;
        let options = {
            method: "POST",
            headers: {  
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData),
        };
    
        try {
            let response = await fetch(url, options);
    
            let data = await response.json();
            
            sessionStorage.setItem("user_data",{...data,password:""})

            navigate('/dashboard')
            
        } catch (error) {
           toaster.show({
            message:"Error in server",
            intent:"danger"
           })
        }
    };
    

    return (
        <div className='recipe-login'>
              <div className="recipe-login-form">
                <h2>Login</h2>
                <div>
                    <FontAwesomeIcon icon={faUser} />
                    <input type="text" placeholder='Enter your username' onChange={(event)=>updateUser(event)}/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLock}/>
                    <input type="password"  placeholder='Enter password' onChange={(event)=>updatePassWord(event)}/>
                </div>
                <button onClick={validateData}>Login</button>
                <hr />
                <p>Don't have an account <Link to="/signup">Sign-up</Link></p>
              </div>
              <div className='recipe-login-banner'></div>
        </div>
    )
}

export default Login;