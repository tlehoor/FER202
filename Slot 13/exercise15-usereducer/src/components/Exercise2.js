import React, { useReducer } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function formReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: '', age: '' });

  const handleChange = (e) => {
    dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAge">
              <Form.Label>Age:</Form.Label>
              <Form.Control
                type="number" // Changed to number for age
                name="age"
                value={state.age}
                onChange={handleChange}
                placeholder="Enter age"
                min="0"       // Optional: Add minimum age
                // pattern="[0-9]*"  //Optional: Ensure only numbers (for older browsers)
              />
            </Form.Group>
          </Form>

          <div>
            <h3>Name: {state.name}</h3>
            <h3>Age: {state.age}</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ChangeNameAge;