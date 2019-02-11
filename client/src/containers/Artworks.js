import React, { Component } from 'react';
import './Artworks.css';
import ArtworkCard from "../components/ArtworkCard";
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getArtworks } from '../actions/artworks';
import ArtworkShow from './ArtworkShow';

class Artworks extends Component {
    // constructor(props) {
    //     super(props)
    //     console.log(this.props.artworks)
    // }

    componentDidMount() {
        this.props.getArtworks();

    }

    render() {
        // console.log(this.props.artworks)
        // const artworks = this.props.artworks
        return (
            <div>
                <Route 
                    path='/artworks/:id'  
                    render={
                        routerProps => {
                            // console.log(this.props.artworks)
                            return (
                                <ArtworkShow {...routerProps} />
                            )
                        } 
                    }
                    
                />
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