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

		this.createQuestions();
	}

	createQuestions() {
		const arrayLength = this.state.countries.length;
		const random = Math.floor(Math.random() * arrayLength);
		const country = this.state.countries[random].name;
		const capital = this.state.countries[random].capital;
		const answersArray = [
			country,
			this.state.countries[Math.floor(Math.random() * arrayLength)].name,
			this.state.countries[Math.floor(Math.random() * arrayLength)].name,
			this.state.countries[Math.floor(Math.random() * arrayLength)].name,
		];
		const shuffleArray = (array) => {
			for (let i = array.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1));
				let temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
			return array;
		};
		const question = {
			question: `${capital} is the capital of what country?`,
			answers: shuffleArray(answersArray),
		};
		this.setState({
			questions: this.state.questions.concat(question),
		});
	}

	render() {
		const { questions } = this.state;
		return (
			<div className="app-container">
				<div className="question-title">
					<h2>Countries Quiz</h2>
					<img src={QuestionSVG} alt="adventure svg" />
				</div>
				<div className="question-container">
					{questions.length > 0 &&
						questions.map((question) => (
							<div className="question-section">
								<h4>{question.question}</h4>
								<button>A: {question.answers[0]}</button>
								<button>B: {question.answers[1]}</button>
								<button>C: {question.answers[2]}</button>
								<button>D: {question.answers[3]}</button>
							</div>
						))}
				</div>
			</div>
		);
	}
}

export default App;
