import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateArtworkFormData } from '../actions/artworkForm'
import { createArtwork } from '../actions/artworks'

class ArtworkForm extends Component {

    handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        const updatedData = Object.assign({}, this.props.artworkFormData, { [name]: value });
        this.props.updateArtworkFormData(updatedData);
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        // console.log(this.props.artworkFormData)
        this.props.createArtwork(this.props.artworkFormData);
    }

    render() {
        return (
            <div className='submit-artwork-form'>
                <h3>Submit a new artwork</h3>

                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        Title: 
                        <input 
                            type='text'
                            name='title' 
                            value={this.props.artworkFormData.title}
                            onChange={this.handleOnChange} />
                    </div>
                    <div>
                        Description: 
                        <input 
                            type='text'
                            name='description' 
                            value={this.props.artworkFormData.description}
                            onChange={this.handleOnChange} />
                    </div>
                    <div>
                        Image URL: 
                        <input 
                            type='text'
                            name='url' 
                            value={this.props.artworkFormData.url}
                            onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <input type='submit' value='Submit' />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    artworkFormData: state.artworkFormData
})

export default connect(mapStateToProps, { updateArtworkFormData, createArtwork })(ArtworkForm)
