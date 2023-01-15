

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, { useState } from 'react';
import Alert from './components/Alert';

 
function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
   
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    
    <Alert alert={alert}/>
    <div className="container my-3">
    
            <TextForm showAlert={showAlert} heading="Enter Text Here" mode={mode}/>
          
    </div>
    
    </> 
  );
}

export default App;
