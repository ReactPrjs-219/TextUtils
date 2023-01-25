import { useState } from 'react';
import './App.css';
//import About from './components/About.js';
import Navbar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500); 
  }
 
  const toggleMode = () =>{
    console.log("Toggle clicked");
     if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled", "success");
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode has been enabled", "success");
    }
  }
  return (
    <>
    <Navbar title="textUtils" home="Home" about="About US" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <TextForm showAlert={showAlert} heading = "Enter text here..." mode={mode}/>
    {/*<About /> */}
    </div>    
    </>
  );
}

export default App;
