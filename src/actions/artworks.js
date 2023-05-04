const API_URL = process.env.REACT_APP_API_URL

// action creators
const displayArtworks = artworks => ({
    type: 'GET_ARTWORKS',
    artworks
})

const displayArtwork = artwork => ({
    type: 'GET_ARTWORK_SHOW',
    artwork
})

const addArtwork = artwork => ({
    type: 'ADD_ARTWORK',
    artwork
})

export const searchArtworks = (query) => {
    return {
        type: 'SEARCH_ARTWORKS',
        payload: query,
    };
};

// thunk actions
export const getArtworks = () => {     
    return dispatch => {
        dispatch({ type: "LOADING_ARTWORKS" });
        return (
            fetch(`/artworks`)             
            .then(response => response.json())             
            .then(artworks => dispatch(displayArtworks(artworks)))
        )
    }
}

export const getArtwork = (id) => {
    return dispatch => {
        dispatch({ type: "LOADING_ARTWORKS" });
        return (
            fetch(`/artworks/${id}`)
            .then(response => response.json())
            .then(artwork => {
                dispatch(displayArtwork(artwork))
            }
            )
        )
    }
}

export const createArtwork = (artwork) => {
    return dispatch => {
        return (
            fetch(`/artworks`, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(artwork)
                }
            )
            .then(response => response.json())
            .then(artwork =>{
                dispatch( addArtwork(artwork) )}
            )
        )
    }
}

