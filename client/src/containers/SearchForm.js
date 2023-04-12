import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchArtworks } from '../actions/artworks';

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchArtworks(searchQuery));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}
