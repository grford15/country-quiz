import React, { Component } from "react";
import QuestionSVG from "./undraw_adventure_4hum 1.svg";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="app-container">
				<div className="question-title">
					<h2>Countries Quiz</h2>
					<img src={QuestionSVG} />
				</div>
				<div className="question-container">
					<h4>Question</h4>
					<button>Answer A</button>
					<button>Answer B</button>
					<button>Answer C</button>
					<button>Answer D</button>
				</div>
			</div>
		);
	}
}

export default App;
