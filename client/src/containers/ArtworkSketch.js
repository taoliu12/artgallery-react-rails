/*
 * For Tips and Advanced Usage read this Blog Post
 * https://levelup.gitconnected.com/integrating-p5-sketches-into-your-react-app-de44a8c74e91
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Sketch, {p5} from 'react-p5';

let saveButton;
let clearButton;

function saveSnowflake() {
  debugger
  // save('snowflake.png');
}

function clearCanvas() {
  // background(127);
}


export default class ArtworkSketch extends React.Component {
	y = 0;
	direction = '^';

	setup = (p5, parentRef) => {p5.createCanvas(500, 500).parent(parentRef);
    saveButton = p5.createButton('save');
    saveButton.mousePressed(saveSnowflake);
    clearButton = p5.createButton('clear');
    clearButton.mousePressed(clearCanvas);
	};



	draw = (p5) => {
		if (p5.mouseIsPressed) {
      p5.fill(88, 44, 111, 111);
    } else {
      p5.fill(255);
    }
    p5.ellipse(p5.mouseX, p5.mouseY, 20, 20);
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
