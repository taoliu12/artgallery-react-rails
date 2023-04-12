import * as React from 'react';
import { useHistory } from 'react-router-dom';
import makeStyles from '@mui/styles/makeStyles';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

import type { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
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

function Search() {
  const classes = useStyles();
  const history = useHistory();

  const searchParams = new URLSearchParams(history.location.search);
  const querySearchText = searchParams.get('search');

  const [searchText, setSearchText] = React.useState(querySearchText ?? '');

  const handleSearch = () => {
    history.push(`/search-results?search=${searchText}`);
  };

  return (
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
          value={searchText}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setSearchText(e.target.value);
          }}
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
  );
}

export default Search;
