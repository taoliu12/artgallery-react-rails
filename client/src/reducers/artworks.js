export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_ARTWORK':
            return action.artworks;
        default: 
            return state;
    }
}