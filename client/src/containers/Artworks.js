import React, { Component } from 'react';
import './Artworks.scss';
import ArtworkCard from "../components/ArtworkCard";
import { connect } from 'react-redux';
import { getArtworks, searchArtworks } from '../actions/artworks';
import SearchForm from './SearchForm';
import { withRouter } from 'react-router-dom';

class Artworks extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchQuery: '',
          // other state variables
        };
      }

    componentDidMount() {
        this.props.getArtworks();
    }

    componentDidUpdate(prevProps) {
        const { search } = this.props.location;
        const prevSearchParams = new URLSearchParams(prevProps.location.search);
        const searchParams = new URLSearchParams(search);
        const prevSearchQuery = prevSearchParams.get('search');
        const searchQuery = searchParams.get('search');
        if (searchQuery !== prevSearchQuery && searchQuery == null) {
            this.props.getArtworks(); //refactor into resetArtworks? instead of re-fetching
        } else if (searchQuery !== prevSearchQuery) {
            this.props.searchArtworks(searchQuery)           
        }
      }
    

    render() {
        // debugger
        return (
            <div> 
                <h1 className='site-title'>React Art Gallery</h1>
                <SearchForm/>
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
    getArtworks,
    searchArtworks
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Artworks));