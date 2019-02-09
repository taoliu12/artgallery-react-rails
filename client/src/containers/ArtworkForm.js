import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArtworkForm extends Component {

    handleOnChange = () => {
        //update artworkFormData
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
