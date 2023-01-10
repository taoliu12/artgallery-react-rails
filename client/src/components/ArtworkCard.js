import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class ArtworkCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voteCount: 0
         }
    }

    handleClick(e) {
        this.setState({
            voteCount: this.state.voteCount + 1
        })
    }

    render() {
        // debugger
        return (
            <div className='ArtworkCard'>
                {/* <button onClick={this.handleClick}>Vote</button>
                <p>{this.state.voteCount}</p> */}
                <h3>{this.props.artwork.title}</h3>
                <p>by: {this.props.artwork.author}</p>
                <p>{this.props.artwork.description}</p>
                <Link 
                    to={`/artworks/${this.props.artwork.id}`}
                    onClick={() => window.scrollTo(0,0)}
                >
                    <img className='ArtworkImage' src={this.props.artwork.url} />
                </Link>
            </div>
        )
    }
}
