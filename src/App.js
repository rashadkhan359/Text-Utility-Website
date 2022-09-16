import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';


let name = [["firstName", "Rashad"],["lastName", "Khan"]];
function App() {
  const [mode, setMode] = useState('light');
  const [buttonText, setButtonText] = useState('Dark Mode');

  const toggleMode = ()=> {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#262727';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };
  return (
    <>
    {/* <Navbar title="We will Do it One day" aboutText="About to Do it"/> */}
    <Navbar mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar title="We will Do it One day"/> */}
    <div className="container">
      <TextForm heading="Enter the text to analyze" mode={mode}/>
      <About mode={mode}></About>
    </div>
    
    </>
  );
}

export default App;
