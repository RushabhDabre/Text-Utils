import React, { useState } from 'react' //imrs
import './App.css';



// import { BrowserRouter, Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/Aboutt';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

// import Navbar from './components/ReactNavbar'

// import React from 'react'

function App() {
  const [mode, setMode] = useState('light'); //wether dark mode is enabled or not
  const [alert, setAlert] = useState(null); //wether dark mode is enabled or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // const toggleMode = ()=>{
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = "#212529";
  //     showAlert("Dark mode has been enabled", "success");
  //   }else{
  //     setMode('light')
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }

  const toggleModeLight = () => {
    setMode('info');
    document.body.style.backgroundColor = "white";
    showAlert("Light mode has been enabled", "success");
  }

  const toggleModeDark = () => {
    setMode('dark');
    document.body.style.backgroundColor = "#153462";
    showAlert("Dark mode has been enabled", "success");
  }

  const toggleModeDanger = () => {
    setMode('danger');
    document.body.style.backgroundColor = "#FFD4D4";
    showAlert("Danger mode has been enabled", "success");
  }

  const toggleModeSuccess = () => {
    setMode('success');
    document.body.style.backgroundColor = "#9DF1DF";
    showAlert("Success mode has been enabled", "success");
  }

  const toggleModeSky = () => {
    setMode('primary');
    document.body.style.backgroundColor = "#BCCEF8";
    showAlert("Sky mode has been enabled", "success");
  }

  return (
    <>
      {/* <React.StrictMode/> */}
      {/* <Navbar title = "TextUtiles" abouttext="About"/> */}
      {/* <Navbar /> */}
      {/* <Router> */}
      <Navbar title='TextUtils' mode={mode} toggleModeDark={toggleModeDark} toggleModeLight={toggleModeLight} toggleModeDanger={toggleModeDanger} toggleModeSuccess={toggleModeSuccess} toggleModeSky={toggleModeSky} abouttext="About" />
      <Alert alert={alert} />
      {/* <Alert alert="This is Rushabh Coding!" /> */}
      {/* <div className='Container my-3 mx-5' >
        <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
      </div > */}
      <div className='Container my-3 mx-5' >
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
      </div >
      {/* </Router> */}
    </>
  );
}

export default App;
