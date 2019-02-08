// thunk action
export const getArtworks() => {
    return dispatch => {
        return (
            fetch()
            .then(response => response.json)
            .then(artworks => dispatch(displayArtworks(artworks)))
        )
    }
}

// action creator
const displayArtworks = artworks => ({
    type: 'GET_ARTWORKS'
    artworks
})