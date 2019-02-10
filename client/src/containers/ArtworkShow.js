import React, { Component } from 'react';

export default class ArtworkShow extends Component {
    render() {
        return (
            <div className='ArtworkShow'>
                <h3>ArtworkShow</h3>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}