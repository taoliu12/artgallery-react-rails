/*
 * For Tips and Advanced Usage read this Blog Post
 * https://levelup.gitconnected.com/integrating-p5-sketches-into-your-react-app-de44a8c74e91
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Sketch from 'react-p5';

export default class ArtworkSketch extends React.Component {
	y = 0;
	direction = '^';

	setup = (p5, parentRef) => {
		p5.createCanvas(200, 200).parent(parentRef);
	};

	draw = (p5) => {
		p5.background(0);
		p5.fill(255, this.y * 1.3, 0);
		p5.ellipse(p5.width / 2, this.y, 50);
		if (this.y > p5.height) this.direction = '';
		if (this.y < 0) {
			this.direction = '^';
		}
		if (this.direction === '^') this.y += 8;
		else this.y -= 4;
	};

	render() {
		return (
			<div className="App">
				<h1>react-p5</h1>
				<Sketch setup={this.setup} draw={this.draw} />
			</div>
		);
	}
}
