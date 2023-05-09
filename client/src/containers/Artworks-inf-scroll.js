import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ArtworkCard from '../components/ArtworkCard';
import SearchForm from './SearchForm';
import './Artworks.scss';

function ArtworkGallery() {
  const [artworks, setArtworks] = useState([]);
  const [searchArtworksResult, setSearchArtworksResult] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchParam, setSearchParam] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadArtworks();
  }, []);

  const fetchArtworks = async (searchParam, pageNum) => {
    try {
      const response = await fetch(`/artworks?search=${searchParam}&page=${pageNum}`);
      const data = await response.json();       
      setArtworks((prevArtworks) => prevArtworks.concat(data));
      setHasMore(data.length > 0);       
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSearchedArtworks = async (searchParam, pageNum) => {
    try {
      const response = await fetch(`/artworks?search=${searchParam}&page=${pageNum}`);
      const data = await response.json();       
      setSearchArtworksResult([...data]);
      setArtworks([]);
      setHasMore(data.length > 0);       
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
        {searchArtworksResult.length}
        <div className='ArtworksContainer'>
          {searchArtworksResult.length > 0 ? (
            <>
              {  console.log('search new artworks state in component', searchArtworksResult.length)}
              {searchArtworksResult.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </>
          ) : (
            <>
            {  console.log('normal artworks state in component', artworks.length)}
              {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </>
          )}

              {/* {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))} */}
    

        </div>
        <InfiniteScroll
        dataLength={artworks.length}
        next={loadArtworks}
        hasMore={hasMore}
        loader={<div>Loading...</div>}
        >
        </InfiniteScroll>

    </div>
  );
}

export default ArtworkGallery;
