import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "../style/Shop.css";

const Shop = ({ cart, setCart, user }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Chuyển hướng nếu chưa đăng nhập
  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
      return;
    }

    // Lấy danh sách sản phẩm từ server
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      }
    };

    fetchProducts();
  }, [user, navigate]);

  // Xử lý thêm vào giỏ hàng
  const handleAddToCart = (product) => {
    if (typeof setCart !== "function") {
      console.error("setCart is not a function. Kiểm tra lại cách truyền props từ App.js.");
      return;
    }

    if (product.status === "upcoming") {
      alert(`${product.name} chưa ra mắt. Vui lòng chờ đến khi sản phẩm có sẵn!`);
      return;
    }

    // Đảm bảo cart là mảng, nếu không thì khởi tạo mảng rỗng
    const currentCart = Array.isArray(cart) ? cart : [];

    // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
    const existingItem = currentCart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = currentCart.map((item) =>
        item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
      setCart(updatedCart);
    } else {
      const newCart = [...currentCart, { ...product, quantity: 1 }];
      setCart(newCart);
    }

    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  // Chuyển hướng đến trang thêm sản phẩm nếu là admin
  const handleNavigateToAddProduct = () => {
    navigate("/add-product");
  };

  // Kiểm tra quyền admin
  const isAdmin = user?.role?.toLowerCase() === "admin";
  console.log("Shop - User role:", user?.role, "Is admin:", isAdmin);

  return (
    <div className="shop-page">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Shop - Danh Sách Sản Phẩm</h2>
          {isAdmin && (
            <Button
              onClick={handleNavigateToAddProduct}
              className="add-product-btn fw-bold px-4 py-2"
              style={{
                borderRadius: "30px",
                transition: "all 0.3s ease",
                backgroundColor: "#4caf50",
                border: "none",
              }}
            >
              Thêm Sản Phẩm
            </Button>
          )}
        </div>
        <Row>
          {products.length === 0 ? (
            <Col>
              <p>Không có sản phẩm nào để hiển thị.</p>
            </Col>
          ) : (
            products.map((product) => (
              <Col md={4} sm={6} key={product.id} className="mb-4">
                <Card className={`product-card ${product.status === "upcoming" ? "upcoming" : ""}`}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <Card.Body>
                    <Card.Title className="product-title">{product.name}</Card.Title>
                    <Card.Text className="product-price">${product.price.toFixed(2)}</Card.Text>
                    <Card.Text className="product-status">
                      {product.status === "available" ? "Available" : "Coming Soon"}
                    </Card.Text>
                    <Button
                      className="add-to-cart-btn w-100"
                      onClick={() => handleAddToCart(product)}
                      disabled={product.status === "upcoming" || isAdmin}
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

// Kiểm tra kiểu dữ liệu của props
Shop.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
    role: PropTypes.string,
  }),
};

export default Shop;
