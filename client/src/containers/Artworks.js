import React, { Component } from 'react';
import './Artworks.scss';
import ArtworkCard from "../components/ArtworkCard";
import SearchForm from './SearchForm';

import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getArtworks, searchArtworks } from '../actions/artworks';
import { useLocation } from 'react-router-dom';

function Artworks({ artworks, getArtworks, searchArtworks }) {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    console.log('getartworks')
    getArtworks();
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('search');
    if (query === null) {
      searchArtworks('');
      setSearchQuery('');
    } else {
      searchArtworks(query);
      setSearchQuery(query);
    }
  }, [location.search, searchArtworks]);

  return (
    <div>       
      <SearchForm />
      <div className='ArtworksContainer'>
        {artworks?.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  artworks: state.artworks.searchResults,
});

const mapDispatchToProps = {
  getArtworks,
  searchArtworks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Artworks);