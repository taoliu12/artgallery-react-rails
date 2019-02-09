import React, { Component } from 'react';
import './App.css';
import Artworks from './Artworks';
import ArtworkForm from './ArtworkForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>React Art Gallery</h1>
                <Router>
                    <React.Fragment>
                        <NavBar />
                        <Route exact path='/artworks' component={Artworks} />
                        <Route exact path='/artworks/new' component={ArtworkForm} />
                    </React.Fragment>
                </Router>
            </div>
        )
    }
}

export default App;