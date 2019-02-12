import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArtwork } from '../actions/artworks';

class ArtworkShow extends Component {
    id = this.props.match.params.id

    componentDidMount() {
        this.props.getArtwork(this.id);
    }

    // componentWillUpdate() {
    //     this.artwork = this.props.artworks.find((element) => {               
    //         return element.id === this.id;
    //     });
    // }

    render() { 
        return (
            
            <div className='ArtworkShow'>
            {this.props.artwork.id}
                {/* {this.artwork ? 
                    <div>
                        <h3>{this.artwork.title}</h3>
                        <p>{this.artwork.description}</p> 
                        <img src={this.artwork.url} />
                    </div>           
                : 
                    <p>Loading...</p>} */}
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
