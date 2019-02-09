import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArtworkForm extends Component {

    handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        const updatedData = Object.assign({}, this.props.artworkFormData, { [name]: value });
        this.props.action(updatedData);
    }

    render() {
        return (
            <div className='submit-artwork-form'>
                <h3>Submit a new artwork</h3>
                <form>
                    <div>
                        Title: 
                        <input 
                            type='text'
                            name='title' 
                            value={this.props.artworkFormData.title}
                            onChange={this.handleOnChange}
                        />
                    </div>
                    
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    artworkFormData: state.artworkFormData
})

export default connect(mapStateToProps)(ArtworkForm)
