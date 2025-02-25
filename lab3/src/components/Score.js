import React from 'react';
import { Alert } from 'react-bootstrap';

const Score = ({ score, totalQuestions }) => {
  return (
    <Alert variant="info">
      Your Score: {score} / {totalQuestions}
    </Alert>
  );
};

export default Score;