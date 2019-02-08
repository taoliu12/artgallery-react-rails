import React, { Component } from 'react';

export default class ArtworkForm extends Component {

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
