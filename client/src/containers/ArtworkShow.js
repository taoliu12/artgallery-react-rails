import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getArtwork } from '../actions/artworks';
import { useParams } from 'react-router-dom';

const ArtworkShow = ({ artwork, getArtwork }) => {
    const { id } = useParams();

    useEffect(() => {
        getArtwork(id);
    }, [getArtwork, id]);

    return (
        <div className='artwork-show-container'>
            <h2>{artwork.title}</h2>
            <p>{artwork.author}</p>
            <p>{artwork.description}</p>
            <br/>
            <img src={artwork.url} alt="artwork" />
        </div>
    )
}

const mapStateToProps = (state) => ({
    artwork: state.artworks.artwork,
    // isLoading: state.artworks.loading
})

const mapDispatchToProps = ({
    getArtwork
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkShow);

