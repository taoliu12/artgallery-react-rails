import React, { Component } from 'react';

export default class ArtworkShow extends Component {
    render() {
        return (
            <div className='ArtworkShow'>
                <h3>ArtworkShow</h3>
                <h3>{this.props.match.params.id}</h3>
                {/* <p>{this.props.artworks[this.props.match.params.id].description}</p> */}
            </div>
        )
    }
}