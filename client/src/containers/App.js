import React, { Component, useState, useEffect } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import PropTypes from 'prop-types';
import { StyledEngineProvider } from '@mui/material/styles';

import './App.scss';
import Artworks from './Artworks';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Toolbar from '@mui/material/Toolbar';
import About from '../components/About';

import ArtworkShow from './ArtworkShow';
import ArtworkForm from './ArtworkForm'; 
import ScrollToTop from '../components/ScrollToTop';
import SignupForm from './SignupForm'


function App() {
    const [ loggedInUser , setLoggedInUser ] = useState( null )
    
    return (
        <main> 
            <Toolbar id="back-to-top-anchor"/>
            <div className='App' id="container">    
                <NavBar /><br></br>
                <Routes>
                    <React.Fragment>
                        <Route path='/signup' element={<SignupForm setLoggedInUser={setLoggedInUser}/>}/>  
                        <Route exact path='/' render={() => <Navigate to="/artworks" />} />
                        <Route exact path='/artworks' component={Artworks} />
                        <Route exact path='/artwork/new' component={ArtworkForm} />                          
                        <Route path='/artworks/:id'  component={ArtworkShow} />
                    </React.Fragment>
                </Routes>
                <ScrollToTop />
            </div>
        </main>
    )
}

export default App;