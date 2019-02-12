import React, { Component } from 'react';
import ChallengeCard from "../components/ChallengeCard";

export default class Challenges extends Component {
    render() {
        return (
            <div>
                <ChallengeCard 
                    title='Monthly Illustration Comic' 
                    description='The theme of the this first NVIDIA Challenge is Metropia 2042. A place and time in the near future where humanity has benefited from revolutions in AI, robotics, autonomous transport, augmented reality and environmental protections. In this challenge, you can choose to visualize the cities, people, vehicles or interior spaces of the near future.' 
                    />
                <ChallengeCard 
                    title='Monthly Digital Painting' 
                    description='In this Challenge you will design, 3D model and render a cityscape of Metropia 2042.  The cityscape will be presented as a still render from two views. A callout sheet of designed elements for the final cityscape design will also be required including wireframes and texture sets (all assets should be created by you—no purchased props). ' 
                    />
            </div>
        )
    }
}