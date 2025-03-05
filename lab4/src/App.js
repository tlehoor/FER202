import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Quiz, quizData } from "./components/Quiz.js"; 

const QuizContext = React.createContext();

function App() {
    return (
        <QuizContext.Provider value={quizData}>
            <Container>
                <h1 className="text-center my-4">Quiz</h1>
                <Quiz />
            </Container>
        </QuizContext.Provider>
    );
}

export default App;