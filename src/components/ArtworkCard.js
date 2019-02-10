import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class ArtworkCard extends Component {

    render() {
        return (
            <div className='ArtworkCard'>
                <h3>{this.props.artwork.title}</h3>
                <p>{this.props.artwork.description}</p>
                <Link to={`/artworks/${this.props.artwork.id}`} >
                    <img className='ArtworkImage' src={this.props.artwork.url} />
                </Link>
            </div>
        )
    }
}
