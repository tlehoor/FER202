import React, { useState, useRef } from 'react'; // Import useRef
import { Button, Alert, Card } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './SnapshotDemo.css';

const SnapshotDemo = () => {
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const alertRef = useRef(null); // Create a ref for the Alert

  const handleIncrement = () => {
    setCount(count + 1);
    setShowAlert(false);
  };

  const handleSnapshot = () => {
    setSnapshot(count);
    setShowAlert(true);
  };

  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot);
      setSnapshot(null);
      setShowAlert(false);
    }
  };

  return (
    <Card className="snapshot-card">
      <Card.Header>
        <Card.Title>Snapshot Demo</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="count-display">
          <p>
            Count: <span className="count-value">{count}</span>
          </p>
        </div>
        <div className="button-group">
          <Button
            variant="primary"
            onClick={handleIncrement}
            className="me-2 action-button"
          >
            Increment
          </Button>
          <Button
            variant="secondary"
            onClick={handleSnapshot}
            className="me-2 action-button"
          >
            Take Snapshot
          </Button>
          <Button
            variant="info"
            onClick={handleRestore}
            disabled={snapshot === null}
            className="action-button"
          >
            Restore Snapshot
          </Button>
        </div>

        <CSSTransition
          in={showAlert}
          timeout={300}
          classNames="alert"
          unmountOnExit
          nodeRef={alertRef} // Pass the ref to CSSTransition
        >
          <Alert
            ref={alertRef} // Attach the ref to the Alert component
            variant="success"
            onClose={() => setShowAlert(false)}
            dismissible
            className="mt-3"
          >
            Snapshot taken at count: {snapshot}
          </Alert>
        </CSSTransition>
      </Card.Body>
    </Card>
  );
};

export default SnapshotDemo;