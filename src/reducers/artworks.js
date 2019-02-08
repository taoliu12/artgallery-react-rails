export default (state = [], action) => {
    switch(action.type) {
        case 'GET_ARTWORKS':
            return action.artworks;
        default: 
            return state;
    }
}