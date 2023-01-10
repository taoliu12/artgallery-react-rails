export default (state = {
    description: '',
    id: null,
    title: '',
    author: '',
    url: '',
}, action) => {
    switch(action.type) {
        case 'UPDATE_DATA':
// debugger
            return action.artworkFormData;

        case 'RESET_ARTWORK_FORM':
            // return initial_state;
            return {
                description: '',
                id: null,
                title: '',
                author: '',
                url: '',
            }

        default:
            return state;
    }
}
