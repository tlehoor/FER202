// src/EventHandlingDemo.js
import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './EventHandlingDemo.css'; // Import the CSS file

const EventHandlingDemo = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <Card className="demo-card">
      <Card.Header>
        <Card.Title>Event Handling Demo</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="count-display">
          <p>
            Count: <span className="count-value">{count}</span>
          </p>
        </div>
        <div className="button-container">
          <Button
            variant="primary"
            onClick={handleButtonClick}
            className="action-button"
          >
            Increase Count
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventHandlingDemo;