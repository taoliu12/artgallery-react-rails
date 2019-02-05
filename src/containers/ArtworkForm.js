import React, { Component } from 'react';

export default class ArtworkForm extends Component {

    render() {
        return (
            <div>
                <h3>Submit a new artwork</h3>
                <form>
                    Title: <input type='text'/>
                </form>
            </div>
        )
    }
}
