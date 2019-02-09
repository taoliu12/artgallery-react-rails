import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArtworkForm extends Component {

    render() {
        return (
            <div className='submit-artwork-form'>
                <h3>Submit a new artwork</h3>
                <form>
                    <div>
                        Title: 
                        <input type='text' name='title' value={this.props.artworkFormData.title}/>
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
