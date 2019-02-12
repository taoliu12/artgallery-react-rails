import React, { Component } from 'react';
import { connect } from 'react-redux';
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
     
        return (
            
            <div className='ArtworkShow'>
                {this.artwork ? 
                    <div>
                        <h3>{this.artwork.title}</h3>
                        <p>{this.artwork.description}</p> 
                        <img src={this.artwork.url} />
                    </div>           
                : 
                    <p>Loading...</p>}
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
