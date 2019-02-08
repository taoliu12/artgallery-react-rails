import { 
    createStore, 
    applyMiddleware,
    combineReducers
  } from 'redux';

import thunk from 'redux-thunk';
  
// import artworks from './reducers/artworks';
// import artworkFormData from './reducers/artworkFormData';

const artworksReducer = (state = [], action) => {
    switch(action.type) {
        case: 'ADD_ARTWORK'
            return action.artworks
        default: 
            return state
    }
}

const reducers = combineReducers({
    artworks: artworksReducer,
})

const middleware = [thunk];

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware),
);