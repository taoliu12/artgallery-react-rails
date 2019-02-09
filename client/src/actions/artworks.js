const API_URL = process.env.REACT_APP_API_URL

// action creator
const displayArtworks = artworks => ({
    type: 'GET_ARTWORKS',
    artworks
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
        
        fetch(`${API_URL}/artworks`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(artwork)
            }
        )
        .then(response => response.json())
        .then(artwork => {
            debugger
        })
    }
}
