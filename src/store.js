import { 
    createStore, 
    applyMiddleware,
    combineReducers, 
    compose
  } from 'redux';
import thunk from 'redux-thunk';
  
import artworks from './reducers/artworks';
import artworkFormData from './reducers/artworkFormData';

const rootReducer = combineReducers({
    artworks: artworks,
    artworkFormData: artworkFormData
})

const middleware = [thunk];

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;