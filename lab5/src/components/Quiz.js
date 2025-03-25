import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const quizData = [
    {
        question: "What is ReactJS?",
        answers: [
            "A JavaScript library for building user interfaces",
            "A programming language",
            "A database management system",
        ],
        correctAnswer: "A JavaScript library for building user interfaces",
    },
    {
        question: "What is JSX?",
        answers: [
            "A programming language",
            "A file format",
            "A syntax extension for JavaScript",
        ],
        correctAnswer: "A syntax extension for JavaScript",
    },
    {
        question: "Which company developed React?",
        answers: ["Google", "Facebook", "Microsoft"],
        correctAnswer: "Facebook",
    },
];

export function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    useEffect(() => {
        console.log("Current Question Index:", currentQuestionIndex);
    }, [currentQuestionIndex]);

    const handleAnswerSelection = (answer) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestionIndex]: answer,
        });
    };

    const handleNextQuestion = () => {
        const currentQuestion = quizData[currentQuestionIndex];
        if (selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer) {
            setScore((prevScore) => prevScore + 1);
        }

        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizFinished(true);
        }
    };

    const renderQuestion = () => {
        if (quizFinished) {
            return (
                <Card className="text-center p-4 shadow-lg">
                    <Card.Body>
                        <Card.Title style={{ fontSize: "2.5rem", color: "red" }}>
                            🎉 Quiz Completed!
                        </Card.Title>
                        <Card.Text className="fs-4">Your score: <strong>{score}</strong> / {quizData.length}</Card.Text>
                        <Button variant="success" onClick={() => window.location.reload()}>
                            Restart Quiz
                        </Button>
                    </Card.Body>
                </Card>
            );
        }

        const currentQuestion = quizData[currentQuestionIndex];

        return (
            <Card className="shadow p-3">
                <Card.Body>
                    <Card.Title className="fw-bold fs-4">
                        Question {currentQuestionIndex + 1}
                    </Card.Title>
                    <Card.Text className="fs-5">{currentQuestion.question}</Card.Text>
                    <Form>
                        {currentQuestion.answers.map((answer, index) => (
                            <Form.Check
                                key={index}
                                type="radio"
                                id={`question-${currentQuestionIndex}-${index}`}
                                label={answer}
                                name={`question-${currentQuestionIndex}`}
                                value={answer}
                                checked={selectedAnswers[currentQuestionIndex] === answer}
                                onChange={() => handleAnswerSelection(answer)}
                            />
                        ))}
                    </Form>
                    <Button
                        variant="danger"
                        className="mt-3"
                        onClick={handleNextQuestion}
                        disabled={!selectedAnswers[currentQuestionIndex]}
                    >
                        {currentQuestionIndex === quizData.length - 1 ? "Finish" : "Next"}
                    </Button>
                </Card.Body>
            </Card>
        );
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col xs={12} md={8}>{renderQuestion()}</Col>
            </Row>
        </Container>
    );
}
