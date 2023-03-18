import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArtwork } from '../actions/artworks';

class ArtworkShow extends Component {
    id = this.props.match.params.id

    componentDidMount() {
        this.props.getArtwork(this.id);
    }

    render() { 
        return (
            <div className='artwork-show-container'>
                <h2>{this.props.artwork.title}</h2>
                <p>{this.props.artwork.author}</p>
                <p>{this.props.artwork.description}</p>
                <br/>
                <img src={this.props.artwork.url} alt="artwork" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    artwork: state.artworks.artwork,
    // isLoading: state.artworks.loading
})

const mapDispatchToProps = ({
    getArtwork
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkShow);
