import React, { useReducer, useEffect } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa"; // Only import FaTimesCircle

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
  feedback: null,
  timeLeft: 10,
  highScore: 0,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "NEXT_QUESTION":
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      const feedbackMessage = isCorrect
        ? "Correct! 🎉"
        : `Incorrect! The correct answer is: ${
            state.questions[state.currentQuestion].answer
          }`;

      const nextQuestion = state.currentQuestion + 1;
      const newShowScore = nextQuestion === state.questions.length;

      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: nextQuestion,
        selectedOption: "",
        showScore: newShowScore,
        feedback: feedbackMessage,
        timeLeft: 10,
      };

    case "RESTART_QUIZ":
      return { ...initialState, highScore: state.highScore };

    case "SET_FEEDBACK":
      return { ...state, feedback: action.payload };

    case "DECREMENT_TIME":
      return { ...state, timeLeft: state.timeLeft - 1 };

    case "SET_HIGH_SCORE":
      return { ...state, highScore: action.payload };

    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const {
    questions,
    currentQuestion,
    selectedOption,
    score,
    showScore,
    feedback,
    timeLeft,
    highScore,
  } = state;

  useEffect(() => {
    const savedHighScore = localStorage.getItem("highScore");
    if (savedHighScore) {
      dispatch({ type: "SET_HIGH_SCORE", payload: parseInt(savedHighScore) });
    }
  }, []);

  useEffect(() => {
    if (showScore) {
      if (score > highScore) {
        localStorage.setItem("highScore", score);
        dispatch({ type: "SET_HIGH_SCORE", payload: score });
      }
    }
  }, [showScore, score, highScore]);

    useEffect(() => {
    let timer;
    if (!showScore && timeLeft > 0) {
      timer = setInterval(() => {
        dispatch({ type: "DECREMENT_TIME" });
      }, 1000);
    } else if (timeLeft === 0 && !showScore) {
      dispatch({ type: "NEXT_QUESTION" });
    }
    return () => clearInterval(timer);
  }, [timeLeft, showScore,currentQuestion, questions.length]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
    dispatch({ type: "SET_FEEDBACK", payload: null }); // Clear feedback
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  return (
    <Container className="mt-4">
      <Card className="p-4" style={{ backgroundColor: '#f8f9fa' }}> {/* Light background */}
        {showScore ? (
          <div className="text-center">
            <h2>
              Your Score: {score} / {questions.length}
            </h2>
            <p>High Score: {highScore}</p>
            <Button variant="primary" onClick={handleRestartQuiz}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
             <div className="d-flex justify-content-between">
              <h4 style={{ fontWeight: 'bold' }}> {/* Bolder question number */}
                Question {currentQuestion + 1}:
              </h4>
               <p style={{ color: timeLeft <= 5 ? "red" : "black" }}>
                  Time Left: {timeLeft}s
                </p>
            </div>
            <h4 style={{ fontWeight: 'bold' }}>{questions[currentQuestion].question}</h4> {/* Bolder question text */}

            <div className="mt-3 d-flex flex-wrap justify-content-between">  {/* Flexbox for buttons */}
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedOption === option ? "success" : "outline-secondary"}
                  className="m-1 flex-grow-1" // Make buttons fill available space
                  style={{ minWidth: '48%' }}  // Minimum width, prevent shrinking too much
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </Button>
              ))}
            </div>

            {feedback && (
                <div className="mt-3" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}> {/* Larger, bolder feedback */}
                    {feedback.startsWith("Correct") ? (
                        <span style={{ color: "green" }}>
                            {feedback}
                        </span>
                    ) : (
                        <span style={{ color: "red" }}>
                            <FaTimesCircle style={{marginRight: '4px', verticalAlign: 'middle'}}/> {feedback}
                        </span>
                    )}
                </div>
            )}

            <Button
              variant="primary"
              className="mt-3"
              disabled={!selectedOption}
              onClick={handleNextQuestion}
              style={{
                backgroundImage: 'linear-gradient(to right, #0d6efd, #0b5ed7)', /* Blue gradient */
                color: 'white',
                fontWeight: 'bold',
                width: "100%"
              }}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </Button>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;