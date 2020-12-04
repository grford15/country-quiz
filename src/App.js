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
		this.createQuestions = this.createQuestions.bind(this);
	}

	async componentDidMount() {
		await axios("https://restcountries.eu/rest/v2/all")
			.then((res) =>
				this.setState({
					countries: res.data,
				})
			)
			.catch((err) => console.error(err));

		await this.createQuestions();
	}

	createQuestions() {
		const arrayLength = this.state.countries.length;
		const random = Math.floor(Math.random() * arrayLength);
		const country = this.state.countries[random].name;
		const capital = this.state.countries[random].capital;
		const question = {
			question: `${capital} is the capital of what country?`,
			answers: [
				country,
				this.state.countries[Math.floor(Math.random() * arrayLength)].name,
				this.state.countries[Math.floor(Math.random() * arrayLength)].name,
				this.state.countries[Math.floor(Math.random() * arrayLength)].name,
			],
		};
		this.setState({
			questions: this.state.questions.concat(question),
		});
	}

	render() {
		return (
			<div className="app-container">
				<div className="question-title">
					<h2>Countries Quiz</h2>
					<img src={QuestionSVG} alt="adventure svg" />
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
