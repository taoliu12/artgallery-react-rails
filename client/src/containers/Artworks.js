import React, { Component } from 'react';
import './Artworks.scss';
import ArtworkCard from "../components/ArtworkCard";
import { connect } from 'react-redux';
import { getArtworks } from '../actions/artworks';
import SearchForm from './SearchForm';

class Artworks extends Component {
    componentDidMount() {
        this.props.getArtworks();
    }

    render() {
        // debugger
        return (
            <div> 
                <h1 className='site-title'>React Art Gallery</h1>
                <SearchForm />
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
    artworks: state.artworks.searchResults
})

const mapDispatchToProps = ({
    getArtworks
})

export default connect(mapStateToProps, mapDispatchToProps)(Artworks);