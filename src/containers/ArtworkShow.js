import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtworkCard from "../components/ArtworkCard";
import { getArtworks } from '../actions/artworks';

class ArtworkShow extends Component {

    componentDidMount() {
        // this.props.getArtworks();
    }

    render() { 
        console.log(this.props.artworks)
        // const id = this.props.match.params.id
        // if (this.props.artworks.length > 0 )    {
        //     debugger
        //     artwork = this.props.artworks.find(function(element) {               
        //         return element.id === id;
        //     });
        // }
        // debugger
        return (
            <div className='ArtworkShow'>
                <h3>{ this.props.artworks[parseInt(this.props.match.params.id) - 1] ? <p>{this.props.artworks[parseInt(this.props.match.params.id) - 1].title}</p> : null }</h3>
                
                <p>{ this.props.artworks[parseInt(this.props.match.params.id) - 1] ? <p>{this.props.artworks[parseInt(this.props.match.params.id) - 1].description}</p> : null }</p>
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

export default connect(mapStateToProps)(ArtworkShow);
