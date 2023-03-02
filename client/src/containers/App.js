import React, { Component, useState, useEffect } from 'react';


import './App.scss';
import Artworks from './Artworks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';

import About from '../components/About';

import ArtworkShow from './ArtworkShow';
import ArtworkForm from './ArtworkForm'; 

class App extends Component {
    render() {
         return (
            <main> 
              <div className='App' id="container">                 
              <p className='site-title'>React Art Gallery</p>
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
             </div>
            </main>
        )
    }
}

export default App;