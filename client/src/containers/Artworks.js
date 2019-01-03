import React, { Component } from 'react';
import './Artworks.css';
import ArtworkCard from "../components/ArtworkCard";

const Artworks = (props) => (
    <div className='ArtworksContainer'>
        <h3>Artworks</h3>
        {props.artworks.map((artwork) => (
            <ArtworkCard artwork={artwork} />
            )
        )}
    </div>
);

export default Artworks;