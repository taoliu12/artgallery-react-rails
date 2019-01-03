import React, { Component } from 'react';

const Artworks = (props) => (
    <div>
        {props.artworks.map(artwork =>  
            <div>
                <h3>{artwork.title}</h3>
            </div>
        )}
    </div>
);

export default Artworks;