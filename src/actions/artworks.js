const API_URL = process.env.REACT_APP_API_URL

// action creator
const displayArtworks = artworks => ({
    type: 'GET_ARTWORKS',
    artworks
})

// thunk action
export const getArtworks = () => {
    return dispatch => {
        return (
            fetch(`${API_URL}/artworks`)
            .then(response => response.json())
            .then(artworks => dispatch(displayArtworks(artworks)))
        )
    }
}