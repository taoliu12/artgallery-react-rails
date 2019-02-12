const initialState = {
    loading: false,
    artworks: [],
    artwork: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "LOADING_ARTWORKS":
            return {...state, loading: true}
        case 'GET_ARTWORKS':
            return {loading: false, artworks: action.artworks};
        case 'GET_ARTWORK':
                return {loading: false, artwork: action.artwork};
        case 'ADD_ARTWORK':
            // debugger
            return {...state, artworks: state.artworks.concat(action.artwork)}

        default: 
            return state;
    }
}