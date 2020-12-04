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
			currentAnswer: "",
			score: 0,
			answered: false,
		};
		this.createQuestions = this.createQuestions.bind(this);
		this.answerQuestion = this.answerQuestion.bind(this);
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
			currentAnswer: country,
		});
	}

	answerQuestion(e) {
		if (e.target.value === this.state.currentAnswer) {
			e.target.id = "correct";
		} else {
			console.log("False!");
		}
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
						questions.map((question, index) => (
							<div key={index} className="question-section">
								<h4>{question.question}</h4>
								<button
									onClick={this.answerQuestion}
									value={question.answers[0]}
								>
									{question.answers[0]}
								</button>
								<button
									onClick={this.answerQuestion}
									value={question.answers[1]}
								>
									{question.answers[1]}
								</button>
								<button
									onClick={this.answerQuestion}
									value={question.answers[2]}
								>
									{question.answers[2]}
								</button>
								<button
									onClick={this.answerQuestion}
									value={question.answers[3]}
								>
									{question.answers[3]}
								</button>
							</div>
						))}
				</div>
			</div>
		);
	}
}

export default App;
