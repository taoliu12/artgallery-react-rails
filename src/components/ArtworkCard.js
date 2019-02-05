import React, { Component } from 'react';

export default class ArtworkCard extends Component {

    render() {
        return (
            <div className='ArtworkCard'>
                <h3>{this.props.artwork.title}</h3>
                <p>{this.props.artwork.description}</p>
                <img className='ArtworkImage' src={this.props.artwork.url} />
            </div>
        )
    }
}
