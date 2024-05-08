import React from 'react'
import { useState } from 'react';

function ModesToggler() {
  const [inputMode, setInputMode]=useState('false');
  // let darkModeOn=true;
  const darkMode=<h1>Dark mode is on</h1>
  const lightMode=<h1>Light mode is on</h1>
  
  function handleChange(e) { 
    setText(e.target.value); 
  } 
  const handleClick=()=>{
      darkModeOn=!darkModeOn;
      if(darkModeOn==true)
          {
              console.log("Dark Mode is On")
              // <h1>
          }
      else{
          console.log("Light Mode is on")
      }
  }
  return (
    <div>
      {darkModeOn ? darkMode:lightMode}
      <button onClick={handleClick}>
        Toggle mode
      </button>
    </div>
  )
}

export default ModesToggler
