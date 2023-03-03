import React, { Component } from 'react';
import './Artworks.scss';
import ArtworkCard from "../components/ArtworkCard";
import { connect } from 'react-redux';
import { getArtworks } from '../actions/artworks';
import { NavLink } from 'react-router-dom';

class Artworks extends Component {
    componentDidMount() {
        this.props.getArtworks();
    }

    render() {
        // debugger
        return (
            <div> 
                <p className='site-title'>React Art Gallery</p>
                <div className='ArtworksContainer'> 
                    {this.props.artworks.map((artwork) => (
                        <ArtworkCard key={artwork.id} artwork={artwork} />
                    ))}
                </div>              
            </div>  
        )
    }
}

const mapStateToProps = (state) => ({
    artworks: state.artworks.artworks
})

const mapDispatchToProps = ({
    getArtworks
})

export default connect(mapStateToProps, mapDispatchToProps)(Artworks);