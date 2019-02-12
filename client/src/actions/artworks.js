const API_URL = process.env.REACT_APP_API_URL

// action creators
const displayArtworks = artworks => ({
    type: 'GET_ARTWORKS',
    artworks
})

const displayArtwork = artwork => ({
    type: 'GET_ARTWORK',
    artwork
})

const addArtwork = artwork => ({
    type: 'ADD_ARTWORK',
    artwork
})

// thunk actions
export const getArtworks = () => {
    
    return dispatch => {
        dispatch({ type: "LOADING_ARTWORKS" });
        return (
            fetch(`${API_URL}/artworks`)
            .then(response => response.json())
            .then(artworks => dispatch(displayArtworks(artworks)))
        )
    }
}

export const getArtwork = (id) => {

    return dispatch => {
        dispatch({ type: "LOADING_ARTWORKS" });
        return (
            fetch(`${API_URL}/artworks/${id}`)
            .then(response => response.json())
            .then(artwork => dispatch(displayArtwork(artwork)))
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

