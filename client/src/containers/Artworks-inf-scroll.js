import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ArtworkCard from '../components/ArtworkCard';
import SearchForm from './SearchForm';
import './Artworks.scss';

function ArtworkGallery() {
  const [artworks, setArtworks] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchParam, setSearchParam] = useState('');
  const [page, setPage] = useState(1);

  console.log(searchParam)

  useEffect(() => {
    loadArtworks();
  }, []);

  const fetchArtworks = async (searchParam, pageNum) => {
    try {
      const response = await fetch(`/artworks?search=${searchParam}&page=${pageNum}`);
      const data = await response.json();
      setArtworks((prevArtworks) => prevArtworks.concat(data));
      setHasMore(data.length > 0);
      console.log('normal fetch', data);
    } catch (error) {
      console.error(error);
    }
  };

  
  const fetchSearchedArtworks = async (searchParam, pageNum) => {
    try {
      const response = await fetch(`/artworks?search=${searchParam}&page=${pageNum}`);
      const data = await response.json();
      setArtworks([...data]);
      setHasMore(data.length > 0);
      console.log('search response', data);
      console.log('search new artworks state', artworks);
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
    console.log('page', page)
    fetchSearchedArtworks(searchParam, 1);
  };

  return (    
    <div>       
        <SearchForm setSearchParam={setSearchParam} searchParam={searchParam} searchArtworks={searchArtworks} setPage={setPage}/>
        <InfiniteScroll
        dataLength={artworks.length}
        next={loadArtworks}
        hasMore={hasMore}
        loader={<div>Loading...</div>}
        >
          <div className='ArtworksContainer'>
            {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
          </div>
        </InfiniteScroll>
    </div>
  );
}

export default ArtworkGallery;
