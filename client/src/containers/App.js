import React, { Component } from 'react';
import './App.css';
import Artworks from './Artworks';

const artworks = [
    {
        title: 'a',
        description: 'b',
        url: 'c'
    },
    {
        title: 'b',
        description: 'b',
        url: 'c'
    },
];



class App extends Component {
    render() {
        return (
            
            <div className='App'>
                App Container
                <Artworks artworks={artworks}/>
            </div>
        )
    }
}

export default App;