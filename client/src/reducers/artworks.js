export default (state = [], action) => {
    // debugger
    // console.log(action.type)
    switch(action.type) {
        case 'GET_ARTWORKS':
            return action.artworks;
        default: 
            return state;
    }
}