const initialState = {
    loading: false,
    artworks: []
}

export default (state = initialState, action) => {
    // debugger
    // console.log(action.type)
    switch(action.type) {
        case "LOADING_ARTWORKS":
            return {...state, loading: true}
        case 'GET_ARTWORKS':
            return {loading: false, artworks: action.artworks};
            // return action.artworks;
        case 'ADD_ARTWORK':
            return state.artworks.concat(action.artwork);

        default: 
            return state;
    }
}