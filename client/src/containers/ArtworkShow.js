import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtworkCard from "../components/ArtworkCard";
import { getArtworks } from '../actions/artworks';

class ArtworkShow extends Component {

    id = parseInt(this.props.match.params.id)

    artwork = this.props.artworks.find((element) => {               
        return element.id === this.id;
    });

    render() { 
        console.log(this.artwork)
        
        return (
            <div className='ArtworkShow'>
                {/* {this.props.isLoading ? <p>Loading...</p> : <p>{this.artwork.id}</p>} */}

                <p>{this.props.match.params.id}</p>
                <h3>{ this.props.artworks[parseInt(this.props.match.params.id) - 1] ? <p>{this.props.artworks[parseInt(this.props.match.params.id) - 1].title}</p> : null }</h3>
                
                <p>{ this.props.artworks[parseInt(this.props.match.params.id) - 1] ? <p>{this.props.artworks[parseInt(this.props.match.params.id) - 1].description}</p> : null }</p>

                <img src={ this.props.artworks[parseInt(this.props.match.params.id) - 1] ? this.props.artworks[parseInt(this.props.match.params.id) - 1].url : null } />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    artworks: state.artworks.artworks,
    isLoading: state.artworks.loading
})

const mapDispatchToProps = ({
    getArtworks
})

export default connect(mapStateToProps)(ArtworkShow);
