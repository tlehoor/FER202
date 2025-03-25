import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Products/${id}`) // Sửa tên mảng thành Products
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card>
            <Card.Img
              variant="top"
              src={`http://localhost:5000${product.image}`} // Sửa đường dẫn ảnh
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                Price: ${product.price.replace("$", "")}
              </Card.Text>{" "}
              {/* Xóa dấu $ */}
              <Card.Text>Description: {product.description}</Card.Text>
              <Button variant="secondary" onClick={() => navigate("/products")}>
                Back to List
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetails;
