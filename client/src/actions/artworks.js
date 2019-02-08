// thunk action
export default dispatch => {
    return () = {
        return (
            fetch()
            .then(response => response.json)
            .then(artworks => dispatch(displayArtworks(artworks)))
        )
    }
}

// action creator
const displayArtworks = artworks => ({
    type:
    artworks
})