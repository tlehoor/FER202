import React, { useReducer, useState, useEffect, useRef } from 'react';
import {
  Form,
  Button,
  ListGroup,
  Container,
  Row,
  Col,
  Dropdown,
  InputGroup,
} from 'react-bootstrap';

// Reducer function to handle list actions
function listReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.item] };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case 'EDIT_ITEM':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.newName } : item
        ),
      };
    case 'SORT_ITEMS':
      return { ...state, sortType: action.sortType };
    case 'SET_FILTER':
        return { ...state, filterText: action.filterText };
    default:
      return state;
  }
}

// Initial state for the list
const initialState = {
  items: [],
  sortType: 'createdTime', // Default sort by created time
  filterText: '',
};

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState('');
  const [editingId, setEditingId] = useState(null); // Track which item is being edited
  const [editedName, setEditedName] = useState('');  // Store the edited name
  const inputRef = useRef(null); // Ref for focusing input

  // Function to add a new item
  const handleAddItem = () => {
    if (newItemName.trim() !== '') {
      const newItem = { id: Date.now(), name: newItemName, createdTime: Date.now() };
      dispatch({ type: 'ADD_ITEM', item: newItem });
      setNewItemName('');
    }
  };

  // Function to handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (editingId) {
        handleSaveEdit();
      } else {
        handleAddItem();
      }
    }
  };

  // Function to remove an item
  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  // Function to start editing an item
  const handleEditItem = (id, name) => {
    setEditingId(id);
    setEditedName(name);
      // Focus input after a short delay to ensure it's rendered
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  // Function to save the edited item
  const handleSaveEdit = () => {
    if (editedName.trim() !== '') {
      dispatch({ type: 'EDIT_ITEM', id: editingId, newName: editedName });
      setEditingId(null);
      setEditedName('');
    }
  };

  // Function to cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedName('');
  };

    // Sorting logic (useEffect for efficiency)
    const sortedItems = React.useMemo(() => {
      let sorted = [...state.items];
        if (state.sortType === 'name') {
          sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else if (state.sortType === 'createdTime') {
          sorted.sort((a, b) => a.createdTime - b.createdTime); //Oldest first
        }
        return sorted;
    }, [state.items, state.sortType]);


      // Filtering logic
    const filteredItems = sortedItems.filter(item =>
        item.name.toLowerCase().includes(state.filterText.toLowerCase())
    );


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
                onKeyDown={handleKeyPress}
                placeholder="Enter item name"
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" onClick={handleAddItem} className="mt-2">
                Add Item
              </Button>
            </div>
          </Form>

            {/* Sort Dropdown */}
          <Dropdown className="mt-3" onSelect={(key) => dispatch({ type: 'SORT_ITEMS', sortType: key })}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Sort by {state.sortType === 'name' ? 'Name' : 'Created Time'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="name">Sort by Name</Dropdown.Item>
              <Dropdown.Item eventKey="createdTime">Sort by Created Time</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


            {/* Filter Input */}
            <InputGroup className="mb-3 mt-3">
                <InputGroup.Text id="filter-input">Filter</InputGroup.Text>
                 <Form.Control
                    placeholder="Search items"
                    aria-label="Search items"
                    aria-describedby="filter-input"
                    value={state.filterText}
                    onChange={(e) => dispatch({ type: 'SET_FILTER', filterText: e.target.value })}
                />
            </InputGroup>

          <h3 className="mt-4 text-center">Item List:</h3>
          <ListGroup>
            {filteredItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                {editingId === item.id ? (
                  <>
                    <Form.Control
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      onKeyDown={handleKeyPress}
                      ref={inputRef}
                    />
                    <Button variant="success" onClick={handleSaveEdit} className="ms-2">
                      Save
                    </Button>
                    <Button variant="secondary" onClick={handleCancelEdit} className="ms-2">
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    {item.name}
                    <div>
                        <Button
                        variant="warning"
                        onClick={() => handleEditItem(item.id, item.name)}
                        className="me-2"
                        >
                        Edit
                        </Button>
                        <Button
                        variant="danger"
                        onClick={() => handleRemoveItem(item.id)}
                        >
                        Remove
                        </Button>
                    </div>
                  </>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
          {filteredItems.length === 0 && (
            <p className="text-muted text-center">No items match your filter.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;