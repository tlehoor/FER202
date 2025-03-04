import React, { useReducer, useState } from 'react';
import { Form, Button, ListGroup, Container, Row, Col } from 'react-bootstrap';

// Reducer function to handle list actions
function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

// Initial state for the list
const initialState = {
  items: [],
};

function ItemList() {
  // useReducer to manage the list of items
  const [state, dispatch] = useReducer(listReducer, initialState);

  // useState to manage the input value
  const [newItemName, setNewItemName] = useState("");

  // Function to add a new item to the list
  const handleAddItem = () => {
    if (newItemName.trim() !== "") { // Check for non-empty and non-whitespace input
      const newItem = { id: Date.now(), name: newItemName }; // Create item with a unique id
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName(""); // Reset input after adding item
    }
  };

    // Function to handle pressing Enter key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddItem();
        }
    };

  // Function to remove an item from the list
  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form>
            <Form.Group controlId="formItem">
              <Form.Label>Enter Item:</Form.Label>
              <Form.Control
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                onKeyDown={handleKeyPress} // Listen for Enter key press
                placeholder="Enter item name"
              />
            </Form.Group>
            {/* Center the button */}
            <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleAddItem} className="mt-2">
                    Add Item
                </Button>
            </div>
          </Form>

          <h3 className="mt-4 text-center">Item List:</h3> {/* Center the heading */}
          <ListGroup>
            {state.items.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                {item.name}
                <Button
                  variant="danger"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          {state.items.length === 0 && <p className="text-muted text-center">No items yet.</p>}  {/* Center empty list message */}
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;