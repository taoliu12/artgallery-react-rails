import { 
    createStore, 
    applyMiddleware,
    combineReducers
  } from 'redux';

import thunk from 'redux-thunk';
  
import artworks from './reducers/artworks';

const reducers = combineReducers({
    artworks: artworks
})

const middleware = [thunk];

export default createStore(
    reducers,    
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware),

);