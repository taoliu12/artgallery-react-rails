import React, { Component } from 'react';
import './Artworks.css';

const Artworks = (props) => (
    <div className='ArtworksContainer'>
        <h3>Artworks</h3>
        {props.artworks.map(artwork =>  
            <div className='ArtworksCard'>
                <h3>{artwork.title}</h3>
                <p>{artwork.description}</p>
                <img className='ArtworkImage' src={artwork.url} />
            </div>
        )}
    </div>
);

export default Artworks;