import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function SignupForm({setLoggedInUser}) {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [ userToLogin , updateUserToLoginInfo ] = useState({username: "", password: ""});
    const [customError, setCustomError] = useState('')
    const navigate = useNavigate();
    
      const handleLoginSubmit = ( userToLogin ) =>{ 
        fetch( "/signup", 
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( {user: userToLogin} )
          } 
        )
        .then( r => r.json() )
        .then( user => {              
            if (!user.error) {
                setLoggedInUser( user ) 
                navigate("/posts")     
            } else {
                setLoggedInUser( null ); 
                setCustomError("Invalid username or password")
                reset({username: '', password: ''})     
            }
            }) 
      }
    
      const handleLogout =()=>{
        fetch(  "/logout" , { method: "DELETE" }  )
        .then( r => r.json() )
        .then( deleteResponse =>{
          //// Pesimistic Rendering 
            setLoggedInUser( null )
          //// Pesimistic Rendering 
        })
      }
    
      return (
        <>
        <h1>Sign Up</h1>
        <div className="login-form-container">
          <form onSubmit={handleSubmit(handleLoginSubmit)}>
            <div className="input-group">                  
                  <p>{errors.username && <span className='formError'>{errors.username?.message}</span>}
                  {errors.username?.type == 'minLength' && <span role="alert">Username must be atleast 4 characters:</span>}
                  {errors.username?.type == 'maxLength' && <span role="alert">Username must be less than 15 characters:</span>}
                  </p>

                <input           
                    type='text'       
                    name="username"
                    className="login-input"
                    placeholder="Username*"
                      {...register("username", { required: "Username is required:",  maxLength: 15, minLength: 4 })}
                />
            </div>

            <div className="input-group">               
                  <p>{errors.password && <span className='formError'>{errors.password?.message}</span>}
                  {errors.password?.type == 'minLength' && <span role="alert">Password must be atleast 4 characters:</span>}
                  {errors.password?.type == 'maxLength' && <span role="alert">Password must be less than 15 characters:</span>}
                  </p>
                <input 
                    type="password" 
                    name="password"
                    className="login-input"
                    placeholder="Password*"
                    {...register("password", { required: "Password is required:", maxLength: 15, minLength: 4 })}
                />
            </div>
            <input type="submit" className="login-btn"/>
            <p> {customError}</p>
          </form>
        </div>
      </> 
      );
     }