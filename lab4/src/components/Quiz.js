import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export const quizData = [
    {
        question: 'What is ReactJS?',
        answers: ['A JavaScript library for building user interfaces', 'A programming language', 'A database management system'],
        correctAnswer: 'A JavaScript library for building user interfaces'
    },
    {
        question: 'What is JSX?',
        answers: ['A programming language', 'A file format', 'A syntax extension for JavaScript'],
        correctAnswer: 'A syntax extension for JavaScript'
    }
];

export function Quiz() { //Named export!
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
            setScore(prevScore => prevScore + 1);
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
                <Card>
                    <Card.Body>
                        <Card.Title style={{ fontSize: '2.5rem', color: 'red' }}>Quiz Completed!</Card.Title>
                        <Card.Text>Your score: {score}</Card.Text>
                    </Card.Body>
                </Card>
            );
        }

        const currentQuestion = quizData[currentQuestionIndex];

        return (
            <Card>
                <Card.Body>
                    <Card.Title>Question {currentQuestionIndex + 1}</Card.Title>
                    <Card.Text>{currentQuestion.question}</Card.Text>
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
                    <Button variant="danger" className="mt-3" onClick={handleNextQuestion}>
                        {currentQuestionIndex === quizData.length - 1 ? "Finish" : "Next"}
                    </Button>
                </Card.Body>
            </Card>
        );
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={8}>
                    {renderQuestion()}
                </Col>
            </Row>
        </Container>
    );
}