import React, { useReducer } from "react";
import { Button, Container, Card, Row, Col } from "react-bootstrap";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "NEXT_QUESTION":
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        showScore: state.currentQuestion + 1 === state.questions.length, // Show score when all questions are answered
      };

    case "RESTART_QUIZ":
      return {
        ...initialState, // Reset to initial state
      };

    default:
      return state;
  }
}

// Main component
function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore } =
    state;

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="p-4">
            {showScore ? (
              <div className="text-center">
                <h2>
                  Your Score: {score} / {questions.length}
                </h2>
                <Button variant="primary" onClick={handleRestartQuiz}>
                  Restart Quiz
                </Button>
              </div>
            ) : (
              <div>
                <h4 className="mb-3">
                  Question {questions[currentQuestion].id}:
                  <br />
                  {questions[currentQuestion].question}
                </h4>
                <div className="d-grid gap-2">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant={
                        selectedOption === option
                          ? "success"
                          : "outline-secondary"
                      }
                      onClick={() => handleOptionSelect(option)}
                      block // deprecated, but still works for older Bootstrap versions.  Better to use d-grid
                    >
                      {option}
                    </Button>
                  ))}
                </div>

                <div className="d-grid gap-2 mt-3">
                    <Button
                    variant="primary"
                    disabled={!selectedOption}
                    onClick={handleNextQuestion}
                    >
                    {currentQuestion === questions.length - 1
                        ? "Finish Quiz"
                        : "Next Question"}
                    </Button>
                </div>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default QuestionBank;