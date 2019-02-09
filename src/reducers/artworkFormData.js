export default (state = {
    description: '',
    id: null,
    title: '',
    url: '',
}, action) => {
    switch(action.type) {
        case 'UPDATE_DATA':
            return action.artworkFormData;
        default:
            return state;
    }
}
