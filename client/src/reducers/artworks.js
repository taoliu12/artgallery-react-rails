export default (state = [], action) => {
    // debugger
    // console.log(action.type)
    switch(action.type) {
        case 'GET_ARTWORKS':
            return action.artworks;
        case 'ADD_ARTWORK':
            return state.concat(action.artwork);

        default: 
            return state;
    }
}