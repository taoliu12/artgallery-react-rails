export default (state = {
    description: '',
    id: null,
    title: '',
    url: '',
}, action) => {
    switch(action.type) {
        case 'UPDATE_DATA':
            return action.artworkFormData;

        case 'RESET_ARTWORK_FORM':
            // return initial_state;
            alert('a')

        default:
            return state;
    }
}
