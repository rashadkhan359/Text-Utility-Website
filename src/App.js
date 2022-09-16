import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

import Alert from './components/Alert';

let name = [["firstName", "Rashad"],["lastName", "Khan"]];
function App() {
  const [mode, setMode] = useState('light');
  const [buttonText, setButtonText] = useState('Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = ()=> {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#262727';
      showAlert("Dark Mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  };

 

  return (
    <>
    {/* <Navbar title="We will Do it One day" aboutText="About to Do it"/> */}
    {/* <Navbar title="We will Do it One day"/> */}
   
    <Navbar mode={mode} toggleMode={toggleMode}/>
    
    <Alert alert={alert}/>

    <div className="container">
      <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
      <About mode={mode}></About>
    </div>
    
    </>
  );
}

export default App;
