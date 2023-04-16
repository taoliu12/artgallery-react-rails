import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Artworks from './Artworks';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/artworks" />} />
      <Route path="/artworks" component={Artworks} />
    </Switch>
  );
}

export default App;



import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, IconButton } from '@material-ui/core';
import { Clear } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Search() {
  const classes = useStyles();
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    history.push(`/artworks?search=${searchQuery}`);
    // perform search using searchQuery
  }

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleClearInput = () => {
    setSearchQuery('');
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <IconButton onClick={handleClearInput}>
          <Clear />
        </IconButton>
      </div>
      <InputBase
        placeholder="Search…"
        value={searchQuery}
        onChange={handleSearchInputChange}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
}

export default Search;
