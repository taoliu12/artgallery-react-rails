import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchArtworks } from '../actions/artworks';
import makeStyles from '@mui/styles/makeStyles';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchArtworks(searchQuery));
  };

  return (
    <Box sx={{
      margin: 'auto',
      mt: '40px',
      width: '444px',
    }}>
      <form onSubmit={handleSearch}>
        <Box sx={{
          display: 'flex',
          boxShadow: 'none',
          margin: 'auto',     
        }}>
            <TextField 
              sx={{ border: 'none', backgroundColor: 'white', width: '100%'}}
              placeholder="Search by title or artist"
              inputProps={{ 'aria-label': 'ex. Vermeer', style: { fontSize: '18px' } }}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IconButton
              onClick={handleSearch}
              sx={{ }} 
            >
              <SearchIcon fontSize="large" />
            </IconButton>
        </Box>
      </form>
    </Box>
    
  );
}
