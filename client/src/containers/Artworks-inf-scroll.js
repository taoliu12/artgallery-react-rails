import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ArtworkCard from '../components/ArtworkCard';
import SearchForm from './SearchForm';
import './Artworks.scss';

function ArtworkGallery() {   
  const [searchArtworksResult, setSearchArtworksResult] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchParam, setSearchParam] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log('useEffect loadArtworks');
    loadArtworks();
  }, []);

  const fetchArtworks = async (searchParam, pageNum) => {
    try {
      const response = await fetch(`/artworks?search=${searchParam}&page=${pageNum}`);
      const data = await response.json();       
      setSearchArtworksResult((prevArtworks) => prevArtworks.concat(data));
      setHasMore(data.length > 20);       
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSearchedArtworks = async (searchParam, pageNum) => {
    try {
      const response = await fetch(`/artworks?search=${searchParam}&page=${pageNum}`);
      const data = await response.json();
      console.log('setSearchArtworksResult', data)       
      setSearchArtworksResult([...data]);
      setHasMore(data.length > 20);       
    } catch (error) {
      console.error(error);
    }
  };

  const loadArtworks = () => {
    console.log('page', page)
    fetchArtworks(searchParam, page + 1);
    setPage(page + 1);
  };

  const searchArtworks = () => {     
    fetchSearchedArtworks(searchParam, 1);
  };


  console.log('search new artworks state', searchArtworksResult.length);

  return (    
    <div> 
        <SearchForm setSearchParam={setSearchParam} searchParam={searchParam} searchArtworks={searchArtworks} setPage={setPage}/>  

        <div className='ArtworksContainer'> 
          {searchArtworksResult.map((artwork) => {
            console.log(artwork);
            return <ArtworkCard key={`${artwork.id}-${Date.now()}`} artwork={artwork} />;
          })}
        </div>
        <InfiniteScroll
        dataLength={searchArtworksResult.length}
        next={loadArtworks}
        hasMore={hasMore}
        loader={<div>Loading...</div>}
        >
        </InfiniteScroll>
    </div>
  );
}

export default ArtworkGallery;
