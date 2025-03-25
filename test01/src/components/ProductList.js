import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Products") // Sửa tên mảng thành Products
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Product List</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={`http://localhost:5000${product.image}`} // Sửa đường dẫn ảnh
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  Buy Now - ${product.price.replace("$", "")} {/* Xóa dấu $ */}
                </Card.Text>
                <Link to={`/products/${product.id}`}>
                  <Button variant="info">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductList;
