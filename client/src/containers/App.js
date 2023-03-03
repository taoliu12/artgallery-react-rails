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
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Toolbar from '@mui/material/Toolbar';
import About from '../components/About';

import ArtworkShow from './ArtworkShow';
import ArtworkForm from './ArtworkForm'; 
import ScrollToTop from '../components/ScrollToTop';

class App extends Component {
    render() {
         return (
            <main> 
              <Toolbar id="back-to-top-anchor" />
              <div className='App' id="container">    
                 <Router>
                     <React.Fragment>
                         <NavBar /><br></br>
                         <Route exact path='/' component={Artworks} />
                         <Route exact path='/artworks' component={Artworks} />
                         <Route exact path='/artwork/new' component={ArtworkForm} />                          
                         <Route path='/artworks/:id'  component={ArtworkShow} />
                        {/* <Route exact path='/about' component={About} />
                         <Route exact path='/challenges' component={Challenges} /> */}
                     </React.Fragment>
                 </Router>
               
 
                 <ScrollToTop />
      
               
             </div>
            </main>
        )
    }
}

export default App;