// src/MyDropdown.js
import React, { useState } from "react";
import { Dropdown, DropdownButton, Container, Card } from "react-bootstrap";

function MyDropdown() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedText, setSelectedText] = useState("Select an item"); //Added this

    const items = { //Added this for mapping
        "1": "Item 1",
        "2": "Item 2",
        "3": "Item 3",
    };

    const handleSelect = (eventKey, event) => {
        setSelectedItem(eventKey);
        setSelectedText(items[eventKey]); //Added this
    };

    return (
        <Container>
            <Card className="mt-3">
                <Card.Body>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title={selectedText} //Changed this
                        onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey="1">Item 1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Item 2</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Item 3</Dropdown.Item>
                    </DropdownButton>

                    {selectedItem && (
                        <div className="mt-2">
                            <p>You selected: {items[selectedItem]}</p> {/*Changed this*/}
                        </div>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default MyDropdown;