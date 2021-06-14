import React, { useState } from "react";
import auth from "../components/firebase";
import './login.scss';
import PhotoLogin from './assets/food03.jpg'
import { Link, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Register from './register'

const Login = ({ setSession }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      console.log("login", username, password);
      const response = await auth.signInWithEmailAndPassword(
        username,
        password
      );

      const { user } = response;
      setSession({
        isLoggedIn: true,
        currentUser: user,
      });
    } catch (error) {
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.message,
      });
    }
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };


  const handleRegister = async () => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        username,
        password,
      );

      const { user } = response;
      setSession({
        isLoggedIn: true,
        currentUser: user,
      });
    } catch (error) {
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.message,
      });
    }
  };


  return (
    <div className='container'>
        <div className ='content'>
            <div className='content-photo'>
                <img className='photo-login' src ={PhotoLogin} alt="PhotoLogin" />
            </div>
            <div className = 'content-login'>
                <h4>FOOD BUDDY</h4>
                <p>Welcome back! Login to your
                    account to view today's restaurant
                </p>
                <input type="email" placeholder="Email" onChange={handleUsername} />
                <input type="password" placeholder="password" onChange={handlePassword} />
                <a onClick={Register}>You don't have an account yet?</a>
                <button type="button" onClick={handleLogin}>Login</button>
                
            
            </div>
            
        </div>
      

      
    </div>
  );
};

export default Login;
