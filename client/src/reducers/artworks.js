const initialState = {
    loading: false,
    searchResults: [], 
    artworks: [],
    artwork: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "LOADING_ARTWORKS":
            return {...state, loading: true}
        case 'GET_ARTWORKS':             
            return {
                ...state, 
                artworks: action.artworks,
                searchResults: action.artworks
            };
        case 'GET_ARTWORK_SHOW':
                return {...state, artwork: action.artwork};
        case 'ADD_ARTWORK':
            // debugger
            return {...state, artworks: state.artworks.concat(action.artwork)}
        case 'SEARCH_ARTWORKS':
            const query = action.payload.toLowerCase();
            const searchResults = state.artworks.filter(
                (artwork) => artwork.title?.toLowerCase().includes(query) || artwork.author?.toLowerCase().includes(query)
            );
            return {
                ...state,
                searchResults,
            };
        default: 
            return state;
    }
}