import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="app-container">
				<h2>Countries Quiz</h2>
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
