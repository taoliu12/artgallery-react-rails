import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtworkCard from "../components/ArtworkCard";
import { getArtworks } from '../actions/artworks';

class ArtworkShow extends Component {

    componentDidMount() {
        this.props.getArtworks();
    }

    render() { 
        console.log(this.props.artworks)
        let artwork
        const id = this.props.match.params.id
        if (this.props.artworks.length > 0 )    {
            debugger
            artwork = this.props.artworks.find(function(element) {               
                return element.id === id;
            });
        }
        debugger
        return (
            <div className='ArtworkShow'>
                <h3>ArtworkShow</h3>
                <h3>{this.props.match.params.id}</h3>
                <p>{artwork.description}</p>
                {/* <p>{this.props.artworks[1].description}</p> */}
                
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

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkShow);
