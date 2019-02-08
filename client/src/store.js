import { 
    createStore, 
    applyMiddleware,
    combineReducers
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
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware),
);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(
//     applyMiddleware(thunk),
//   )
// );

export default store;