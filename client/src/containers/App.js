import React, { Component } from 'react';
import './App.css';
import Artworks from './Artworks';

const artworks = [
    {
        title: 'a',
        description: 'b',
        url: 'https://www.gamersdecide.com/sites/default/files/styles/news_images/public/content-images/news/2017/04/27/final-fantasy-15-pc-square-enix-director-wants-bring-ff15-pc/ff15_pc.jpg'
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
    
    constructor(props) {
        super(props)

        this.state = {
            artworks: []
        }
    }

    componentDidMount() {
        fetch('http://192.168.1.23:3000/api/artworks')
        .then(response => response.json())
        .then(artworks => this.setState( { artworks } ));
        console.log(this.state);
    }

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