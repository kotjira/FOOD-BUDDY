import React, { useState } from "react";
import auth from "../components/firebase";
import './register.css';
import PhotoRegister from './assets/food05.jpg'

const Register =({setSession}) => {
    const [nameuser, setNameuser] = useState("");
    const [lastname, setLastname] = useState("");
    const [gender, setGender] = useState("");
    const [numderPhone, setNumderPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
          const response = await auth.createUserWithEmailAndPassword(
            nameuser,
            lastname,
            gender,
            numderPhone,
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

      const handleNameuser = (event) => {
        setNameuser(event.target.value);
      };
      const handleLastname = (event) => {
        setLastname(event.target.value);
      };
      const handleGender = (event) => {
        setGender(event.target.value);
      };
      const handleNumderPhone = (event) => {
        setNumderPhone(event.target.value);
      };
      const handleUsername = (event) => {
        setUsername(event.target.value);
      };
      const handlePassword = (event) => {
        setPassword(event.target.value);
      };

      return (
        <div className='container'>
            <div className ='content'>
                <div className='content-photo'>
                    <img className='photo-login' src ={PhotoRegister} alt="PhotoLogin" />
                </div>
                <div className = 'content-login'>
                    <h4>FOOD BUDDY</h4>
                    <p>Welcome back! Login to your
                        account to view today's restaurant
                    </p>
                    
                    <input type="nameuser" placeholder="Name" onChange={handleNameuser} />
                    <input type="lastname" placeholder="Last Name" onChange={handleLastname} />
                    <input type="gender" placeholder="Gender" onChange={handleGender} />
                    <input type="numderPhone" placeholder="Phone Number" onChange={handleNumderPhone} />
                    <input type="email" placeholder="Email" onChange={handleUsername} />
                    <input type="password" placeholder="password" onChange={handlePassword} />
                    <button type="button" onClick={handleRegister}>Confirm</button>
                    
                
                </div>
                
            </div>
          
    
          
        </div>
      );
}

export default Register;