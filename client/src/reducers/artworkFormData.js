export default (state = {
    description: '',
    id: null,
    title: '',
    url: '',
}, action) => {
    switch(action.type) {
        case 'ADD_ARTWORK':
            return action.artworkFormData;
        default:
            return state;
    }
}
