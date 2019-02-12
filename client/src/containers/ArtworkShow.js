import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtworkCard from "../components/ArtworkCard";
import { getArtworks } from '../actions/artworks';

class ArtworkShow extends Component {
    id = parseInt(this.props.match.params.id)

    componentDidMount() {
        this.props.getArtworks();
    }

    componentWillUpdate() {
        this.artwork = this.props.artworks.find((element) => {               
            return element.id === this.id;
        });
    }

    render() { 
        console.log(this.artwork)
        
        return (
            
            <div className='ArtworkShow'>
                {this.artwork ? <p>{this.artwork.id}</p> 
                
                : <p>Loading...</p>}
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

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkShow);
