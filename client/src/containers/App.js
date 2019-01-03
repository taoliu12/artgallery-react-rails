import React, { Component } from 'react';
import './App.css';
import Artworks from './Artworks';



class App extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            artworks: []
        }
    }

    componentDidMount() {
        fetch('http://192.168.1.23:3001/api/artworks')
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