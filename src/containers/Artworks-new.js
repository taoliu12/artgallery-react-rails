import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Artworks.scss';
import ArtworkCard from '../components/ArtworkCard';
import SearchForm from './SearchForm';

const Artworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const observer = useRef();
  const loader = useRef();

  useEffect(() => {
    loadArtworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(page)
    if (!isLoading) return;

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    observer.current.observe(loader.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const loadArtworks = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/artworks?page=${page}`);
      setArtworks((prevArtworks) => [...prevArtworks, ...response.data]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>       
        <SearchForm />
        <div className='ArtworksContainer'>
            {artworks?.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}

            <div ref={loader} />
            {isLoading && <div>Loading...</div>}

        </div>
    </div>
  );
};

export default Artworks;
