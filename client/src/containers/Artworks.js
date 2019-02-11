import React, { Component } from 'react';
import './Artworks.css';
import ArtworkCard from "../components/ArtworkCard";
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getArtworks } from '../actions/artworks';
import ArtworkShow from './ArtworkShow';

class Artworks extends Component {

    componentDidMount() {
        this.props.getArtworks();
    }

    render() {
        return (
            <div>
                <Route path='/artworks/:id' component={ArtworkShow} />
                <h3>Test</h3>
                <div className='ArtworksContainer'>
                    <h3>Artworks</h3>
                    {this.props.artworks.map((artwork) => (

                        <ArtworkCard artwork={artwork} />

                        )
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    artworks: state.artworks
})

const mapDispatchToProps = ({
    getArtworks
})

export default connect(mapStateToProps, mapDispatchToProps)(Artworks);