import React, { Component } from 'react';
import './App.css';
import Artworks from './Artworks';

const API_URL = process.env.REACT_APP_API_URL

class App extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            artworks: []
        }
    }

    componentDidMount() {
        // console.log(API_URL)
        // console.log('a')
        fetch(`${API_URL}/artworks`)
        .then(response => response.json())
        .then(artworks => this.setState({ artworks }));
    }

    render() {
        
        return (
            <div className='App'>
                App Container
                <Artworks artworks={this.state.artworks}/>
            </div>
        )
    }
}

export default App;