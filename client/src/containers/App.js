import React, { Component } from 'react';
import './App.css';
import Artworks from './Artworks';
import ArtworkForm from './ArtworkForm';

class App extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            artworks: []
        }
    }

    render() {
        return (
            <div className='App'>
                <ArtworkForm />
                <Artworks artworks={this.state.artworks}/>
            </div>
        )
    }
}

export default App;