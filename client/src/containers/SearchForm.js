import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchArtworks } from '../actions/artworks';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Grid, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const CustomIconButton = styled(IconButton)({
  alignSelf: 'center',
  marginLeft: '-60px',
  borderRadius: '50%',
  '&:hover': {
    backgroundColor: '#f2f2f2',
  },
});

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // dispatch(searchArtworks(searchQuery));
    history.push(`/artworks?search=${searchQuery}`);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  return (
    <Box sx={{
      margin: 'auto',
      marginY: '40px',
      minWidth: '344px',
      maxWidth: '400px',
    }}>
      <form onSubmit={handleSearch} >
        <Box sx={{
          display: 'flex'
        }}>
          <TextField 
            fullWidth
            placeholder="Search by title or artist"
            inputProps={{ 'aria-label': 'ex. Vermeer', style: { fontSize: '18px' } }}
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            sx={{ border: 'none', backgroundColor: 'white', borderRadius: '4px' }}
          />
          <CustomIconButton onClick={handleSearch}>
            <SearchIcon fontSize="large" />
          </CustomIconButton>
        </Box>
      </form>
    </Box>
  );
}
