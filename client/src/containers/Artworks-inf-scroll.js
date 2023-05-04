import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ArtworkCard from '../components/ArtworkCard';
import SearchForm from './SearchForm';
import './Artworks.scss';

function ArtworkGallery() {
  const [artworks, setArtworks] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadArtworks();
  }, []);

  const fetchArtworks = async (pageNum) => {
    try {
      const response = await fetch(`/artworks?page=${pageNum}`);
      const data = await response.json();
      setArtworks((prevArtworks) => prevArtworks.concat(data));
      setHasMore(data.length > 0);
    } catch (error) {
      console.error(error);
    }
  };

  const loadArtworks = () => {
    fetchArtworks(page + 1);
    setPage(page + 1);
  };

  return (    
    <div>       
        <SearchForm />
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
