// src/MyAlert.js
import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

function MyAlert() {
  const [show, setShow] = useState(false);

  const handleButtonClick = () => {
    setShow(true);
  };

  const handleAlertClose = () => setShow(false);

  return (
    <div>
      <Button onClick={handleButtonClick}>Show Alert</Button>
      {show && (
        <Alert variant="success" onClose={handleAlertClose} dismissible>
          <Alert.Heading>Success!</Alert.Heading>
          <p>This is a success alert—check it out!</p>
        </Alert>
      )}
    </div>
  );
}

export default MyAlert;