import React from 'react'; // No useState needed here
import { ListGroup, Button } from 'react-bootstrap';

const Question = ({ question, onAnswerSelect, selectedAnswer }) => { // Receive selectedAnswer as prop

    const handleOptionClick = (option) => {
        onAnswerSelect(option); // Just notify the parent
    };

    return (
        <div>
            <h2>{question.question}</h2>
            <ListGroup>
                {question.options.map((option, index) => (
                    <ListGroup.Item
                        key={index}
                        action
                        onClick={() => handleOptionClick(option)}
                        disabled={selectedAnswer !== undefined} // Disable if selectedAnswer is defined (not null/undefined)
                        active={selectedAnswer === option}
                    >
                        {option}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default Question;