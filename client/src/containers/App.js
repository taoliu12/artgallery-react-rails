import React, { Component } from 'react';
import './App.css';
import Artworks from './Artworks';

const artworks = [
    {
        title: 'a',
        description: 'b',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
    },
    {
        title: 'b',
        description: 'b',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/BioShock_cover.jpg/220px-BioShock_cover.jpg'
    },
    {
        title: 'b',
        description: 'b',
        url: 'https://ahq-assets.s3.amazonaws.com/images/promo/me-andromeda-promo-3.jpg'
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