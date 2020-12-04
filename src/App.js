import React, { Component } from "react";
import QuestionSVG from "./undraw_adventure_4hum 1.svg";
import axios from "axios";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: [],
			questions: [],
		};
	}

	componentDidMount() {
		axios("https://restcountries.eu/rest/v2/all")
			.then((res) =>
				this.setState({
					countries: res.data,
				})
			)
			.catch((err) => console.error(err));
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
