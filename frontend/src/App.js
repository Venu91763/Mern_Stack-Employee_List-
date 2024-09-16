import React from "react";
import {Routes ,Route} from "react-router-dom"
import Login from "./components/Loginpage.js"
import Signup from "./components/Signup.js"
import Dashboard from "./components/Dashboard.js"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/home" element={<Dashboard/>}/>
    </Routes>
    </>
  );
}

export default App;
