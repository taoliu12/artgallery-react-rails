import React, { Component, useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export default function DarkModeButton() {
    const [ darkMode, setDarkMode ] = React.useState(false)
    const [ darkModeText, setDarkModeText ] = React.useState("Toggle Dark")
    
    React.useEffect(() => {
      const body = document.body
      // const toggle = document.querySelector('.toggle-inner')
      
      // If dark mode is enabled - adds classes to update dark-mode styling.
      // Else, removes and styling is as normal.
      if( darkMode === true ) {
        body.classList.add('dark-mode')
        setDarkModeText("Go Light")
    
      } else {
        body.classList.remove('dark-mode')
        setDarkModeText("Go Dark")
      }
    }, [darkMode])
    
    return (
      <div className='dark-mode-div'> 
        <IconButton sx={{ ml: 1 }} onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)} color="inherit">
         <Brightness4Icon />
        </IconButton>
      </div>
    )
}