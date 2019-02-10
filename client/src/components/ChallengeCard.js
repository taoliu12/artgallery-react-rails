import React, { Component } from 'react';

export default class ChallengeCard extends Component {

    render() {
        return (
            <div className='ChallengeCard'>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
