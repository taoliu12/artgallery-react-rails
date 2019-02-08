import { 
    createStore, 
    applyMiddleware,
    combineReducers
  } from 'redux';

import thunk from 'redux-thunk';
  
import artworks from './reducers/artworks';
import artworkFormData from './reducers/artworkFormData';

const reducers = combineReducers({
    artworks: artworks,
    artworkFormData: artworkFormData
})

const middleware = [thunk];

export default createStore(
    reducers,    
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware),

);