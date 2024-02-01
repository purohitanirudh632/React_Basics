import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode,setmode]=useState("light")
  const togglemode= ()=>{
    if(mode==="light")
    {
      setmode("dark")
      document.body.style.backgroundColor = "#09224e";
    }
    else{
      setmode("light")
      document.body.style.backgroundColor = "#d2e5d2f0";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" togglemode={togglemode} mode={mode}/>
      <Routes>
      <Route path="/"element={<Textform mode={mode}/>}/>
      <Route path="/about" element={<About mode={mode}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
