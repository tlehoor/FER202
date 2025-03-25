import React from "react";
import { Navbar, Container, Button, Image, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Menu from "./Menu";
import "../style/Navigation.css";

const Navigation = ({ onLogout, user, cart }) => {
  const navigate = useNavigate();

  // Kiểm tra quyền admin, không nhạy cảm với hoa thường
  const isAdmin = user?.role?.toLowerCase() === "admin";
  console.log("User role:", user?.role, "Is admin:", isAdmin); // Debug

  const handleNavigateToAddProduct = () => {
    navigate("/add-product");
  };

  const handleLogoutClick = () => {
    if (window.confirm("Bạn có chắc chắn muốn đăng xuất?")) {
      onLogout();
      navigate("/login", { replace: true });
    }
  };

  return (
    <Navbar
      expand="lg"
      className="header shadow-lg"
      style={{
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1000,
        background: "#81c784",
      }}
    >
      <Container
        className="d-flex justify-content-between align-items-center"
        style={{ backgroundColor: "#81c784" }}
      >
        <Navbar.Brand as={Link} to="/" style={{ backgroundColor: "#81c784" }}>
          <Image
            src="/images/logo.jpg"
            alt="Logo Pokémon"
            className="logo"
            style={{ height: "50px", objectFit: "contain", backgroundColor: "#81c784" }}
          />
        </Navbar.Brand>

        <Menu style={{ backgroundColor: "#81c784" }} />

        <Nav className="align-items-center" style={{ backgroundColor: "#81c784" }}>
          {user ? (
            <>
              <span className="user-info me-3">
                Xin chào, {user.username} ({user.role})
              </span>
              {isAdmin ? (
                <Button
                  onClick={handleNavigateToAddProduct}
                  className="add-product-btn fw-bold px-4 py-2 me-2"
                  style={{
                    borderRadius: "30px",
                    transition: "all 0.3s ease",
                    backgroundColor: "#4caf50",
                    border: "none",
                  }}
                >
                  Thêm Sản Phẩm
                </Button>
              ) : (
                <Button
                  as={Link}
                  to="/cart"
                  className="available-btn fw-bold px-4 py-2 me-2"
                  style={{
                    borderRadius: "30px",
                    transition: "all 0.3s ease",
                    backgroundColor: "#81c784",
                  }}
                >
                  Giỏ Hàng ({cart.length})
                </Button>
              )}
              <Button
                className="logout-btn fw-bold px-4 py-2"
                onClick={handleLogoutClick}
                style={{
                  borderRadius: "30px",
                  transition: "all 0.3s ease",
                }}
              >
                Đăng Xuất
              </Button>
            </>
          ) : (
            <Button
              as={Link}
              to="/login"
              className="login-btn fw-bold px-4 py-2"
              style={{
                borderRadius: "30px",
                transition: "all 0.3s ease",
                backgroundColor: "#4caf50",
                border: "none",
              }}
            >
              Đăng Nhập
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

Navigation.propTypes = {
  onLogout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
    role: PropTypes.string,
  }),
  cart: PropTypes.array.isRequired,
};

export default Navigation;