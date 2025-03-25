// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Navbar } from 'react-bootstrap'; // Import Bootstrap components
import EventHandlingDemo from './components/ex1.js';
import MyAlert from './components/ex2.js';
import MyDropdown from './components/ex3.js';
import MyModal from './components/ex4.js';
import MyRadioButton from './components/ex5.js';

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="mb-4">
              <Card.Header>
                <Card.Title>Example 1: Increment Counter</Card.Title>
              </Card.Header>
              <Card.Body>
                <EventHandlingDemo />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Header>
                <Card.Title>Example 2: Show Alert</Card.Title>
              </Card.Header>
              <Card.Body>
                <MyAlert />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
                <Card.Header>
                  <Card.Title>Example 3: Dropdown</Card.Title>
                </Card.Header>
                <Card.Body>
                  <MyDropdown />
                </Card.Body>
              </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-4">
              <Card.Header>
                <Card.Title>Example 4: Modal</Card.Title>
              </Card.Header>
              <Card.Body>
                <MyModal />
              </Card.Body>
            </Card>
            </Col>
        </Row>
        <Row>
          <Col>
            <Card className="mb-4">
              <Card.Header>
                <Card.Title>Example 5: Radio Buttons</Card.Title>
              </Card.Header>
              <Card.Body>
                <MyRadioButton />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;