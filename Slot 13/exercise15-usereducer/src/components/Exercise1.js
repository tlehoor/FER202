import React, { useReducer } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

// Định nghĩa hàm reducer để xử lý các hành động
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  // Sử dụng useReducer để quản lý trạng thái count
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <div className="text-center">
            <h1>Counter: {state.count}</h1>
            <Button
              variant="success"
              className="me-2"
              onClick={() => dispatch({ type: "INCREMENT" })}
            >
              +
            </Button>
            <Button
              variant="danger"
              className="me-2"
              onClick={() => dispatch({ type: "DECREMENT" })}
            >
              -
            </Button>
            <Button
              variant="secondary"
              onClick={() => dispatch({ type: "RESET" })}
            >
              Reset
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Counter;