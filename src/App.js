import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import "./App.css";
import Login from "./components/login";
import auth from "./components/firebase";
import { Button } from "./components/Button";



function App() {
  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null,
  });

  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null,
        });
      }
    });
    return () => {
      handleAuth();
    };
  }, []);

  const handleLogout = () => {
    auth.signOut().then (response => {
      setSession({
        isLoggedIn: false,
        currentUser: null
      });
    });
  };


  return (
    <div className="App">
      {session.isLoggedIn ? (
      <header>
        <div className='Navbar-menu'>
          <Navbar/>
          <Button onClick={handleLogout}> LOG OUT</Button>
        </div>
        <SearchBox />
      </header>) : (<Login setSession={setSession} />)}
    </div>
  );
}

export default App;
