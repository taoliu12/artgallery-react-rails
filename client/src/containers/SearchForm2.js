import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchArtworks } from '../actions/artworks';
import makeStyles from '@mui/styles/makeStyles';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  searchBar: {
    gridArea: 'searchBar',
    boxShadow: 'none',
    margin: '50px auto',
    width: '70%',
  },
  searchInput: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '70px',
  },
}));

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchArtworks(searchQuery));
  };

  return (
    <>asas
    <div className={classes.searchBar}>
      <Paper
        component="form"
        sx={{
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          boxShadow: 'none',
          border: '1px solid rgba(110, 110, 110, .22)',
          height: '50px',
        }}
      >
        <TextField
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'ex. diapers', style: { fontSize: '18px' } }}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
        <IconButton
          onClick={handleSearch}
          sx={{ paddingRight: '10px', marginLeft: 'auto' }}
          disabled={!searchText}
        >
          <SearchIcon fontSize="large" />
        </IconButton>
      </Paper>
    </div>

    <form onSubmit={handleSubmit}>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
    </>
  );
}
