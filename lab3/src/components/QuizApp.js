import React, { Component } from 'react';
import Question from './Question';
import Score from './Score';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Import components

class QuizApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    id: 1,
                    question: "What is the capital of France?",
                    options: ["Paris", "London", "Berlin", "Madrid"],
                    answer: "Paris"
                },
                {
                    id: 2,
                    question: "What is the largest planet in our solar system?",
                    options: ["Jupiter", "Saturn", "Mars", "Earth"],
                    answer: "Jupiter"
                },
                // Add more questions here
            ],
            currentQuestion: 0,
            score: 0,
            quizEnd: false,
            selectedAnswers: [], // Array to store selected answers
        };
    }

    handleAnswerSelection = (selectedAnswer) => {
        const { questions, currentQuestion, score, selectedAnswers } = this.state;
        const correctAnswer = questions[currentQuestion].answer;

        // Create a copy of the selectedAnswers array, update it, and set the state
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[currentQuestion] = selectedAnswer;

        this.setState({ selectedAnswers: updatedAnswers }, () => { // Use callback for accurate state
            if (selectedAnswer === correctAnswer) {
                this.setState({ score: score + 1 });
            }

            if (currentQuestion < questions.length - 1) {
                this.setState({ currentQuestion: currentQuestion + 1 });
            } else {
                this.setState({ quizEnd: true });
            }
        });
    };


    handleReset = () => {
        this.setState({
            currentQuestion: 0,
            score: 0,
            quizEnd: false,
            selectedAnswers: [], // Reset selected answers
        });
    }

    render() {
        const { questions, currentQuestion, score, quizEnd, selectedAnswers } = this.state;

        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Quiz Time!</h1>
                    </Col>
                </Row>
                {quizEnd ? (
                    <Row>
                        <Col>
                            <Score score={score} totalQuestions={questions.length} />
                            <Button variant="primary" onClick={this.handleReset}>Play Again</Button>
                        </Col>
                    </Row>
                ) : (
                    <Row>
                        <Col>
                            <Question
                                question={questions[currentQuestion]}
                                onAnswerSelect={this.handleAnswerSelection}
                                selectedAnswer={selectedAnswers[currentQuestion]} // Pass selected answer
                            />
                            <Score score={score} totalQuestions={questions.length} />
                        </Col>
                    </Row>
                )}
            </Container>
        );
    }
}

export default QuizApp;