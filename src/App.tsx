import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import SignUp from "./Components/Authentication/SignUp";
import SignIn from "./Components/Authentication/SignIn";
import HomePage from "./Components/HomePage";
import { Account } from "./Components/Authentication/Accounts";


import { useContext, useEffect, useState } from "react";


function App() {
  

  return (
    <div className="App">
      
      <Account>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </Account>
    </div>
  );
}

export default App;
