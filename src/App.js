import { useState } from 'react';
import './App.css';
//import About from './components/About.js';
import Navbar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () =>{
    console.log("Toggle clicked");
     if(mode === "dark"){
      console.log(mode);
      setMode("light");
      document.body.style.backgroundColor="white";
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor="grey";
    }
  }
  return (
    <>
    <Navbar title="textUtils" home="Home" about="About US" mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
    <TextForm heading = "Enter text here..." mode={mode}/>
    {/*<About /> */}
    </div>
    
    </>
  );
}

export default App;
