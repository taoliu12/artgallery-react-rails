const API_URL = process.env.REACT_APP_API_URL

// action creators
const displayArtworks = artworks => ({
    type: 'GET_ARTWORKS',
    artworks
})

const addArtwork = artwork => ({
    type: 'ADD_ARTWORK',
    artwork
})

// thunk actions
export const getArtworks = () => {
    return dispatch => {
        return (
            fetch(`${API_URL}/artworks`)
            .then(response => response.json())
            .then(artworks => dispatch(displayArtworks(artworks)))
        )
    }
}

export const createArtwork = (artwork) => {
    return dispatch => {
        return (
            fetch(`${API_URL}/artworks`, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(artwork)
                }
            )
            .then(response => response.json())
            .then(artwork => dispatch( addArtwork(artwork) )
            )
        )
    }
}
