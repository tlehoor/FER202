// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Navbar } from 'react-bootstrap';
import EventHandlingDemo from './components/ex16';
import RenderAndCommitDemo from './components/ex17';
import SnapshotDemo from './components/ex18';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#">React State Demos</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col>
            <Card className="mb-4">
              <Card.Header>
                <Card.Title>Exercise 16: Event Handling</Card.Title>
              </Card.Header>
              <Card.Body>
                <EventHandlingDemo />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-4">
              <Card.Header>
                <Card.Title>Exercise 17: Render and Commit</Card.Title>
              </Card.Header>
              <Card.Body>
                <RenderAndCommitDemo />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-4">
              <Card.Header>
                <Card.Title>Exercise 18: State as a Snapshot</Card.Title>
              </Card.Header>
              <Card.Body>
                <SnapshotDemo />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;