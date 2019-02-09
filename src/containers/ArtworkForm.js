import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArtworkForm extends Component {

    render() {
        return (
            <div className='submit-artwork-form'>
                <h3>Submit a new artwork</h3>
                <form>
                    Title: <input type='text'/>
                </form>
            </div>
        )
    }
}

export default connect()(ArtworkForm)
