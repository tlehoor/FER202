// src/DishesList.js
import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Card, Button, Row, Col, Form } from "react-bootstrap"; // Import Form
import PropTypes from "prop-types";

const DishesList = ({ dishes }) => {
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState(""); // Thêm state cho tìm kiếm

  // Hàm lọc món ăn
  const filteredDishes = dishes.filter((dish) => {
    return (
      dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <h2>Danh sách món ăn</h2>

      {/* Thêm ô input tìm kiếm */}
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Tìm kiếm món ăn..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>

      <Row>
        {filteredDishes.map((dish) => ( // Sử dụng filteredDishes
          <Col key={dish.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="mb-3">
              <Card.Img variant="top" src={dish.image} alt={dish.name} />
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
                <Card.Text>
                  Price: ${parseFloat(dish.price).toFixed(2)}
                </Card.Text>
                <Button variant="primary" onClick={() => addToCart(dish)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
        {filteredDishes.length === 0 && <p>Không tìm thấy món ăn phù hợp.</p>}
    </div>
  );
};

DishesList.propTypes = {
    dishes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default DishesList;