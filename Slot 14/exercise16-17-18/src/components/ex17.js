// src/RenderAndCommitDemo.js
import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './RenderAndCommitDemo.css'; // Import CSS

const RenderAndCommitDemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <Card className="demo-card">
      <Card.Header>
        <Card.Title>Render and Commit Demo</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="count-display">
          <p>
            Count: <span className="count-value">{count}</span>
          </p>
        </div>
        <div className="button-container">
          <Button
            variant="success"
            onClick={handleClick}
            className="action-button"
          >
            Increment
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RenderAndCommitDemo;