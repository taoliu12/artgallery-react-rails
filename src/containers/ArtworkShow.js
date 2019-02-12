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
            
            <div className='ArtworkShow'>
                <h3>{this.props.artwork.title}</h3>
                <p>{this.props.artwork.description}</p>
                <img src={this.props.artwork.url} />
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
